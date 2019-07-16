exports.run = (client, message, args, shard) => {

  if(!message.author.id === '437578122100211713') return message.channel.send("This command is currently in beta form")
  
let answers = [
//Postive
"There's only 1 shard",
  "There's 2 shards :)",
  "There's 0 shards"
];
  
let answer = answers[Math.floor(Math.random() * answers.length)];

message.channel.send(answer);
}

exports.config = {
aliases: [ ]
};

exports.help = {
name: "shard"
}