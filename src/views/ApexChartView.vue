<template>
    <section class="View-section overflow-hidden p-3 pt-0">
        <div class="header-section mb-3">
            <h1 class="m-0">ApexChart</h1>
            <div class="path">
                <router-link class="links active me-1" to="./DashboardView.vue">
                    Home / Charts
                </router-link>
                / ApexChart
            </div>
            <p class="mt-4">
                ApexCharts Examples. You can check the
                <span class="text-primary">official website</span> for more
                examples.
            </p>
        </div>
        <div class="wrapper row align-items-start mb-3">
            <div class="part row col-lg-6 col-12 restart pe-lg-3">
                <div class="col-12 restart mb-3">
                    <div class="card">
                        <div class="card-body">
                            <h5 class="card-title mb-3">Line Chart</h5>
                            <apexchart
                                type="line"
                                height="350"
                                :options="chartOptionsLineChart"
                                :series="seriesLineChart"
                            />
                        </div>
                    </div>
                </div>
                <div class="col-12 restart mb-3">
                    <div class="card">
                        <div class="card-body">
                            <h5 class="card-title mb-3">Column Chart</h5>
                            <apexchart
                                type="bar"
                                :options="chartOptionsColumnChart"
                                :series="seriesColumnChart"
                            />
                        </div>
                    </div>
                </div>
                <div class="col-12 restart mb-3">
                    <div class="card">
                        <div class="card-body">
                            <h5 class="card-title mb-3">Pie Chart</h5>
                            <apexchart
                                type="pie"
                                height="350"
                                :options="chartOptionsPieChart"
                                :series="seriesPieChart"
                            />
                        </div>
                    </div>
                </div>
                <div class="col-12 restart mb-3">
                    <div class="card">
                        <div class="card-body">
                            <h5 class="card-title mb-3">Radar Chart</h5>
                            <apexchart
                                type="radar"
                                height="350"
                                :options="chartOptionsRadarChart"
                                :series="seriesRadarChart"
                            />
                        </div>
                    </div>
                </div>
                <div class="col-12 restart mb-3">
                    <div class="card">
                        <div class="card-body">
                            <h5 class="card-title mb-3">Radial Bar Chart</h5>
                            <apexchart
                                type="radialBar"
                                height="350"
                                :options="chartOptionsRadialChart"
                                :series="seriesRadialChart"
                            />
                        </div>
                    </div>
                </div>
            </div>
            <div class="part row col-lg-6 col-12 restart pe-lg-3">
                <div class="col-12 restart mb-3">
                    <div class="card">
                        <div class="card-body">
                            <h5 class="card-title mb-3">Area Chart</h5>
                            <apexchart
                                type="area"
                                height="350"
                                :options="chartOptionsAreaChart"
                                :series="seriesAreaChart"
                            />
                        </div>
                    </div>
                </div>
                <div class="col-12 restart mb-3">
                    <div class="card">
                        <div class="card-body">
                            <h5 class="card-title mb-3">Bar Chart</h5>
                            <apexchart
                                type="bar"
                                :options="chartOptionsRowChart"
                                :series="seriesRowChart"
                            />
                        </div>
                    </div>
                </div>
                <div class="col-12 restart mb-3">
                    <div class="card">
                        <div class="card-body">
                            <h5 class="card-title mb-3">Donut Chart</h5>
                            <apexchart
                                type="donut"
                                height="350"
                                :options="chartOptionsDonutChart"
                                :series="seriesDonutChart"
                            />
                        </div>
                    </div>
                </div>
                <div class="col-12 restart mb-3">
                    <div class="card">
                        <div class="card-body">
                            <h5 class="card-title mb-3">Polar Area Chart</h5>
                            <apexchart
                                type="polarArea"
                                height="350"
                                :options="chartOptionsPolarChart"
                                :series="seriesPolarChart"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
import VueApexCharts from "vue3-apexcharts";

