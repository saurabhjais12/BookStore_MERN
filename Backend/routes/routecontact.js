import express from 'express';
import ContactController from '../controllers/ContactController.js'
import SignUpController from '../controllers/SignUpController.js';
import LoginController from '../controllers/LoginController.js';
import OrderBuyController, { getAllOrders } from '../controllers/OrderBuyController.js';

const router =express.Router();

router.post('/Contact',ContactController);
router.post('/Signup',SignUpController);
router.post('/Login',LoginController);


//orderBuy
router.post('/OrderBuy',OrderBuyController)
router.get('/OrderDetails',getAllOrders)


export default router;