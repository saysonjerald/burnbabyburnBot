const { Composer } = require("micro-bot");

const bot = new Composer();

const bot = new Telegraf("1807373076:AAFx_hyVnO09EAkbuZORYfy3IKqogVS89N0");

const tokenCA = "0x468AAfaEc61a22986AA3425F1c436462F12340D2";
const website = "https://babyburntoken.com/";
const poocoin = `https://poocoin.app/tokens/${tokenCA}`;
const pancakeswap = `https://exchange.pancakeswap.finance/#/swap?inputCurrency=${tokenCA}`;
const bscscan = `https://bscscan.com/address/${tokenCA}`;

//Social Media
const email = "info@babyburntoken.com";
const twitter = "https://twitter.com/BabyburnToken";
const youtube = "https://www.youtube.com/channel/UC0LiXgEa6P0pHHGStbbUB2A";
const reddit = "https://www.reddit.com/user/babyburntoken";
const instagram = "https://www.instagram.com/snxcommunity/";
const facebook = "https://www.facebook.com/SnXcommunity-156376273191629";

//Whitepaper
const whitepaper =
  "https://www.babyburntoken.com/wp-content/uploads/2021/08/babyburn-token2.pdf";

bot.command("marketing", (ctx) => {
  ctx.telegram.sendChatAction(ctx.chat.id, "upload_photo");
  ctx.replyWithPhoto(
    { source: "./img/community-announcement.jpg" },
    {
      caption: `
📢📢COMMUNITY ANNOUNCEMENT🎉🎉

📍PHASE 1📍

🌐 Website Launch
👉Talegram Launch
❤️Top Influencer 
⭐️ Poocoin Ads
        `,
      parse_mode: "Markdown",
    }
  );
});

bot.command("tokenInformation", (ctx) => {
  ctx.telegram.sendMessage(
    ctx.chat.id,
    `
👉CA- ${tokenCA}
🧨Slippage :16-18
💢Symbol :BBT
✅Token Contribution✅
📥Min 
📥Maximum
  `
  );
});

bot.command("presaleAlert", (ctx) => {
  ctx.telegram.sendChatAction(ctx.chat.id, "upload_photo");
  ctx.replyWithPhoto(
    { source: "./img/presale-alert-thumbnail.jpg" },
    {
      caption: `
🚩 SOFTCAP UPDATE
@800BNB


💫 __BNB Left for the SOFTCAP. 

✅ HARDCAP SOON -1600BNB`,
      parse_mode: "Markdown",
    }
  );
});

bot.command("presaleTax", (ctx) => {
  ctx.telegram.sendChatAction(ctx.chat.id, "upload_photo");
  ctx.replyWithPhoto(
    { source: "./img/presale-tax-thumbnail.jpg" },
    {
      caption: `
✅15% Total Tax will be charge every transaction✅

🛡 Community Protection
🏹 Stability

💥A never-before strategy that perfectly executes the ff:

📥 2% - Redistribute to Holders 
📥 8% - Automatic Buyback and Burn Ptocess
📥 5% - Flaming Shield Wallet`,
      parse_mode: "Markdown",
    }
  );
});

bot.command("presaleStart", (ctx) => {
  ctx.telegram.sendChatAction(ctx.chat.id, "upload_photo");
  ctx.replyWithPhoto(
    { source: "./img/presale-starts-thumbnail.jpg" },
    {
      caption: `
⭐️⭐️ PRE-SALE STARTS on Aug 20-27  ⭐️⭐️

📌IDO powered by cointool.app, received your coin automatically,no need to wait 💯

IDO Wallet 👉
0xEe12e69ab96980b32EF0d5cDfE2ef73194C536df

IDO sales : 50%
200,000,000,000,000,000

Presale:
125,000,000,000,000
Listing Rate:
125,000,000,000,000

Contribution 
Minimum: .1BNB
Maximum: 3BNB


📥SOFTCAP @ 800BNB
‼️__ BNB Left for the softcap

✅HARDCAP SOON`,
      parse_mode: "Markdown",
    }
  );
});

bot.command("price", async (ctx) => {
  try {
    const token = await axios(
      `https://api.pancakeswap.info/api/v2/tokens/${tokenCA}`
    );
    ctx.telegram.sendMessage(
      ctx.chat.id,
      `
Name: *${token.data.data.name}*
Symbol: *${token.data.data.symbol}*
Price: $*${(token.data.data.price * 1).toFixed(9)}*
BNB Price: *${(token.data.data.price_BNB * 1).toFixed(9)}*
    `,
      { parse_mode: "Markdown" }
    );
  } catch (err) {
    console.log(err);
  }
});

