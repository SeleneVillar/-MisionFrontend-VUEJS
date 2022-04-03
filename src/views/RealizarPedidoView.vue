<template>
    <OrderForm/>
    
    <Footer/>
</template>

<script>
import OrderForm from "@/components/Form.vue";
import Footer from "@/components/Footer.vue";


export default {
    name: "RealizarPedidoView",
    components: {
        OrderForm,
        Footer
    },
};
</script>