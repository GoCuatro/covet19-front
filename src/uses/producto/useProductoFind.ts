import { Producto } from './../../types/Producto';
import apiProductoFind from './../../services/producto/apiProductoFind';
import {Ref, ref, onMounted } from '@vue/composition-api';

export function useProductoFind(idProducto: string) {
  const producto: Ref<Producto> = ref();

  onMounted(async () => {
    producto.value = await apiProductoFind(idProducto);
  });

  return { producto };
}
