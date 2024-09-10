const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="samsamsun789@gmail.com"
global.location="Lahore,Pakistan."
global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "120363023983262391@g.us"
global.DATABASE_URI = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://telegra.ph/file/d5b1c3544fedc23e11a06.jpg" ; // SET LOGO FOR IMAGE 



global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "2347046425152";




//========================= [ BOT SETTINGS ] =========================\\
global.style = process.env.STYLE   || '5',  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || "true";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3,
global.disablepm = process.env.DISABLE_PM || "false",
global.MsgsInLog = process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES|| "text",
global.waPresence= process.env.WAPRESENCE ||  "set according to your need" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "923184474176,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd-1.vercel.app"
global.scan = "https://suhail-md-vtsf.onrender.com/";

module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "V.1.2.8",
  caption : process.env.CAPTION || "©sᴜʜᴀɪʟ²²¹-ᴍᴅ" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "Suhail-MD",
  packname: process.env.PACK_NAME || "♥️",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "It'x Suhail",

  sessionName:process.env.SESSION_ID || "SUHAIL_00_17_09_10_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTUyLFxuICAgICAgICA4MixcbiAgICAgICAgNzIsXG4gICAgICAgIDIzNyxcbiAgICAgICAgMTYzLFxuICAgICAgICAxMTUsXG4gICAgICAgIDIwNyxcbiAgICAgICAgNDQsXG4gICAgICAgIDY4LFxuICAgICAgICAxMDQsXG4gICAgICAgIDgsXG4gICAgICAgIDk4LFxuICAgICAgICA0NSxcbiAgICAgICAgNTQsXG4gICAgICAgIDI2LFxuICAgICAgICA3NixcbiAgICAgICAgNzQsXG4gICAgICAgIDMwLFxuICAgICAgICAyNSxcbiAgICAgICAgOTYsXG4gICAgICAgIDE0NSxcbiAgICAgICAgODIsXG4gICAgICAgIDUyLFxuICAgICAgICAxMzksXG4gICAgICAgIDIwOSxcbiAgICAgICAgNDgsXG4gICAgICAgIDk0LFxuICAgICAgICAxMjAsXG4gICAgICAgIDIzOCxcbiAgICAgICAgMTQ5LFxuICAgICAgICAxNDgsXG4gICAgICAgIDgyXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDI0NCxcbiAgICAgICAgNyxcbiAgICAgICAgMTgzLFxuICAgICAgICAyMTQsXG4gICAgICAgIDE0NixcbiAgICAgICAgMTQzLFxuICAgICAgICAzMCxcbiAgICAgICAgMTI1LFxuICAgICAgICAxOTgsXG4gICAgICAgIDIwOSxcbiAgICAgICAgNzUsXG4gICAgICAgIDMwLFxuICAgICAgICA1OCxcbiAgICAgICAgMTI2LFxuICAgICAgICAzMSxcbiAgICAgICAgMjEzLFxuICAgICAgICAyMyxcbiAgICAgICAgMjQyLFxuICAgICAgICAxNDUsXG4gICAgICAgIDE5NSxcbiAgICAgICAgMjQ2LFxuICAgICAgICAyMzQsXG4gICAgICAgIDY0LFxuICAgICAgICAxMDcsXG4gICAgICAgIDIsXG4gICAgICAgIDIzNixcbiAgICAgICAgMTI1LFxuICAgICAgICAxMTksXG4gICAgICAgIDE2MixcbiAgICAgICAgMTUxLFxuICAgICAgICAzNyxcbiAgICAgICAgMjFcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDEwNCxcbiAgICAgICAgOCxcbiAgICAgICAgMTIsXG4gICAgICAgIDE5MSxcbiAgICAgICAgMTg4LFxuICAgICAgICA3MCxcbiAgICAgICAgMzgsXG4gICAgICAgIDY0LFxuICAgICAgICAzLFxuICAgICAgICAyMzQsXG4gICAgICAgIDEzMixcbiAgICAgICAgMjA4LFxuICAgICAgICAxNCxcbiAgICAgICAgNDEsXG4gICAgICAgIDgsXG4gICAgICAgIDExNyxcbiAgICAgICAgNjcsXG4gICAgICAgIDE4NCxcbiAgICAgICAgMTg1LFxuICAgICAgICA0MCxcbiAgICAgICAgNDcsXG4gICAgICAgIDIyNCxcbiAgICAgICAgMzAsXG4gICAgICAgIDksXG4gICAgICAgIDIxNixcbiAgICAgICAgMjQ5LFxuICAgICAgICAxMTgsXG4gICAgICAgIDU3LFxuICAgICAgICAxODksXG4gICAgICAgIDk3LFxuICAgICAgICA5OSxcbiAgICAgICAgMTA1XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDUyLFxuICAgICAgICAyMTksXG4gICAgICAgIDIxMixcbiAgICAgICAgMjMxLFxuICAgICAgICAyMDYsXG4gICAgICAgIDc2LFxuICAgICAgICAxNzQsXG4gICAgICAgIDEyNyxcbiAgICAgICAgMjI4LFxuICAgICAgICA5OCxcbiAgICAgICAgMTM2LFxuICAgICAgICAyNTIsXG4gICAgICAgIDEyMyxcbiAgICAgICAgNTAsXG4gICAgICAgIDI5LFxuICAgICAgICA3NSxcbiAgICAgICAgMjMzLFxuICAgICAgICAzNSxcbiAgICAgICAgMTQwLFxuICAgICAgICAzMCxcbiAgICAgICAgMzAsXG4gICAgICAgIDIyOCxcbiAgICAgICAgMixcbiAgICAgICAgMTAwLFxuICAgICAgICA3MyxcbiAgICAgICAgNDksXG4gICAgICAgIDY3LFxuICAgICAgICAyMTcsXG4gICAgICAgIDIyMSxcbiAgICAgICAgMjMxLFxuICAgICAgICAxNjIsXG4gICAgICAgIDQwXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNTIsXG4gICAgICAgIDE4OSxcbiAgICAgICAgMTE0LFxuICAgICAgICAyMjUsXG4gICAgICAgIDE1NyxcbiAgICAgICAgMTQyLFxuICAgICAgICAxNzYsXG4gICAgICAgIDIwMSxcbiAgICAgICAgMzAsXG4gICAgICAgIDIwMyxcbiAgICAgICAgMjUwLFxuICAgICAgICAyMTIsXG4gICAgICAgIDE2LFxuICAgICAgICAxMTAsXG4gICAgICAgIDU2LFxuICAgICAgICA2MixcbiAgICAgICAgMTY4LFxuICAgICAgICAyMzEsXG4gICAgICAgIDI0NyxcbiAgICAgICAgMTU3LFxuICAgICAgICA1OSxcbiAgICAgICAgMTEsXG4gICAgICAgIDk0LFxuICAgICAgICAyMjIsXG4gICAgICAgIDc4LFxuICAgICAgICAxMDMsXG4gICAgICAgIDEyOCxcbiAgICAgICAgNzAsXG4gICAgICAgIDIzMyxcbiAgICAgICAgMTA1LFxuICAgICAgICAyMDgsXG4gICAgICAgIDY2XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIyMyxcbiAgICAgICAgMjQ0LFxuICAgICAgICAyNDcsXG4gICAgICAgIDExMSxcbiAgICAgICAgMTgyLFxuICAgICAgICAzNixcbiAgICAgICAgMjQxLFxuICAgICAgICAxMjcsXG4gICAgICAgIDU3LFxuICAgICAgICA1MCxcbiAgICAgICAgNzcsXG4gICAgICAgIDQxLFxuICAgICAgICA4OCxcbiAgICAgICAgNjQsXG4gICAgICAgIDExOCxcbiAgICAgICAgMTY4LFxuICAgICAgICAxNTYsXG4gICAgICAgIDgyLFxuICAgICAgICAxMzgsXG4gICAgICAgIDIxMyxcbiAgICAgICAgMjQ2LFxuICAgICAgICAxNSxcbiAgICAgICAgMjE1LFxuICAgICAgICAxMTAsXG4gICAgICAgIDIzNyxcbiAgICAgICAgMjA4LFxuICAgICAgICAxODEsXG4gICAgICAgIDE0NyxcbiAgICAgICAgNCxcbiAgICAgICAgMTIsXG4gICAgICAgIDAsXG4gICAgICAgIDEyM1xuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxNixcbiAgICAgICAgICA1LFxuICAgICAgICAgIDI0MixcbiAgICAgICAgICAxNDksXG4gICAgICAgICAgMTQyLFxuICAgICAgICAgIDE0NyxcbiAgICAgICAgICAxMDUsXG4gICAgICAgICAgOTEsXG4gICAgICAgICAgMTI1LFxuICAgICAgICAgIDQ1LFxuICAgICAgICAgIDY2LFxuICAgICAgICAgIDQzLFxuICAgICAgICAgIDIxNyxcbiAgICAgICAgICAxNzgsXG4gICAgICAgICAgMTIyLFxuICAgICAgICAgIDE1MixcbiAgICAgICAgICA2MSxcbiAgICAgICAgICAxNDEsXG4gICAgICAgICAgMTk1LFxuICAgICAgICAgIDE5NSxcbiAgICAgICAgICAxOTIsXG4gICAgICAgICAgMTQzLFxuICAgICAgICAgIDU5LFxuICAgICAgICAgIDE0NCxcbiAgICAgICAgICA5NSxcbiAgICAgICAgICAxNTUsXG4gICAgICAgICAgNSxcbiAgICAgICAgICAxODksXG4gICAgICAgICAgMjMwLFxuICAgICAgICAgIDEwOCxcbiAgICAgICAgICA1NixcbiAgICAgICAgICA3MFxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxMixcbiAgICAgICAgICAxNDAsXG4gICAgICAgICAgMjU0LFxuICAgICAgICAgIDI0NSxcbiAgICAgICAgICAxNzcsXG4gICAgICAgICAgMTMyLFxuICAgICAgICAgIDY5LFxuICAgICAgICAgIDk4LFxuICAgICAgICAgIDE5NyxcbiAgICAgICAgICAxMTQsXG4gICAgICAgICAgNDMsXG4gICAgICAgICAgMjQsXG4gICAgICAgICAgNzAsXG4gICAgICAgICAgMTc3LFxuICAgICAgICAgIDIzMyxcbiAgICAgICAgICAxMzEsXG4gICAgICAgICAgMzEsXG4gICAgICAgICAgMjMxLFxuICAgICAgICAgIDUxLFxuICAgICAgICAgIDE3OCxcbiAgICAgICAgICAxMjMsXG4gICAgICAgICAgMTYwLFxuICAgICAgICAgIDEwNCxcbiAgICAgICAgICAxODEsXG4gICAgICAgICAgODAsXG4gICAgICAgICAgMTA5LFxuICAgICAgICAgIDE3OCxcbiAgICAgICAgICAyNCxcbiAgICAgICAgICAxNTYsXG4gICAgICAgICAgMTczLFxuICAgICAgICAgIDE4MSxcbiAgICAgICAgICAyMFxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIxMixcbiAgICAgICAgMjAyLFxuICAgICAgICA0OCxcbiAgICAgICAgMTQ2LFxuICAgICAgICAxNDEsXG4gICAgICAgIDE2MSxcbiAgICAgICAgNzAsXG4gICAgICAgIDEyMCxcbiAgICAgICAgMTAwLFxuICAgICAgICAxNjYsXG4gICAgICAgIDEwNyxcbiAgICAgICAgMTU2LFxuICAgICAgICAxNDgsXG4gICAgICAgIDgxLFxuICAgICAgICAyLFxuICAgICAgICAxNzEsXG4gICAgICAgIDE4MyxcbiAgICAgICAgMzUsXG4gICAgICAgIDExNyxcbiAgICAgICAgMjQzLFxuICAgICAgICAxODMsXG4gICAgICAgIDY2LFxuICAgICAgICA2NSxcbiAgICAgICAgMTQ3LFxuICAgICAgICAyMzMsXG4gICAgICAgIDMwLFxuICAgICAgICAxMDQsXG4gICAgICAgIDE0MSxcbiAgICAgICAgODUsXG4gICAgICAgIDE4OSxcbiAgICAgICAgMTc4LFxuICAgICAgICAyNDEsXG4gICAgICAgIDEyOCxcbiAgICAgICAgNjgsXG4gICAgICAgIDQ0LFxuICAgICAgICAxODEsXG4gICAgICAgIDM4LFxuICAgICAgICAyMzEsXG4gICAgICAgIDk0LFxuICAgICAgICAyNSxcbiAgICAgICAgMTc3LFxuICAgICAgICA5OSxcbiAgICAgICAgMzMsXG4gICAgICAgIDI0MSxcbiAgICAgICAgMjE3LFxuICAgICAgICAzNyxcbiAgICAgICAgMjgsXG4gICAgICAgIDYsXG4gICAgICAgIDI0NSxcbiAgICAgICAgMTEzLFxuICAgICAgICAyMDEsXG4gICAgICAgIDgzLFxuICAgICAgICAyMyxcbiAgICAgICAgMTY1LFxuICAgICAgICAxMzEsXG4gICAgICAgIDk5LFxuICAgICAgICA0NixcbiAgICAgICAgMjgsXG4gICAgICAgIDYwLFxuICAgICAgICAyMDcsXG4gICAgICAgIDIzMixcbiAgICAgICAgMTE3LFxuICAgICAgICA2NyxcbiAgICAgICAgMTI5XG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiAxMjgsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwiTndyMGFub3NSVzR3YWlQemQ0WjBLQzJRNDBMaXBucENNcW5hRTBkZzI0dz1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW10sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAwLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwiQTd0cHc0enNUY2FXVVA4Rnc0aUpVQVwiLFxuICBcInBob25lSWRcIjogXCJhYWJmZjk5My1lOTFkLTQ4NDUtYjU4Yi0zOWY0NzcwM2FkZGVcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgNzUsXG4gICAgICAxNTUsXG4gICAgICAzNCxcbiAgICAgIDExMyxcbiAgICAgIDUwLFxuICAgICAgMyxcbiAgICAgIDUsXG4gICAgICAyMTcsXG4gICAgICAxNDQsXG4gICAgICAyNDksXG4gICAgICAyNDgsXG4gICAgICAxODAsXG4gICAgICAxMzEsXG4gICAgICA5MCxcbiAgICAgIDExMyxcbiAgICAgIDM4LFxuICAgICAgMTk2LFxuICAgICAgNjcsXG4gICAgICAzOSxcbiAgICAgIDE0MlxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICA4NyxcbiAgICAgIDE2NixcbiAgICAgIDEwMyxcbiAgICAgIDE4NixcbiAgICAgIDE4MyxcbiAgICAgIDE4OSxcbiAgICAgIDE1MCxcbiAgICAgIDksXG4gICAgICAxNzUsXG4gICAgICAxNCxcbiAgICAgIDQ2LFxuICAgICAgMTk2LFxuICAgICAgNDUsXG4gICAgICAyNCxcbiAgICAgIDE5MSxcbiAgICAgIDU1LFxuICAgICAgNDEsXG4gICAgICA0NixcbiAgICAgIDE1MSxcbiAgICAgIDFcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiU0pTQjFWTkdcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjIzNDcwNDY0MjUxNTI6MUBzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibmFtZVwiOiBcIlNBTVdFTEwgTUVESUEgQVNTSVNUQU5UXCIsXG4gICAgXCJsaWRcIjogXCI0NjY4Njc0NzUzMzM3OToxQGxpZFwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ0xMKzErRUZFSU9nL3JZR0dBRWdBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwiUEl1YmxMNUNrVTRmRU8vRTZYU1lCZmJ1Wk91TW1SN0VHUjVlMXo4Z3NVST1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCIrZ2FJNnA1VGQvS2ZqbTV3eHNCWlZENDhkQ0tHSis2RndCbWVhZE1nWFFqVnA3V0NHRnhPZ3psUzVhWmdQbVlQNzNmOGNZZjFKbmx3TXdpaHRUaGhqQT09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCJGQnJsQ3NVUFl6WUN3SkJCWGJqWk1yWTR4eTJVRTNJUzJYcncyYXZrdzdXUnVsdG44VUpZTFFhK2swOWlCUkR6dmdhVXpuaW1UK09pWnhUWXBQTFhpUT09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCIyMzQ3MDQ2NDI1MTUyOjFAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICA2MCxcbiAgICAgICAgICAxMzksXG4gICAgICAgICAgMTU1LFxuICAgICAgICAgIDE0OCxcbiAgICAgICAgICAxOTAsXG4gICAgICAgICAgNjYsXG4gICAgICAgICAgMTQ1LFxuICAgICAgICAgIDc4LFxuICAgICAgICAgIDMxLFxuICAgICAgICAgIDE2LFxuICAgICAgICAgIDIzOSxcbiAgICAgICAgICAxOTYsXG4gICAgICAgICAgMjMzLFxuICAgICAgICAgIDExNixcbiAgICAgICAgICAxNTIsXG4gICAgICAgICAgNSxcbiAgICAgICAgICAyNDYsXG4gICAgICAgICAgMjM4LFxuICAgICAgICAgIDEwMCxcbiAgICAgICAgICAyMzUsXG4gICAgICAgICAgMTQwLFxuICAgICAgICAgIDE1MyxcbiAgICAgICAgICAzMCxcbiAgICAgICAgICAxOTYsXG4gICAgICAgICAgMjUsXG4gICAgICAgICAgMzAsXG4gICAgICAgICAgOTQsXG4gICAgICAgICAgMjE1LFxuICAgICAgICAgIDYzLFxuICAgICAgICAgIDMyLFxuICAgICAgICAgIDE3NyxcbiAgICAgICAgICA2NlxuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwic21iaVwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzI1OTI3NDMxXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LXVuZGVmaW5lZC5qc29uIjoge30KfQ==",  // PUT SESSION ID HERE 
  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,

  aitts_Voice_Id : process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "",
  WORKTYPE: process.env.WORKTYPE||process.env.MODE || "private",
  LANG: process.env.THEME ? process.env.THEME.toUpperCase() : "SUHAIL",



};




























global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
 
