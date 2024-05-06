import React from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";
import { useActiveMenu } from "react-active-menu";

const MenuList: React.FC = () => {

    const AuthContext = useAuth();
    const ActiveMenu = useActiveMenu({
        offset: 60,
        smooth: true

      });
    
    return (
        <ul className="navbar-nav me-auto mb-2 mb-md-0">
            <li className="nav-item" >
                <Link className="nav-link active" aria-current="page" to="/" ref={ActiveMenu.registerTrigger('Home')}>Home</Link>
            </li>

            <li className="nav-item">
                <Link className="nav-link" to="/about-us" ref={ActiveMenu.registerTrigger('About us')}>About us</Link>
            </li>
            <li className="nav-item">
                <Link className="nav-link" to="/contact-us" ref={ActiveMenu.registerTrigger('Contact us')}> Contact us</Link>
            </li>
            <li className="nav-item">
                <Link className="nav-link" to="/unit-testing-demo" ref={ActiveMenu.registerTrigger('Unit testing Demo')}>Unit testing Demo</Link>
            </li>

            {
                AuthContext.isAuthenticated ?
                    <>
                        <li className="nav-item">
                            <Link className="nav-link"  to="/netflix"  ref={ActiveMenu.registerTrigger('Netflix')}>Netflix</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link"  to="/user"  ref={ActiveMenu.registerTrigger('User Management')}>User Management</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link"  to="todos" ref={ActiveMenu.registerTrigger('Todos')}>Todos</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/products" ref={ActiveMenu.registerTrigger('Products')}>Products</Link>
                        </li>
                    </> : null
            }
        </ul>
    )
}

export default MenuList;