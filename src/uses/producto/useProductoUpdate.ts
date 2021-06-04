import { ref, Ref } from '@vue/composition-api';
import { Producto } from 'types/Producto';
import { UUID } from 'uuid-generator-ts';
import apiProductoCreate from 'services/apiProductoCreate';
import apiProductoUpdate from 'services/apiProductoUpdate';

export default function useProductoUpdate(producto: Producto) {
  const newProducto: Ref<Producto> = ref(JSON.parse(JSON.stringify(producto)));

  const update = async () => {
    const response = await apiProductoUpdate(newProducto.value);
    if (response == 202) {
      return true;
    }
    return false;
  };
  return { newProducto, update };
}
