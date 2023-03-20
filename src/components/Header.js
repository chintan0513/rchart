import { AiOutlineSearch, AiOutlineBell, AiOutlineMail, AiFillFilter, AiOutlineSetting } from 'react-icons/ai';
import '../app.css';
import Effect from './Effect';

import User from './User';

const Header = () => {
    return (
        <div className='p-3 '>
            <div className='search flex flex-row-row text-lg  items-center'>
                <div className='flex w-96'>
                    <input className='p-1 w-96 rounded-md' type="text" placeholder='Search' />
                    <button className='p-1 w-12  rounded-md bg-[lightgray]'><AiOutlineSearch /></button>
                </div>
                <div className='flex text-2xl ml-96 text-center items-center absolute right-0'>
                    <button className='mx-1'><AiOutlineBell /></button>
                    <button className='mx-1'><AiOutlineMail /></button>
                    <button className='mx-1'><AiOutlineSetting /></button>
                    <button className='flex mx-2 rounded-md bg-[lightgray] items-center p-1'>Filter<AiFillFilter className='' /></button>
                    <div>
                        <button className='border-2 border-b-red-500 border-t-red-500 flex'>RABS
                            <img src="data:image/jpeg;base64,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"
                                alt="avatar" className='h-10 rounded-full w-10' />
                        </button>
                    </div>
                    <select className='bg-[#f1f1f1] hover:bg-[lightgray] rounded-md m-1'>
                        <option></option>
                        <option>1</option>
                        <option>1</option>
                        <option>1</option>
                    </select>
                </div>
            </div>
            <User />
            <Effect />
        </div>
    );
}

export default Header;
