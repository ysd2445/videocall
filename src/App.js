import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import Homepage from './components/Homepage';
import Videopage from './components/Videopage';

function App() {
  const router = createBrowserRouter([
    {
    path:'/',
    element:<Homepage/>
  },
  {
    path:'/video/:id',
    element:<Videopage/>
  },
])
  return (
   <>
   <div className='w-screen h-screen bg-slate-700'>
    
   <RouterProvider router={router}/>
   </div>
   </>
  );
}

export default App;
