const Discord = require("discord.js")

module.exports.run = async (bot, message) => {

  let emb = new Discord.RichEmbed()
  .setTitle("Aliases ")
  .setColor("#FF0000")
  .addField("Play", ">p")
  .addField("Help", ">h")
  .addField("Invite", ">inv")
  .addField("Now Playing", ">np")
  .addField("Stats", ">st")
  .addField("Queue", ">q")

  message.channel.send(emb).then(m => m.react("👏"))
  

    }

module.exports.config = {
  aliases: [ ]
}

    module.exports.help = {
        name: "aliases"
    }