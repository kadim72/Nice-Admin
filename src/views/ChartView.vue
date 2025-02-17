<template>
    <section class="View-section overflow-hidden p-3 pt-0">
        <div class="header-section mb-3">
            <h1 class="m-0">Chart.js</h1>
            <div class="path">
                <router-link class="links active me-1" to="./DashboardView.vue">
                    Home / Charts
                </router-link>
                / Char.js
            </div>
            <p class="mt-3">
                Chart.JS Examples. You can check the official website for
                <span class="text-primary">more examples</span>.
            </p>
        </div>
        <div class="wrapper row align-items-baseline mb-3">
            <div class="part row col-lg-6 col-12 restart pe-lg-2">
                <div class="col-12 restart mb-3">
                    <div class="card">
                        <div class="card-body">
                            <h5 class="card-title mb-3">Line Chart</h5>
                            <Line
                                :data="dataLineChart"
                                :options="optionsLineChart"
                            />
                        </div>
                    </div>
                </div>
                <div class="col-12 restart mb-3">
                    <div class="card">
                        <div class="card-body">
                            <h5 class="card-title mb-3">Pie Chart</h5>
                            <Pie
                                :data="dataPieChart"
                                :options="generalOptions"
                                style="max-height: 350px"
                            />
                        </div>
                    </div>
                </div>
                <div class="col-12 restart mb-3">
                    <div class="card">
                        <div class="card-body">
                            <h5 class="card-title mb-3">Radar Chart</h5>
                            <Radar
                                :data="dataRadarChart"
                                :options="generalOptions"
                                style="max-height: 350px"
                            />
                        </div>
                    </div>
                </div>
                <div class="col-12 restart mb-3">
                    <div class="card">
                        <div class="card-body">
                            <h5 class="card-title mb-3">Stacked Bar Chart</h5>
                            <Bar
                                :data="dataStackedBarChart"
                                :options="optionsStackedBarChart"
                            />
                        </div>
                    </div>
                </div>
            </div>
            <div class="part row col-lg-6 col-12 restart ps-lg-2">
                <div class="col-12 restart mb-3">
                    <div class="card">
                        <div class="card-body">
                            <h5 class="card-title mb-3">Bar CHart</h5>
                            <Bar
                                :data="dataBarChart"
                                :options="generalOptions"
                            />
                        </div>
                    </div>
                </div>
                <div class="col-12 restart mb-3">
                    <div class="card">
                        <div class="card-body">
                            <h5 class="card-title mb-3">Doughnut Chart</h5>
                            <Doughnut
                                :data="dataDoughnutChart"
                                :options="generalOptions"
                                style="max-height: 350px"
                            />
                        </div>
                    </div>
                </div>
                <div class="col-12 restart mb-3">
                    <div class="card">
                        <div class="card-body">
                            <h5 class="card-title mb-3">PolarArea Chart</h5>
                            <PolarArea
                                :data="dataBarChart"
                                :options="generalOptions"
                                style="max-height: 350px"
                            />
                        </div>
                    </div>
                </div>
                <div class="col-12 restart mb-3">
                    <div class="card">
                        <div class="card-body">
                            <h5 class="card-title mb-3">Bubble Chart</h5>
                            <Bubble
                                :data="dataBubbleChart"
                                :options="optionsBubbleChart"
                                style="max-height: 350px"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
    BarElement,
    ArcElement,
    RadialLinearScale,
} from "chart.js";
import {
    Line,
    Pie,
    Radar,
    Bar,
    Doughnut,
    PolarArea,
    Bubble,
} from "vue-chartjs";

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    ArcElement,
    LineElement,
    BarElement,
    Title,
    Tooltip,
    Legend,
    RadialLinearScale
);

