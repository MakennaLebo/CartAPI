import express from 'express';

import cors from "cors";
import cart from './cart';

const app = express();

app.use(cors());

app.use(express.json());

app.use("/", cart);


const port = 3000;

app.listen(port,()=> console.log('Listening no port: ${port}.'));