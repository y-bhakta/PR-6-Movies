import { Router } from "express";
import adminPanelRouter from "./server/adminpannelrouter.js";
import clientRouter from "./client/clientrouter.js";
const router = Router();
router.use('/server',adminPanelRouter);
router.use('/',clientRouter);
export default router;