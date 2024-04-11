// ██████╗ ███████╗███╗   ██╗███████╗██████╗  █████╗ ██╗          ██████╗ ██████╗ ███╗   ██╗███████╗██╗ ██████╗ 
//██╔════╝ ██╔════╝████╗  ██║██╔════╝██╔══██╗██╔══██╗██║         ██╔════╝██╔═══██╗████╗  ██║██╔════╝██║██╔════╝ 
//██║  ███╗█████╗  ██╔██╗ ██║█████╗  ██████╔╝███████║██║         ██║     ██║   ██║██╔██╗ ██║█████╗  ██║██║  ███╗
//██║   ██║██╔══╝  ██║╚██╗██║██╔══╝  ██╔══██╗██╔══██║██║         ██║     ██║   ██║██║╚██╗██║██╔══╝  ██║██║   ██║
//╚██████╔╝███████╗██║ ╚████║███████╗██║  ██║██║  ██║███████╗    ╚██████╗╚██████╔╝██║ ╚████║██║     ██║╚██████╔╝
// ╚═════╝ ╚══════╝╚═╝  ╚═══╝╚══════╝╚═╝  ╚═╝╚═╝  ╚═╝╚══════╝     ╚═════╝ ╚═════╝ ╚═╝  ╚═══╝╚═╝     ╚═╝ ╚═════╝ 

const Config = new Object();

Config.BackgroundSettings = {
    background_source : "music", // possible values (video/image)
    background_sound_source : "music", // possible values (video/music/mute)
    background_video_path : "./assets/video.mp4", // you can use a discord link to avoid charginf video in the script
    background_music_path : "./assets/music.mp3",
    default_sound_volume: 30,
}

Config.Title = { 
    title : "BUEN", 
    subtitle : "CLIMA" 
}

Config.ServerInformation = {
    title : "INFORMACIÓN GENERAL",
    subtitle : "",
    infos : [
        { info : "Disfruta de una increíble experiencia ROLEPLAY" },
        { info : "Tenemos drogas personalizadas, coches exclusivos, mapeados asombrosos y sobre todo un ambiente muy amigable" },
        { info : "Conoce nuestros eventos y haz nuevas amistades en nuestra ciudad" },
    ]
}

Config.ServerRules = {
    title : "Normativa del Servidor",
    subtitle : "Resumen de lo más importante a modo de consejo",
    rules : [
        { title: "Consejo #1", description : "Se amable con los demás usuarios y respetalos en todo momento" },
        { title: "Consejo #2", description : "Valora siempre tu vida" },
        { title: "Consejo #3", description : "En caso de duda, es mejor visitar el discord y preguntar" },
        { title: "Consejo #4", description : "Recuerda que esto es un juego, lo importante es pasarlo bien siempre" },
    ]
}

Config.Staff = {
    title : "Staff",
    subtitle : "",
    members : [
        {name : "CarlosLR", role :"Fundador", avatar:"https://media.discordapp.net/attachments/865174783910084609/1201011303280549964/emoji.png"},
        {name : "Cuscusero", role :"Programador", avatar:"https://cdn.discordapp.com/avatars/182891569232216065/bf565114329db88b69e27b2acc8abe6f.png"},
        {name : "John Deivy", role :"Director", avatar:"https://cdn.discordapp.com/avatars/677601591704027167/83b8515f46237ce3b365953015d1c73d.png"},
        {name : "Sky Jazz", role :"Director", avatar:"https://media.discordapp.net/attachments/815716203150180372/1201012761061240912/MedallionDiscordServerIconSilver_540x.jpg"},
        {name : "ARGENTINO", role :"Directiva", avatar:"https://media.discordapp.net/attachments/1184518385732685835/1197681479350755489/image.png"},
        {name : "JuanCarl", role :"Directiva", avatar:"https://cdn.discordapp.com/avatars/219761191952580608/e40cd3a274a612927ec8fb1761514b43.png"}, 
    ]
}

Config.SocialMedia = [
    {name : "DISCORD", label : "discord.gg/buenclimarp", link : "https://discord.gg/buenclimarp", icon : "fa-brands fa-discord", color:"#5562EA"},
    {name : "WEBSITE", label : "www.buenclimarp.com", link : "https://buenclimarp.com", icon : "fa-solid fa-globe", color:"#9249C0"},
]

Config.Locales = {
    Welcome : "BIENVENIDOS A",
    Sound : "MUSICA",
    Loading : "Descargando datos, por favor espera...",
}
