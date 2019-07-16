exports.run = async(client, message, args) => {
  const queue = client.queue;
		const serverQueue = queue.get(message.guild.id);
		if (!serverQueue) return message.channel.send("There's nothing playing right now");

		const nowplaying = `**${serverQueue.songs[0].title}**`;
		return message.channel.send(nowplaying);
}

exports.config = {
  aliases: ['np']
}

exports.help = {
    name: 'nowplaying'
}