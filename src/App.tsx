
import './App.css'
import Header from './layouts/Header';
import Footer from './layouts/Footer';
import { CardProvider } from './contexts/CardContext';
import MainRoutes from './routes/MainRoutes';
import { BrowserRouter } from "react-router-dom";
import { AuthProvider } from './contexts/AuthContext';

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <AuthProvider>
        <CardProvider>
          <Header></Header>
          <main className='container mt-5 pt-2'>

            <MainRoutes></MainRoutes>
          </main>

        </CardProvider>

        <Footer></Footer>
      </AuthProvider>
    </BrowserRouter>
  )
}

export default App;
