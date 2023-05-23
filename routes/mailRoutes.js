import express from "express";
import { saveSentEmails, getEmails, saveDraftEmails, moveEmailsToBin, toggleStarredEmails, deleteEmails } from "../controller/mailController.js";
const route = express.Router()

route.post('/save', saveSentEmails)
route.get('/emails/:type', getEmails)
route.post('/save-draft', saveDraftEmails)
route.post('/bin', moveEmailsToBin)
route.post('/starred', toggleStarredEmails)
route.delete('/delete', deleteEmails)

export default route