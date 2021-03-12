const { client, message, MessageAttachment } = require('discord.js')
const { Canvas } = require('canvacord')
module.exports = {
    name: "trigger",
    description: "sends a trigger image",
    category: "image",
    run: async(client, message, args) => {
        const user = message.mentions.users.first() || message.author;

        const avatar = user.displayAvatarURL({ format: 'png' });

        let m = await message.channel.send("**Please Wait...**");

        const image = await Canvas.trigger(avatar);

        m.delete({ timeout: 1000 });
        message.channel.send(
            new MessageAttachment( image, 'trigger.gif')
        )
    }
}