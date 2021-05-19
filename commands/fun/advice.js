const { Random } = require("something-random-on-discord")
const random = new Random();

module.exports = {
  name: "advice",
  category: "fun",
  description: "Get some advice",
  run: async (client, message, args) => {
    
    let data = await random.getAdvice()
    message.channel.send(data)
    
  }
}