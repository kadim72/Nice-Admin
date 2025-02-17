<template>
    <nav-section />
    <router-view />
    <footer-section />
</template>

<script>
import NavSection from "../components/NavSection";
import FooterSection from "../components/FooterSection";

export default {
    name: "HomeView",
    components: {
        NavSection,
        FooterSection,
    },
};
</script>
