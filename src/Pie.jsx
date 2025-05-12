import { Doughnut } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend} from 'chart.js';
ChartJS.register(ArcElement, Tooltip, Legend);

import './Pie.css';

const Pie= () => {
    const data = {
        labels: ["Present", "Absent", "Holidays"],
        datasets: [{
            label:"Attendance",
            data: [20, 5, 5],
            backgroundColor: [
                '#07cdf0',
                '#2011c2',
                '#a80dbf',

            ],

            hoverOffset: 4,
            
        }],
    };

    const options = {
        cutout: '70%',
        radius: 200,
        responsive: true,
        maintainAspectRatio: false, // Allow it to scale to container
        layout: {
            padding: 0
        },
        plugins: {
            position: 'right', // Move it from bottom to right
            labels: {
                padding: 16,     // Add spacing between items
                boxWidth: 30,
                boxHeight: 30
            },
            title: {
                display: false
            }
        }
    };
    

      return(
        <div id="PieWrapper">
            <Doughnut data={data} options={options} />
        </div>

      )


}

export default Pie;