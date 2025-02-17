<template>
    <section class="View-section overflow-hidden p-3 pt-0">
        <div class="header-section mb-3">
            <h1 class="m-0">Data Tables</h1>
            <div class="path">
                <router-link class="links active me-1" to="./DashboardView.vue">
                    Home / Tables
                </router-link>
                / Data Tables
            </div>
        </div>
        <div class="col-12 restart mb-3">
            <div class="card">
                <div class="card-body">
                    <h5 class="card-title mb-3">Data Tables</h5>
                    <p>
                        Add lightweight datatables to your project with using
                        the
                        <span class="text-primary">Simple DataTables</span>
                        library. Just add
                        <span class="text-danger">.datatable</span> class name
                        to any table you wish to conver to a datatable. Check
                        for <span class="text-primary">more examples</span>.
                    </p>
                    <div
                        class="card-datatable-top d-flex align-items-center justify-content-between"
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
                    <table class="table">
                        <thead>
                            <tr>
                                <th scope="col">Name</th>
                                <th scope="col">Ext.</th>
                                <th scope="col">City</th>
                                <th scope="col">Start Date</th>
                                <th
                                    scope="col"
                                    class="d-flex align-items-center"
                                >
                                    Completion
                                    <div
                                        class="ms-auto me-1 d-inline-flex flex-column justify-content-center"
                                    >
                                        <font-awesome-icon
                                            @click="decreaseIndex"
                                            class="button"
                                            :icon="['fas', 'caret-up']"
                                        />
                                        <font-awesome-icon
                                            @click="increaseIndex"
                                            class="button"
                                            :icon="['fas', 'caret-down']"
                                        />
                                    </div>
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr v-for="data in filterData" :key="data.id">
                                <td>{{ data.name }}</td>
                                <td>{{ data.ext }}</td>
                                <td>{{ data.city }}</td>
                                <td>{{ data.date }}</td>
                                <td>{{ data.completing }}%</td>
                            </tr>
                        </tbody>
                        <div class="card-datatable-footer">
                            <span v-if="showingItemsNumber != 'All'"
                                >Showing {{ indexTable + 1 }} to
                                {{ showingItemsNumber }} of 100 entries</span
                            >
                            <span v-else>Showing All Data Of entries</span>
                        </div>
                    </table>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
import data from "../../data/bigDatabase.json";

export default {
    name: "DataTablesView",
    data: () => {
        return {
            database: data,
            filteredData: "",
            nameSearch: "",
            showingItemsNumber: 5,
            indexTable: 0,
        };
    },
    methods: {
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
                    ? 100
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
<style>
.datatable-input {
    border: 1px solid var(--c-black-main);
    padding: 8px 14px;
    &:focus {
        box-shadow: inset 0 0 3px 0px var(--c-black-main);
    }
}
.card-datatable-footer {
    margin-top: 10px;
    padding-top: 10px;
    border-top: 1px solid var(--c-border);
    font-size: 14px;
    color: var(--c-black-main);
}
.button {
    cursor: pointer;
}
</style>
