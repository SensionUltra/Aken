const Discord = require('discord.js')

module.exports = {
    name: "kick",
    description: "kicks a member from the guild",
    usage: "<@user>",
    run: (client, message, args) => {
        if(message.channel.type == 'DM') return;
        if(!message.member.hasPermission('KICK_MEMBERS')) return msg.channel.send("You can\`t run this command");
        if(!message.guild.me.hasPermission('KICK_MEMBERS')) return msg,channel.send("I don\'t have the \`\`\`KICK_MEMBERS\`\`\` Permission")
        let toKick = message.mentions.members.first();
        let reason = args.slice(1).join(" ");
        if(!args[0]) return message.channel.send('Please mention someone to kick');
        if(!toKick) return message.channel.send(`${args[0]} is not a member.`);
        if(!reason) return message.channel.send('Specify a reason.');

        if(!toKick.kickable){
            return message.channel.send(':x: I cannot kick someone that is mod/admin. :x:');
        }
 
        if(toKick.kickable){
            let embed = new Discord.MessageEmbed()
            .setTitle('Kick')
            .addField('Member Kicked', toKick)
            .addField('Kicked by', message.author)
            .addField('Reason', reason)
            .setColor('#ffc8dd');
 
            message.channel.send(embed);
            toKick.kick();
        }
    }
    }