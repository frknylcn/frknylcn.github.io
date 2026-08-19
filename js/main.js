// ======================
// PROJELER
// ======================
const projects = [
    {
        title: "Karanlık Madenci",
        description: "Godot ile geliştirdiğim 2D madencilik oyunu. Oyuncu madenleri keşfediyor, değerli kaynaklar topluyor, ekipmanlarını geliştiriyor ve farklı özelliklerin kilidini açıyor.",
        tech: "Godot • GDScript • Android",
        link: "#",
        status: "Geliştiriliyor"
    },
    {
        title: "Dolapta Ne Var?",
        description: "Kullanıcının elindeki malzemeleri seçerek yapabileceği yemekleri bulmasına yardımcı olan mobil tarif uygulaması. Yüzlerce Türk yemeği, tatlı, içecek ve atıştırmalık içeriyor.",
        tech: "JavaScript • Vite • Capacitor • Android",
        link: "#",
        status: "Android Uygulaması"
    },
    {
        title: "2D Tower Defense",
        description: "Godot ile geliştirdiğim 2D strateji oyunu. Oyuncular asker üreterek kendi kalelerini korurken rakip kaleyi yok etmeye çalışıyor.",
        tech: "Godot • GDScript",
        link: "#",
        status: "Oyun Projesi"
    },
    {
        title: "Kişisel Portfolio",
        description: "Projelerimi, yazılım çalışmalarımı ve geliştirme sürecimi sergilemek için hazırladığım responsive kişisel portfolio web sitesi.",
        tech: "HTML • Tailwind CSS • JavaScript",
        link: "https://frknylcn.github.io/portfolio/",
        status: "Yayında"
    }
];

const container = document.getElementById('projects-container');

if (container) {
    projects.forEach(project => {
        const card = document.createElement('div');
        card.className = 'project-card rounded-3xl p-8 h-full flex flex-col';

        card.innerHTML = `
            <h3 class="text-2xl font-semibold mb-4">${project.title}</h3>

            <p class="text-zinc-400 mb-6 flex-grow">
                ${project.description}
            </p>

            <div class="mt-auto">
                <p class="text-purple-400 text-sm mb-4">
                    ${project.tech}
                </p>

                <a href="${project.link}"
                   class="inline-flex items-center gap-2 text-purple-400 hover:text-purple-300 font-medium">
                    Projeyi İncele →
                </a>
            </div>
        `;

        container.appendChild(card);
    });
}

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

if (blogContainer) {
    blogPosts.forEach(post => {
        const card = document.createElement('div');
        card.className = 'blog-card bg-zinc-900 border border-zinc-800 rounded-3xl p-8 hover:border-purple-500 transition h-full flex flex-col';

        card.innerHTML = `
            <p class="text-purple-400 text-sm mb-3">${post.date}</p>

            <h3 class="text-2xl font-semibold mb-4">
                ${post.title}
            </h3>

            <p class="text-zinc-400 mb-6 flex-grow">
                ${post.summary}
            </p>

            <a href="${post.link}"
               class="text-purple-400 hover:text-purple-300 font-medium inline-flex items-center gap-2 mt-auto">
                Devamını Oku →
            </a>
        `;

        blogContainer.appendChild(card);
    });
}
