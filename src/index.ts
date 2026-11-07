import {
    Client,
    GatewayIntentBits
} from 'discord.js'

import Logger from './utils/logger.ts'
import loadCommands from './loaders/commandLoader.ts'

import dotenv from 'dotenv'
import type BaseCommand from './commands/baseCommand.ts'
import { intents, prefix } from './botSettings.ts'
import CheckForData from './data/checkForData.ts'
import mongoose from 'mongoose'
import dns from 'dns'

dotenv.config()

const client: Client = new Client({ intents: intents })

// /-- LISTENERS --\ \\
client.once('clientReady', (c) => {
    Logger.OK('Client is ready')
})

// Attempt to connect to Mongodb
// fuck u node
dns.setServers([
    '1.1.1.1',
    '8.8.8.8'
])

mongoose.connect(process.env.MONGO as string).then(() => {
    Logger.OK(`Connected to Database (Detected host: ${mongoose.connection.host})`)
}).catch((e) => {
    Logger.ERROR(`There was a problem while trying to connect to Database. ${e}`)
})

// Load Commands
const commands: Map<string, BaseCommand> = await loadCommands()
client.on('messageCreate', async (msg) => {
    // Ignore bots
    if (msg.author.bot) return

    // Continue Logic
    if (msg.content.startsWith(prefix)) {
        await CheckForData(msg)

        const args: string[] = msg.content.split(' ')
        const normalizedCommandKey: string = args.shift()?.slice(prefix.length).toLowerCase() ?? 'what'

        const command = normalizedCommandKey === undefined
            ? undefined
            : commands.get(normalizedCommandKey)

        if (command) {
            await command.execute(msg)
        } else return
    }
})

// \ -- END -- / \\

client.login(process.env.TOKEN).catch((e) => {
    Logger.ERROR(e)
})
