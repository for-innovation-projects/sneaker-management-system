import type { ProColumns } from '@ant-design/pro-components';
import { ProTable } from '@ant-design/pro-components';
import { Button, Input, Modal } from 'antd';
import { useState } from 'react';

const { TextArea } = Input;

export type TableListItem = {
  key: number;
  date: number;
  address: string;
};
const tableListDataSource: TableListItem[] = [];

for (let i = 0; i < 5; i += 1) {
  tableListDataSource.push({
    key: i,
    date: Date.now(),
    address: i % 2 === 1 ? '黑龙江省伊春市伊春区新立小区' : '简短备注文案',
  });
}

export default () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalId, setModalId] = useState('');
  const [addressInfo, setAddressInfo] = useState('');

  const columns: ProColumns<TableListItem>[] = [
    {
      title: '地址信息',
      dataIndex: 'address',
      ellipsis: true,
      copyable: true,
    },
    {
      title: '更新时间',
      dataIndex: 'date',
      valueType: 'dateTime',
    },
    {
      title: '操作',
      width: 180,
      key: 'option',
      valueType: 'option',
      render: (_, item) => [
        <a
          onClick={() => {
            setAddressInfo(item.address);
            setModalId('modalId');
            setIsModalOpen(true);
          }}
          key="link2"
        >
          修改
        </a>,
        <a key="link">删除</a>,
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
        rowKey="key"
        dateFormatter="string"
        toolBarRender={() => [
          <Button
            type="primary"
            key="primary"
            onClick={() => {
              setModalId('');
              setAddressInfo('');
              setIsModalOpen(true);
            }}
          >
            创建
          </Button>,
        ]}
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
