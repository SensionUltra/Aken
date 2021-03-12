const { MessageEmbed } = require("discord.js")

module.exports = {
    name: "ping",
    description: "Sends the ping",
    category: "info",
    run: async(client, message, args) => {
        const msg = await message.channel.send('Calculating Ping...')

        const latency = msg.createdTimestamp - message.createdTimestamp

        msg.edit(`:ping_pong: Ping: \`${latency}ms\` | Websocket: \`${client.ws.ping}ms\``)
}}