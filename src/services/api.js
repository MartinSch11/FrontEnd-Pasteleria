import axios from 'axios';

// Si tu Spring Boot corre en el 8080, dejalo así.
// Si lo subís a la nube, cambiás esta URL y listo.
const apiClient = axios.create({
    baseURL: 'http://localhost:8080/api',
    headers: {
        'Content-Type': 'application/json'
    }
});

export default {
    // GET: Traer la lista de tortas
    getProductos() {
        return apiClient.get('/productos');
    },
    getCategorias() {
        return apiClient.get('/categorias');
    },
    // POST: Mandar el pedido armado
    crearPedido(pedido) {
        return apiClient.post('/pedidos/nuevo', pedido);
    }
};