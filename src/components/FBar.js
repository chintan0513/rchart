import { useRef } from 'react';
import '../app.css'
import {
    Chart as ChartJS,
    BarElement,
    PointElement,
    LinearScale,
    Tooltip,
    Legend
} from 'chart.js'

import { getElementsAtEvent, Bar } from 'react-chartjs-2';
ChartJS.register(BarElement, PointElement, LinearScale, Tooltip, Legend);

const FBar = () => {
    const data = {
        labels: ['M 1', 'M 2', 'M 3', 'M 4', 'M 5', 'M 6', 'M 7', 'M 8'],
        datasets: [
            {
                label: 'Throughput',
                data: [5, 300, 450, 150, 100, 500, 300, 600],
                backgroundColor: ['#263238'],
                borderColor: ['#263238'],
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
        <Bar
            data={data}
            options={options}
            onClick={onClick}
            ref={chartRef}
            className="bar bg-[#5555] rounded-lg w-76 h-5"
        >
        </Bar>
    );
}

export default FBar;
