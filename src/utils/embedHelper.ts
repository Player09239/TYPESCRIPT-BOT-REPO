// Static class that is supposed to help with building embeds

import {
    type ColorResolvable,
    EmbedBuilder,
} from 'discord.js'

export type Field = {
    name: string,
    value: string,
    inline?: boolean
}

class BuildEmbed {

    static Normal(
        title: string | undefined,
        text: string,
        color: ColorResolvable = '#FFFFFF',
        fields: Field[] = []
    ): EmbedBuilder {
        let embed = new EmbedBuilder()
            .setColor(color)
            .setDescription(text)
            .addFields(fields)

        if (title !== undefined) {
            embed.setTitle(title)
        }

        return embed
    }

    static Error(
        errorMessage: string
    ): EmbedBuilder {
        return this.Normal(
            'Error',
            errorMessage,
            'Red'
        )
    }

    static Titleless(
        message: string
    ): EmbedBuilder {
        return this.Normal(
            undefined,
            message
        )
    }
}

export default BuildEmbed
