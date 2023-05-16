import dotenv from 'dotenv';
import Server from './infrastructure/server';
import { config } from './infrastructure/config/config';

dotenv.config();

const port = config.server.port;

const server = new Server(port);

server.listen();