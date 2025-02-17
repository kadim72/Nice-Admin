<template>
    <section
        class="d-flex flex-column align-items-center justify-content-center overflow-hidden p-0 pt-0"
    >
        <h1 class="error-h1">404</h1>
        <h2 class="error-h2">The page you are looking for doesn't exist.</h2>
        <button @click="goBack" class="btn btn-secondary">Go Back</button>
        <img
            class="img-error"
            src="../assets/Images/not-found.svg"
            alt="notFound"
        />
    </section>
</template>

<script>
export default {
    name: "ErrorView",
    methods: {
        goBack() {
            this.$router.go(-1); // Navigates back to the previous page
        },
    },
};
</script>

<style>
.error-h1 {
    margin: 0;
    text-align: center;
    line-height: 150px;
    font-size: 160px;
    font-weight: 700;
    color: #4154f1;
}
.error-h2 {
    text-align: center;
    font-size: 35px;
    color: black;
}
.img-error {
    width: 500px;
    height: 350px;
    display: block;
}
@media (max-width: 450px) {
    .img-error {
        width: 300px;
    }
}
.btn {
    margin: 20px;
    padding: 8px 50px !important;
}
</style>
