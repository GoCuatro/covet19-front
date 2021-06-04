import { ref, Ref } from '@vue/composition-api';
import apiAdminUpdate from 'services/admin/apiAdminUpdate';
import { CommonUser } from 'types/CommonUser';

export default function useAdminUpdate(admin: CommonUser) {
  const newAdmin: Ref<CommonUser> = ref(JSON.parse(JSON.stringify(admin)) as CommonUser);

  const update = async () => {
    const response = await apiAdminUpdate(newAdmin.value);
    if (response == 202) {
      return true;
    }
    return false;
  };
  return { newAdmin, update };
}
