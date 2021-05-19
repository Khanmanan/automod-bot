const { chatBot } = require('reconlx') 

module.exports = {
    name : 'c',
    category: 'fun',
    run : async(client, message, args) => {
        chatBot(message, args.join(" "))
    }
}