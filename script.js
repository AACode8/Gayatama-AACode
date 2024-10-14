const body = document.querySelector('body');
const sidebar = document.querySelector('.sidebar');
const toggle = document.querySelector('.toggle');
const modeSwitch = document.querySelector('.toggle-switch');
const modeText = document.querySelector('.mode-text');

// Toggle sidebar open/close
toggle.addEventListener('click', () => {
  sidebar.classList.toggle('close');
});

// Toggle dark/light mode
modeSwitch.addEventListener('click', () => {
  body.classList.toggle('dark');

  if (body.classList.contains('dark')) {
    modeText.innerText = "Light mode";
  } else {
    modeText.innerText = "Dark mode";
  }
});

const text = "Welcome to the MBTI Checker!";
let index = 0;
const speed = 100;

function typeWriter() {
  if (index < text.length) {
    document.getElementById("typing-text").innerHTML += text.charAt(index);
    index++;
    setTimeout(typeWriter, speed);
  }
}

window.onload = typeWriter;

function showSection(sectionId) {
  // Hide all sections
  var sections = document.querySelectorAll('.content-section');
  sections.forEach(function (section) {
    section.style.display = 'none';
  });

  var selectedSection = document.getElementById(sectionId);
  if (selectedSection) {
    selectedSection.style.display = 'block';
    if (sectionId === 'dashboard') {
      selectedSection.classList.add('dashboard');
    }
  }
}

document.addEventListener('DOMContentLoaded', function () {
  showSection('dashboard-section');
});

function calculateMBTI() {
  const formData = new FormData(document.getElementById('mbtiForm'));
  const answers = {};
  formData.forEach((value, key) => {
      answers[key] = value;
  });

  // Menghitung hasil MBTI
  let eCount = 0, iCount = 0, sCount = 0, nCount = 0, tCount = 0, fCount = 0, jCount = 0, pCount = 0;

  // Menghitung setiap tipe berdasarkan jawaban
  for (let i = 1; i <= 15; i++) {
      if (answers[`question${i}`] === 'E') eCount++;
      if (answers[`question${i}`] === 'I') iCount++;
      if (answers[`question${i}`] === 'S') sCount++;
      if (answers[`question${i}`] === 'N') nCount++;
      if (answers[`question${i}`] === 'T') tCount++;
      if (answers[`question${i}`] === 'F') fCount++;
      if (answers[`question${i}`] === 'J') jCount++;
      if (answers[`question${i}`] === 'P') pCount++;
  }

  // Menentukan hasil MBTI
  const personalityType = (eCount > iCount ? 'E' : 'I') + 
                          (sCount > nCount ? 'S' : 'N') + 
                          (tCount > fCount ? 'T' : 'F') + 
                          (jCount > pCount ? 'J' : 'P');

  // Menampilkan hasil
  document.getElementById('result').innerText = `Your MBTI Type is ${personalityType}`;
  document.getElementById('result').classList.remove('hidden');

  // Menghilangkan semua pertanyaan
  document.getElementById('mbtiForm').classList.add('hidden');
}

const cards = document.querySelectorAll('.card');
cards.forEach((card) => {
  card.addEventListener('click', () => {
    card.querySelector('.card-inner').classList.toggle('is-flipped');
  });
});
