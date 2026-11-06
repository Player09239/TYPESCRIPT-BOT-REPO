// Static class that is supposed to help with building embeds

import {
    EmbedBuilder,
} from 'discord.js'

class BuildEmbed {
    static Normal(
        title: string,
        text: string,
        fields: { name: string, value: string }[]
    ): EmbedBuilder {
        return new EmbedBuilder()
            .setTitle(title)
            .setColor('#FFFFFF')
            .setDescription(text)
            .addFields(fields)
    }
}

export default BuildEmbed
