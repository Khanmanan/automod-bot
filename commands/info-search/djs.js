const fetch = require("node-fetch");

module.exports = {
     
        name: "discord",
        category: "search",
        aliases: ["discorddocs", "djs", "docs"],
    
    run: async(client, message, args) => {
        const search = args[0];
        if (!search) return message.channel.send({
            embed: {
                "color": 0x4D5E94,
                "description": "❌ **What are you searching?**"

            }
        });
        let version = args[1];
        if (!version) version = `stable`;

        fetch(`https://djsdocs.sorta.moe/v2/embed?src=${encodeURIComponent(version)}&q=${encodeURIComponent(search)}`)
            .then(res => res.json())
            .then(body => {
                if (body === null) return message.channel.send({
                    embed: {
                        "color": 0x4D5E94,
                        "author": {
                            "name": "Discord.js Docs (master)",
                            "url": "https://discord.js.org/#/docs/main/master",
                            "icon_url": "https://discord.js.org/favicon.ico"
                        },
                        "title": "Search results:",
                        "description": "❌ **No results.**"
                    }
                });
                body.color = 0x4D5E94;
                message.channel.send({ embed: body });
            })
            .catch(e => {
                message.channel.send({
                    embed: { "color": 0x4D5E94, "author": { "name": "Discord.js Docs (master)", "url": "https://discord.js.org/#/docs/main/master", "icon_url": "https://discord.js.org/favicon.ico" }, "title": "Search results:", "description": "No results." }
                });
            });
    }
}