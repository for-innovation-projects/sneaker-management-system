import type { ProColumns } from '@ant-design/pro-components';
import { ProTable } from '@ant-design/pro-components';
import { Input, Modal, Popconfirm } from 'antd';
import { useState } from 'react';

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
  const [modalId, setModalId] = useState('');
  const [addressInfo, setAddressInfo] = useState('');

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
      width: 200,
      key: 'option',
      valueType: 'option',
      render: (_, item) => {
        if (item.status === 5) {
          return [
            <a disabled key="link2">
              订单处理
            </a>,
            <Popconfirm
              title="关闭订单"
              description="关闭后订单将立刻结束"
              onConfirm={() => {}}
              onCancel={() => {}}
              okText="确认"
              cancelText="取消"
            >
              <a disabled key="link3">
                订单关闭
              </a>
            </Popconfirm>,
            <a key="link">订单导出</a>,
          ];
        }
        return [
          <a key="link2">订单处理</a>,
          <Popconfirm
            title="关闭订单"
            description="关闭后订单将立刻结束"
            onConfirm={() => {}}
            onCancel={() => {}}
            okText="确认"
            cancelText="取消"
          >
            <a key="link3">订单关闭</a>
          </Popconfirm>,
          <a key="link">订单导出</a>,
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
        title={modalId ? '修改地址' : '创建地址'}
        open={isModalOpen}
        onOk={() => {}}
        onCancel={() => setIsModalOpen(false)}
      >
        <TextArea value={addressInfo} rows={4} />
      </Modal>
    </>
  );
};
