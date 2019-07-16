const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
    
    

    let msgping1 = new Date();

    let botping = new Date() - message.createdAt;

    let msgping2 = new Date() - msgping1;

    let pingembed = new Discord.RichEmbed()
        .setColor("#FF0000")
        .addField('API Ping : ', Math.floor(bot.ping) + 'ms')
        .addField('Bot Ping : ', Math.floor(botping) + 'ms')
        .addField('Message Ping : ', Math.round(msgping2) + 'ms')
        .setTimestamp(new Date())

        
    return message.channel.send(pingembed);
        

};

module.exports.config = {
  aliases: ['pi']
}

module.exports.help = {
    name: "ping"
};