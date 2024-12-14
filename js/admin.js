import { auth, db } from './firebase-config.js';
import { signInWithEmailAndPassword } from 'https://www.gstatic.com/firebasejs/10.8.0/firebase-auth.js';
import { collection, addDoc, deleteDoc, doc, updateDoc } from 'https://www.gstatic.com/firebasejs/10.8.0/firebase-firestore.js';

// Admin Login
document.getElementById('adminLogin')?.addEventListener('submit', async (e) => {
    e.preventDefault();
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    try {
        await signInWithEmailAndPassword(auth, email, password);
        window.location.href = 'dashboard.html';
    } catch (error) {
        alert('Login failed: ' + error.message);
    }
});

// Team Management Functions
export async function addTeam(teamData) {
    try {
        await addDoc(collection(db, "teams"), teamData);
        alert('Team added successfully!');
    } catch (error) {
        alert('Error adding team: ' + error.message);
    }
}

export async function updateTeam(teamId, teamData) {
    try {
        await updateDoc(doc(db, "teams", teamId), teamData);
        alert('Team updated successfully!');
    } catch (error) {
        alert('Error updating team: ' + error.message);
    }
}

export async function deleteTeam(teamId) {
    try {
        await deleteDoc(doc(db, "teams", teamId));
        alert('Team deleted successfully!');
    } catch (error) {
        alert('Error deleting team: ' + error.message);
    }
}