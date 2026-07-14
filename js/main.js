// Örnek Projeler (Sen sonradan değiştirebilirsin)
const projects = [
    {
        title: "Proje Adı 1",
        description: "Kısa açıklama yazacaksın burada.",
        tech: "HTML, CSS, JavaScript",
        link: "#"
    },
    {
        title: "Proje Adı 2",
        description: "Buraya da başka bir proje açıklaması yaz.",
        tech: "Python, Godot",
        link: "#"
    },
    {
        title: "Proje Adı 3",
        description: "Üçüncü proje açıklaması.",
        tech: "Flutter",
        link: "#"
    }
];

// Projeleri sayfaya ekle
const container = document.getElementById('projects-container');

projects.forEach(project => {
    const card = document.createElement('div');
    card.className = 'project-card bg-zinc-900 border border-zinc-800 rounded-3xl p-8 hover:border-purple-500';
    card.innerHTML = `
        <h3 class="text-2xl font-semibold mb-3">${project.title}</h3>
        <p class="text-zinc-400 mb-6">${project.description}</p>
        <p class="text-purple-400 text-sm mb-6">${project.tech}</p>
        <a href="${project.link}" class="inline-block text-purple-400 hover:text-purple-300 font-medium">
            Detaylı Gör →
        </a>
    `;
    container.appendChild(card);
});
// Blog Yazıları
const blogPosts = [
    {
        title: "İlk Web Sitemi Yaptım",
        date: "14 Temmuz 2026",
        summary: "Bugün Grok ile birlikte ilk portfolio sitemi yapmaya başladım. Deneyimlerimi burada paylaşacağım.",
        link: "#"
    },
    {
        title: "JavaScript'te DOM Manipülasyonu",
        date: "10 Temmuz 2026",
        summary: "Projeler sayfasında kartları dinamik olarak nasıl eklediğimi anlattım.",
        link: "#"
    }
];

// Blog yazılarını ekle
const blogContainer = document.getElementById('blog-container');

blogPosts.forEach(post => {
    const card = document.createElement('div');
    card.className = 'bg-zinc-900 border border-zinc-800 rounded-3xl p-8 hover:border-purple-500 transition';
    card.innerHTML = `
        <p class="text-purple-400 text-sm mb-3">${post.date}</p>
        <h3 class="text-2xl font-semibold mb-4">${post.title}</h3>
        <p class="text-zinc-400 mb-6">${post.summary}</p>
        <a href="${post.link}" class="text-purple-400 hover:text-purple-300 font-medium">
            Devamını Oku →
        </a>
    `;
    blogContainer.appendChild(card);
});