<template>
    <section class="View-section overflow-hidden p-3 pt-0">
        <div class="header-section mb-3">
            <h1 class="m-0">Carousel</h1>
            <div class="path">
                <router-link class="links active me-1" to="./DashboardView.vue">
                    Home / Components
                </router-link>
                / Carousel
            </div>
        </div>
        <div class="wrapper row align-items-baseline mb-3">
            <div class="part row col-lg-6 col-12 restart pe-lg-2">
                <div class="col-12 restart mb-3">
                    <div class="card">
                        <div class="card-body">
                            <h5 class="card-title mb-3">Slides Only</h5>
                            <swiper
                                :slides-per-view="1"
                                :autoplay="{ delay: 5000 }"
                                :loop="true"
                                :speed="600"
                                :modules="modules"
                                :allow-touch-move="false"
                            >
                                <swiper-slide>
                                    <img
                                        class="w-100"
                                        src="../assets/Images/slides-1.jpg"
                                        alt="slide"
                                    />
                                </swiper-slide>
                                <swiper-slide>
                                    <img
                                        class="w-100"
                                        src="../assets/Images/slides-2.jpg"
                                        alt="slide"
                                    />
                                </swiper-slide>
                                <swiper-slide>
                                    <img
                                        class="w-100"
                                        src="../assets/Images/slides-3.jpg"
                                        alt="slide"
                                    />
                                </swiper-slide>
                            </swiper>
                        </div>
                    </div>
                </div>
                <div class="col-12 restart mb-3">
                    <div class="card">
                        <div class="card-body">
                            <h5 class="card-title mb-3">With Indicators</h5>
                            <swiper
                                :slides-per-view="1"
                                :autoplay="{ delay: 5000 }"
                                :loop="true"
                                navigation
                                :speed="600"
                                :modules="modules"
                                :pagination="{ clickable: true }"
                                :allow-touch-move="false"
                            >
                                <swiper-slide>
                                    <img
                                        class="w-100"
                                        src="../assets/Images/slides-1.jpg"
                                        alt="slide"
                                    />
                                </swiper-slide>
                                <swiper-slide>
                                    <img
                                        class="w-100"
                                        src="../assets/Images/slides-2.jpg"
                                        alt="slide"
                                    />
                                </swiper-slide>
                                <swiper-slide>
                                    <img
                                        class="w-100"
                                        src="../assets/Images/slides-3.jpg"
                                        alt="slide"
                                    />
                                </swiper-slide>
                            </swiper>
                        </div>
                    </div>
                </div>
                <div class="col-12 restart mb-3">
                    <div class="card">
                        <div class="card-body">
                            <h5 class="card-title mb-3">
                                Carousel With Fade Transition
                            </h5>
                            <swiper
                                :slides-per-view="1"
                                :autoplay="{ delay: 5000 }"
                                :loop="true"
                                :speed="600"
                                :modules="modules"
                                navigation
                                effect="fade"
                                :allow-touch-move="false"
                            >
                                <swiper-slide>
                                    <img
                                        class="w-100"
                                        src="../assets/Images/slides-1.jpg"
                                        alt="slide"
                                    />
                                </swiper-slide>
                                <swiper-slide>
                                    <img
                                        class="w-100"
                                        src="../assets/Images/slides-2.jpg"
                                        alt="slide"
                                    />
                                </swiper-slide>
                                <swiper-slide>
                                    <img
                                        class="w-100"
                                        src="../assets/Images/slides-3.jpg"
                                        alt="slide"
                                    />
                                </swiper-slide>
                            </swiper>
                        </div>
                    </div>
                </div>
            </div>
            <div class="part row col-lg-6 col-12 restart ps-lg-2">
                <div class="col-12 restart mb-3">
                    <div class="card">
                        <div class="card-body">
                            <h5 class="card-title mb-3">With Controls</h5>
                            <swiper
                                :slides-per-view="1"
                                :autoplay="{ delay: 5000 }"
                                :loop="true"
                                :speed="600"
                                navigation
                                :modules="modules"
                                :allow-touch-move="false"
                            >
                                <swiper-slide>
                                    <img
                                        class="w-100"
                                        src="../assets/Images/slides-1.jpg"
                                        alt="slide"
                                    />
                                </swiper-slide>
                                <swiper-slide>
                                    <img
                                        class="w-100"
                                        src="../assets/Images/slides-2.jpg"
                                        alt="slide"
                                    />
                                </swiper-slide>
                                <swiper-slide>
                                    <img
                                        class="w-100"
                                        src="../assets/Images/slides-3.jpg"
                                        alt="slide"
                                    />
                                </swiper-slide>
                            </swiper>
                        </div>
                    </div>
                </div>
                <div class="col-12 restart mb-3">
                    <div class="card">
                        <div class="card-body">
                            <h5 class="card-title mb-3">With Captions</h5>
                            <swiper
                                :slides-per-view="1"
                                :autoplay="{ delay: 5000 }"
                                :loop="true"
                                navigation
                                :speed="600"
                                :modules="modules"
                                :pagination="{ clickable: true }"
                                :allow-touch-move="false"
                            >
                                <swiper-slide class="position-relative">
                                    <img
                                        class="w-100"
                                        src="../assets/Images/slides-1.jpg"
                                        alt="slide"
                                    />
                                    <p class="caption">
                                        Third Slide Label
                                        <br />
                                        Some Representative Placeholder Content
                                        For The Third Slide
                                    </p>
                                </swiper-slide>
                                <swiper-slide class="position-relative">
                                    <img
                                        class="w-100"
                                        src="../assets/Images/slides-2.jpg"
                                        alt="slide"
                                    />
                                    <p class="caption">
                                        Third Slide Label
                                        <br />
                                        Some Representative Placeholder Content
                                        For The Third Slide
                                    </p>
                                </swiper-slide>
                                <swiper-slide class="position-relative">
                                    <img
                                        class="w-100"
                                        src="../assets/Images/slides-3.jpg"
                                        alt="slide"
                                    />
                                    <p class="caption">
                                        Third Slide Label
                                        <br />
                                        Some Representative Placeholder Content
                                        For The Third Slide
                                    </p>
                                </swiper-slide>
                            </swiper>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
import { Swiper, SwiperSlide } from "swiper/vue";
import { Autoplay, Pagination, Navigation, EffectFade } from "swiper/modules";

import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/effect-fade";

export default {
    name: "CarouselSection",
    components: {
        Swiper,
        SwiperSlide,
    },
    data() {
        return {
            modules: [Pagination, Autoplay, Navigation, EffectFade],
        };
    },
};
</script>
