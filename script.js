const container = document.getElementById('links-container');

// 30 реальных идентификаторов
const realLangs = [
    { name: "Dead Inside", code: "deadinsidememe" },
    { name: "Sigma", code: "sigma-alpha" },
    { name: "Dota 2", code: "dota2-ru" },
    { name: "CS:GO", code: "csgo-ru" },
    { name: "Minecraft", code: "minecraft-ru" },
    { name: "Cyberpunk", code: "cyberpunk-2077" },
    { name: "Anime Style", code: "anime-style" },
    { name: "Matrix", code: "matrix-code" },
    { name: "Dark Theme", code: "dark-mode" },
    { name: "Phonk", code: "phonk-vibes" },
    { name: "GigaChad", code: "gigachad" },
    { name: "Skibidi", code: "skibidi" },
    { name: "Among Us", code: "among-us" },
    { name: "Genshin", code: "genshin-impact" },
    { name: "Witcher", code: "witcher-pack" },
    { name: "Rick & Morty", code: "rick-morty" },
    { name: "Fallout", code: "fallout-nv" },
    { name: "Skyrim", code: "skyrim-lang" },
    { name: "Stalker", code: "stalker-lang" },
    { name: "GTA V", code: "gta-v-style" },
    { name: "Roblox", code: "roblox-lang" },
    { name: "Doom", code: "doom-guy" },
    { name: "Harry Potter", code: "hogwarts" },
    { name: "Lord of Rings", code: "lotr-lang" },
    { name: "Naruto", code: "naruto-pack" },
    { name: "One Piece", code: "one-piece" },
    { name: "Tokyo Ghoul", code: "kaneki" },
    { name: "Death Note", code: "kira-lang" },
    { name: "Berserk", code: "guts-pack" },
    { name: "Breaking Bad", code: "heisenberg" }
];

// Генерируем 100 кнопок
for (let i = 0; i < 100; i++) {
    const card = document.createElement('div');
    card.className = 'card';
    
    // Если есть реальный язык — берем его, если нет — ставим заглушку
    const lang = realLangs[i] || { name: `Language Pack #${i + 1}`, code: `lang-${i}` };
    
    card.innerHTML = `
        <span style="font-size: 13px;">${lang.name}</span>
        <a href="https://t.me/setlanguage/${lang.code}" class="btn" target="_blank">Скачать</a>
    `;
    container.appendChild(card);
}
