import { Suspense } from 'react';
import Counter from '../components/Counter';
import Container from '../components/Container';

export default function Home() {
  return (
    <>
      <h1>Hello Home Page</h1>
      <main className='flex min-h-screen flex-col items-center justify-between p-24'>
        <Suspense
          fallback={<div className='container mx-auto px-4'>Loading</div>}
        >
          <Container />
        </Suspense>
        <Counter>Click me hahaha</Counter>
      </main>
    </>
  );
}
