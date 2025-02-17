<template>
    <section class="View-section overflow-hidden p-3 pt-0">
        <div class="header-section mb-3">
            <h1 class="m-0">Form Validation</h1>
            <div class="path">
                <router-link class="links active me-1" to="./DashboardView.vue">
                    Home / Forms
                </router-link>
                / Form Validation
            </div>
        </div>
        <div class="wrapper row align-items-baseline mb-3">
            <div class="part row col-lg-6 col-12 restart pe-lg-2">
                <div class="col-12 restart mb-3">
                    <div class="card">
                        <div class="card-body">
                            <h5 class="card-title mb-3">Browser Default</h5>
                            <p>
                                Browser default validation with using the
                                <span class="text-danger">required</span>
                                keyword. Try submitting the form below.
                                Depending on your browser and OS, you’ll see a
                                slightly different style of feedback.
                            </p>
                            <form class="row g-3">
                                <div class="col-md-4 position-relative">
                                    <label class="form-label">First Name</label>
                                    <input
                                        type="text"
                                        class="form-control"
                                        value="Jhon"
                                        required
                                    />
                                </div>
                                <div class="col-md-4 position-relative">
                                    <label class="form-label">Last Name</label>
                                    <input
                                        type="text"
                                        class="form-control"
                                        value="Doe"
                                        required
                                    />
                                </div>
                                <div class="col-md-4 position-relative">
                                    <label class="form-label">Username</label>
                                    <div class="input-group">
                                        <span class="input-group-text">@</span>
                                        <input
                                            type="text"
                                            class="form-control"
                                            required
                                        />
                                    </div>
                                </div>
                                <div class="col-md-7 position-relative">
                                    <label class="form-label">City</label>
                                    <input
                                        type="text"
                                        class="form-control"
                                        required
                                    />
                                </div>
                                <div class="col-md-3 position-relative">
                                    <label class="form-label">City</label>
                                    <select class="form-select" required>
                                        <option>Choose...</option>
                                        <option>...</option>
                                    </select>
                                </div>
                                <div class="col-md-2 position-relative">
                                    <label class="form-label">Zip</label>
                                    <input
                                        type="number"
                                        required
                                        class="form-control"
                                    />
                                </div>
                                <div class="col-12 position-relative">
                                    <div class="form-check">
                                        <input
                                            type="checkbox"
                                            class="form-check-input"
                                            required
                                        />
                                        <label class="form-check-label"
                                            >Agree To Terms And Condition</label
                                        >
                                    </div>
                                </div>
                                <div class="col-12">
                                    <button
                                        type="submit"
                                        class="btn btn-primary"
                                    >
                                        Submit Form
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
            <div class="part row col-lg-6 col-12 restart ps-lg-2">
                <div class="col-12 restart mb-3">
                    <div class="card">
                        <div class="card-body">
                            <h5 class="card-title mb-3">Browser Default</h5>
                            <p>
                                For custom Bootstrap form validation messages,
                                you’ll need to add the
                                <span class="text-danger">novalidate</span>
                                boolean attribute to your
                                <span class="text-danger">
                                    &lt;<code>form</code>&gt;</span
                                >. This disables the browser default feedback
                                tooltips, but still provides access to the form
                                validation APIs in JavaScript.
                            </p>
                            <form class="row g-3 was-validated" novalidate>
                                <div class="col-md-4">
                                    <label class="form-label">First Name</label>
                                    <input
                                        type="text"
                                        class="form-control"
                                        value="Jhon"
                                        required
                                    />
                                    <div class="valid-feedback">
                                        Looks Good!
                                    </div>
                                </div>
                                <div class="col-md-4">
                                    <label class="form-label">Last Name</label>
                                    <input
                                        type="text"
                                        class="form-control"
                                        value="Doe"
                                        required
                                    />
                                    <div class="valid-feedback">
                                        Looks Good!
                                    </div>
                                </div>
                                <div class="col-md-4">
                                    <label class="form-label">Username</label>
                                    <div class="input-group has-validation">
                                        <span class="input-group-text">@</span>
                                        <input
                                            type="text"
                                            class="form-control"
                                            required
                                        />
                                        <div class="invalid-feedback">
                                            Looks Good!
                                        </div>
                                    </div>
                                </div>
                                <div class="col-md-7">
                                    <label class="form-label">City</label>
                                    <input
                                        type="text"
                                        class="form-control"
                                        required
                                    />
                                    <div class="invalid-feedback">
                                        Please Provide A Valid City.!
                                    </div>
                                </div>
                                <div class="col-md-3">
                                    <label class="form-label">City</label>
                                    <select class="form-select" required>
                                        <option>Choose...</option>
                                        <option>...</option>
                                    </select>
                                    <div class="valid-feedback">
                                        Please Select A Valid State!
                                    </div>
                                </div>
                                <div class="col-md-2">
                                    <label class="form-label">Zip</label>
                                    <input
                                        type="number"
                                        required
                                        class="form-control"
                                    />
                                    <div class="invalid-feedback">
                                        Please Write A Zip!
                                    </div>
                                </div>
                                <div class="col-12">
                                    <div class="form-check">
                                        <input
                                            type="checkbox"
                                            class="form-check-input"
                                            required
                                        />
                                        <label class="form-check-label"
                                            >Agree To Terms And Condition</label
                                        >
                                        <div class="invalid-feedback">
                                            You Must Agree Before Submitting!
                                        </div>
                                    </div>
                                </div>
                                <div class="col-12">
                                    <button
                                        type="submit"
                                        class="btn btn-primary"
                                    >
                                        Submit Form
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
                <div class="col-12 restart mb-3">
                    <div class="card">
                        <div class="card-body">
                            <h5 class="card-title mb-3">
                                Custom Styled Validation with Tooltips
                            </h5>
                            <p>
                                If your form layout allows it, you can swap the
                                <span class="text-danger"
                                    >.{valid|invalid}-feedback</span
                                >
                                classes for
                                <span class="text-danger">
                                    .{valid|invalid}-tooltip
                                </span>
                                classes to display validation feedback in a
                                styled tooltip. Be sure to have a parent with
                                <span class="text-danger"
                                    >position: relative</span
                                >
                                on it for tooltip positioning. In the example
                                below, our column classes have this already, but
                                your project may require an alternative setup.
                            </p>
                            <form class="row g-3 was-validated" novalidate>
                                <div class="col-md-4 position-relative">
                                    <label class="form-label">First Name</label>
                                    <input
                                        type="text"
                                        class="form-control"
                                        value="Jhon"
                                        required
                                    />
                                    <div class="valid-tooltip">Looks Good!</div>
                                </div>
                                <div class="col-md-4 position-relative">
                                    <label class="form-label">Last Name</label>
                                    <input
                                        type="text"
                                        class="form-control"
                                        value="Doe"
                                        required
                                    />
                                    <div class="valid-tooltip">Looks Good!</div>
                                </div>
                                <div class="col-md-4 position-relative">
                                    <label class="form-label">Username</label>
                                    <div class="input-group has-validation">
                                        <span class="input-group-text">@</span>
                                        <input
                                            type="text"
                                            class="form-control"
                                            required
                                        />
                                        <div class="invalid-tooltip">
                                            Looks Good!
                                        </div>
                                    </div>
                                </div>
                                <div class="col-md-7 position-relative">
                                    <label class="form-label">City</label>
                                    <input
                                        type="text"
                                        class="form-control"
                                        required
                                    />
                                    <div class="invalid-tooltip">
                                        Please Provide A Valid City.!
                                    </div>
                                </div>
                                <div class="col-md-3 position-relative">
                                    <label class="form-label">City</label>
                                    <select class="form-select" required>
                                        <option>Choose...</option>
                                        <option>...</option>
                                    </select>
                                    <div class="valid-tooltip">
                                        Please Select A Valid State!
                                    </div>
                                </div>
                                <div class="col-md-2 position-relative">
                                    <label class="form-label">Zip</label>
                                    <input
                                        type="number"
                                        required
                                        class="form-control"
                                    />
                                    <div class="invalid-tooltip">
                                        Please Write A Zip!
                                    </div>
                                </div>
                                <div class="col-12 position-relative">
                                    <div class="form-check">
                                        <input
                                            type="checkbox"
                                            class="form-check-input"
                                            required
                                        />
                                        <label class="form-check-label"
                                            >Agree To Terms And Condition</label
                                        >
                                        <div class="invalid-tooltip">
                                            You Must Agree Before Submitting!
                                        </div>
                                    </div>
                                </div>
                                <div class="col-12 position-relative">
                                    <button
                                        type="submit"
                                        class="btn btn-primary"
                                    >
                                        Submit Form
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
export default {
    name: "FormValidationView",
};
</script>
