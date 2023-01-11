import React, { useState } from "react";
// Next
import Image from "next/image";

// Layout
import AdminLayout from "../../../components/@core/layouts/admin-layout";

// icon
import Addusericon from "../../../public/images/addusericon.svg";

// Components
import Table from "./table";
import ReactApexcharts from "../../../components/@core/components/react-apexcharts";
import ProtectRoute from "../../context/protect";

export default function Disputes() {
  // line chart
  const [series, setSeries] = useState([
    {
      name: "Sales",
      data: [0, 3, 1, 3, 5, 6.5, 8],
    },
  ]);
  const [options, setOptions] = useState({
    chart: {
      type: "line",
      height: 450,
    },
    markers: {
      discrete: [
        {
          seriesIndex: 0,
          dataPointIndex: 0,
          fillColor: "#FFDF66",
          strokeColor: "transparent",
          size: 7,
        },
        {
          seriesIndex: 0,
          dataPointIndex: 5,
          fillColor: "#61DEED",
          strokeColor: "transparent",
          size: 7,
        },
        {
          seriesIndex: 0,
          dataPointIndex: 6,
          fillColor: "#618EFF",
          strokeColor: "transparent",
          size: 7,
        },
      ],
    },

    stroke: {
      width: 5,
      curve: "smooth",
    },
    title: {
      text: "Active Users Weekly View",
      align: "left",
      style: {
        fontWeight: "semibold",
        fontFamily: "Exo', sans-serif",
        fontSize: "14px",
        color: "#fff",
      },
    },
    fill: {
      type: "gradient",
      gradient: {
        shade: "dark",
        gradientToColors: ["#FFDF66", "#61DEED", "#618DFF"],
        shadeIntensity: 1,
        type: "horizontal",
        opacityFrom: 1,
        opacityTo: 1,
        stops: [0, 100],
      },
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
    xaxis: {
      categories: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
    },
    yaxis: {
      min: 0,
      max: 8,
      tickAmount: 4,
      labels: {
        formatter: (value) =>
          `$${value > 999 ? `${(value / 1000).toFixed(-1)}` : value}k`,
      },
    },
    chart: {
      foreColor: "#6d8297",
    },
  });

  // donutchart
  const data = {
    options: {
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
        show: false,
      },
      labels: ["Total Users", "Active Users"],
    },
    series: [1221, 255],
  };
  return (
    <ProtectRoute>
      <AdminLayout>
        <>
          <div className="bg-[#F8F8F8] dark:dark radial md:px-10 md:py-10 px-4 py-10 h-[calc(100vh-120px)] overflow-y-auto">
            <h1 className="font-exo font-normal text-[20px] dark:text-white text-black">
              Manage Users
            </h1>
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
              <div className="col-span-1  bg-[#062348] h-[210px] flex justify-center items-center rounded-md border-[2px] border-white border-dashed">
                <div>
                  <Image src={Addusericon} alt="addusericon" />
                </div>
                <h3 className="font-exo font-semibold text-[23px] text-white">
                  Add User
                </h3>
              </div>
              <div className="col-span-1 bg-[#062348]  flex-wrap md:flex-nowrap py-8 sm:pl-8 sm:px-0 px-8 rounded-md flex md:justify-center justify-between items-center md:h-[210px] h-auto">
                <div className="md:block flex flex-wrap w-full sm:w-auto items-center gap-5 justify-between">
                  <div>
                    <h2 className="text-white font-exo text-[30.19px] font-normal">
                      1,454
                    </h2>
                    <p className="text-white font-exo text-[11] font-normal">
                      Total Users
                    </p>
                  </div>
                  <div className="md:mt-5 mt-0">
                    <h2 className="dark:text-[#0096E6] text-white font-exo text-[30.19px] font-normal">
                      1221
                    </h2>
                    <p className="text-white font-exo text-[11] font-normal">
                      Active Users
                    </p>
                  </div>
                </div>
                <div className="mx-auto sm:mx-0 sm:ml-auto">
                  <ReactApexcharts
                    options={data.options}
                    series={data.series}
                    labels={data.labels}
                    type="donut"
                    width={220}
                  />
                </div>
              </div>
              <div className="col-span-1  h-[210px] user">
                <div>
                  <div id="chart">
                    <ReactApexcharts
                      options={options}
                      series={series}
                      type="line"
                      height={189}
                      background={"red"}
                      width={"100%"}
                      className="w-auto"
                    />
                  </div>
                </div>
              </div>
            </div>
            <Table />
          </div>
        </>
      </AdminLayout>
    </ProtectRoute>
  );
}
