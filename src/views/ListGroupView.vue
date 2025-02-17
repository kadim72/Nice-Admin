<template>
    <section class="View-section overflow-hidden p-3 pt-0">
        <div class="header-section mb-3">
            <h1 class="m-0">List Group</h1>
            <div class="path">
                <router-link class="links active me-1" to="./DashboardView.vue">
                    Home / Components
                </router-link>
                / List Group
            </div>
        </div>
        <div class="wrapper row align-items-baseline mb-3">
            <div class="part row col-lg-6 col-12 restart pe-lg-2">
                <div class="col-12 restart mb-3">
                    <div class="card">
                        <div class="card-body">
                            <h5 class="card-title mb-3">Default List Group</h5>
                            <ul class="list-group">
                                <li class="list-group-item">An Item</li>
                                <li class="list-group-item">A Second Item</li>
                                <li class="list-group-item">A Third Item</li>
                                <li class="list-group-item">A Fourth Item</li>
                                <li class="list-group-item">A Fifth One</li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div class="col-12 restart mb-3">
                    <div class="card">
                        <div class="card-body">
                            <h5 class="card-title mb-3">Links And Buttons</h5>
                            <div class="list-group">
                                <button
                                    class="list-group-item active list-group-item-action"
                                >
                                    The Current Button
                                </button>
                                <button
                                    class="list-group-item list-group-item-action"
                                >
                                    A Second Button Item
                                </button>
                                <button
                                    class="list-group-item list-group-item-action"
                                >
                                    A Third Button Item
                                </button>
                                <button
                                    class="list-group-item list-group-item-action"
                                >
                                    A Fourth Button Item
                                </button>
                                <button
                                    class="list-group-item list-group-item-action disabled"
                                >
                                    A Disabled Button Item
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-12 restart mb-3">
                    <div class="card">
                        <div class="card-body">
                            <h5 class="card-title mb-3">Numbered</h5>
                            <ul class="list-group list-group-numbered">
                                <li class="list-group-item">Ceas Justo Odio</li>
                                <li class="list-group-item">Ceas Justo Odio</li>
                                <li class="list-group-item">Ceas Justo Odio</li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div class="col-12 restart mb-3">
                    <div class="card">
                        <div class="card-body">
                            <h5 class="card-title mb-3">With Badges</h5>
                            <ul class="list-group">
                                <li
                                    class="list-group-item d-flex justify-content-between align-items-center"
                                >
                                    A List Item
                                    <span class="badge bg-primary rounded-pill"
                                        >14</span
                                    >
                                </li>
                                <li
                                    class="list-group-item d-flex justify-content-between align-items-center"
                                >
                                    A Second List Item
                                    <span class="badge bg-primary rounded-pill"
                                        >2</span
                                    >
                                </li>
                                <li
                                    class="list-group-item d-flex justify-content-between align-items-center"
                                >
                                    A Third List Item
                                    <span class="badge bg-primary rounded-pill"
                                        >1</span
                                    >
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div class="col-12 restart mb-3">
                    <div class="card">
                        <div class="card-body">
                            <h5 class="card-title mb-3">
                                With Contextual Classes
                            </h5>
                            <ul class="list-group">
                                <li class="list-group-item">
                                    A Simple Default List Group Item
                                </li>
                                <li
                                    class="list-group-item list-group-item-secondary"
                                >
                                    A Simple Secondary List Group Item
                                </li>
                                <li
                                    class="list-group-item list-group-item-success"
                                >
                                    A Simple Success List Group Item
                                </li>
                                <li
                                    class="list-group-item list-group-item-danger"
                                >
                                    A Simple Danger List Group Item
                                </li>
                                <li
                                    class="list-group-item list-group-item-warning"
                                >
                                    A Simple Warning List Group Item
                                </li>
                                <li
                                    class="list-group-item list-group-item-info"
                                >
                                    A Simple Info List Group Item
                                </li>
                                <li
                                    class="list-group-item list-group-item-light"
                                >
                                    A Simple Light List Group Item
                                </li>
                                <li
                                    class="list-group-item list-group-item-dark"
                                >
                                    A Simple Dark List Group Item
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <div class="part row col-lg-6 col-12 restart ps-lg-2">
                <div class="col-12 restart mb-3">
                    <div class="card">
                        <div class="card-body">
                            <h5 class="card-title mb-3">Clean List Group</h5>
                            <p>
                                Add
                                <span class="text-danger"
                                    >.list-group-flush</span
                                >
                                to remove some borders and rounded corners to
                                render list group items edge-to-edge in a parent
                                container (e.g., cards).
                            </p>
                            <ul class="list-group list-group-flush">
                                <li class="list-group-item">An Item</li>
                                <li class="list-group-item">A Second Item</li>
                                <li class="list-group-item">A third item</li>
                                <li class="list-group-item">A Fourth item</li>
                                <li class="list-group-item disabled">
                                    A Disabled item
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div class="col-12 restart mb-3">
                    <div class="card">
                        <div class="card-body">
                            <h5 class="card-title mb-3">With Custom Content</h5>
                            <ol class="list-group list-group-numbered">
                                <li
                                    class="list-group-item d-flex justify-content-between align-items-start"
                                >
                                    <div class="me-auto ps-2">
                                        <h6>Subheading</h6>
                                        <p>Cras justo odio</p>
                                    </div>
                                    <span class="badge bg-primary">14</span>
                                </li>
                                <li
                                    class="list-group-item d-flex justify-content-between align-items-start"
                                >
                                    <div class="me-auto ps-2">
                                        <h6>Subheading</h6>
                                        <p>Cras justo odio</p>
                                    </div>
                                    <span class="badge bg-primary">14</span>
                                </li>
                                <li
                                    class="list-group-item d-flex justify-content-between align-items-start"
                                >
                                    <div class="me-auto ps-2">
                                        <h6>Subheading</h6>
                                        <p>Cras justo odio</p>
                                    </div>
                                    <span class="badge bg-primary">14</span>
                                </li>
                            </ol>
                        </div>
                    </div>
                </div>
                <div class="col-12 restart mb-3">
                    <div class="card">
                        <div class="card-body">
                            <h5 class="card-title mb-3">Advanced Content</h5>
                            <ul class="list-group">
                                <li
                                    class="list-group-item list-group-item-action active"
                                >
                                    <div
                                        class="d-flex justify-content-between align-items-center"
                                    >
                                        <h6>List Group Item Heading</h6>
                                        <span>3 Days Ago</span>
                                    </div>
                                    <p class="mb-0">
                                        Some Placeholder Content A Paragraph
                                    </p>
                                    <small>And Some Muted Smll Print</small>
                                </li>
                                <li
                                    class="list-group-item list-group-item-action"
                                >
                                    <div
                                        class="d-flex justify-content-between align-items-center"
                                    >
                                        <h6>List Group Item Heading</h6>
                                        <span>3 Days Ago</span>
                                    </div>
                                    <p class="mb-0">
                                        Some Placeholder Content A Paragraph
                                    </p>
                                    <small>And Some Muted Smll Print</small>
                                </li>
                                <li
                                    class="list-group-item list-group-item-action"
                                >
                                    <div
                                        class="d-flex justify-content-between align-items-center"
                                    >
                                        <h6>List Group Item Heading</h6>
                                        <span>3 Days Ago</span>
                                    </div>
                                    <p class="mb-0">
                                        Some Placeholder Content A Paragraph
                                    </p>
                                    <small>And Some Muted Smll Print</small>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div class="col-12 restart mb-3">
                    <div class="card">
                        <div class="card-body">
                            <h5 class="card-title mb-3">With Custom Content</h5>
                            <ul class="list-group">
                                <li class="list-group-item">
                                    <input
                                        type="checkbox"
                                        class="form-check-input m3-1"
                                    />
                                    First Checkbox
                                </li>
                                <li class="list-group-item">
                                    <input
                                        type="checkbox"
                                        class="form-check-input m3-1"
                                    />
                                    Second Checkbox
                                </li>
                                <li class="list-group-item">
                                    <input
                                        type="checkbox"
                                        class="form-check-input m3-1"
                                    />
                                    Third Checkbox
                                </li>
                                <li class="list-group-item">
                                    <input
                                        type="checkbox"
                                        class="form-check-input m3-1"
                                    />
                                    Fourth Checkbox
                                </li>
                                <li class="list-group-item">
                                    <input
                                        type="checkbox"
                                        class="form-check-input m3-1"
                                    />
                                    Fifth Checkbox
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
export default {
    name: "ListGroupView",
};
</script>
