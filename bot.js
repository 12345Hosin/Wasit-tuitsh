const Discord = require("discord.js");
const client = new Discord.Client();
var prefix = "+";
client.on('ready', () => {
   console.log(`----------------`);
      console.log(`Cyhper Bot Script By : DREAM`);
        console.log(`----------------`);
      console.log(`ON ${client.guilds.size} Servers '     Script By : DREAM ' `);
    console.log(`----------------`);
  console.log(`Logged in as ${client.user.tag}!`);
client.user.setGame(`سلوم`,"http://twitch.tv/سلوم")
client.user.setStatus("dnd")
});

client.login('NTgxMjEyMzMzMzcyNzM1NjA2.XRjzRw.AL1BLpy9HiqeHZpFks0muUBj6hI'
);// لا تغير فيها شيء
