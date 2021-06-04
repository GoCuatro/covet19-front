import { apiCita } from '../../services/apiCita';

export function useDeleteCita() {

  async function deleteCita(id: string){
    await apiCita.deleteCita(id);
  }

  return { deleteCita };
}
