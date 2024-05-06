
/* 
Any to Any Component Communication using Context API

  Step 1. Create Context using createContext()
  Step 2: We have to Provide the context data to the desired components using Context Provider.
  Step 3: Let's supply the data through the CartProvider
  Step 4: You can subcribe to the context data in the desired component using useContext()
  Step 5: Work on to supply the data to the context.
*/
import { createContext, useContext, useState } from "react"

interface CardContextProps {
    cardItems : Item[] // need for header component
    addToCard : (product : Item) => void; // needed for ProductPage component
}

//  Step 1. Create Context using createContext()
export const CardContext = createContext<CardContextProps | undefined>(undefined);

// step 2. create new component called card provider
// <{children : React.ReactNode}> object destructuring 
export const CardProvider: React.FC<{children : React.ReactNode}> = ({
    children, 
}) => {
    // if we want cart data saved in rest api 
    // try connecting to rest api inside useEffect hook using axios
    const [cardItems , setCartItems] = useState<Item[]>([]); // needed for header component
    
    //Following function is needed for ProductPage only
    const addToCart = (product : Item) => {
        setCartItems([...cardItems , product]);
    }
 
    return (
        <CardContext.Provider value={{cardItems : cardItems , addToCard : addToCart}}>
            {children}
        </CardContext.Provider>
    );
};

// Step 4: You can subcribe to the context data in the desired component using useContext()
export const useCard = () => {
    const context = useContext(CardContext);
    
    if (!context) {
        throw new Error("useCard hook must be used within CardProvider commponent's descendants ");
    }

    return context;
}