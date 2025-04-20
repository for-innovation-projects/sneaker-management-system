import { update_products_pc_api_wechatorder_pc_products_patch } from '@/request-apis/sneaker-service/Order';
import { Button, InputNumber, message, Popconfirm } from 'antd';
import React, { useState } from 'react';

const ItemBtn: React.FC<{
    order_id: number;
    defaultValue: number;
    product_id: number;
    product_info_id: number;
    reload?: () => void;
}> = ({ order_id, product_info_id, product_id, reload, defaultValue }) => {
    const [open, setOpen] = useState(false);
    const [confirmLoading, setConfirmLoading] = useState(false);
    const [inputValue, setInputValue] = useState<number>(defaultValue);
    return (
        <Popconfirm
            title="输入报价"
            description={
                <InputNumber
                    value={inputValue}
                    onChange={(value) => setInputValue(value || 0)}
                    style={{ width: '100%' }}
                    min={0}
                    placeholder="请输入报价"
                    precision={2}
                    step="0.01"
                />
            }
            open={open}
            onConfirm={() => {
                setConfirmLoading(true);
                update_products_pc_api_wechatorder_pc_products_patch({
                    params: {
                        order_id,
                        product_id,
                        product_info_id,
                    },
                    data: {
                        price: inputValue,
                    },
                }).then((res) => {
                    // @ts-ignore
                    if (res.code === 1) {
                        setOpen(false);
                        reload?.();
                        message.success('设置成功');
                    } else {
                        message.error(res.msg || '设置失败');
                    }
                    setConfirmLoading(false);
                });
                setTimeout(() => {
                    setConfirmLoading(false);
                    setOpen(false);
                }, 2000);
            }}
            okButtonProps={{ loading: confirmLoading }}
            onCancel={() => setOpen(false)}
        >
            <Button type="link" onClick={() => setOpen(true)}>
                修改报价
            </Button>
        </Popconfirm>
    );
};

export default ItemBtn;
