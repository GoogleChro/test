const Discord = require("discord.js")

module.exports.run = async (bot, message) => {

  let emb = new Discord.RichEmbed()
  .setTitle("Changelog 1.0")
  .setColor("#FF0000")
  .setDescription("I've fixed the eval command now no one except me and the devs can use it\n\n Music commands were recently updated we were able to find the solution of not able to find songs\n\n Added a new command called Aliases ")
  .setTimestamp()

  message.channel.send(emb).then(m => m.react("👍"))
  

    }

module.exports.config = {
  aliases: [ ]
}

    module.exports.help = {
        name: "changelog"
    }