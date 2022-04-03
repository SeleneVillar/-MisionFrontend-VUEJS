<template>
<section id="pedidos">
    <div class="container pedidos">
        <div class="section-title text-center">
            <h2>
                <span>Pedidos</span> <br>
                <bold>Pedidos recientes</bold>
            </h2>
        </div>
        <div class="row">
            <div class="col-lg-12">
                <div class="table-responsive">
                    <table class="table table-primary">
                        <thead class="text-center">
                            <tr>
                                <th scope="col">Fecha de entrega</th>
                                <th scope="col">Cliente</th>
                                <th scope="col">Teléfono</th>
                                <th scope="col">Correo electrónico</th>
                                <th scope="col">Sabor</th>
                                <th scope="col">Adornos</th>
                                <th scope="col">Descripción del pastel</th>
                                <th scope="col">Dirección</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr v-for="pedido in $store.getters.getPedidos" :key="pedido.id">
                            <td>{{ pedido.fechaEntrega }}</td>
                            <td>{{ pedido.cliente }}</td>
                            <td>{{ pedido.telefono }}</td>
                            <td>{{ pedido.correoElectronico }}</td>
                            <td>
                                <ul>
                                    <li v-for="(sabor, index) in pedido.sabores" :key="index">{{sabor}}</li>
                                </ul>
                                </td>
                            <td>
                                <ul>
                                    <li v-for="(adorno, index) in pedido.adornos" :key="index">{{adorno}}</li>
                                </ul>
                            </td>
                            <td>{{ pedido.descripcion }}</td>
                            <td>{{ pedido.direccion }}</td>
                        </tr> 
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    </div>
</section>
</template>

<script>
export default {
    name: "Orders",
}
</script>

<style>
.pedidos {
    scroll-margin-top: 6.8em;
    padding: 30px 0;
}
</style>