const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on("guildMemberAdd", member => {
  member.createDM().then(function (channel) {
  return channel.send(`**
      كلنا نحتاج مكان نرتاح فيه 
       ونعبر عن الاحزان داخلنا !
          سيرفر حق فيديوهات محزنة وصور 
        باختصار سيرفر ديسكورد حزين وخلص 
		يلا خش او خشي تنورينا
		  Beyond the night

                                 [ https://discord.gg/cbVRRkG ] **`)
}).catch(console.error)
})

client.on("guildMemberRemove", member => {
  member.createDM().then(function (channel) {
  return channel.send(`**
     كلنا نحتاج مكان نرتاح فيه 
       ونعبر عن الاحزان داخلنا !
          سيرفر حق فيديوهات محزنة وصور 
        باختصار سيرفر ديسكورد حزين وخلص 
		يلا خش او خشي تنورينا
		  Beyond the night

                                 [ https://discord.gg/cbVRRkG ] **`)
}).catch(console.error)
})




client.login(process.env.BOT_TOKEN);// لا تغير فيها شيء
