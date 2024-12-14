import { db } from './firebase-config.js';
import { collection, getDocs } from 'https://www.gstatic.com/firebasejs/10.8.0/firebase-firestore.js';

async function loadTeams() {
    const teamsGrid = document.getElementById('teams-grid');
    try {
        const querySnapshot = await getDocs(collection(db, "teams"));
        teamsGrid.innerHTML = ''; // Clear existing content

        querySnapshot.forEach((doc) => {
            const team = doc.data();
            teamsGrid.innerHTML += `
                <div class="bg-neutral-900 rounded-lg overflow-hidden">
                    <img src="${team.imageUrl}" alt="${team.name}" class="w-full h-48 object-cover">
                    <div class="p-6">
                        <h2 class="text-xl font-bold mb-2">${team.name}</h2>
                        <p class="text-gray-400 mb-4">${team.description}</p>
                        <a href="view.html?id=${doc.id}" 
                           class="inline-block bg-blue-600 hover:bg-blue-700 px-6 py-2 rounded-full">
                            View Team
                        </a>
                    </div>
                </div>
            `;
        });
    } catch (error) {
        console.error("Error loading teams:", error);
        teamsGrid.innerHTML = '<p class="text-red-500">Error loading teams. Please try again later.</p>';
    }
}

document.addEventListener('DOMContentLoaded', loadTeams);