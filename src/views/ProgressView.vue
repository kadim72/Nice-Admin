<template>
    <section class="View-section overflow-hidden p-3 pt-0">
        <div class="header-section mb-3">
            <h1 class="m-0">Progress</h1>
            <div class="path">
                <router-link class="links active me-1" to="./DashboardView.vue">
                    Home / Components
                </router-link>
                / Progress
            </div>
        </div>
        <div class="wrapper row align-items-baseline mb-3">
            <div class="part row col-lg-6 col-12 restart pe-lg-2">
                <div class="col-12 restart mb-3">
                    <div class="card">
                        <div class="card-body">
                            <h5 class="card-title mb-3">Default</h5>
                            <div class="progress">
                                <div
                                    class="progress-bar"
                                    style="width: 25%"
                                ></div>
                            </div>
                            <div class="progress mt-3">
                                <div
                                    class="progress-bar"
                                    style="width: 50%"
                                ></div>
                            </div>
                            <div class="progress mt-3">
                                <div
                                    class="progress-bar"
                                    style="width: 75%"
                                ></div>
                            </div>
                            <div class="progress mt-3">
                                <div
                                    class="progress-bar"
                                    style="width: 100%"
                                ></div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-12 restart mb-3">
                    <div class="card">
                        <div class="card-body">
                            <h5 class="card-title mb-3">Labels</h5>
                            <div class="progress">
                                <div class="progress-bar" style="width: 25%">
                                    25%
                                </div>
                            </div>
                            <div class="progress mt-3">
                                <div class="progress-bar" style="width: 50%">
                                    50%
                                </div>
                            </div>
                            <div class="progress mt-3">
                                <div class="progress-bar" style="width: 75%">
                                    75%
                                </div>
                            </div>
                            <div class="progress mt-3">
                                <div class="progress-bar" style="width: 100%">
                                    100%
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-12 restart mb-3">
                    <div class="card">
                        <div class="card-body">
                            <h5 class="card-title mb-3">Backgrounds</h5>
                            <div class="progress">
                                <div
                                    class="progress-bar"
                                    style="width: 10%"
                                ></div>
                            </div>
                            <div class="progress mt-3">
                                <div
                                    class="progress-bar bg-success"
                                    style="width: 25%"
                                ></div>
                            </div>
                            <div class="progress mt-3">
                                <div
                                    class="progress-bar bg-info"
                                    style="width: 50%"
                                ></div>
                            </div>
                            <div class="progress mt-3">
                                <div
                                    class="progress-bar bg-warning"
                                    style="width: 75%"
                                ></div>
                            </div>
                            <div class="progress mt-3">
                                <div
                                    class="progress-bar bg-danger"
                                    style="width: 100%"
                                ></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="part row col-lg-6 col-12 restart ps-lg-2">
                <div class="col-12 restart mb-3">
                    <div class="card">
                        <div class="card-body">
                            <h5 class="card-title mb-3">Height</h5>
                            <p>
                                We only set a height value on the progress, so
                                if you change that value the inner progress-bar
                                will automatically resize accordingl
                            </p>
                            <div class="progress" style="height: 10px">
                                <div
                                    class="progress-bar"
                                    style="width: 25%"
                                ></div>
                            </div>
                            <div class="progress mt-3">
                                <div
                                    class="progress-bar"
                                    style="width: 50%"
                                ></div>
                            </div>
                            <div class="progress mt-3" style="height: 25px">
                                <div
                                    class="progress-bar"
                                    style="width: 75%"
                                ></div>
                            </div>
                            <div class="progress mt-3" style="height: 30px">
                                <div
                                    class="progress-bar"
                                    style="width: 100%"
                                ></div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-12 restart mb-3">
                    <div class="card">
                        <div class="card-body">
                            <h5 class="card-title mb-3">Striped Backgrounds</h5>
                            <div class="progress">
                                <div
                                    class="progress-bar progress-bar-striped"
                                    style="width: 10%"
                                ></div>
                            </div>
                            <div class="progress mt-3">
                                <div
                                    class="progress-bar progress-bar-striped bg-success"
                                    style="width: 25%"
                                ></div>
                            </div>
                            <div class="progress mt-3">
                                <div
                                    class="progress-bar progress-bar-striped bg-info"
                                    style="width: 50%"
                                ></div>
                            </div>
                            <div class="progress mt-3">
                                <div
                                    class="progress-bar progress-bar-striped bg-warning"
                                    style="width: 75%"
                                ></div>
                            </div>
                            <div class="progress mt-3">
                                <div
                                    class="progress-bar progress-bar-striped bg-danger"
                                    style="width: 100%"
                                ></div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-12 restart mb-3">
                    <div class="card">
                        <div class="card-body">
                            <h5 class="card-title mb-3">Striped Backgrounds</h5>
                            <div class="progress">
                                <div
                                    class="progress-bar progress-bar-striped progress-bar-animated"
                                    style="width: 10%"
                                ></div>
                            </div>
                            <div class="progress mt-3">
                                <div
                                    class="progress-bar progress-bar-striped progress-bar-animated bg-success"
                                    style="width: 25%"
                                ></div>
                            </div>
                            <div class="progress mt-3">
                                <div
                                    class="progress-bar progress-bar-striped progress-bar-animated bg-info"
                                    style="width: 50%"
                                ></div>
                            </div>
                            <div class="progress mt-3">
                                <div
                                    class="progress-bar progress-bar-striped progress-bar-animated bg-warning"
                                    style="width: 75%"
                                ></div>
                            </div>
                            <div class="progress mt-3">
                                <div
                                    class="progress-bar progress-bar-striped progress-bar-animated bg-danger"
                                    style="width: 100%"
                                ></div>
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
    name: "ProgressView",
};
</script>
