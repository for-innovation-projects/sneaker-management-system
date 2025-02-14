import { Button, Input, Select, Space } from 'antd';
import React from 'react';

const { Option } = Select;

interface VerificationCodeFormItemProps {
  id?: string;
  value?: string;
  onChange?: (value: string) => void;
}

const VerificationCodeFormItem: React.FC<VerificationCodeFormItemProps> = (
  props,
) => {
  const { value, onChange } = props;
  return (
    <Space>
      <Input
        type="text"
        value={value}
        onChange={(e) => onChange?.(e.target.value)}
        style={{ width: 100 }}
      />
      <Button>获取验证码</Button>
    </Space>
  );
};

export default VerificationCodeFormItem;
