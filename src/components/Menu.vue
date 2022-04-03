<template>
<section id="menu" class="bg-blue menu">
    <div class="container">
        <div class="section-title text-center">
            <h2>
                <span>Menú</span><br>
                <bold>Sabores</bold>
            </h2>
        </div>
        <div class="row justify-content-center">
            <div class="col-lg-4" v-for="sabor in $store.getters.getSabores" :key="sabor.id">
                <div class="menu-content text-center">
                    <img :src=sabor.img  class="img-fluid img-menu" :alt="'Pastel de '+sabor.sabor"/>
                    <h4>{{sabor.sabor}}</h4>
                    <p>{{sabor.precio}}</p>
                    <div class="border-animate">
                        <span class="top-border"></span>
                        <span class="right-border"></span>
                        <span class="left-border"></span>
                        <span class="bottom-border"></span>
                    </div>
                </div>
            </div>
            <div class="section-title text-center">
                <h2>
                    <bold>Adornos</bold>
                </h2>
            </div>
            <div class="row justify-content-center">
                <div class="col-lg-4" v-for="adorno in $store.getters.getAdornos" :key="adorno.id">
                    <div class="menu-content text-center">
                        <img :src=adorno.img  class="img-fluid img-menu" :alt="adorno.adorno"/>
                        <h4>{{adorno.adorno}}</h4>
                        <p>{{adorno.precio}}</p>
                        <div class="border-animate">
                            <span class="top-border"></span>
                            <span class="right-border"></span>
                            <span class="left-border"></span>
                            <span class="bottom-border"></span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="col-lg-12 text-center">
            <router-link to="/realizar-pedido"><button class="btn-primary btn-lg">Realizar Pedido</button></router-link>
        </div>
    </div>
</section>
</template>

<script>
export default {
    name: "Menu",
}
</script>

<style>
.menu .container {
    position: relative;
    z-index: 1;
}

.menu .menu-content {
    padding: 30px;
    background: #fff;
    box-shadow: 0 0 30px rgba(59, 96, 184, 0.1);
    position: relative;
    overflow: hidden;
    transition: all 0.3s ease;
    margin-bottom: 30px;
}

.menu .menu-content .border-animate .top-border,
.menu .menu-content .border-animate .bottom-border,
.menu .menu-content .border-animate .right-border,
.menu .menu-content .border-animate .left-border {
    position: absolute;
    background-image: linear-gradient(to right, #9579d1, #be9ddf);
    transition: all 0.3s linear;
    opacity: 0;
}

.menu .menu-content .border-animate .top-border,
.menu .menu-content .border-animate .bottom-border {
    width: 100%;
    height: 2px;
    left: 0;
}

.menu .menu-content .border-animate .top-border {
    top: 0;
}

.menu .menu-content .border-animate .bottom-border {
    bottom: 0;
}

.menu .menu-content .border-animate .right-border,
.menu .menu-content .border-animate .left-border {
    width: 2px;
    height: 100%;
    top: 0;
}

.menu .menu-content .border-animate .right-border {
    right: 0;
}

.menu .menu-content .border-animate .left-border {
    left: 0;
}

.menu .itmenu-contentems:hover {
    box-shadow: 0 40px 40px rgba(59, 96, 184, 0.2);
}

.menu .menu-content:hover .top-border,
.menu .menu-content:hover .bottom-border,
.menu .menu-content:hover .right-border,
.menu .menu-content:hover .left-border {
    opacity: 0.8;
}

.menu .menu-content:hover .top-border {
    left: 75%;
}

.menu .menu-content:hover .bottom-border {
    left: -75%;
}

.menu .menu-content:hover .right-border {
    top: 75%;
}

.menu .menu-content:hover .left-border {
    top: -75%;
}
</style>