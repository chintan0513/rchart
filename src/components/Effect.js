import { useRef } from 'react';
import '../app.css';

import {
    Chart as ChartJS,
    LineElement,
    BarElement,
    PointElement,
    LinearScale,
    Tooltip,
    Legend
} from 'chart.js'

import { getElementsAtEvent, Bar } from 'react-chartjs-2';
ChartJS.register(LineElement, BarElement, PointElement, LinearScale, Tooltip, Legend);

const Effect = () => {

    const data = {
        labels: ['Machine 1', 'Machine 2', 'Machine 3', 'Machine 4', 'Machine 5'],
        datasets: [
            {
                label: 'Machine Utilization',
                data: [5, 4, 5.30, 4.30, 6, 8],
                backgroundColor: ['#FC6300', '#263238'],
                borderColor: ['#FC6300', '#263238'],
                tension: 0,
                link: ['https://www.google.com/', 'https://www.google.com/', 'https://www.google.com/', 'https://www.google.com/',
                    'https://www.google.com/', 'https://www.google.com/', 'https://www.google.com/']
            },
        ]
    }

    const options = {
        indexAxis: 'y',
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
            <div className='bg-[#5555] my-5 rounded-lg'>
                <Bar
                    data={data}
                    options={options}
                    onClick={onClick}
                    ref={chartRef}
                    className="h-60 bar w-60"
                >
                </Bar>
            </div>
            <div className='my-5 bg-[#5555] rounded-lg'>
                <div className="font-bold flex flex-col">
                    <select className='font-semibold'>
                        <option>Machine 1
                        </option></select>
                    <span>Running</span>
                </div>
                <div className='body'>

                </div>
            </div>
            <div className="flex-col bg-[#5555] my-5 rounded-lg items-center">
                <div className="font-bold">
                    <h1>Environmental Benefits</h1>
                </div>
                <div>
                    <p>CO2 Emission Saved</p>
                    <h2 className="font-bold">7,696,63</h2>
                </div>
                <div className="">
                    <p>Equivalent Trees Planted</p>
                    <h2 className="font-bold">229,72</h2>
                </div>
            </div>
        </div>
    );
}

export default Effect;