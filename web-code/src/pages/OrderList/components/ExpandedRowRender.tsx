import { Badge, Space, Table, TableColumnsType } from 'antd';
import { TableListItem, TableListItemInfo } from './OrderEdit';

const expandColumns: TableColumnsType<TableListItemInfo> = [
  { title: '尺码', dataIndex: 'size', key: 'size' },
  { title: '数量', dataIndex: 'number', key: 'number' },
  { title: '单价（用户不会看到）', dataIndex: 'money', key: 'money' },
  { title: '用户描述', dataIndex: 'desc', key: 'desc' },
  {
    title: '状态',
    key: 'status',
    render: () => <Badge status="success" text="Finished" />,
  },
  {
    title: '操作',
    key: 'operation',
    render: () => (
      <Space size="middle">
        <a>修改报价</a>
        <a>实物不符</a>
        <a>退货</a>
      </Space>
    ),
  },
];

const ExpandedRowRender: React.FC<TableListItem> = (props) => {
  return (
    <Table<TableListItemInfo>
      columns={expandColumns}
      rowKey="size"
      dataSource={props.info}
      pagination={false}
    />
  );
};

export default ExpandedRowRender;
