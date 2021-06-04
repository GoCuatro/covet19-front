import { ref, Ref } from '@vue/composition-api';
import { CommonUser } from 'types/CommonUser';

export function useFilterAdmin() {

  const busquedaFilter: Ref<string> = ref('');

  function filterAdmin(nomina: CommonUser[]): CommonUser[] {
    if (busquedaFilter.value != '') {
      return nomina.filter(value => {
        return value.nombre.toUpperCase().startsWith(busquedaFilter.value.toUpperCase());
      });
    } else {
      return nomina;
    }
  }

  return { busquedaFilter, filterAdmin };

}
