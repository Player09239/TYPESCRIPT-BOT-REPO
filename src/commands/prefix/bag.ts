import type { EmbedBuilder, Message } from 'discord.js'
import BaseCommand from '../baseCommand.ts'
import Logger from '../../utils/logger.ts'
import User from '../../data/schemas/user.ts'
import BuildEmbed, { type Field } from '../../utils/embedHelper.ts'
import { Model } from 'mongoose'

async function _e(msg: Message): Promise<Message> {
    Logger.OK('Command ran')
    let userData = await User.findOne({ id: msg.author.id })

    let fields: Field[] = []

    for (const item of userData?.inventory ?? []) {
        fields.push(
            {
                name: item.name,
                value: `${item.amount} of this item`,
                inline: true
            }
        )
    }

    if (fields.length === 0) {
        fields.push(
            {
                name: 'Absolutely nothing',
                value: '',
                inline: true
            }
        )
    }

    const embed: EmbedBuilder = BuildEmbed.Normal(
        'User Bag',
        `\nYou currently have...\n\n`,
        undefined,
        fields
    )

    return msg.reply({ embeds: [embed] })
}

const BagCommand: BaseCommand = new BaseCommand(
    'bag',
    [],
    'View your bag',
    _e
)

export default BagCommand