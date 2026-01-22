import { WebSocketServer } from 'ws'

type User = {
  id: string;
  name: string;
  socket: WebSocket;
}

const wss = new WebSocketServer({ port: 8080 })