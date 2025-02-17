<template>
    <section class="View-section overflow-hidden p-3 pt-0">
        <div class="header-section mb-3">
            <h1 class="m-0">Spinner</h1>
            <div class="path">
                <router-link class="links active me-1" to="./DashboardView.vue">
                    Home / Components
                </router-link>
                / Spinner
            </div>
        </div>
        <div class="wrapper row align-items-baseline mb-3">
            <div class="part row col-lg-6 col-12 restart pe-lg-2">
                <div class="col-12 restart mb-3">
                    <div class="card">
                        <div class="card-body">
                            <h5 class="card-title mb-3">Border Spinner</h5>
                            <p>
                                Use the border spinners for a lightweight
                                loading indicator.
                            </p>
                            <div class="spinner-border"></div>
                        </div>
                    </div>
                </div>
                <div class="col-12 restart mb-3">
                    <div class="card">
                        <div class="card-body">
                            <h5 class="card-title mb-3">Labels</h5>
                            <div class="spinner-border text-primary me-2"></div>
                            <div
                                class="spinner-border text-secondary me-2"
                            ></div>
                            <div class="spinner-border text-success me-2"></div>
                            <div class="spinner-border text-danger me-2"></div>
                            <div class="spinner-border text-warning me-2"></div>
                            <div class="spinner-border text-info me-2"></div>
                            <div class="spinner-border text-light me-2"></div>
                            <div class="spinner-border text-dark"></div>
                        </div>
                    </div>
                </div>
                <div class="col-12 restart mb-3">
                    <div class="card">
                        <div class="card-body">
                            <h5 class="card-title mb-3">Alignment</h5>
                            <p>
                                Use flexbox utilities, float utilities, or text
                                alignment utilities to place spinners exactly
                                where you need them in any situation.
                            </p>
                            <div class="d-flex justify-content-center">
                                <div class="spinner-border"></div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-12 restart mb-3">
                    <div class="card">
                        <div class="card-body">
                            <h5 class="card-title mb-3">Buttons</h5>
                            <p>
                                Use spinners within buttons to indicate an
                                action is currently processing or taking place.
                                You may also swap the text out of the spinner
                                element and utilize button text as needed.
                            </p>
                            <button
                                type="button"
                                class="btn btn-primary disabled me-1"
                            >
                                <div
                                    class="spinner-border spinner-border-sm"
                                ></div>
                            </button>
                            <button
                                type="button"
                                class="btn btn-primary disabled me-1"
                            >
                                <div
                                    class="spinner-border spinner-border-sm me-1"
                                ></div>
                                Loading...
                            </button>
                            <button
                                type="button"
                                class="btn btn-primary disabled me-1"
                            >
                                <div
                                    class="spinner-grow spinner-grow-sm me-1"
                                ></div>
                            </button>
                            <button
                                type="button"
                                class="btn btn-primary disabled me-1"
                            >
                                <div
                                    class="spinner-grow spinner-grow-sm me-1"
                                ></div>
                                Loading...
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <div class="part row col-lg-6 col-12 restart ps-lg-2">
                <div class="col-12 restart mb-3">
                    <div class="card">
                        <div class="card-body">
                            <h5 class="card-title mb-3">Growing Spinner</h5>
                            <p>
                                If you don’t fancy a border spinner, switch to
                                the grow spinner. While it doesn’t technically
                                spin, it does repeatedly grow!
                            </p>
                            <div class="spinner-grow"></div>
                        </div>
                    </div>
                </div>
                <div class="col-12 restart mb-3">
                    <div class="card">
                        <div class="card-body">
                            <h5 class="card-title mb-3">
                                Growing Color Spinners
                            </h5>
                            <div class="spinner-grow text-primary me-2"></div>
                            <div class="spinner-grow text-secondary me-2"></div>
                            <div class="spinner-grow text-success me-2"></div>
                            <div class="spinner-grow text-danger me-2"></div>
                            <div class="spinner-grow text-warning me-2"></div>
                            <div class="spinner-grow text-info me-2"></div>
                            <div class="spinner-grow text-light me-2"></div>
                            <div class="spinner-grow text-dark"></div>
                        </div>
                    </div>
                </div>
                <div class="col-12 restart mb-3">
                    <div class="card">
                        <div class="card-body">
                            <h5 class="card-title mb-3">Sizes</h5>
                            <p>
                                Add
                                <span class="text-danger"
                                    >.spinner-border-sm</span
                                >
                                and
                                <span class="text-danger"
                                    >.spinner-grow-sm</span
                                >
                                to make a smaller spinner that can quickly be
                                used within other components. Or, use custom CSS
                                or inline styles to change the dimensions as
                                needed.
                            </p>
                            <div
                                class="spinner-border spinner-border-sm me-1"
                            ></div>
                            <div
                                class="spinner-border me-1"
                                style="width: 30px; height: 30px"
                            ></div>
                            <div
                                class="spinner-border me-1"
                                style="width: 45px; height: 45px"
                            ></div>
                            <div
                                class="spinner-border me-1"
                                style="width: 55px; height: 55px"
                            ></div>
                            <div
                                class="spinner-grow spinner-grow-sm me-1"
                            ></div>
                            <div
                                class="spinner-grow me-1"
                                style="width: 30px; height: 30px"
                            ></div>
                            <div
                                class="spinner-grow me-1"
                                style="width: 45px; height: 45px"
                            ></div>
                            <div
                                class="spinner-grow"
                                style="width: 55px; height: 55px"
                            ></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
export default {
    name: "SpinnerView",
};
</script>
