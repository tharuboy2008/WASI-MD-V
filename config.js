//#ENJOY
/**

░▒▓█▓▒░░▒▓█▓▒░░▒▓█▓▒░░▒▓██████▓▒░ ░▒▓███████▓▒░▒▓█▓▒░ 
░▒▓█▓▒░░▒▓█▓▒░░▒▓█▓▒░▒▓█▓▒░░▒▓█▓▒░▒▓█▓▒░      ░▒▓█▓▒░ 
░▒▓█▓▒░░▒▓█▓▒░░▒▓█▓▒░▒▓█▓▒░░▒▓█▓▒░▒▓█▓▒░      ░▒▓█▓▒░ 
░▒▓█▓▒░░▒▓█▓▒░░▒▓█▓▒░▒▓████████▓▒░░▒▓██████▓▒░░▒▓█▓▒░ 
░▒▓█▓▒░░▒▓█▓▒░░▒▓█▓▒░▒▓█▓▒░░▒▓█▓▒░      ░▒▓█▓▒░▒▓█▓▒░ 
░▒▓█▓▒░░▒▓█▓▒░░▒▓█▓▒░▒▓█▓▒░░▒▓█▓▒░      ░▒▓█▓▒░▒▓█▓▒░ 
 ░▒▓█████████████▓▒░░▒▓█▓▒░░▒▓█▓▒░▒▓███████▓▒░░▒▓█▓▒░ 
                                                      

**/

const fs = require("fs-extra");
if (fs.existsSync(".env"))
  require("dotenv").config({ path: __dirname + "/.env" });
global.audio = "";
global.video = "";
global.port = process.env.PORT;
global.appUrl = process.env.APP_URL || "";
global.email = "wasixml@gmail.com";
global.location = "Lahore,Pakistan.";
global.mongodb = process.env.MONGODB_URI || "";
global.allowJids = process.env.ALLOW_JID || "923192173398@s.whatsapp.net";
global.blockJids = process.env.BLOCK_JID || "null";
global.DATABASE_URL = process.env.DATABASE_URL || "";
global.timezone = process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github = process.env.GITHUB || "https://github.com/Itxxwasi/WASI-MD-V2";
global.gurl =
  process.env.GURL || "https://whatsapp.com/channel/0029VaDK8ZUDjiOhwFS1cP2j";
global.website =
  process.env.GURL || "https://whatsapp.com/channel/0029VaDK8ZUDjiOhwFS1cP2j";
global.THUMB_IMAGE =
  process.env.THUMB_IMAGE ||
  process.env.IMAGE ||
  "https://telegra.ph/file/1f4e6e1cc2ed1662adb36.jpg";
global.devs = "923135673658";
global.sudo = process.env.SUDO || "923192173398";
global.owner = process.env.OWNER_NUMBER || "94762081394";
global.style = process.env.STYLE || "3";
global.gdbye = process.env.GOODBYE || "true";
global.wlcm = process.env.WELCOME || "true";
global.warncount = process.env.WARN_COUNT || 3;
global.disablepm = process.env.DISABLE_PM || "true";
(global.disablegroup = process.env.DISABLE_GROUPS || "true"),
  (global.MsgsInLog = process.env.MSGS_IN_LOG || "true");
global.userImages = process.env.USER_IMAGES || "";
global.waPresence = process.env.WAPRESENCE || "recording";
global.readcmds = process.env.READ_COMMAND || "true";
global.readmessage = process.env.READ_MESSAGE || "true";
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "";
global.read_status = process.env.AUTO_READ_STATUS || "true";
global.save_status = process.env.AUTO_SAVE_STATUS || "true";
global.save_status_from = process.env.SAVE_STATUS_FROM || "true";
global.read_status_from = process.env.READ_STATUS_FROM || "true";
global.autoreaction = process.env.autoreaction || "true";

global.api_smd = "https://api-smd-1.vercel.app";
global.scan = "https://pair-qr-wasi-md.onrender.com";