bot.command("overview", (ctx) => {
  ctx.replyWithPhoto(
    { source: "./img/overview-thumbnail.jpg" },
    {
      caption: `
<b>📌Babyburn Token</b> - is an advanced concept dedicated to redesigning deflationary tokens with an automatic buyback and burn features,an exclusive innovation that only BBT has to offer to our users which is a quite prominent in the crypto space.

Deflationary token with automatic buyback and burnibg process have largely been compared as better capabilities to combat the digital world volatility and inflation.There is no doubt that BBT attributed the biggest creation of deflationary token with an automatic buyback and burn process,which stabilize the market value and building confidence in investors to hold their token for long.

In the future,we are expecting that BBT is the no.1 deflationary token with an automatic buyback and burn process that will raise the demand for massive crypto adoption.     

👉For more details visit our website 
🌐 ${website}
    `,
      parse_mode: "HTML",
    }
  );
});

bot.command("tax", (ctx) => {
  ctx.replyWithPhoto(
    { source: "./img/taxes-thumbnail.jpg" },
    {
      caption: `
<b>✅TAX USE-CASE✅</b>

<i>⭐️A never-before strategy that perfectly executes in our system⭐️</i>

🛡  <b>Community Protection</b>
🏹  <b>Stability</b>
👉 <b>15% Total Tax</b>

📥 2% - Redistribute to Holders 
📥 8% - Automatic Buyback and Burn Ptocess
📥 5% - Flaming Shield Wallet
    `,
      parse_mode: "HTML",
    }
  );
});

bot.command("tokenomics", (ctx) => {
  ctx.replyWithPhoto(
    { source: "./img/tokenomics-thumbnail.jpg" },
    {
      caption: `
<b>⭐️Babyburn Token Total Supply</b>: <pre>400,000,000,000,000,000</pre>

<b>📍Deployer</b>: 35%
<pre>140,000,000,000,000,000</pre>
(Liquidity, exchange, burn)

<b>📍IDO Sales Allocation</b>: 50%
<pre>200,000,000,000,000,000</pre>

<b>📍Creator</b>: 6% 
<pre>24,000,000,000,000,000</pre>

<b>📍Development Wallet</b>: 4%
<pre>16,000,000,000,000,000</pre>

<b>📍Marketing Wallet</b>:  2.5%
<pre>10,000,000,000,000,000</pre>

<b>📍Operational Wallet</b>: 2.5%
<pre>10,000,000,000,000,000</pre>

👉Visit our website 
🌐 ${website}
    `,
      parse_mode: "HTML",
    }
  );
});

bot.command("IDO", (ctx) => {
  ctx.replyWithPhoto(
    { source: "./img/presale-ido-thumbnail.jpg" },
    {
      caption: `
<b>⭐️⭐️ IDO STARTS on Aug 20-27 ⭐️⭐️</b>

📌IDO powered by cointool.app, received your coin automatically,no need to wait 💯

⭐️SOFTCAP <i>@800 BNB</i>
⭐️HARDCAP <i>@1600 BNB</i>

<b>‼️USE THIS LINK TO BUY‼️</b>

<i>https://cointool.app/ido/exchange?id=236b5676222176252a72712a252a2b237120215655237726705775562176752420222a275026202577756f2625</i>

IDO Sales Allocation : <i>50%</i>
<i>200,000,000,000,000,000</i>

Presale:
<i>125,000,000,000,000</i>
Listing Rate:
<i>125,000,000,000,000</i>

Contribution 
Minimum: <i>.1BNB</i>
Maximum: <i>3BNB</i>

For more information visit our
🌐 ${website}
    `,
      parse_mode: "HTML",
    }
  );
});

bot.command("whitepaper", (ctx) => {
  ctx.replyWithPhoto(
    { source: "./img/whitepaper-thumbnail.jpg" },
    {
      caption: `
<b>⭐️BABYBURN TOKEN WHITEPAPER⭐️</b>
    `,
      reply_markup: {
        inline_keyboard: [[{ text: "View Now", url: whitepaper }]],
      },
      parse_mode: "HTML",
    }
  );
});

