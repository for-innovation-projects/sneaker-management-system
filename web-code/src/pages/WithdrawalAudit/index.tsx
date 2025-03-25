import type { ProColumns } from '@ant-design/pro-components';
import { ProTable } from '@ant-design/pro-components';
import { Popconfirm } from 'antd';

export type TableListItem = {
  key: number;
  date: number;
  status: number;
  name: string;
  phone: string;
  idCard: string;
  zfbNumberr: string;
  money: string;
};
const tableListDataSource: TableListItem[] = [];

for (let i = 0; i < 5; i += 1) {
  tableListDataSource.push({
    key: i,
    date: Date.now(),
    name: '倪明晨',
    phone: '17345899634',
    idCard: '2305788998415599784122',
    zfbNumberr: '17345899634',
    status: i % 2,
    money: '20',
  });
}

export default () => {
  const columns: ProColumns<TableListItem>[] = [
    {
      title: '姓名',
      dataIndex: 'name',
    },
    {
      title: '手机号',
      dataIndex: 'phone',
    },
    {
      title: '身份证号',
      dataIndex: 'idCard',
      ellipsis: true,
      copyable: true,
    },
    {
      title: '支付宝账号',
      dataIndex: 'zfbNumberr',
      ellipsis: true,
      copyable: true,
    },
    {
      title: '提现金额',
      dataIndex: 'money',
      ellipsis: true,
      copyable: true,
      search: false,
    },
    {
      title: '订单状态',
      dataIndex: 'status',
      valueType: 'select',
      valueEnum: {
        0: { text: '未打款', status: 'Processing' },
        1: { text: '已打款', status: 'Success' },
      },
    },
    {
      title: '创建时间',
      dataIndex: 'date',
      valueType: 'dateTime',
      search: false,
    },
    {
      title: '操作',
      width: 180,
      key: 'option',
      valueType: 'option',
      render: (_, item) => [
        <Popconfirm
          title="确认是否已到账"
          description="确认后用户会短信收到通知"
          okText="确定"
          cancelText="取消"
        >
          <a key="link">打款</a>
        </Popconfirm>,
      ],
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
        search={{
          collapsed: false,
        }}
        rowKey="key"
        dateFormatter="string"
      />
    </>
  );
};
