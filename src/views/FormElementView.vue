<template>
    <section class="View-section overflow-hidden p-3 pt-0">
        <div class="header-section mb-3">
            <h1 class="m-0">Form Elements</h1>
            <div class="path">
                <router-link class="links active me-1" to="./DashboardView.vue">
                    Home / Forms
                </router-link>
                / Elements
            </div>
        </div>
        <div class="wrapper row align-items-baseline mb-3">
            <div class="col-lg-6 col-12 restart pe-lg-2">
                <div class="card">
                    <div class="card-body">
                        <h5 class="card-title mb-3">General Form Elements</h5>
                        <form>
                            <div class="row mb-3">
                                <label class="col-sm-2 col-form-label"
                                    >Text</label
                                >
                                <div class="col-sm-10">
                                    <input type="text" class="form-control" />
                                </div>
                            </div>
                            <div class="row mb-3">
                                <label class="col-sm-2 col-form-label"
                                    >Email</label
                                >
                                <div class="col-sm-10">
                                    <input type="email" class="form-control" />
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
                            <div class="row mb-3">
                                <label class="col-sm-2 col-form-label"
                                    >Number</label
                                >
                                <div class="col-sm-10">
                                    <input type="number" class="form-control" />
                                </div>
                            </div>
                            <div class="row mb-3">
                                <label class="col-sm-2 col-form-label"
                                    >Upload File</label
                                >
                                <div class="col-sm-10">
                                    <input type="file" class="form-control" />
                                </div>
                            </div>
                            <div class="row mb-3">
                                <label class="col-sm-2 col-form-label"
                                    >Date</label
                                >
                                <div class="col-sm-10">
                                    <input type="date" class="form-control" />
                                </div>
                            </div>
                            <div class="row mb-3">
                                <label class="col-sm-2 col-form-label"
                                    >Time</label
                                >
                                <div class="col-sm-10">
                                    <input type="time" class="form-control" />
                                </div>
                            </div>
                            <div class="row mb-3">
                                <label class="col-sm-2 col-form-label"
                                    >Color Picker</label
                                >
                                <div class="col-sm-10">
                                    <input
                                        type="color"
                                        class="form-control form-control-color"
                                    />
                                </div>
                            </div>
                            <div class="row mb-3">
                                <label class="col-sm-2 col-form-label"
                                    >Text Area</label
                                >
                                <div class="col-sm-10">
                                    <textarea
                                        type="time"
                                        class="form-control"
                                    />
                                </div>
                            </div>
                            <div class="row mb-3">
                                <label class="col-sm-2 col-form-label"
                                    >Time</label
                                >
                                <div class="col-sm-10">
                                    <input type="time" class="form-control" />
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
                                            name="rad"
                                        />
                                        <label class="form-check-label">
                                            First Radio
                                        </label>
                                    </div>
                                    <div class="form-check">
                                        <input
                                            type="radio"
                                            class="form-check-input"
                                            name="rad"
                                        />
                                        <label class="form-check-label">
                                            Second Radio
                                        </label>
                                    </div>
                                    <div class="form-check">
                                        <input
                                            type="radio"
                                            class="form-check-input"
                                            name="rad"
                                        />
                                        <label class="form-check-label">
                                            Third Radio
                                        </label>
                                    </div>
                                </div>
                            </fieldset>
                            <div class="row mb-3">
                                <legend class="col-form-label col-sm-2 pt-0">
                                    Checkboxes
                                </legend>
                                <div class="col-sm-10">
                                    <div class="form-check">
                                        <input
                                            type="checkbox"
                                            class="form-check-input"
                                        />
                                        <label class="form-check-label"
                                            >Example Checkbox</label
                                        >
                                    </div>
                                    <div class="form-check">
                                        <input
                                            type="checkbox"
                                            class="form-check-input"
                                        />
                                        <label class="form-check-label"
                                            >Example Checkbox 2</label
                                        >
                                    </div>
                                </div>
                            </div>
                            <div class="row mb-3">
                                <label class="col-sm-2 col-form-label"
                                    >Disabled</label
                                >
                                <div class="col-sm-10">
                                    <input
                                        type="text"
                                        class="form-control"
                                        disabled
                                        value="Read Only/ Disabled"
                                    />
                                </div>
                            </div>
                            <div class="row mb-3">
                                <label class="col-sm-2 col-form-label"
                                    >Select</label
                                >
                                <div class="col-sm-10">
                                    <select class="form-select">
                                        <option selected>
                                            Open This Select Menu
                                        </option>
                                        <option value="1">One</option>
                                        <option value="2">Two</option>
                                        <option value="3">Three</option>
                                    </select>
                                </div>
                            </div>
                            <div class="row mb-3">
                                <label class="col-sm-2 col-form-label"
                                    >Multi Select</label
                                >
                                <div class="col-sm-10">
                                    <select class="form-select" multiple>
                                        <option selected>
                                            Open This Select Menu
                                        </option>
                                        <option value="1">One</option>
                                        <option value="2">Two</option>
                                        <option value="3">Three</option>
                                    </select>
                                </div>
                            </div>
                            <div class="row mb-3">
                                <div class="col-sm-2 col-form-label">
                                    Submit Button
                                </div>
                                <div class="col-sm-10">
                                    <button class="btn btn-primary">
                                        Submit Form
                                    </button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
            <div class="col-lg-6 col-12 restart ps-lg-2">
                <div class="card">
                    <div class="card-body">
                        <h5 class="card-title mb-3">Advanced Form Elements</h5>
                        <form>
                            <div class="row mb-5">
                                <label class="col-sm-2 col-form-label">
                                    Switches
                                </label>
                                <div class="col-sm-10">
                                    <div class="form-check form-switch">
                                        <input
                                            type="checkbox"
                                            class="form-check-input"
                                        />
                                        <label class="form-check-label">
                                            Default switch checkbox input
                                        </label>
                                    </div>
                                    <div class="form-check form-switch">
                                        <input
                                            type="checkbox"
                                            checked
                                            class="form-check-input"
                                        />
                                        <label class="form-check-label">
                                            Checked switch checkbox input
                                        </label>
                                    </div>
                                    <div class="form-check form-switch">
                                        <input
                                            disabled
                                            type="checkbox"
                                            class="form-check-input"
                                        />
                                        <label class="form-check-label">
                                            Disabled switch checkbox input
                                        </label>
                                    </div>
                                    <div class="form-check form-switch">
                                        <input
                                            type="checkbox"
                                            disabled
                                            checked
                                            class="form-check-input"
                                        />
                                        <label class="form-check-label">
                                            Disabled Checked switch checkbox
                                            input
                                        </label>
                                    </div>
                                </div>
                            </div>
                            <div class="row mb-5">
                                <label for="" class="col-sm-2 col-form-label"
                                    >Ranges</label
                                >
                                <div class="col-sm-10">
                                    <div>
                                        <label class="form-label"
                                            >Example Range</label
                                        >
                                        <input
                                            type="range"
                                            class="form-range"
                                        />
                                    </div>
                                    <div>
                                        <label class="form-label"
                                            >Example Range</label
                                        >
                                        <input
                                            disabled
                                            type="range"
                                            class="form-range"
                                        />
                                    </div>
                                    <div>
                                        <label class="form-label"
                                            >Example Range</label
                                        >
                                        <input
                                            min="0"
                                            max="100"
                                            step="10"
                                            type="range"
                                            class="form-range"
                                        />
                                    </div>
                                </div>
                            </div>
                            <div class="row mb-5">
                                <label class="col-sm-2 col-form-label">
                                    Floating Labels
                                </label>
                                <div class="col-sm-10">
                                    <div class="form-floating mb-3">
                                        <input
                                            type="email"
                                            class="form-control"
                                            id="email-fl"
                                        />
                                        <label for="email-fl"
                                            >Email Address</label
                                        >
                                    </div>
                                    <div class="form-floating mb-3">
                                        <input
                                            type="password"
                                            class="form-control"
                                        />
                                        <label>Password</label>
                                    </div>
                                    <div class="form-floating mb-3">
                                        <textarea
                                            class="form-control"
                                            style="height: 100px"
                                        />
                                        <label>Comment</label>
                                    </div>
                                    <div class="form-floating">
                                        <select class="form-select">
                                            <option selected>
                                                Open This Select Menu
                                            </option>
                                            <option>One</option>
                                            <option>Two</option>
                                            <option>Three</option>
                                        </select>
                                        <label>Works With Select</label>
                                    </div>
                                </div>
                            </div>
                            <div class="row mb-5">
                                <label class="col-sm-2 col-form-label">
                                    Input Groups
                                </label>
                                <div class="col-sm-10">
                                    <div class="input-group mb-3">
                                        <span class="input-group-text">@</span>
                                        <input
                                            type="text"
                                            class="form-control"
                                        />
                                    </div>
                                    <div class="input-group mb-3">
                                        <input
                                            placeholder="Recipient's username"
                                            type="email"
                                            class="form-control"
                                        />
                                        <span class="input-group-text"
                                            >@example.com</span
                                        >
                                    </div>
                                    <label class="form-label"
                                        >Your Vanity URL</label
                                    >
                                    <div class="input-group mb-3">
                                        <span class="input-group-text"
                                            >https://example.com/users/</span
                                        >
                                        <input
                                            type="text"
                                            class="form-control"
                                        />
                                    </div>
                                    <div class="input-group mb-3">
                                        <span class="input-group-text">$</span>
                                        <input
                                            type="text"
                                            class="form-control"
                                        />
                                        <span class="input-group-text"
                                            >.00</span
                                        >
                                    </div>
                                    <div class="input-group mb-3">
                                        <input
                                            type="text"
                                            class="form-control"
                                            placeholder="Username"
                                        />
                                        <span class="input-group-text">@</span>
                                        <input
                                            type="text"
                                            class="form-control"
                                            placeholder="Server"
                                        />
                                    </div>
                                    <div class="input-group">
                                        <span class="input-group-text"
                                            >With TextArea</span
                                        >
                                        <textarea
                                            class="form-control"
                                        ></textarea>
                                    </div>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
export default {
    name: "FormElementView",
};
</script>
