<template>
    <section class="View-section overflow-hidden p-3 pt-0">
        <div class="header-section mb-3">
            <h1 class="m-0">Cards</h1>
            <div class="path">
                <router-link class="links active me-1" to="./DashboardView.vue">
                    Home / Components
                </router-link>
                / Cards
            </div>
        </div>
        <div class="wrapper row align-items-start mb-3">
            <div class="part row col-lg-6 col-12 restart pe-lg-2">
                <div class="col-12 restart mb-3">
                    <div class="card">
                        <div class="card-body">
                            <h5 class="card-title mb-3">Default Card</h5>
                            Ut in ea error laudantium quas omnis officia. Sit
                            sed praesentium voluptas. Corrupti inventore
                            consequatur nisi necessitatibus modi consequuntur
                            soluta id. Enim autem est esse natus assumenda. Non
                            sunt dignissimos officiis expedita. Consequatur sint
                            repellendus voluptas. Quidem sit est nulla ullam.
                            Suscipit debitis ullam iusto dolorem animi dolorem
                            numquam. Enim fuga ipsum dolor nulla quia ut. Rerum
                            dolor voluptatem et deleniti libero totam numquam
                            nobis distinctio. Sit sint aut. Consequatur rerum
                            in.
                        </div>
                    </div>
                </div>
                <div class="col-12 restart mb-3">
                    <div class="card">
                        <div class="card-header">Header</div>
                        <div class="card-body">
                            <h5 class="card-title mb-3">
                                Card With Header And Footer
                            </h5>
                            Ut in ea error laudantium quas omnis officia. Sit
                            sed praesentium voluptas. Corrupti inventore
                            consequatur nisi necessitatibus modi consequuntur
                            soluta id. Enim autem est esse natus assumenda. Non
                            sunt dignissimos officiis expedita. Consequatur sint
                            repellendus voluptas. Quidem sit est nulla ullam.
                            Suscipit debitis ullam iusto dolorem animi dolorem
                            numquam. Enim fuga ipsum dolor nulla quia ut. Rerum
                            dolor voluptatem et deleniti libero totam numquam
                            nobis distinctio. Sit sint aut. Consequatur rerum
                            in.
                        </div>
                        <div class="card-footer">Footer</div>
                    </div>
                </div>
                <div class="col-12 restart mb-3">
                    <div class="card">
                        <div class="row align-items-center">
                            <div class="image-contain col-lg-4 col-12 restart">
                                <img
                                    src="../assets/Images/card.jpg"
                                    alt="left-card"
                                    class="img-fluid rounded-start"
                                />
                            </div>
                            <div class="card-body col-lg-8 col-12 restart ps-2">
                                <h5 class="card-title mb-3">
                                    Card With Image On Left
                                </h5>
                                This is a wider card with supporting text below
                                as a natural lead-in to additional content. This
                                content is a little bit longer.
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="part row col-lg-3 col-12 restart ps-lg-2">
                <div class="col-12 restart mb-3">
                    <div class="card">
                        <div class="image-contain">
                            <img
                                src="../assets/Images/card.jpg"
                                alt="left-card"
                                class="img-fluid rounded-top"
                            />
                        </div>
                        <div class="card-body">
                            <h5 class="card-title mb-3">
                                Card With Image On Top
                            </h5>
                            Some quick example text to build on the card title
                            and make up the bulk of the card's content.
                        </div>
                    </div>
                </div>
                <div class="col-12 restart mb-3">
                    <div class="card">
                        <div class="card-body">
                            <h5 class="card-title mb-3">
                                Card With Image On Bottom
                            </h5>
                            Some quick example text to build on the card title
                            and make up the bulk of the card's content.
                        </div>
                        <div class="image-contain">
                            <img
                                src="../assets/Images/card.jpg"
                                alt="left-card"
                                class="img-fluid rounded-bottom"
                            />
                        </div>
                    </div>
                </div>
            </div>
            <div class="part row col-lg-3 col-12 restart ps-lg-2">
                <div class="col-12 restart mb-3">
                    <div class="card">
                        <div class="image-contain">
                            <img
                                src="../assets/Images/card.jpg"
                                alt="left-card"
                                class="card-img-top"
                            />
                        </div>
                        <div class="card-img-overlay">
                            <div class="card-body">
                                <h5 class="card-title mb-3">
                                    Card With An Image Overlay
                                </h5>
                                Some quick example text to build on the card
                                title and make up the bulk of the card's
                                content.
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-12 restart mb-3">
                    <div class="card">
                        <div class="card-body">
                            <h5 class="card-title mb-3">
                                Card With Title, Buttons, And Links
                            </h5>
                            <h6 class="card-subtitle mb-2 text-muted fw-normal">
                                Card Subtitle
                            </h6>
                            <p>
                                Some quick example text to build on the card
                                title and make up the bulk of the card's
                                content.
                            </p>
                            <span class="d-block">
                                <div class="btn btn-primary">Button</div>
                            </span>
                            <span class="d-block">
                                <div class="btn btn-link p-0">Card Link</div>
                                <div class="btn btn-link">Another Link</div>
                            </span>
                        </div>
                    </div>
                </div>
                <div class="col-12 restart mb-3">
                    <div class="card">
                        <div class="card-header">
                            <ul class="nav nav-pills card-header-pills">
                                <li class="nav-item">
                                    <a href="#" class="nav-link active"
                                        >Active</a
                                    >
                                </li>
                                <li class="nav-item">
                                    <a href="#" class="nav-link">Link</a>
                                </li>
                                <li class="nav-item">
                                    <a href="#" class="nav-link disabled"
                                        >Disabled</a
                                    >
                                </li>
                            </ul>
                        </div>
                        <div class="card-body text-center">
                            <h5 class="card-title mb-3">
                                Special title treatment
                            </h5>
                            <p>
                                With supporting text below as a natural lead-in
                                to additional content.
                            </p>
                            <a href="#" class="btn btn-primary">Go Somewhere</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
export default {
    name: "CardsView",
};
</script>
