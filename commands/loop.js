//loop command made by clorox_bleach#0001 on discord :)

const discord = require('discord.js');

exports.run = async(client, message, args) => {
  
  const queue = client.queue;
	const serverQueue = queue.get(message.guild.id);
  
  if (!message.member.voiceChannel) {
    return message.channel.send("Join a voice channel first")
  }
  
  
  let embed = new discord.RichEmbed()
  .setTitle('Loop Menu')
  .setColor("#FF0000")
  .setDescription('To loop the song that is currently playing respond with **song**.\n\nTo loop the queue respond with **queue**.\n\nTo turn off the song looping respond with **off**.')
  message.channel.send(embed)
  let response;
  try {
    response = await message.channel.awaitMessages(msg2 => msg2.content && message.author.id === msg2.author.id, {
      max: 1,
      time: 90000,
      errors: []
    })
  } catch(err) {
    return message.channel.send('You did not respond in time.')
  }
  if (response.first().content.toLowerCase() === 'song') {
    serverQueue.loop = "song"
    return message.channel.send('The current song will now be looped.')
  } else if (response.first().content.toLowerCase() === 'queue') {
    serverQueue.loop = "queue"
    return message.channel.send('The queue will now be looped.');
  } else if (response.first().content.toLowerCase() === 'off' && serverQueue.loop === "song") {
    serverQueue.loop = "off"
    return message.channel.send('The current song will no longer be looped.');
  } else if (response.first().content.toLowerCase() === 'off' && serverQueue.loop === "queue") {
    serverQueue.loop = "off"
    return message.channel.send('The queue will no longer be looped.')
  } else if (response.first().content.toLowerCase() === 'off' && serverQueue.loop === "off") {
    return message.channel.send('Nothing is currently being looped.')
  } 
}

exports.config = {
  aliases: []
}

exports.help = {
  name: 'loop'
}