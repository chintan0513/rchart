import { AiOutlineSetting } from "react-icons/ai";
import Chart from "./Chart";
import { GrUserWorker } from "react-icons/gr";
import { GiCctvCamera } from "react-icons/gi";
//import Liner from "./Line";

const User = () => {
    return (
        <div className="flex flex-row">
            <div className="user flex flex-col h-56  rounded-lg bg-[#5555] mt-2 p-3">
                <div className="px-1 py-2  text-[#lighgray]">
                    <h1 className="font-bold text-3xl">Hello Pradip,</h1>
                    <p className="text-lg">Welcome back to ALvision Stamp!</p>
                </div>
                <div className="flex flex-row justify-between gap-5 items-center text-center">
                    <div className="flex flex-col outline-2 outline rounded-md">
                        <div className="text-5xl px-3 py-1 justify-between gap-2 flex font-semibold"><AiOutlineSetting />
                            <h1>10</h1>
                        </div>
                        <p>Machine Count</p>
                    </div>
                    <div className="flex flex-col outline-2 outline rounded-md">
                        <div className="text-5xl px-3 py-1 justify-between gap-2 flex font-semibold"><GrUserWorker />
                            <h1>10</h1>
                        </div>
                        <p>Worker Count</p>
                    </div>
                    <div className="flex flex-col outline-2 outline rounded-md">
                        <div className="text-5xl px-3 py-1 justify-between gap-2 flex font-semibold"><GiCctvCamera />
                            <h1>5</h1>
                        </div>
                        <p>Camera Count</p>
                    </div>
                    <div className="flex flex-col w-40 outline-2 outline rounded-md">
                        <p className="text-right">⇧34%</p>
                        <div className="text-4xl px-3 py-0 justify-between gap-1 flex font-semibold"><AiOutlineSetting />
                            <h1>525</h1>
                        </div>
                        <p className="w-28">Production Count</p>
                    </div>
                </div>
            </div>

            <div className="flex rounded-lg w-1/3 absolute right-0 mx-2 mt-2 bg-[#5555] ">
                <Chart />
            </div>

        </div>
    );
}

export default User;