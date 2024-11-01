//#ENJOY
const fs = require("fs-extra");
if (fs.existsSync(".env"))
  require("dotenv").config({ path: __dirname + "/.env" });
global.audio = "www.youtube.com";
global.video = "www.youtube.com";
global.port = process.env.PORT;
global.appUrl = process.env.APP_URL || "";
global.email = "kingdavid23565@gmail.com";
global.location = "Lagos, Nigeria";
global.mongodb = process.env.MONGODB_URI || "mongodb+srv://astrofx0011:astro@cluster0.lmwnxdt.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
global.allowJids = process.env.ALLOW_JID || "null";
global.blockJids = process.env.BLOCK_JID || "null";
global.DATABASE_URL = process.env.DATABASE_URL || "";
global.timezone = process.env.TZ || process.env.TIME_ZONE || "Africa/Lagos";
global.github = process.env.GITHUB || "https://github.com/STAR-KING0/Queen_Alya";
global.gurl = process.env.GURL || "https://whatsapp.com/channel/0029VaeW5Tw4yltQOYIO5E2D";
global.website = process.env.GURL || "https://whatsapp.com/channel/0029VaeW5Tw4yltQOYIO5E2D";
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "./lib/alya.jpg";
global.devs = "2349123731026";
global.sudo = process.env.SUDO || "2349123731026,2347066506899";
global.owner = process.env.OWNER_NUMBER || "2349123731026";
global.style = process.env.STYLE || "3";
global.gdbye = process.env.GOODBYE || "false";
global.wlcm = process.env.WELCOME || "false";
global.warncount = process.env.WARN_COUNT || 3;
global.disablepm = process.env.DISABLE_PM || "false";
global.disablegroup = process.env.DISABLE_GROUPS || "false",
global.MsgsInLog = process.env.MSGS_IN_LOG || "true";
global.userImages = process.env.USER_IMAGES || "./lib/alya.jpg";
global.waPresence = process.env.WAPRESENCE || "available";
global.readcmds = process.env.READ_COMMAND || "false";
global.readmessage = process.env.READ_MESSAGE || "false";
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "";
global.read_status = process.env.AUTO_READ_STATUS || "false";
global.save_status = process.env.AUTO_SAVE_STATUS || "false";
global.save_status_from = process.env.SAVE_STATUS_FROM || "";
global.read_status_from = process.env.READ_STATUS_FROM || "";

global.api_smd = "https://api-smd-1.vercel.app";
global.scan = "https://alya-pair.onrender.com/";

