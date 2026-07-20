// ======================
// PROJELER
// ======================
const projects = [
    {
        title: "Portfolio Web Sitesi",
        description: "Grok AI ile birlikte geliştirdiğim bu kişisel portfolio sitem. Responsive tasarım, mobil uyumlu menü ve modern UI/UX özellikleri içeriyor.",
        tech: "HTML, CSS, Tailwind CSS, JavaScript",
        link: "https://frknylcn.github.io/portfolio/"
    },
    {
        title: "Proje Adı 2",
        description: "Bu projede ne yaptığını, hangi sorunu çözdüğünü ve ne öğrendiğini detaylı yaz.",
        tech: "Godot, GDScript",
        link: "#"
    },
    {
        title: "Proje Adı 3",
        description: "Üçüncü projen hakkında bilgi ver. Teknolojiler, zorluklar ve sonuç.",
        tech: "Flutter, Dart",
        link: "#"
    }
];

const container = document.getElementById('projects-container');

projects.forEach(project => {
    const card = document.createElement('div');
    card.className = 'project-card rounded-3xl p-8 h-full flex flex-col';
    card.innerHTML = `
        <h3 class="text-2xl font-semibold mb-4">${project.title}</h3>
        <p class="text-zinc-400 mb-6 flex-grow">${project.description}</p>
        <div class="mt-auto">
            <p class="text-purple-400 text-sm mb-4">${project.tech}</p>
            <a href="${project.link}" class="inline-flex items-center gap-2 text-purple-400 hover:text-purple-300 font-medium">
                Projeyi İncele →
            </a>
        </div>
    `;
    container.appendChild(card);
});

// ======================
// BLOG YAZILARI
// ======================
const blogPosts = [
    {
        title: "İlk Portfolio Sitemi Geliştirdim",
        date: "20 Temmuz 2026",
        summary: "Grok ile birlikte sıfırdan bir web sitesi nasıl yapılır öğrendim. Süreç, karşılaştığım zorluklar ve çıkardığım dersler.",
        link: "#"
    },
    {
        title: "Kali Linux'a Giriş ve İlk Deneyimlerim",
        date: "18 Temmuz 2026",
        summary: "Siber güvenlik dünyasına ilk adımımı attım. Kali Linux kurulumundan temel komutlara kadar öğrendiklerimi paylaştım.",
        link: "#"
    },
    {
        title: "Web Geliştirmede Tailwind CSS Kullanımı",
        date: "15 Temmuz 2026",
        summary: "Tailwind CSS ile hızlı ve modern tasarım yapmanın avantajlarını ve bu sitede nasıl kullandığımı anlattım.",
        link: "#"
    }
];

const blogContainer = document.getElementById('blog-container');

blogPosts.forEach(post => {
    const card = document.createElement('div');
    card.className = 'blog-card bg-zinc-900 border border-zinc-800 rounded-3xl p-8 hover:border-purple-500 transition h-full flex flex-col';
    card.innerHTML = `
        <p class="text-purple-400 text-sm mb-3">${post.date}</p>
        <h3 class="text-2xl font-semibold mb-4">${post.title}</h3>
        <p class="text-zinc-400 mb-6 flex-grow">${post.summary}</p>
        <a href="${post.link}" class="text-purple-400 hover:text-purple-300 font-medium inline-flex items-center gap-2 mt-auto">
            Devamını Oku →
        </a>
    `;
    blogContainer.appendChild(card);
});