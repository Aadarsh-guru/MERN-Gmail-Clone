import express from "express";
import cors from 'cors'
import mailRoutes from "./routes/mailRoutes.js";
import Connection from "./database/db.js";
const app = express()
const port = process.env.PORT || 8000;
app.use(cors())
app.use(express.urlencoded({ extended: true }))
app.use(express.json({ extended: true }))
app.use('/', mailRoutes)
Connection()

app.listen(port, () => { console.log(`server is running on port ${port}`); })