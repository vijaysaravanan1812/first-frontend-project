
import HomePage from '../pages/HomePage/HomePage';
import NetflixPage from '../pages/NetflixPage/NetflixPage';
import UserPage from '../pages/UserPage/UserPage';
import AboutPage from '../pages/AboutPage/AboutPage';
import AddUser from '../pages/UserPage/AddUser';
import UserDetails from '../pages/UserPage/UserDetails';
import EditUserDetails from '../pages/UserPage/EditUserDetails';
import TodoPage from '../pages/TodosPage/TodoPage';
import ProductPage from '../pages/ProductsPage/ProductPage';
import { Navigate, Route, Routes } from 'react-router-dom';
import ContactPage from '../pages/ContactPage/ContactPage';
import LoginPage from '../pages/AuthPage/LoginPage';
import UnitTestingDemoPage from '../pages/UnitTestingDemoPage/UnitTestingDemoPage'
import ProtectedRoutes from './ProtectedRoutes';

const MainRoutes = () => {
    return (
        <Routes>
            {/* configure the routes */}
            {/* Following three URL can be access in public */}
            <Route path='/' element={<HomePage />}> </Route>
            <Route path='/contact-us' element={<ContactPage />}> </Route>
            <Route path='/about-us' element={<AboutPage />}> </Route>
            <Route path='/auth/login' element={<LoginPage />} ></Route>
            <Route path='/unit-testing-demo' element={<UnitTestingDemoPage />}> </Route>
            <Route path='/auth' element={<Navigate to='/auth/login' replace />} ></Route>

            {/* FOllowing URL needs login */}
            <Route element={<ProtectedRoutes/>}>
                <Route path='/netflix' element={<NetflixPage />}></Route>

                <Route path='/user' element={<UserPage />}></Route>
                <Route path='/user/add' element={<AddUser />}></Route>
                <Route path="/user/:userId/edit" element={<EditUserDetails />} />
                {/* Setting the dynamic url*/}
                <Route path='/user/:userid' element={<UserDetails />}></Route>

                <Route path='/todos' element={<TodoPage />}></Route>
                <Route path='/products' element={<ProductPage />}></Route>F
            </Route>



        </Routes>

    )
}

export default MainRoutes