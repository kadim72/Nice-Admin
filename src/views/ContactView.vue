<template>
    <section class="View-section overflow-hidden p-3 pt-0">
        <div class="header-section mb-3">
            <h1 class="m-0">Contact</h1>
            <div class="path">
                <router-link class="links active me-1" to="./DashboardView.vue">
                    Home / Pages
                </router-link>
                / Contact
            </div>
        </div>
        <div class="wrapper row align-items-start mb-3 g-1">
            <div class="part row col-lg-3 col-md-6 col-12 restart pe-md-2">
                <div class="col-12 restart mb-3">
                    <div class="card">
                        <div class="card-body">
                            <font-awesome-icon
                                class="font-awesome"
                                :icon="['fas', 'location-dot']"
                            />
                            <h5 class="card-title mb-3">Address</h5>
                            <p>
                                A108 Adam Street, <br />
                                New York, NY 535022
                            </p>
                        </div>
                    </div>
                </div>
                <div class="col-12 restart mb-3">
                    <div class="card">
                        <div class="card-body">
                            <font-awesome-icon
                                class="font-awesome"
                                :icon="['fas', 'envelope']"
                            />
                            <h5 class="card-title mb-3">Email Us</h5>
                            <p>
                                info@example.com <br />
                                contact@example.com
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <div class="part row col-lg-3 col-md-6 col-12 restart pe-md-2">
                <div class="col-12 restart mb-3">
                    <div class="card">
                        <div class="card-body">
                            <font-awesome-icon
                                class="font-awesome"
                                :icon="['fas', 'phone']"
                            />
                            <h5 class="card-title mb-3">Call Us</h5>
                            <p>
                                +1 5589 55488 55 <br />
                                +1 6678 254445 41
                            </p>
                        </div>
                    </div>
                </div>
                <div class="col-12 restart mb-3">
                    <div class="card">
                        <div class="card-body">
                            <font-awesome-icon
                                class="font-awesome"
                                :icon="['fas', 'clock']"
                            />
                            <h5 class="card-title mb-3">Open Hours</h5>
                            <p>
                                Monday - Friday <br />
                                9:00AM - 05:00PM
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <div class="part row col-lg-6 col-12 restart">
                <div class="col-12 restart mb-3">
                    <div class="card">
                        <div class="card-body">
                            <form class="row g-4">
                                <div class="col-lg-6 col-12">
                                    <input
                                        type="text"
                                        placeholder="Your Name"
                                        class="form-control"
                                    />
                                </div>
                                <div class="col-lg-6 col-12">
                                    <input
                                        type="email"
                                        placeholder="Your email"
                                        class="form-control"
                                    />
                                </div>
                                <div class="col-12">
                                    <input
                                        type="text"
                                        placeholder="Subject"
                                        class="form-control"
                                    />
                                </div>
                                <div class="col-12">
                                    <textarea
                                        placeholder="Message"
                                        class="form-control"
                                        style="height: 150px"
                                    />
                                </div>
                                <div class="text-center">
                                    <button
                                        type="submit"
                                        class="btn btn-primary"
                                    >
                                        Send Message
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
    name: "ContactView",
};
</script>
<style scoped>
input,
textarea {
    padding: 10px 18px;
}
</style>
