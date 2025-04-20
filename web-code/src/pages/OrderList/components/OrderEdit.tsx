import type { ProColumns } from '@ant-design/pro-components';
import { ProTable } from '@ant-design/pro-components';
import { Image, Modal, Space, Typography } from 'antd';
import React, { useState } from 'react';
import ExpandedRowRender from './ExpandedRowRender';

const OrderEdit: React.FC<{
  itemInfo: IApi.Products;
  orderId: number;
  reload?: () => void;
  fatherItem?: IApi.OrderDetailResponse;
}> = (props) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [curItem, setCurItem] = useState<IApi.ProductResponse>();

  const columns: ProColumns<IApi.ProductResponse>[] = [
    {
      title: '品牌名',
      dataIndex: 'product_name',
      ellipsis: true,
      copyable: true,
    },
    {
      title: '货号',
      dataIndex: 'product_code',
      ellipsis: true,
      copyable: true,
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
      width: 200,
      key: 'option',
      valueType: 'option',
      render: (_, item) => {
        return [
          <a
            key="link2"
            onClick={() => {
              setIsModalOpen(true);
              setCurItem(item);
            }}
          >
            图片查看
          </a>,
        ];
      },
    },
  ];
  const closeModal = () => {
    setIsModalOpen(false);
  };
  return (
    <>
      <ProTable<IApi.ProductResponse>
        pagination={false}
        columns={columns}
        scroll={{
          y: '45vh',
        }}
        toolbar={{
          style: { display: 'none' },
        }}
        size="small"
        request={(params) => {
          let data = props.itemInfo;
          if (params.product_name) {
            data = data.filter((item) =>
              item.product_name.includes(params.product_name),
            );
          }
          if (params.product_code) {
            data = data.filter((item) =>
              item.product_code.includes(params.product_code),
            );
          }
          // 表单搜索项会从 params 传入，传递给后端接口。
          return Promise.resolve({
            data,
            success: true,
          });
        }}
        rowKey="id"
        dateFormatter="string"
        search={{
          collapsed: false,
        }}
        expandable={{
          expandedRowRender: (item) => (
            <ExpandedRowRender
              {...item}
              orderStatus={props.fatherItem?.status || 0}
              orderId={props.orderId}
              reload={() => {
                props.reload?.();
              }}
            ></ExpandedRowRender>
          ),
        }}
      />
      <Modal
        title="瑕疵和图片"
        width="60vw"
        open={isModalOpen}
        onOk={closeModal}
        onCancel={closeModal}
        footer={null}
      >
        <Space direction="vertical" size="middle" style={{ display: 'flex' }}>
          <Typography.Paragraph>{curItem?.description}</Typography.Paragraph>
          <Space wrap>
            {curItem?.product_urls?.map((item) => {
              return <Image width={200} src={item.url} />;
            })}
          </Space>
        </Space>
      </Modal>
    </>
  );
};

export default OrderEdit;
