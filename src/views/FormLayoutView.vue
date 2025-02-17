<template>
    <section class="View-section overflow-hidden p-3 pt-0">
        <div class="header-section mb-3">
            <h1 class="m-0">Form Layout</h1>
            <div class="path">
                <router-link class="links active me-1" to="./DashboardView.vue">
                    Home / Forms
                </router-link>
                / Form Layout
            </div>
        </div>
        <div class="wrapper row align-items-baseline mb-3">
            <div class="part row col-lg-6 col-12 restart pe-lg-2">
                <div class="col-12 restart mb-3">
                    <div class="card">
                        <div class="card-body">
                            <h5 class="card-title mb-3">Horizontal Form</h5>
                            <form>
                                <div class="row mb-3">
                                    <label class="col-sm-2 col-form-label"
                                        >Your Name</label
                                    >
                                    <div class="col-sm-10">
                                        <input
                                            type="text"
                                            class="form-control"
                                        />
                                    </div>
                                </div>
                                <div class="row mb-3">
                                    <label class="col-sm-2 col-form-label"
                                        >Email</label
                                    >
                                    <div class="col-sm-10">
                                        <input
                                            type="email"
                                            class="form-control"
                                        />
                                    </div>
                                </div>
                                <div class="row mb-3">
                                    <label class="col-sm-2 col-form-label"
                                        >Password</label
                                    >
                                    <div class="col-sm-10">
                                        <input
                                            type="password"
                                            class="form-control"
                                        />
                                    </div>
                                </div>
                                <fieldset class="row mb-3">
                                    <legend class="col-form-label col-sm-2 p-0">
                                        Radios
                                    </legend>
                                    <div class="col-sm-10">
                                        <div class="form-check">
                                            <input
                                                type="radio"
                                                class="form-check-input"
                                            />
                                            <label class="form-check-label"
                                                >First Radio</label
                                            >
                                        </div>
                                        <div class="form-check">
                                            <input
                                                type="radio"
                                                class="form-check-input"
                                            />
                                            <label class="form-check-label"
                                                >Second Radio</label
                                            >
                                        </div>
                                    </div>
                                </fieldset>
                                <div class="row mb-3">
                                    <div class="col-sm-10 offset-sm-2">
                                        <div class="form-check">
                                            <input
                                                type="checkbox"
                                                class="form-check-input"
                                            />
                                            <label class="form-check-label"
                                                >Example Checkbox</label
                                            >
                                        </div>
                                    </div>
                                </div>
                                <div class="text-center">
                                    <button
                                        type="submit"
                                        class="btn btn-primary me-1"
                                    >
                                        Submit
                                    </button>
                                    <button
                                        type="reset"
                                        class="btn btn-secondary"
                                    >
                                        Reset
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
                <div class="col-12 restart mb-3">
                    <div class="card">
                        <div class="card-body">
                            <h5 class="card-title mb-3">Multi Columns Form</h5>
                            <form>
                                <div class="mb-3">
                                    <label class="col-form-label"
                                        >Your Name</label
                                    >
                                    <input type="text" class="form-control" />
                                </div>
                                <div class="row mb-3">
                                    <div class="col-md-6 col-12 mb-md-0 mb-3">
                                        <label class="col-form-label"
                                            >Email</label
                                        >
                                        <input
                                            type="email"
                                            class="form-control"
                                        />
                                    </div>
                                    <div class="col-md-6 col-12 mb-md-0 mb-3">
                                        <label class="col-form-label"
                                            >Password</label
                                        >
                                        <input
                                            type="password"
                                            class="form-control"
                                        />
                                    </div>
                                </div>
                                <div class="mb-3">
                                    <label class="col-form-label"
                                        >Address</label
                                    >
                                    <input
                                        type="text"
                                        class="form-control"
                                        placeholder="1234 Main St"
                                    />
                                </div>
                                <div class="mb-3">
                                    <label class="col-form-label"
                                        >Address 2</label
                                    >
                                    <input
                                        type="text"
                                        class="form-control"
                                        placeholder="Apartment, Studio, Or Floor"
                                    />
                                </div>
                                <div class="row mb-3">
                                    <div class="col-md-4 col-12 mb-md-0 mb-3">
                                        <label class="col-form-label"
                                            >City</label
                                        >
                                        <input
                                            type="text"
                                            class="form-control"
                                        />
                                    </div>
                                    <div class="col-md-4 col-12 mb-md-0 mb-3">
                                        <label class="col-form-label"
                                            >State</label
                                        >
                                        <select class="form-select">
                                            <option>Choose...</option>
                                            <option>...</option>
                                        </select>
                                    </div>
                                    <div class="col-md-4 col-12 mb-md-0 mb-3">
                                        <label class="col-form-label"
                                            >Zip</label
                                        >
                                        <input
                                            type="number"
                                            class="form-control"
                                        />
                                    </div>
                                </div>
                                <div class="mb-3">
                                    <div class="form-check">
                                        <input
                                            type="checkbox"
                                            class="form-check-input"
                                        />
                                        <label class="form-check-label"
                                            >Check Me Out</label
                                        >
                                    </div>
                                </div>
                                <div class="text-center">
                                    <button
                                        type="submit"
                                        class="btn btn-primary me-1"
                                    >
                                        Submit
                                    </button>
                                    <button
                                        type="reset"
                                        class="btn btn-secondary"
                                    >
                                        Reset
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
                            <h5 class="card-title mb-3">Vertical Form</h5>
                            <form class="row gap-3">
                                <div class="col-12">
                                    <label class="form-label">Your Name</label>
                                    <input type="text" class="form-control" />
                                </div>
                                <div class="col-12">
                                    <label class="form-label">Email</label>
                                    <input type="email" class="form-control" />
                                </div>
                                <div class="col-12">
                                    <label class="form-label">Password</label>
                                    <input
                                        type="password"
                                        class="form-control"
                                    />
                                </div>
                                <div class="col-12">
                                    <label class="form-label">Address</label>
                                    <input
                                        type="text"
                                        class="form-control"
                                        placeholder="123 Main, St"
                                    />
                                </div>
                                <div class="text-center">
                                    <button
                                        type="submit"
                                        class="btn btn-primary me-1"
                                    >
                                        Submit
                                    </button>
                                    <button
                                        type="reset"
                                        class="btn btn-secondary"
                                    >
                                        Reset
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
                                No Labels / Placeholders as labels Form
                            </h5>
                            <form class="row g-3">
                                <div class="col-12">
                                    <input
                                        type="text"
                                        class="form-control"
                                        placeholder="Your Name"
                                    />
                                </div>
                                <div class="col-md-6">
                                    <input
                                        type="email"
                                        class="form-control"
                                        placeholder="Email"
                                    />
                                </div>
                                <div class="col-md-6">
                                    <input
                                        type="password"
                                        class="form-control"
                                        placeholder="Password"
                                    />
                                </div>
                                <div class="col-12">
                                    <input
                                        type="text"
                                        class="form-control"
                                        placeholder="Address"
                                    />
                                </div>
                                <div class="col-md-5">
                                    <input
                                        type="text"
                                        class="form-control"
                                        placeholder="City"
                                    />
                                </div>
                                <div class="col-md-5">
                                    <select class="form-select">
                                        <option>Choose</option>
                                        <option>...</option>
                                    </select>
                                </div>
                                <div class="col-md-2">
                                    <input
                                        type="number"
                                        class="form-control"
                                        placeholder="Zip"
                                    />
                                </div>
                                <div class="text-center">
                                    <button
                                        type="submit"
                                        class="btn btn-primary me-1"
                                    >
                                        Submit
                                    </button>
                                    <button
                                        type="reset"
                                        class="btn btn-secondary"
                                    >
                                        Reset
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
                                Floating labels Form
                            </h5>
                            <form class="row g-3">
                                <div class="col-12">
                                    <div class="form-floating">
                                        <input
                                            type="text"
                                            placeholder="Your Name"
                                            class="form-control"
                                        />
                                        <label>Your Name</label>
                                    </div>
                                </div>
                                <div class="col-md-6 col-12">
                                    <div class="form-floating">
                                        <input
                                            type="email"
                                            placeholder="Your Email"
                                            class="form-control"
                                        />
                                        <label>Your Email</label>
                                    </div>
                                </div>
                                <div class="col-md-6 col-12">
                                    <div class="form-floating">
                                        <input
                                            type="password"
                                            placeholder="Your Password"
                                            class="form-control"
                                        />
                                        <label>Your Password</label>
                                    </div>
                                </div>
                                <div class="col-12">
                                    <div class="form-floating">
                                        <textarea
                                            type="text"
                                            placeholder="Your Address"
                                            class="form-control"
                                            style="height: 100px"
                                        />
                                        <label>Your Address</label>
                                    </div>
                                </div>
                                <div class="col-md-5 col-12">
                                    <div class="form-floating">
                                        <input
                                            type="text"
                                            placeholder="City"
                                            class="form-control"
                                        />
                                        <label>City</label>
                                    </div>
                                </div>
                                <div class="col-md-5 col-12">
                                    <div class="form-floating">
                                        <select class="form-select">
                                            <option>New York</option>
                                            <option>Damascus</option>
                                        </select>
                                        <label>State</label>
                                    </div>
                                </div>
                                <div class="col-md-2 col-12">
                                    <div class="form-floating">
                                        <input
                                            type="number"
                                            placeholder="Zip"
                                            class="form-control"
                                        />
                                        <label>Zip</label>
                                    </div>
                                </div>
                                <div class="text-center">
                                    <button
                                        type="submit"
                                        class="btn btn-primary me-1"
                                    >
                                        Submit
                                    </button>
                                    <button
                                        type="reset"
                                        class="btn btn-secondary"
                                    >
                                        Reset
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
    name: "FormLayoutView",
};
</script>
