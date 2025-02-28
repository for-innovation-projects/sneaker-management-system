import VerificationCodeFormItem from '@/components/VerificationCodeFormItem';
import type { ProColumns } from '@ant-design/pro-components';
import { ProTable } from '@ant-design/pro-components';
import {
  Button,
  Form,
  Input,
  InputNumber,
  Modal,
  Popconfirm,
  Popover,
} from 'antd';
import { useMemo, useState } from 'react';
import OrderEdit from './components/OrderEdit';

const { TextArea } = Input;

export type TableListItem = {
  key: number;
  orderId: string;
  name: string;
  phone: string;
  status: number;
  date: number;
};
const tableListDataSource: TableListItem[] = [];

for (let i = 0; i < 6; i += 1) {
  tableListDataSource.push({
    key: i,
    orderId: 'xxxx-545478851212',
    name: '张三' + i,
    phone: '17349867499',
    status: i % 6,
    date: Date.now(),
  });
}

export default () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [orderId, setOrderId] = useState<number>();
  const okText = useMemo(() => {
    if (orderId === 0) {
      return <>报价完成</>;
    }
    if (orderId === 3 || orderId === 2) {
      return (
        <Popover
          title="打钱"
          trigger="click"
          content={
            <Form size="small" name="optionForm" autoComplete="off">
              <Form.Item
                label="金额"
                name="username"
                rules={[{ required: true, message: '必须输入' }]}
              >
                <InputNumber />
              </Form.Item>
              <Form.Item
                label="验证码"
                name="password"
                rules={[
                  {
                    required: true,
                    message: '必须输入',
                  },
                ]}
              >
                <VerificationCodeFormItem />
              </Form.Item>
              <Form.Item label={null}>
                <Button type="primary" htmlType="submit">
                  打钱
                </Button>
              </Form.Item>
            </Form>
          }
        >
          完成订单（打钱）
        </Popover>
      );
    }
    return <>确定</>;
  }, [orderId]);
  const columns: ProColumns<TableListItem>[] = [
    {
      title: '订单号',
      dataIndex: 'orderId',
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
        0: { text: '等待报价', status: 'Processing' },
        1: { text: '等待用户选择发货', status: 'Processing' },
        2: { text: '等待收货', status: 'Processing' },
        3: { text: '退货待确认', status: 'Processing' },
        4: { text: '订单完结', status: 'Success' },
        5: { text: '未提交', status: 'Error' },
      },
    },
    {
      title: '更新时间',
      dataIndex: 'date',
      valueType: 'dateTime',
      search: false,
    },
    {
      title: '创建时间',
      dataIndex: 'date',
      valueType: 'dateTime',
      search: false,
    },
    {
      title: '时间范围',
      key: 'dateTimeRange',
      dataIndex: 'dateTimeRange',
      hideInTable: true,
      valueType: 'dateTimeRange',
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
              onConfirm={() => {}}
              onCancel={() => {}}
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
              setOrderId(item.key);
              setIsModalOpen(true);
            }}
          >
            订单处理
          </Button>,
          <Popconfirm
            title="关闭订单"
            description="关闭后订单将立刻结束"
            onConfirm={() => {}}
            onCancel={() => {}}
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
      <ProTable<TableListItem>
        columns={columns}
        request={(params, sorter, filter) => {
          // 表单搜索项会从 params 传入，传递给后端接口。
          console.log(params, sorter, filter);
          return Promise.resolve({
            data: tableListDataSource,
            success: true,
          });
        }}
        rowKey="key"
        dateFormatter="string"
        search={{
          collapsed: false,
        }}
      />
      <Modal
        title={'处理订单'}
        open={isModalOpen}
        width="80vw"
        okText={okText}
        onOk={() => {}}
        onCancel={() => setIsModalOpen(false)}
      >
        <>
          <OrderEdit></OrderEdit>
        </>
      </Modal>
    </>
  );
};
