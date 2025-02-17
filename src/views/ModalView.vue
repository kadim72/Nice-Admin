<template>
    <section class="View-section overflow-hidden p-3 pt-0">
        <div class="header-section mb-3">
            <h1 class="m-0">Modal</h1>
            <div class="path">
                <router-link class="links active me-1" to="./DashboardView.vue">
                    Home / Components
                </router-link>
                / Modal
            </div>
        </div>
        <div class="modal backdrop fade" id="basic-modal">
            <div class="modal-dialog">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title">Basic Modal</h5>
                        <button
                            class="btn-close"
                            @click="turnOffModal"
                            target="basic-modal"
                        ></button>
                    </div>
                    <div class="modal-body">
                        <p>
                            Non omnis incidunt qui sed occaecati magni
                            asperiores est mollitia. Soluta at et reprehenderit.
                            Placeat autem numquam et fuga numquam. Tempora in
                            facere consequatur sit dolor ipsum. Consequatur nemo
                            amet incidunt est facilis. Dolorem neque recusandae
                            quo sit molestias sint dignissimos.
                        </p>
                    </div>
                    <div class="modal-footer">
                        <button
                            class="btn btn-secondary me-1"
                            @click="turnOffModal"
                            target="basic-modal"
                        >
                            Close
                        </button>
                        <button class="btn btn-primary">Save Changes</button>
                    </div>
                </div>
            </div>
        </div>
        <div class="modal fade" id="disabled-back-modal">
            <div class="modal-dialog">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title">Disabled Modal</h5>
                        <button
                            class="btn-close"
                            @click="turnOffModal"
                            target="disabled-back-modal"
                        ></button>
                    </div>
                    <div class="modal-body">
                        <p>
                            Non omnis incidunt qui sed occaecati magni
                            asperiores est mollitia. Soluta at et reprehenderit.
                            Placeat autem numquam et fuga numquam. Tempora in
                            facere consequatur sit dolor ipsum. Consequatur nemo
                            amet incidunt est facilis. Dolorem neque recusandae
                            quo sit molestias sint dignissimos.
                        </p>
                    </div>
                    <div class="modal-footer">
                        <button
                            class="btn btn-secondary me-1"
                            @click="turnOffModal"
                            target="disabled-back-modal"
                        >
                            Close
                        </button>
                        <button class="btn btn-primary">Save Changes</button>
                    </div>
                </div>
            </div>
        </div>
        <div class="modal backdrop" id="disabled-animation-modal">
            <div class="modal-dialog">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title">Disabled Animation Modal</h5>
                        <button
                            class="btn-close"
                            @click="turnOffModal"
                            target="disabled-animation-modal"
                        ></button>
                    </div>
                    <div class="modal-body">
                        <p>
                            Non omnis incidunt qui sed occaecati magni
                            asperiores est mollitia. Soluta at et reprehenderit.
                            Placeat autem numquam et fuga numquam. Tempora in
                            facere consequatur sit dolor ipsum. Consequatur nemo
                            amet incidunt est facilis. Dolorem neque recusandae
                            quo sit molestias sint dignissimos.
                        </p>
                    </div>
                    <div class="modal-footer">
                        <button
                            class="btn btn-secondary me-1"
                            @click="turnOffModal"
                            target="disabled-animation-modal"
                        >
                            Close
                        </button>
                        <button class="btn btn-primary">Save Changes</button>
                    </div>
                </div>
            </div>
        </div>
        <div class="modal backdrop fade" id="size-modal">
            <div class="modal-dialog">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title">Sized Modal</h5>
                        <button
                            class="btn-close"
                            @click="turnOffModal"
                            target="size-modal"
                        ></button>
                    </div>
                    <div class="modal-body">
                        <p>
                            Non omnis incidunt qui sed occaecati magni
                            asperiores est mollitia. Soluta at et reprehenderit.
                            Placeat autem numquam et fuga numquam. Tempora in
                            facere consequatur sit dolor ipsum. Consequatur nemo
                            amet incidunt est facilis. Dolorem neque recusandae
                            quo sit molestias sint dignissimos.
                        </p>
                    </div>
                    <div class="modal-footer">
                        <button
                            class="btn btn-secondary me-1"
                            @click="turnOffModal"
                            target="size-modal"
                        >
                            Close
                        </button>
                        <button class="btn btn-primary">Save Changes</button>
                    </div>
                </div>
            </div>
        </div>
        <div class="modal backdrop fade" id="centered-modal">
            <div class="modal-dialog modal-dialog-centered">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title">Vertically Centered Modal</h5>
                        <button
                            class="btn-close"
                            @click="turnOffModal"
                            target="centered-modal"
                        ></button>
                    </div>
                    <div class="modal-body">
                        <p>
                            Non omnis incidunt qui sed occaecati magni
                            asperiores est mollitia. Soluta at et reprehenderit.
                            Placeat autem numquam et fuga numquam. Tempora in
                            facere consequatur sit dolor ipsum. Consequatur nemo
                            amet incidunt est facilis. Dolorem neque recusandae
                            quo sit molestias sint dignissimos.
                        </p>
                    </div>
                    <div class="modal-footer">
                        <button
                            class="btn btn-secondary me-1"
                            @click="turnOffModal"
                            target="centered-modal"
                        >
                            Close
                        </button>
                        <button class="btn btn-primary">Save Changes</button>
                    </div>
                </div>
            </div>
        </div>
        <div class="modal backdrop fade" id="scroll-modal">
            <div class="modal-dialog modal-dialog-scrollable">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title">Scrollabel Modal</h5>
                        <button
                            class="btn-close"
                            @click="turnOffModal"
                            target="scroll-modal"
                        ></button>
                    </div>
                    <div class="modal-body">
                        <p>
                            Non omnis incidunt qui sed occaecati magni
                            asperiores est mollitia. Soluta at et reprehenderit.
                            Placeat autem numquam et fuga numquam. Tempora in
                            facere consequatur sit dolor ipsum. Consequatur nemo
                            amet incidunt est facilis. Dolorem neque recusandae
                            <br />
                            <br />
                            <br />
                            <br />
                            <br />
                            <br />
                            <br />
                            <br />
                            <br />
                            <br />
                            <br />
                            <br />
                            <br />
                            <br />
                            <br />
                            <br />
                            <br />
                            <br />
                            <br />
                            <br />
                            <br />
                            <br />
                            <br />
                            <br />
                            <br />
                            <br />
                            <br />
                            <br />
                            <br />
                            <br />
                            quo sit molestias sint dignissimos.
                        </p>
                    </div>
                    <div class="modal-footer">
                        <button
                            class="btn btn-secondary me-1"
                            @click="turnOffModal"
                            target="scroll-modal"
                        >
                            Close
                        </button>
                        <button class="btn btn-primary">Save Changes</button>
                    </div>
                </div>
            </div>
        </div>
        <div class="wrapper row align-items-baseline mb-3">
            <div class="part row col-lg-6 col-12 restart pe-lg-2">
                <div class="col-12 restart mb-3">
                    <div class="card">
                        <div class="card-body">
                            <h5 class="card-title mb-3">Basic Modal</h5>
                            <p>
                                Toggle a working modal demo by clicking the
                                button below. It will slide down and fade in
                                from the top of the page
                            </p>
                            <button
                                type="button"
                                class="btn btn-primary"
                                target="basic-modal"
                                @click="toggleModal"
                            >
                                Basic Modal
                            </button>
                        </div>
                    </div>
                </div>
                <div class="col-12 restart mb-3">
                    <div class="card">
                        <div class="card-body">
                            <h5 class="card-title mb-3">Disabled Backdrop</h5>
                            <p>
                                You can disable the backdrop by adding
                                <span class="text-danger"
                                    >data-bs-backdrop="false"</span
                                >
                                to
                                <span class="text-danger">.modal-dialog</span>
                            </p>
                            <button
                                type="button"
                                class="btn btn-primary"
                                target="disabled-back-modal"
                                @click="toggleModal"
                            >
                                Launch Modal
                            </button>
                        </div>
                    </div>
                </div>
                <div class="col-12 restart mb-3">
                    <div class="card">
                        <div class="card-body">
                            <h5 class="card-title mb-3">
                                Scrolling Long Content
                            </h5>
                            <p>
                                When modals become too long for the user’s
                                viewport or device, they scroll independent of
                                the page itself. You can also create a
                                scrollable modal that allows scroll the modal
                                body by adding
                                <span class="text-danger"
                                    >.modal-dialog-scrollable</span
                                >
                                to
                                <span class="text-danger">.modal-dialog</span>
                            </p>
                            <button
                                type="button"
                                class="btn btn-primary me-1 mb-1"
                                @click="toggleModal"
                                target="scroll-modal"
                            >
                                Scrolling Modal
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <div class="part row col-lg-6 col-12 restart ps-lg-2">
                <div class="col-12 restart mb-3">
                    <div class="card">
                        <div class="card-body">
                            <h5 class="card-title mb-3">Vertically Centered</h5>
                            <p>
                                Add
                                <span class="text-danger"
                                    >.modal-dialog-centered</span
                                >
                                to
                                <span class="text-danger">.modal-dialog</span>
                                to vertically center the modal.
                            </p>
                            <button
                                type="button"
                                class="btn btn-primary"
                                target="centered-modal"
                                @click="toggleModal"
                            >
                                Vertically Centered
                            </button>
                        </div>
                    </div>
                </div>
                <div class="col-12 restart mb-3">
                    <div class="card">
                        <div class="card-body">
                            <h5 class="card-title mb-3">Modal Sizes</h5>
                            <p>
                                Modals have three optional sizes, available via
                                modifier classes to be placed on a
                                <span class="text-danger">.modal-dialog</span>.
                                These sizes kick in at certain breakpoints to
                                avoid horizontal scrollbars on narrower
                                viewPorts..
                            </p>
                            <button
                                type="button"
                                class="btn btn-primary me-1 mb-1"
                                target="size-modal"
                                @click="toggleModal"
                                attribute="modal-sm"
                            >
                                Small Modal
                            </button>
                            <button
                                type="button"
                                class="btn btn-primary me-1 mb-1"
                                target="size-modal"
                                @click="toggleModal"
                                attribute="modal-lg"
                            >
                                Large Modal
                            </button>
                            <button
                                type="button"
                                class="btn btn-primary me-1 mb-1"
                                target="size-modal"
                                @click="toggleModal"
                                attribute="modal-xl"
                            >
                                Extra Large Modal
                            </button>
                            <button
                                type="button"
                                class="btn btn-primary mb-1"
                                target="size-modal"
                                @click="toggleModal"
                                attribute="modal-fullscreen"
                            >
                                Full Screen Modal
                            </button>
                        </div>
                    </div>
                </div>
                <div class="col-12 restart mb-3">
                    <div class="card">
                        <div class="card-body">
                            <h5 class="card-title mb-3">Disabled Animation</h5>
                            <p>
                                For modals that simply appear rather than fade
                                in to view, remove the
                                <span class="text-danger">.fade</span> class
                                from your
                                <span class="text-danger">.modal</span> element
                            </p>
                            <button
                                type="button"
                                class="btn btn-primary"
                                target="disabled-animation-modal"
                                @click="toggleModal"
                            >
                                Disabled Animation Modal
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
export default {
    name: "ModalView",
    methods: {
        toggleModal(ev) {
            const target = ev.target.getAttribute("target");
            const targetModal = document.getElementById(target);
            const addingClass = ev.target.getAttribute("attribute");

            if (addingClass) {
                targetModal.classList.add(addingClass);
                targetModal.setAttribute("attribute", addingClass);
            }

            targetModal.classList.add("display");
            setTimeout(() => {
                targetModal.classList.add("show");
            }, 0);
        },
        turnOffModal(ev) {
            const target = ev.target.getAttribute("target");
            const targetModal = document.getElementById(target);
            const attribute = targetModal.getAttribute("attribute");

            targetModal.classList.remove("show");
            setTimeout(() => {
                targetModal.classList.remove("display");
                if (attribute) {
                    targetModal.classList.remove(attribute);
                }
            }, 300);
        },
    },
};
</script>
