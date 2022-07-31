import express from "express";
import {WalkingController } from "../controller/WalkingController"

export const walkingRouter = express.Router();
const walkingController = new WalkingController();

walkingRouter.get('/',walkingController.allwalking)
walkingRouter.post('/walking', walkingController.createWalking)
walkingRouter.get('/show/:id',walkingController.showWalking)
walkingRouter.get('/start_walk/:id',walkingController.startWalking)
walkingRouter.get('/finish_walk/:id',walkingController.finishWalking)
