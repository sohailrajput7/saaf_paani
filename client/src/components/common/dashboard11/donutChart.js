import React, { Component } from "react";
import C3Chart from "react-c3js";

function DonutChart(props) {
  const { firstValue, secondValue } = props;

  const data = {
    columns: [
      // each columns data
      ["data1", firstValue],
      ["data2", secondValue],
    ],
    type: "donut",
    colors: {
      data1: "#FFA117",
      data2: "#ffd861",
    },
    names: {
      data1: "Total Profit",
      data2: "Total Sales",
    },
  };
  return (
    <C3Chart
      data={data}
      height="268px"
      axis={{}}
      padding={{
        bottom: 20,
        top: 0,
      }}
      legend={{ show: false }}
    />
  );
}

export default DonutChart;
