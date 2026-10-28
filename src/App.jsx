import { useEffect, useMemo, useState } from "react";

const translations = {
  tr: {
    nav: {
      about: "Hakkımda",
      education: "Eğitim",
      skills: "Yetenekler",
      projects: "Projeler",
      cv: "CV",
      contact: "İletişim",
    },
    hero: {
      greeting: "Merhaba, Ben Göktuğ Burak",
      subtitle: "Web Teknolojileri Geliştiricisi | Frontend Developer",
      ctaProjects: "Projelerimi İncele",
      ctaContact: "Benimle Çalışın",
    },
    about: {
      title: "Hakkımda",
      text: "Kod yazmak benim için sadece bir iş değil, vizyonumu dijital dünyaya aktarma biçimim. Anadolu Üniversitesi Ön-Yüz Yazılım Geliştirme programında ikinci sınıf öğrencisiyim. Eğitimimi web geliştirme çalışmalarım ve Anadolu Üniversitesi BAUM'daki staj deneyimlerimle bir araya getiriyorum. Temiz, ölçeklenebilir ve kullanıcı odaklı çözümler üretmek için modern web teknolojileriyle çalışıyorum. Hızlıca göz atılabilir, net ve performanslı arayüzler kurmayı önceliklendiriyorum.",
    },
    skills: {
      title: "Yetenekler",
    },
    projects: {
      title: "Projeler",
      items: [
        {
          name: "Haraco",
          description: "E-ticaret platformu — Modern UI ve performans odaklı bir çözüm.",
          tech: ["React", "TypeScript", ".NET"],
        },
        {
          name: "Hair Art Mehmet Kalkan",
          description: "Randevu otomasyonu ve yönetim paneli ile salon süreçlerini dijitalleştiriyor.",
          tech: ["React", "JavaScript", ".NET"],
        },
        {
          name: "Anista",
          description: "Kurumsal web uygulaması — Staj dönemi projesi, kurumsal ihtiyaçlara yönelik arayüz.",
          tech: ["Angular", "TypeScript", ".NET"],
        },
      ],
    },
    contact: {
      title: "İletişim",
      email: "İletişim E-postası",
    },
    footer: {
      rights: "Tüm hakları saklıdır.",
    },
  },
  en: {
    nav: {
      about: "About",
      education: "Education",
      skills: "Skills",
      projects: "Projects",
      cv: "Resume",
      contact: "Contact",
    },
    hero: {
      greeting: "Hi, I'm Göktuğ Burak",
      subtitle: "Web Technologies Developer | Frontend Developer",
      ctaProjects: "View Projects",
      ctaContact: "Work With Me",
    },
    about: {
      title: "About Me",
      text: "Coding isn't just a job for me — it's the way I bring my vision to the digital world. I'm a second-year student in the Front-End Software Development program at Anadolu University. I combine my education with web development projects and my internship at Anadolu University BAUM. I focus on building clean, scalable, user-centric solutions using modern web technologies. I prioritize fast, readable, performant interfaces designed for quick evaluation.",
    },
    skills: {
      title: "Skills",
    },
    projects: {
      title: "Projects",
      items: [
        {
          name: "Haraco",
          description: "E-commerce platform — Modern UI with a strong focus on performance.",
          tech: ["React", "TypeScript", ".NET"],
        },
        {
          name: "Hair Art Mehmet Kalkan",
          description: "Appointment automation and admin panel to digitize salon workflows.",
          tech: ["React", "JavaScript", ".NET"],
        },
        {
          name: "Anista",
          description: "Corporate web application — Internship project tailored to business needs.",
          tech: ["Angular", "TypeScript", ".NET"],
        },
      ],
    },
    contact: {
      title: "Contact",
      email: "Contact Email",
    },
    footer: {
      rights: "All rights reserved.",
    },
  },
};

const skills = ["HTML", "CSS", "JavaScript", "TypeScript", "React", "Angular", ".NET"];

