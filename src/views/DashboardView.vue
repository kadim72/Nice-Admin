<template>
    <section class="View-section dashboard-section p-3 pt-0 overflow-hidden">
        <div class="header-section mb-3">
            <h1 class="m-0">Dashboard</h1>
            <div class="path">
                <router-link class="links active me-1" to="./DashboardView.vue">
                    Home /
                </router-link>
                Dashboard
            </div>
        </div>
        <div class="wrapper row align-items-baseline mb-3">
            <div class="part col-lg-8 col-12 row g-3 restart">
                <div class="col-xl-4 col-md-6 col-12">
                    <div class="card">
                        <div class="card-body">
                            <div
                                class="card-title d-flex align-items-center justify-content-between mb-3"
                            >
                                <p class="m-0"><span>Sales</span> | Today</p>
                                <div
                                    class="filter"
                                    @click="
                                        applyClassElement(
                                            $event.currentTarget,
                                            'active'
                                        )
                                    "
                                >
                                    <font-awesome-icon
                                        enterStack
                                        :icon="['fas', 'ellipsis']"
                                    />
                                    <ul>
                                        <span>Filter</span>
                                        <li><a>Today</a></li>
                                        <li><a>This Month</a></li>
                                        <li><a>This Year</a></li>
                                    </ul>
                                </div>
                            </div>
                            <div class="card-item d-flex align-items-center">
                                <div class="icon">
                                    <font-awesome-icon
                                        :icon="['fas', 'cart-shopping']"
                                    />
                                </div>
                                <div class="info">
                                    <p class="number m-0">145</p>
                                    <p class="increase m-0">
                                        <span>12%</span> increase
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-xl-4 col-md-6 col-12">
                    <div class="card">
                        <div class="card-body">
                            <div
                                class="card-title d-flex align-items-center justify-content-between mb-3"
                            >
                                <p class="m-0">
                                    <span>Revenue</span> | This Month
                                </p>
                                <div
                                    class="filter"
                                    @click="
                                        applyClassElement(
                                            $event.currentTarget,
                                            'active'
                                        )
                                    "
                                >
                                    <font-awesome-icon
                                        enterStack
                                        :icon="['fas', 'ellipsis']"
                                    />
                                    <ul>
                                        <span>Filter</span>
                                        <li><a>Today</a></li>
                                        <li><a>This Month</a></li>
                                        <li><a>This Year</a></li>
                                    </ul>
                                </div>
                            </div>
                            <div class="card-item d-flex align-items-center">
                                <div class="icon dollar">
                                    <font-awesome-icon
                                        :icon="['fas', 'dollar']"
                                    />
                                </div>
                                <div class="info">
                                    <p class="number m-0">$3,264</p>
                                    <p class="increase m-0">
                                        <span>8%</span> increase
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-xl-4 col-12">
                    <div class="card">
                        <div class="card-body">
                            <div
                                class="card-title d-flex align-items-center justify-content-between mb-3"
                            >
                                <p class="m-0">
                                    <span>Customers </span> | This Year
                                </p>
                                <div
                                    class="filter"
                                    @click="
                                        applyClassElement(
                                            $event.currentTarget,
                                            'active'
                                        )
                                    "
                                >
                                    <font-awesome-icon
                                        enterStack
                                        :icon="['fas', 'ellipsis']"
                                    />
                                    <ul>
                                        <span>Filter</span>
                                        <li><a>Today</a></li>
                                        <li><a>This Month</a></li>
                                        <li><a>This Year</a></li>
                                    </ul>
                                </div>
                            </div>
                            <div class="card-item d-flex align-items-center">
                                <div class="icon costumer">
                                    <font-awesome-icon
                                        :icon="['fas', 'users']"
                                    />
                                </div>
                                <div class="info">
                                    <p class="number m-0">1244</p>
                                    <p class="increase m-0">
                                        <span class="red">12%</span> decrease
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-12">
                    <div class="card">
                        <div class="card-body">
                            <div
                                class="card-title d-flex align-items-center justify-content-between mb-3"
                            >
                                <p class="m-0">
                                    <span>Reports </span> | This Month
                                </p>
                                <div
                                    class="filter"
                                    @click="
                                        applyClassElement(
                                            $event.currentTarget,
                                            'active'
                                        )
                                    "
                                >
                                    <font-awesome-icon
                                        enterStack
                                        :icon="['fas', 'ellipsis']"
                                    />
                                    <ul>
                                        <span>Filter</span>
                                        <li><a>Today</a></li>
                                        <li><a>This Month</a></li>
                                        <li><a>This Year</a></li>
                                    </ul>
                                </div>
                            </div>
                            <apexchart
                                type="area"
                                height="350"
                                :series="dataLineChart"
                                :options="optionsLineChart"
                            />
                        </div>
                    </div>
                </div>
                <div class="col-12">
                    <div class="card">
                        <div class="card-body overflow-x-auto">
                            <div
                                class="card-title d-flex align-items-center justify-content-between mb-3"
                            >
                                <p class="m-0">
                                    <span>Recent Sales</span> | Today
                                </p>
                                <div
                                    class="filter"
                                    @click="
                                        applyClassElement(
                                            $event.currentTarget,
                                            'active'
                                        )
                                    "
                                >
                                    <font-awesome-icon
                                        enterStack
                                        :icon="['fas', 'ellipsis']"
                                    />
                                    <ul>
                                        <span>Filter</span>
                                        <li><a>Today</a></li>
                                        <li><a>This Month</a></li>
                                        <li><a>This Year</a></li>
                                    </ul>
                                </div>
                            </div>
                            <div
                                class="card-datatable-top d-flex align-items-center justify-content-between mb-3"
                            >
                                <label>
                                    <select
                                        class="p-1 pe-2 me-1"
                                        v-model="showingItemsNumber"
                                    >
                                        <option value="5">5</option>
                                        <option value="10">10</option>
                                        <option value="15">15</option>
                                        <option value="All">All</option>
                                    </select>
                                    <span>Entries Per Page</span>
                                </label>
                                <input
                                    class="datatable-input"
                                    type="text"
                                    placeholder="Search..."
                                    v-model="nameSearch"
                                />
                            </div>
                            <table
                                class="table table-borderless card-datatable-wrapper"
                            >
                                <thead>
                                    <th scope="col">#</th>
                                    <th scope="col">Customer</th>
                                    <th scope="col">Product</th>
                                    <th scope="col">Price</th>
                                    <th scope="col" class="position-relative">
                                        Status
                                        <div class="scroll-datatable">
                                            <font-awesome-icon
                                                @click="decreaseIndex"
                                                :icon="['fas', 'caret-up']"
                                            />
                                            <font-awesome-icon
                                                @click="increaseIndex"
                                                :icon="['fas', 'caret-down']"
                                            />
                                        </div>
                                    </th>
                                </thead>
                                <tbody>
                                    <tr
                                        v-for="data in filterData"
                                        :key="data.id"
                                    >
                                        <th scope="row" class="text-primary">
                                            #{{ data.id }}
                                        </th>
                                        <td>{{ data.name }}</td>
                                        <td class="text-primary">
                                            {{ data.product }}
                                        </td>
                                        <td>${{ data.prise }}</td>
                                        <td
                                            class="statue"
                                            v-if="data.statue == 'Male'"
                                            v-html="
                                                '<span class=rej>Rejected</span>'
                                            "
                                        ></td>
                                        <td
                                            class="statue"
                                            v-else-if="data.statue == 'Female'"
                                            v-html="
                                                '<span class=app>Approved</span>'
                                            "
                                        ></td>
                                        <td
                                            class="statue"
                                            v-else
                                            v-html="
                                                '<span class=pen>Pending</span>'
                                            "
                                        ></td>
                                    </tr>
                                </tbody>
                            </table>
                            <div class="card-datatable-footer">
                                <span v-if="showingItemsNumber != 'All'"
                                    >Showing {{ indexTable + 1 }} to
                                    {{ showingItemsNumber }} of 100
                                    entries</span
                                >
                                <span v-else>Showing All Data Of entries</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-12">
                    <div class="card">
                        <div class="card-body overflow-x-auto">
                            <div
                                class="card-title d-flex align-items-center justify-content-between mb-3"
                            >
                                <p class="m-0">
                                    <span>Top Selling</span> | Today
                                </p>
                                <div
                                    class="filter"
                                    @click="
                                        applyClassElement(
                                            $event.currentTarget,
                                            'active'
                                        )
                                    "
                                >
                                    <font-awesome-icon
                                        enterStack
                                        :icon="['fas', 'ellipsis']"
                                    />
                                    <ul>
                                        <span>Filter</span>
                                        <li><a>Today</a></li>
                                        <li><a>This Month</a></li>
                                        <li><a>This Year</a></li>
                                    </ul>
                                </div>
                            </div>
                            <div class="product">
                                <table class="table">
                                    <thead>
                                        <th scope="col">Preview</th>
                                        <th scope="col">Product</th>
                                        <th scope="col">Price</th>
                                        <th scope="col">Sold</th>
                                        <th scope="col">Revenue</th>
                                    </thead>
                                    <tr
                                        v-for="data in database.slice(0, 5)"
                                        :key="data.id"
                                    >
                                        <td>
                                            <img
                                                :src="
                                                    require(`../assets/Images/product-${data.id}.jpg`)
                                                "
                                                alt="news"
                                            />
                                        </td>
                                        <td>{{ data.product }}</td>
                                        <td>${{ data.prise }}</td>
                                        <th>
                                            {{ +data.prise * 2 }}
                                        </th>
                                        <td>${{ +data.prise * 2 * 85 }}</td>
                                    </tr>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="part col-lg-4 col-12 row g-3 restart">
                <div class="col-12">
                    <div class="card">
                        <div class="card-body">
                            <div
                                class="card-title d-flex align-items-center justify-content-between mb-3"
                            >
                                <p class="m-0">
                                    <span>Recent Activity</span> | Today
                                </p>
                                <div
                                    class="filter"
                                    @click="
                                        applyClassElement(
                                            $event.currentTarget,
                                            'active'
                                        )
                                    "
                                >
                                    <font-awesome-icon
                                        enterStack
                                        :icon="['fas', 'ellipsis']"
                                    />
                                    <ul>
                                        <span>Filter</span>
                                        <li><a>Today</a></li>
                                        <li><a>This Month</a></li>
                                        <li><a>This Year</a></li>
                                    </ul>
                                </div>
                            </div>
                            <div class="card-activity position-relative">
                                <div class="activity-item d-flex pb-2">
                                    <p class="time">32min</p>
                                    <font-awesome-icon
                                        :icon="['fas', 'circle']"
                                        class="text-success"
                                    />
                                    <p class="title">
                                        Quia quae rerum
                                        <span>explicabo officiis</span> beatae
                                    </p>
                                </div>
                                <div class="activity-item d-flex pb-2">
                                    <p class="time">56 min</p>
                                    <font-awesome-icon
                                        :icon="['fas', 'circle']"
                                        class="text-danger"
                                    />
                                    <p class="title">
                                        Voluptatem blanditiis blanditiis eveniet
                                    </p>
                                </div>
                                <div class="activity-item d-flex pb-2">
                                    <p class="time">2 hrs</p>
                                    <font-awesome-icon
                                        :icon="['fas', 'circle']"
                                        class="text-primary"
                                    />
                                    <p class="title">
                                        Voluptates corrupti molestias voluptatem
                                    </p>
                                </div>
                                <div class="activity-item d-flex pb-2">
                                    <p class="time">1 day</p>
                                    <font-awesome-icon
                                        :icon="['fas', 'circle']"
                                        class="text-info"
                                    />
                                    <p class="title">
                                        Tempore autem saepe
                                        <span>occaecati voluptatem</span>
                                        tempore
                                    </p>
                                </div>
                                <div class="activity-item d-flex pb-2">
                                    <p class="time">2 days</p>
                                    <font-awesome-icon
                                        :icon="['fas', 'circle']"
                                        class="text-warning"
                                    />
                                    <p class="title">
                                        Est sit eum reiciendis exercitationem
                                    </p>
                                </div>
                                <div class="activity-item d-flex">
                                    <p class="time">4 weeks</p>
                                    <font-awesome-icon
                                        :icon="['fas', 'circle']"
                                        class="text-muted"
                                    />
                                    <p class="title">
                                        Dicta dolorem harum nulla eius. Ut
                                        quidem quidem sit quas
                                    </p>
                                </div>
                                <div class="label"></div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-12">
                    <div class="card">
                        <div class="card-body">
                            <div
                                class="card-title d-flex align-items-center justify-content-between mb-3"
                            >
                                <p class="m-0">
                                    <span>Budget Report</span> | This Month
                                </p>
                                <div
                                    class="filter"
                                    @click="
                                        applyClassElement(
                                            $event.currentTarget,
                                            'active'
                                        )
                                    "
                                >
                                    <font-awesome-icon
                                        enterStack
                                        :icon="['fas', 'ellipsis']"
                                    />
                                    <ul>
                                        <span>Filter</span>
                                        <li><a>Today</a></li>
                                        <li><a>This Month</a></li>
                                        <li><a>This Year</a></li>
                                    </ul>
                                </div>
                            </div>
                            <apexchart
                                height="350"
                                type="radar"
                                :series="dataRadarChart"
                                :options="optionsRadarChart"
                            />
                        </div>
                    </div>
                </div>
                <div class="col-12">
                    <div class="card">
                        <div class="card-body">
                            <div
                                class="card-title d-flex align-items-center justify-content-between mb-3"
                            >
                                <p class="m-0">
                                    <span>Website Traffic</span> | Today
                                </p>
                                <div
                                    class="filter"
                                    @click="
                                        applyClassElement(
                                            $event.currentTarget,
                                            'active'
                                        )
                                    "
                                >
                                    <font-awesome-icon
                                        enterStack
                                        :icon="['fas', 'ellipsis']"
                                    />
                                    <ul>
                                        <span>Filter</span>
                                        <li><a>Today</a></li>
                                        <li><a>This Month</a></li>
                                        <li><a>This Year</a></li>
                                    </ul>
                                </div>
                            </div>
                            <apexchart
                                type="donut"
                                :series="dataDonutChart"
                                :options="optionsDonutChart"
                            />
                        </div>
                    </div>
                </div>
                <div class="col-12">
                    <div class="card">
                        <div class="card-body">
                            <div
                                class="card-title d-flex align-items-center justify-content-between mb-3"
                            >
                                <p class="m-0">
                                    <span>News & Updates</span> | Today
                                </p>
                                <div
                                    class="filter"
                                    @click="
                                        applyClassElement(
                                            $event.currentTarget,
                                            'active'
                                        )
                                    "
                                >
                                    <font-awesome-icon
                                        enterStack
                                        :icon="['fas', 'ellipsis']"
                                    />
                                    <ul>
                                        <span>Filter</span>
                                        <li><a>Today</a></li>
                                        <li><a>This Month</a></li>
                                        <li><a>This Year</a></li>
                                    </ul>
                                </div>
                            </div>
                            <ul class="news p-0 m-0">
                                <li class="d-flex align-items-center mb-1">
                                    <img
                                        src="../assets//Images/news-1.jpg"
                                        alt="news"
                                    />
                                    <div class="info">
                                        <h5>
                                            Nihil blanditiis at in nihil autem
                                        </h5>
                                        <p>
                                            Sit recusandae non aspernatur
                                            laboriosam. Quia enim eligendi sed
                                            ut harum...
                                        </p>
                                    </div>
                                </li>
                                <li class="d-flex align-items-center mb-1">
                                    <img
                                        src="../assets//Images/news-4.jpg"
                                        alt="news"
                                    />
                                    <div class="info">
                                        <h5>Quidem autem et impedit</h5>
                                        <p>
                                            Illo nemo neque maiores vitae
                                            officiis cum eum turos elan dries
                                            werona nande...
                                        </p>
                                    </div>
                                </li>
                                <li class="d-flex align-items-center mb-1">
                                    <img
                                        src="../assets//Images/product-1.jpg"
                                        alt="news"
                                    />
                                    <div class="info">
                                        <h5>
                                            d quia et et ut maxime similique
                                            occaecati ut
                                        </h5>
                                        <p>
                                            Fugiat voluptas vero eaque
                                            accusantium eos. Consequuntur sed
                                            ipsam et totam...
                                        </p>
                                    </div>
                                </li>
                                <li class="d-flex align-items-center mb-1">
                                    <img
                                        src="../assets//Images/product-2.jpg"
                                        alt="news"
                                    />
                                    <div class="info">
                                        <h5>
                                            Laborum corporis quo dara net para
                                        </h5>
                                        <p>
                                            Qui enim quia optio. Eligendi aut
                                            asperiores enim repellendusvel rerum
                                            cuder..
                                        </p>
                                    </div>
                                </li>
                                <li class="d-flex align-items-center mb-1">
                                    <img
                                        src="../assets//Images/product-3.jpg"
                                        alt="news"
                                    />
                                    <div class="info">
                                        <h5>
                                            Et dolores corrupti quae illo quod
                                            dolor
                                        </h5>
                                        <p>
                                            Odit ut eveniet modi reiciendis.
                                            Atque cupiditate libero beatae
                                            dignissimos eius...
                                        </p>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
