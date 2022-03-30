import express from "express";
import { route } from "express/lib/application";
import APIController from '../controller/APIController'
let router = express.Router();

const initAPIRoute = (app) => {
    router.get('/users', APIController.getAllUsers);
    router.post('/create-users', APIController.createNewUser);
    router.put('/update-user', APIController.updateUser)
    router.delete('/delete-user/:id', APIController.deleteUser)
    return app.use('/api/v1/', router)
}


export default initAPIRoute;
