import { Route, createBrowserRouter, createRoutesFromElements, RouterProvider } from 'react-router-dom';
import Header from './components/Header/Header';
import HomePage from './pages/HomePage/HomePage';
import Login from './pages/Login/Login';
import Register from './pages/Register/Register';
import Dashboard from './pages/Dashboard/Dashboard';
import Tutorial from './pages/Tutorial/Tutorial';
import MyList from './pages/MyList/MyList';
import './sass/style.scss'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Header />}>
      <Route index element={<HomePage />} />
      <Route path="login" element={<Login />} />
      <Route path="register" element={<Register />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/tutorials" element={<Tutorial />} />
      <Route path="/list/:params" element={<MyList />} />
    </Route>
  )
)

function App() {

  return (
   <>
    <RouterProvider router={router} />
   </>
  )
}

export default App
