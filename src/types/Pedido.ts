import { CompraPedido } from 'types/CompraPedido';

export interface Pedido {
  idPedido: string,
  enviadoPedido: boolean,
  finalizadoPedido: boolean,
  fechaEnviadoPedido: string,
  fechaFinalizadoPedido: string,
  total: number,
  idUsuario: string,
  compraPedido?: CompraPedido[]
}