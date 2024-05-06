// /* 
// Any to Any Component Communication using Context API

//   Step 1. Create Context using createContext()
//   Step 2: We have to Provide the context data to the desired components using Context Provider.
//   Step 3: Let's supply the data through the CartProvider
//   Step 4: You can subcribe to the context data in the desired component using useContext()
//   Step 5: Work on to supply the data to the context.
// */

// import { ReactNode, createContext, useContext, useState } from "react";

// interface ToastContextProps {
//     Message : string | undefined;
//     setMessage: (message: string | undefined) => void;
// }


// const ToastContext = createContext<ToastContextProps | undefined>(undefined);
  
// // Step 2: Let's create a new component called ToastProvider
// export const ToastProvider: React.FC<{ children: ReactNode }> = ({
//     children,
//   }) => {
    
//     const [message , setMessage] = useState<string>();
//     return (
//         <ToastContext.Provider 
//         value={{  
//           message,
//           setMessage,
//         }}>
//             {children}
//         </ToastContext.Provider>
//     );
//   }

// // Step 4: You can subcribe to the context data in the desired component using useContext()
// export const useToast = () => {
//   const context = useContext(ToastContext);
  
//   if (!context) {
//       throw new Error("useToast hook must be used within ToastProvider commponent's descendants ");
//   }

//   return context;
// }