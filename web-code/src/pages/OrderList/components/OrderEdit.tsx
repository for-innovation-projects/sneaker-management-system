import type { ProColumns } from '@ant-design/pro-components';
import { ProTable } from '@ant-design/pro-components';
import {
  Button,
  Card,
  Form,
  Input,
  InputNumber,
  Popover,
  Space,
  Tag,
} from 'antd';
import { useState } from 'react';

export type TableListItem = {
  key: number;
  shopName: string;
  noNumber: string;
  info?: {
    size: string;
    number: number;
    desc: string;
    money: string;
    status: number;
    sure: boolean;
  }[];
  imageList: string[];
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
    shopName: '商品A' + i,
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
      title: '商品名',
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
      title: '商品信息',
      dataIndex: 'info',
      width: 260,
      search: false,
      render(_, record) {
        return record.info?.map((item, index) => {
          return (
            <Space direction="vertical" size="small">
              <Card
                size="small"
                title={item.status === 2 ? <Tag color="red">退货</Tag> : ''}
                extra={
                  item.status === 2 ? (
                    <Button size="small" type="primary" disabled={item.sure}>
                      确认退货
                    </Button>
                  ) : (
                    ''
                  )
                }
                style={{ width: '250px' }}
                key={index}
                actions={[
                  <Popover
                    content={
                      <Form size="small" name="optionForm" autoComplete="off">
                        <Form.Item
                          label="单价（用户不会看到）"
                          name="username"
                          rules={[{ required: true, message: '必须输入' }]}
                        >
                          <InputNumber />
                        </Form.Item>
                        <Form.Item
                          label="报价描述"
                          name="password"
                          rules={[
                            {
                              required: true,
                              message: '必须输入',
                            },
                          ]}
                        >
                          <Input />
                        </Form.Item>
                        <Form.Item label={null}>
                          <Button type="primary" htmlType="submit">
                            变更
                          </Button>
                        </Form.Item>
                      </Form>
                    }
                    title="修改报价"
                    trigger="click"
                  >
                    <Button
                      disabled={item.status === 2}
                      size="small"
                      type="link"
                    >
                      修改报价
                    </Button>
                  </Popover>,
                  <Popover
                    content={
                      <Form size="small" name="optionForm" autoComplete="off">
                        <Form.Item
                          label="单价（用户不会看到）"
                          name="username"
                          rules={[{ required: true, message: '必须输入' }]}
                        >
                          <InputNumber />
                        </Form.Item>
                        <Form.Item
                          label="报价描述"
                          name="password"
                          rules={[
                            {
                              required: true,
                              message: '必须输入',
                            },
                          ]}
                        >
                          <Input />
                        </Form.Item>
                        <Form.Item label={null}>
                          <Button type="primary" htmlType="submit">
                            变更
                          </Button>
                        </Form.Item>
                      </Form>
                    }
                    title="实物不符"
                    trigger="click"
                  >
                    <Button
                      disabled={item.status === 2}
                      size="small"
                      type="link"
                    >
                      实物不符
                    </Button>
                  </Popover>,
                ]}
              >
                <Space direction="vertical" size="small" wrap>
                  <Tag>尺码： {item.size}</Tag>
                  <Tag>数量： {item.number}</Tag>
                  <Tag>单价（用户不会看到）： {item.money}</Tag>
                  <Tag>报价描述： {item.desc}</Tag>
                </Space>
              </Card>
            </Space>
          );
        });
      },
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
      />
    </>
  );
};
