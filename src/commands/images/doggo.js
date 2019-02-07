const { Command } = require('discord.js-commando');
const neko        = require('../../modules/neko.js');

module.exports = class DoggoCommand extends Command {
    
    constructor(Bot) {
        super(Bot, {
            name: 'doggo',
            group: 'images',
            memberName: 'doggo',
            description: 'Sends an image of a dog',
            guildOnly: true
        });
    }

    run(message) {
        neko.SFW(message);
    }
}