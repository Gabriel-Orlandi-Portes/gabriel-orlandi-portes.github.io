// ---------- Terminal typing effect ----------
const terminalLines = [
  { id: "typedLine1", text: ">>> Nome: Gabriel Orlandi Portes" },
  { id: "typedLine2", text: ">>> Foco: Data Analytics" },
  { id: "typedLine3", text: ">>> Localidade: São Paulo" },
  { id: "typedLine4", text: ">>> Stack: Python, SQL, Power BI" }
];

function typeLine(line, index) {
  const el = document.getElementById(line.id);
  if (!el) return;

  let i = 0;
  const speed = 28;

  function step() {
    if (i <= line.text.length) {
      el.textContent = line.text.slice(0, i);
      i++;
      setTimeout(step, speed);
    } else if (index < terminalLines.length - 1) {
      setTimeout(() => typeLine(terminalLines[index + 1], index + 1), 250);
    }
  }
  step();
}

window.addEventListener("DOMContentLoaded", () => {
  setTimeout(() => typeLine(terminalLines[0], 0), 500);
});

// ---------- Mobile menu ----------
const menuToggle = document.getElementById("menuToggle");
const navList = document.getElementById("navList");

if (menuToggle && navList) {
  menuToggle.addEventListener("click", () => {
    const isOpen = navList.classList.toggle("open");
    menuToggle.setAttribute("aria-expanded", isOpen);
  });

  navList.querySelectorAll("a").forEach(link => {
    link.addEventListener("click", () => {
      navList.classList.remove("open");
      menuToggle.setAttribute("aria-expanded", "false");
    });
  });
}

// ---------- Copiar e-mail ----------
const copyEmailBtn = document.getElementById("copyEmailBtn");

if (copyEmailBtn) {
  copyEmailBtn.addEventListener("click", () => {
    navigator.clipboard.writeText("gabrilorlandi@gmail.com").then(() => {
      copyEmailBtn.textContent = "Copiado!";
      copyEmailBtn.classList.add("copied");

      setTimeout(() => {
        copyEmailBtn.textContent = "Copiar";
        copyEmailBtn.classList.remove("copied");
      }, 2000);
    });
  });
}

// ---------- Scroll reveal ----------
const revealEls = document.querySelectorAll(".reveal");

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("visible");
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.15 });

revealEls.forEach(el => observer.observe(el));

console.log("Portfólio carregado!");