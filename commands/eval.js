const Discord = require("discord.js");

module.exports.run = async (client, message, args) => {
 let embed = new Discord.RichEmbed()
  .setTitle("Evaluation")
  .setDescription("Sorry, the `eval` command can only be executed by the Bot Owner.")
  .setColor("#cdf785");
  if(message.author.id !== '437578122100211713') return message.channel.send(embed);
  function clean(text) {
  if (typeof(text) === "string")
    return text.replace(/`/g, "`" + String.fromCharCode(8203)).replace(/@/g, "@" + String.fromCharCode(8203));
  else
      return text;
}try {
      const code = args.join(" ");
      let evaled = eval(code);
      let rawEvaled = evaled;
      if (typeof evaled !== "string")
        evaled = require("util").inspect(evaled);
  
  if (evaled.length >= 1024) {
            var tooLong = new Discord.RichEmbed()
            .setTitle(`Whoops! Too long!`)
            .addField(`${evaled.length} characters!`, "That's past the charcacter limit! You can find the output in the console.");
            message.channel.send({embed: tooLong});
            console.log(evaled);
            return;
        }

  let embed = new Discord.RichEmbed()
      .setTitle(`Evaluated in ${Math.round(client.ping)}ms`)
      .addField(":inbox_tray: Input", `\`\`\`js\n${code}\n\`\`\``)
      .addField(":outbox_tray: Output", `\`\`\`js\n${clean(evaled).replace(client.token, "Are u retarded?")}\n\`\`\``)
      .addField('Type', `\`\`\`xl\n${(typeof rawEvaled).substr(0, 1).toUpperCase() + (typeof rawEvaled).substr(1)}\n\`\`\``)
      .setColor('GREEN');
      message.channel.send({embed});
    } catch (err) {
      
      message.channel.send(`\`ERROR\` \`\`\`js\n${clean(err)}\n\`\`\``);
    }
}

exports.config = {
    aliases: [ 'ev' ]
};

module.exports.help = {
  name: "eval"
}