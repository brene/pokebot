var builder = require('botbuilder');

var connector = new builder.ConsoleConnector();
var bot = new builder.UniversalBot(connector);

bot.dialog('/', [
    function(session, args, next) {
        session.send("Hi");
    }
]);

connector.listen();