import express from "express";
import {WalkingController } from "../controller/WalkingController"

export const walkingRouter = express.Router();
const walkingController = new WalkingController();

walkingRouter.post('/walking', walkingController.createWalking)
walkingRouter.get('/walking/:id',walkingController.showWalking)
