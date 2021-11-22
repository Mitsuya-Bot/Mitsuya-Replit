const { MessageEmbed } = require("discord.js");

module.exports = {
  name: "invite",
  aliases: ["inv"],
  description: "Invite the bot to your server.",
  execute(message) {

    let inviteEmbed = new MessageEmbed()
      .setTitle("༺═────────═༻\n")
      .setDescription("please Vote Kaixin!\none vote means for me and the team to be able to develop the latest features from Kaixin.\n\n :rotating_light: **Vote Link:-** https://top.gg/bot/854995760105652254/vote\n\n :rotating_light: **Invite Bot:-** https://discord.com/oauth2/authorize?client_id=904032472755499099&permissions=327558298918&scope=bot\n\n :rainbow: **You can vote again in 12hour!**\n༺═────────═༻")
      .setColor("#F0EAD6")
      .setAuthor('Kaixin | Vote','https://cdn.discordapp.com/attachments/859434771205324811/906420028444934154/b9f4681d0af088ea8eb009f84bd51e06.jpg')
      .setThumbnail(message.guild.iconURL())
      .setImage("")

    inviteEmbed.setTimestamp();

    return message.channel.send(inviteEmbed).catch(console.error);
  }
};