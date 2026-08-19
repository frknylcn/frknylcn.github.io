const blogPosts = [
    {
        title: "Android Uygulamamı Google Play'e Hazırlama Sürecim",
        date: "19 Ağustos 2026",
        summary: "Bir Android uygulamasını Google Play'e hazırlarken AAB oluşturma, mağaza girişi, kapalı test ve yayınlama sürecinde öğrendiklerimi paylaşıyorum.",
        link: "blog-google-play.html",
        category: "Android • Google Play"
    }
];

const blogContainer = document.getElementById('blog-container');

if (blogContainer) {
    blogPosts.forEach(post => {

        const card = document.createElement('article');

        card.className =
            'blog-card bg-zinc-900 border border-zinc-800 rounded-3xl p-8 hover:border-purple-500 transition h-full flex flex-col';

        card.innerHTML = `

            <!-- Kategori -->
            <div class="mb-5">
                <span class="inline-block bg-purple-500/10 text-purple-400 border border-purple-500/20 px-3 py-1 rounded-full text-xs font-medium">
                    ${post.category}
                </span>
            </div>

            <!-- Tarih -->
            <p class="text-zinc-500 text-sm mb-3">
                ${post.date}
            </p>

            <!-- Başlık -->
            <h3 class="text-2xl font-semibold mb-4">
                ${post.title}
            </h3>

            <!-- Özet -->
            <p class="text-zinc-400 mb-7 flex-grow leading-relaxed">
                ${post.summary}
            </p>

            <!-- Yazı Linki -->
            <a
                href="${post.link}"
                class="group text-purple-400 hover:text-purple-300 font-medium inline-flex items-center gap-2 mt-auto"
            >
                Yazıyı Oku

                <span class="group-hover:translate-x-1 transition">
                    →
                </span>
            </a>
        `;

        blogContainer.appendChild(card);
    });
}
