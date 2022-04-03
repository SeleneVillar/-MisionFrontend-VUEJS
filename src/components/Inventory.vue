<template>
<section id="inventario" class="bg-blue">
    <div class=" container">
        <div class="section-title text-center">
            <h2>
                <span>Existencias</span> <br>
                <bold>Inventario</bold>
            </h2>
        </div>
        <div class="row">
            <div class="col-lg-12">
                <div class="table-responsive">
                    <table class="table table-primary">
                        <thead class="text-center">
                            <tr>
                                <th scope="col">Recurso</th>
                                <th scope="col">Cantidad Disponible</th>
                                <th scope="col">Cantidad Necesaria</th>
                                <th scope="col">Estatus</th>
                            </tr>
                        </thead>
                        <tbody class="text-center">
                            <tr v-for="sabor in $store.getters.getSabores" :key="sabor.id">
                                <td>Sabor {{ sabor.sabor }}</td>
                                <td>{{ sabor.disponibles }}</td>
                                <td>{{ sabor.necesarios }}</td>
                                <td v-if="sabor.estatus != 'Recursos suficientes'"><b>{{ sabor.estatus }}</b></td>
                                <td v-else>{{ sabor.estatus }}</td>
                            </tr>
                            <tr v-for="adorno in $store.getters.getAdornos" :key="adorno.id">
                                <td>Adorno {{ adorno.adorno }}</td>
                                <td>{{ adorno.disponibles }}</td>
                                <td>{{ adorno.necesarios }}</td>
                                <td v-if="adorno.estatus != 'Recursos suficientes'"><b>{{ adorno.estatus }}</b></td>
                                <td v-else>{{ adorno.estatus }}</td>
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
    name: "Inventory",
}
</script>