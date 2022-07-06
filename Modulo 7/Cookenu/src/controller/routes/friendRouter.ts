import express from "express"
import { FriendController } from "../FriendController"

export const friendRouter = express.Router()
const friendController = new FriendController()

friendRouter.post('/user/follow', friendController.createFriend)
friendRouter.delete('/user/unfollow/:id', friendController.removeFriend)