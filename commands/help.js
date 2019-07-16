const Discord = require("discord.js");

exports.run = async (client, message, args) => {
            const embed = new Discord.RichEmbed()
                .setColor('#FF0000')
                .addField("Play", "You can send a url or you can say the song name")
                .addField("Pause", "It pauses the song your currently playing")
                .addField("Resume", "The song that was paused recently play's again from we're you left off")
                .addField("Stop", "Stop's the queue and leaves the voice channel")
                .addField("Shuffle", "Randomly selects a song in your queue")
                .addField("Queue", "The song's you added")
                .addField("Join", "Forces Melody to join the voice channel")
                .addField("Now Playing", "The song's that's currently playing")
                .addField("Ping", "Sends the bot ping")
                .addField("Skip", "Skip's the song your playing")
                .addField("Stats", "Sends a little more info about Melody")
                .setFooter('Use >changelog to keep up to date')
                .setTimestamp(); 
  
                message.channel.send(embed).then(m => m.edit('This is my help list'));
                message.delete();
  
}
exports.config = {
  aliases: ['h']
}
exports.help = {
    name: "help"
};