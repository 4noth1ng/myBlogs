import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Button, Form, Input, message } from 'antd';

type FieldType = {
  username?: string;
  password?: string;
};

const LoginForm: React.FC = () => {
  const navigate = useNavigate();
  const onFinish = (values: FieldType) => {
    const { username, password } = values;
    if (!(username === 'admin' && password === '123456')) {
      message.error('账号密码错误，请重新输入');
    } else {
      navigate('/');
    }
  };

  return (
    <Form
      name="basic"
      labelCol={{ span: 8 }}
      wrapperCol={{ span: 16 }}
      style={{ maxWidth: 600 }}
      initialValues={{ remember: true }}
      autoComplete="off"
      onFinish={onFinish}
    >
      <Form.Item<FieldType>
        label="账号"
        name="username"
        rules={[{ required: true, message: 'Please input your username!' }]}
      >
        <Input />
      </Form.Item>

      <Form.Item<FieldType>
        label="密码"
        name="password"
        rules={[{ required: true, message: 'Please input your password!' }]}
      >
        <Input.Password />
      </Form.Item>

      <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
        <Button type="primary" htmlType="submit">
          登录
        </Button>
      </Form.Item>
    </Form>
  );
};

export default LoginForm;
