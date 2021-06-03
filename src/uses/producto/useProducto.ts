import { Ref, ref, onMounted } from '@vue/composition-api';
import { Producto } from './../../types/Producto';
import { apiProducto } from 'services/apiProducto';

export function useProductos() {
  const productos: Ref<Producto[]> = ref([]);

  onMounted(async () => {
    productos.value = await apiProducto.getProductos();
  });

  return { productos };
}
