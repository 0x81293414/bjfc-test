import { db } from './firebase-config.js';
import { doc, getDoc } from 'https://www.gstatic.com/firebasejs/10.8.0/firebase-firestore.js';

async function loadTeamDetails() {
    const urlParams = new URLSearchParams(window.location.search);
    const teamId = urlParams.get('id');
    
    if (!teamId) {
        window.location.href = '/404.html';
        return;
    }

    try {
        const teamDoc = await getDoc(doc(db, "teams", teamId));
        if (teamDoc.exists()) {
            const team = teamDoc.data();
            displayTeamDetails(team);
            displayManOfTheMatch(team.manOfTheMatch);
        } else {
            window.location.href = '/404.html';
        }
    } catch (error) {
        console.error("Error loading team details:", error);
    }
}

function displayTeamDetails(team) {
    const teamDetails = document.getElementById('teamDetails');
    teamDetails.innerHTML = `
        <div>
            <img src="${team.imageUrl}" alt="${team.name}" class="w-full rounded-lg">
        </div>
        <div>
            <h1 class="text-4xl font-bold mb-4">${team.name}</h1>
            <p class="text-gray-400 mb-6">${team.description}</p>
            <div class="bg-neutral-900 rounded-lg p-6">
                <h2 class="text-xl font-bold mb-4">Team Stats</h2>
                <!-- Add team stats here -->
            </div>
        </div>
    `;
}

function displayManOfTheMatch(motm) {
    if (!motm) return;
    
    const motmElement = document.getElementById('motm');
    motmElement.innerHTML = `
        <div class="flex items-center">
            <img src="${motm.image}" alt="${motm.name}" class="w-24 h-24 rounded-full object-cover">
            <div class="ml-6">
                <h3 class="text-xl font-bold">${motm.name}</h3>
                <p class="text-gray-400">${motm.achievement}</p>
            </div>
        </div>
    `;
}

document.addEventListener('DOMContentLoaded', loadTeamDetails);