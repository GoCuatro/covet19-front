import { CompraPedido } from 'types/CompraPedido';

export interface Pedido {
  idPedido: string,
  pedidoEnviado: boolean,
  pedidoFinalizado: boolean,
  fechaEnviadoPedido: string,
  fechaFinalizadoPedido: string,
  idUsuario: string,
  compraPedido?: CompraPedido[]
}
