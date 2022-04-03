<template>
    <Orders/>

    <Inventory/>
    
    <Footer/>
</template>

<script>
import Orders from "@/components/Orders.vue";
import Inventory from "@/components/Inventory.vue";
import Footer from "@/components/Footer.vue";


export default {
    name: "PasteleroView",
    components: {
        Orders,
        Inventory,
        Footer
    },
};
</script>