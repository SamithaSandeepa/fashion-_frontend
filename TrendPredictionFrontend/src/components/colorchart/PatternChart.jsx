import { Bar } from 'react-chartjs-2';
import { useEffect, useState } from 'react';
import axios from "axios";
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js';

ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
);

const options = {
    indexAxis: 'x',
    elements: {
        bar: {
            borderWidth: 2,
        },
    },
    responsive: true,
    plugins: {
        legend: {
            position: 'right',
        },
        title: {
            display: true,
            text: 'Chart.js Horizontal Bar Chart',
        },
    },
};

const Horizontalchart = () => {
    const [data, setData] = useState({
        labels: [],
        datasets: [
            {
                label: '2023',
                data: [],
                borderColor: 'rgb(255, 99, 132)',
                backgroundColor: [],
            },
            {
                label: '2024',
                data: [],
                borderColor: 'rgb(53, 162, 235)',
                backgroundColor: [],
            },
            {
                label: '2025',
                data: [],
                borderColor: 'rgb(53, 162, 235)',
                backgroundColor: [],
            },
        ],
    });

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get("https://jsonplaceholder.typicode.com/comments");
                const responseData = response.data;

                const dataSet1 = [];
                const dataSet2 = [];
                const dataSet3 = [];

                responseData.forEach(val => {
                    dataSet1.push(Math.random() * 100);
                    dataSet2.push(Math.random() * 100);
                    dataSet3.push(Math.random() * 100);
                });

                setData({
                    labels: ['September', 'October', 'November', 'May', 'March', 'July', 'January', 'February', 'December', 'August', 'April'],
                    datasets: [
                        {
                            label: '2023',
                            data: dataSet1,
                            borderColor: 'rgb(135, 206, 235)',
                            backgroundColor: 'rgb(135, 206, 235)',
                        },
                        {
                            label: '2024',
                            data: dataSet2,
                            borderColor: 'rgb(0, 0, 0)',
                            backgroundColor: 'rgb(0, 0, 0)',
                        },
                        {
                            label: '2025',
                            data: dataSet3,
                            borderColor: 'rgb(196, 164, 132)',
                            backgroundColor: 'rgb(169, 164, 132)',
                        },
                    ],
                });
            } catch (error) {
                console.log("Error fetching data:", error);
            }
        };

        fetchData();
    }, []);

    return (
        <div style={{ width: '80%', height: '50%' }}>
            <Bar data={data} options={options} />
        </div>
    );
};

export default Horizontalchart;
