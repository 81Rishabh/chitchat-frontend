import {io} from 'socket.io-client';
const ENDPOINT = 'http://localhost:8080';

export const socket = io(ENDPOINT);