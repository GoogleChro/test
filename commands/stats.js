const Discord = require("discord.js")
const os = require('os')
const cpuStat = require("cpu-stat");
const moment = require("moment") 

module.exports.run = (bot, message, args) => {
let { version } = require("discord.js");

cpuStat.usagePercent(function(err, percent, seconds) {
if (err) {
return console.log(err);
}

let totalSeconds = (bot.uptime / 1000);
let days = Math.floor(totalSeconds / 86400);
let hours = Math.floor(totalSeconds / 3600);
totalSeconds %= 3600;
let minutes = Math.floor(totalSeconds / 60);

let uptime = `${days} days, ${hours} hours, ${minutes} minutes and ${seconds} seconds`;
  
//let duration = moment.duration(bot.uptime).format(" D [days], H [hrs], m [mins], s [secs]");
const embed = new Discord.RichEmbed()
.setTitle("**Stats**")
.setColor("#FF0000")
.addField("Memory", `${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)} / ${(os.totalmem() / 1024 / 1024).toFixed(2)} MB`, true)
.addField("Uptime ", `${uptime}`, true) //`${duration}`, true)
.addField("Users", `${bot.users.size}`, true)
.addField("Servers", `${bot.guilds.size.toLocaleString()}`, true)
.addField("Channels ", `${bot.channels.size.toLocaleString()}`, true)
.addField("Discord.js", `v${version}`, true)
.addField("Voice Connections", `${bot.voice.connections.size}`)
.addField("Platform", `\`\`${os.platform()}\`\``,true)
.setFooter(`Stats for ${bot.user.username}`)

      message.channel.send("One Second, I am gathering all the intel").then(msg => {
        setTimeout(() => {
          msg.edit({ embed })
        }, 4000)
      })
    })
}


module.exports.config = {
  aliases: ['st']
}

module.exports.help = {
  name: "stats"
}