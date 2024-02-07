import { Suspense } from 'react';
import Counter from './Counter';

export default async function Container({ children }) {
  const { message } = await (
    await new Promise(resolve => {
      setTimeout(() => {
        const res = fetch('http://localhost:3000/blogs');
        resolve(res);
      }, 2000);
    })
  ).json();

  return <Counter>{message}</Counter>;
}
