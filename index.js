const { ShardingManager } = require('discord.js');
const manager = new ShardingManager('./events/message.js', { token: 'NTkxNjQyMTU0ODk2NTg4ODQw.XRtLYA.GXqNNBTd-YzCudvIrvkr1c-ckEE' });

manager.spawn();
manager.on('launch', shard => console.log(`Launched shard ${shard.id}`));