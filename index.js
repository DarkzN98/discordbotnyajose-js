const botconfig = require("./botconfig.json");
const Discord = require("discord.js");

const bot = new Discord.Client({disableEveryone: true});

bot.on("ready", async () => {
	console.log(`${bot.user.username} is online!`);
});

bot.on("message", async message => {
	if(message.author.bot) return;
	if(message.channel.type === "dm") return;

	let prefix = botconfig.prefix;
	let messageArray = message.content.split(" ");
	let command = messageArray[0];
	let args = messageArray.slice(1);

	//say == command
	// hello args
	//!say hello

	if(command === `${prefix}hello`)
	{
		return message.channel.send("hello");
	}

	if(command === `${prefix}invite`)
	{
		return message.channel.send("Invite : https://discordapp.com/api/oauth2/authorize?client_id=499589289106210816&permissions=0&scope=bot");
	}

	if(command === `${prefix}help`)
	{
		if(args[0] == "undefined")
		{
			let helpEmbed = new Discord.RichEmbed()
			.setColor("#00AE86")
			.setTitle("Help")
			.setDescription("Do `;help <command>` for extended information on a command.")
			.addField("Instagram Commands","`;cekig`", true)
			.addField("Bot Commands","`;help` \n `;invite`",true)
			;
			message.channel.send(helpEmbed);
		}
		else if(args[0] === "invite")
		{
			let helpEmbed = new Discord.RichEmbed()
			.setColor("#ff0000")
			.setTitle(";invite")
			.setDescription("Send This Bot's Invite Link")
			.addField("Usage", "`;invite`", true)
			;
			message.channel.send(helpEmbed);
		}
		else if(args[0] === "cekig")
		{
			let helpEmbed = new Discord.RichEmbed()
			.setColor("#ff0000")
			.setTitle(";cekig")
			.setDescription("Check Instagram Account")
			.addField("Usage", "`;cekig <username>`", true)
			.addField("Example","`;cekig awesomeman123`",true)
			;
			message.channel.send(helpEmbed);
		}
		
	}

	if(command === `${prefix}cekig`)
	{
		
		//create request with its porperties
		var request = require('request');
		request('https://www.instagram.com/'+args[0]+"/", function(error, response, body)
		{			
			if(response.statusCode == 404)
			{
				return message.channel.send("Username Not Found!");
			}
			else
			{
				var instaID = args[0];
				var title = " ";
				title = body.substring(body.indexOf("<title>") + 7,body.indexOf("</title>"));
	            title = title.replace(" • Instagram photos and videos","");
	            title = title.replace("\n","");

	            //BIO
	            var bio = " ";
	            bio = body.substring(body.indexOf("biography\":\""));
	            bio = bio.substring(bio.indexOf("\":"));
	            bio = bio.replace("\":\"","");
	            bio = bio.substring(0,bio.indexOf("\""));
	            bio = bio.replace("\n","\\n");

	            if(bio == "")
	            {
	            	bio = "No Biography";
	            }

	            var externalLinks = " ";
	            //ExternalLinks
	            if(body.indexOf("external_url\":\"") != -1)
	            {
	                externalLinks = body.substring(body.indexOf("external_url\":\""));
	                externalLinks = externalLinks.substring(externalLinks.indexOf("\":"));
	                externalLinks = externalLinks.replace("\":\"","");
	                externalLinks = externalLinks.substring(0,externalLinks.indexOf("\""));
	            }
	            else
	            {
	                externalLinks = "No External Links";
	            }

	            //isPrivateState
	            var isPrivate = " ";
	            isPrivate = body.substring(body.indexOf("is_private"));
	            isPrivate = isPrivate.substring(isPrivate.indexOf("\":"), isPrivate.indexOf(",\""));
	            isPrivate = isPrivate.replace("\":","");

	            //getFollower,Following,Posts
	            var FFP_Info = " ";
	            FFP_Info = body.substring(body.indexOf("<meta content="));
	            FFP_Info = FFP_Info.substring(0,FFP_Info.indexOf(" -"));
	            FFP_Info = FFP_Info.replace("<meta content=\"","");

	            //get ProfilePict URL
	            var ppHDURL = " ";
	            ppHDURL = body.substring(body.indexOf("\"profile_pic_url_hd\":\""));
	            ppHDURL = ppHDURL.substring(22,ppHDURL.indexOf(".jpg")+4);

	            // console.log(title);
	            // console.log(bio);
	            // console.log(externalLinks);
	            // console.log(isPrivate);
	            // console.log(FFP_Info);
	            // console.log(ppHDURL);

	            let botembed = new Discord.RichEmbed()
	            .setTitle("INFO : ")
		    	.setColor("00ff00")
	            .setImage(ppHDURL)
	            .addField("Name : ", title)
	            .addField("Bio :", bio)
	            .addField("Follower, Following, Post : ",FFP_Info)
	            .addField("isPrivate :" ,isPrivate,true)
	            .addField("External Links : ",externalLinks,true)
	            .setFooter(instaID);
	            return message.channel.send(botembed);
			}
		});
		
		
	}

});

bot.login(process.env.token);