export default {
    name: "ApexChartView",
    components: {
        apexchart: VueApexCharts,
    },
    data: () => {
        return {
            seriesLineChart: [
                {
                    name: "desktop",
                    data: [10, 41, 35, 51, 49, 62, 69, 91, 148],
                },
            ],
            chartOptionsLineChart: {
                chart: {
                    height: 350,
                    type: "line",
                    zoom: {
                        enabled: false,
                    },
                },
                dataLabels: {
                    enabled: false,
                },
                stroke: {
                    curve: "straight",
                },
                grid: {
                    row: {
                        colors: ["#f3f3f3", "transparent"], // takes an array which will be repeated on columns
                        opacity: 0.5,
                    },
                },
                xaxis: {
                    categories: [
                        "Jan",
                        "Feb",
                        "Mar",
                        "Apr",
                        "May",
                        "Jun",
                        "Jul",
                        "Aug",
                        "Sep",
                    ],
                },
            },
            seriesColumnChart: [
                {
                    name: "Net Profit",
                    data: [44, 55, 57, 56, 61, 58, 63, 60, 66],
                },
                {
                    name: "Revenue",
                    data: [76, 85, 101, 98, 87, 105, 91, 114, 94],
                },
                {
                    name: "Free Cash Flow",
                    data: [35, 41, 36, 26, 45, 48, 52, 53, 41],
                },
            ],
            chartOptionsColumnChart: {
                chart: {
                    height: 350,
                },
                plotOptions: {
                    bar: {
                        horizontal: false,
                        columnWidth: "55%",
                        endingShape: "rounded",
                    },
                },
                dataLabels: {
                    enabled: false,
                },
                stroke: {
                    show: true,
                    width: 2,
                    colors: ["transparent"],
                },
                xaxis: {
                    categories: [
                        "Feb",
                        "Mar",
                        "Apr",
                        "May",
                        "Jun",
                        "Jul",
                        "Aug",
                        "Sep",
                        "Oct",
                    ],
                },
                yaxis: {
                    title: {
                        text: "$ (thousands)",
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
            },
            seriesPieChart: [44, 55, 13, 43, 22],
            chartOptionsPieChart: {
                labels: ["Team A", "Team B", "Team C", "Team D", "Team E"],
                chart: {
                    width: 350,
                },
                responsive: [
                    {
                        breakpoint: 480,
                        options: {
                            chart: {
                                width: 200,
                            },
                            legend: {
                                position: "bottom",
                            },
                        },
                    },
                ],
            },
            seriesRadarChart: [
                {
                    name: "Series 1",
                    data: [80, 50, 30, 40, 100, 20],
                },
            ],
            chartOptionsRadarChart: {
                xaxis: {
                    categories: [
                        "January",
                        "February",
                        "March",
                        "April",
                        "May",
                        "June",
                    ],
                },
            },
            seriesRadialChart: [44, 55, 67, 83],
            chartOptionsRadialChart: {
                plotOptions: {
                    labels: ["Apples", "Oranges", "Bananas", "Berries"],
                    radialBar: {
                        dataLabels: {
                            name: {
                                fontSize: "22px",
                            },
                            value: {
                                fontSize: "16px",
                            },
                            total: {
                                show: true,
                                label: "Total",
                                formatter: function () {
                                    return 249;
                                },
                            },
                        },
                    },
                },
            },
            seriesAreaChart: [
                {
                    name: "STOCK ABC",
                    data: [10, 41, 35, 51, 49, 62, 69, 91, 148],
                },
            ],
            chartOptionsAreaChart: {
                labels: ["1", "2", "3", "4", "5", "6", "7", "8", "9"],
                chart: {
                    zoom: {
                        enabled: false,
                    },
                },
                dataLabels: {
                    enabled: false,
                },
                stroke: {
                    curve: "straight",
                },
                xaxis: {
                    type: "datetime",
                },
                yaxis: {
                    opposite: true,
                },
                legend: {
                    horizontalAlign: "left",
                },
            },
            seriesRowChart: [
                {
                    data: [400, 430, 448, 470, 540, 580, 690, 1100, 1200, 1380],
                },
            ],
            chartOptionsRowChart: {
                chart: {
                    type: "bar",
                    height: 350,
                },
                plotOptions: {
                    bar: {
                        borderRadius: 4,
                        horizontal: true,
                    },
                },
                dataLabels: {
                    enabled: false,
                },
                xaxis: {
                    categories: [
                        "South Korea",
                        "Canada",
                        "United Kingdom",
                        "Netherlands",
                        "Italy",
                        "France",
                        "Japan",
                        "United States",
                        "China",
                        "Germany",
                    ],
                },
            },
            seriesDonutChart: [44, 55, 41, 17, 15],
            chartOptionsDonutChart: {
                responsive: [
                    {
                        breakpoint: 480,
                        options: {
                            chart: {
                                width: 200,
                            },
                            legend: {
                                position: "bottom",
                            },
                        },
                    },
                ],
            },
            seriesPolarChart: [14, 23, 21, 17, 15, 10, 12, 17, 21],
            chartOptionsPolarChart: {
                stroke: {
                    colors: ["#fff"],
                },
                fill: {
                    opacity: 0.8,
                },
                responsive: [
                    {
                        breakpoint: 480,
                        options: {
                            chart: {
                                width: 200,
                            },
                            legend: {
                                position: "bottom",
                            },
                        },
                    },
                ],
            },
        };
    },
};
</script>
