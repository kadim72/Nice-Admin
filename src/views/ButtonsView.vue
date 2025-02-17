<template>
    <section class="View-section overflow-hidden p-3 pt-0">
        <div class="header-section mb-3">
            <h1 class="m-0">Buttons</h1>
            <div class="path">
                <router-link class="links active me-1" to="./DashboardView.vue">
                    Home / Components
                </router-link>
                / Buttons
            </div>
        </div>
        <div class="wrapper row align-items-baseline mb-3">
            <div class="part col-lg-6 col-12 row g-3 restart">
                <div class="col-12">
                    <div class="card">
                        <div class="card-body">
                            <h5 class="card-title mb-3">Default Buttons</h5>
                            <div class="d-flex gap-1 flex-wrap">
                                <div class="btn btn-primary">Primary</div>
                                <div class="btn btn-secondary">Secondary</div>
                                <div class="btn btn-success">Success</div>
                                <div class="btn btn-danger">Danger</div>
                                <div class="btn btn-warning">Warning</div>
                                <div class="btn btn-info">Info</div>
                                <div class="btn btn-light">Light</div>
                                <div class="btn btn-link">Link</div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-12">
                    <div class="card">
                        <div class="card-body">
                            <h5 class="card-title mb-3">Rounded Buttons</h5>
                            <div class="d-flex gap-1 flex-wrap">
                                <div class="btn btn-primary rounded-pill">
                                    Primary
                                </div>
                                <div class="btn btn-secondary rounded-pill">
                                    Secondary
                                </div>
                                <div class="btn btn-succes rounded-pills">
                                    Success
                                </div>
                                <div class="btn btn-danger rounded-pill">
                                    Danger
                                </div>
                                <div class="btn btn-warning rounded-pill">
                                    Warning
                                </div>
                                <div class="btn btn-info rounded-pill">
                                    Info
                                </div>
                                <div class="btn btn-light rounded-pill">
                                    Light
                                </div>
                                <div class="btn btn-link rounded-pill">
                                    Link
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-12">
                    <div class="card">
                        <div class="card-body">
                            <h5 class="card-title mb-3">Button Groups</h5>
                            <div class="d-flex gap-1 flex-wrap">
                                <div class="btn-group">
                                    <div class="btn btn-primary">Left</div>
                                    <div class="btn btn-primary">Middle</div>
                                    <div class="btn btn-primary">Right</div>
                                </div>
                                <div class="btn-group">
                                    <div class="btn btn-danger">Left</div>
                                    <div class="btn btn-warning">Middle</div>
                                    <div class="btn btn-success">Right</div>
                                </div>
                                <div class="btn-group">
                                    <div class="btn btn-outline-primary">
                                        Left
                                    </div>
                                    <div class="btn btn-outline-primary">
                                        Middle
                                    </div>
                                    <div class="btn btn-outline-primary">
                                        Right
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="part col-lg-6 col-12 row g-3 restart">
                <div class="col-12">
                    <div class="card">
                        <div class="card-body">
                            <h5 class="card-title mb-3">Outline Buttons</h5>
                            <div class="d-flex gap-1 flex-wrap">
                                <div class="btn btn-outline-primary">
                                    Primary
                                </div>
                                <div class="btn btn-outline-secondary">
                                    Secondary
                                </div>
                                <div class="btn btn-outline-success">
                                    Success
                                </div>
                                <div class="btn btn-outline-danger">Danger</div>
                                <div class="btn btn-outline-warning">
                                    Warning
                                </div>
                                <div class="btn btn-outline-info">Info</div>
                                <div class="btn btn-outline-light">Light</div>
                                <div class="btn btn-outline-dark">Dark</div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-12">
                    <div class="card">
                        <div class="card-body">
                            <h5 class="card-title mb-3">Button Sizes</h5>
                            <div
                                class="d-flex align-items-baseline gap-1 flex-wrap mb-1"
                            >
                                <div class="btn btn-primary btn-sm">Small</div>
                                <div class="btn btn-secondary">Normal</div>
                                <div class="btn btn-success btn-lg">Large</div>
                                <div class="btn btn-outline-danger btn-sm">
                                    Small
                                </div>
                                <div class="btn btn-outline-warning">
                                    Normal
                                </div>
                                <div class="btn btn-outline-info btn-lg">
                                    Large
                                </div>
                            </div>
                            <div class="btn btn-primary w-100">
                                Block Button
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-12">
                    <div class="card">
                        <div class="card-body">
                            <h5 class="card-title mb-3">Button Sizes</h5>
                            <div
                                class="d-flex align-items-baseline gap-1 flex-wrap mb-1"
                            >
                                <div class="btn btn-primary">Normal</div>
                                <div class="btn btn-primary disabled">
                                    Disabled
                                </div>
                                <div class="btn btn-outline-primary">
                                    Normal
                                </div>
                                <div class="btn btn-outline-primary disabled">
                                    Disabled
                                </div>
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
    name: "ButtonsSection",
};
</script>
