import {
  create_address_api_wechataddress_pc_address_post,
  delete_address_api_wechataddress_pc_address_delete,
  get_addresses_api_wechataddress_pc_addresses_get,
  update_address_api_wechataddress_pc_address_patch,
} from '@/request-apis/sneaker-service/Address';
import type { ActionType, ProColumns } from '@ant-design/pro-components';
import { ProTable } from '@ant-design/pro-components';
import { Button, Form, Input, message, Modal, Popconfirm } from 'antd';
import { useForm } from 'antd/es/form/Form';
import { useRef, useState } from 'react';

const { TextArea } = Input;

export default () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [addressInfo, setAddressInfo] = useState<Partial<IApi.AddressOut>>({});
  const actionRef = useRef<ActionType>(null);
  const [from] = useForm();
  const columns: ProColumns<IApi.AddressOut>[] = [
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
      dataIndex: 'detail',
      ellipsis: true,
      copyable: true,
    },
    {
      title: '更新时间',
      dataIndex: 'update_time',
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
            from.setFieldsValue(item);
            setAddressInfo(item);
            setIsModalOpen(true);
          }}
          key="link2"
        >
          修改
        </a>,
        <Popconfirm
          title="删除"
          description="确认要删除该地址么?"
          onConfirm={() =>
            delete_address_api_wechataddress_pc_address_delete({
              params: {
                id: item.id,
              },
            })
              .then((res) => {
                // @ts-ignore
                if (res.code === 1) {
                  message.success('删除成功');
                  actionRef.current?.reload();
                }
              })
              .catch(() => {
                message.error('请重新尝试');
              })
          }
          okText="删除"
          cancelText="取消"
        >
          <a key="link">删除</a>
        </Popconfirm>,
      ],
    },
  ];
  return (
    <>
      <ProTable<IApi.AddressOut>
        actionRef={actionRef}
        columns={columns}
        pagination={{ pageSize: 10 }}
        request={(params) => {
          return new Promise((resolve) => {
            const { current: page, pageSize: page_size, ...rest } = params;
            get_addresses_api_wechataddress_pc_addresses_get({
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
        rowKey="id"
        dateFormatter="string"
        toolBarRender={() => [
          <Button
            type="primary"
            key="primary"
            onClick={() => {
              setAddressInfo({});
              setIsModalOpen(true);
            }}
          >
            创建
          </Button>,
        ]}
      />
      <Modal
        title={addressInfo.id ? '修改地址' : '创建地址'}
        open={isModalOpen}
        onOk={() => from.submit?.()}
        onCancel={() => setIsModalOpen(false)}
      >
        <Form<IApi.AddressBase>
          name="basic"
          form={from}
          labelCol={{ span: 5 }}
          wrapperCol={{ span: 19 }}
          style={{ maxWidth: 600 }}
          initialValues={{ remember: true }}
          autoComplete="off"
          onFinish={(data) => {
            const promiseFetch = addressInfo.id
              ? update_address_api_wechataddress_pc_address_patch
              : create_address_api_wechataddress_pc_address_post;
            promiseFetch({
              data: {
                // @ts-ignore
                id: addressInfo.id,
                ...data,
              },
            })
              .then((res) => {
                // @ts-ignore
                if (res.code === 1) {
                  message.success('成功');
                  actionRef.current?.reload();
                }
              })
              .catch(() => {
                message.error('请重新尝试');
              })
              .finally(() => {
                setIsModalOpen(false);
              });
          }}
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
            name="detail"
            rules={[{ required: true, message: '请输入地址信息' }]}
          >
            <TextArea rows={4} />
          </Form.Item>
        </Form>
      </Modal>
    </>
  );
};
