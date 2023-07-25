"use client";
import React from 'react';
import {ImCross} from 'react-icons/im';
interface Props {
  showFooter: boolean;
  showHeaderText: boolean;
  showModalBody?: boolean;
  headerText?: React.ReactNode | string;
  closeModal: React.Dispatch<React.SetStateAction<boolean>>;
  modalContent?: React.ReactNode;
  showOutlineButton?: boolean;
  showSolidButton?: boolean;
  outlineButtonText?: string;
  solidButtonText?: string;
  setWidth?: boolean;
  setHeight?: boolean;
  width?: string;
  height?: string;
  fullButtonWidth?: boolean;
  handleClickSolidButton?: () => void;
  handleClickOutlineButton?: () => void;
}
export default function ModalTemplate(props: Props) {
  const {
    showHeaderText,
    headerText,
    modalContent,
    showFooter,
    closeModal,
    showModalBody,
    showOutlineButton,
    showSolidButton,
    outlineButtonText,
    solidButtonText,
    setHeight,
    setWidth,
    width,
    height,
    fullButtonWidth,
    handleClickSolidButton,
    handleClickOutlineButton,
  } = props;

  return (
    <div className="fixed top-0 left-0 right-0 z-50 w-full p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-[calc(100%-1rem)] max-h-full bg-fontGrey bg-opacity-50 flex justify-center">
      <div className="relative w-2/3 max-h-full">
        <div
          className={`relative bg-white rounded-lg shadow ${
            setWidth ? width : 'w-auto'
          } ${setHeight ? height : 'h-auto'}`}
        >
          {/* Modal header */}
          <div className="flex items-center justify-center px-4 pt-4 rounded-t">
            {showHeaderText && (
              <h3 className="text-3xl font-semibold dark:text-white">
                {headerText}
              </h3>
            )}
            <button
              type="button"
              className="text-bgDarkGrey bg-transparent hover:bg-fontGrey rounded-lg text-xl p-1.5 ml-auto inline-flex items-center"
              onClick={() => closeModal(false)}
            >
              <ImCross color={'#e0e0e0'} size={32} />

              <span className="sr-only">Close modal</span>
            </button>
          </div>
          {/* Modal body */}
          {showModalBody && <div className="p-6 space-y-6">{modalContent}</div>}
          {/* Modal footer */}
          {showFooter && (
            <div className="flex items-center p-6 space-x-2 rounded-b">
              {showOutlineButton && (
                <button
                  data-modal-hide="defaultModal"
                  type="button"
                  onClick={handleClickOutlineButton}
                  className={`text-primary bg-white hover:bg-fontGrey hover:text-white focus:ring-4 focus:outline-none focus:ring-primary rounded-lg border border-primary text-xl font-medium px-5 py-2.5 focus:z-10 ${
                    fullButtonWidth ? 'w-full' : 'w-auto'
                  }`}
                >
                  {outlineButtonText}
                </button>
              )}
              {showSolidButton && (
                <button
                  data-modal-hide="defaultModal"
                  onClick={handleClickSolidButton}
                  type="button"
                  className={`text-white bg-primary hover:bg-hoverPrimary focus:ring-4 focus:outline-none focus:ring-white font-medium rounded-lg text-xl px-5 py-2.5 text-center ${
                    fullButtonWidth ? 'w-full' : 'w-auto'
                  }`}
                >
                  {solidButtonText}
                </button>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
