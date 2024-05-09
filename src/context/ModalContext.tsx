import React from 'react'

// interface ModalContextType {
//   isModalOpen: boolean;
//   openModal: () => void;
//   closeModal: () => void;
// }

// const ModalContext = createContext<ModalContextType | undefined>(undefined);

// export const useModalContext = () => {
//   const context = useContext(ModalContext);
//   if (!context) {
//     throw new Error('useModalContext must be used within a ModalProvider');
//   }
//   return context;
// };

// interface ModalProviderProps {
//   children: ReactNode;
// }

// export const ModalProvider: React.FC<ModalProviderProps> = ({ children }) => {
//   const [isModalOpen, setIsModalOpen] = useState(false);

//   const openModal = () => setIsModalOpen(true);
//   const closeModal = () => setIsModalOpen(false);

//   const value: ModalContextType = {
//     isModalOpen,
//     openModal,
//     closeModal,
//   };

//   return (
//     <ModalContext.Provider value={value}>
//     { children }
//     </ModalContext.Provider>
//   );
// };
const ModalContext: React.FC = () => {
  return <></>
}
export default ModalContext
