import { createStore } from 'vuex'

export default createStore({
    state: {
        sabores: [{
                id: 1,
                sabor: 'Chocolate',
                img: require("@/assets/img/chocolate.png"),
                precio: '$310.00',
                disponibles: 50,
                necesarios: 20,
                estatus: 'Recursos suficientes'
            },
            {
                id: 2,
                sabor: 'Vainilla',
                img: require("@/assets/img/vainilla.png"),
                precio: '$280.00',
                disponibles: 40,
                necesarios: 30,
                estatus: 'Se recomienda comprar más recursos'
            },
            {
                id: 3,
                sabor: 'Oreo',
                img: require("@/assets/img/oreo.png"),
                precio: '$380.00',
                disponibles: 80,
                necesarios: 32,
                estatus: 'Recursos suficientes'
            },
            {
                id: 4,
                sabor: 'Red Velvet',
                img: require("@/assets/img/red-velvet.png"),
                precio: '$380.00',
                disponibles: 30,
                necesarios: 18,
                estatus: 'Se recomienda comprar más recursos'
            },
            {
                id: 5,
                sabor: 'Zanahoria',
                img: require("@/assets/img/zanahoria.png"),
                precio: '$400.00',
                disponibles: 20,
                necesarios: 5,
                estatus: 'Recursos suficientes'
            },
            {
                id: 6,
                sabor: 'Queso',
                img: require("@/assets/img/queso.png"),
                precio: '$450.00',
                disponibles: 30,
                necesarios: 45,
                estatus: 'Recursos insuficientes. Es necesario comprar recursos.'
            }
        ],
        adornos: [{
                id: 1,
                adorno: 'Frutas',
                img: require("@/assets/img/frutas.png"),
                precio: '$120.00',
                disponibles: 80,
                necesarios: 38,
                estatus: 'Recursos suficientes'
            },
            {
                id: 2,
                adorno: 'Macarons',
                img: require("@/assets/img/macarons.png"),
                precio: '$200.00',
                disponibles: 20,
                necesarios: 5,
                estatus: 'Recursos suficientes'
            },
            {
                id: 3,
                adorno: 'Donas',
                img: require("@/assets/img/donas.png"),
                precio: '$220.00',
                disponibles: 15,
                necesarios: 25,
                estatus: 'Recursos insuficientes. Es necesario comprar recursos.'
            },
            {
                id: 4,
                adorno: 'Unicornio',
                img: require("@/assets/img/unicornio.png"),
                precio: '$250.00',
                disponibles: 40,
                necesarios: 29,
                estatus: 'Se recomienda comprar más recursos'
            },
            {
                id: 5,
                adorno: 'Arcoíris',
                img: require("@/assets/img/arcoiris.png"),
                precio: '$80.00',
                disponibles: 35,
                necesarios: 10,
                estatus: 'Recursos suficientes'
            },
            {
                id: 6,
                adorno: 'Drip Cake',
                img: require("@/assets/img/drip-cake.png"),
                precio: '$100.00',
                disponibles: 25,
                necesarios: 8,
                estatus: 'Recursos suficientes'
            }
        ],
        pedidos: [{
                fechaEntrega: '05-04-2022',
                cliente: 'Sofía Díaz',
                telefono: '5512368598',
                correoElectronico: 'sofi852@gmail.com',
                sabores: ['Chocolate', 'Vainilla'],
                adornos: ['Frutas'],
                descripcion: 'Pastel cuadrado con letrero de "Feliz Cumpleaños"',
                direccion: 'Arkansas 37, Nápoles, Benito Juárez, 03810, CDMX'
            },
            {
                fechaEntrega: '08-04-2022',
                cliente: 'Rodrigo Martinez',
                telefono: '5585988569',
                correoElectronico: 'roma_93@gmail.com',
                sabores: ['Oreo'],
                adornos: ['Unicornio', 'Arcoíris'],
                descripcion: 'Pastel de unicornio sabor oreo',
                direccion: 'Av. Insurgentes Sur 647, Nápoles, Benito Juárez, 03810, CDMX'
            },
            {
                fechaEntrega: '11-04-2022',
                cliente: 'Alejandro Espinoza',
                telefono: '5569854785',
                correoElectronico: 'sixto_alex@gmail.com	',
                sabores: ['Queso', 'Oreo'],
                adornos: ['Drip Cake', 'Donas'],
                descripcion: 'Colores rosa, morado y azul',
                direccion: 'Av. Coyoacán 721, Col. Del Valle, Benito Juárez, 03100, CDMX'
            }
        ],
    },
    getters: {
        getSabores: (state) => {
            return state.sabores;
        },
        getAdornos: (state) => {
            return state.adornos;
        },
        getPedidos: (state) => {
            return state.pedidos;
        }
    },
    mutations: {
        realizarPedido(state, pedido) {
            state.pedidos.push(pedido);
        },
        sumarSabores(state, saborSeleccionado) {
            state.sabores.forEach(sabor => {
                saborSeleccionado.forEach(nombreSabor => {
                    if (sabor.sabor == nombreSabor) {
                        sabor.necesarios++;
                    }
                });
            });
        },
        sumarAdornos(state, adornoSeleccionado) {
            state.adornos.forEach(adorno => {
                adornoSeleccionado.forEach(nombreAdorno => {
                    if (adorno.adorno == nombreAdorno) {
                        adorno.necesarios++;
                    }
                });
            });
        },
    },
    actions: {
        realizarPedido({ commit }, pedido) {
            commit('realizarPedido', pedido);
        },
        sumarSabores({ commit }, saborSeleccionado) {
            commit('sumarSabores', saborSeleccionado);
        },
        sumarAdornos({ commit }, adornoSeleccionado) {
            commit('sumarAdornos', adornoSeleccionado);
        }
    },
    modules: {}
})