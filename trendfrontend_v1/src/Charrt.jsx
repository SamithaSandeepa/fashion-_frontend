import { Bar } from 'react-chartjs-2';
import {useEffect, useState} from 'react';
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


/*const labels = ['Sunday','Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
const data = {
    labels,
    datasets: [
        {
          label: 'Dataset 1',
          data:[1,2,3,4,5,4,1],
          borderColor: 'rgb(255, 99, 132)',
          backgroundColor: 'rgba(25, 90, 13, 0.5)',
        },
        {
          label: 'Dataset 2',
          data:[1,2,3,4,5,2,7],
          borderColor: 'rgb(53, 162, 235)',
          backgroundColor: 'rgba(53, 162, 235, 0.5)',
        },
      ],

};*/
  
const Horizontalchart =()=>{

   const [data, setData] = useState({
        labels:[],
        datasets: [
          {
            label: 'Dataset 1',
            data:[],
            borderColor: 'rgb(255, 99, 132)',
            backgroundColor: [],
          },
          {
            label: 'Dataset 2',
            data:[],
            borderColor: 'rgb(53, 162, 235)',
            backgroundColor: [],
          },
          {
            label: 'Dataset 3',
            data:[],
            borderColor: 'rgb(53, 162, 235)',
            backgroundColor: [],
          },
        ],
      });
      
    useEffect(()=> {
       const fetchData= async()=> {
           const url = 'https://jsonplaceholder.typicode.com/comments'
          //const labelSet = []
           const dataSet1 = [];
           const dataSet2 = [];
           const dataSet3 = [];
         await fetch(url).then((data)=> {
             console.log("Api data", data)
             const res = data.json();
             return res
         }).then((res) => {
             console.log("ressss", res)
            for (const val of res) {
                dataSet1.push(val.id);
                dataSet2.push(val.postId);
                dataSet3.push(val.postId);
                // labelSet.push(val.name)
            }
            setData({
              
                 labels:['September','October', 'November', 'May', 'March', 'July', 'January','February','December','August','April'],
                datasets: [
                  {
                    label: 'Dataset ID',
                    data:dataSet1,
                    borderColor: 'rgb(255, 99, 132)',
                    backgroundColor:'rgb(255, 99, 132)' ,
                  },
                  {
                    label: 'Dataset ID2',
                    data:dataSet2,
                    borderColor: 'rgb(53, 162, 235)',
                    backgroundColor: 'rgb(53, 162, 235)',
                  },
                  {
                    label: 'Dataset ID3',
                    data:dataSet3,
                    borderColor: 'rgb(53, 162, 235)',
                    backgroundColor:'rgb(53, 162, 235)' ,
                  },
                ],
              })
            console.log("arrData", dataSet1, dataSet2)
         }).catch(e => {
                console.log("error", e)
            })
        }
        
        fetchData();
    },[]) 
   
    return(  <div style={{width:'80%', height:'50%'}}> <Bar data={data} options={options}/> </div>)
}
export default Horizontalchart;
