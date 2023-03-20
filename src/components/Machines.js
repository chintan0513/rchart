import { useRef } from 'react';
import '../app.css';

import {
    Chart as ChartJS,

    Tooltip,
    Legend
} from 'chart.js'

import { getElementsAtEvent, Bar } from 'react-chartjs-2';
ChartJS.register(Tooltip, Legend);

const Machines = () => {

    const data = {
        labels: ['Machine 1', 'Machine 2', 'Machine 3', 'Machine 4', 'Machine 5', 'Machine 6', 'Machine 7',
            'Machine 8', 'Machine 9', 'Machine 10', 'Machine 11', 'Machine 12', 'Machine 13'],
        datasets: [
            {
                label: 'Machine Utilization',
                data: [5, 4, 5.30, 4.30, 6, 8, 9.5, 5.5, 6, 7, 8, 9, 0],
                backgroundColor: ['#FC6300', '#263238'],
                borderColor: ['#FC6300', '#263238'],
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
                ticks: {
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
        <div>
            <Bar
                data={data}
                options={options}
                onClick={onClick}
                ref={chartRef}
                className="h-60 bar w-60"
            >
            </Bar>
        </div>
    );
}

export default Machines;