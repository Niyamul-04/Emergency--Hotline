// Initial values
let heart = 0;
let coins = 100;
let copy = 0;

// Elements
const heartCount = document.getElementById("heartCount");
const coinCount = document.getElementById("coinCount");
const copyCount = document.getElementById("copyCount");

// Functions to update counts
function addHeart() {
  heart++;
  heartCount.innerText = heart;
}

function useCoin() {
  if (coins >= 20) {
    coins -= 20;
    coinCount.innerText = coins;
  } else {
    alert("Not enough coins!");
  }
}

function addCopy() {
  copy++;
  copyCount.innerText = copy + " Copy";
}

const hotlines = [
  { name: "Fire Service Number", number: "102", category: "Fire Service", img: "Assets/fire-service.png", icon: "fa-solid fa-fire" },
  { name: "Police Helpline", number: "999", category: "Police", img: "Assets/police.png", icon: "fa-solid fa-shield-halved" },
  { name: "Medical Service", number: "103", category: "Health", img: "Assets/ambulance.png", icon: "fa-solid fa-ambulance" },
  { name: "Anti-Corruption Helpline", number: "106", category: "Govt", img: "Assets/corruption.jpeg", icon: "fa-solid fa-gavel" },
  { name: "Bangladesh Railway Helpline", number: "131", category: "Transport", img: "Assets/Bangladesh-Railway.png", icon: "fa-solid fa-train" },
  { name: "Disaster Management", number: "1090", category: "Disaster", img: "Assets/emergency.png", icon: "fa-solid fa-earth-americas" },
  { name: "Traffic Control", number: "999", category: "Traffic", img: "Assets/trafic.avif", icon: "fa-solid fa-car" },
  { name: "Child Helpline", number: "1098", category: "Child", img: "Assets/child.png", icon: "fa-solid fa-child" },
  { name: "Women Helpline", number: "109", category: "Women Support", img: "Assets/brac.png", icon: "fa-solid fa-female" },
];



// DOM elements
const cardContainer = document.getElementById("cardContainer");
const historyList = document.getElementById("historyList");
const clearHistoryBtn = document.getElementById("clearHistory");

let callHistory = [];

// Render Hotline Cards
function renderCards() {
  cardContainer.innerHTML = "";
  hotlines.forEach((hotline) => {
    const card = document.createElement("div");
    card.className =
      "bg-white rounded-2xl shadow-md p-6 flex flex-col justify-between w-full min-h-[250px] hover:shadow-lg transition";

    card.innerHTML = `
      <div class="flex justify-between items-start mb-3">
        <img src="${hotline.img}" alt="${hotline.name}" class="w-12 h-12 rounded-md">
        <button class="heartBtn w-10 h-10 flex justify-center items-center rounded-full  text-xl">
          <i class="fa-regular fa-heart"></i>
        </button>
      </div>
      <div class="flex flex-col gap-1"> 
        <h3 class="font-bold text-lg text-[#5C5C5C]">${hotline.name}</h3>
        <p class="text-gray-700 font-semibold text-xl">${hotline.number}</p>
        <span class="w-fit mt-1 px-2 py-1 text-white" style="background-color: #5C5C5C; border-radius: 0.375rem;">
    ${hotline.category}
  </span>
      </div>
      <div class="flex gap-3 mt-4">
        <button class="copyBtn flex-1 border border-gray-300 rounded-lg py-2 hover:bg-gray-100 flex justify-center items-center gap-2">
          <i class="fa-solid fa-copy"></i> Copy
        </button>
        <button class="callBtn flex-1 bg-green-600 text-white rounded-lg py-2 hover:bg-green-700 flex justify-center items-center gap-2">
          <i class="fa-solid fa-phone"></i> Call
        </button>
      </div>
    `;

    // Heart Button
    card.querySelector(".heartBtn").addEventListener("click", () => {
      addHeart();
    });

    // Copy Button
    card.querySelector(".copyBtn").addEventListener("click", () => {
      navigator.clipboard.writeText(hotline.number);
      addCopy();
      alert(`Copied ${hotline.number}`);
    });

    // Call Button
    card.querySelector(".callBtn").addEventListener("click", () => {
      if (coins >= 20) {
        useCoin();
        const time = new Date().toLocaleTimeString();
        callHistory.push({ name: hotline.name, number: hotline.number, time });
        renderHistory();
        alert(`Calling ${hotline.name} - ${hotline.number}`);
      } else {
        alert("Not enough coins!");
      }
    });

    cardContainer.appendChild(card);
  });
}

// Render Call History
function renderHistory() {
  historyList.innerHTML = "";
  callHistory.forEach(call => {
    const li = document.createElement("li");
    li.className = "flex justify-between bg-gray-100 p-2 rounded text-sm";
    li.innerHTML = `<span>${call.name}</span> <span>${call.number}</span> <span>${call.time}</span>`;
    historyList.appendChild(li);
  });
}

// Clear History
clearHistoryBtn.addEventListener("click", () => {
  callHistory = [];
  renderHistory();
});

// Initial render
renderCards();
