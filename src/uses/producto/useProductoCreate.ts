import { ref, Ref } from '@vue/composition-api';
import { Producto } from 'types/Producto';
import { UUID } from 'uuid-generator-ts';
import apiProductoCreate from 'services/apiProductoCreate';

export function useProductoCreate() {
  const newProducto: Ref<Producto> = ref({
    id: new UUID().toString(),
    nombre: '',
    descripcion: '',
    marca: '',
    precio: 0
  });

  function resetProducto() {
    newProducto.value.id = new UUID().toString();
    newProducto.value.nombre = '';
    newProducto.value.descripcion = '';
    newProducto.value.marca = '';
    newProducto.value.precio = 0;
  }

  const create = async () => {
    console.log(newProducto.value);
    const response = await apiProductoCreate(newProducto.value);
    if (response == 201) {
      resetProducto();
      return true;
    }
    return false;
  };
  return { newProducto, create };
}
