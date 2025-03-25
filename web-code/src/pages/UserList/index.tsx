import {
  ban_wechat_user_api_wechatuser_pc_wechat_delete,
  get_users_api_wechatuser_pc_wechat_get,
  modify_balance_api_wechatuser_pc_wechat_patch,
  unban_wechat_user_api_wechatuser_pc_wechat_post,
} from '@/request-apis/sneaker-service/User';
import { CopyOutlined } from '@ant-design/icons';
import type { ActionType, ProColumns } from '@ant-design/pro-components';
import { ProTable } from '@ant-design/pro-components';
import { Input, InputNumber, message, Modal, Popconfirm, Timeline } from 'antd';
import { useRef, useState } from 'react';

const { TextArea } = Input;

export default () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isModalOpenMoney, setIsModalOpenMoney] = useState(false);
  const [modalRemainingMoney, setModalRemainingMoney] = useState<
    Partial<IApi.WeChatUserInformationOut>
  >({});
  const actionRef = useRef<ActionType>(null);

  const columns: ProColumns<IApi.WeChatUserInformationOut>[] = [
    {
      title: '姓名',
      dataIndex: 'name',
    },
    {
      title: '身份证号',
      dataIndex: 'id_code',
      copyable: true,
      render(_, item) {
        return (
          <>
            {item.id_code.replace(/^(.{6})(?:\d+)(.{4})$/, '$1********$2')}
            <CopyOutlined
              style={{ marginLeft: 4, cursor: 'pointer', color: '#1677ff' }}
              onClick={(e) => {
                e.stopPropagation();
                navigator.clipboard.writeText(item.id_code).then(() => {
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
      dataIndex: 'balance',
      search: false,
    },
    {
      title: '账号状态',
      dataIndex: 'is_deleted',
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
      dataIndex: 'create_time',
      valueType: 'dateTime',
    },
    {
      title: '操作',
      width: 180,
      key: 'option',
      valueType: 'option',
      render: (_, item) => [
        <Popconfirm
          title="确定要封禁/解封用户么"
          description="封禁后该用户将无法进入小程序?"
          onConfirm={() => {
            if (item.is_deleted === 0) {
              ban_wechat_user_api_wechatuser_pc_wechat_delete({
                params: {
                  id: item.id,
                },
              })
                .then((res) => {
                  // @ts-ignore
                  if (res.code === 1) {
                    message.success('已成功封禁');
                    actionRef.current?.reload();
                  }
                })
                .catch(() => {
                  message.error('请重新尝试');
                });
            } else {
              unban_wechat_user_api_wechatuser_pc_wechat_post({
                params: {
                  id: item.id,
                },
              })
                .then((res) => {
                  // @ts-ignore
                  if (res.code === 1) {
                    actionRef.current?.reload();
                    message.success('已成功解除封禁');
                  }
                })
                .catch(() => {
                  message.error('请重新尝试');
                });
            }
          }}
          okText="确定"
          cancelText="取消"
        >
          <a key="link2">{item.is_deleted === 0 ? '封禁' : '解封'}</a>
        </Popconfirm>,
        <a key="link3" onClick={() => setIsModalOpen(true)}>
          提现记录
        </a>,
        <a
          key="link"
          onClick={() => {
            setIsModalOpenMoney(true);
            setModalRemainingMoney({ ...item });
          }}
        >
          修改余额
        </a>,
      ],
    },
  ];
  return (
    <>
      <ProTable<IApi.WeChatUserInformationOut>
        actionRef={actionRef}
        columns={columns}
        request={(params) => {
          // 表单搜索项会从 params 传入，传递给后端接口。
          return new Promise((resolve) => {
            const { pageSize, current, ...rest } = params;
            get_users_api_wechatuser_pc_wechat_get({
              params: {
                page: current,
                page_size: pageSize,
                ...rest,
              },
            })
              .then((res) => {
                //@ts-ignore
                if (res.code === 1) {
                  resolve({
                    data: (res.data as any) || [],
                    success: true,
                  });
                } else {
                  resolve({
                    success: false,
                  });
                }
              })
              .catch(() => {
                resolve({
                  success: false,
                });
              });
          });
        }}
        rowKey="id"
        dateFormatter="string"
        search={{
          collapsed: false,
        }}
      />
      <Modal
        title="修改余额"
        open={isModalOpenMoney}
        onOk={() => {
          const { id, balance } = modalRemainingMoney;
          modify_balance_api_wechatuser_pc_wechat_patch({
            params: {
              balance: String(balance),
              id,
            },
          })
            .then((res) => {
              // @ts-ignore
              if (res.code === 1) {
                actionRef.current?.reload();
                message.success('修改成功');
                setIsModalOpenMoney(false);
                setModalRemainingMoney({});
              }
            })
            .catch(() => {
              message.error('请重新尝试');
            });
        }}
        onCancel={() => setIsModalOpenMoney(false)}
      >
        <InputNumber
          precision={2}
          style={{ width: '100%' }}
          value={modalRemainingMoney.balance}
          step="0.01"
          onChange={(value) =>
            setModalRemainingMoney({
              ...modalRemainingMoney,
              balance: value || '',
            })
          }
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
