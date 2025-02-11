import '@umijs/max/typings';
declare module 'particles';
declare global {
    interface Window {
        particlesJS: (options: any) => void;
    }
}