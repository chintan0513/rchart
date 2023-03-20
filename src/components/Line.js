import { useRef } from 'react';
import '../app.css'
import {
    Chart as ChartJS,
    LineElement,
    ArcElement,
    BarElement,
    PointElement,
    CategoryScale,
    LinearScale,
    Tooltip,
    Legend
} from 'chart.js'

import { getElementsAtEvent, Line, Bar } from 'react-chartjs-2';
ChartJS.register(LineElement, BarElement, ArcElement, PointElement, CategoryScale, LinearScale, Tooltip, Legend);

const Liner = () => {

    const data = {
        labels: ['7:30', '9:30', '11:30', '1:30', '3:30', '5:30', '7:30'],
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
            <Line
                data={data}
                options={options}
                onClick={onClick}
                ref={chartRef}
                className="line" ></Line>
            <Bar
                data={data}
                options={options}
                onClick={onClick}
                ref={chartRef}
                className="bar"
            >
            </Bar>
        </div>
    );
}

export default Liner;
