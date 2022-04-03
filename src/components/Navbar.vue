<template>
<nav class="navbar navbar-expand-lg navbar-dark bg-img shadow-sm fixed-top" id="navbar">
    <div class="container">
        <a class="navbar-brand"><router-link to="/">
            <img src="../assets/img/logo-blanco.png" alt="Logo Procope">
        </router-link></a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav ms-auto">
                <li class="nav-item">
                    <router-link class="nav-link" to="/">Inicio</router-link>
                </li>
                <li v-show="$route.name != 'administracion-pastelero' && $route.name != 'realizar-pedido' && $route.name != 'inventario'" class="nav-item">
                    <a class="nav-link" href="#nosotros">Nosotros</a>
                </li>
                <li v-show="$route.name != 'administracion-pastelero' && $route.name != 'realizar-pedido' && $route.name != 'inventario'" class="nav-item">
                    <a class="nav-link" href="#menu">Menú</a>
                </li>
                <li v-show="$route.name != 'administracion-pastelero' && $route.name != 'realizar-pedido' && $route.name != 'inventario'" class="nav-item">
                    <a class="nav-link" href="#galeria">Galeria</a>
                </li>
                <li v-show="$route.name != 'administracion-pastelero' && $route.name != 'realizar-pedido' && $route.name != 'inventario'" class="nav-item">
                    <a class="nav-link" href="#contacto">Contacto</a>
                </li>
                <li v-show="$route.name == 'administracion-pastelero' || $route.name == 'realizar-pedido' || $route.name == 'inventario'" class="nav-item">
                    <router-link class="nav-link" to="/realizar-pedido">Realizar Pedido</router-link>
                </li>
                <li v-show="$route.name == 'administracion-pastelero' || $route.name == 'realizar-pedido' || $route.name == 'inventario'" class="nav-item">
                    <router-link class="nav-link" to="/administracion-pastelero">Pedidos</router-link>
                </li>
                <li v-show="$route.name == 'administracion-pastelero' || $route.name == 'inventario'" class="nav-item">
                    <a class="nav-link" href="#inventario">Inventario</a>
                </li>
            </ul>
        </div>
    </div>
</nav>
</template>

<script>
export default {
    name: "Navbar",
};
</script>

<style>
.navbar-dark .navbar-nav .nav-link {
    color: #000;
    font-size: 16px;
}

.navbar-dark .navbar-nav .nav-link:hover {
    border-bottom: 2px solid #ffa5d8;
    padding-bottom: 0px;
}

.bg-img {
    background: #92ddea;
    background-image: linear-gradient(90deg, transparent 50%, #7eb8da 50%);
    background-size: 52px;
}
</style>