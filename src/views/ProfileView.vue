<template>
    <section class="View-section profile-section overflow-hidden p-3 pt-0">
        <div class="header-section mb-3">
            <h1 class="m-0">Profile</h1>
            <div class="path">
                <router-link class="links active me-1" to="./DashboardView.vue">
                    Home / Pages
                </router-link>
                / Profile
            </div>
        </div>
        <div class="wrapper row mb-3 g-3">
            <div class="col-lg-4 col-12">
                <div class="card">
                    <div class="card-body text-center pt-4 pb-4">
                        <img
                            src="../assets/Images/profile-img.jpg"
                            alt="avatar"
                            class="rounded-circle"
                        />
                        <h4 class="mt-2">Kevin Anderson</h4>
                        <h6 class="fw-normal">Web Designer</h6>
                        <ul
                            class="links d-flex p-0 justify-content-center gap-3 fs-5 mt-3"
                        >
                            <font-awesome-icon
                                class="links-social"
                                :icon="['fab', 'twitter']"
                            />
                            <font-awesome-icon
                                class="links-social"
                                :icon="['fab', 'facebook']"
                            />
                            <font-awesome-icon
                                class="links-social"
                                :icon="['fab', 'instagram']"
                            />
                            <font-awesome-icon
                                class="links-social"
                                :icon="['fab', 'linkedin']"
                            />
                        </ul>
                    </div>
                </div>
            </div>
            <div class="col-lg-8 col-12">
                <div class="card">
                    <div class="card-body">
                        <ul
                            class="nav nav-tabs nav-tabs-bordered profile-sections"
                        >
                            <li class="nav-item">
                                <button
                                    type="button"
                                    class="nav-link active"
                                    target="overview"
                                    @click="clickTapsButton"
                                >
                                    Overview
                                </button>
                            </li>
                            <li class="nav-item">
                                <button
                                    type="button"
                                    class="nav-link"
                                    target="edit"
                                    @click="clickTapsButton"
                                >
                                    Edit Profile
                                </button>
                            </li>
                            <li class="nav-item">
                                <button
                                    type="button"
                                    class="nav-link"
                                    target="settings"
                                    @click="clickTapsButton"
                                >
                                    Settings
                                </button>
                            </li>
                            <li class="nav-item">
                                <button
                                    type="button"
                                    class="nav-link"
                                    target="password"
                                    @click="clickTapsButton"
                                >
                                    Change Password
                                </button>
                            </li>
                        </ul>
                        <div class="tabs-content pt-2">
                            <div
                                target="overview"
                                class="div-taps mt-3 display show"
                            >
                                <h5>About</h5>
                                <p class="fst-italic text-black-50">
                                    Sunt est soluta temporibus accusantium neque
                                    nam maiores cumque temporibus. Tempora
                                    libero non est unde veniam est qui dolor. Ut
                                    sunt iure rerum quae quisquam autem eveniet
                                    perspiciatis odit. Fuga sequi sed ea saepe
                                    at unde.
                                </p>
                                <h5 class="mt-4 mb-4">Profile Details</h5>
                                <div class="row mb-3">
                                    <p class="col-lg-4 text-ask m-0">
                                        Full Name
                                    </p>
                                    <p class="col-lg-8 text-val m-0">
                                        Kevin Anderson
                                    </p>
                                </div>
                                <div class="row mb-3">
                                    <p class="col-lg-4 text-ask m-0">
                                        Full Company
                                    </p>
                                    <p class="col-lg-8 text-val m-0">
                                        Lueilwitz, Wisoky and Leuschke
                                    </p>
                                </div>
                                <div class="row mb-3">
                                    <p class="col-lg-4 text-ask m-0">Job</p>
                                    <p class="col-lg-8 text-val m-0">
                                        Web Designer
                                    </p>
                                </div>
                                <div class="row mb-3">
                                    <p class="col-lg-4 text-ask m-0">Country</p>
                                    <p class="col-lg-8 text-val m-0">USA</p>
                                </div>
                                <div class="row mb-3">
                                    <p class="col-lg-4 text-ask m-0">Address</p>
                                    <p class="col-lg-8 text-val m-0">
                                        A108 Adam Street, New York, NY 535022
                                    </p>
                                </div>
                                <div class="row mb-3">
                                    <p class="col-lg-4 text-ask m-0">Phone</p>
                                    <p class="col-lg-8 text-val m-0">
                                        (436) 486-3538 x29071
                                    </p>
                                </div>
                                <div class="row mb-3">
                                    <p class="col-lg-4 text-ask m-0">Email</p>
                                    <p class="col-lg-8 text-val m-0">
                                        k.anderson@example.com
                                    </p>
                                </div>
                            </div>
                            <div target="edit" class="div-taps mt-3">
                                <form>
                                    <div class="row align-items-center mb-3">
                                        <p class="col-lg-4 text-ask m-0">
                                            Profile Image
                                        </p>
                                        <div class="col-lg-8">
                                            <img
                                                src="../assets/Images/profile-img.jpg"
                                                alt="avatar"
                                                class="mb-1"
                                            />
                                            <br />
                                            <button
                                                class="btn btn-primary btn-sm me-1"
                                            >
                                                <font-awesome-icon
                                                    :icon="['fas', 'upload']"
                                                />
                                            </button>
                                            <button
                                                class="btn btn-danger btn-sm"
                                            >
                                                <font-awesome-icon
                                                    :icon="['fas', 'trash']"
                                                />
                                            </button>
                                        </div>
                                    </div>
                                    <div class="row align-items-center mb-3">
                                        <p class="col-lg-4 text-ask m-0">
                                            Full Name
                                        </p>
                                        <div class="col-lg-8">
                                            <input
                                                type="text"
                                                class="form-control"
                                                value="Kevin Anderson"
                                            />
                                        </div>
                                    </div>
                                    <div class="row mb-3">
                                        <p class="col-lg-4 text-ask m-0">
                                            About
                                        </p>
                                        <div class="col-lg-8">
                                            <textarea
                                                type="text"
                                                class="form-control"
                                                style="height: 135px"
                                            >
