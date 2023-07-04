import { AppProps } from 'next/app';
import '../styles/fonts.css';
import '../styles/global.css';
import { ModalContext } from '../hooks/modal-context';
import { ReactNode, useState } from 'react';

export default function MyApp({ Component, pageProps }: AppProps) {
  const [modal, setModal] = useState<ReactNode | undefined>(undefined);

  return (
    <ModalContext.Provider value={{ setModal, modal }}>
      {modal}
      <Component {...pageProps} />;
    </ModalContext.Provider>
  );
}