bot.command("buy", (ctx) => {
  ctx.telegram.sendMessage(
    ctx.chat.id,
    `
<b>✅Buy Poocoin and Pancakeswap✅</b>

Visit our Official Website 
🌐 ${website}
  `,
    {
      parse_mode: "HTML",
      reply_markup: {
        inline_keyboard: [
          [
            { text: "Poocoin", url: poocoin },
            { text: "Pancakeswap", url: pancakeswap },
          ],
        ],
      },
    }
  );
});

bot.command("socialmedia", (ctx) => {
  ctx.replyWithPhoto(
    { source: "./img/join-social-media-thumbnail.jpg" },
    {
      caption: `
<b>📍Don't forget to click and subscribes to get the latest news and happenings📍</b>

<i>Twitter: ${twitter}</i>
<i>Youtube: ${youtube}</i>
<i>Reddit:  ${reddit}</i>
<i>Email:   ${email}</i>
    `,
      parse_mode: "HTML",
    }
  );
});

bot.command("help", (ctx) => {
  ctx.replyWithPhoto(
    { source: "./img/trustwallet-thumbnail.jpg" },
    {
      caption: `
<b>‼️HOW TO ADD BABYBURN TOKEN TO YOUR TRUST WALLET‼️</b>

<b><i>👉STEP 1</i></b>
- Copy Contract Address 
- Search Token
<b><i>👉STEP 2</i></b>
- Paste Contract Address 
<b><i>👉STEP 3</i></b>
- Click add Custom Token
- Change Network to smart chain
<b><i>👉STEP 4</i></b>
- Paste Contract Address 
- Automatically  it will provide the ff: SYMBOL and DECIMAL
    `,
      parse_mode: "HTML",
    }
  );
});

bot.command("team", (ctx) => {
  ctx.replyWithPhoto(
    { source: "./img/team-thumbnail.jpg" },
    {
      caption: `
<b>🔥BABYBURN TEAM️🔥</b>

<i>BBT Boss Burn (Will not DM u first)</i>
<i>BBT Alicia Blaze (Will not DM u first)</i>
<i>BBT The Heat  (Will not DM u first)</i>
<i>BBT Lighning Burn (Will not DM u first)</i>
    `,
      parse_mode: "HTML",
    }
  );
});

bot.command("features", (ctx) => {
  ctx.replyWithPhoto(
    { source: "./img/presale-automatic-distribution-thumbnail.jpg" },
    {
      caption: `
<b>⭐️BBT FEATURES⭐️</b>

✅<b><i>Automatic Buyback and  Burn Features</i></b>
- A never-done before strategy that executes an automatic buyback and burns process at 8% to help decrease the circulation supply.

✅<b><i>Flaming Shield </i></b>
- We make sure to combat and eliminate automatic bot and paper hands by adding an exclusive shield feature that buys the supply at 5% which helps the community asset to continuously reach the all-time high value. 

✅<b><i>NFT Burn Token </i></b>
- Combining the concept of NFT with the burning process, allows every user to trade art and burn some tokens
  
✅<b><i>Liquidity Lock -1 Year</i></b>
-The most reliable token that ensures community safety through Liquidity Lock and can be extended by community vote
  
✅<b><i>Babyburn Games </i></b>
-Design to develop our very own gaming industry, that allows users to play and earn.
  
✅<b><i>BBT  Merchant</i></b>
- Allows users to buy using our BBT token on the available merchant and peer-to-peer community transactions.

🌐 ${website}
    `,
      parse_mode: "HTML",
    }
  );
});

bot.command("CA", (ctx) => {
  ctx.telegram.sendMessage(
    ctx.chat.id,
    "<pre>0x468AAfaEc61a22986AA3425F1c436462F12340D2</pre>",
    {
      parse_mode: "HTML",
    }
  );
});

bot.command("website", (ctx) => {
  ctx.telegram.sendMessage(
    ctx.chat.id,
    `
‼️ OFFICIAL WEBSITE‼️

🌐 ${website}
      `,
    {
      parse_mode: "HTML",
    }
  );
});

bot.start((ctx) => {
  ctx.reply(`
/buy
/CA
/features
/IDO
/help
/lambo
/overview
/socialmedia
/tax
/tokenomics
/team
/whitepaper
/website
  `);
});

module.exports = bot;
