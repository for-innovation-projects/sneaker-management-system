import { CopyOutlined } from '@ant-design/icons';
import type { ProColumns } from '@ant-design/pro-components';
import { ProTable } from '@ant-design/pro-components';
import { Input, InputNumber, message, Modal, Timeline } from 'antd';
import { useState } from 'react';

const { TextArea } = Input;

export type TableListItem = {
  key: number;
  name: string;
  idCard: string;
  phone: string;
  remainingMoney: number;
  status: number;
  date: number;
};
const tableListDataSource: TableListItem[] = [];

for (let i = 0; i < 5; i += 1) {
  tableListDataSource.push({
    key: i,
    name: '姓名' + i,
    idCard: '230702189888889644',
    phone: '17349867759',
    remainingMoney: 20 + i,
    status: i % 2,
    date: Date.now(),
  });
}

export default () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isModalOpenMoney, setIsModalOpenMoney] = useState(false);
  const [modalRemainingMoney, setModalRemainingMoney] = useState(0);

  const columns: ProColumns<TableListItem>[] = [
    {
      title: '姓名',
      dataIndex: 'name',
    },
    {
      title: '身份证号',
      dataIndex: 'idCard',
      copyable: true,
      render(_, item) {
        return (
          <>
            {item.idCard.replace(/^(.{6})(?:\d+)(.{4})$/, '$1********$2')}
            <CopyOutlined
              style={{ marginLeft: 4, cursor: 'pointer', color: '#1677ff' }}
              onClick={(e) => {
                e.stopPropagation();
                navigator.clipboard.writeText(item.idCard).then(() => {
                  message.success('复制成功');
                });
              }}
            />
          </>
        );
      },
    },
    {
      title: '电话',
      dataIndex: 'phone',
      copyable: true,
    },
    {
      title: '剩余金额',
      dataIndex: 'remainingMoney',
      search: false,
    },
    {
      title: '账号状态',
      dataIndex: 'status',
      valueType: 'select',
      valueEnum: {
        0: { text: '正常', status: 'Success' },
        1: {
          text: '封禁中',
          status: 'Error',
        },
      },
    },
    {
      title: '创建时间',
      dataIndex: 'date',
      valueType: 'dateTime',
    },
    {
      title: '操作',
      width: 180,
      key: 'option',
      valueType: 'option',
      render: (_, item) => [
        <a key="link2">{item.status < 1 ? '封禁' : '解封'}</a>,
        <a key="link3" onClick={() => setIsModalOpen(true)}>
          提现记录
        </a>,
        <a
          key="link"
          onClick={() => {
            setIsModalOpenMoney(true);
            setModalRemainingMoney(item.remainingMoney);
          }}
        >
          修改余额
        </a>,
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
        search={{
          collapsed: false,
        }}
      />
      <Modal
        title="修改余额"
        open={isModalOpenMoney}
        onOk={() => {}}
        onCancel={() => setIsModalOpenMoney(false)}
      >
        <InputNumber
          style={{ width: '100%' }}
          value={modalRemainingMoney}
          onChange={(value) => setModalRemainingMoney(value ?? 0)}
        />
      </Modal>
      <Modal
        title="提现记录"
        open={isModalOpen}
        onOk={() => {}}
        onCancel={() => setIsModalOpen(false)}
      >
        <Timeline
          style={{ marginTop: '25px' }}
          items={[
            {
              children: '提现50元 2015-09-01 12:12:10',
            },
            {
              children: '提现20元 2015-09-01 12:12:10',
            },
            {
              children: '提现5元 2015-09-01 12:12:10',
            },
            {
              children: '提现30元 2015-09-01 12:12:10',
            },
            {
              children: '提现30元 2015-09-01 12:12:10',
            },
            {
              children: '提现30元 2015-09-01 12:12:10',
            },
            {
              children: '提现30元 2015-09-01 12:12:10',
            },
            {
              children: '提现30元 2015-09-01 12:12:10',
            },
            {
              children: '提现30元 2015-09-01 12:12:10',
            },
            {
              children: '提现30元 2015-09-01 12:12:10',
            },
            {
              children: '提现30元 2015-09-01 12:12:10',
            },
            {
              children: '提现30元 2015-09-01 12:12:10',
            },
            {
              children: '提现30元 2015-09-01 12:12:10',
            },
            {
              children: '提现30元 2015-09-01 12:12:10',
            },
          ]}
        />
      </Modal>
    </>
  );
};
