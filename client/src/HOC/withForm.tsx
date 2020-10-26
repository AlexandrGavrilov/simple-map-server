import React, { memo } from 'react';
import { Form } from 'antd';

export const withForm = (
  Page: React.FC
) => memo((props: any) => {
  const [form] = Form.useForm()
  return <Page form={ form } {...props} />;
})
