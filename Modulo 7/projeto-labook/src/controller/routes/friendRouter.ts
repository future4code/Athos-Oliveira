import express from "express"
import { FriendController } from "../FriendController"

export const friendRouter = express.Router()
const friendController = new FriendController()

friendRouter.post('/friend', friendController.createFriend)
friendRouter.delete('/friend/:id', friendController.removeFriend)