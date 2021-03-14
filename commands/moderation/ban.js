const Discord = require('discord.js')

module.exports = {
    name: "ban",
    description: "kicks a member from the guild",
    usage: "<@user>",
    run: (client, message, args) => {
        if(message.channel.type == 'DM') return;
        if(!message.member.hasPermission('BAN_MEMBERS')) return msg.channel.send("You can\`t run this command");
        if(!message.guild.me.hasPermission('BAN_MEMBERSS')) return msg,channel.send("I don\'t have the \`\`\`BAN_MEMBERS\`\`\` Permission")
        let toBan = message.mentions.members.first();
        let reason = args.slice(1).join(" ");
        if(!args[0]) return message.channel.send('Please mention someone to ban');
        if(!toBan) return message.channel.send(`${args[0]} is not a member.`);
        if(!reason) return message.channel.send('Specify a reason.');
 
        if(!toBan.bannable){
            return message.channel.send('<a:CoolX:807041416735621160> I cannot ban someone that is mod/admin. <a:CoolX:807041416735621160>');
        }
 
        if(toBan.bannable){
            let x = new Discord.MessageEmbed()
            .setTitle('Ban')
            .addField('Member Banned', toBan)
            .addField('Banned by', message.author)
            .addField('Reason', reason)
            .setColor('#ffc8dd');
 
            message.channel.send(x);
            toBan.ban();
        }}
    }