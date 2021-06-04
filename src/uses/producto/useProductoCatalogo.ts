import { Producto } from 'types/Producto';
import { ref, Ref } from '@vue/composition-api';
import apiProductoCatalogo from 'services/apiProductoCatalogo';
import apiProductoLoadStock from 'services/apiProductoLoadStock';
import apiProductoDisable from 'services/apiProductoDisable';

export function useProductoCatalogo() {
  const catalogo: Ref<Producto[]> = ref([]);
  const loadCatalogo = async () => {
    catalogo.value = await apiProductoCatalogo();
    console.log(catalogo);
  };
  const loadStock = async (producto: Producto, stock: number) => {
    const response = await apiProductoLoadStock(producto, stock);
    return response == 200;
  };
  const diableProducto = async (producto: Producto) => {
    const response = await apiProductoDisable(producto);
    return response == 202;
  };
  return { catalogo, loadCatalogo, loadStock, diableProducto };
}
