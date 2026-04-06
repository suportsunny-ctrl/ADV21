// 
// MENU HAMBURGER
// 
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');
const navLinks = document.querySelectorAll('.nav-link');

// Adiciona/remove a classe 'active' para o menu e o ícone do hamburger
hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
});

// Fecha o menu mobile ao clicar em um link de navegação
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        hamburger.classList.remove('active');
        navMenu.classList.remove('active');
    });
});

// 
// CONTADOR ANIMADO PARA ESTATÍSTICAS
// 
const statNumbers = document.querySelectorAll('.hero-stats .stat-number');

const animateCounters = () => {
    statNumbers.forEach(counter => {
        const target = parseInt(counter.getAttribute('data-target'));
        let current = 0;
        const duration = 2000; // Duração da animação em ms
        const increment = target / (duration / 16); // Incremento baseado em 60fps

        const updateCounter = () => {
            if (current < target) {
                current += increment;
                counter.textContent = Math.floor(current);
                requestAnimationFrame(updateCounter);
            } else {
                counter.textContent = target;
            }
        };
        updateCounter();
    });
};

// Observador para iniciar a animação quando a seção de estatísticas estiver visível
const observerOptions = {
    root: null, // viewport<br/>
    rootMargin: '0px',<br/>
    threshold: 0.5 // 50% da seção visível
};

const statsObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            animateCounters();
            observer.unobserve(entry.target); // Para de observar após animar uma vez
        }
    });
}, observerOptions);

const heroStatsSection = document.querySelector('.hero-stats');
if (heroStatsSection) {
    statsObserver.observe(heroStatsSection);
}

// 
// SCROLL SUAVE PARA ÂNCORAS
// 
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const href = this.getAttribute('href');
        // Verifica se o href não é apenas '#' e se o elemento existe
        if (href !== '#' && document.querySelector(href)) {
            e.preventDefault(); // Previne o comportamento padrão do link
            document.querySelector(href).scrollIntoView({
                behavior: 'smooth' // Rola suavemente até o elemento
            });
        }
    });
});

// 
// VALIDAÇÃO BÁSICA DE LINKS WHATSAPP (apenas para console.log)
// 
const whatsappLinks = document.querySelectorAll('a[href*="wa.me"]');
whatsappLinks.forEach(link => {
    link.addEventListener('click', (e) => {
        // Exemplo de validação: verifica se o número está presente no link
        if (!link.href.includes('5561998640893')) {
            console.warn('Atenção: Link do WhatsApp pode estar configurado incorretamente. Verifique o número.');
        }
    });
});

console.log('✅ Script do site de advocacia carregado com sucesso!');
