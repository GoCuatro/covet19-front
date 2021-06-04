export interface CommonUser {
  id: string,
  correo: string,
  pass?: string
  cedula: number,
  nombre: string,
  telefono: number,
  direccion: string,
  fechaNacimiento: string,
  rol: string,
}