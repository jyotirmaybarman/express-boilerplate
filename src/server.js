import { createServer } from 'http';
import app from './app.js';
import { config } from 'dotenv';

config();

const PORT=process.env.PORT || 8000;

const server = createServer(app);

server.listen(PORT,async ()=>{
    console.log(`listening on port: http://localhost:${PORT}`);
})