const container = document.getElementById('links-container');

// Список из 100 языковых пакетов
const languages = [
    { name: "Dead Inside", code: "deadinsidememe" },
    { name: "Hype", code: "hype-lang" },
    { name: "Cyberpunk", code: "cyberpunk" },
    { name: "Tokyo Ghoul", code: "kaneki-tg" },
    { name: "Anime Style", code: "anime-style" },
    { name: "Dota 2 Pack", code: "dota2-ru" },
    { name: "CS:GO Style", code: "csgo-pack" },
    { name: "Dark Mode UI", code: "dark-mode-ui" },
    { name: "Matrix Style", code: "matrix-style" },
    { name: "Minecraft", code: "minecraft-lang" },
    // ... и так далее до 100
];

// Автоматическое заполнение до 100 элементов, если их меньше
for (let i = languages.length + 1; i <= 100; i++) {
    languages.push({ name: `Custom Language ${i}`, code: `lang-extra-${i}` });
}

languages.forEach(lang => {
    const card = document.createElement('div');
    card.className = 'card';
    card.innerHTML = `
        <span>${lang.name}</span>
        <a href="https://t.me/setlanguage/${lang.code}" class="btn" target="_blank">Скачать</a>
    `;
    container.appendChild(card);
});
