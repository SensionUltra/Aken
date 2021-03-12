const { client, message, MessageAttachment } = require('discord.js')
const { Canvas } = require('canvacord')
module.exports = {
    name: "wanted",
    description: "sends a wanted image",
    category: "image",
    run: async(client, message, args) => {
        const user = message.mentions.users.first() || message.author;

        const avatar = user.displayAvatarURL({ format: 'png' });

        let m = await message.channel.send("**Please Wait...**");

        const image = await Canvas.wanted(avatar);

        m.delete({ timeout: 1000 });
        message.channel.send(
            new MessageAttachment( image, 'wanted.gif')
        )
    }
}