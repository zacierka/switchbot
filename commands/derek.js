const fetch = require('node-fetch');
const { MessageEmbed } = require('discord.js');

exports.run = (client, message, args) => {
    // inside a command, event listener, etc.
    const embed = new MessageEmbed()
        .setColor('#B96819')
        .setThumbnail('https://servers-live.fivem.net/servers/icon/m3x69d/-541801529.png')
        .setTimestamp()
        .setTitle('No, Not in City')
        .setFooter({
            text: 'ebotclique'
        });
    let url = `http://${process.env.RP_ADDR}`;

    let settings = {
        method: "Get"
    };
    let isDerek = false;

    fetch(url, settings)
        .then(res => res.text())
        .then((text) => {
            const player_list = JSON.parse(text);
            for (var i = 0; i < player_list.length; i++) {
                if (player_list[i].name == "Revik")
                    isDerek = true;
            }
        });

    if(isDerek)
    {
        embed.title = "Yes, in the City"
    }

    message.channel.send({ embeds: [embed] });
}

exports.name = "derek";
exports.alias = [];