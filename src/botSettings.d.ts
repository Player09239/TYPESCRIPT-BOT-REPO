import { GatewayIntentBits } from "discord.js"

declare const intents: GatewayIntentBits[] = [
    GatewayIntentBits.MessageContent,
    GatewayIntentBits.GuildMembers,
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMessages
]
declare const prefix: string = '.'

