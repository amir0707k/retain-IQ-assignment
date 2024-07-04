import './App.css'
import Sidebar from './components/Sidebar'
import { FaArrowLeft } from "react-icons/fa6";
import { Button } from './components/ui/button';
import DesignProvider from './context/DesignProvider';
function App() {

  return (
    <DesignProvider>

   
    <div className="flex h-[100vh] w-[100vw]">
      <Sidebar />
      <div className="p-8 space-y-8 w-full">
        <div className="flex items-center justify-between w-full">
          <div className="flex items-center gap-2">
            <FaArrowLeft className='h-6 w-6' />

            <div className="w-[26rem]">
              <h1 className="pl-2 text-3xl text-left font-bold font-recoleta">
                Rules creation
              </h1>

              <hr className="w-full bg-black border-black h-px" />
            </div>
          </div>
          <Button className='bg-[#17a34b] text-white text-md font-medium'>Publish Feed</Button>
        </div>
     
      </div>
    </div>
    </DesignProvider>
  )
}

export default App
