import { get_withdrawal_api_wechatwithdrawal_pc_withdrawal__user_id__get, get_withdrawal_api_wechatwithdrawal_pc_withdrawal_get, update_withdrawal_api_wechatwithdrawal_pc_withdrawal_patch } from '@/request-apis/sneaker-service/Withdrawal';
import type { ActionType, ProColumns } from '@ant-design/pro-components';
import { ProTable } from '@ant-design/pro-components';
import { Button, message, Popconfirm } from 'antd';
import { useRef } from 'react';

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

export default () => {
  const actionRef = useRef<ActionType>(null);
  const columns: ProColumns<IApi.WithdrawalOut>[] = [
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
      dataIndex: 'id_code',
      ellipsis: true,
      copyable: true,
    },
    {
      title: '支付宝账号',
      dataIndex: 'receive_code',
      ellipsis: true,
      copyable: true,
    },
    {
      title: '提现金额',
      dataIndex: 'withdrawal_money',
      ellipsis: true,
      copyable: true,
      search: false,
    },
    {
      title: '打款状态',
      dataIndex: 'status',
      valueType: 'select',
      valueEnum: {
        0: { text: '未打款', status: 'Processing' },
        1: { text: '已打款', status: 'Success' },
      },
    },
    {
      title: '创建时间',
      dataIndex: 'create_time',
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
          description="确认后用户提现记录中能看到"
          onConfirm={() => {
            update_withdrawal_api_wechatwithdrawal_pc_withdrawal_patch({
              params: {
                id: item.id
              }
            }).then(res => {
              // @ts-ignore
              if (res.code === 1) {
                message.success("成功")
                actionRef.current?.reload()
              } else {
                message.error("请重新尝试")
              }
            }).catch(() => {
              message.error("请重新尝试")
            })
          }}
          okText="确定"
          cancelText="取消"
        >
          <Button type="link" disabled={item.status !== 0}>
            打款
          </Button>
        </Popconfirm>,
      ],
    },
  ];
  return (
    <>
      <ProTable<IApi.WithdrawalOut>
        columns={columns}
        actionRef={actionRef}
        request={(params) => {
          return new Promise((resolve) => {
            const { current: page, pageSize: page_size, ...rest } = params;
            get_withdrawal_api_wechatwithdrawal_pc_withdrawal_get({
              params: {
                page,
                page_size,
                ...rest,
              },
            })
              .then((res) => {
                // @ts-ignore
                if (res.code === 1) {
                  resolve({
                    data: res.data as any,
                    total: res.total,
                    success: true,
                  });
                } else {
                  resolve({
                    success: false,
                  });
                }
              })
              .catch(() => {
                message.error('请刷新尝试');
                resolve({
                  success: false,
                });
              });
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
