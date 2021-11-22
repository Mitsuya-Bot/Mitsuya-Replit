const { Client, Collection, MessageEmbed } = require(`discord.js`);
const {
  PREFIX,
  approveemoji,
  denyemoji
} = require(`../config.json`);

module.exports = {
  name: `uptime`,
  description: `Gives you the uptime of the Bot`,
  aliases: [],
  cooldown: 5,
  edesc: "With that you can see how long the Bot has been running nonstop",
  execute(message, args, client) {
    let days = Math.floor(client.uptime / 86400000);
    let hours = Math.floor(client.uptime / 3600000) % 24;
    let minutes = Math.floor(client.uptime / 60000) % 60;
    let seconds = Math.floor(client.uptime / 1000) % 60;
    //react with approve emoji
    message.react("✅");
    return message.channel.send(new MessageEmbed()
    .setColor("#F0EAD6")
    .setImage("https://cdn.discordapp.com/attachments/859434771205324811/906017529401606144/Spanduk_Papan_Tulis_Selamat_Datang_Papan_Tulis_Kapur_4.gif")
    .setTitle(`༺═─────Uptime──────═༻\n\n:clock1: \`${days}d\` \`${hours}h\` \`${minutes}m\` \`${seconds}s\n\`\n❓What is Uptime:-\nUptime is the amount of time (in days, hours, and minutes) a server, network, or website has been running (up).`));


  }
}