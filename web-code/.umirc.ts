import { defineConfig } from '@umijs/max';
import path from 'path';
import ProxyMockPlugin from 'webpack-proxy-mock-plugin'
export default defineConfig({
  antd: {},
  access: {},
  model: {},
  initialState: {},
  chainWebpack(config) {
    config.devServer.proxy([
      {
        context: ['/api'],
        target: 'http://localhost:8080',
        changeOrigin: true,
        pathRewrite: { '^/api': '' },
      },
    ]);
    // 添加插件
    config.plugin('ProxyMockPlugin').use(ProxyMockPlugin, [
      {
        port: 3001,
        generatedCodeFileUrl: path.join(__dirname, './mockInfo/request-apis'),
        mockDataFileUrl: path.join(__dirname, './mockInfo/mock'),
      },
    ]);
  },
  request: {},
  layout: {
    title: '球鞋售卖',
  },
  routes: [
    {
      path: '/',
      redirect: '/orderlist',
    },
    {
      name: '登录',
      path: '/login',
      layout: false,
      component: './Login',
    },
    {
      name: '订单处理',
      path: '/orderlist',
      component: './OrderList',
    },
    {
      name: '地址管理',
      path: '/address',
      component: './Address',
    },
    {
      name: '用户列表',
      path: '/userlist',
      component: './UserList',
    },
    {
      name: '提现审核',
      path: '/withdrawalAudit',
      component: './WithdrawalAudit',
    },
  ],
  npmClient: 'npm',
});
