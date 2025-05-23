import { add_return_goods_api_wechatorder_pc_return_post } from '@/request-apis/sneaker-service/Order';
import { CopyOutlined } from '@ant-design/icons';
import { Button, Card, Form, Input, message, Popover } from 'antd';
import { useState } from 'react';

const PopoverReturn: React.FC<
  IApi.ProductResponse & {
    orderId: number;
    orderStatus: number;
    addressInfo: {
      delivery_name?: string;
      delivery_phone?: string;
      return_address?: string;
    };
    item: any;
    reload?: () => void;
  }
> = (props) => {
  const [popoverOpen, setPopverOpen] = useState(false);
  return (
    <Popover
      open={popoverOpen}
      title={null}
      trigger="click"
      content={
        <>
          <Card
            title="退货地址"
            size="small"
            extra={
              <CopyOutlined
                style={{
                  marginLeft: 4,
                  cursor: 'pointer',
                  color: '#1677ff',
                }}
                onClick={(e) => {
                  navigator.clipboard
                    .writeText(
                      `姓名：${props.addressInfo.delivery_name}\n手机号：${props.addressInfo.delivery_phone}\n详细地址：${props.addressInfo.return_address}`,
                    )
                    .then(() => {
                      message.success('复制成功');
                    });
                }}
              />
            }
            style={{ width: 300 }}
          >
            <p>姓名：{props.addressInfo.delivery_name}</p>
            <p>手机号：{props.addressInfo.delivery_phone}</p>
            <p>详细地址：{props.addressInfo.return_address}</p>
          </Card>
          <Form
            style={{ marginTop: '20px' }}
            size="small"
            name="expandForm"
            autoComplete="off"
            onFinish={(formData) => {
              add_return_goods_api_wechatorder_pc_return_post({
                data: {
                  product_id: props.id,
                  order_id: props.orderId,
                  product_info_id: props.item.id,
                  ...formData,
                },
              }).then((res) => {
                // @ts-ignore
                if (res.code === 1) {
                  props.reload?.();
                  setPopverOpen(false);
                  message.success('退货成功');
                }
              });
            }}
          >
            <Form.Item
              label="物流商"
              name="return_delivery_site"
              rules={[{ required: true, message: '必须输入' }]}
            >
              <Input />
            </Form.Item>
            <Form.Item
              label="快递单号"
              name="return_tracking_code"
              rules={[{ required: true, message: '必须输入' }]}
            >
              <Input />
            </Form.Item>
            <Form.Item label={null}>
              <Button type="primary" htmlType="submit">
                退货
              </Button>
            </Form.Item>
          </Form>
        </>
      }
    >
      <a onClick={() => setPopverOpen(true)}>退货</a>
    </Popover>
  );
};

export default PopoverReturn;
