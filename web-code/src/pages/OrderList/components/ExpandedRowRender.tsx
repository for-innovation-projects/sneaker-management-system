import { Badge, Space, Table, TableColumnsType } from 'antd';

const expandColumns: TableColumnsType<IApi.ProductInfoResponse> = [
  { title: '尺码', dataIndex: 'size', key: 'size' },
  { title: '数量', dataIndex: 'number', key: 'number' },
  { title: '单价（用户不会看到）', dataIndex: 'money', key: 'money' },
  {
    title: '状态',
    key: 'status',
    render: (item) => {
      if (item.status === 1) {
        return <Badge status="success" text="正常" />
      }
      if (item.status === 2) {
        return <Badge status="warning" text="取消" />
      }
      if (item.status === 3) {
        return <Badge status="error" text="退货" />
      }
      return <Badge status="error" text="未知" />
    },
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

const ExpandedRowRender: React.FC<IApi.ProductResponse> = (props) => {
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
