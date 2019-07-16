exports.run = async(client, message, args) => {
	const queue = client.queue;
	const serverQueue = queue.get(message.guild.id);
	if (!message.member.voiceChannel) return message.channel.send('You are not in the same voice channel as me.');
	if (!serverQueue) return message.channel.send('There is nothing to skip');
	await serverQueue.connection.dispatcher.destroy();
}

exports.config = {
  aliases: []
}

exports.help = {
  name: 'skip'
}