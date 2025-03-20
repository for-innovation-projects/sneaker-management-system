import { history } from 'umi';
import { getJWT } from './utils/storage';

// 运行时配置

// 全局初始化数据配置，用于 Layout 用户信息和权限初始化
// 更多信息见文档：https://umijs.org/docs/api/runtime-config#getinitialstate
export async function getInitialState(): Promise<{ name: string }> {
  // 获取当前路由信息
  const currentRoute = history.location;
  const token = getJWT();
  if (!token) {
    history.replace('/login');
  }
  console.log('当前路由:', currentRoute.pathname);
  // 输出示例：
  return { name: 'admin' };
}

export const layout = () => {
  return {
    logo: 'https://img.alicdn.com/tfs/TB1YHEpwUT1gK0jSZFhXXaAtVXa-28-27.svg',
    menu: {
      locale: false,
    },
  };
};
