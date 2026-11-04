import {
    Client,
    GatewayIntentBits
} from 'discord.js'

import {
    intents,
    prefix
} from './botSettings.ts'
import Logger from './utils/logger.ts'
import loadCommands from './loaders/commandLoader.ts'

import dotenv from 'dotenv'
import type BaseCommand from './commands/baseCommand.ts'

dotenv.config()

const client: Client = new Client({ intents: intents })

// /-- LISTENERS --\ \\
client.once('clientReady', (c) => {
    Logger.OK('Client is ready')
})

// Load Commands
const commands: Map<string, BaseCommand> = await loadCommands()
client.on('messageCreate', (msg) => {
    // Ignore bots
    if (msg.author.bot) return

    // Continue Logic
    if (msg.content.startsWith(prefix)) {
        const args: string[] = msg.content.split(' ')
        const normalizedCommandKey: string = args.shift()?.slice(prefix.length).toLowerCase() ?? 'what'

        const command = normalizedCommandKey === undefined
            ? undefined
            : commands.get(normalizedCommandKey)

        if (command) {
            command.execute(msg)
        } else return
    }
})

// \ -- END -- / \\

client.login(process.env.TOKEN).catch((e) => {
    Logger.ERROR(e)
})