function App() {
  const [lang, setLang] = useState("tr");

  const t = useMemo(() => translations[lang], [lang]);

  useEffect(() => {
    document.documentElement.lang = lang;
  }, [lang]);

  return (
    <div className="min-h-screen text-white/90">
      <header className="fixed top-0 z-50 w-full glass">
        <nav className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 sm:px-6">
          <a href="#home" className="group flex items-center gap-2">
            <span className="relative inline-flex items-center">
              <span className="absolute -inset-1 rounded-lg bg-gradient-to-r from-accent via-accent2 to-accent3 opacity-20 blur transition group-hover:opacity-40"></span>
              <span className="relative rounded-lg border border-white/10 px-2.5 py-1 font-mono text-sm">
                <span className="text-accent3">{"<"}</span>
                <span className="bg-gradient-to-r from-white to-white/70 bg-clip-text text-transparent">Burak</span>
                <span className="text-accent">Göktuğ</span>
                <span className="text-accent3">{"/>"}</span>
              </span>
            </span>
          </a>
          <div className="hidden items-center gap-6 md:flex">
            <a href="#about" className="text-sm text-white/70 transition hover:text-white">{t.nav.about}</a>
            <a href="#education" className="text-sm text-white/70 transition hover:text-white">{t.nav.education}</a>
            <a href="#skills" className="text-sm text-white/70 transition hover:text-white">{t.nav.skills}</a>
            <a href="#projects" className="text-sm text-white/70 transition hover:text-white">{t.nav.projects}</a>
            <a href="#cv" className="text-sm text-white/70 transition hover:text-white">{t.nav.cv}</a>
            <a href="#contact" className="text-sm text-white/70 transition hover:text-white">{t.nav.contact}</a>
            <button
              onClick={() => setLang(lang === "tr" ? "en" : "tr")}
              className="rounded-full border border-white/10 px-3 py-1 text-xs font-medium text-white/80 transition hover:border-accent/70 hover:text-white"
              aria-label="Toggle language"
            >
              {lang === "tr" ? "EN" : "TR"}
            </button>
          </div>
          <div className="flex items-center gap-2 md:hidden">
            <button
              onClick={() => setLang(lang === "tr" ? "en" : "tr")}
              className="rounded-full border border-white/10 px-2.5 py-1 text-xs text-white/80"
            >
              {lang === "tr" ? "EN" : "TR"}
            </button>
          </div>
        </nav>
      </header>

      <main>
        <section id="home" className="mx-auto flex max-w-6xl flex-col items-start gap-6 px-4 pb-16 pt-28 sm:px-6 sm:pt-36">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/10 px-3 py-1 text-xs text-white/60">
            <span className="h-1.5 w-1.5 rounded-full bg-accent shadow-[0_0_0_6px_rgba(79,155,255,0.08)]" />
            <span className="font-mono">console.log("Hello World");</span>
          </div>
          <h1 className="text-4xl font-semibold tracking-tight sm:text-5xl md:text-6xl">
            {t.hero.greeting}
          </h1>
          <p className="max-w-2xl text-lg text-white/70 sm:text-xl">
            {t.hero.subtitle}
          </p>
          <div className="flex flex-wrap items-center gap-3">
            <a href="#projects" className="rounded-full bg-gradient-to-r from-accent to-accent2 px-5 py-2 text-sm font-medium text-white shadow-[0_0_0_1px_rgba(255,255,255,0.02),0_40px_80px_-40px_rgba(79,155,255,0.9)] transition hover:brightness-110">
              {t.hero.ctaProjects}
            </a>
            <a href="#contact" className="rounded-full border border-white/10 px-5 py-2 text-sm text-white/80 transition hover:border-accent/60 hover:text-white">
              {t.hero.ctaContact}
            </a>
          </div>
        </section>

        <section id="about" className="mx-auto max-w-6xl px-4 py-12 sm:px-6">
          <div className="card p-6 sm:p-8">
            <h2 className="text-xl font-semibold sm:text-2xl">{t.about.title}</h2>
            <p className="mt-4 max-w-3xl leading-relaxed text-white/70">
              {t.about.text}
            </p>
          </div>
        </section>

        <section id="education" className="mx-auto max-w-6xl px-4 py-4 sm:px-6">
          <h2 className="text-xl font-semibold sm:text-2xl">{lang === "tr" ? "Eğitim & Deneyim" : "Education & Experience"}</h2>
          <div className="mt-6 grid gap-4 md:grid-cols-2">
            <div className="card card-hover p-6">
              <div className="flex items-center justify-between">
                <h3 className="text-lg font-medium">{lang === "tr" ? "Eğitim" : "Education"}</h3>
                <span className="rounded-full border border-accent/40 px-2 py-0.5 text-xs text-accent3">{lang === "tr" ? "Devam Ediyor" : "In Progress"}</span>
              </div>
              <div className="mt-4 flex flex-col gap-1">
                <p className="text-white/90">{lang === "tr" ? "Bilgisayar Programcılığı (Ön-Yüz Yazılım Geliştirme)" : "Information Technology (Web Development)"}</p>
                <p className="text-sm text-white/60">{lang === "tr" ? "Anadolu Üniversitesi • Önlisans" : "Anadolu University • Associate Degree"}</p>
                <p className="mt-2 text-sm text-white/50">{lang === "tr" ? "Beklenen Mezuniyet: Haziran 2027 • GNO: 3.10" : "Expected Graduation: June 2027 • GPA: 3.10"}</p>
                <p className="mt-2 text-sm text-white/70">{lang === "tr" ? "Ön uç mimarileri, modern web çerçeveleri ve gerçek zamanlı veritabanı sistemlerine odaklı." : "Focusing on front-end architectures, modern web frameworks, and real-time application database systems."}</p>
              </div>
            </div>
            <div className="card card-hover p-6">
              <div className="flex items-center justify-between">
                <h3 className="text-lg font-medium">{lang === "tr" ? "Deneyim" : "Experience"}</h3>
                <span className="rounded-full border border-accent2/40 px-2 py-0.5 text-xs text-accent2">{lang === "tr" ? "Staj" : "Internship"}</span>
              </div>
              <div className="mt-4 flex flex-col gap-1">
                <p className="text-white/90">{lang === "tr" ? "Stajyer - Yazılım Geliştirme" : "Intern - Software Development"}</p>
                <p className="text-sm text-white/60">{lang === "tr" ? "Anadolu Üniversitesi BAUM" : "Anadolu University BAUM"}</p>
              </div>
            </div>
          </div>
        </section>

        <section id="skills" className="mx-auto max-w-6xl px-4 py-12 sm:px-6">
          <h2 className="text-xl font-semibold sm:text-2xl">{t.skills.title}</h2>
          <div className="mt-6 grid gap-4 md:grid-cols-3">
            <div className="card p-6">
              <h3 className="text-lg font-medium">{lang === "tr" ? "Frontend Teknolojileri" : "Frontend Technologies"}</h3>
              <div className="mt-4 flex flex-wrap gap-2">
                {["HTML5", "CSS3", "JavaScript (ES6+)", "React.js", "Responsive Web Design"].map((skill) => (
                  <span key={skill} className="rounded-full border border-white/10 px-2.5 py-1 text-xs text-white/70">{skill}</span>
                ))}
              </div>
            </div>
            <div className="card p-6">
              <h3 className="text-lg font-medium">{lang === "tr" ? "Backend & Veritabanı" : "Backend & Databases"}</h3>
              <div className="mt-4 flex flex-wrap gap-2">
                {["Firebase (Real-time Database, Authentication)"].map((skill) => (
                  <span key={skill} className="rounded-full border border-white/10 px-2.5 py-1 text-xs text-white/70">{skill}</span>
                ))}
              </div>
            </div>
            <div className="card p-6">
              <h3 className="text-lg font-medium">{lang === "tr" ? "Araçlar & Uzmanlık" : "Tools & Specialties"}</h3>
              <div className="mt-4 flex flex-wrap gap-2">
                {["Git", "GitHub", "Vercel", "Open Code", "E-Commerce Web Development", "Dynamic User Dashboard Panels"].map((skill) => (
                  <span key={skill} className="rounded-full border border-white/10 px-2.5 py-1 text-xs text-white/70">{skill}</span>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section id="projects" className="mx-auto max-w-6xl px-4 py-12 sm:px-6">
          <h2 className="text-xl font-semibold sm:text-2xl">{t.projects.title}</h2>
          <div className="mt-6 grid gap-4 md:grid-cols-2">
            <article className="card card-hover flex h-full flex-col gap-4 p-6">
              <div className="flex items-center justify-between">
                <h3 className="text-lg font-medium">Haraco – Anime-Themed E-Commerce Platform</h3>
                <span className="rounded-full border border-accent/40 px-2 py-0.5 text-xs text-accent3">{lang === "tr" ? "Ön Uç Geliştirici" : "Front-end Developer"}</span>
              </div>
              <ul className="flex flex-col gap-2 text-sm text-white/70">
                <li>• {lang === "tr" ? "Anime temalı figür ve aksesuarlar için duyarlı e-ticaret uygulaması" : "Highly responsive e-commerce web app for anime-themed figures and accessories"}</li>
                <li>• {lang === "tr" ? "React, HTML5, CSS3 ile modüler UI bileşenleri" : "Custom modular UI components with React, HTML5, CSS3"}</li>
                <li>• {lang === "tr" ? "Performans, SEO temelleri ve Vercel'de üretim dağıtımı" : "Optimized performance, SEO foundations, deployed on Vercel"}</li>
              </ul>
              <div className="mt-auto flex flex-wrap gap-2">
                {["React", "HTML5", "CSS3", "Vercel"].map((tech) => (
                  <span key={tech} className="rounded-full border border-white/10 px-2.5 py-1 text-xs text-white/70">{tech}</span>
                ))}
              </div>
            </article>
            <article className="card card-hover flex h-full flex-col gap-4 p-6">
              <div className="flex items-center justify-between">
                <h3 className="text-lg font-medium">Hair Art Mehmet Kalkan – Appointment & Admin Management System</h3>
                <span className="rounded-full border border-accent2/40 px-2 py-0.5 text-xs text-accent2">{lang === "tr" ? "Tam Yığın Geliştirici" : "Full-stack Developer"}</span>
              </div>
              <ul className="flex flex-col gap-2 text-sm text-white/70">
                <li>• {lang === "tr" ? "Berber işletmesi için randevu ve yönetim sistemi" : "Complete appointment management system for a local barber business"}</li>
                <li>• {lang === "tr" ? "Firebase Real-time Database ile anında senkronizasyon" : "Firebase Realtime Database for instant sync without reloads"}</li>
                <li>• {lang === "tr" ? "Güvenli, kısıtlı erişimli yönetim paneli" : "Secure, restricted-access admin dashboard"}</li>
              </ul>
              <div className="mt-auto flex flex-wrap gap-2">
                {["React", "Firebase", "CSS3"].map((tech) => (
                  <span key={tech} className="rounded-full border border-white/10 px-2.5 py-1 text-xs text-white/70">{tech}</span>
                ))}
              </div>
            </article>
          </div>
        </section>

        <section id="cv" className="mx-auto max-w-6xl px-4 py-12 sm:px-6">
          <div className="card p-6 sm:p-8">
            <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <h2 className="text-xl font-semibold sm:text-2xl">{lang === "tr" ? "CV" : "Resume"}</h2>
                <p className="mt-2 text-white/70">{lang === "tr" ? "Tüm detayları CV'mde görebilirsiniz." : "You can view all details in my resume."}</p>
              </div>
              <a href="/Burak_Goktug_Oksun_CV.pdf" download className="rounded-full bg-gradient-to-r from-accent to-accent2 px-5 py-2 text-sm font-medium text-white transition hover:brightness-110">
                {lang === "tr" ? "CV İndir (PDF)" : "Download Resume (PDF)"}
              </a>
            </div>
          </div>
        </section>

        <section id="contact" className="mx-auto max-w-6xl px-4 py-12 sm:px-6">
          <div className="card p-6 sm:p-8">
            <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <h2 className="text-xl font-semibold sm:text-2xl">{t.contact.title}</h2>
                <p className="mt-2 text-white/70">{lang === "tr" ? "E-posta" : "Email"}: <a className="text-accent3 hover:underline" href="mailto:goktug17@anadolu.edu.tr">goktug17@anadolu.edu.tr</a></p>
                <p className="mt-1 text-white/70">{lang === "tr" ? "Telefon" : "Phone"}: <span className="text-white/80">+90 530 366 73 22</span></p>
                <p className="mt-1 text-white/70">{lang === "tr" ? "Konum" : "Location"}: <span className="text-white/80">{lang === "tr" ? "Eskişehir, Türkiye" : "Eskişehir, Turkey"}</span></p>
              </div>
              <div className="flex items-center gap-3">
                <a href="https://github.com/goktugburak" target="_blank" rel="noreferrer" className="rounded-full border border-white/10 px-4 py-2 text-sm text-white/80 transition hover:border-accent/60 hover:text-white">
                  GitHub
                </a>
                <a href="https://www.linkedin.com/in/goktug-fast-98503b428/" target="_blank" rel="noreferrer" className="rounded-full border border-white/10 px-4 py-2 text-sm text-white/80 transition hover:border-accent/60 hover:text-white">
                  LinkedIn
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="mx-auto flex max-w-6xl flex-col items-center gap-2 px-4 py-8 text-center text-sm text-white/50 sm:px-6">
        <p>© {new Date().getFullYear()} Burak Göktuğ. {t.footer.rights}</p>
        <p className="font-mono text-xs">Built with React + Tailwind CSS</p>
      </footer>
    </div>
  );
}

export default App;