export default {
    name: "ChartView",
    components: { Line, Pie, Radar, Bar, Doughnut, PolarArea, Bubble },
    data() {
        return {
            dataLineChart: {
                labels: [
                    "January",
                    "February",
                    "March",
                    "April",
                    "May",
                    "June",
                    "July",
                ],
                datasets: [
                    {
                        label: "Line Chart",
                        backgroundColor: "#e1e1e1",
                        borderColor: "#27b6f9",
                        data: [65, 59, 81, 82, 56, 54, 40],
                    },
                ],
            },
            optionsLineChart: {
                responsive: true,
                scales: {
                    y: {
                        min: 0,
                        max: 90,
                    },
                },
            },
            dataPieChart: {
                labels: ["Red", "Yellow", "Blue"],
                datasets: [
                    {
                        label: "My First Datasets",
                        backgroundColor: ["#e24964", "#dea90c", "#0c55c1d1"],
                        data: [35, 25, 40],
                    },
                ],
            },
            generalOptions: {
                responsive: true,
            },
            dataRadarChart: {
                labels: [
                    "Eating",
                    "Drinking",
                    "Sleeping",
                    "Designing",
                    "Coding",
                    "Cycling",
                    "Running",
                ],
                datasets: [
                    {
                        label: "First dataset",
                        backgroundColor: "rgba(179,181,198,0.2)",
                        borderColor: "#e24964",
                        pointBackgroundColor: "#e24964",
                        pointBorderColor: "#e1e1e1",
                        pointHoverBackgroundColor: "#e1e1e1",
                        pointHoverBorderColor: "rgba(179,181,198,1)",
                        data: [65, 59, 90, 81, 56, 55, 40],
                    },
                    {
                        label: "Second dataset",
                        backgroundColor: "rgba(255,99,132,0.2)",
                        borderColor: "#0c55c1d1",
                        pointBackgroundColor: "#0c55c1d1",
                        pointBorderColor: "#e1e1e1",
                        pointHoverBackgroundColor: "#e1e1e1",
                        pointHoverBorderColor: "rgba(255,99,132,1)",
                        data: [28, 48, 40, 19, 96, 27, 100],
                    },
                ],
            },
            dataStackedBarChart: {
                labels: [
                    "January",
                    "February",
                    "March",
                    "April",
                    "May",
                    "June",
                    "July",
                ],
                datasets: [
                    {
                        label: "Dataset 1",
                        data: [-75, -15, 15, 50, 75, 0, 0],
                        backgroundColor: "#e24964",
                    },
                    {
                        label: "Dataset 2",
                        data: [-15, -5, 15, 112, 165, 0, 0],
                        backgroundColor: "#dea90c",
                    },
                    {
                        label: "Dataset 3",
                        data: [-50, -4, 30, 40, 40, 0, 0],
                        backgroundColor: "#0c55c1d1",
                    },
                ],
            },
            optionsStackedBarChart: {
                responsive: true,
                scales: {
                    x: {
                        stacked: true,
                    },
                    y: {
                        stacked: true,
                    },
                },
            },
            dataBarChart: {
                labels: [
                    "January",
                    "February",
                    "March",
                    "April",
                    "May",
                    "June",
                    "July",
                ],
                datasets: [
                    {
                        label: "Bar Chart",
                        data: [65, 59, 80, 81, 55, 55, 40],
                        backgroundColor: [
                            "#e24964a3",
                            "#dea90c61",
                            "#0c55c191",
                            "#10ded487",
                            "#df37df85",
                            "#6c16df85",
                            "#e1e1e187",
                        ],
                        borderColor: [
                            "#F00",
                            "#dea90c",
                            "#0c55c1",
                            "#10ded9",
                            "#df37df",
                            "#6c16df",
                            "#e1e1e1",
                        ],
                        borderWidth: 2,
                    },
                ],
            },
            dataDoughnutChart: {
                labels: ["Red", "Blue", "Orange"],
                datasets: [
                    {
                        label: "My First Dataset",
                        data: [35, 15, 50],
                        backgroundColor: ["#e24964", "#0c55c1d1", "#dea90c"],
                        hoverOffset: 5,
                    },
                ],
            },
            dataBubbleChart: {
                datasets: [
                    {
                        label: "Data One",
                        backgroundColor: "#e24964",
                        data: [
                            {
                                x: 20,
                                y: 25,
                                r: 5,
                            },
                            {
                                x: 40,
                                y: 10,
                                r: 10,
                            },
                            {
                                x: 30,
                                y: 22,
                                r: 30,
                            },
                        ],
                    },
                    {
                        label: "Data Two",
                        backgroundColor: "#27b6f9",
                        data: [
                            {
                                x: 15,
                                y: 30,
                                r: 15,
                            },
                            {
                                x: 20,
                                y: 20,
                                r: 10,
                            },
                            {
                                x: 15,
                                y: 8,
                                r: 30,
                            },
                        ],
                    },
                ],
            },
            optionsBubbleChart: {
                responsive: true,
                scales: {
                    x: {
                        min: 0,
                        max: 50,
                    },
                },
            },
        };
    },
};
</script>
