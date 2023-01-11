// React
import React, { useState } from 'react'

// Icons
import { HiDotsVertical } from 'react-icons/hi'
import ReactApexChart from "../../../../components/@core/components/react-apexcharts";
import Select from "react-select";

const Chart = () => {
  const [targetVertical, setTargetVertical] = useState(null);
  const colourStyles = {
    option: (styles) => {
      // const color = chroma(data.color);
      
      return {
        ...styles,
        color: "black",
      };
    },
  };
  const colourOptions = [
    { value: "1", label: "1" },
    { value: "2", label: "2" },
    { value: "3", label: "3" },
  ];
  const [series, setSeries] = useState([
    {
      name: "Sales",
      data: [48, 38, 31, 15, 48, 32],
    },
    {
      name: "Refunds",
      data: [18, 13, 8, 5, 6, 8],
    },
  ]);
  const [options, setOptions] = useState({
    chart: {
      type: "bar",
      height: 450,
    },
    plotOptions: {
      bar: {
        horizontal: false,
        columnWidth: 60,
        borderRadius: 5,
        borderRadiusApplication: "end",
        borderRadiusWhenStacked: "last",
      },
    },
    tooltip: {
      enabled: true,
      enabledOnSeries: undefined,
      shared: true,
      followCursor: true,
      intersect: false,
      inverseOrder: false,
      custom: undefined,
      fillSeriesColor: false,
    },
    grid: {
      show: true,
      borderColor: "#6d829733",
      strokeDashArray: 0,
      position: "back",
      yaxis: {
        lines: {
          show: true,
          opacity: 0.1,
        },
      },
    },
    dataLabels: {
      enabled: false,
    },
    stroke: {
      show: true,
      width: 15,
      colors: ["transparent"],
    },
    xaxis: {
      categories: ["Sep", "Sep", "Nov", "Dec", "Jun", "feb"],
    },
    yaxis: {
      min: 0,
      max: 50,
      tickAmount: 5,
      labels: {
        formatter: (value) =>
          `$${value > 999 ? `${(value / 1000).toFixed(0)}` : value}k`,
      },
    },
    fill: {
      opacity: 1,
    },
    tooltip: {
      y: {
        formatter: function (val) {
          return "$ " + val + " thousands";
        },
      },
    },
    fill: {
      colors: ["#0096E6", "#3A70A1"],
    },
    colors: ["#0096E6", "#3A70A1"],
    chart: {
      foreColor: "#6d8297",
    },
    responsive: [
      {
        breakpoint: 321,
        options: {
          plotOptions: {
            bar: {
              columnWidth: 40,
              borderRadius: 2,
            }
          },
        }
      },
      {
        breakpoint: 600,
        options: {
          plotOptions: {
            bar: {
              columnWidth: 99.99,
              borderRadius: 5,
            }
          },
        }
      },
      {
        breakpoint: 1024,
        options: {
          plotOptions: {
            bar: {
              columnWidth: 99.99,
              borderRadius: 7,
            }
          },
        }
      },
      {
        breakpoint: 1100,
        options: {
          plotOptions: {
            bar: {
              columnWidth: 99.99,
              borderRadius: 2,
            }
          },
        }
      },
      {
        breakpoint: 1201,
        options: {
          plotOptions: {
            bar: {
              columnWidth: 99.99,
              borderRadius: 7,
              stroke: {
                show: true,
                width: 0,
                colors: ["transparent"],
              },
            }
          },
        }
      }
    ],
    labels: {
      colors: "dark:#fff #000",
      useSeriesColors: false,
    },
    legend: {
      show: true,
      showForSingleSeries: false,
      showForNullSeries: true,
      showForZeroSeries: true,
      position: 'top',
      horizontalAlign: 'right',
      floating: false,
      fontSize: '14px',
      fontFamily: 'Exo',
      fontWeight: 400,
      formatter: undefined,
      inverseOrder: false,
      width: undefined,
      height: undefined,
      tooltipHoverFormatter: undefined,
      customLegendItems: [],
      offsetX: 0,
      offsetY: 0,
      labels: {
        colors: "dark:#fff #000",
        useSeriesColors: false,
      },
      markers: {
        width: 12,
        height: 12,
        strokeWidth: 0,
        strokeColor: '#fff',
        fillColors: undefined,
        radius: 12,
        customHTML: undefined,
        onClick: undefined,
        offsetX: 0,
        offsetY: 0,
      },
    },
  });

  return (
    <div className="w-full rounded-3xl h-[508px] my-5 md:py-10 md:pl-10 md:pr-7 px-0 py-5">
      <div className="flex items-center justify-between pr-8">
        <h2 className="text-black dark:text-[lightblue] font-exo font-normal text-2xl">
          Revenue
        </h2>
        <HiDotsVertical className="text-xl" />
      </div>
      <div className="md:w-[calc(100%-4rem)] w-full mt-9">
        <div className="flex items-center gap-2">
          <div className="relative">
            <Select
              name="targetVertical"
              instanceId="targetVertical"
              className="relative z-20 chartdropdown"
              isClearable={false}
              classNamePrefix="select"
              styles={colourStyles}
              options={colourOptions}
              onChange={setTargetVertical}
              value={targetVertical || ""}
              placeholder="Monthly"
            />
          </div>
        </div>
        <div id="chart">
          <ReactApexChart
            options={options}
            series={series}
            type="bar"
            height={350}
            className="w-auto"
          />
        </div>
      </div>
    </div>
  )
}

export default Chart
