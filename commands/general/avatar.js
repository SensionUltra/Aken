const Discord = require('discord.js')

module.exports = {
    name: "avatar",
    description: "shows the avatar of the user",
    aliases: ["av"],
    category: "general",
    run: (client, message, args) => {

        const member = message.mentions.members.first() || message.guild.members.cache.get(args[0]) || message.guild.members.cache.find(r => r.user.username.toLowerCase() === args.join(' ').toLocaleLowerCase()) || message.guild.members.cache.find(r => r.displayName.toLowerCase() === args.join(' ').toLocaleLowerCase()) || message.member;

        const embed = new Discord.MessageEmbed()
            .setTitle('**Avatar**')
            .setURL(member.user.displayAvatarURL({ dynamic: true, size: 1024 }))
            .setImage(member.user.displayAvatarURL({ dynamic: true, size: 1024 }))
            .setTimestamp()

        message.channel.send(embed)
    }
}