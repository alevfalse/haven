const { Command } = require('discord.js-commando');
const neko        = require('../../modules/neko.js');

module.exports = class HugCommand extends Command {
    
    constructor(Bot) {
        super(Bot, {
            name: 'tickle',
            group: 'images',
            memberName: 'tickle',
            description: 'Sends a tickle GIF',
            guildOnly: true,
            throttling: {
                usages: 1,
                duration: 60
            }
        });
    }

    run(message) {
        return neko.SFW(message);
    }
}