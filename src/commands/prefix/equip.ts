import type { EmbedBuilder, Message } from 'discord.js'
import BaseCommand from '../baseCommand.ts'
import Logger from '../../utils/logger.ts'
import User from '../../data/schemas/user.ts'
import BuildEmbed, { type Field } from '../../utils/embedHelper.ts'
import { Model } from 'mongoose'

async function _e(msg: Message): Promise<Message> {
    Logger.OK('Command ran')
    let userData = await User.findOne({ id: msg.author.id })

    
}

const BagCommand: BaseCommand = new BaseCommand(
    'bag',
    [
        {
            name: 'slot',
            type: 'string'
        },
        {
            name: 'itemName',
            type: 'string'
        }
    ],
    'View your bag',
    _e
)

export default BagCommand