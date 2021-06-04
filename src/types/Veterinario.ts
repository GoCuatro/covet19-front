import { ElementoAgenda } from "./ElementoAgenda";

export interface Veterinario {
  id: string,
  cedula: number,
  correo: string,
  direccion: string,
  fechaNacimiento: string,
  nombre: string,
  password: string,
  telefono: number,
  tarjetaProfesional: string,
  agenda: Array<ElementoAgenda>
}
