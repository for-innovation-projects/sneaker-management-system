import type { ProColumns } from '@ant-design/pro-components';
import { ProTable } from '@ant-design/pro-components';
import { Button, Form, Input, Modal } from 'antd';
import { useState } from 'react';

const { TextArea } = Input;

export type TableListItem = {
  key: number;
  date: number;
  name: string;
  phone: string;
  address: string;
};
const tableListDataSource: TableListItem[] = [];

for (let i = 0; i < 5; i += 1) {
  tableListDataSource.push({
    key: i,
    date: Date.now(),
    name: '倪明晨',
    phone: '17345899634',
    address: i % 2 === 1 ? '黑龙江省伊春市伊春区新立小区' : '简短备注文案',
  });
}

export default () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalId, setModalId] = useState('');
  const [addressInfo, setAddressInfo] = useState('');

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
        <Form
          name="basic"
          labelCol={{ span: 5 }}
          wrapperCol={{ span: 19 }}
          style={{ maxWidth: 600 }}
          initialValues={{ remember: true }}
          autoComplete="off"
        >
          <Form.Item
            label="姓名"
            name="name"
            rules={[{ required: true, message: '请输入姓名' }]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="手机号"
            name="phone"
            rules={[{ required: true, message: '请输入手机号' }]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="地址"
            name="address"
            rules={[{ required: true, message: '请输入地址信息' }]}
          >
            <TextArea rows={4} />
          </Form.Item>
        </Form>
      </Modal>
    </>
  );
};
