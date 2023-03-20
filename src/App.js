import Header from './components/Header';
import { AiOutlineHome, AiOutlineFileZip, AiOutlineDashboard } from 'react-icons/ai';

const App = () => {

  return (
    <div className='flex flex-col bg-gray-300'>
      <div className='app flex flex-row'>
        <div className='left flex flex-col  outline outline-1 font-semibold'>
          <div className='flex flex-row p-3 items-center'>
            <a className='brand font-bold' href='/' >ALVISION <span className='font-medium'>| Stamp</span></a>
            <select className='text-center p-0 m-0 items-center bg-[lightgray]'>
              <option></option>
              <option>1</option>
              <option>1</option>
              <option>1</option>
            </select>
          </div>
          <div className='flex flex-col w-32 items-center'>
            <button className='p-2 hover:bg-[lightgray] rounded-md m-1 flex items-center flex-row'><AiOutlineHome className='m-1' />Dashboard</button>
            <div className='flex flex-row items-center'>
              <AiOutlineFileZip className='' /><select className='p-1 bg-[#f1f1f1] hover:bg-[lightgray] rounded-md m-1 flex items-center flex-row'>Report
                <option>Stamp</option>
                <option>1</option>
                <option>1</option>
                <option>1</option>
              </select>
            </div>
            <button className='p-2 hover:bg-[lightgray] rounded-md flex items-center flex-row'><AiOutlineDashboard className='mx-0.5' />Floor Board</button>
          </div>
        </div>
        <Header />
      </div >

    </div>

  );
}

export default App;