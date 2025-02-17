<template>
    <section class="View-section overflow-hidden p-3 pt-0">
        <div class="header-section mb-3">
            <h1 class="m-0">Tooltips</h1>
            <div class="path">
                <router-link class="links active me-1" to="./DashboardView.vue">
                    Home / Components
                </router-link>
                / Tooltips
            </div>
        </div>
        <div class="wrapper row align-items-baseline mb-3">
            <div class="col-12 restart">
                <div class="card">
                    <div class="card-body">
                        <div class="card-title mb-3">Tooltips Examples</div>
                        <p>
                            Hover over the buttons below to see the four
                            tooltips directions: top, right, bottom, and left.
                        </p>
                        <button
                            type="button"
                            class="btn btn-secondary tooltip-button me-1 position-relative"
                        >
                            Tooltip on Top
                            <div class="tooltip-text" tooltip="top">
                                Tooltip On Top
                            </div>
                        </button>
                        <button
                            type="button"
                            class="btn btn-secondary tooltip-button me-1 position-relative"
                        >
                            Tooltip on Right
                            <div class="tooltip-text" tooltip="right">
                                Tooltip On Right
                            </div>
                        </button>
                        <button
                            type="button"
                            class="btn btn-secondary tooltip-button me-1 position-relative"
                        >
                            Tooltip on Bottom
                            <div class="tooltip-text" tooltip="bottom">
                                Tooltip On Bottom
                            </div>
                        </button>
                        <button
                            type="button"
                            class="btn btn-secondary tooltip-button position-relative"
                        >
                            Tooltip on Left
                            <div class="tooltip-text" tooltip="left">
                                Tooltip On Left
                            </div>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
export default {
    name: "TooltipsView",
};
</script>
