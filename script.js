/* 
   VARIÁVEIS CSS
*/
:root {
    --primary-color: #D4AF37;
    --dark-bg: #1a1a1a;
    --dark-text: #ffffff;
    --gray-text: #b0b0b0;
    --accent-color: #dc2626;
    --light-bg: #2a2a2a;
    --border-color: #3a3a3a;
    --shadow: 0 4px 6px rgba(0, 0, 0, 0.3);
    --shadow-lg: 0 10px 25px rgba(0, 0, 0, 0.5);
    --transition: all 0.3s ease;
}

/* 
   RESET E ESTILOS GLOBAIS
*/
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

html {
    scroll-behavior: smooth;
}

body {
    font-family: 'Poppins', sans-serif;
    color: var(--dark-text);
    background-color: var(--dark-bg);
    line-height: 1.6;
}

.container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 20px;
}

/* 
   DEUSA DA JUSTIÇA - CANTOS
*/
.justice-corner {
    position: fixed;
    font-size: 4rem;
    color: var(--primary-color);
    opacity: 0.15;
    z-index: 1;
    pointer-events: none;
}

.top-left {
    top: 20px;
    left: 20px;
}

.top-right {
    top: 20px;
    right: 20px;
}

.bottom-left {
    bottom: 20px;
    left: 20px;
}

.bottom-right {
    bottom: 20px;
    right: 20px;
}

/* 
   HEADER / NAVBAR
*/
.header {
    background: var(--dark-bg);
    box-shadow: var(--shadow);
    position: sticky;
    top: 0;
    z-index: 1000;
    border-bottom: 2px solid var(--primary-color);
}

.navbar {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1.5rem 2rem;
    max-width: 1400px;
    margin: 0 auto;
}

.logo {
    display: flex;
    align-items: center;
    gap: 1rem;
    text-decoration: none;
}

.logo-text {
    font-size: 2rem;
    font-weight: 700;
    color: var(--primary-color);
    border: 2px solid var(--primary-color);
    padding: 0.5rem 0.75rem;
    border-radius: 5px;
}

.logo-name {
    font-size: 1.2rem;
    font-weight: 600;
    color: var(--primary-color);
}

.nav-menu {
    display: flex;
    list-style: none;
    gap: 2.5rem;
}

.nav-link {
    color: var(--dark-text);
    text-decoration: none;
    font-weight: 500;
    transition: var(--transition);
    position: relative;
}

.nav-link:hover {
    color: var(--primary-color);
}

.nav-link::after {
    content: '';
    position: absolute;
    bottom: -5px;
    left: 0;
    width: 0;
    height: 2px;
    background: var(--primary-color);
    transition: var(--transition);
}

.nav-link:hover::after {
    width: 100%;
}

.btn-whatsapp {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    padding: 0.75rem 1.5rem;
    background: #25d366;
    color: white;
    text-decoration: none;
    border-radius: 50px;
    font-weight: 600;
    transition: var(--transition);
}

.btn-whatsapp:hover {
    background: #1fa857;
    transform: translateY(-2px);
    box-shadow: var(--shadow-lg);
}

.hamburger {
    display: none;
    flex-direction: column;
    cursor: pointer;
    gap: 5px;
}

.hamburger span {
    width: 25px;
    height: 3px;
    background: var(--primary-color);
    border-radius: 3px;
    transition: var(--transition);
}

/* 
   HERO SECTION
*/
.hero {
    padding: 100px 20px;
    background: linear-gradient(135deg, #1a1a1a 0%, #2a2a2a 100%);
    color: var(--dark-text);
    text-align: center;
    position: relative;
    overflow: hidden;
}

.hero::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 600"><defs><pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse"><path d="M 40 0 L 0 0 0 40" fill="none" stroke="rgba(212,175,55,0.05)" stroke-width="1"/></pattern></defs><rect width="1200" height="600" fill="url(%23grid)"/></svg>');
    opacity: 0.5;
}

.hero-content {
    position: relative;
    z-index: 2;
    max-width: 800px;
    margin: 0 auto;
}

.hero-badge {
    display: inline-block;
    background: rgba(212, 175, 55, 0.2);
    padding: 0.75rem 1.5rem;
    border-radius: 50px;
    font-size: 0.95rem;
    font-weight: 600;
    margin-bottom: 1.5rem;
    border: 1px solid var(--primary-color);
    animation: slideDown 0.6s ease;
}

.hero-content h1 {
    font-size: 3.5rem;
    font-weight: 700;
    margin-bottom: 0.5rem;
    line-height: 1.2;
    color: var(--primary-color);
    animation: slideUp 0.6s ease 0.2s both;
}

.hero-subtitle {
    font-size: 1.5rem;
    color: var(--gray-text);
    margin-bottom: 1.5rem;
    animation: slideUp 0.6s ease 0.3s both;
}

