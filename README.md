# A Super Simple Boilerplate for creating Discord Bots 🤖

### Just want to get up and running developing your own bots for you Discord Server? This boilerplate code has you covered! Along with a comprehensive yet concise guide to setting up.

## The Boring Setup 😴
*As with anything, there is a bit of setup that is inevitable...*

**TL;DR**

1.) [Here](https://discordapp.com/developers/applications/me) (might need to sign in)

2.) *Create a Bot User*, save Token somewhere

3.) Here: `https://discordapp.com/oauth2/authorize?client_id=CLIENT_ID_GOES_HERE&scope=bot&permissions=0`

### Things You Need
 - NodeJS v9.4 or higher
 - NPM v5 or higher

### Then jump [here](#code)

---

## The Slightly Longer version

Navigate your way over to the [Discord Developer Applications](https://discordapp.com/developers/applications/me) page and create yourself a new app. Sign into your regular Discord account if asked to.

Give it a name, some sort of description and an icon if you're feeling fancy.

Once that is done, you'll be shown a whole heap of information on your newly created app. You need to scroll down through all the guff to the bottom where it says **Bot**.

Click the *Create a Bot User* button. This will allow you to *"interact with users in a more conversational manner"*. This is vital. (Say yes to the popup as well)

**Get your pen and paper ready, you're going to have to jot some stuff down.**

You'll now see various information in place of the button and you can now choose whether you want to make your bot Public and/or require OAuth2 (or learn more if you're that way inclined).

Click the text that says *"click to reveal"* next to *"token"* and write down the long string of letters and numbers that it shows. This is how discord will know that the code you're writing is the bot you've said it is here.

Before you go anywhere, quickly scroll right back to the top and grab your **ClientID**. This is important for the next bit.

### Last bit of setup, hang in there 👌

Take this URL: `https://discordapp.com/oauth2/authorize?client_id=CLIENT_ID_GOES_HERE&scope=bot&permissions=0`

Replace `CLIENT_ID_GOES_HERE` with the ClientID that you just noted down and then navigate to that page.

From here, you can select the server that you wish to connect your bot to from the dropdown and then click Authorize.

**Your bot is now allowed on your server!**

*Depending on the roles setup on your particular server, you might have to assign a few to the bot to allow it to do everything you want.*

## Code
### This bit is nice and simple 😊

1.) `cp config.example.json config.json`

Creates a copy of the file `config.example.json` called `config.json` which is used by the bot.

2.) Fill in the Discord Token in the `config.json` and pick a prefix (the default is `!`).

3.) `npm install && node bot.js`

Installs the required dependencies for the bot and then runs NodeJS on the `bot.js` file.

4.) **Enjoy being able to interact with your bot from the comfort of your own Discord Server!**
