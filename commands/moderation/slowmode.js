const Discord = require('discord.js')
module.exports = {
    name: "slowmode",
    aliases: ["slow"],
    description: "set the slowmode",
    usage: "slowmode",
    category: "moderation",
    run: (client, message, args) => {

        if (!message.member.hasPermission('MANAGE_CHANNELS')) return message.channel.send('You can\'t run this command!')
        if (!args[0]) return message.channel.send(`You didnt specify a time`)
        if(isNaN(parseInt(args[0]))) return message.channel.send('That is not a number')

        message.channel.setRateLimitPerUser(args[0])
        message.channel.send(`Slowmode was set to \`${args[0]}\` seconds!`)
    }}