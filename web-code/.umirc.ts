import { defineConfig } from '@umijs/max';

export default defineConfig({
  antd: {},
  access: {},
  model: {},
  initialState: {},
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
