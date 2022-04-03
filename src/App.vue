<template>
    <Navbar/>
    <router-view />
</template>

<script>
import Navbar from "@/components/Navbar.vue";

export default {
    name: "App",
    components: {
    Navbar
    },
};
</script>

<style>
body {
    font-weight: 400;
    font-size: 14px;
    padding-top: 70px;
    overflow-x: hidden !important;
    font-family: 'Poppins', sans-serif;  

}

.bg-blue {
    background-color: #e2edff;
}

section {
    scroll-margin-top: 6.8em;
    padding: 20px 0;
}

.section-title {
    margin-bottom: 25px;
}

.section-title h2 {
    position: relative;
    font-size: 30px;
    font-weight: 800;
    color: #0c103d;
}

.section-title h2 span {
    position: relative;
    font-size: 20px;
    text-shadow: 0 5px 5px rgba(0, 0, 0, 0.4);
    z-index: 2;
    color: #3764EB;
}

.section-content {
    font-size: 18px;
    text-align: justify;
    margin-bottom: 15px;
}

.section-content p span {
    color: #0c103d;
}
</style>
