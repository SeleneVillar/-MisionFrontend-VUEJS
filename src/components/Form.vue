<template>
<section id="realizar-pedido">
    <div class="container realizar-pedido">
        <div class="section-title text-center">
            <h2>
                <span>Ordenar</span> <br>
                <bold>Realizar Pedido</bold>
            </h2>
        </div>
        <div class="row">
            <div class="col-lg-12">
                <form class="row g-3 bg-blue rounded-3" @submit.prevent="registrarPedido()">
                    <div class="col-md-4">
                        <label for="nombre" class="form-label">Nombre Completo</label>
                        <input type="text" class="form-control" id="nombre" v-model="nombre" placeholder="Ingrese su nombre completo" required>
                    </div>
                    <div class="col-md-4">
                        <label for="direccion" class="form-label">Dirección</label>
                        <input type="text" class="form-control" id="direccion" v-model="direccion" placeholder="Ingrese su dirección" required>
                    </div>
                    <div class="col-md-4">
                        <label for="telefono" class="form-label">Teléfono</label>
                        <input type="text" class="form-control" id="telefono" v-model="telefono" placeholder="Ingrese su número de teléfono" required>
                    </div>
                    <div class="col-md-4">
                        <label for="email" class="form-label">Correo Electrónico</label>
                        <input type="email" class="form-control" id="email" v-model="email" placeholder="Ingrese su correo electrónico" required>
                    </div>
                    <div class="col-md-4">
                        <label for="entrega" class="form-label">Fecha de entrega</label>
                        <input type="date" class="form-control" id="fechaEntrega" v-model="fechaEntrega" required>
                    </div>
                    <div class="col-md-4">
                        <label for="descripcion" class="form-label">Descripción general del pastel</label>
                        <textarea class="form-control" id="descripcion" v-model="descripcion" placeholder="Especifique los detalles de su pedido" required></textarea>
                    </div>
                    <div class="form-title text-center">
                        <h2>
                            <span>Sabores</span>
                        </h2>
                    </div>
                    <div class="col-md-12 text-center sabores">
                        <div class="form-check form-check-inline" v-for="sabor in $store.getters.getSabores" :key="sabor.id">
                            <input class="form-check-input" type="checkbox" id="saborSeleccionado" v-model="saborSeleccionado" :value="sabor.sabor">
                            <label class="form-check-label" :for="sabor.sabor">{{sabor.sabor}} {{sabor.precio}}</label>
                        </div>
                    </div>
                    <div class="form-title text-center">
                        <h2>
                            <span>Adornos</span>
                        </h2>
                    </div>
                    <div class="col-md-12 text-center adornos">
                        <div class="form-check form-check-inline" v-for="adorno in $store.getters.getAdornos" :key="adorno.id"> 
                            <input class="form-check-input" type="checkbox" id="adornosSeleccionados" v-model="adornosSeleccionados" :value="adorno.adorno">
                            <label class="form-check-label" :for="adorno.adorno">{{adorno.adorno}} {{adorno.precio}}</label>
                        </div>
                    </div>
                    <div class="col-12 text-center">
                        <button class="btn btn-primary btn-md btn-pedido" type="submit">Realizar el pedido</button>
                    </div>
                </form>
            </div>
        </div>
    </div>
</section>
</template>

<script>
export default {
    name: "Form",
    data() {
        return{
        nombre: "",
        direccion: "",
        telefono: "",
        email: "",
        fechaEntrega: "",
        descripcion: "",
        saborSeleccionado: [],
        adornosSeleccionados: []
        }
    },
    methods:{
        registrarPedido(){
            if(this.nombre == "" || this.nombre.trim().length == 0 || this.direccion == "" || this.direccion.trim().length == 0 || this.telefono == "" 
            || this.telefono.trim().length == 0 || this.email == "" || this.email.trim().length == 0 || this.fechaEntrega == "" || this.fechaEntrega.trim().length == 0 
            || this.descripcion == "" || this.descripcion.trim().length == 0 || this.saborSeleccionado == "" || this.adornosSeleccionados == ""){
                swal({
                    title: "¡Error!",
                    text: "Favor de completar todos los campos",
                    icon: "error",
                }); 
            }else{
                this.$store.dispatch('realizarPedido', {
                    fechaEntrega: moment(this.fechaEntrega).format('DD-MM-YYYY'),
                    cliente: this.nombre,
                    telefono: this.telefono,
                    correoElectronico: this.email,
                    sabores: this.saborSeleccionado,
                    adornos: this.adornosSeleccionados,
                    descripcion: this.descripcion,
                    direccion: this.direccion
                });
                this.$store.dispatch('sumarSabores', this.saborSeleccionado);
                this.$store.dispatch('sumarAdornos', this.adornosSeleccionados);
                swal({
                    title: "¡Éxito!",
                    text: "Se ha registrado su pedido",
                    icon: "success",
                }); 
                this.nombre = "";
                this.direccion = "";
                this.telefono = "";
                this.email = "";
                this.fechaEntrega = "";
                this.descripcion = "";
                this.saborSeleccionado = [];
                this.adornosSeleccionados = [];
            }
        }
    }
};
</script>

<style>
.realizar-pedido {
    scroll-margin-top: 6.8em;
    padding: 30px 0;
}

.btn-pedido {
    margin-bottom: 15px;
}

.sabores {
    font-size: 16px;
}

.adornos {
    font-size: 16px;
}

.form-title h2 span {
    position: relative;
    font-weight: 800;
    font-size: 20px;
    text-shadow: 0 5px 5px rgba(0, 0, 0, 0.2);
    z-index: 2;
    color: #3764EB;
}
</style>
