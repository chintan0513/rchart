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

import { getElementsAtEvent, Doughnut } from 'react-chartjs-2';
ChartJS.register(LineElement, BarElement, ArcElement, PointElement, CategoryScale, LinearScale, Tooltip, Legend);

const Chart = (rchart) => {
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

    const textCenter = {
        id: 'textCenter',
        beforeDraw: (chart, args, pluginOptions) => {
            const { ctx, chartArea } = chart;
            if (!chartArea) {
                return;
            }
            const { width, height } = chartArea;
            ctx.restore();
            const fontSize = (height / 114).toFixed(2);
            ctx.font = `${fontSize}em sans-serif`;
            // ctx.textBaseline = 'middle';
            // ctx.textAlign = 'center';
            const text = '50%',
                textX = Math.round((width - ctx.measureText(text).width) / 1.9),
                textY = height / 0.8;
            ctx.fillText(text, textX, textY);
            ctx.save();
        }

    }
    return (
        <div className="flex flex-row">
            <Doughnut
                data={data}
                options={options}
                onClick={onClick}
                ref={chartRef}
                plugins={[textCenter]}
                className="Doughnut flex"
            ></Doughnut>
        </div>
    );
}

export default Chart;