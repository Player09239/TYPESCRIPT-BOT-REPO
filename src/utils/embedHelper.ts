// Static class that is supposed to help with building embeds

import {
    type ColorResolvable,
    EmbedBuilder,
} from 'discord.js'

class BuildEmbed {

    static Normal(
        title: string,
        text: string,
        color: ColorResolvable = '#FFFFFF',
        fields: { name: string, value: string }[] = []
    ): EmbedBuilder {
        return new EmbedBuilder()
            .setTitle(title)
            .setColor(color)
            .setDescription(text)
            .addFields(fields)
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
            '',
            message
        )
    }
}

export default BuildEmbed
