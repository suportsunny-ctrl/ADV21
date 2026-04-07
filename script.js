/* Reset and Base Styles */
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: 'Roboto', sans-serif;
  line-height: 1.6;
  color: #1a1a1a;
  background-color: #ffffff;
}

h1, h2, h3, h4, h5, h6 {
  font-family: 'Playfair Display', serif;
  font-weight: 700;
}

/* Color Variables */
:root {
  --primary-black: #1a1a1a;
  --primary-gold: #D4AF37;
  --primary-white: #ffffff;
  --light-gray: #f9f9f9;
}

/* Typography */
h1 {
  font-size: 2.5rem;
}
h2 {
  font-size: 2rem;
}
h3 {
  font-size: 1.5rem;
}
p {
  font-size: 1rem;
}

@media (max-width: 768px) {
  h1 {
    font-size: 2rem;
  }
  h2 {
    font-size: 1.75rem;
  }
  h3 {
    font-size: 1.25rem;
  }
}

/* Header */
header {
  position: sticky;
  top: 0;
  background-color: var(--primary-black);
  color: var(--primary-white);
  padding: 1rem 2rem;
  z-index: 1000;
  box-shadow: 0 2px 5px rgba(0,0,0,0.1);
}

nav {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.logo {
  font-family: 'Playfair Display', serif;
  font-size: 1.5rem;
  color: var(--primary-gold);
}

.nav-links {
  list-style: none;
  display: flex;
  gap: 2rem;
}

.nav-links li a {
  color: var(--primary-white);
  text-decoration: none;
  transition: color 0.3s;
}

.nav-links li a:hover {
  color: var(--primary-gold);
}

.hamburger {
  display: none;
  flex-direction: column;
  cursor: pointer;
}

.hamburger span {
  width: 25px;
  height: 3px;
  background-color: var(--primary-white);
  margin: 3px 0;
  transition: 0.3s;
}

@media (max-width: 768px) {
  .nav-links {
    display: none;
    flex-direction: column;
    position: absolute;
    top: 100%;
    left: 0;
    width: 100%;
    background-color: var(--primary-black);
    padding: 1rem;
  }
  .nav-links.active {
    display: flex;
  }
  .hamburger {
    display: flex;
  }
}

/* Hero Section */
.hero {
  background: linear-gradient(135deg, var(--primary-black) 0%, var(--primary-gold) 100%);
  color: var(--primary-white);
  padding: 4rem 2rem;
  text-align: center;
  position: relative;
  overflow: hidden;
}

.hero h1 {
  margin-bottom: 1rem;
  animation: fadeIn 1s ease-in;
}

.hero p {
  font-size: 1.2rem;
  margin-bottom: 2rem;
  animation: fadeIn 1s ease-in 0.5s both;
}

.cta-button {
  background-color: var(--primary-gold);
  color: var(--primary-black);
  padding: 0.75rem 1.5rem;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s, box-shadow 0.3s;
  font-weight: bold;
}

.cta-button:hover {
  background-color: #b8941f;
  box-shadow: 0 0 10px rgba(212, 175, 55, 0.5);
}

/* Justice Goddess Thumbnails */
.justice-thumb {
  position: absolute;
  opacity: 0.3;
  width: 100px;
  height: 100px;
}

.justice-thumb.top-left {
  top: 20px;
  left: 20px;
}

.justice-thumb.bottom-right {
  bottom: 20px;
  right: 20px;
}

/* Specialties Cards */
.specialties {
  padding: 4rem 2rem;
  background-color: var(--light-gray);
}

.card-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
}

.card {
  background-color: var(--primary-black);
  color: var(--primary-white);
  padding: 2rem;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0,0,0,0.1);
  transition: transform 0.3s, box-shadow 0.3s;
}

.card:hover {
  transform: translateY(-5px);
  box-shadow: 0 8px 16px rgba(0,0,0,0.2);
}

.card h3 {
  color: var(--primary-gold);
  margin-bottom: 1rem;
}

/* Online Consultations */
.consultations {
  padding: 4rem 2rem;
  background-color: var(--primary-white);
  text-align: center;
}

.consultations h2 {
  color: var(--primary-gold);
  margin-bottom: 2rem;
}

/* Numbered Steps */
.steps {
  display: flex;
  justify-content: center;
  gap: 2rem;
  margin-top: 2rem;
}

.step {
  background-color: var(--light-gray);
  padding: 1rem;
  border-radius: 10px;
  counter-increment: step-counter;
  position: relative;
}

.step::before {
  content: counter(step-counter);
  position: absolute;
  top: -10px;
  left: 50%;
  transform: translateX(-50%);
  background-color: var(--primary-gold);
  color: var(--primary-black);
  width: 30px;
  height: 30px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: bold;
}

@media (max-width: 768px) {
  .steps {
    flex-direction: column;
  }
}

/* Pricing Cards */
.pricing {
  padding: 4rem 2rem;
  background-color: var(--light-gray);
}

.pricing-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
}

.price-card {
  background-color: var(--primary-white);
  padding: 2rem;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0,0,0,0.1);
  text-align: center;
  transition: transform 0.3s;
}

.price-card:hover {
  transform: translateY(-5px);
}

.price-card h3 {
  color: var(--primary-gold);
}

/* Contact Form */
.contact {
  padding: 4rem 2rem;
  background-color: var(--primary-black);
  color: var(--primary-white);
}

form {
  max-width: 600px;
  margin: 0 auto;
}

input, textarea {
  width: 100%;
  padding: 0.75rem;
  margin-bottom: 1rem;
  border: 1px solid var(--primary-gold);
  border-radius: 5px;
  background-color: var(--primary-white);
  color: var(--primary-black);
}

button[type="submit"] {
  background-color: var(--primary-gold);
  color: var(--primary-black);
  padding: 0.75rem 1.5rem;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s;
}

button[type="submit"]:hover {
  background-color: #b8941f;
}

/* Footer */
footer {
  background-color: var(--primary-black);
  color: var(--primary-white);
  padding: 2rem;
  text-align: center;
}

footer a {
  color: var(--primary-gold);
  text-decoration: none;
  position: relative;
}

footer a::after {
  content: '';
  position: absolute;
  width: 0;
  height: 2px;
  bottom: 0;
  left: 0;
  background-color: var(--primary-gold);
  transition: width 0.3s;
}

footer a:hover::after {
  width: 100%;
}

/* Animations */
@keyframes fadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

@keyframes slideUp {
  from {
    transform: translateY(20px);
    opacity: 0;
  }
  to {
    transform: translateY(0);
    opacity: 1;
  }
}

/* Accessibility */
*:focus {
  outline: 2px solid var(--primary-gold);
  outline-offset: 2px;
}

/* Responsive Images */
img {
  max-width: 100%;
  height: auto;
}

/* Additional Breakpoints */
@media (min-width: 480px) {
  /* Adjustments for small screens */
}

@media (min-width: 1024px) {
  /* Adjustments for large screens */
}