global.SESSION_ID =
  process.env.SESSION_ID ||
  "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiaUN3Qm5UK1hyaHkybmFEbHRBTjZmNFRZSWhYRG9qakU2Z3U2eHJDeENsVT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiVXZ0ZFI2ajVPNmh6bFpLWlZ5WkNoaU9IcHMyQ082aXVVK0lSTlg5b2t3ST0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiIrQWFWMmZyVHlJYlcreDVTSG1HMG42eS9mUzlTb3ZMaVNtTXJNTGZJSkcwPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiIrd2ZtYnhrRTkzektNZVQvSlZzQVhIRWR3c3dBbm9oaDFFZVlBUFNCRXhzPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImtQTDRPR1c3OGVwUnFITm81dC90VXFyT2ZreENPbnRTZDdPZlk3cXI1WDQ9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlEvNXZUd3ZybkFGZDBTMHNIN2tCY3FnL2tZOWdFa1k5bTR4SmRvZXhnanM9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQUZXVkFKVmk5SHNNNkhOVE9tUytMdURlNURoVGQ4a0R4aW9KM2cxdFQzOD0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiR0ZYdHV5eVlUa0xaQXQxTWxZNFVjNHFPZlM3Vmo2QStBbVRoeHFCZ3lUcz0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Ik5CbVcxeVRqU3QrbU4yVEh6K1pVeHpINlNBZWJHSU5IWmovNXZ0TUQ2QkU2a0ROQUtVOEdJdjBoa2laRlBvWEQyTlFhdFd3YlFsekVMQVg0Q1l0dURRPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MzAsImFkdlNlY3JldEtleSI6InRsYzlHTXJOT2NEb0RaaGxjQ1hQaUhXaWZHZ05qSmRQVGFad2tQdjRaMGM9IiwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzIjpbXSwibmV4dFByZUtleUlkIjozMSwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWQiOjMxLCJhY2NvdW50U3luY0NvdW50ZXIiOjAsImFjY291bnRTZXR0aW5ncyI6eyJ1bmFyY2hpdmVDaGF0cyI6ZmFsc2V9LCJkZXZpY2VJZCI6InhqVW4wbXJ5UWI2ZHoybEJWN3lkZVEiLCJwaG9uZUlkIjoiYjI5NWIyNTUtMjA1OC00MjNhLWE4Y2YtMjUxODNhMzlmZDI1IiwiaWRlbnRpdHlJZCI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkdCMGlMc3g4enF3UnF2Z25mWHk5dVpjNGpBTT0ifSwicmVnaXN0ZXJlZCI6dHJ1ZSwiYmFja3VwVG9rZW4iOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiI3L3ZOWk82ZGJoTHdQOXgxUUpVV0RiZkdFWlU9In0sInJlZ2lzdHJhdGlvbiI6e30sInBhaXJpbmdDb2RlIjoiVjk4V1M1NzQiLCJtZSI6eyJpZCI6Ijk0NzYyMDgxMzk0OjE2QHMud2hhdHNhcHAubmV0IiwibmFtZSI6IuG0ueG0v+GthCDsiqTtg4Ag67Kg7J2067mEX18ifSwiYWNjb3VudCI6eyJkZXRhaWxzIjoiQ0xQOXgrOENFSit6d2JvR0dBSWdBQ2dBIiwiYWNjb3VudFNpZ25hdHVyZUtleSI6IlVNZ2VQai9ad1dadUdUcklYUk1hM3VjeVZOYWRqa1o5aWpGZ3RkNDBMMzA9IiwiYWNjb3VudFNpZ25hdHVyZSI6IjM2UzU1TlpsejF6SkNTb3JBdmx0aTVpWGlGYkJmdjVMOC85TFJJTms0TFZQRGsxb2xzQmhKdEdYTDFFbE9mdmpBNGxqVlZFRU51Qmo0OFhnMnNqT0J3PT0iLCJkZXZpY2VTaWduYXR1cmUiOiJ0MjJtaTJ0djBXeWh1SGZuTnNLYVV4N1plL1pqOHVEZ2RSVW1GR2MrUEU3b2lxTWcwS1ZKOUxPZ1dsL1hzK0dOK0ZOa1E2cEtqZlN1ZGpSUUdnaUVCdz09In0sInNpZ25hbElkZW50aXRpZXMiOlt7ImlkZW50aWZpZXIiOnsibmFtZSI6Ijk0NzYyMDgxMzk0OjE2QHMud2hhdHNhcHAubmV0IiwiZGV2aWNlSWQiOjB9LCJpZGVudGlmaWVyS2V5Ijp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQlZESUhqNC8yY0ZtYmhrNnlGMFRHdDduTWxUV25ZNUdmWW94WUxYZU5DOTkifX1dLCJwbGF0Zm9ybSI6InNtYmEiLCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXAiOjE3MzMzMTkwODQsIm15QXBwU3RhdGVLZXlJZCI6IkFBQUFBQzFsIn0=VLZXkiOiJVTWdlUGovWndXWnVHVHJJWFJNYTN1Y3lWTmFkamtaOWlqRmd0ZDQwTDMwPSIsImFjY291bnRTaWduYXR1cmUiOiJzb0VFcGdzZmRvUEJzRStGSTUvZ3R4amZYVlE2OHE2djVsMWcyby9DajVBWjZWcjMra1dSTVFTTDNWc0pDb0lBYTN4Wmg2SUF2SUxZdVNRVTMvNXNDZz09IiwiZGV2aWNlU2lnbmF0dXJlIjoibUUxWjZyaUtzWU9mcjA1L2x6YmdpQm8zdUxrc1ppVnB6SDdJeERVYXIxcTlaVERPaVFCUDQyQ3ZYTWpDOE1hdjV3WkFNeEJ0bUpZZmErcGV2blZxRGc9PSJ9LCJzaWduYWxJZGVudGl0aWVzIjpbeyJpZGVudGlmaWVyIjp7Im5hbWUiOiI5NDc2MjA4MTM5NDoxNUBzLndoYXRzYXBwLm5ldCIsImRldmljZUlkIjowfSwiaWRlbnRpZmllcktleSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkJWRElIajQvMmNGbWJoazZ5RjBUR3Q3bk1sVFduWTVHZllveFlMWGVOQzk5In19XSwicGxhdGZvcm0iOiJzbWJhIiwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wIjoxNzMzMzE3NjIwLCJteUFwcFN0YXRlS2V5SWQiOiJBQUFBQUMxbCJ9";
