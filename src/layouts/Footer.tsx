
import { useState } from "react";
import MenuList from "./MenuList";

const Footer:React.FC = () => {

    let [counter , setCounter] = useState(0);

    const currentDate = new Date();
    const currentYear = currentDate.getFullYear();
    const currentTime = currentDate.toLocaleTimeString();

    // Formatting the date
    const options: Intl.DateTimeFormatOptions = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    const formattedDate = currentDate.toLocaleDateString(undefined, options);

    const developerName = 'VIJAY';
    return(
        <footer className="text-center">
            <hr />
            <MenuList/>
            <p>Today is {formattedDate}. The current time is {currentTime}. Copyright {currentYear} | {developerName}</p>
            <button className="btn btn-sm btn-warning" onClick={() => {
                setCounter((preCount) => {
                    return preCount + 1;
                })
             }}>
              Click {counter}
            </button>
        </footer>
    );
}

export default Footer;