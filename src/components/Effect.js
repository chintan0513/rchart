import { useRef } from 'react';
import '../app.css';

import {
    Chart as ChartJS,
    LineElement,
    BarElement,
    Tooltip,
    Legend
} from 'chart.js'

import { getElementsAtEvent, Bar } from 'react-chartjs-2';
import Machines from './Machines';
ChartJS.register(LineElement, BarElement, Tooltip, Legend);

const Effect = () => {

    const data = {
        labels: ['Machine 1', 'Machine 2', 'Machine 3', 'Machine 4', 'Machine 5'],
        datasets: [
            {
                label: 'Machine Utilization',
                data: [5, 4, 5.30, 4.30, 6, 8],
                backgroundColor: ['white', 'black'],
                borderColor: ['white', 'black'],
                tension: 0,
                link: ['https://www.google.com/', 'https://www.google.com/', 'https://www.google.com/', 'https://www.google.com/',
                    'https://www.google.com/', 'https://www.google.com/', 'https://www.google.com/']
            },
        ]
    }

    const options = {
        indexAxis: 'y',
        scales: {
            y: {
                grid: {
                    display: false
                }
            },
            x: {
                grid: {
                    display: false
                },
                ticks: {
                    display: false
                }
            }
        },
    }
    const chartRef = useRef();
    const onClick = (e) => {
        if (getElementsAtEvent(chartRef.current, e).length > 0) {
            //console.log(getElementsAtEvent(chartRef.current, e))

            const clicDatasetIndex = getElementsAtEvent(chartRef.current, e)[0].datasetIndex
            //console.log(clicDatasetIndex)

            const dataPoint = getElementsAtEvent(chartRef.current, e)[0].index
            //console.log(dataPoint)
            const link = data.datasets[clicDatasetIndex].link[dataPoint]
            window.open(link, '_blank')
        }
    }
    return (
        <div className="flex flex-row gap-5">
            <div className='bg-[#5555] my-2 rounded-lg'>
                <Bar
                    data={data}
                    options={options}
                    onClick={onClick}
                    ref={chartRef}
                    className="h-72 bar w-full"
                >
                </Bar>
            </div>
            <div className='my-2 bg-[#5555] rounded-lg'>
                <div className="font-bold flex flex-col relative">
                    <select className='font-semibold w-28 text-center relative left-1/3  bg-transparent'>
                        <option>Machine 1
                        </option></select>
                    <button className="bg-[#5555] btn relative w-28 py-1 px-2 rounded-lg left-1/3">Running</button>
                </div>
                <div className='body flex flex-row'>
                    <div className='flex flex-col'>
                        <div className='flex flex-row p-3 gap-3 justify-between'><p className='20'>Throughput</p><span>100/Hours</span></div>
                        <div className='flex flex-row p-3 gap-3 justify-between'><p className='20'>OEE</p><span className='text-right'> 85 %</span></div>
                        <div className='flex flex-row p-3 gap-3 justify-between font-medium'><p className='20'>Capacity Utilization</p><span>55%</span></div>
                    </div>
                    <div>
                        <Machines />
                    </div>
                </div>
            </div>
            <div className="flex-col bg-[#5555] my-2 p-3 rounded-lg items-center">
                <div className="font-bold text-center">
                    <h1>Environmental Benefits</h1>
                </div>
                <div className='flex flex-row m-5'>
                    <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZl6Rq5k2AtVWI5NBuCip2SXZodxZW-ueYGg&usqp=CAU'
                        alt="CO2" className='img ' />
                    <div>
                        <p>CO2 Emission Saved</p>
                        <h2 className="font-bold">7,696,63</h2>
                    </div>
                </div>
                <div className="flex flex-row m-5">
                    <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSZKeXSRwsjHplNu9Yt5115hP_HKaBIsUS8bw&usqp=CAU'
                        alt="Tree Plant" className='img' />
                    <div>
                        <p>Equivalent Trees Planted</p>
                        <h2 className="font-bold">229,72</h2>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Effect;