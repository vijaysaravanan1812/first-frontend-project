import { Navigate, Outlet } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';
// import { useAuth } from '../contexts/AuthContext';

const ProtectedRoutes = () => {
  // check whether the user is authenticated or not
  // check in localstorage
  // if authenticated
  // then, show the Protected components
  // else
  // redirect to login page
  console.log("PROTECTED");

  const authContext  = useAuth();

  if (authContext.isAuthenticated) {
    return (
      // Protected components will appear here
      <Outlet />
    );
  } else {
    //  redirect to login page
    return <Navigate to="auth/login" />;
  }
}

export default ProtectedRoutes