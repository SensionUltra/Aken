const ms = require('ms')
const { MessageEmbed } = require('discord.js')
const { prefix } = require('../../botconfig/config.json')

module.exports = {
    name: "help",
    aliases: ['h', 'commands'],
    category: "info",
    run: async(client, message, args) => {

        let helpArray = message.content.split(" ");
        let helpArgs = helpArray.slice(1);

        if (!helpArgs[0]) {

            let embed = new MessageEmbed()
                .setTitle(`:mailbox_with_mail: Need help? Here are all of my commands`)
                .setDescription(`**My Prefix Is \`${prefix}\`\n\nFor Help Related To A Particular Command Type -\n\`${prefix}help [command name]\`**`)
                .addField(`Info [2] - `, '`help`, `ping`')
                .addField(`General [1] - `, '`avatar`')
                .addField(`Other [1] - `, '`djs`, `prefix`, `prefix-reset`')
                .addField(`Music [15] - `, '`play`, `stop`, `autoplay`, `filter`, `foward`, `loop`, `nowplaying`, `pause`, `queue`, `resume`, `rewind`, `seek`, `shuffle`, `skip`, `volume`')
                .setFooter(`${message.guild.me.displayName} | Total Commands - ${client.commands.size - 1} Loaded`, client.user.displayAvatarURL());

            message.channel.send(embed)
        }

        if(helpArgs[0]) {}
        let command = helpArgs[0];

        command = client.commands.get((command));
        try {
            let embed2 = new MessageEmbed()
                .setTitle(`Command: ${prefix}${command.name}`)
                .setDescription(`
            **Description:** ${command.description || "No description was provided"}
            **Usage:** ${prefix}${command.name} ${command.usage || " "}
            **Category:** ${command.category || "No category was provided"} 
            **Aliases:** ${command.aliases || "No alias was provided"}
            `)

            message.channel.send(embed2)
        }catch {

        }
    }

}