We Are Developers
                                        </textarea
                                            >
                                        </div>
                                    </div>
                                    <div class="row align-items-center mb-3">
                                        <p class="col-lg-4 text-ask m-0">
                                            Company
                                        </p>
                                        <div class="col-lg-8">
                                            <input
                                                type="text"
                                                class="form-control"
                                                value="Lueilwitz, Wisoky and Leuschke"
                                            />
                                        </div>
                                    </div>
                                    <div class="row align-items-center mb-3">
                                        <p class="col-lg-4 text-ask m-0">Job</p>
                                        <div class="col-lg-8">
                                            <input
                                                type="text"
                                                class="form-control"
                                                value="Web Designer"
                                            />
                                        </div>
                                    </div>
                                    <div class="row align-items-center mb-3">
                                        <p class="col-lg-4 text-ask m-0">
                                            Country
                                        </p>
                                        <div class="col-lg-8">
                                            <input
                                                type="text"
                                                class="form-control"
                                                value="USA"
                                            />
                                        </div>
                                    </div>
                                    <div class="row align-items-center mb-3">
                                        <p class="col-lg-4 text-ask m-0">
                                            Address
                                        </p>
                                        <div class="col-lg-8">
                                            <input
                                                type="text"
                                                class="form-control"
                                                value="(436) 486-3538 x29071"
                                            />
                                        </div>
                                    </div>
                                    <div class="row align-items-center mb-3">
                                        <p class="col-lg-4 text-ask m-0">
                                            Email
                                        </p>
                                        <div class="col-lg-8">
                                            <input
                                                type="email"
                                                class="form-control"
                                                value="k.anderson@example.com"
                                            />
                                        </div>
                                    </div>
                                    <div class="row align-items-center mb-3">
                                        <p class="col-lg-4 text-ask m-0">
                                            Twitter Profile
                                        </p>
                                        <div class="col-lg-8">
                                            <input
                                                type="text"
                                                class="form-control"
                                                value="https://twitter.com/#"
                                            />
                                        </div>
                                    </div>
                                    <div class="row align-items-center mb-3">
                                        <p class="col-lg-4 text-ask m-0">
                                            Facebook Profile
                                        </p>
                                        <div class="col-lg-8">
                                            <input
                                                type="text"
                                                class="form-control"
                                                value="https://facebook.com/#"
                                            />
                                        </div>
                                    </div>
                                    <div class="row align-items-center mb-3">
                                        <p class="col-lg-4 text-ask m-0">
                                            Instagram Profile
                                        </p>
                                        <div class="col-lg-8">
                                            <input
                                                type="text"
                                                class="form-control"
                                                value="https://instagram.com/#"
                                            />
                                        </div>
                                    </div>
                                    <div class="row align-items-center mb-3">
                                        <p class="col-lg-4 text-ask m-0">
                                            Linkedin Profile
                                        </p>
                                        <div class="col-lg-8">
                                            <input
                                                type="text"
                                                class="form-control"
                                                value="https://linkedin.com/#"
                                            />
                                        </div>
                                    </div>
                                    <div class="text-center mt-3">
                                        <button
                                            type="submit"
                                            class="btn btn-primary"
                                        >
                                            Save Changes
                                        </button>
                                    </div>
                                </form>
                            </div>
                            <div target="settings" class="div-taps mt-3">
                                <form>
                                    <div class="row mt-3">
                                        <p class="text-ask col-lg-4 col-12">
                                            Email Notifications
                                        </p>
                                        <div class="col-lg-8 col-12">
                                            <div class="form-check">
                                                <input
                                                    type="checkbox"
                                                    class="form-check-input"
                                                    checked
                                                />
                                                <label class="form-check-label"
                                                    >Changes made to your
                                                    account</label
                                                >
                                            </div>
                                            <div class="form-check">
                                                <input
                                                    type="checkbox"
                                                    class="form-check-input"
                                                    checked
                                                />
                                                <label class="form-check-label"
                                                    >Information on new products
                                                    and services</label
                                                >
                                            </div>
                                            <div class="form-check">
                                                <input
                                                    type="checkbox"
                                                    class="form-check-input"
                                                />
                                                <label class="form-check-label"
                                                    >Marketing and promo
                                                    offers</label
                                                >
                                            </div>
                                            <div class="form-check disabled">
                                                <input
                                                    type="checkbox"
                                                    class="form-check-input"
                                                    checked
                                                    disabled
                                                />
                                                <label class="form-check-label"
                                                    >Changes made to your
                                                    account</label
                                                >
                                            </div>
                                            <div class="mt-2">
                                                <button
                                                    type="submit"
                                                    class="btn btn-primary"
                                                >
                                                    Save Changes
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </form>
                            </div>
                            <div target="password" class="div-taps mt-3">
                                <form>
                                    <div class="row mb-3">
                                        <label class="col-form-label col-lg-3"
                                            >Current Password</label
                                        >
                                        <div class="col-lg-9">
                                            <input
                                                type="password"
                                                class="form-control"
                                            />
                                        </div>
                                    </div>
                                    <div class="row mb-3">
                                        <label class="col-form-label col-lg-3"
                                            >New Password</label
                                        >
                                        <div class="col-lg-9">
                                            <input
                                                type="password"
                                                class="form-control"
                                            />
                                        </div>
                                    </div>
                                    <div class="row mb-3">
                                        <label class="col-form-label col-lg-3"
                                            >Re-enter New Password</label
                                        >
                                        <div class="col-lg-9">
                                            <input
                                                type="password"
                                                class="form-control"
                                            />
                                        </div>
                                    </div>
                                    <div class="mt-2 text-center">
                                        <button
                                            type="submit"
                                            class="btn btn-primary"
                                        >
                                            Change Password
                                        </button>
                                    </div>
                                </form>
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
    name: "ProfileView",
    methods: {
        clickTapsButton(ev) {
            if (ev.target.classList.contains("active")) return;

            const target = ev.target.getAttribute("target");

            document
                .querySelectorAll(`.View-section .card .nav-item > button`)
                .forEach((button) => {
                    button.classList.remove("active");
                });
            ev.target.classList.add("active");

            const lastElement = document.querySelector(
                `.View-section .card .div-taps.display`
            );

            lastElement.classList.remove("show");

            setTimeout(() => {
                lastElement.classList.remove("display");

                const targetElement = document.querySelector(
                    `.View-section .card .div-taps[target='${target}']`
                );

                targetElement.classList.add("display");
                setTimeout(() => {
                    targetElement.classList.add("show");
                }, 300);
            }, 300);
        },
    },
};
</script>
