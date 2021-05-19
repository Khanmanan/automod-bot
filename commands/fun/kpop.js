const { Random } = require("something-random-on-discord")
const random = new Random();

module.exports = {
  name: "kpop",
  category: "fun",
  description: "Get some kpop singers images with names",
  run: async (client, message, args) => {
    
    let data = await random.getKpop()
    message.channel.send(data)
    
  }
}