<template>
    <section class="View-section overflow-hidden p-3 pt-0">
        <div class="header-section mb-3">
            <h1 class="m-0">Tabs</h1>
            <div class="path">
                <router-link class="links active me-1" to="./DashboardView.vue">
                    Home / Components
                </router-link>
                / Tabs
            </div>
        </div>
        <div class="wrapper row align-items-baseline mb-3">
            <div class="part row col-lg-6 col-12 restart pe-lg-2">
                <div class="col-12 restart mb-3">
                    <div class="card">
                        <div class="card-body">
                            <h5 class="card-title mb-3">Default Tabs</h5>
                            <ul class="nav nav-tabs">
                                <li class="nav-item">
                                    <button
                                        type="button"
                                        class="nav-link active"
                                        gender="default-tap"
                                        target="first"
                                        @click="clickTapsButton"
                                    >
                                        Home
                                    </button>
                                </li>
                                <li class="nav-item">
                                    <button
                                        type="button"
                                        class="nav-link"
                                        gender="default-tap"
                                        target="second"
                                        @click="clickTapsButton"
                                    >
                                        Profile
                                    </button>
                                </li>
                                <li class="nav-item">
                                    <button
                                        type="button"
                                        class="nav-link"
                                        gender="default-tap"
                                        target="third"
                                        @click="clickTapsButton"
                                    >
                                        Contact
                                    </button>
                                </li>
                            </ul>
                            <div class="tap-content pt-2">
                                <p
                                    target="first"
                                    gender="default-tap"
                                    class="paragraph-taps display show"
                                >
                                    Sunt est soluta temporibus accusantium neque
                                    nam maiores cumque temporibus. Tempora
                                    libero non est unde veniam est qui dolor. Ut
                                    sunt iure rerum quae quisquam autem eveniet
                                    perspiciatis odit. Fuga sequi sed ea saepe
                                    at unde.
                                </p>
                                <p
                                    target="second"
                                    gender="default-tap"
                                    class="paragraph-taps show"
                                >
                                    Nesciunt totam et. Consequuntur magnam
                                    aliquid eos nulla dolor iure eos quia.
                                    Accusantium distinctio omnis et atque
                                    fugiat. Itaque doloremque aliquid sint quasi
                                    quia distinctio similique. Voluptate nihil
                                    recusandae mollitia dolores. Ut laboriosam
                                    voluptatum dicta.
                                </p>
                                <p
                                    target="third"
                                    gender="default-tap"
                                    class="paragraph-taps show"
                                >
                                    Saepe animi et soluta ad odit soluta sunt.
                                    Nihil quos omnis animi debitis cumque.
                                    Accusantium quibusdam perspiciatis qui qui
                                    omnis magnam. Officiis accusamus impedit
                                    molestias nostrum veniam. Qui amet ipsum
                                    iure. Dignissimos fuga tempore dolor.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-12 restart mb-3">
                    <div class="card">
                        <div class="card-body">
                            <h5 class="card-title mb-3">Bordered Tabs</h5>
                            <ul class="nav nav-tabs bordered-tabs">
                                <li class="nav-item">
                                    <button
                                        type="button"
                                        class="nav-link active"
                                        gender="bordered-tap"
                                        target="first"
                                        @click="clickTapsButton"
                                    >
                                        Home
                                    </button>
                                </li>
                                <li class="nav-item">
                                    <button
                                        type="button"
                                        class="nav-link"
                                        gender="bordered-tap"
                                        target="second"
                                        @click="clickTapsButton"
                                    >
                                        Profile
                                    </button>
                                </li>
                                <li class="nav-item">
                                    <button
                                        type="button"
                                        class="nav-link"
                                        gender="bordered-tap"
                                        target="third"
                                        @click="clickTapsButton"
                                    >
                                        Contact
                                    </button>
                                </li>
                            </ul>
                            <div class="tap-content pt-2">
                                <p
                                    target="first"
                                    gender="bordered-tap"
                                    class="paragraph-taps display show"
                                >
                                    Sunt est soluta temporibus accusantium neque
                                    nam maiores cumque temporibus. Tempora
                                    libero non est unde veniam est qui dolor. Ut
                                    sunt iure rerum quae quisquam autem eveniet
                                    perspiciatis odit. Fuga sequi sed ea saepe
                                    at unde.
                                </p>
                                <p
                                    target="second"
                                    gender="bordered-tap"
                                    class="paragraph-taps show"
                                >
                                    Nesciunt totam et. Consequuntur magnam
                                    aliquid eos nulla dolor iure eos quia.
                                    Accusantium distinctio omnis et atque
                                    fugiat. Itaque doloremque aliquid sint quasi
                                    quia distinctio similique. Voluptate nihil
                                    recusandae mollitia dolores. Ut laboriosam
                                    voluptatum dicta.
                                </p>
                                <p
                                    target="third"
                                    gender="bordered-tap"
                                    class="paragraph-taps show"
                                >
                                    Saepe animi et soluta ad odit soluta sunt.
                                    Nihil quos omnis animi debitis cumque.
                                    Accusantium quibusdam perspiciatis qui qui
                                    omnis magnam. Officiis accusamus impedit
                                    molestias nostrum veniam. Qui amet ipsum
                                    iure. Dignissimos fuga tempore dolor.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-12 restart mb-3">
                    <div class="card">
                        <div class="card-body">
                            <h5 class="card-title mb-3">Pills Tabs</h5>
                            <ul class="nav nav-pills">
                                <li class="nav-item">
                                    <button
                                        type="button"
                                        class="nav-link active"
                                        gender="pill-tap"
                                        target="first"
                                        @click="clickTapsButton"
                                    >
                                        Home
                                    </button>
                                </li>
                                <li class="nav-item">
                                    <button
                                        type="button"
                                        class="nav-link"
                                        gender="pill-tap"
                                        target="second"
                                        @click="clickTapsButton"
                                    >
                                        Profile
                                    </button>
                                </li>
                                <li class="nav-item">
                                    <button
                                        type="button"
                                        class="nav-link"
                                        gender="pill-tap"
                                        target="third"
                                        @click="clickTapsButton"
                                    >
                                        Contact
                                    </button>
                                </li>
                            </ul>
                            <div class="tap-content pt-2">
                                <p
                                    target="first"
                                    gender="pill-tap"
                                    class="paragraph-taps display show"
                                >
                                    Sunt est soluta temporibus accusantium neque
                                    nam maiores cumque temporibus. Tempora
                                    libero non est unde veniam est qui dolor. Ut
                                    sunt iure rerum quae quisquam autem eveniet
                                    perspiciatis odit. Fuga sequi sed ea saepe
                                    at unde.
                                </p>
                                <p
                                    target="second"
                                    gender="pill-tap"
                                    class="paragraph-taps show"
                                >
                                    Nesciunt totam et. Consequuntur magnam
                                    aliquid eos nulla dolor iure eos quia.
                                    Accusantium distinctio omnis et atque
                                    fugiat. Itaque doloremque aliquid sint quasi
                                    quia distinctio similique. Voluptate nihil
                                    recusandae mollitia dolores. Ut laboriosam
                                    voluptatum dicta.
                                </p>
                                <p
                                    target="third"
                                    gender="pill-tap"
                                    class="paragraph-taps show"
                                >
                                    Saepe animi et soluta ad odit soluta sunt.
                                    Nihil quos omnis animi debitis cumque.
                                    Accusantium quibusdam perspiciatis qui qui
                                    omnis magnam. Officiis accusamus impedit
                                    molestias nostrum veniam. Qui amet ipsum
                                    iure. Dignissimos fuga tempore dolor.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="part row col-lg-6 col-12 restart ps-lg-2">
                <div class="col-12 restart mb-3">
                    <div class="card">
                        <div class="card-body">
                            <h5 class="card-title mb-3">
                                Default Tabs Justified
                            </h5>
                            <ul class="nav nav-tabs d-flex">
                                <li class="nav-item flex-fill">
                                    <button
                                        type="button"
                                        class="nav-link active w-100"
                                        gender="default-justify-tap"
                                        target="first"
                                        @click="clickTapsButton"
                                    >
                                        Home
                                    </button>
                                </li>
                                <li class="nav-item flex-fill">
                                    <button
                                        type="button"
                                        class="nav-link w-100"
                                        gender="default-justify-tap"
                                        target="second"
                                        @click="clickTapsButton"
                                    >
                                        Profile
                                    </button>
                                </li>
                                <li class="nav-item flex-fill">
                                    <button
                                        type="button"
                                        class="nav-link w-100"
                                        gender="default-justify-tap"
                                        target="third"
                                        @click="clickTapsButton"
                                    >
                                        Contact
                                    </button>
                                </li>
                            </ul>
                            <div class="tap-content pt-2">
                                <p
                                    target="first"
                                    gender="default-justify-tap"
                                    class="paragraph-taps display show"
                                >
                                    Sunt est soluta temporibus accusantium neque
                                    nam maiores cumque temporibus. Tempora
                                    libero non est unde veniam est qui dolor. Ut
                                    sunt iure rerum quae quisquam autem eveniet
                                    perspiciatis odit. Fuga sequi sed ea saepe
                                    at unde.
                                </p>
                                <p
                                    target="second"
                                    gender="default-justify-tap"
                                    class="paragraph-taps show"
                                >
                                    Nesciunt totam et. Consequuntur magnam
                                    aliquid eos nulla dolor iure eos quia.
                                    Accusantium distinctio omnis et atque
                                    fugiat. Itaque doloremque aliquid sint quasi
                                    quia distinctio similique. Voluptate nihil
                                    recusandae mollitia dolores. Ut laboriosam
                                    voluptatum dicta.
                                </p>
                                <p
                                    target="third"
                                    gender="default-justify-tap"
                                    class="paragraph-taps show"
                                >
                                    Saepe animi et soluta ad odit soluta sunt.
                                    Nihil quos omnis animi debitis cumque.
                                    Accusantium quibusdam perspiciatis qui qui
                                    omnis magnam. Officiis accusamus impedit
                                    molestias nostrum veniam. Qui amet ipsum
                                    iure. Dignissimos fuga tempore dolor.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-12 restart mb-3">
                    <div class="card">
                        <div class="card-body">
                            <h5 class="card-title mb-3">
                                Bordered Tabs Justified
                            </h5>
                            <ul class="nav nav-tabs bordered-tabs d-flex">
                                <li class="nav-item flex-fill">
                                    <button
                                        type="button"
                                        class="nav-link active w-100"
                                        gender="bordered-justify-tap"
                                        target="first"
                                        @click="clickTapsButton"
                                    >
                                        Home
                                    </button>
                                </li>
                                <li class="nav-item flex-fill">
                                    <button
                                        type="button"
                                        class="nav-link w-100"
                                        gender="bordered-justify-tap"
                                        target="second"
                                        @click="clickTapsButton"
                                    >
                                        Profile
                                    </button>
                                </li>
                                <li class="nav-item flex-fill">
                                    <button
                                        type="button"
                                        class="nav-link w-100"
                                        gender="bordered-justify-tap"
                                        target="third"
                                        @click="clickTapsButton"
                                    >
                                        Contact
                                    </button>
                                </li>
                            </ul>
                            <div class="tap-content pt-2">
                                <p
                                    target="first"
                                    gender="bordered-justify-tap"
                                    class="paragraph-taps display show"
                                >
                                    Sunt est soluta temporibus accusantium neque
                                    nam maiores cumque temporibus. Tempora
                                    libero non est unde veniam est qui dolor. Ut
                                    sunt iure rerum quae quisquam autem eveniet
                                    perspiciatis odit. Fuga sequi sed ea saepe
                                    at unde.
                                </p>
                                <p
                                    target="second"
                                    gender="bordered-justify-tap"
                                    class="paragraph-taps show"
                                >
                                    Nesciunt totam et. Consequuntur magnam
                                    aliquid eos nulla dolor iure eos quia.
                                    Accusantium distinctio omnis et atque
                                    fugiat. Itaque doloremque aliquid sint quasi
                                    quia distinctio similique. Voluptate nihil
                                    recusandae mollitia dolores. Ut laboriosam
                                    voluptatum dicta.
                                </p>
                                <p
                                    target="third"
                                    gender="bordered-justify-tap"
                                    class="paragraph-taps show"
                                >
                                    Saepe animi et soluta ad odit soluta sunt.
                                    Nihil quos omnis animi debitis cumque.
                                    Accusantium quibusdam perspiciatis qui qui
                                    omnis magnam. Officiis accusamus impedit
                                    molestias nostrum veniam. Qui amet ipsum
                                    iure. Dignissimos fuga tempore dolor.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-12 restart mb-3">
                    <div class="card">
                        <div class="card-body">
                            <h5 class="card-title mb-3">Vertical Pills Tabs</h5>
                            <div class="d-flex">
                                <div
                                    class="nav nav-pills flex-column justify-content-center me-3"
                                >
                                    <button
                                        type="button"
                                        class="nav-link active mb-1"
                                        gender="pill-ver-tap"
                                        target="first"
                                        @click="clickTapsButton"
                                    >
                                        Home
                                    </button>

                                    <button
                                        type="button"
                                        class="nav-link mb-1"
                                        gender="pill-ver-tap"
                                        target="second"
                                        @click="clickTapsButton"
                                    >
                                        Profile
                                    </button>

                                    <button
                                        type="button"
                                        class="nav-link"
                                        gender="pill-ver-tap"
                                        target="third"
                                        @click="clickTapsButton"
                                    >
                                        Contact
                                    </button>
                                </div>
                                <div class="tap-content pt-2">
                                    <p
                                        target="first"
                                        gender="pill-ver-tap"
                                        class="paragraph-taps display show"
                                    >
                                        Sunt est soluta temporibus accusantium
                                        neque nam maiores cumque temporibus.
                                        Tempora libero non est unde veniam est
                                        qui dolor. Ut sunt iure rerum quae
                                        quisquam autem eveniet perspiciatis
                                        odit. Fuga sequi sed ea saepe at unde.
                                    </p>
                                    <p
                                        target="second"
                                        gender="pill-ver-tap"
                                        class="paragraph-taps show"
                                    >
                                        Nesciunt totam et. Consequuntur magnam
                                        aliquid eos nulla dolor iure eos quia.
                                        Accusantium distinctio omnis et atque
                                        fugiat. Itaque doloremque aliquid sint
                                        quasi quia distinctio similique.
                                        Voluptate nihil recusandae mollitia
                                        dolores. Ut laboriosam voluptatum dicta.
                                    </p>
                                    <p
                                        target="third"
                                        gender="pill-ver-tap"
                                        class="paragraph-taps show"
                                    >
                                        Saepe animi et soluta ad odit soluta
                                        sunt. Nihil quos omnis animi debitis
                                        cumque. Accusantium quibusdam
                                        perspiciatis qui qui omnis magnam.
                                        Officiis accusamus impedit molestias
                                        nostrum veniam. Qui amet ipsum iure.
                                        Dignissimos fuga tempore dolor.
                                    </p>
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
    name: "TapsView",
    methods: {
        clickTapsButton(ev) {
            if (ev.target.classList.contains("active")) return;

            const gender = ev.target.getAttribute("gender");
            const target = ev.target.getAttribute("target");

            document
                .querySelectorAll(
                    `.View-section .card button[gender='${gender}']`
                )
                .forEach((button) => {
                    button.classList.remove("active");
                });
            ev.target.classList.add("active");

            const lastElement = document.querySelector(
                `.View-section .card p[gender='${gender}'].display`
            );

            lastElement.classList.remove("show");

            setTimeout(() => {
                lastElement.classList.remove("display");

                const targetElement = document.querySelector(
                    `.View-section .card p[gender='${gender}'][target='${target}']`
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
