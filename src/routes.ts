import { Router } from "express"
import UserController from './controllers/UserController';
import GainController from './controllers/WinController';
import LossController from './controllers/LoseController';
import { checkJwt } from './middleware/authentication';

const router = Router()

router.post('/login',UserController.login)
router.post('/register',UserController.create)
router.get('/user/:id', [checkJwt], UserController.getUser)

router.post('/gain/save', [checkJwt], GainController.save)
router.delete('/gain/remove/:id', [checkJwt], GainController.remove)
router.get('/gain/', [checkJwt], GainController.getAllGain)

router.post('/loss/save', [checkJwt], LossController.save)
router.delete('/loss/remove/:id', [checkJwt], LossController.remove)
router.get('/loss/', [checkJwt], LossController.getAllLoss)

export { router }