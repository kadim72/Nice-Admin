<template>
    <section class="View-section overflow-hidden p-3 pt-0">
        <div class="header-section mb-3">
            <h1 class="m-0">Badges</h1>
            <div class="path">
                <router-link class="links active me-1" to="./DashboardView.vue">
                    Home / Components
                </router-link>
                / Badges
            </div>
        </div>
        <div class="wrapper row align-items-baseline mb-3">
            <div class="part col-lg-6 col-12 row g-3 restart">
                <div class="col-12">
                    <div class="card">
                        <div class="card-body">
                            <h5 class="card-title mb-3">Default</h5>
                            <div class="d-flex gap-1 flex-wrap">
                                <span class="badge bg-primary">Primary</span>
                                <span class="badge bg-secondary"
                                    >Secondary</span
                                >
                                <span class="badge bg-success">Success</span>
                                <span class="badge bg-danger">Danger</span>
                                <span class="badge bg-warning text-dark"
                                    >Warning</span
                                >
                                <span class="badge bg-info text-dark"
                                    >Info</span
                                >
                                <span class="badge bg-light text-dark"
                                    >Light</span
                                >
                                <span class="badge bg-dark">Dark</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-12">
                    <div class="card">
                        <div class="card-body">
                            <h5 class="card-title mb-3">Pill Badges</h5>
                            <div class="d-flex flex-wrap gap-1">
                                <span class="badge rounded-pill bg-primary"
                                    >Primary</span
                                >
                                <span class="badge rounded-pill bg-secondary"
                                    >Secondary</span
                                >
                                <span class="badge rounded-pill bg-success"
                                    >Success</span
                                >
                                <span class="badge rounded-pill bg-danger"
                                    >Danger</span
                                >
                                <span
                                    class="badge rounded-pill bg-warning text-dark"
                                    >Warning</span
                                >
                                <span
                                    class="badge rounded-pill bg-info text-dark"
                                    >Info</span
                                >
                                <span
                                    class="badge rounded-pill bg-light text-dark"
                                    >Light</span
                                >
                                <span class="badge rounded-pill bg-dark"
                                    >Dark</span
                                >
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="part col-lg-6 col-12 row g-3 restart">
                <div class="col-12">
                    <div class="card">
                        <div class="card-body">
                            <h5 class="card-title mb-3">Border Badges</h5>
                            <div class="d-flex flex-wrap gap-1">
                                <span
                                    class="badge border-primary border-1 text-primary"
                                    >Primary</span
                                >
                                <span
                                    class="badge border-secondary border-1 text-secondary"
                                    >Secondary</span
                                >
                                <span
                                    class="badge border-success border-1 text-success"
                                    >Success</span
                                >
                                <span
                                    class="badge border-danger border-1 text-danger"
                                    >Danger</span
                                >
                                <span
                                    class="badge border-warning border-1 text-warning"
                                    >Warning</span
                                >
                                <span
                                    class="badge border-info border-1 text-info"
                                    >Info</span
                                >
                                <span
                                    class="badge border-light border-1 text-black-50"
                                    >Light</span
                                >
                                <span
                                    class="badge border-dark border-1 text-dark"
                                    >Dark</span
                                >
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-12">
                    <div class="card">
                        <div class="card-body">
                            <h5 class="card-title mb-3">Button Badges</h5>
                            <div class="d-flex flex-wrap gap-1">
                                <button type="button" class="btn btn-primary">
                                    Primary
                                    <span class="badge bg-white text-primary"
                                        >4</span
                                    >
                                </button>
                                <button type="button" class="btn btn-secondary">
                                    Secondary
                                    <span class="badge bg-white text-secondary"
                                        >4</span
                                    >
                                </button>
                                <button type="button" class="btn btn-success">
                                    Success
                                    <span class="badge bg-white text-success"
                                        >4</span
                                    >
                                </button>
                                <button type="button" class="btn btn-danger">
                                    Danger
                                    <span class="badge bg-white text-danger"
                                        >4</span
                                    >
                                </button>
                                <button type="button" class="btn btn-warning">
                                    Warning
                                    <span class="badge bg-white text-warning"
                                        >4</span
                                    >
                                </button>
                                <button type="button" class="btn btn-info">
                                    Info
                                    <span class="badge bg-white text-info"
                                        >4</span
                                    >
                                </button>
                                <button type="button" class="btn btn-light">
                                    Light
                                    <span class="badge bg-secondary">4</span>
                                </button>
                                <button type="button" class="btn btn-dark">
                                    Dark
                                    <span class="badge bg-white text-dark"
                                        >4</span
                                    >
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-12">
                    <div class="card">
                        <div class="card-body">
                            <h5 class="card-title mb-3">Button Badges</h5>
                            <div class="d-flex flex-wrap gap-1">
                                <h1 class="mb-2">
                                    Example H1 Heading
                                    <span class="badge bg-primary"
                                        >Primary</span
                                    >
                                </h1>
                                <h2 class="mb-2">
                                    Example H2 Heading
                                    <span class="badge bg-secondary"
                                        >Secondary</span
                                    >
                                </h2>
                                <h3 class="mb-2">
                                    Example H3 Heading
                                    <span class="badge bg-success"
                                        >Success</span
                                    >
                                </h3>
                                <h4 class="mb-2">
                                    Example H4 Heading
                                    <span class="badge bg-danger">Danger</span>
                                </h4>
                                <h5 class="mb-2">
                                    Example H5 Heading
                                    <span class="badge bg-warning text-dark"
                                        >Warning</span
                                    >
                                </h5>
                                <h6 class="mb-2">
                                    Example H6 Heading
                                    <span class="badge bg-info text-dark"
                                        >Info</span
                                    >
                                </h6>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
export default {
    name: "BadgesView",
    data: () => {
        return {};
    },
};
</script>
