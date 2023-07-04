import { AppProps } from 'next/app';
import '../styles/fonts.css';
import '../styles/global.css';
import { ModalContext } from '../hooks/modal-context';
import { ReactNode, useEffect, useRef, useState } from 'react';
import { ActionMenuContext } from '../hooks/action-menu';

export default function MyApp({ Component, pageProps }: AppProps) {
  const [actionMenu, setActionMenu] = useState<ReactNode | undefined>(
    undefined
  );
  const [modal, setModal] = useState<ReactNode | undefined>(undefined);

  useEffect(() => {
    if (modal) setActionMenu(undefined);
  }, [modal]);

  const wrapperRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(event: any) {
      if (wrapperRef.current && !wrapperRef.current.contains(event.target)) {
        setActionMenu(undefined);
      }
    }

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  });

  if (modal && actionMenu) return;

  return (
    <ModalContext.Provider value={{ setModal, modal }}>
      {modal}
      <ActionMenuContext.Provider value={{ setActionMenu, actionMenu }}>
        <div ref={wrapperRef}>{actionMenu}</div>
        <Component {...pageProps} />;
      </ActionMenuContext.Provider>
    </ModalContext.Provider>
  );
}
