const { MessageEmbed } = require('discord.js')

module.exports = {
    name: "whois",
    category: "Miscellaneous",
    aliases: ["userinfo"],
    cooldown: 4,
    useage: "autoplay",
    description: "See info about a user",
    run: (client, message, args) => {
        const user = message.mentions.users.first() || message.author;

        const member = message.guild.member(user);

        const embed = new MessageEmbed()
        .setAuthor(user.username + '#' + user.discriminator)
        .setThumbnail(message.author.avatarURL)
        .setDescription(`${user}`)
        .addField("Nickname:", `${member.nickname !== null ? `${member.nickname}` : 'None'}`, true)
        .addField("ID:", `${user.id}`, true)

        message.channel.send(embed)
    }}