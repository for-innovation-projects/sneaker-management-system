import { login_for_access_token_api_wechatuser_pc_login_post } from '@/request-apis/sneaker-service/User';
import { setJWT } from '@/utils/storage';
import { history } from '@umijs/max';
import { message } from 'antd';
import React, { useEffect, useState } from 'react';
import './index.less';
import './particles.min.js';
import { initBackground } from './init'
let loading = false;
const HomePage: React.FC = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  useEffect(() => {
    initBackground();
    
  }, []);
  const onSubmit = (e: any) => {
    if (!username || !password) {
      message.error('请输入用户名或密码');
      return;
    }
    if (loading) {
      message.warning('登录中请耐心等待');
      return;
    }
    loading = true;
    login_for_access_token_api_wechatuser_pc_login_post({
      data: {
        username,
        password,
      },
    })
      .then((res: any) => {
        if (res.code === 1) {
          setJWT(res.data?.access_token || '');
          history.push('/MiniConfig');
        } else {
          message.error(res.msg);
        }
      })
      .finally(() => {
        loading = false;
      });
  };
  return (
    <div id="particles-js">
      <div className="login-form">
        <h2>会员登录</h2>
        <input
          type="text"
          placeholder="用户名"
          required
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          type="password"
          placeholder="密码"
          required
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button onClick={onSubmit}>登录</button>
      </div>
    </div>
  );
};

export default HomePage;
