const resumeData = {
  name: "Тошпулатов Отабек Дилшодович",
  dob: "Дата рождения: 25 февраля 2003 г.",
  location: "Место проживания: Ташкент, Узбекистан",
  contact: "Контакт: otabe4979@gmail.com",
  education: {
    institution:
      "Ташкентский университет информационных технологий имени Мухаммада аль-Хоразмий",
    faculty: "факультет кибербезопасности",
    degree:
      "Бакалавр по направлению «Информационная безопасность» (инженер-программист), 2024 г.",
  },
  experience: [
    {
      role: "Учитель информатики",
      location: "школа № 339, г. Ташкент",
      period: "2023 г",
    },
    {
      role: "Пресс-секретарь",
      location: "Ташкентский университет информационных технологий",
      period: "2020 г",
    },
    {
      role: "Отдел Аналитика сектор BSS",
      location: "Anor Bank",
      period: "2024",
    },
  ],
  skills: [
    "Языки программирования: HTML, CSS, JavaScript",
    "Фронтенд-фреймворки: React (базовый)",
    "Инструменты и технологии: Git, Webpack",
    "Дополнительные знания: Основы безопасности веб-приложений, работа с базами данных",
  ],
  languages: "Русский, Таджикский, турецкий",
  additional:
    "Уверенные знания в области информационной безопасности и защиты данных. Опыт работы с техническими и исследовательскими проектами в области информационных технологий.",
};

document.getElementById("name").textContent = resumeData.name;
document.getElementById("dob").textContent = resumeData.dob;
document.getElementById("location").textContent = resumeData.location;
document.getElementById(
  "contact"
).innerHTML = `<strong>Контакт:+998939114979</strong> <a href="mailto:${
  resumeData.contact.split(": ")[1]
}">${resumeData.contact.split(": ")[1]}</a>`;

const educationSection = document.getElementById("education");
educationSection.innerHTML += `<p><strong>${resumeData.education.institution}</strong>, ${resumeData.education.faculty}</p>`;
educationSection.innerHTML += `<p>${resumeData.education.degree}</p>`;

const experienceList = document
  .getElementById("experience")
  .querySelector("ul");
resumeData.experience.forEach((item) => {
  experienceList.innerHTML += `<li><strong>${item.role}</strong>, ${item.location} (${item.period})</li>`;
});

const skillsList = document.getElementById("skills").querySelector("ul");
resumeData.skills.forEach((skill) => {
  skillsList.innerHTML += `<li>${skill}</li>`;
});

document.getElementById("languages").querySelector("p").textContent =
  resumeData.languages;
document.getElementById("additional").querySelector("p").textContent =
  resumeData.additional;
