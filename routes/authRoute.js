import express from 'express'
import {registerController, loginController, testController} from '../controller/authController.js';
import { requireSignIn, isAdmin } from '../middlewares/authMiddleware.js';
import { userData } from '../controller/authController.js';

// router object
const router = express.Router()

// routing 

// REGISTER || METHOD POST
router.post('/register', registerController)

// LOGIN || METHOD POST
router.post('/login', loginController)

// test routes
router.get('/test', requireSignIn, isAdmin, testController);

router.get('/myprofile', userData)

export default router;

