<template>
    <section class="View-section accordion-section p-3 pt-0 overflow-hidden">
        <div class="header-section mb-3">
            <h1 class="m-0">Accordion</h1>
            <div class="path">
                <router-link class="links active me-1" to="./DashboardView.vue">
                    Home / Components /
                </router-link>
                Accordion
            </div>
        </div>
        <div class="wrapper row align-items-baseline mb-3">
            <div class="col-lg-6 col-12 mb-lg-0 mb-3">
                <div class="card">
                    <div class="card-body">
                        <h5 class="card-title mb-3">Default Accordion</h5>
                        <div class="accordion">
                            <div class="accordion-item">
                                <h2 class="accordion-header">
                                    <button
                                        type="button"
                                        class="accordion-button first-accordion"
                                        target="accordion-item-1"
                                        @click="openAccordion"
                                    >
                                        Accordion Item #1
                                    </button>
                                </h2>
                                <div
                                    class="accordion-collapse show"
                                    id="accordion-item-1"
                                >
                                    <div class="accordion-body">
                                        <span class="fw-bold"
                                            >This is the first item's accordion
                                            body.</span
                                        >
                                        It is hidden by default, until the
                                        collapse plugin adds the appropriate
                                        classes that we use to style each
                                        element. These classes control the
                                        overall appearance, as well as the
                                        showing and hiding via CSS transitions.
                                        You can modify any of this with custom
                                        CSS or overriding our default variables.
                                        It's also worth noting that just about
                                        any HTML can go within the
                                        <span class="text-danger"
                                            >.accordion-body</span
                                        >, though the transition does limit
                                        overflow.
                                    </div>
                                </div>
                            </div>
                            <div class="accordion-item">
                                <h2 class="accordion-header">
                                    <button
                                        type="button"
                                        class="accordion-button collapsed first-accordion"
                                        target="accordion-item-2"
                                        @click="openAccordion"
                                    >
                                        Accordion Item #2
                                    </button>
                                </h2>
                                <div
                                    class="accordion-collapse"
                                    id="accordion-item-2"
                                >
                                    <div class="accordion-body">
                                        <span class="fw-bold"
                                            >This is the first item's accordion
                                            body.</span
                                        >
                                        It is hidden by default, until the
                                        collapse plugin adds the appropriate
                                        classes that we use to style each
                                        element. These classes control the
                                        overall appearance, as well as the
                                        showing and hiding via CSS transitions.
                                        You can modify any of this with custom
                                        CSS or overriding our default variables.
                                        It's also worth noting that just about
                                        any HTML can go within the
                                        <span class="text-danger"
                                            >.accordion-body</span
                                        >, though the transition does limit
                                        overflow.
                                    </div>
                                </div>
                            </div>
                            <div class="accordion-item">
                                <h2 class="accordion-header">
                                    <button
                                        type="button"
                                        class="accordion-button collapsed first-accordion"
                                        target="accordion-item-3"
                                        @click="openAccordion"
                                    >
                                        Accordion Item #3
                                    </button>
                                </h2>
                                <div
                                    class="accordion-collapse"
                                    id="accordion-item-3"
                                >
                                    <div class="accordion-body">
                                        <span class="fw-bold"
                                            >This is the first item's accordion
                                            body.</span
                                        >
                                        It is hidden by default, until the
                                        collapse plugin adds the appropriate
                                        classes that we use to style each
                                        element. These classes control the
                                        overall appearance, as well as the
                                        showing and hiding via CSS transitions.
                                        You can modify any of this with custom
                                        CSS or overriding our default variables.
                                        It's also worth noting that just about
                                        any HTML can go within the
                                        <span class="text-danger"
                                            >.accordion-body</span
                                        >, though the transition does limit
                                        overflow.
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-lg-6 col-12">
                <div class="card">
                    <div class="card-body">
                        <h5 class="card-title mb-3">Default Accordion</h5>
                        <div class="accordion accordion-flush">
                            <div class="accordion-item">
                                <h2 class="accordion-header">
                                    <button
                                        type="button"
                                        class="accordion-button second-accordion"
                                        target="accordion-flush-1"
                                        @click="openAccordionFlush"
                                    >
                                        Accordion Item #1
                                    </button>
                                </h2>
                                <div
                                    class="accordion-collapse show"
                                    id="accordion-flush-1"
                                >
                                    <div class="accordion-body">
                                        Placeholder content for this accordion,
                                        which is intended to demonstrate the
                                        <span class="text-danger"
                                            >.accordion-flush</span
                                        >
                                        class. This is the first item's
                                        accordion body.
                                    </div>
                                </div>
                            </div>
                            <div class="accordion-item">
                                <h2 class="accordion-header">
                                    <button
                                        type="button"
                                        class="accordion-button collapsed second-accordion"
                                        target="accordion-flush-2"
                                        @click="openAccordionFlush"
                                    >
                                        Accordion Item #2
                                    </button>
                                </h2>
                                <div
                                    class="accordion-collapse"
                                    id="accordion-flush-2"
                                >
                                    <div class="accordion-body">
                                        Placeholder content for this accordion,
                                        which is intended to demonstrate the
                                        <span class="text-danger"
                                            >.accordion-flush</span
                                        >
                                        class. This is the first item's
                                        accordion body.
                                    </div>
                                </div>
                            </div>
                            <div class="accordion-item">
                                <h2 class="accordion-header">
                                    <button
                                        type="button"
                                        class="accordion-button collapsed second-accordion"
                                        target="accordion-flush-3"
                                        @click="openAccordionFlush"
                                    >
                                        Accordion Item #3
                                    </button>
                                </h2>
                                <div
                                    class="accordion-collapse"
                                    id="accordion-flush-3"
                                >
                                    <div class="accordion-body">
                                        Placeholder content for this accordion,
                                        which is intended to demonstrate the
                                        <span class="text-danger"
                                            >.accordion-flush</span
                                        >
                                        class. This is the first item's
                                        accordion body.
                                    </div>
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
    name: "AccordionView",
    data: () => {
        return {};
    },
    methods: {
        openAccordion(ev) {
            const buttons = document.querySelectorAll(
                ".accordion-section .first-accordion"
            );
            const statues = ev.target.classList.contains("collapsed");

            buttons.forEach((e) => {
                const target = document.getElementById(
                    e.getAttribute("target")
                );

                e.classList.add("collapsed");

                target.classList.remove("show");
            });

            if (statues) {
                ev.target.classList.remove("collapsed");

                const target = document.getElementById(
                    ev.target.getAttribute("target")
                );
                target.classList.add("show");
            }
        },
        openAccordionFlush(ev) {
            const buttons = document.querySelectorAll(
                ".accordion-section .second-accordion"
            );
            const statues = ev.target.classList.contains("collapsed");

            buttons.forEach((e) => {
                const target = document.getElementById(
                    e.getAttribute("target")
                );

                e.classList.add("collapsed");

                target.classList.remove("show");
            });

            if (statues) {
                ev.target.classList.remove("collapsed");

                const target = document.getElementById(
                    ev.target.getAttribute("target")
                );
                target.classList.add("show");
            }
        },
    },
};
</script>
