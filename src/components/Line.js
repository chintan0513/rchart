import { useRef } from 'react';
import '../app.css'
import {
    Chart as ChartJS,
    LineElement,
    BarElement,
    PointElement,
    LinearScale,
    Tooltip,
    Legend
} from 'chart.js'

import { getElementsAtEvent, Line, Bar } from 'react-chartjs-2';
import FBar from './FBar';
ChartJS.register(LineElement, BarElement, PointElement, LinearScale, Tooltip, Legend);

const Liner = () => {

    const data = {
        labels: ['0', '7: 30', '9: 30', '11: 30', '1: 30', '3: 30', '5: 30', '7: 30'],
        datasets: [
            {
                label: 'Throughput',
                data: [250, 300, 450, 150, 100, 500, 300, 600],
                backgroundColor: ['#FC6300', '#263238'],
                borderColor: ['#FC6300', '#263238'],
                //borderColor: 'black',
                tension: 0,
                link: ['https://www.google.com/', 'https://www.google.com/', 'https://www.google.com/', 'https://www.google.com/',
                    'https://www.google.com/', 'https://www.google.com/', 'https://www.google.com/']
            },
        ]
    }

    const options = {
        scales: {
            y: {
                grid: {
                    display: false
                },
            },
            x: {
                grid: {
                    display: false
                },
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
        <div className='container items-center gap-96 flex flex-row relative text-center bottom-1 justify-start'>
            <Line
                data={data}
                options={options}
                onClick={onClick}
                ref={chartRef}
                className="line bg-[#5555] rounded-lg items-center" ></Line>
            <FBar />
        </div>
    );
}

export default Liner;
