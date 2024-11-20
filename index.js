import { Client, GatewayIntentBits } from 'discord.js';
import 'dotenv/config';

// Initialize Discord Client
const client = new Client({
  intents: [GatewayIntentBits.Guilds, GatewayIntentBits.GuildMessages, GatewayIntentBits.MessageContent],
});

//server server
// const target_id = "1002555749429428294"

//experiments
const target_id = "1308819458009333770"

// Log in to Discord
client.login(process.env.BOT_KEY);

client.on('messageCreate', async (message) => {
    // Ignore bot messages
    if (message.author.bot) return;

    // Check if the message mentions the target role
    if (message.mentions.roles.has(target_id)) {
        try {
            const member = await message.guild.members.fetch(message.author.id);
            const displayName = member.nickname || message.author.username;
            message.reply(`${displayName}!! Go touch some grass man Jeeeeeez`);
        } catch (error) {
            console.error('Error fetching member:', error);
        }
    }
});

// API route to check if the bot is running
export default function handler(req, res) {
  // This is where you can define a response for an HTTP request, e.g. to check bot status
  res.status(200).json({ message: 'Bot is running!' });
}
