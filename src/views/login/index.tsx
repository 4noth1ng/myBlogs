import React from 'react';
import { Button, Divider, Form, Input } from 'antd';
import styled from 'styled-components';
import LoginForm from './components/LoginForm';
const Container = styled.div`
  display: flex;
  height: 100%;
`;

const LoginLeft = styled.div`
  flex: 1;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-content: center;
  background-color: #00b96b;
`;
const LeftTitle = styled.h1`
  width: 100%;
  color: white;
  font-size: 45px;
  text-align: center;
`;
const LeftTip = styled.h3`
  margin-top: 20px;
  width: 100%;
  color: black;
  font-size: 20px;
  font-weight: 700;
  text-align: center;
`;
const LoginRight = styled.div`
  width: 700px;
  height: 100%;
`;
const RightTitle = styled(LeftTitle)`
  margin-top: 200px;
  height: 70px;
  font-size: 30px;
  color: black;
`;
const index: React.FC = () => {
  return (
    <Container>
      <LoginLeft>
        <LeftTitle>欢迎光临</LeftTitle>
        <LeftTip>这里是博客管理端~</LeftTip>
      </LoginLeft>
      <LoginRight>
        <RightTitle>欢迎回来</RightTitle>
        <Divider>账号密码登录</Divider>
        <LoginForm></LoginForm>
        <h3 style={{ textAlign: 'center', marginTop: '50px' }}>
          测试账号: admin 密码：123456
        </h3>
      </LoginRight>
    </Container>
  );
};

export default index;
