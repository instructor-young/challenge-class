// 1. 만든다 -> createContext
// 2. 사용한다 -> useContext
// 3. 범위를 지정해서 값을 내려준다 -> Context.Provider

import { useScrollLock } from "@yoojinyoung/usescrolllock";
import { createContext, useContext, useState } from "react";
import Modal from "../components/Modal";

const initialValue = {
  open: () => {},
  close: () => {},
};

const ModalContext = createContext(initialValue);

export const useModal = () => useContext(ModalContext);

export function ModalProvider({ children }) {
  const [modalOptions, setModalOptions] = useState(null);
  const scrollLock = useScrollLock();

  const value = {
    open: (options) => {
      setModalOptions(options);
      scrollLock.lock();
    },
    close: () => {
      setModalOptions(null);
      scrollLock.release();
    },
  };

  return (
    <ModalContext.Provider value={value}>
      {children}
      {modalOptions && (
        <Modal title={modalOptions.title} content={modalOptions.content} />
      )}
    </ModalContext.Provider>
  );
}
