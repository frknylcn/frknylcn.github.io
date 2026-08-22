// ======================
// PROJELER
// ======================

const projects = [

    {
        title: "Karanlık Madenci",

        description:
            "Godot ile geliştirdiğim 2D madencilik oyunu. Oyuncu madenleri keşfediyor, değerli kaynaklar topluyor, ekipmanlarını geliştiriyor ve farklı özelliklerin kilidini açıyor.",

        tech: [
            "Godot",
            "GDScript",
            "Android"
        ],

        image: "/images/projects/karanlik-madenci.jpg",

        link: "",

        status: "Geliştiriliyor"
    },


    {
        title: "Dolapta Ne Var?",

        description:
            "Kullanıcının elindeki malzemeleri seçerek yapabileceği yemekleri bulmasına yardımcı olan mobil tarif uygulaması. Yüzlerce Türk yemeği, tatlı, içecek ve atıştırmalık içeriyor.",

        tech: [
            "JavaScript",
            "Vite",
            "Capacitor",
            "Android"
        ],

        image: "/images/projects/dolapta-ne-var.jpeg",

        link: "",

        status: "Android Uygulaması"
    },


    {
        title: "Haspet Defense",

        description:
            "Godot ile geliştirdiğim 2D strateji oyunu. Oyuncular asker üreterek kendi kalelerini korurken rakip kaleyi yok etmeye çalışıyor.",

        tech: [
            "Godot",
            "GDScript"
        ],

        image: "/images/projects/haspet-defense.jpg",

        link: "",

        status: "Oyun Projesi"
    },


    {
        title: "Kişisel Portfolio",

        description:
            "Projelerimi, yazılım çalışmalarımı ve geliştirme sürecimi sergilemek için hazırladığım responsive kişisel portfolio web sitesi.",

        tech: [
            "HTML",
            "Tailwind CSS",
            "JavaScript"
        ],

        image: "/images/projects/portfolio.jpeg",

        link: "https://frknylcn.github.io/",

        status: "Yayında"
    }

];



// ======================
// PROJE KARTLARI
// ======================

const container = document.getElementById("projects-container");


if (container) {

    projects.forEach((project) => {

        const card = document.createElement("article");


        card.className = `
            project-card
            group
            bg-zinc-900
            border border-zinc-800
            rounded-3xl
            overflow-hidden
            h-full
            flex flex-col
            hover:border-purple-500/70
            transition
            duration-300
            md:hover:-translate-y-1
        `;


        // Teknoloji etiketlerini oluştur
        const techTags = project.tech
            .map((technology) => {

                return `
                    <span
                        class="
                            inline-flex
                            items-center
                            bg-zinc-950
                            border border-zinc-800
                            text-zinc-400
                            px-3 py-1.5
                            rounded-lg
                            text-xs
                        "
                    >
                        ${technology}
                    </span>
                `;

            })
            .join("");


        card.innerHTML = `

            <!-- ====================== -->
            <!-- PROJE GÖRSELİ -->
            <!-- ====================== -->

            <div
                class="
                    relative
                    w-full
                    h-48
                    sm:h-56
                    md:h-64
                    bg-zinc-950
                    overflow-hidden
                "
            >

                <img
                    src="${project.image}"
                    alt="${project.title} projesi"
                    loading="lazy"
                    class="
                        w-full
                        h-full
                        object-cover
                        transition
                        duration-500
                        group-hover:scale-[1.03]
                    "
                >


                <!-- Hafif Gradient -->
                <div
                    class="
                        absolute
                        inset-x-0
                        bottom-0
                        h-20
                        bg-gradient-to-t
                        from-zinc-900
                        to-transparent
                        pointer-events-none
                    "
                >
                </div>

            </div>



            <!-- ====================== -->
            <!-- PROJE İÇERİĞİ -->
            <!-- ====================== -->

            <div
                class="
                    p-5
                    sm:p-6
                    md:p-8
                    flex
                    flex-col
                    flex-grow
                "
            >


                <!-- Durum -->
                <div class="mb-4">

                    <span
                        class="
                            inline-flex
                            items-center
                            bg-purple-500/10
                            text-purple-400
                            border border-purple-500/20
                            px-3 py-1.5
                            rounded-full
                            text-xs
                            font-medium
                        "
                    >

                        ${project.status}

                    </span>

                </div>



                <!-- Başlık -->
                <h2
                    class="
                        text-xl
                        sm:text-2xl
                        font-semibold
                        mb-3
                        tracking-tight
                    "
                >

                    ${project.title}

                </h2>



                <!-- Açıklama -->
                <p
                    class="
                        text-zinc-400
                        text-sm
                        sm:text-base
                        mb-5
                        flex-grow
                        leading-relaxed
                    "
                >

                    ${project.description}

                </p>



                <!-- Teknolojiler -->
                <div
                    class="
                        flex
                        flex-wrap
                        gap-2
                        mb-6
                    "
                >

                    ${techTags}

                </div>



                <!-- Alt Kısım -->
                <div
                    class="
                        mt-auto
                        pt-5
                        border-t
                        border-zinc-800
                    "
                >

                    ${
                        project.link

                        ? `

                            <a
                                href="${project.link}"
                                target="_blank"
                                rel="noopener noreferrer"
                                class="
                                    group/link
                                    inline-flex
                                    items-center
                                    gap-2
                                    text-purple-400
                                    hover:text-purple-300
                                    font-medium
                                    transition
                                "
                            >

                                Projeyi İncele

                                <span
                                    class="
                                        transition
                                        group-hover/link:translate-x-1
                                    "
                                >
                                    →
                                </span>

                            </a>

                        `

                        : `

                            <span
                                class="
                                    inline-flex
                                    items-center
                                    gap-2
                                    text-zinc-600
                                    text-sm
                                    font-medium
                                "
                            >

                                <span
                                    class="
                                        w-2 h-2
                                        rounded-full
                                        bg-zinc-700
                                    "
                                >
                                </span>

                                Proje bağlantısı yakında

                            </span>

                        `
                    }

                </div>


            </div>

        `;


        container.appendChild(card);

    });

}
