import "./style.css";

import "aos/dist/aos.css";
import AOS from "aos";

import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

import ApexCharts from "apexcharts";

AOS.init();

import javascriptLogo from "./javascript.svg";
import viteLogo from "/vite.svg";
import { setupCounter } from "./counter.js";

document.querySelector("#app").innerHTML = `
  <div >
    <a href="https://vitejs.dev" target="_blank">
      <img src="${viteLogo}" class="logo" alt="Vite logo" />
    </a>
    <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank">
      <img src="${javascriptLogo}" class="logo vanilla" alt="JavaScript logo" />
    </a>

    
    <h1>Hello Vite!</h1>
    <div class="card">
      <button id="counter" type="button"></button>
    </div>
    <p class="read-the-docs" data-aos="fade-up">
      Click on the Vite logo to learn more
    </p>
  </div>
`;

setupCounter(document.querySelector("#counter"));

var options = {
  series: [
    {
      name: "north",
      data: [
        {
          x: 1996,
          y: 322,
        },
        {
          x: 1997,
          y: 324,
        },
        {
          x: 1998,
          y: 329,
        },
        {
          x: 1999,
          y: 342,
        },
        {
          x: 2000,
          y: 348,
        },
        {
          x: 2001,
          y: 334,
        },
        {
          x: 2002,
          y: 325,
        },
        {
          x: 2003,
          y: 316,
        },
        {
          x: 2004,
          y: 318,
        },
        {
          x: 2005,
          y: 330,
        },
        {
          x: 2006,
          y: 355,
        },
        {
          x: 2007,
          y: 366,
        },
        {
          x: 2008,
          y: 337,
        },
        {
          x: 2009,
          y: 352,
        },
        {
          x: 2010,
          y: 377,
        },
        {
          x: 2011,
          y: 383,
        },
        {
          x: 2012,
          y: 344,
        },
        {
          x: 2013,
          y: 366,
        },
        {
          x: 2014,
          y: 389,
        },
        {
          x: 2015,
          y: 334,
        },
      ],
    },
    {
      name: "south",
      data: [
        {
          x: 1996,
          y: 162,
        },
        {
          x: 1997,
          y: 90,
        },
        {
          x: 1998,
          y: 50,
        },
        {
          x: 1999,
          y: 77,
        },
        {
          x: 2000,
          y: 35,
        },
        {
          x: 2001,
          y: -45,
        },
        {
          x: 2002,
          y: -88,
        },
        {
          x: 2003,
          y: -120,
        },
        {
          x: 2004,
          y: -156,
        },
        {
          x: 2005,
          y: -123,
        },
        {
          x: 2006,
          y: -88,
        },
        {
          x: 2007,
          y: -66,
        },
        {
          x: 2008,
          y: -45,
        },
        {
          x: 2009,
          y: -29,
        },
        {
          x: 2010,
          y: -45,
        },
        {
          x: 2011,
          y: -88,
        },
        {
          x: 2012,
          y: -132,
        },
        {
          x: 2013,
          y: -146,
        },
        {
          x: 2014,
          y: -169,
        },
        {
          x: 2015,
          y: -184,
        },
      ],
    },
  ],
  chart: {
    type: "area",
    height: 350,
  },

  dataLabels: {
    enabled: false,
  },
  
  stroke: {
    curve: "straight",
  },

  title: {
    text: "Area with Negative Values",
    align: "left",
    style: {
      fontSize: "14px",
    },
  },
  xaxis: {
    type: "datetime",
    axisBorder: {
      show: false,
    },
    axisTicks: {
      show: false,
    },
  },
  yaxis: {
    tickAmount: 4,
    floating: false,

    labels: {
      style: {
        colors: "#8e8da4",
      },
      offsetY: -7,
      offsetX: 0,
    },
    axisBorder: {
      show: false,
    },
    axisTicks: {
      show: false,
    },
  },
  fill: {
    opacity: 0.5,
  },
  tooltip: {
    x: {
      format: "yyyy",
    },
    fixed: {
      enabled: false,
      position: "topRight",
    },
  },
  grid: {
    yaxis: {
      lines: {
        offsetX: -30,
      },
    },
    padding: {
      left: 20,
    },
  },
};

var chart = new ApexCharts(document.querySelector("#chart2"), options);
chart.render();
