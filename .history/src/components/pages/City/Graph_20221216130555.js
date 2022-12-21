/** @format */

import React from "react";
import HOC from "../../layout/HOC";
import { Bar } from "react-chartjs-2";

const Graph = () => {
  return (
    <section>
      <div className="pb-4 sticky top-0  w-full flex justify-between items-center bg-white">
        <span className="tracking-widest text-slate-900 font-semibold uppercase ">
          Analatics Graph
        </span>
      </div>
      <div className="App">
      <div style={{ maxWidth: "650px" }}>
        <Bar
          data={{
           
            labels: ["1st bar", "2nd bar", "3rd bar", "4th bar"],
            datasets: [
              {
               
                label: "total count/value",
                data: [1552, 1319, 613, 1400],
                // Color of each bar
                backgroundColor: ["aqua", "green", "red", "yellow"],
                // Border color of each bar
                borderColor: ["aqua", "green", "red", "yellow"],
                borderWidth: 0.5,
              },
            ],
          }}
          // Height of graph
          height={400}
          options={{
            maintainAspectRatio: false,
            scales: {
              yAxes: [
                {
                  ticks: {
                    // The y-axis value will start from zero
                    beginAtZero: true,
                  },
                },
              ],
            },
            legend: {
              labels: {
                fontSize: 15,
              },
            },
          }}
        />
      </div>
    </div>
    </section>
    
  );
};

export default HOC(Graph);
