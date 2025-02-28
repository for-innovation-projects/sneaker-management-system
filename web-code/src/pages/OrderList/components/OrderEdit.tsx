import type { ProColumns } from '@ant-design/pro-components';
import { ProTable } from '@ant-design/pro-components';
import { Image, Modal, Space, Typography } from 'antd';
import { useState } from 'react';
import ExpandedRowRender from './ExpandedRowRender';

export interface TableListItemInfo {
  size: string;
  number: number;
  desc: string;
  money: string;
  status: number;
  sure: boolean;
}

export type TableListItem = {
  key: number;
  shopName: string;
  noNumber: string;
  info?: TableListItemInfo[];
  imageList: string[];
  desc?: string;
  date: number;
};
const tableListDataSource: TableListItem[] = [];

for (let i = 0; i < 4; i += 1) {
  const arr: any[] = [1];
  for (let j = 0; j < i; j++) {
    arr.push(j);
  }
  tableListDataSource.push({
    key: i,
    shopName: '品牌A' + i,
    noNumber: 'D-aaxx-ss' + i,
    info: arr.map((_, j) => {
      return {
        size: '35.5',
        number: 10,
        money: '15',
        desc: '15*10',
        status: j,
        sure: i === 2 && j === 2,
      };
    }),
    imageList: [],
    date: Date.now(),
  });
}

export default () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const columns: ProColumns<TableListItem>[] = [
    {
      title: '品牌名',
      dataIndex: 'shopName',
      ellipsis: true,
      copyable: true,
    },
    {
      title: '货号',
      dataIndex: 'noNumber',
      ellipsis: true,
      copyable: true,
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
      title: '操作',
      width: 200,
      key: 'option',
      valueType: 'option',
      render: (_, item) => {
        return [
          <a key="link2" onClick={() => setIsModalOpen(true)}>
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
      <ProTable<TableListItem>
        pagination={false}
        columns={columns}
        scroll={{
          y: '45vh',
        }}
        toolbar={{
          style: { display: 'none' },
        }}
        size="small"
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
        expandable={{ expandedRowRender: ExpandedRowRender }}
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
          <Typography.Paragraph>
            {'缺陷1xxx缺陷2xxx'.repeat(
              20,
            )}
          </Typography.Paragraph>
          <Space wrap>
            <Image
              width={200}
              src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"
            />
            <Image
              width={200}
              src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"
            />
            <Image
              width={200}
              src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"
            />
          </Space>
        </Space>
      </Modal>
    </>
  );
};
