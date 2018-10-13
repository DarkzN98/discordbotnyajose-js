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
		if(args.length == 0)
		{
			let helpEmbed = new Discord.RichEmbed()
			.setColor("#00AE86")
			.setTitle("Help")
			.setDescription("Do `;help <command>` for extended information on a command.")
			.addField("Instagram Commands","`;cekig` \n `;fotoig`", true)
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
		else if(args[0] === "fotoig")
		{
			let helpEmbed = new Discord.RichEmbed()
			.setColor("#ff0000")
			.setTitle(";fotoig")
			.setDescription("Show Instagram Account Posts")
			.addField("Usage", "`;fotoig <username>`\n`;fotoig <username> <postCount>`", true)
			.addField("Example","`;fotoig awesomeman123`\n`;fotoig awesomeman123 2`",true)
			;
			message.channel.send(helpEmbed);
		}
		else if(args[0] === "help")
		{
			let helpEmbed = new Discord.RichEmbed()
			.setColor("#ff0000")
			.setTitle(";help")
			.setDescription("Show This Help")
			.addField("Usage", "`;help` \n `;help <command>`", true)
			.addField("Example","`;help invite`",true)
			;
			message.channel.send(helpEmbed);
		}
	}

	if(command === `${prefix}cekig`)
	{
		//create request with its porperties
		if(args.length != 0)
		{
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
		else
		{
			let fotoigembed = new Discord.RichEmbed()
			.setTitle("Error")
			.setColor("#FF0000")
			.setDescription("Invalid Amount of Argument, please do `;help cekig` for more info");
			;
			return message.channel.send(fotoigembed);
		}
			
	}

	if(command === `${prefix}fotoig`)
	{
		//create request with its porperties
		if(args.length != 0)
		{
			var request = require('request');
			request('https://www.instagram.com/'+args[0]+"/", function(error, response, body)
			{			
				if(response.statusCode == 404)
				{
					return message.channel.send("Username Not Found!");
				}
				else
				{
					var isPrivate = " ";
		            isPrivate = body.substring(body.indexOf("is_private"));
		            isPrivate = isPrivate.substring(isPrivate.indexOf("\":"), isPrivate.indexOf(",\""));
		            isPrivate = isPrivate.replace("\":","");

		            if(isPrivate == "true")
		            {
		            	let fotoigembed = new Discord.RichEmbed()
						.setTitle("Instagram Photo")
						.setColor("#FF0000")
						.setDescription("Sorry, this profile is Private");
						;
						return message.channel.send(fotoigembed);
		            }
		            else
		            {
		            	// console.log("------edges------");
						var edges = body.substring(body.indexOf("\"edge_owner_to_timeline_media\""),body.indexOf("},\"edge_saved_media\":"));

						//get edges count
						var edgesCount = edges.substring(edges.indexOf("\"count\":"));
						edgesCount = edgesCount.substring(0,edgesCount.indexOf(","));
						edgesCount = edgesCount.substring(edgesCount.indexOf(":")+1);

						//getPosts
						edges = edges.substring(edges.indexOf("\"edges\":"));
						var postCount = edgesCount;

						// console.log(edges);
						// console.log("Edges Count = " + edgesCount);

						if(postCount == 0)
						{
							let fotoigembed = new Discord.RichEmbed()
							.setTitle("Instagram Photo")
							.setColor("#FF0000")
							.setDescription("Sorry, this profile has no Pictures/Posts");
							;
							return message.channel.send(fotoigembed);
						}
						else if(postCount > 12)
						{
							postCount = 12;
							console.log("Post lebih dari 12");
						}

						//getpost insert to array
						var posts = [];
						var postsdesc = [];
						//var lastIndex = -1;

						for (var i = 0; i < postCount; i++) 
						{
							console.log("");
							console.log("--Node" + i + "--");
							//0 = nodeOri
							//1 = type
							//2 = display_url
							//3 = edge_liked_by
							//4 = edge_media_to_comment count
							//5 = taken_at_timestamp
							//6 = comments_disabled
							//7 = is_video
							//8 = text

							posts.push(new Array("","","","","","","","",""));
							//console.log(edges.substring(edges.indexOf("{\"node\":\"__typename\":")));
							//if(thisnode typename == vedio then search for video)
							posts[i][0] = edges.substring(edges.indexOf("\"node\":{\"__typename\":"));
							posts[i][1] = posts[i][0].substring(0, posts[i][0].indexOf("\","));
							posts[i][1] = posts[i][1].substring(posts[i][1].lastIndexOf("\"") +1);

							if(i != postCount-1)
							{
								if(posts[i][1] == "GraphImage")
								{
									posts[i][0] = posts[i][0].substring(0,posts[i][0].indexOf("},",posts[i][0].indexOf("accessibility_caption")));
									edges = edges.substring(posts[i][0].length);
								}
								else if(posts[i][1] == "GraphSidecar")
								{
									posts[i][0] = posts[i][0].substring(0,posts[i][0].indexOf("},",posts[i][0].indexOf("accessibility_caption")));
									edges = edges.substring(posts[i][0].length);
								}
								else if(posts[i][1] == "GraphVideo")
								{
									posts[i][0] = posts[i][0].substring(0,posts[i][0].indexOf("},",posts[i][0].indexOf("video_view_count")));
									edges = edges.substring(posts[i][0].length);
								}
							}
							else
							{
								posts[i][0] = posts[i][0].substring(0,posts[i][0].lastIndexOf("]") - 1);
							}

							// Process eachNode
							//find DisplayURL
							posts[i][2] = posts[i][0].substring(posts[i][0].indexOf("\"display_url\":") + 15);
							posts[i][2] = posts[i][2].substring(0,posts[i][2].indexOf("\","));
							// find Like
							posts[i][3] = posts[i][0].substring(posts[i][0].indexOf("\"edge_liked_by\":") + 25);
							posts[i][3] = posts[i][3].substring(0,posts[i][3].indexOf("}"));
							// find comment
							posts[i][4] = posts[i][0].substring(posts[i][0].indexOf("\"edge_media_to_comment\":") + 33);
							posts[i][4] = posts[i][4].substring(0,posts[i][4].indexOf("}"));
							// find timestamp
							posts[i][5] = posts[i][0].substring(posts[i][0].indexOf("\"taken_at_timestamp\":") + 21);
							posts[i][5] = posts[i][5].substring(0,posts[i][5].indexOf(","));
							// find comments_disabled
							posts[i][6] = posts[i][0].substring(posts[i][0].indexOf("\"comments_disabled\":") + 20);
							posts[i][6] = posts[i][6].substring(0,posts[i][6].indexOf(","));
							// find is_video
							posts[i][7] = posts[i][0].substring(posts[i][0].indexOf("\"is_video\":") + 11);
							posts[i][7] = posts[i][7].substring(0,posts[i][7].indexOf(","));
							// find text
							
							if(posts[i][0].indexOf("\"text\":") == -1)
							{
								posts[i][8] = "This Image Has No Caption";
							}
							else
							{
								posts[i][8] = posts[i][0].substring(posts[i][0].indexOf("\"text\":") + 8);
								posts[i][8] = posts[i][8].substring(0,posts[i][8].indexOf("\"}"));
							}
							
							console.log("POST TYPE = " + posts[i][1]);
							console.log("display_url = " + posts[i][2]);
							console.log("Liked By = " + posts[i][3]);
							console.log("Commented by = " + posts[i][4]);
							console.log("timestamp = " + posts[i][5]);
							console.log("comments disabled = " + posts[i][6]);
							console.log("is_video = " + posts[i][7]);
							console.log("text = " + posts[i][8]);
							console.log();
							console.log("---END NODE---");
							
							//posts[i][node] = edges.substring
						}

						if(args.length == 1)
						{
							//get the first info
							let fotoigembed = new Discord.RichEmbed()
							.setTitle("INFO : ")
					    	.setColor("00ff00")
				            .setImage(posts[0][2])
				            .addField("Caption", posts[0][8])
				            .addField("Like : ", posts[0][3],true)
				            .addField("Comment Count : ", posts[0][4],true)
				            .addField("Timestamp : ",posts[0][5],true)
				            .addField("Comments Disabled :" ,posts[0][6],true)
				            .addField("is_video : ",posts[0][7],true)
				            ;
							return message.channel.send(fotoigembed);
						}
						else
						{
							if(args[1] > 12)
							{
								let fotoigembed = new Discord.RichEmbed()
								.setTitle("INFO : ")
						    	.setColor("00ff00")
						    	.setDescription("Please input a valid amount (1-12)")
						    	;
								return message.channel.send(fotoigembed);
							}
							else if(args[1] > postCount)
							{
								let fotoigembed = new Discord.RichEmbed()
								.setTitle("INFO : ")
						    	.setColor("00ff00")
						    	.setDescription("Sorry, but this user only has " + postCount + " posts")
						    	;
								return message.channel.send(fotoigembed);
							}
							else if(args[1]-1 < 0)
							{
								let fotoigembed = new Discord.RichEmbed()
								.setTitle("INFO : ")
						    	.setColor("00ff00")
						    	.setDescription("Please input a valid amount (1-12)")
						    	;
								return message.channel.send(fotoigembed);
							}
							else
							{
								let fotoigembed = new Discord.RichEmbed()
								.setTitle("INFO : ")
						    	.setColor("00ff00")
					            .setImage(posts[args[1]-1][2])
					            .addField("Caption", posts[args[1]-1][8])
					            .addField("Like : ", posts[args[1]-1][3],true)
					            .addField("Comment Count : ", posts[args[1]-1][4],true)
					            .addField("Timestamp : ",posts[args[1]-1][5],true)
					            .addField("Comments Disabled :" ,posts[args[1]-1][6],true)
					            .addField("is_video : ",posts[args[1]-1][7],true)
					            ;
								return message.channel.send(fotoigembed);
							}
						}
		            }
				}
			});
		}
		else 
		{
			let fotoigembed = new Discord.RichEmbed()
			.setTitle("Error")
			.setColor("#FF0000")
			.setDescription("Invalid Amount of Argument, please do `;help fotoig` for more info");
			;
			return message.channel.send(fotoigembed);
		}
	}

});

bot.login(process.env.token);

