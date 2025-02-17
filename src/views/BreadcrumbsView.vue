<template>
    <section class="View-section bread-section overflow-hidden p-3 pt-0">
        <div class="header-section mb-3">
            <h1 class="m-0">Breadcrumbs</h1>
            <div class="path">
                <router-link class="links active me-1" to="./DashboardView.vue">
                    Home / Components
                </router-link>
                / Breadcrumbs
            </div>
        </div>
        <div class="wrapper row align-items-baseline mb-3">
            <div class="part col-lg-6 col-12 row g-3 restart">
                <div class="col-12">
                    <div class="card">
                        <div class="card-body">
                            <h5 class="card-title mb-3">Default Breadcrumbs</h5>
                            <p class="text-start">Home / Library / Default</p>
                        </div>
                    </div>
                </div>
                <div class="col-12">
                    <div class="card">
                        <div class="card-body">
                            <h5 class="card-title mb-3">Centered</h5>
                            <p class="text-center">Home / Library / Default</p>
                        </div>
                    </div>
                </div>
                <div class="col-12">
                    <div class="card">
                        <div class="card-body">
                            <h5 class="card-title mb-3">Right Positioned</h5>
                            <p class="text-end">Home / Library / Default</p>
                        </div>
                    </div>
                </div>
            </div>
            <div class="part col-lg-6 col-12 row g-3 restart">
                <div class="col-12">
                    <div class="card">
                        <div class="card-body">
                            <h5 class="card-title mb-3">
                                Breadcrumbs with a page title
                            </h5>
                            <h2>Page Title</h2>
                            <p class="text-start">Home / Library / Default</p>
                        </div>
                    </div>
                </div>
                <div class="col-12">
                    <div class="card">
                        <div class="card-body">
                            <h5 class="card-title mb-3">
                                Breadcrumbs with a page title
                            </h5>
                            <h2>Page Title</h2>
                            <ol
                                class="breadcrumb"
                                style="--bs-breadcrumb-divider: '>'"
                            >
                                <li class="breadcrumb-item">Home</li>
                                <li class="breadcrumb-item">Library</li>
                                <li class="breadcrumb-item active">Data</li>
                            </ol>
                            <ol
                                class="breadcrumb"
                                style="--bs-breadcrumb-divider: '|'"
                            >
                                <li class="breadcrumb-item">Home</li>
                                <li class="breadcrumb-item">Library</li>
                                <li class="breadcrumb-item active">Data</li>
                            </ol>
                            <ol
                                class="breadcrumb"
                                style="--bs-breadcrumb-divider: '-'"
                            >
                                <li class="breadcrumb-item">Home</li>
                                <li class="breadcrumb-item">Library</li>
                                <li class="breadcrumb-item active">Data</li>
                            </ol>
                            <ol
                                class="breadcrumb"
                                style="--bs-breadcrumb-divider: '•'"
                            >
                                <li class="breadcrumb-item">Home</li>
                                <li class="breadcrumb-item">Library</li>
                                <li class="breadcrumb-item active">Data</li>
                            </ol>
                            <ol
                                class="breadcrumb"
                                style="--bs-breadcrumb-divider: ''"
                            >
                                <li class="breadcrumb-item">Home</li>
                                <li class="breadcrumb-item">Library</li>
                                <li class="breadcrumb-item active">Data</li>
                            </ol>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
export default {
    name: "BreadcrumbsView",
};
</script>
