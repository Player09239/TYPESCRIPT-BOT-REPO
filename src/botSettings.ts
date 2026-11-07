import { GatewayIntentBits } from "discord.js"

export const intents: GatewayIntentBits[] = [
    GatewayIntentBits.MessageContent,
    GatewayIntentBits.GuildMembers,
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMessages
]
export const prefix: string = '.'

