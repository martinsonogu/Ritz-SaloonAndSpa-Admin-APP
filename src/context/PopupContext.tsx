import React, { Dispatch, PropsWithChildren, SetStateAction, createContext, useState } from 'react';

export type PopupContextType = {
  setShowInitiatePopup: Dispatch<SetStateAction<boolean>>;
  showInitiatePopup: boolean;
  setShowOwnWalletPopup: Dispatch<SetStateAction<boolean>>;
  showOwnWalletPopup: boolean;
  showMerchantWalletPopup: boolean;
  setShowMerchantWalletPopup: Dispatch<SetStateAction<boolean>>;
};

const PopupContext = createContext<PopupContextType>({} as PopupContextType);

export const usePopupContext = () => React.useContext(PopupContext);

export const PopupContextProvider: React.FC<PropsWithChildren> = ({ children }) => {
  const [showInitiatePopup, setShowInitiatePopup] = useState(false);
  const [showOwnWalletPopup, setShowOwnWalletPopup] = useState(false);
  const [showMerchantWalletPopup, setShowMerchantWalletPopup] = useState(false);
  // Create another state to handle own wallet popup

  return (
    <PopupContext.Provider
      value={{
        showInitiatePopup,
        setShowInitiatePopup,
        showOwnWalletPopup,
        setShowOwnWalletPopup,
        showMerchantWalletPopup,
        setShowMerchantWalletPopup
      }}
    >
      {children}
    </PopupContext.Provider>
  );
};

export default PopupContext;
