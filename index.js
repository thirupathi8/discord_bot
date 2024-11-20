import { Client, GatewayIntentBits, Message } from 'discord.js';
import 'dotenv/config'
const client = new Client({ intents: [GatewayIntentBits.Guilds, GatewayIntentBits.GuildMessages, GatewayIntentBits.MessageContent] });

//server server
// const target_id = "1002555749429428294"

//experiments
const target_id = "1308819458009333770"

client.login(process.env.BOT_KEY)

client.on("messageCreate", async (message) => {
    if (message.author.bot)
        return
    if (message.mentions.roles.has(target_id)) {
        try {
            const member = await message.guild.members.fetch(message.author.id);
            const displayName = member.nickname || message.author.username;
            // console.log(message)
            message.reply(`${displayName}!! Go touch some grass man Jeeeeeez`)
        }
        catch (error) {
            console.error('Error fetching member:', error);
        }
    }
})