.hero-description {
    font-size: 1.1rem;
    margin-bottom: 2.5rem;
    line-height: 1.8;
    color: var(--gray-text);
    animation: slideUp 0.6s ease 0.4s both;
}

.hero-buttons {
    display: flex;
    gap: 1.5rem;
    justify-content: center;
    margin-bottom: 4rem;
    flex-wrap: wrap;
    animation: slideUp 0.6s ease 0.5s both;
}

.btn-primary {
    display: inline-flex;
    align-items: center;
    gap: 0.5rem;
    padding: 1rem 2rem;
    background: #25d366;
    color: white;
    text-decoration: none;
    border-radius: 50px;
    font-weight: 700;
    font-size: 1rem;
    transition: var(--transition);
    border: none;
    cursor: pointer;
}

.btn-primary:hover {
    background: #1fa857;
    transform: translateY(-3px);
    box-shadow: var(--shadow-lg);
}

.btn-secondary {
    display: inline-flex;
    align-items: center;
    gap: 0.5rem;
    padding: 1rem 2rem;
    background: transparent;
    color: var(--primary-color);
    text-decoration: none;
    border-radius: 50px;
    font-weight: 700;
    font-size: 1rem;
    transition: var(--transition);
    border: 2px solid var(--primary-color);
    cursor: pointer;
}

.btn-secondary:hover {
    background: var(--primary-color);
    color: var(--dark-bg);
    transform: translateY(-3px);
}

.hero-stats {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
    gap: 2rem;
    margin-top: 3rem;
    animation: slideUp 0.6s ease 0.6s both;
}

.stat {
    background: rgba(212, 175, 55, 0.1);
    padding: 2rem 1.5rem;
    border-radius: 15px;
    border: 1px solid var(--primary-color);
}

.stat-number {
    display: block;
    font-size: 2.5rem;
    font-weight: 700;
    color: var(--primary-color);
    margin-bottom: 0.5rem;
}

.stat-plus {
    font-size: 1.5rem;
    font-weight: 600;
    color: var(--primary-color);
}

.stat-label {
    display: block;
    font-size: 0.95rem;
    color: var(--gray-text);
}

/* 
   SOBRE SECTION
*/
.sobre {
    padding: 80px 20px;
    background: var(--light-bg);
}

.sobre h2 {
    font-size: 2.5rem;
    margin-bottom: 3rem;
    color: var(--primary-color);
    text-align: center;
}

.sobre-content {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 4rem;
    align-items: center;
}

.sobre-image {
    text-align: center;
}

.profile-image {
    width: 100%;
    max-width: 400px;
    border-radius: 15px;
    border: 3px solid var(--primary-color);
    box-shadow: var(--shadow-lg);
    transition: var(--transition);
}

.profile-image:hover {
    transform: translateY(-10px);
}

.sobre-text p {
    color: var(--gray-text);
    margin-bottom: 1.5rem;
    line-height: 1.8;
    font-size: 1.05rem;
}

.sobre-list {
    list-style: none;
    margin-top: 2rem;
}

.sobre-list li {
    display: flex;
    align-items: center;
    gap: 1rem;
    margin-bottom: 1.2rem;
    color: var(--dark-text);
    font-weight: 500;
}

.sobre-list i {
    color: var(--primary-color);
    font-size: 1.2rem;
}

/* 
   ÁREAS DE ATUAÇÃO
*/
.areas {
    padding: 80px 20px;
    background: var(--dark-bg);
}

.areas h2 {
    text-align: center;
    font-size: 2.5rem;
    margin-bottom: 4rem;
    color: var(--primary-color);
}

.areas-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 2.5rem;
}

.area-card {
    background: var(--light-bg);
    padding: 2.5rem;
    border-radius: 15px;
    text-align: center;
    box-shadow: var(--shadow);
    transition: var(--transition);
    border: 2px solid transparent;
    border-top: 4px solid var(--primary-color);
}

.area-card:hover {
    transform: translateY(-15px);
    box-shadow: var(--shadow-lg);
    border-color: var(--primary-color);
}

.area-card i {
    font-size: 3rem;
    color: var(--primary-color);
    margin-bottom: 1.5rem;
}

.area-card h3 {
    font-size: 1.3rem;
    margin-bottom: 1rem;
    color: var(--dark-text);
}

.area-card p {
    color: var(--gray-text);
    font-size: 0.95rem;
    line-height: 1.6;
}

/* 
   COMO FUNCIONA
*/
.como-funciona {
    padding: 80px 20px;
    background: var(--light-bg);
}

.como-funciona h2 {
    text-align: center;
    font-size: 2.5rem;
    margin-bottom: 4rem;
    color: var(--primary-color);
}

.steps-container {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    gap: 2rem;
    align-items: center;
}

