import { ref, Ref } from '@vue/composition-api';
import { Producto } from 'types/Producto';
import apiProductoUpdate from 'services/producto/apiProductoUpdate';

export default function useProductoUpdate(producto: Producto) {
  const newProducto: Ref<Producto> = ref(JSON.parse(JSON.stringify(producto)) as Producto);

  const update = async () => {
    const response = await apiProductoUpdate(newProducto.value);
    if (response == 202) {
      return true;
    }
    return false;
  };
  return { newProducto, update };
}