global.SESSION_ID =
  process.env.SESSION_ID ||
  "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiU090T2FldHRYV2VxVXRXTS9xaEpCbmh4eVkwY2srTGVCKzRDa1JlN1FuWT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiYlRHTEoyOW4yM01PZDBlcHN4SzJpNHUzMmhsNUlxUUpwMW4xM3BIQStHRT0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiIyQmhGV3RXbHNxUWh4dVFKNU5GQ2hiTEVMQXoxeWN2bUFnT0VET2c2NkgwPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJkN1RDZFZoeFY2Ujd4eDVZWTdnV1QzOEd5d1YzbFY1aXhucTJrOERQRGpNPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InVKb2huRFlnZmR6WVRTd0ZmNmtvaDFMcFIvWmFtTER1cWRFWUEzSXVYbUk9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Ii9WMElOZytpb2VJMmFmdHZzVVROakwzWVVPRHZUb0RkL1N4TDdMd0o1QzA9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiZURJUjh5YklYbWtkellWUzBPL3RmTnpCL1RoMGRXd0x2TmkzL2pMcWJXND0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiczZqeW11TWtpQzR0ejhGUytvSE11d0dsL3UzbG9NNWdEL0owNmdQalFGUT0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InFmL0t2VTNqWC9DNVgzZnFGelBzYjdIMnJ4WVdBZ3FrNTFGNit1K1hhRU5RWmtOOUlCUkJXZXRPeU01NFFCTU9wcE5kbC95SFE1Y0QyOG56RWE5V2pRPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTMxLCJhZHZTZWNyZXRLZXkiOiJ3U2ttKzFxcFErMEF4YWxzdTlUZExWbC9WUE1MdnNjWVp2SUVaZFNQMTY4PSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W10sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjowLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwiZGV2aWNlSWQiOiJXM3FyaGtrRVRnR0tXOXdFeEcyTzlRIiwicGhvbmVJZCI6ImUwNTlmODkzLTIzNjctNGE5OS05MjUwLWRhNjZjZmE1Y2NkNSIsImlkZW50aXR5SWQiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJzUHpPS1BIRmJDdmd5UG44d3JiYk9KcEE1bkE9In0sInJlZ2lzdGVyZWQiOnRydWUsImJhY2t1cFRva2VuIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoia2tOWk5uTS9hN21Jc21TU2RjZkhQRnhLVG9ZPSJ9LCJyZWdpc3RyYXRpb24iOnt9LCJwYWlyaW5nQ29kZSI6IlpHWllIMkVZIiwibWUiOnsiaWQiOiIyMzQ3MDY2NTA2ODk5OjkwQHMud2hhdHNhcHAubmV0IiwibmFtZSI6IkFjdGl2ZSBBZG1pbiJ9LCJhY2NvdW50Ijp7ImRldGFpbHMiOiJDTnI3ayt3QkVKdUhrYmtHR0FzZ0FDZ0EiLCJhY2NvdW50U2lnbmF0dXJlS2V5IjoiVkNMWUlBSDErazVrK1QxQTZlYUVDZ1I1aEtQNUJ4dVR0SjY0aFVSdG9XOD0iLCJhY2NvdW50U2lnbmF0dXJlIjoiUm1EWDd6M212UXBxcTFhOS9hNW5WMnp6cUo5aVF5bVh3RFZ0WTF0M1lRT2ozTHdWVHF3VlBzY3lrOGN1MXZwNTM1WnpzOE5PZE9PdUFTbUdXN1diQkE9PSIsImRldmljZVNpZ25hdHVyZSI6ImxGdFkwZk9Hc21PQjV2UFQyV2t1YzY1b2llVS8wRzRWRXRMYmFQVGZkNEdXcEphWldZMGJzMjdWUksrU0hGTWxic05vekhqTmtPdXpoZ0xuOHpPTGhRPT0ifSwic2lnbmFsSWRlbnRpdGllcyI6W3siaWRlbnRpZmllciI6eyJuYW1lIjoiMjM0NzA2NjUwNjg5OTo5MEBzLndoYXRzYXBwLm5ldCIsImRldmljZUlkIjowfSwiaWRlbnRpZmllcktleSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkJWUWkyQ0FCOWZwT1pQazlRT25taEFvRWVZU2orUWNiazdTZXVJVkViYUZ2In19XSwicGxhdGZvcm0iOiJzbWJhIiwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wIjoxNzMwNDI5ODY0LCJteUFwcFN0YXRlS2V5SWQiOiJBQUFBQUNhKyJ9hHVGQ5c2ttN0VWb0JQbTdSQWpiSVhPb05PaXpRVT0iLCJhY2NvdW50U2lnbmF0dXJlIjoiai94TjV6eEdqNURIODJIY2JuRUpxVWpnYzVibXQ0YXd2QTFac3B3U1R3aFdiUGZNb3ZwdHNpZHkxRHV0ZXBTOEpGY2dMZ1UwNHV0Q09MK3FDdzhaRFE9PSIsImRldmljZVNpZ25hdHVyZSI6IjFmZXh1cVhvNVo1bVp5M3RMTXU2Y2cxbnZiWVhrYVFkMjgwNjdKRGJQbFl0UmYvS3BZV0lVTUhpaWVNYTczQlZVZWRjOVF2UEpIY25aL1VDUnJHbERnPT0ifSwic2lnbmFsSWRlbnRpdGllcyI6W3siaWRlbnRpZmllciI6eyJuYW1lIjoiMjc2NDQyNzA1ODg6OUBzLndoYXRzYXBwLm5ldCIsImRldmljZUlkIjowfSwiaWRlbnRpZmllcktleSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkJmZWY1Nit4VFdQdmdjTVJrM2ZiSkp1eEZhQVQ1dTBRSTJ5RnpxRFRvczBGIn19XSwicGxhdGZvcm0iOiJhbmRyb2lkIiwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wIjoxNzI3MzYwMzA5LCJteUFwcFN0YXRlS2V5SWQiOiJBQUFBQU5kSiJ9"
module.exports = {
  menu: process.env.MENU || "2",
  HANDLERS: process.env.PREFIX || "+",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "1.0.0",
  caption: process.env.CAPTION || "`QUEEN_ALYA™`",
  author: process.env.PACK_AUTHER || "QUEEN_ALYA",
  packname: process.env.PACK_NAME || "A L Y A",
  botname: process.env.BOT_NAME || "QUEEN_ALYA",
  ownername: process.env.OWNER_NAME || "STAR KING",
  errorChat: process.env.ERROR_CHAT || "",
  KOYEB_API: process.env.KOYEB_API || "false",
  REMOVE_BG_KEY: process.env.REMOVE_BG_KEY || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME: process.env.HEROKU_APP_NAME || "",
  antilink_values: process.env.ANTILINK_VALUES || "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,
  aitts_Voice_Id: process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "",
  WORKTYPE: process.env.WORKTYPE || process.env.MODE || "private",
  LANG: (process.env.THEME || "A L Y A").toUpperCase(),
};
global.rank = "updated";
global.isMongodb = true;
let file = require.resolve(__filename);
fs.watchFile(file, () => {
  fs.unwatchFile(file);
  console.log(`Update'${__filename}'`);
  delete require.cache[file];
  require(file);
});
