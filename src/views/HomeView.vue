<template>
  <Carousel/>
    
  <AboutUs/>

  <Menu/>

  <Gallery/>

  <Contact/>

  <Footer/>
</template>

<script>
import Carousel from "@/components/Carousel.vue";
import AboutUs from "@/components/AboutUs.vue";
import Menu from "@/components/Menu.vue";
import Gallery from "@/components/Gallery.vue";
import Contact from "@/components/Contact.vue";
import Footer from "@/components/Footer.vue";


export default {
  name: "HomeView",
  components: {
    Carousel,
    AboutUs,
    Menu,
    Gallery,
    Contact,
    Footer
  },
};
</script>
