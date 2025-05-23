import { Badge, Space, Table, TableColumnsType } from 'antd';
import React from 'react';
import ItemBtn from './ItemBtn';
import PopoverReturn from './PopoverReturn';

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
          {item.status !== 4 && (
            <ItemBtn
              defaultValue={item.price}
              order_id={props.orderId}
              product_info_id={item.id}
              product_id={props.id}
              reload={props.reload}
            ></ItemBtn>
          )}
          {props.orderStatus === 3 && item.status !== 4 && (
            <PopoverReturn {...props} item={item}></PopoverReturn>
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
