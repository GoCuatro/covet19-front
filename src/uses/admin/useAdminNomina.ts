import { ref, Ref } from '@vue/composition-api';
import apiAdminNomina from 'services/admin/apiAdminNomina';
import { CommonUser } from 'types/CommonUser';

export function useAdminNomina() {
  const nomina: Ref<CommonUser[]> = ref([]);
  const loadNomina = async () => {
    nomina.value = await apiAdminNomina();
  };
  return { nomina, loadNomina };
}
