
 client.on("message", async message => {
 if(message.author.bot) return; 
 if (message.content.startsWith("Comando")) { 

const { version } = require("discord.js");
const moment = require("moment");
const m = require("moment-duration-format");
let os = require('os')
let cpuStat = require("cpu-stat")
const ms = require("ms")
let cpuLol;
  cpuStat.usagePercent(function(err, percent, seconds) {
      if (err) {
          return console.log(err);
      }
      const duration = moment.duration(client.uptime).format(" D [days], H [hrs], m [mins], s [secs]");
      const botinfo = new Discord.MessageEmbed()
          .setAuthor(client.user.username)
          .setTitle("__**Stats:**__")
          .setColor("#6064f4")
          .addField("⏳ Memoria", `${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)} / ${(os.totalmem() / 1024 / 1024).toFixed(2)} MB`, true)
          .addField("⌚️ Online ", `${duration}`, true)
          .addField("📁 Usuarios", `${client.users.cache.size}`, true)
          .addField("📁 Servidores", `${client.guilds.cache.size}`, true)
          .addField("📁 Canales ", `${client.channels.cache.size}`, true)
          .addField("👾 Discord.js", `v${version}`, true)
          .addField("🤖 Node", `${process.version}`, true)
          .addField("🤖 CPU", `\`\`\`md\n${os.cpus().map(i => `${i.model}`)[0]}\`\`\``)
          .addField("🤖 CPU usado", `\`${percent.toFixed(2)}%\``, true)
          .addField("🤖 Arch", `\`${os.arch()}\``, true)
          .addField("💻 Plataforma", `\`\`${os.platform()}\`\``, true)
          .addField("API Latencia", `${(client.ws.ping)}ms`)  
      message.channel.send(botinfo)
  });

} 
});
