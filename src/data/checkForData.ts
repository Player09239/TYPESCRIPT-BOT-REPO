// Checks if data is empty. If empty then make a new document

import { Message } from "discord.js";
import User from "./schemas/user";
import Logger from "../utils/logger";

export default async function CheckForData(msg: Message): Promise<void> {
    let userData = await User.findOne({ id: msg.author.id })

    if (!userData) {
        Logger.WARN(`No document found for user ${msg.author.username} (${msg.author.id})`)
        Logger.DEBUG(`Making document..`)

        userData = new User({
            id: msg.author.id,
            username: msg.author.username,

            coins: 0,
            inventory: []
        })

        await userData.save()

        Logger.OK(`Made document for user ${msg.author.username} (${msg.author.id})`)
    }
}