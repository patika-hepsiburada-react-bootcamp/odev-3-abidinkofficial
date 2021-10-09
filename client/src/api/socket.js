import { io } from 'socket.io-client';

let socket;

export const connectToSocket = () => {
  console.log('Connectting to the server...');
  socket = io(process.env.REACT_APP_SERVER_ENDPOINT, { transports: ['websocket'] });

  socket.on('connect', () => {
    console.log('Connected to the server.');
  });

  socket.on('connect_error', () => {
    console.error('Server connection is failed.');
  });
};

export const sendData = (channel, data) => {
  socket && socket.emit(channel, data);
};

export const subscribeToChannel = (channel, callback) => {
  socket && socket.on(channel, (data) => {
    callback(data);
  });
};
