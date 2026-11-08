import type { EmbedBuilder, Message } from 'discord.js'
import BaseCommand from '../baseCommand.ts'
import Logger from '../../utils/logger.ts'
import User from '../../data/schemas/user.ts'
import BuildEmbed from '../../utils/embedHelper.ts'
import { Model } from 'mongoose'

async function _e(msg: Message): Promise<Message> {
    Logger.OK('Command ran')
    let userData = await User.findOne({ id: msg.author.id })

    const embed: EmbedBuilder = BuildEmbed.Normal(
        'Balance',
        `You currently have **${userData?.coins}** coins`
    )

    return msg.reply({ embeds: [embed] })
}

const CoinsCommand: BaseCommand = new BaseCommand(
    'coins',
    [],
    'View your coins',
    _e
)

export default CoinsCommand