.step {
    background: var(--dark-bg);
    padding: 2rem;
    border-radius: 15px;
    text-align: center;
    box-shadow: var(--shadow);
    transition: var(--transition);
}

.step:hover {
    transform: translateY(-10px);
    box-shadow: var(--shadow-lg);
}

.step-number {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: 60px;
    height: 60px;
    background: var(--primary-color);
    color: var(--dark-bg);
    border-radius: 50%;
    font-size: 1.8rem;
    font-weight: 700;
    margin-bottom: 1rem;
}

.step h3 {
    font-size: 1.2rem;
    margin-bottom: 0.75rem;
    color: var(--dark-text);
}

.step p {
    color: var(--gray-text);
    font-size: 0.95rem;
    line-height: 1.6;
}

.step-arrow {
    display: flex;
    align-items: center;
    justify-content: center;
    color: var(--primary-color);
    font-size: 2rem;
}

@media (max-width: 768px) {
    .step-arrow {
        display: none;
    }
}

/* 
   CONTATO SECTION
*/
.contato {
    padding: 80px 20px;
    background: var(--dark-bg);
}

.contato h2 {
    text-align: center;
    font-size: 2.5rem;
    margin-bottom: 4rem;
    color: var(--primary-color);
}

.contato-content {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 4rem;
    align-items: center;
}

.contato-info {
    display: flex;
    flex-direction: column;
    gap: 2.5rem;
}

.info-item {
    display: flex;
    gap: 1.5rem;
    align-items: flex-start;
}

.info-item i {
    font-size: 2rem;
    color: var(--primary-color);
    margin-top: 0.5rem;
}

.info-item h3 {
    font-size: 1.2rem;
    color: var(--dark-text);
    margin-bottom: 0.5rem;
}

.info-item p {
    color: var(--gray-text);
}

.contato-cta {
    background: linear-gradient(135deg, rgba(212, 175, 55, 0.2), rgba(212, 175, 55, 0.1));
    padding: 3rem;
    border-radius: 15px;
    color: var(--dark-text);
    text-align: center;
    border: 2px solid var(--primary-color);
}

.contato-cta h3 {
    font-size: 1.8rem;
    margin-bottom: 1rem;
    color: var(--primary-color);
}

.contato-cta p {
    margin-bottom: 2rem;
    color: var(--gray-text);
}

/* 
   FOOTER
*/
.footer {
    background: #0f0f0f;
    color: var(--gray-text);
    text-align: center;
    padding: 3rem 2rem;
    border-top: 2px solid var(--primary-color);
}

.footer p {
    margin: 0.75rem 0;
}

/* 
   ANIMAÇÕES
*/
@keyframes slideDown {
    from {
        opacity: 0;
        transform: translateY(-20px);
    }
    to {
        opacity: 1;
        transform: translateY(0);
    }
}

@keyframes slideUp {
    from {
        opacity: 0;
        transform: translateY(20px);
    }
    to {
        opacity: 1;
        transform: translateY(0);
    }
}

/* 
   RESPONSIVO
*/
@media (max-width: 768px) {
    .nav-menu {
        display: none;
    }

    .hamburger {
        display: flex;
    }

    .hamburger.active span:nth-child(1) {
        transform: rotate(45deg) translate(10px, 10px);
    }

    .hamburger.active span:nth-child(2) {
        opacity: 0;
    }

    .hamburger.active span:nth-child(3) {
        transform: rotate(-45deg) translate(7px, -7px);
    }

    .nav-menu.active {
        display: flex;
        flex-direction: column;
        position: absolute;
        top: 70px;
        left: 0;
        right: 0;
        background: var(--light-bg);
        padding: 2rem;
        box-shadow: var(--shadow-lg);
        gap: 1rem;
    }

    .hero-content h1 {
        font-size: 2.5rem;
    }

    .hero-buttons {
        flex-direction: column;
    }

    .btn-primary,
    .btn-secondary {
        width: 100%;
        justify-content: center;
    }

    .sobre-content,
    .contato-content {
        grid-template-columns: 1fr;
    }

    .justice-corner {
        font-size: 2.5rem;
    }
}

@media (max-width: 480px) {
    .navbar {
        padding: 1rem;
    }

    .logo-text {
        font-size: 1.5rem;
    }

    .logo-name {
        font-size: 1rem;
    }

    .btn-whatsapp {
        padding: 0.5rem 1rem;
        font-size: 0.9rem;
    }

    .hero {
        padding: 60px 20px;
    }

    .hero-content h1 {
        font-size: 2rem;
    }

    .hero-stats {
        grid-template-columns: 1fr;
        gap: 1rem;
    }

    .areas h2,
    .contato h2,
    .como-funciona h2 {
        font-size: 2rem;
    }

    .areas-grid {
        grid-template-columns: 1fr;
    }

    .justice-corner {
        font-size: 2rem;
    }
}
