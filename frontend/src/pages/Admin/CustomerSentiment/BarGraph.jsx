// BarGraph.jsx

import React from 'react';
// Import your actual bar chart library component and its required sub-components
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';
import './BarGraph.css'; // Make sure to create a corresponding CSS file

export const BarGraph = ({ data }) => {
    // Transform your data into the format expected by your bar chart component if needed
    // This is an example transformation; you may need to adjust it based on the actual data structure
    const formattedData = [
        { name: 'slightly negative', count: data.slightly_negative },
        { name: 'negative', count: data.negative },
        { name: 'neutral', count: data.neutral },
        { name: 'positive', count: data.positive },
        { name: 'slightly positive', count: data.slightly_positive },
    ];

    return (
        <BarChart width={600} height={300} data={formattedData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="count" fill="#8884d8" />
        </BarChart>
    );
};
 
// export const BarGraph = ({ data }) => {
//   // Transform your data into the format expected by your bar chart component if needed
//   // This is an example transformation; you may need to adjust it based on the actual data structure
//   const formattedData = [
//     { name: 'slightly negative', count: data.slightly_negative },
//     { name: 'negative', count: data.negative },
//     { name: 'neutral', count: data.neutral },
//     { name: 'positive', count: data.positive },
//     { name: 'slightly positive', count: data.slightly_positive },
//   ];

//   return (
//     <BarChart width={600} height={300} data={formattedData}>
//       <CartesianGrid strokeDasharray="3 3" />
//       <XAxis dataKey="name" />
//       <YAxis />
//       <Tooltip />
//       <Legend />
//       <Bar dataKey="count" fill="#8884d8" />
//     </BarChart>
//   );
// };


