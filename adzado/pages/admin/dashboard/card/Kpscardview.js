// React
import React from 'react'

// Components
import ReactApexcharts from '../../../../components/@core/components/react-apexcharts'

// Icons
import { HiDotsVertical } from 'react-icons/hi'

const Kpscardview = () => {
  const data = {
    options: {
      responsive: [
        {
          breakpoint: 1300,
          options: {
            chart: {
              width: 300,
            },
          },
        },
        {
          breakpoint: 1200,
          options: {
            chart: {
              width: 250,
            },
          },
        },
        {
          breakpoint: 1024,
          options: {
            chart: {
              width: 500,
            },
          },
        },
        {
          breakpoint: 800,
          options: {
            chart: {
              width: 500,
            },
          },
        },
        {
          breakpoint: 700,
          options: {
            chart: {
              width: 300,
            },
          },
        },

      ],
      labels: ["Filled", "Open"],
      fill: {
        colors: ["#0096E6", "#3A70A1"],
      },
      colors: ["#0096E6", "#3A70A1"],
      chart: {
        foreColor: ["#ffffff66"],
      },
      stroke: {
        show: true,
        width: 0,
        colors: ["transparent"],
      },
      dataLabels: {
        enabled: false,
      },
      legend: {
        show: true,
        showForSingleSeries: true,
        showForNullSeries: true,
        showForZeroSeries: true,
        position: "bottom",
        horizontalAlign: "center",
        floating: false,
        fontSize: "14px",
        fontFamily: "Exo",
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
          width: 18,
          height: 18,
          strokeWidth: 0,
          strokeColor: '#fff',
          fillColors: undefined,
          radius: 0,
          customHTML: undefined,
          onClick: undefined,
          offsetX: -5,
          offsetY: 0,
        },
      },
    },

    series: [14653, 2564],
  };
  return (
    <div className="bg-white dark:bg-[#051d43] lg:max-w-[376px] w-auto rounded-3xl h-[508px] my-5 lg:py-10 py-5 lg:pl-10 lg:pr-7 px-5">
      <div className="flex items-center justify-between pr-8">
        <h2 className="text-black dark:text-[lightblue] font-exo font-normal text-2xl">
          Total CAP
        </h2>
        <HiDotsVertical className="text-xl" />
      </div>
      <div className="flex justify-center items-center h-full">
        <div>
          <ReactApexcharts
            options={data.options}
            series={data.series}
            labels={data.labels}
            type="donut"
            width={"350px"}
          />
        </div>
      </div>
    </div>
  )
}

export default Kpscardview
