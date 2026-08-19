// ======================
// PROJELER
// ======================
const projects = [
    {
        title: "Karanlık Madenci",
        description: "Godot ile geliştirdiğim 2D madencilik oyunu. Oyuncu madenleri keşfediyor, değerli kaynaklar topluyor, ekipmanlarını geliştiriyor ve farklı özelliklerin kilidini açıyor.",
        tech: "Godot • GDScript • Android",
        image: "images/projects/karanlik-madenci.jpg",
        link: "#",
        status: "Geliştiriliyor"
    },
    {
        title: "Dolapta Ne Var?",
        description: "Kullanıcının elindeki malzemeleri seçerek yapabileceği yemekleri bulmasına yardımcı olan mobil tarif uygulaması. Yüzlerce Türk yemeği, tatlı, içecek ve atıştırmalık içeriyor.",
        tech: "JavaScript • Vite • Capacitor • Android",
        image: "images/projects/dolapta-ne-var.jpeg",
        link: "#",
        status: "Android Uygulaması"
    },
    {
        title: "Haspet Defense",
        description: "Godot ile geliştirdiğim 2D strateji oyunu. Oyuncular asker üreterek kendi kalelerini korurken rakip kaleyi yok etmeye çalışıyor.",
        tech: "Godot • GDScript",
        image: "images/projects/haspet-defense.jpg",
        link: "#",
        status: "Oyun Projesi"
    },
    {
        title: "Kişisel Portfolio",
        description: "Projelerimi, yazılım çalışmalarımı ve geliştirme sürecimi sergilemek için hazırladığım responsive kişisel portfolio web sitesi.",
        tech: "HTML • Tailwind CSS • JavaScript",
        image: "images/projects/portfolio.jpeg",
        link: "https://frknylcn.github.io/portfolio/",
        status: "Yayında"
    }
];

const container = document.getElementById('projects-container');

if (container) {
    projects.forEach(project => {
        const card = document.createElement('div');

        card.className =
            'project-card bg-zinc-900 border border-zinc-800 rounded-3xl overflow-hidden h-full flex flex-col hover:border-purple-500 transition duration-300';

        card.innerHTML = `

            <!-- Proje Görseli -->
            <div class="w-full h-64 bg-zinc-950 overflow-hidden">
                <img
                    src="${project.image}"
                    alt="${project.title}"
                    class="w-full h-full object-contain transition duration-500 hover:scale-105"
                >
            </div>

            <!-- Proje İçeriği -->
            <div class="p-8 flex flex-col flex-grow">

                <!-- Durum -->
                <div class="mb-4">
                    <span class="inline-block bg-purple-500/10 text-purple-400 border border-purple-500/20 px-3 py-1 rounded-full text-sm">
                        ${project.status}
                    </span>
                </div>

                <!-- Başlık -->
                <h3 class="text-2xl font-semibold mb-4">
                    ${project.title}
                </h3>

                <!-- Açıklama -->
                <p class="text-zinc-400 mb-6 flex-grow leading-relaxed">
                    ${project.description}
                </p>

                <!-- Alt Kısım -->
                <div class="mt-auto">

                    <p class="text-purple-400 text-sm mb-4">
                        ${project.tech}
                    </p>

                    <a
                        href="${project.link}"
                        class="inline-flex items-center gap-2 text-purple-400 hover:text-purple-300 font-medium transition"
                    >
                        Projeyi İncele →
                    </a>

                </div>

            </div>
        `;

        container.appendChild(card);
    });
}

// ======================
// BLOG YAZILARI
// ======================
