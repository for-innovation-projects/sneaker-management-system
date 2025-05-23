import { CopyOutlined } from '@ant-design/icons';
import {
  Badge,
  Button,
  Card,
  Form,
  Input,
  message,
  Popover,
  Space,
  Table,
  TableColumnsType,
} from 'antd';
import React from 'react';
import ItemBtn from './ItemBtn';
import { add_return_goods_api_wechatorder_pc_return_post } from '@/request-apis/sneaker-service/Order'

const ExpandedRowRender: React.FC<
  IApi.ProductResponse & {
    orderId: number;
    orderStatus: number;
    addressInfo: {
      delivery_name?: string;
      delivery_phone?: string;
      return_address?: string;
    };
    reload?: () => void;
  }
> = (props) => {
  const expandColumns: TableColumnsType<IApi.ProductInfoResponse> = [
    { title: '尺码', dataIndex: 'size', key: 'size' },
    { title: '数量', dataIndex: 'number', key: 'number' },
    { title: '单价', dataIndex: 'price', key: 'price' },
    {
      title: '状态',
      key: 'status',
      render: (item) => {
        if (item.status === 1) {
          return <Badge status="success" text="未发货" />;
        }
        if (item.status === 2) {
          return <Badge status="warning" text="发货中" />;
        }
        if (item.status === 3) {
          return <Badge status="error" text="不发货" />;
        }
        if (item.status === 4) {
          return <Badge status="error" text="退货" />;
        }
        return <Badge status="error" text="未知" />;
      },
    },
    {
      title: '操作',
      key: 'operation',
      render: (item) => (
        <Space size="middle">
          <ItemBtn
            defaultValue={item.price}
            order_id={props.orderId}
            product_info_id={item.id}
            product_id={props.id}
            reload={props.reload}
          ></ItemBtn>
          {props.orderStatus === 3 && (
            <Popover
              title={null}
              trigger="click"
              content={
                <>
                  <Card
                    title="退货地址"
                    size="small"
                    extra={
                      <CopyOutlined
                        style={{
                          marginLeft: 4,
                          cursor: 'pointer',
                          color: '#1677ff',
                        }}
                        onClick={(e) => {
                          navigator.clipboard
                            .writeText(
                              `姓名：${props.addressInfo.delivery_name}\n手机号：${props.addressInfo.delivery_phone}\n详细地址：${props.addressInfo.return_address}`,
                            )
                            .then(() => {
                              message.success('复制成功');
                            });
                        }}
                      />
                    }
                    style={{ width: 300 }}
                  >
                    <p>姓名：{props.addressInfo.delivery_name}</p>
                    <p>手机号：{props.addressInfo.delivery_phone}</p>
                    <p>详细地址：{props.addressInfo.return_address}</p>
                  </Card>
                   <Form
                    style={{ marginTop: '20px' }}
                    size="small"
                    name="expandForm"
                    autoComplete="off"
                    onFinish={(formData) => {
                      add_return_goods_api_wechatorder_pc_return_post({
                        params: {
                          product_id: props.id,
                          order_id: props.orderId,
                          ...formData,
                        },
                      }).then((res) => {
                        // @ts-ignore
                        if (res.code === 1) {
                          props.reload?.();
                        }
                      });
                    }}
                  >
                    <Form.Item
                      label="物流商"
                      name="return_delivery_site"
                      rules={[{ required: true, message: '必须输入' }]}
                    >
                      <Input />
                    </Form.Item>
                    <Form.Item
                      label="快递单号"
                      name="return_tracking_code"
                      rules={[{ required: true, message: '必须输入' }]}
                    >
                      <Input />
                    </Form.Item>
                    <Form.Item label={null}>
                      <Button type="primary" htmlType="submit">
                        退货
                      </Button>
                    </Form.Item>
                  </Form>
                </>
              }
            >
              <a>退货</a>
            </Popover>
          )}
        </Space>
      ),
    },
  ];
  return (
    <Table<IApi.ProductInfoResponse>
      columns={expandColumns}
      rowKey="size"
      dataSource={props.product_infos || []}
      pagination={false}
    />
  );
};

export default ExpandedRowRender;
