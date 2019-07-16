exports.run = async(client, message, args) => {
  const queue = client.queue;
	const serverQueue = queue.get(message.guild.id);
		if (serverQueue && serverQueue.playing) {
			serverQueue.playing = false;
			serverQueue.connection.dispatcher.pause();
			return message.channel.send('The song has been paused');
		}
		return message.channel.send('What is there to pause... life');
}

exports.config = {
  aliases: []
}

exports.help = {
    name: 'pause'
}