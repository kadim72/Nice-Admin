<template>
    <section class="View-section p-3 pt-0 overflow-hidden">
        <div class="header-section mb-3">
            <h1 class="m-0">Alert</h1>
            <div class="path">
                <router-link class="links active me-1" to="./DashboardView.vue">
                    Home / Components
                </router-link>
                / Alert
            </div>
        </div>
        <div class="wrapper row align-items-baseline mb-3">
            <div class="part col-lg-6 col-12 row g-3 restart">
                <div class="col-12">
                    <div class="card">
                        <div class="card-body">
                            <h5 class="card-title mb-3">Default</h5>
                            <div
                                class="box alert alert-primary alert-dismissible fade show"
                            >
                                A simple primary alert—check it out!
                                <button
                                    type="button"
                                    class="btn-close"
                                    @click="deleteParent"
                                ></button>
                            </div>
                            <div
                                class="box alert alert-secondary alert-dismissible fade show"
                            >
                                A simple secondary alert—check it out!
                                <button
                                    type="button"
                                    class="btn-close"
                                    @click="deleteParent"
                                ></button>
                            </div>
                            <div
                                class="box alert alert-success alert-dismissible fade show"
                            >
                                A simple success alert—check it out!
                                <button
                                    type="button"
                                    class="btn-close"
                                    @click="deleteParent"
                                ></button>
                            </div>
                            <div
                                class="box alert alert-danger alert-dismissible fade show"
                            >
                                A simple danger alert—check it out!
                                <button
                                    type="button"
                                    class="btn-close"
                                    @click="deleteParent"
                                ></button>
                            </div>
                            <div
                                class="box alert alert-warning alert-dismissible fade show"
                            >
                                A simple warning alert—check it out!
                                <button
                                    type="button"
                                    class="btn-close"
                                    @click="deleteParent"
                                ></button>
                            </div>
                            <div
                                class="box alert alert-info border-info alert-dismissible fade show"
                            >
                                A simple info alert—check it out!
                                <button
                                    type="button"
                                    class="btn-close"
                                    @click="deleteParent"
                                ></button>
                            </div>
                            <div
                                class="box alert alert-light border-light alert-dismissible fade show"
                            >
                                A simple light alert—check it out!
                                <button
                                    type="button"
                                    class="btn-close"
                                    @click="deleteParent"
                                ></button>
                            </div>
                            <div
                                class="box alert alert-dark alert-dismissible fade show"
                            >
                                A simple dark alert—check it out!
                                <button
                                    type="button"
                                    class="btn-close"
                                    @click="deleteParent"
                                ></button>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-12">
                    <div class="card">
                        <div class="card-body">
                            <h5 class="card-title mb-3">Outlined</h5>
                            <div
                                class="box alert border-primary alert-dismissible fade show"
                            >
                                A simple primary alert icon-check it out!
                                <button
                                    type="button"
                                    class="btn-close"
                                    @click="deleteParent"
                                ></button>
                            </div>
                            <div
                                class="box alert border-secondary alert-dismissible fade show"
                            >
                                A simple secondary alert icon-check it out!
                                <button
                                    type="button"
                                    class="btn-close"
                                    @click="deleteParent"
                                ></button>
                            </div>
                            <div
                                class="box alert border-success alert-dismissible fade show"
                            >
                                A simple success alert icon-check it out!
                                <button
                                    type="button"
                                    class="btn-close"
                                    @click="deleteParent"
                                ></button>
                            </div>
                            <div
                                class="box alert border-danger alert-dismissible fade show"
                            >
                                A simple danger alert icon-check it out!
                                <button
                                    type="button"
                                    class="btn-close"
                                    @click="deleteParent"
                                ></button>
                            </div>
                            <div
                                class="box alert border-warning alert-dismissible fade show"
                            >
                                A simple warning alert icon-check it out!
                                <button
                                    type="button"
                                    class="btn-close"
                                    @click="deleteParent"
                                ></button>
                            </div>
                            <div
                                class="box alert border-info border-info alert-dismissible fade show"
                            >
                                A simple info alert icon-check it out!
                                <button
                                    type="button"
                                    class="btn-close"
                                    @click="deleteParent"
                                ></button>
                            </div>
                            <div
                                class="box alert border-light border-light alert-dismissible fade show"
                            >
                                A simple light alert icon-check it out!
                                <button
                                    type="button"
                                    class="btn-close"
                                    @click="deleteParent"
                                ></button>
                            </div>
                            <div
                                class="box alert border-dark alert-dismissible fade show"
                            >
                                A simple dark alert icon-check it out!
                                <button
                                    type="button"
                                    class="btn-close"
                                    @click="deleteParent"
                                ></button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="part col-lg-6 col-12 row g-3 restart">
                <div class="col-12">
                    <div class="card">
                        <div class="card-body">
                            <h5 class="card-title mb-3">Default Solid Color</h5>
                            <div
                                class="box alert alert-primary bg-primary alert-dismissible border-0 text-light fade show"
                            >
                                A simple primary alert with solid color—check it
                                out!
                                <button
                                    type="button"
                                    class="btn-close btn-close-white"
                                    @click="deleteParent"
                                ></button>
                            </div>
                            <div
                                class="box alert alert-secondary bg-secondary alert-dismissible border-0 text-light fade show"
                            >
                                A simple secondary alert with solid color—check
                                it out!
                                <button
                                    type="button"
                                    class="btn-close btn-close-white"
                                    @click="deleteParent"
                                ></button>
                            </div>
                            <div
                                class="box alert alert-success bg-success alert-dismissible border-0 text-light fade show"
                            >
                                A simple success alert with solid color—check it
                                out!
                                <button
                                    type="button"
                                    class="btn-close btn-close-white"
                                    @click="deleteParent"
                                ></button>
                            </div>
                            <div
                                class="box alert alert-danger bg-danger alert-dismissible border-0 text-light fade show"
                            >
                                A simple danger alert with solid color—check it
                                out!
                                <button
                                    type="button"
                                    class="btn-close btn-close-white"
                                    @click="deleteParent"
                                ></button>
                            </div>
                            <div
                                class="box alert alert-warning bg-warning alert-dismissible border-0 fade show"
                            >
                                A simple warning alert with solid color—check it
                                out!
                                <button
                                    type="button"
                                    class="btn-close"
                                    @click="deleteParent"
                                ></button>
                            </div>
                            <div
                                class="box alert alert-info bg-info alert-dismissible border-0 fade show"
                            >
                                A simple info alert with solid color—check it
                                out!
                                <button
                                    type="button"
                                    class="btn-close"
                                    @click="deleteParent"
                                ></button>
                            </div>
                            <div
                                class="box alert alert-light bg-light alert-dismissible border-0 fade show"
                            >
                                A simple light alert with solid color—check it
                                out!
                                <button
                                    type="button"
                                    class="btn-close"
                                    @click="deleteParent"
                                ></button>
                            </div>
                            <div
                                class="box alert alert-dark bg-dark alert-dismissible border-0 text-light fade show"
                            >
                                A simple dark alert with solid color—check it
                                out!
                                <button
                                    type="button"
                                    class="btn-close btn-close-white"
                                    @click="deleteParent"
                                ></button>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-12">
                    <div class="card">
                        <div class="card-body">
                            <h5 class="card-title mb-3">
                                With Heading & Separator
                            </h5>
                            <div
                                class="box alert alert-primary border-primary alert-dismissible fade show"
                            >
                                <h4 class="alert-header">Primary Heading</h4>
                                <button
                                    type="button"
                                    class="btn-close"
                                    @click="deleteParent"
                                ></button>
                                <p>
                                    Et suscipit deserunt earum itaque
                                    dignissimos recusandae dolorem qui.
                                    Molestiae rerum perferendis laborum.
                                    Occaecati illo at laboriosam rem molestiae
                                    sint.
                                </p>
                                <hr />
                                <p class="m-0">
                                    Temporibus quis et qui aspernatur laboriosam
                                    sit eveniet qui sunt.
                                </p>
                            </div>
                            <div
                                class="box alert alert-secondary border-secondary alert-dismissible fade show"
                            >
                                <h4 class="alert-header">Secondary Heading</h4>
                                <button
                                    type="button"
                                    class="btn-close"
                                    @click="deleteParent"
                                ></button>
                                <p>
                                    Et suscipit deserunt earum itaque
                                    dignissimos recusandae dolorem qui.
                                    Molestiae rerum perferendis laborum.
                                    Occaecati illo at laboriosam rem molestiae
                                    sint.
                                </p>
                                <hr />
                                <p class="m-0">
                                    Temporibus quis et qui aspernatur laboriosam
                                    sit eveniet qui sunt.
                                </p>
                            </div>
                            <div
                                class="box alert alert-success border-success alert-dismissible fade show"
                            >
                                <h4 class="alert-header">Success Heading</h4>
                                <button
                                    type="button"
                                    class="btn-close"
                                    @click="deleteParent"
                                ></button>
                                <p>
                                    Et suscipit deserunt earum itaque
                                    dignissimos recusandae dolorem qui.
                                    Molestiae rerum perferendis laborum.
                                    Occaecati illo at laboriosam rem molestiae
                                    sint.
                                </p>
                                <hr />
                                <p class="m-0">
                                    Temporibus quis et qui aspernatur laboriosam
                                    sit eveniet qui sunt.
                                </p>
                            </div>
                            <div
                                class="box alert alert-danger border-danger alert-dismissible fade show"
                            >
                                <h4 class="alert-header">Danger Heading</h4>
                                <button
                                    type="button"
                                    class="btn-close"
                                    @click="deleteParent"
                                ></button>
                                <p>
                                    Et suscipit deserunt earum itaque
                                    dignissimos recusandae dolorem qui.
                                    Molestiae rerum perferendis laborum.
                                    Occaecati illo at laboriosam rem molestiae
                                    sint.
                                </p>
                                <hr />
                                <p class="m-0">
                                    Temporibus quis et qui aspernatur laboriosam
                                    sit eveniet qui sunt.
                                </p>
                            </div>
                            <div
                                class="box alert alert-warning border-warning alert-dismissible fade show"
                            >
                                <h4 class="alert-header">Warning Heading</h4>
                                <button
                                    type="button"
                                    class="btn-close"
                                    @click="deleteParent"
                                ></button>
                                <p>
                                    Et suscipit deserunt earum itaque
                                    dignissimos recusandae dolorem qui.
                                    Molestiae rerum perferendis laborum.
                                    Occaecati illo at laboriosam rem molestiae
                                    sint.
                                </p>
                                <hr />
                                <p class="m-0">
                                    Temporibus quis et qui aspernatur laboriosam
                                    sit eveniet qui sunt.
                                </p>
                            </div>
                            <div
                                class="box alert alert-info border-info border-info alert-dismissible fade show"
                            >
                                <h4 class="alert-header">Info Heading</h4>
                                <button
                                    type="button"
                                    class="btn-close"
                                    @click="deleteParent"
                                ></button>
                                <p>
                                    Et suscipit deserunt earum itaque
                                    dignissimos recusandae dolorem qui.
                                    Molestiae rerum perferendis laborum.
                                    Occaecati illo at laboriosam rem molestiae
                                    sint.
                                </p>
                                <hr />
                                <p class="m-0">
                                    Temporibus quis et qui aspernatur laboriosam
                                    sit eveniet qui sunt.
                                </p>
                            </div>
                            <div
                                class="box alert alert-light border-light border-light alert-dismissible fade show"
                            >
                                <h4 class="alert-header">Light Heading</h4>
                                <button
                                    type="button"
                                    class="btn-close"
                                    @click="deleteParent"
                                ></button>
                                <p>
                                    Et suscipit deserunt earum itaque
                                    dignissimos recusandae dolorem qui.
                                    Molestiae rerum perferendis laborum.
                                    Occaecati illo at laboriosam rem molestiae
                                    sint.
                                </p>
                                <hr />
                                <p class="m-0">
                                    Temporibus quis et qui aspernatur laboriosam
                                    sit eveniet qui sunt.
                                </p>
                            </div>
                            <div
                                class="box alert alert-dark border-dark alert-dismissible fade show"
                            >
                                <h4 class="alert-header">Dark Heading</h4>
                                <button
                                    type="button"
                                    class="btn-close"
                                    @click="deleteParent"
                                ></button>
                                <p>
                                    Et suscipit deserunt earum itaque
                                    dignissimos recusandae dolorem qui.
                                    Molestiae rerum perferendis laborum.
                                    Occaecati illo at laboriosam rem molestiae
                                    sint.
                                </p>
                                <hr />
                                <p class="m-0">
                                    Temporibus quis et qui aspernatur laboriosam
                                    sit eveniet qui sunt.
                                </p>
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
    name: "NavSection",
    data: () => {
        return {};
    },
    methods: {
        deleteParent(ev) {
            ev.target.parentElement.classList.remove("show");
            setTimeout(() => {
                ev.target.parentElement.remove();
            }, 300);
        },
    },
};
</script>
