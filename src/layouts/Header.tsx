
// This is the component --> Reusable part of code
import { Link } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";
import { useCard } from "../contexts/CardContext";
import MenuList from "./MenuList";

const Header: React.FC = () => {
    const cardContext = useCard();
    const AuthContext = useAuth();

    return (
        <header>
            <nav className="navbar navbar-expand-md navbar-dark fixed-top bg-dark">
                <div className="container-fluid">
                    <a className="navbar-brand" href="#">First Frontend Project</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarCollapse">
                        <MenuList />
                        <div className="btn-group" role="group" aria-label="Button group">
                            {
                                AuthContext.isAuthenticated ?
                                    <>
                                        <button className="btn btn-primary">Card ({cardContext?.cardItems.length})</button>
                                        <span className="gap"></span> {/* Spacer */}
                                        <button className="btn btn-danger" onClick={AuthContext?.logout}>LogOut</button>
                                    </> :
                                    <>
                                        <Link className="btn btn-primary" to="/auth/login">Login</Link> {/* Use Link */}
                                    </>
                            }
                        </div>
                    </div>
                </div>
            </nav>
        </header>
    );
}

export default Header;
