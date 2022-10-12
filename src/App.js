import './App.css'
import { RouterProvider } from 'react-router-dom'
import router from './utilities/routes'
  import { ToastContainer} from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <>
      <ToastContainer position="top-center"/>
      <RouterProvider router={router} />
    </>
  )
}

export default App
