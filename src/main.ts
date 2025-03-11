import express, { Request, Response } from "express";
import dotenv from 'dotenv';

dotenv.config();
const app = express();

// Set up routes
app.get('/', (req: Request, res: Response) => {
    res.send('Hello, world!');
});

// Start the server
const PORT = process.env.PORT;

if (!process.env.PORT) throw new Error("No PORT value in .env");

app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`);
    console.log(`||| http://localhost:${PORT} |||`)
});