module.exports = {
  menu: process.env.MENU || "",
  HANDLERS: process.env.PREFIX || ".",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "1.0.0",
  caption: process.env.CAPTION || "𝐅𝐈𝐋𝐄-𝐆𝐄𝐍𝐄𝐑𝐀𝐓𝐄𝐃-𝐁𝐘-𝐓𝐇𝐀𝐑𝐔-𝐌𝐃-𝐕2😍",
  author: process.env.PACK_AUTHER || "WASO",
  packname: process.env.PACK_NAME || "🏷️",
  botname: process.env.BOT_NAME || "𝐓𝐇𝐀𝐑𝐔-𝐌𝐃-𝐕2",
  ownername: process.env.OWNER_NAME || "WASI",
  errorChat: process.env.ERROR_CHAT || "923192173398",
  KOYEB_API: process.env.KOYEB_API || "false",
  REMOVE_BG_KEY: process.env.REMOVE_BG_KEY || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME: process.env.HEROKU_APP_NAME || "",
  antilink_values: process.env.ANTILINK_VALUES || "chat.whatsapp.com",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,
  aitts_Voice_Id: process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "",
  WORKTYPE: process.env.WORKTYPE || process.env.MODE || "private",
  AUTOREACTION: process.env.AUTOREACTION || process.env.AUTOREACTION || "true",
  LANG: (process.env.THEME || "WASI").toUpperCase(),
};
global.rank = "updated";
global.isMongodb = false;
let file = require.resolve(__filename);
fs.watchFile(file, () => {
  fs.unwatchFile(file);
  console.log(`Update'${__filename}'`);
  delete require.cache[file];
  require(file);
});
