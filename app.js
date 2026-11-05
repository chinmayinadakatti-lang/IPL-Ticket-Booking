/* CSS VARIABLES */
:root {
    --primary: #071952;
    --secondary: #164b9b;
    --accent: #f5c518;
    --background: #f4f6fa;
    --text: #222222;
    --white: #ffffff;
}

/* GENERAL STYLING */
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

html {
    scroll-behavior: smooth;
    scroll-padding-top: 85px;
}

body {
    font-family: Arial, sans-serif;
    background-color: var(--background);
    color: var(--text);
    line-height: 1.6;
}

/* NAVIGATION BAR */
nav {
    background-color: var(--primary);
    color: var(--white);
    padding: 18px 40px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    z-index: 1000;
    box-shadow: 0 3px 12px rgba(0,0,0,0.2);
}

nav h2 {
    color: var(--accent);
    letter-spacing: 2px;
}

.nav-links {
    display: flex;
    gap: 25px;
}

.nav-links a {
    color: var(--white);
    text-decoration: none;
    font-weight: bold;
    transition: 0.3s;
}

.nav-links a:hover {
    color: var(--accent);
}

/* HERO SECTION */
.hero {
    min-height: 520px;
    background: linear-gradient(135deg, #071952, #164b9b);
    color: var(--white);
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    padding: 140px 20px 80px;
}

.hero-content {
    max-width: 850px;
}

.hero h1 {
    font-size: 42px;
    margin-bottom: 20px;
}

.hero p {
    font-size: 18px;
    margin-bottom: 12px;
}

.btn {
    display: inline-block;
    background-color: var(--accent);
    color: var(--primary);
    padding: 13px 28px;
    margin-top: 25px;
    border-radius: 6px;
    text-decoration: none;
    font-weight: bold;
    transition: 0.3s;
}

.btn:hover {
    background-color: #e0aa00;
    transform: translateY(-3px);
}

/* COMMON SECTIONS */
section {
    padding: 65px 40px;
}

section h2 {
    color: var(--primary);
    font-size: 30px;
    text-align: center;
    margin-bottom: 15px;
}

.section-description {
    text-align: center;
    color: #666666;
    margin-bottom: 30px;
}

/* TEAM CARDS */
.team-container {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 25px;
    max-width: 1050px;
    margin: 30px auto 0;
}

.card {
    background-color: var(--white);
    padding: 28px;
    border-radius: 12px;
    border-left: 5px solid var(--accent);
    box-shadow: 0 4px 15px rgba(0,0,0,0.08);
    transition: 0.3s;
}

.card:hover {
    transform: translateY(-6px);
    box-shadow: 0 8px 20px rgba(0,0,0,0.15);
}

.team-icon {
    font-size: 35px;
    margin-bottom: 10px;
}

.card h3 {
    color: var(--primary);
    margin-bottom: 12px;
}

.card p {
    margin: 6px 0;
}

/* MATCH SCHEDULE */
.schedule-section {
    background-color: #e9eef8;
}

.table-wrapper {
    max-width: 1100px;
    margin: 30px auto;
    overflow-x: auto;
    border-radius: 10px;
    box-shadow: 0 4px 15px rgba(0,0,0,0.1);
}

table {
    width: 100%;
    border-collapse: collapse;
    background-color: var(--white);
}

th {
    background-color: var(--primary);
    color: var(--white);
    padding: 16px;
    text-align: center;
}

td {
    padding: 15px;
    text-align: center;
    border-bottom: 1px solid #dddddd;
}

tbody tr:hover {
    background-color: #fff8dc;
}

/* BOOKING FORM */
#booking {
    background-color: var(--background);
}

form {
    background-color: var(--white);
    max-width: 550px;
    margin: 30px auto;
    padding: 35px;
    border-radius: 12px;
    box-shadow: 0 5px 20px rgba(0,0,0,0.1);
}

label {
    display: block;
    color: var(--primary);
    font-weight: bold;
    margin-bottom: 7px;
}

input,
select {
    width: 100%;
    padding: 13px;
    margin-bottom: 20px;
    border: 1px solid #cccccc;
    border-radius: 6px;
    font-size: 15px;
    background-color: #ffffff;
}

input:focus,
select:focus {
    outline: 2px solid var(--accent);
    border-color: var(--primary);
}

form button {
    width: 100%;
    padding: 14px;
    background-color: var(--primary);
    color: var(--white);
    border: none;
    border-radius: 6px;
    font-size: 16px;
    font-weight: bold;
    cursor: pointer;
    transition: 0.3s;
}

form button:hover {
    background-color: var(--secondary);
    color: var(--accent);
}

/* BOOKING MESSAGE */
#message {
    margin-top: 15px;
    text-align: center;
    font-weight: bold;
    color: #16803c;
}

/* CONTACT SECTION */
.contact-section {
    background-color: #e9eef8;
    text-align: center;
}

.contact-section p {
    margin: 10px 0;
}

/* FOOTER */
footer {
    background-color: var(--primary);
    color: var(--white);
    text-align: center;
    padding: 30px 15px;
}

footer h3 {
    color: var(--accent);
    margin-bottom: 10px;
}

footer p {
    margin: 5px 0;
}

/* RESPONSIVE DESIGN */
@media (max-width: 768px) {

    nav {
        flex-direction: column;
        gap: 12px;
        padding: 15px;
    }

    .nav-links {
        flex-wrap: wrap;
        justify-content: center;
        gap: 12px;
    }

    .hero h1 {
        font-size: 30px;
    }

    .team-container {
        grid-template-columns: 1fr;
    }

    section {
        padding: 45px 15px;
    }

    form {
        padding: 22px;
    }

    table {
        min-width: 650px;
    }
}

@media (max-width: 400px) {
    .hero h1 {
        font-size: 25px;
    }

    nav h2 {
        font-size: 20px;
    }

    .nav-links {
        gap: 9px;
        font-size: 13px;
    }
}