import { watchFile, unwatchFile } from 'fs'
import chalk from 'chalk'
import { fileURLToPath } from 'url'

global.owner = [
  ['51907269769', 'kenn', true],
  ['5491168352204']
] //Numeros de owner 

global.mods = [''] 
global.prems = ['50489079501', '573143917092']
global.APIs = { // API Prefix
  // name: 'https://website' 
  nrtm: 'https://fg-nrtm.ddns.net',
  fgmods: 'https://api.fgmods.xyz'
}
global.APIKeys = { // APIKey Here
  // 'https://website': 'apikey'
  'https://api.fgmods.xyz': 'DRLg5kY7' //--- 100 de límite diario --- Regístrese en https://api.fgmods.xyz/
}

// Sticker WM
global.packname = 'onyx┃ᴮᴼᵀ' 
global.author = '@kenn' 

//--info FG
global.botName = 'onyx'
global.fgig = 'https://www.instagram.com/onyx' 
global.fgsc = 'https://github.com/FG98F/onyx' 
global.fgyt = 'https://youtube.com/onyxmd'
global.fgpyp = 'https://paypal.me/onyx'
global.fglog = 'https://i.ibb.co/dfGQwxg/avatar-contact.jpgs' 

//--- Grupos WA
global.fgcanal = 'https://whatsapp.com/channel/0029VaEa55S0QeabqPOyfA19'
global.bgp = 'https://whatsapp.com/channel/0029VaEa55S0QeabqPOyfA19'
global.bgp2 = 'https://whatsapp.com/channel/0029VaEa55S0QeabqPOyfA19'
global.bgp3 = 'https://whatsapp.com/channel/0029VaEa55S0QeabqPOyfA19' //--GP NSFW

global.wait = '⌛ _Cargando..._\n*▬▬▬▭*'
global.rwait = '⌛'
global.dmoji = '🤭'
global.done = '✅'
global.error = '❌' 
global.xmoji = '🔥' 

global.multiplier = 69 
global.maxwarn = '2' // máxima advertencias

let file = fileURLToPath(import.meta.url)
watchFile(file, () => {
  unwatchFile(file)
  console.log(chalk.redBright("Update 'config.js'"))
  import(`${file}?update=${Date.now()}`)
})
