import { apiCitas } from '../../services/apiCitas';

export function useDeleteCita() {

  async function deleteCita(id: string){
    await apiCitas.deleteCita(id);
  }

  return { deleteCita };
}
