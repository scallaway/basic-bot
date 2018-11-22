# A Super Simple Boilerplate for creating Discord Bots 🤖

### Just want to get up and running developing your own bots for you Discord Server? This boilerplate code has you covered! Along with a comprehensive yet concise guide to setting up.

## The Boring Setup 😴

_As with anything, there is a bit of setup that is inevitable..._

**TL;DR**

1.) [Here](https://discordapp.com/developers/applications/me) (might need to sign in)

2.) Save Client ID

3.) **Bot** -> **Add Bot**, save Token somewhere, set permissions

4.) Here: `https://discordapp.com/oauth2/authorize?client_id=CLIENT_ID&scope=bot&permissions=PERMISSIONS`

### Things You Need

- NodeJS v8.0.0 or higher
- NPM v5 or higher

### Then jump [here](#finally-the-code)

---

## The Slightly Longer version

Navigate your way over to the [Discord Developer Applications](https://discordapp.com/developers/applications/me) page and create yourself a new app. Sign into your regular Discord account if asked to.

Give it a name, some sort of description and an icon if you're feeling fancy.

Before you leave this page, be sure to copy down the **Client ID** as this will be important for later.

Once that is done, click the **Bot** button on the left hand side under **Settings**. This is where you will _bring your app to life!_

Click the **Add Bot** button. This will give your app _"visible life in Discord"_. This is vital. (Say yes to the popup as well)

---

### _A wild bot has appeared!_

The page will now provide you with a different set of information. From here, you'll be able to decide whether you want to make your bot public, and/or require a full OAuth2 flow.

Click the text that says **Click to Reveal Token** and copy the long string of letters and numbers that it shows. This is how discord will know that the code you've written is the bot you've specified here.

Quickly select the permissions that you need for your bot at the bottom of the page. Make sure to copy the **Permissions Integer** as that is important when linking your bot to your server!

---

### Last bit of setup, hang in there 👌

(At this point, if you don't have a server. Go and create one! It's quick and easy, and it's free!)

Take this URL: `https://discordapp.com/oauth2/authorize?client_id=CLIENT_ID&scope=bot&permissions=PERMISSIONS`

Replacing `CLIENT_ID` with your ClientID and `PERMISSIONS` with the Permissions Integer that you just copied. Then navigate to the page.

From here, you can select the server that you wish to connect your bot to from the dropdown and then click Authorize.

**Your bot is now allowed on your server!**

_Depending on the roles setup on your particular server, you might have to assign a few to the bot to allow it to do everything you want._

---

## Finally, the code

### This bit is nice and simple 😊

1.) `cp config.example.json config.json`

Creates a copy of the file `config.example.json` called `config.json` which is used by the bot.

2.) In the `config.json`, fill in the Discord Token with the Token that you copied from your bot and pick a prefix (the default is `!`).

3.) `npm install && node bot.js`

Installs the required dependencies for the bot and then runs NodeJS on the `bot.js` file.

4.) **Enjoy being able to interact with your bot from the comfort of your own Discord Server!**
