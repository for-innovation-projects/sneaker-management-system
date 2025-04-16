import VerificationCodeFormItem from '@/components/VerificationCodeFormItem';
import type { ActionType, ProColumns } from '@ant-design/pro-components';
import { ProTable } from '@ant-design/pro-components';
import {
  Button,
  Form,
  Input,
  InputNumber,
  message,
  Modal,
  Popconfirm,
  Popover,
} from 'antd';
import { useMemo, useRef, useState } from 'react';
import OrderEdit from './components/OrderEdit';
import { get_orders_pc_api_wechatorder_pc_orders_get, update_orders_pc_api_wechatorder_pc_orders_patch } from '@/request-apis/sneaker-service/Order';

const { TextArea } = Input;

export default () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [productInfo, setProductInfo] = useState<IApi.Products>([]);
  const [orderId, setOrderId] = useState<number>(0);
  const [allPrice, setAllPrice] = useState<number>(0);
  const [loading, setLoading] = useState(false);
  const actionRef = useRef<ActionType>(null);

  const okText = useMemo(() => {
    // if (orderId === 0) {
    //   return <>报价完成</>;
    // }
    // if (orderId === 3 || orderId === 2) {
    //   return (
    //     <Popover
    //       title="打钱"
    //       trigger="click"
    //       content={
    //         <Form size="small" name="optionForm" autoComplete="off">
    //           <Form.Item
    //             label="金额"
    //             name="username"
    //             rules={[{ required: true, message: '必须输入' }]}
    //           >
    //             <InputNumber />
    //           </Form.Item>
    //           <Form.Item
    //             label="验证码"
    //             name="password"
    //             rules={[
    //               {
    //                 required: true,
    //                 message: '必须输入',
    //               },
    //             ]}
    //           >
    //             <VerificationCodeFormItem />
    //           </Form.Item>
    //           <Form.Item label={null}>
    //             <Button type="primary" htmlType="submit">
    //               打钱
    //             </Button>
    //           </Form.Item>
    //         </Form>
    //       }
    //     >
    //       完成订单（打钱）
    //     </Popover>
    //   );
    // }
    return <>确定</>;
  }, [productInfo]);
  const columns: ProColumns<IApi.OrderDetailResponse>[] = [
    {
      title: '订单号',
      dataIndex: 'id',
      ellipsis: true,
      copyable: true,
    },
    {
      title: '用户姓名',
      dataIndex: 'name',
      copyable: true,
    },
    {
      title: '用户手机号',
      dataIndex: 'phone',
      copyable: true,
    },
    {
      title: '订单状态',
      dataIndex: 'status',
      valueType: 'select',
      valueEnum: {
        1: { text: '等待报价', status: 'Processing' },
        2: { text: '等待用户选择发货', status: 'Processing' },
        3: { text: '等待收货', status: 'Processing' },
        4: { text: '退货待确认', status: 'Processing' },
        5: { text: '订单完结', status: 'Success' },
        6: { text: '未提交', status: 'Error' },
      },
    },
    {
      title: '更新时间',
      dataIndex: 'update_time',
      valueType: 'dateTime',
      search: false,
    },
    {
      title: '创建时间',
      dataIndex: 'create_time',
      valueType: 'dateTime',
      search: false,
    },
    {
      title: '操作',
      width: 230,
      key: 'option',
      valueType: 'option',
      render: (_, item) => {
        if (item.status === 5) {
          return [
            <Button disabled style={{ padding: 0 }} type="link" key="link2">
              订单处理
            </Button>,
            <Popconfirm
              title="关闭订单"
              description="关闭后订单将立刻结束"
              onConfirm={() => { }}
              onCancel={() => { }}
              okText="确认"
              cancelText="取消"
            >
              <Button disabled style={{ padding: 0 }} type="link" key="link3">
                订单关闭
              </Button>
            </Popconfirm>,
            <Button style={{ padding: 0 }} type="link" key="link">
              订单导出
            </Button>,
          ];
        }
        return [
          <Button
            style={{ padding: 0 }}
            key="link2"
            type="link"
            onClick={() => {
              setOrderId(item.id)
              setProductInfo(item.products);
              setIsModalOpen(true);
            }}
          >
            订单处理
          </Button>,
          <Popconfirm
            title="关闭订单"
            description="关闭后订单将立刻结束"
            onConfirm={() => { }}
            onCancel={() => { }}
            okText="确认"
            cancelText="取消"
          >
            <Button style={{ padding: 0 }} type="link" key="link3">
              订单关闭
            </Button>
          </Popconfirm>,
          <Button style={{ padding: 0 }} type="link" key="link">
            订单导出
          </Button>,
        ];
      },
    },
  ];
  return (
    <>
      <ProTable<IApi.OrderDetailResponse>
        columns={columns}
        actionRef={actionRef}
        request={(params) => {
          return new Promise((resolve) => {
            // 表单搜索项会从 params 传入，传递给后端接口。
            const { pageSize, current, id, ...rest } = params;
            get_orders_pc_api_wechatorder_pc_orders_get({
              params: {
                page: current,
                page_size: pageSize,
                order_id: id,
                ...rest,
              },
            }).then((res) => {
              //@ts-ignore
              if (res.code === 1) {
                resolve({
                  data: (res.data?.map((i: any) => ({ ...i, id: i.id.toString() })) as any) || [],
                  success: true,
                });
              } else {
                resolve({
                  success: false,
                });
              }
            })
              .catch(() => {
                resolve({
                  success: false,
                });
              });
          })
        }}
        rowKey="id"
        dateFormatter="string"
        search={{
          collapsed: false,
        }}
      />
      <Modal
        title={'处理订单'}
        open={isModalOpen}
        width="80vw"
        loading={loading}
        okText={okText}
        onOk={() => {
          setLoading(true);
          update_orders_pc_api_wechatorder_pc_orders_patch({
            params: {
              order_id: orderId,
            },
            data: {
              finally_cost: allPrice,
            }
          }).then(res => {
            // @ts-ignore
            if (res.code === 1) {
              setIsModalOpen(false);
              actionRef.current?.reloadAndRest?.();
              message.success('设置成功');
            } else {
              message.error(res.msg || '设置失败');
            }
          }).finally(() => {
            setLoading(false);
          })
        }}
        onCancel={() => setIsModalOpen(false)}
        destroyOnClose
      >
        <>
          <OrderEdit orderId={orderId} itemInfo={productInfo} reload={() => {
            actionRef.current?.reloadAndRest?.();
          }}></OrderEdit>
          <div style={{ display: 'flex', justifyContent: 'right' }}>
            <InputNumber
              value={allPrice}
              onChange={(value) => setAllPrice(value || 0)}
              addonBefore="总价："
              precision={2}
              style={{ width: '20%' }}
              step="0.01" />
          </div>
        </>
      </Modal>
    </>
  );
};
