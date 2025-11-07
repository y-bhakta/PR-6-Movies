import { Router } from "express";
import { addmovie, dashboard,formbasicpage, tablespage , deleteMovie , editMovie , updateMovie} from "../../controllers/server/pannelcontroller.js";
import imageUpload from "../../middleware/multer.js";

const adminPanelRouter = Router();

adminPanelRouter.get('/',dashboard);
adminPanelRouter.get('/form-basic',formbasicpage);
adminPanelRouter.post('/form-basic',imageUpload,addmovie);
adminPanelRouter.get('/tables',tablespage);
adminPanelRouter.get('/delete/movie/:id',deleteMovie);
adminPanelRouter.get('/edit/movie/:id',editMovie);
adminPanelRouter.post('/edit/movie/:id',imageUpload,updateMovie);

export default adminPanelRouter;