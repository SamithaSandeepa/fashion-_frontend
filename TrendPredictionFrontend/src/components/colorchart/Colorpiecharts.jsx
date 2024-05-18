import { useEffect, useState } from 'react';
import { Chart as ChartJs, Tooltip, Title, ArcElement, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';
import axios from 'axios';

ChartJs.register(
  Tooltip, Title, ArcElement, Legend
);

function App() {
  const [data, setData] = useState({
    datasets: [{
      data: [],
      backgroundColor: []
    }],
    labels: [],
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://jsonplaceholder.typicode.com/users');
        const users = response.data;

        const labels = [];
        const userData = [];

        users.forEach(user => {
          labels.push(user.name);
          userData.push(user.id);
        });

        setData({
          datasets: [{
            data: userData,
            backgroundColor: [
              'red',
              'blue',
              'yellow',
              'pink',
              'purple',
              'orange',
              'green'
            ]
          }],
          labels: labels,
        });
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="App" style={{ width: '30%', height: '30%' }}>
      <Doughnut data={data} />
    </div>
  );
}

export default App;
