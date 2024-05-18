import { useEffect, useState } from 'react';
import {Chart as ChartJs, Tooltip, Title, ArcElement, Legend} from 'chart.js';
import { Doughnut} from 'react-chartjs-2';
ChartJs.register(
  Tooltip, Title, ArcElement, Legend
);

function App() {
  const [data, setData] = useState({
    datasets: [{
        data: [],
        backgroundColor:[]
    },
  ],
  labels: [],
 
});
  useEffect(()=> {
    const fetchData = () =>  {
      fetch('https://jsonplaceholder.typicode.com/users').then((data) => {
        const res = data.json();
        return res
      }).then((res) => {
        console.log("resss", res)
        const label = [];
        const data = [];
        for(var i of res) {
            label.push(i.name);
            data.push(i.id)
        }
        setData(
          {
            datasets: [{
                data:data,
                backgroundColor:[
                  'red',
                  'blue',
                  'yellow',
                  'pink',
          'purple',
          'orange',
          'greeen'
                ]
            },
          ],
          labels:label, 
        }
        )

      }).catch(e => {
        console.log("error", e)
      }) 
    }
  fetchData();
  }, [])
  return (
    <div className="App" style={{width:'80%', height:'70%'}}>
      <Doughnut data={data}/>
    </div>
  );
}

export default App;