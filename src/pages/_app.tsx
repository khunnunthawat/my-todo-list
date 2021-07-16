import 'antd/dist/antd.css';
import 'tailwindcss/tailwind.css';
import { AppProps } from 'next/app';
import { RecoilRoot } from 'recoil';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div className='w-full min-h-full flex max-w-2xl mx-auto p-5'>
      <RecoilRoot>
        <Component {...pageProps} />
      </RecoilRoot>
    </div>
  );
}

export default MyApp;
