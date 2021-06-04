import { ref, Ref } from '@vue/composition-api';
import { Producto } from 'types/Producto';

export function useFilterProducto() {

  const busquedaFilter: Ref<string> = ref('');

  function filterCatalogo(catalogo: Producto[]): Producto[] {
    if (busquedaFilter.value != '') {
      return catalogo.filter(value => {
        return value.nombre.toUpperCase().startsWith(busquedaFilter.value.toUpperCase());
      });
    } else {
      return catalogo;
    }
  }

  return { busquedaFilter, filterCatalogo };

}
