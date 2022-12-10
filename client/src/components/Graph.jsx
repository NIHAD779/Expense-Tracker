import React from "react";
import { Chart, ArcElement } from "chart.js";
import { Doughnut } from "react-chartjs-2";
import Labels from "./Labels";
import { chart_Data } from "../helper/helper";
import { default as api } from "../store/apiSlice";

Chart.register(ArcElement);

// const config = {
//   data: {
//     datasets: [
//       {
//         data: [10, 20, 30],
//       },
//     ],

//     // These labels appear in the legend and in the tooltips when hovering different arcs
//     labels: ["Red", "Yellow", "Blue"],
//   },
//   options: {
//     cutout: 115,
//   },
// };

const Graph = () => {
  const { data, isFetching, isSuccess, isError } = api.useGetLabelsQuery();

  let graphData;
  if (isFetching) {
    graphData = <div>Fetching</div>;
  } else if (isSuccess) {
    chart_Data(data);
    graphData = <Doughnut {...chart_Data(data)} />;
  } else if (isError) {
    graphData = <div>Error</div>;
  }

  return (
    <div className="">
      <div>
        {graphData}
        {/* <Doughnut data={config.data} /> */}
        <h3>
          Total<span>${0}</span>
        </h3>
      </div>
      <div>
        <Labels></Labels>
      </div>
    </div>
  );
};

export default Graph;
