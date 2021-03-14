const { MessageEmbed } = require("discord.js");

const { prefix } = require('../../botconfig/config.json')
module.exports = {
  name: "about",
  usage: " ",
  aliases: ['info', 'botinfo', 'stats'],
  cooldown: 3,
  run: (client, message, args) => {
    let totalSeconds = client.uptime / 1000;
    let days = Math.floor(totalSeconds / 86400);
    totalSeconds %= 86400;
    let hours = Math.floor(totalSeconds / 3600);
    totalSeconds %= 3600;
    let minutes = Math.floor(totalSeconds / 60);
    let seconds = Math.floor(totalSeconds % 60);

    let uptime = `${days} days, ${hours} hrs, ${minutes} mins, ${seconds} sec!`;

    const embed = new MessageEmbed()
      .setAuthor("About")
      .setDescription(`Information About **${client.user.username}!**`)
      .addField("Created By:", "Awoken#3698", true)
      .addField("Commands Loaded:", `${client.commands.size - 1}`, true)
      .addField("Uptime:", `${uptime}`, true)
      .addField('Servers:', `${client.guilds.cache.size}`, true)
      .addField('Prefix:', `${prefix}`, true)
      .addField('Users:', `${client.guilds.cache.reduce((c, g) => c + g.memberCount, 0)}`, true)
      .addField('Website:', 'PlaceHolder', true)
      .addField('Invite:', 'PlaceHolder', true)
      .addField('Support:', 'PlaceHolder', true)
      
      message.channel.send(embed);
  },
};