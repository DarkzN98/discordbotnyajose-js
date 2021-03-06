const botconfig = require("./botconfig.json");
const Discord = require("discord.js");

const bot = new Discord.Client({disableEveryone: true});

var listenGiveaway = false;
var itland_caption = '';
var ig_users = ['adrian.natabuwana','ameliadwijayani','d4cornia','darkzn98','enrichoglenns','fransisca_kartika','fxaucky','gabrielleakho','hwisesa23','j_harijadi','jamesjf7','katherinelimanu','kevin_setiabudi','kris_sastrabudi','lgc282','marcellino_ivan','marvel_bp','pindavin','richardgnwan','rickysulvoila','stella_vania_o_o','stev_evan','v_tan4869','williamhartanto25','yesthisisbobb','yongki40','yulius1122','zamoranochristian7','yosualexx','jmichael1711','julianto7314','jennychndr_'];
ig_users.sort();

// RSS PARSER
let Parser = require('rss-parser');
const parser = new Parser();

// SET STATUS
bot.on("ready", async () => {
	console.log(`${bot.user.username} is online!`);
	bot.user.setActivity("Jomblo Simulator: Hunt Wedok Edition",{type: 'PLAYING'});
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

	if(listenGiveaway)
	{
		// if mode is on
		var findGiveaway = false;

		if(command.toLowerCase().includes("giveaway"))
		{
			findGiveaway = true;
		}

		for(var i = 0; i < args.length; i++)
		{
			if(args[i].toString().toLowerCase().includes("giveaway"))
			{
				findGiveaway = true;
			}
		}

		if(findGiveaway)
		{
			return message.channel.send(`Jose Ikut ${message.author}`);
		}
		
	}

	if(command === `${prefix}startlistening`)
	{
		listenGiveaway = true;
		console.log("Started Listening To Giveaway");
	}

	if(command === `${prefix}stoplistening`)
	{
		listenGiveaway = false;
		console.log("Stopped Listening To Giveaway");
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
			.addField("Instagram Commands","`;cekig` \n`;fotoig`", true)
			.addField("Bot Commands","`;help` \n`;invite` \n`;clear`",true)
			;
			message.channel.send(helpEmbed);
		}
		else if(args[0] === "invite")
		{
			let helpEmbed = new Discord.RichEmbed()
			.setColor("#00FF00")
			.setTitle(";invite")
			.setDescription("Send This Bot's Invite Link")
			.addField("Usage", "`;invite`", true)
			;
			message.channel.send(helpEmbed);
		}
		else if(args[0] === "cekig")
		{
			let helpEmbed = new Discord.RichEmbed()
			.setColor("#00FF00")
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
			.setColor("#00FF00")
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
			.setColor("#00FF00")
			.setTitle(";help")
			.setDescription("Show This Help")
			.addField("Usage", "`;help` \n `;help <command>`", true)
			.addField("Example","`;help invite`",true)
			;
			message.channel.send(helpEmbed);
		}
		else if(args[0] == "clear")
		{
			let helpEmbed = new Discord.RichEmbed()
			.setColor("#00FF00")
			.setTitle(";clear")
			.setDescription("Clear Messagee")
			.addField("Usage", "`;clear <amount>`", true)
			.addField("Example","`;clear 5`",true)
			;
			message.channel.send(helpEmbed);
		}
		else if(args[0] == "itland")
		{
			var next_args = args.slice(1);
			if(next_args.length > 0)
			{
				if(next_args == 'changecaption')
				{
					let helpEmbed = new Discord.RichEmbed()
					.setColor("#00FF00")
					.setTitle(";itland changecaption")
					.setDescription("Change ITLand Post Caption")
					.addField("Usage", '`;itland changecaption <new_caption>`', true)
					.addField("Example", '`;itland changecaption Hello World!`',true);
					message.channel.send(helpEmbed);
				}
				else if(next_args == 'checkpost')
				{
					let helpEmbed = new Discord.RichEmbed()
					.setColor("#00FF00")
					.setTitle(";itland checkpost")
					.setDescription("Check if User Already Post ITLand Posters.\n Day Args is Optional!, List Days:\n**+ Senin\n+ Selasa\n+ Rabu\n+ Kamis\n+ Jumat\n+ Sabtu\n+ Minggu\n**")
					.addField("Usage", '`;itland checkpost`\n`;itland checkpost [day]`', true)
					.addField("Example", '`;itland checkpost`\n`;itland checkpost senin`',true);
					message.channel.send(helpEmbed);
				}
				else if(next_args == 'checkprivate')
				{
					let helpEmbed = new Discord.RichEmbed()
					.setColor("#00FF00")
					.setTitle(";itland checkprivate")
					.setDescription("Check if User's Insta Private Account ")
					.addField("Usage", '`;itland checkprivate`', true)
					.addField("Example", '`;itland checkprivate`',true);
					message.channel.send(helpEmbed);
				}
				else if(next_args == 'lookcaption')
				{
					let helpEmbed = new Discord.RichEmbed()
					.setColor("#00FF00")
					.setTitle(";itland lookcaption")
					.setDescription("Return Current Caption *(Caption That Will Be Compared)*")
					.addField("Usage", '`;itland lookcaption`', true)
					.addField("Example", '`;itland lookcaption`',true);
					message.channel.send(helpEmbed);
				}
				else if(next_args == 'lookjadwal')
				{
					let helpEmbed = new Discord.RichEmbed()
					.setColor("#00FF00")
					.setTitle(";itland lookjadwal [today]")
					.setDescription("Return Users That Must Post")
					.addField("Usage", '`;itland lookjadwal [today]`', true)
					.addField("Example", '`;itland lookjadwal`\n`;itland lookjadwal today`',true);
					message.channel.send(helpEmbed);
				}
				else
				{
					let errorEmbed = new Discord.RichEmbed()
					.setColor("#FF0000")
					.setTitle("No Such Command For ITLand")
					.setDescription(`There is no command for **${next_args.join(' ')}**`);
					message.channel.send(errorEmbed);
				}
			}
			else
			{
				let helpEmbed = new Discord.RichEmbed()
				.setColor("#00FF00")
				.setTitle("ITLand Help")
				.setDescription("Do `;help itland <command>` For Extended Information On A ITLand Command")
				.addField("ITLand Commands", '`;changecaption`\n`;checkpost`\n`;checkprivate`\n`;lookcaption`\n`;lookjadwal`', true);
				message.channel.send(helpEmbed);
			}
		}
	}

	if(command === `${prefix}simpengumuman`)
	{
		//REQUEST HTML
		var request = require('request');
		request("https://sim.stts.edu/feed", function(error, response, body)
		{	
			console.log(error);
			if(response.statusCode == 404)
			{
				return message.channel.send("Error 404~");
			}
			else
			{
				let Parser = require('rss-parser');
				let parser = new Parser();
				
				(async () => {
				
				let feed = await parser.parseURL('https://sim.stts.edu/feed');
				console.log(feed.title);
				
				var pengumumans = feed.items;
				
				// console.log(pengumumans);
				console.log("Total Pengumuman : " + pengumumans.length);
				
				var pengumumanEmbed = new Discord.RichEmbed()
				.setColor('#00FF00')
				.setTitle(feed.title)
				.setDescription("Total Pengumuman : " + pengumumans.length + "\nLink : https://sim.stts.edu");
				
				for	(var i = 0; i < 10; i++)
				{
					pengumumanEmbed.addField(pengumumans[i].title, pengumumans[i].link, true);
				}
				message.channel.send(pengumumanEmbed);

				})();
			}
		});
	}

	if(command === `${prefix}clear`)
	{
		if(!args[0])
		{
			return message.channel.send("Invalid Amount of Argument, please do `;help clear` for more info")
		}
		else
		{
			if(!message.member.hasPermission("MANAGE_MESSAGES"))
			{
				return message.reply("Cannot Manage Messages!")
			}
			else
			{
				message.channel.bulkDelete(args[0]).then(() => 
				{
					message.channel.send(`Cleared ${args[0]} messages.`).then(msg => msg.delete(5000));
				});
			}
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

					//loggging
					// console.log("--BODY--");
					// console.log(body);
					// console.log("--end Body--");

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
		            bio = bio.replace(/\\n/g, "\n");

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
		            ppHDURL = body.substring(body.indexOf("\"profile_pic_url_hd\":\"")+22);
		            // console.log("___now___");
		            // console.log(ppHDURL);
		            ppHDURL = ppHDURL.substring(0,ppHDURL.indexOf("\""));
		            // console.log("asdasd__");
		            // console.log(ppHDURL);
		            // console.log("_________");
		            // console.log("--DEBUG ISI--");

		            // console.log(title);
		            // console.log(bio);
		            // console.log(externalLinks);
		            // console.log(isPrivate);
		            // console.log(FFP_Info);
		            // console.log(ppHDURL);
		            // console.log("--END DEBUG ISI--");

		            let botembed = new Discord.RichEmbed()
		            .setTitle("INFO : ")
			    	.setColor("00ff00")
		            .setImage(ppHDURL)
		            .addField("Name : ", title + "https://www.instagram.com/"+args[0]+"/")
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
							//console.log("Post lebih dari 12");
						}

						//getpost insert to array
						var posts = [];
						var postsdesc = [];
						//var lastIndex = -1;

						for (var i = 0; i < postCount; i++) 
						{
							// console.log("");
							// console.log("--Node" + i + "--");
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
								posts[i][8] = posts[i][8].replace(/\\n/g, "\n");

								if(posts[i][8].length > 1024)
								{
									posts[i][8] = posts[i][8].substring(0,1024);
								}
								
							}
							
							// console.log("POST TYPE = " + posts[i][1]);
							// console.log("display_url = " + posts[i][2]);
							// console.log("Liked By = " + posts[i][3]);
							// console.log("Commented by = " + posts[i][4]);
							// console.log("timestamp = " + posts[i][5]);
							// console.log("comments disabled = " + posts[i][6]);
							// console.log("is_video = " + posts[i][7]);
							// console.log("text = " + posts[i][8]);
							// console.log();
							// console.log("---END NODE---");
							
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

							if(posts[0][7] == "true")
							{	
								var videoLink = posts[args[1]-1][0].substring(posts[args[1]-1][0].indexOf("\"shortcode\":") + 12);
								videoLink = videoLink.substring(1,videoLink.indexOf("\","));
								videoLink = "https://www.instagram.com/p/"+videoLink+"/";

								//console.log(videoLink);
								//REQUEST HTML
								var request = require('request');
								request(videoLink, function(error, response, body)
								{	
									if(response.statusCode == 404)
									{
										return message.channel.send(fotoigembed);
									}
									else
									{
										var link = body.substring(body.indexOf("\"og:video\""));
										link = link.substring(link.indexOf("https"));
										link = link.substring(0,link.indexOf("\""));
										fotoigembed.attachFile(link);
										fotoigembed.addField("Video URL : ",link,true);
										return message.channel.send(fotoigembed);
									}
								});
							}
							else
							{
								return message.channel.send(fotoigembed);
							}
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

					            //console.log(posts[args[1]-1][0]);
					   			//console.log("POST TYPE = " + posts[args[1]-1][1]);
								// console.log("display_url = " + posts[args[1]-1][2]);
								// console.log("Liked By = " + posts[args[1]-1][3]);
								// console.log("Commented by = " + posts[args[1]-1][4]);
								// console.log("timestamp = " + posts[args[1]-1][5]);
								// console.log("comments disabled = " + posts[args[1]-1][6]);
								// console.log("is_video = " + posts[args[1]-1][7]);
								// console.log("text = " + posts[args[1]-1][8]);
								// console.log();
								// console.log("---END NODE---");
								
								if(posts[args[1]-1][7] == "true")
								{	
									var videoLink = posts[args[1]-1][0].substring(posts[args[1]-1][0].indexOf("\"shortcode\":") + 12);
									videoLink = videoLink.substring(1,videoLink.indexOf("\","));
									videoLink = "https://www.instagram.com/p/"+videoLink+"/";

									//console.log(videoLink);
									//REQUEST HTML
									var request = require('request');
									request(videoLink, function(error, response, body)
									{	
										if(response.statusCode == 404)
										{
											return message.channel.send(fotoigembed);
										}
										else
										{
											var link = body.substring(body.indexOf("\"og:video\""));
											link = link.substring(link.indexOf("https"));
											link = link.substring(0,link.indexOf("\""));
											fotoigembed.attachFile(link);
											fotoigembed.addField("Video URL : ",link,true);
											return message.channel.send(fotoigembed);
										}
									});
								}
								else
								{
									return message.channel.send(fotoigembed);
								}
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

	// ITLAND COMMANDS
	if(command === `${prefix}itland`)
	{
		if(args.length > 0)
		{
			// ada isi
			if(args[0] === 'changecaption')
			{
				// change captions
				if(args[1] != undefined)
				{
					// Change The Captions
					var caption = args.slice(1);
					itland_caption = caption.join(' ');
					
					let success_embed = new Discord.RichEmbed()
					.setTitle("ITLand Change Caption")
					.setColor("#00FF00")
					.setDescription(`Successfuly Changed The Caption To: \n\n**${itland_caption}**`);
					return message.channel.send(success_embed);
				}
				else
				{
					let error_embed = new Discord.RichEmbed()
					.setTitle("ITLand Change Caption")
					.setColor("#FF0000")
					.setDescription(`Error Changing The Caption Because **No Caption is Provided**.\nPlease Do \`;help itland changecaption\` For More Information.`);
					return message.channel.send(error_embed);
				}
			}
			else if(args[0] === 'lookcaption')
			{
				let capt_now = new Discord.RichEmbed()
				.setTitle("ITLand Look Caption")
				.setColor("#00FF00")
				.setDescription(`Caption Now :\n\n**${itland_caption}**`);
				return message.channel.send(capt_now);
			}
			else if(args[0] === 'lookjadwal')
			{
				var next_args = args.slice(1);
				if(next_args.length != 0)
				{
					if(next_args[0] == 'today')
					{
						var date_now = new Date();
						var must_post = [];
						var checker = [true, false];

						if(checker[date_now.getDate()%2])
						{	
							for(var i = 0; i < ig_users.length; i+=2)
							{
								must_post.push(ig_users[i]);
							}
						}
						else
						{
							for(var i = 1; i < ig_users.length; i+=2)
							{
								must_post.push(ig_users[i]);
							}
						}

						let infoEmbed = new Discord.RichEmbed()
						.setColor("#00FF00")
						.setTitle("ITLand Jadwal Post")
						.setDescription(`Tanggal: **${date_now.getDate()}** \`(is_genap: ${checker[date_now.getDate()%2]})\``)
						.addField("Harus Post Instagram:", `${must_post.join('\n')}`,true)
						.setFooter(`Total: \`${must_post.length}\``)
						;
						return message.channel.send(infoEmbed);
					}
				}
				else
				{
					var date_now = new Date();
					var checker = [true, false];
					var genap = [];
					var ganjil = [];

					for(var i = 0; i < ig_users.length; i++)
					{
						if(i%2 == 0)
						{
							genap.push(ig_users[i]);
						}
						else
						{
							ganjil.push(ig_users[i]);
						}
					}

					let infoEmbed = new Discord.RichEmbed()
					.setColor("#00FF00")
					.setTitle("ITLand Jadwal Post")
					.setDescription(`Tanggal: **${date_now.getDate()}** \`(is_genap: ${checker[date_now.getDate()%2]})\``)
					.addField("Tanggal Genap:", `${genap.join('\n')}`,true)
					.addField("Tanggal Ganjil:", `${ganjil.join('\n')}`,true)
					.setFooter(`Total: \`${ig_users.length}\``)
					;
					return message.channel.send(infoEmbed);

				}
				
			}
			else if(args[0] === 'checkprivate')
			{
				var infoEmbed = new Discord.RichEmbed()
				.setTitle("Check Private Info")
				.setColor("#7AD7F0")
				.setDescription("***Checking Instagram Accounts. This May Take A While :)***");
				message.channel.send(infoEmbed);

				//check privates account?
				var privates = [];
				var not_private = [];
				var not_found = [];

				counter = 0;

				function checknext()
				{
					
					if(counter >= ig_users.length)
					{
						if (privates.length <= 0) {privates = ['-']}
						if (not_private.length <= 0) {not_private = ['-']}
						if (not_found.length <= 0) {not_found = ['-']}

						var embed = new Discord.RichEmbed()
						.setColor("#00AE86")
						.setTitle("Check Private Results")
						.addField("Private Accounts: ", privates.join('\n'),true)
						.addField("Not Private Accounts: ", not_private.join('\n'), true)
						.addField("Not Found Accounts: ", not_found.join("\n"),true)
						;
						return message.channel.send(embed);
					}
					else
					{
						console.log(`Checking ${ig_users[counter]}`);
						var request = require('request');
						request
						(
							'https://www.instagram.com/'+ig_users[counter]+"/",
							(error, response, body) =>
							{			
								if(response.statusCode == 404)
								{
									not_found.push(ig_users[counter]);
								}
								else
								{
									console.log("BODY: " + body);
									//isPrivateState
									var isPrivate = " ";
									isPrivate = body.substring(body.indexOf("is_private"));
									isPrivate = isPrivate.substring(isPrivate.indexOf("\":"), isPrivate.indexOf(",\""));
									isPrivate = isPrivate.replace("\":","");
									
									if(isPrivate == 'true')
									{
										privates.push(ig_users[counter]);
									}
									else
									{
										not_private.push(ig_users[counter]);
									}
								}
								counter++;
								checknext();
							}
						);
					}
				}
				checknext();
			}
			else if(args[0] === 'checkpost')
			{

				var infoEmbed = new Discord.RichEmbed()
				.setTitle("Check Post Info")
				.setColor("#7AD7F0")
				.setDescription("***Checking Instagram Accounts Post. This May Take A While :)***");
				message.channel.send(infoEmbed);

				var date_now = new Date();
				var checker = [true,false];
				var counter = 0;

				if(!checker[date_now.getDate()%2])
				{
					counter = 1;
				}

				var posted = [];
				var not_posted = [];
				var privates = [];

				function checknext()
				{
					
					if(counter >= ig_users.length)
					{
						if(posted.length <= 0){posted = ['-']}
						if(not_posted.length <= 0){not_posted = ['-']}

						var embed = new Discord.RichEmbed()
						.setColor("#00AE86")
						.setTitle("Check Post Results")
						.addField("Posted: ", posted.join('\n'),true)
						.addField("Not Posted: ", not_posted.join('\n'), true)
						;

						if(privates.length > 0)
						{
							embed.addField("Private Account: ", privates.join('\n'),true);
						}

						return message.channel.send(embed);
					}
					else
					{
						var request = require('request');
						request
						(
							'https://www.instagram.com/'+ig_users[counter]+"/",
							(error, response, body) =>
							{			
								if(response.statusCode == 404)
								{
									message.channel.send(`> \`${ig_users[counter]}\` Not Found!`);
								}
								else
								{
									//isPrivateState
									var isPrivate = " ";
									isPrivate = body.substring(body.indexOf("is_private"));
									isPrivate = isPrivate.substring(isPrivate.indexOf("\":"), isPrivate.indexOf(",\""));
									isPrivate = isPrivate.replace("\":","");

									if(isPrivate == 'true')
									{
										privates.push(ig_users[counter]);
									}
									else
									{
										var edges = body.substring(body.indexOf("\"edge_owner_to_timeline_media\""),body.indexOf("},\"edge_saved_media\":"));

										//get edges count
										var edgesCount = edges.substring(edges.indexOf("\"count\":"));
										edgesCount = edgesCount.substring(0,edgesCount.indexOf(","));
										edgesCount = edgesCount.substring(edgesCount.indexOf(":")+1);

										//getPosts
										edges = edges.substring(edges.indexOf("\"edges\":"));
										var postCount = edgesCount;

										if(postCount <= 0)
										{
											not_posted.push(ig_users[counter]);
										}
										else if(postCount > 12)
										{
											postCount = 12;
										}

										//getpost insert to array
										var posts = [];
										var postsdesc = [];

										for (var i = 0; i < postCount; i++) 
										{
											// console.log("");
											// console.log("--Node" + i + "--");
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
												
											}
											else
											{
												posts[i][8] = posts[i][0].substring(posts[i][0].indexOf("\"text\":") + 8);
												posts[i][8] = posts[i][8].substring(0,posts[i][8].indexOf("\"}"));
												posts[i][8] = posts[i][8].replace(/\\n/g, "\n");
											}
										}

										if(posts[0] != undefined)
										{
											var posttime = new Date(posts[0][5] * 1000);

											if(date_now.getDate() == posttime.getDate() && date_now.getMonth() == posttime.getMonth() && date_now.getFullYear() == posttime.getFullYear())
											{
												// Date Sama
												if(posts[0][8].toLowerCase().includes(itland_caption.toLowerCase()))
												{
													posted.push(ig_users[counter]);
												}
												else
												{
													not_posted.push(ig_users[counter]);
												}
											}
											else
											{
												not_posted.push(ig_users[counter]);
											}
										}
									}
								}
								counter+=2;
								checknext();
							}
						);
						
					}
				}
				checknext();
			}
			else
			{
				let no_command = 
				new Discord.RichEmbed()
				.setTitle("ITLand Command Not Found!")
				.setColor("#FF0000")
				.setDescription(`There is No \`${args.join(' ')}\` Command! Please Do \`;help itland\` For More Information`);
				return message.channel.send(no_command);
			}
		}
		else
		{
			// No Commands SHow Embed
			let no_command = 
			new Discord.RichEmbed()
			.setTitle("ITLand Missing Some Args!")
			.setColor("#FF0000")
			.setDescription("ITLand Command Missing Some Args! Please Do `;help itland` For More Information");
			return message.channel.send(no_command);
		}
	}
});

bot.login(process.env.token);