import VueApexCharts from "vue3-apexcharts";
import dataTable from "../../data/datatable.json";

export default {
    name: "DasboardView",
    components: { apexchart: VueApexCharts },
    data() {
        return {
            showingItemsNumber: 5,
            database: dataTable,
            indexTable: 0,
            nameSearch: "",
            dataLineChart: [
                {
                    name: "Sales",
                    data: [30, 40, 22, 50, 42, 81, 57],
                },
                {
                    name: "Revenue",
                    data: [18, 33, 44, 35, 38, 46, 42],
                },
                {
                    name: "Customers",
                    data: [19, 14, 32, 19, 14, 24, 18],
                },
            ],
            optionsLineChart: {
                chart: {
                    height: 350,
                    type: "area",
                    zoom: {
                        enabled: true,
                    },
                },
                dataLabels: {
                    enabled: false,
                },
                stroke: {
                    curve: "smooth",
                    width: 2,
                },
                markers: {
                    size: 5,
                },
                fill: {
                    type: "gradient",
                    gradient: {
                        shadeIntensity: 1,
                        inverseColors: false,
                        opacityFrom: 0.45,
                        opacityTo: 0.05,
                    },
                },
                xaxis: {
                    categories: [
                        "00:00",
                        "02:00",
                        "03:00",
                        "04:00",
                        "05:00",
                        "06:00",
                        "07:00",
                    ],
                },
            },
            dataRadarChart: [
                {
                    name: "Allocated Budget",
                    data: [18, 19, 25, 24, 18, 5],
                },
                {
                    name: "Actual Spending",
                    data: [20, 22, 20, 18, 23, 22],
                },
            ],
            optionsRadarChart: {
                chart: {
                    type: "radar",
                },
                dataLabels: {
                    enabled: false,
                },
                markers: {
                    size: 4,
                },
                fill: {
                    opacity: 0,
                },
                stroke: {
                    curve: "straight",
                },
                legend: {
                    show: true,
                    position: "top",
                    floating: false,
                    fontSize: "14px",
                    markers: {
                        width: 22,
                        height: 14,
                        radius: 4,
                    },
                },
                xaxis: {
                    categories: [
                        "Sales",
                        "Marketing",
                        "Development",
                        "Customer Support",
                        "Information Technology",
                        "Administration",
                    ],
                },
            },
            dataDonutChart: [30, 24, 16, 20, 10],
            optionsDonutChart: {
                charts: {
                    type: "donut",
                },
                labels: [
                    "Search Engine",
                    "Direct",
                    "Email",
                    "Union Ads",
                    "Video Ads",
                ],
                dataLabels: {
                    enabled: false,
                },
                legend: {
                    position: "top",
                    horizontalAlign: "left",
                    markers: {
                        width: 24,
                        height: 14,
                        radius: 4,
                    },
                },
            },
        };
    },
    methods: {
        applyClassElement(element, className) {
            element.classList.toggle(className);
        },
        increaseIndex() {
            this.indexTable++;
            this.indexTable = this.indexTable >= 51 ? 50 : this.indexTable;
        },
        decreaseIndex() {
            this.indexTable--;
            this.indexTable = this.indexTable <= -1 ? 0 : this.indexTable;
        },
    },
    computed: {
        filterData() {
            const endIndex =
                this.showingItemsNumber === "All"
                    ? 50
                    : +this.showingItemsNumber + +this.indexTable;
            const filteredData = this.database.slice(this.indexTable, endIndex);
            var filtering = new RegExp(this.nameSearch, "i");
            return filteredData.filter((e) => {
                return e.name.match(filtering);
            });
        },
    },
};
</script>
