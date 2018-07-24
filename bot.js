var Discord = require('discord.io');
 
var bot = new Discord.Client({
    token: "NDcxMjA4NjYyNDU5NzQ0MjU2.Djhyyw.XugUypdLJGhnSQJEAmI4tXQ1hZU",
    autorun: true
});
 
bot.on('ready', function() {
    console.log('Logged in as %s - %s\n', bot.username, bot.id);
});
 
bot.on('message', function(user, userID, channelID, message, event) {
    if (message.toUpperCase().indexOf("WHEATLEY TALKS") !=-1) {
        bot.sendMessage({
            to: channelID,
            message: message.replace("WHEATLEY TALKS ","").replace("Wheatley Talks ","").replace("Wheatley talks ","").replace("wheatley talks ","")
        });
    }
	else if (message.toUpperCase().indexOf("WHEATLEY") !=-1) {
		bot.sendMessage({
			to: channelID,
			message: "Si, dime"
		});
	}
	else if(message.toUpperCase().match( /PUTA|PUTO|JODER|CABRÓN|CABRON|JILI|GILI|MIERDA|CIPOTE|POLLA|POYA|CAPULLO|CAPUYO|CHÚPAME|CHUPAME|QUE TE DEN/g )){
		bot.sendMessage({
			to: channelID,
			message: "Espera, ¿una palabrota? mis oidos, mis oidoooos!¡!¡!¡. No, espera, ¿mis sensores?"
		});
	}
	else if (message.toUpperCase().indexOf("ALGUIEN") !=-1) {
		bot.sendMessage({
			to: channelID,
			message: "Mmmm yo no..."
		});
	}
	else if (message.toUpperCase().indexOf("GLADOS") !=-1) {
		bot.sendMessage({
			to: channelID,
			message: "Pulsa el botón!"
		});
	}
});
