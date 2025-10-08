"use client";
import { CloseSquare } from "iconsax-reactjs";
import { ChevronLeft, ChevronRight } from "lucide-react";
import React, { FC } from "react";

export interface ModalProps {
  isOpen: boolean;
  setIsOpen: Function;
  children: React.ReactNode;
}

const Modal: FC<ModalProps> = ({ isOpen, setIsOpen, children }) => {
  // STATE

  // FUNCTIONS
  const handleClick = () => {
    setIsOpen((prev: boolean) => (prev = !prev));
  };

  return (
    <div
      // onClick={handleClick}
      className={isOpen === true ? "modal-bg-open-2" : "modal-bg-close-2"}
    >
      <div className="w-full h-full flex items-center justify-between relative">
        <CloseSquare
          onClick={handleClick}
          size="38"
          variant="Bold"
          className="text-white cursor-pointer absolute top-3 right-3 hovers-text z-[99999999]"
        />

        <div className="w-full">
          <div className={isOpen === true ? "card-open-1" : "card-close-1"}>
            <div className="w-full h-full flex flex-col items-center relative">
              {children}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
