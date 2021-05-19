const { Random } = require("something-random-on-discord")
const random = new Random();

module.exports = {
  name: "neko",
  category: "Image",
  description: "Get some neko images",
  run: async (client, message, args) => {
    
    let data = await random.getNeko()
    message.channel.send(data)
    
  }
}