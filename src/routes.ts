import { Router } from "express"
import UserController from './controllers/UserController';
import GainController from './controllers/WinController';
import LossController from './controllers/LoseController';
import DashboardController from './controllers/DashboardController';
import { checkJwt } from './middleware/authentication';

const router = Router()

router.post('/login', UserController.login)
router.post('/register', UserController.create)
router.get('/user/:id', [checkJwt], UserController.getUser)

router.post('/dashboard', [checkJwt], DashboardController.getDifference)

router.post('/gain/save', [checkJwt], GainController.save)
router.delete('/gain/remove/:id', [checkJwt], GainController.remove)
router.post('/gain/total', [checkJwt], GainController.sumOfWins)
router.post('/gain', [checkJwt], GainController.getAllGain)

router.post('/loss/save', [checkJwt], LossController.save)
router.delete('/loss/remove/:id', [checkJwt], LossController.remove)
router.post('/loss/total', [checkJwt], LossController.sumOfLoss)
router.post('/loss', [checkJwt], LossController.getAllLoss)

export { router }