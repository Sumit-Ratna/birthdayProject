// // Add a personalized name
// document.getElementById('name').textContent = 'sudhansu'; // Replace 'Alice' with the special person's name

// // Surprise button functionality
// const surpriseBtn = document.getElementById('surpriseBtn');
// const surpriseMessage = document.getElementById('surpriseMessage');

// surpriseBtn.addEventListener('click', () => {
//     surpriseMessage.classList.remove('hidden');
//     surpriseBtn.textContent = '🎂 Surprise! 🎂';
//     surpriseBtn.disabled = true;
// });

document.getElementById('surpriseButton').addEventListener('click', function() {
    const surpriseDiv = document.getElementById('surprise');
    surpriseDiv.innerHTML = '🎉🎂🎈 You are amazing! Have a fantastic day! 🎈🎂🎉';
    surpriseDiv.style.animation = 'fadeIn 2s ease-in-out';

    // Optional: Add confetti effect
    confetti({
        particleCount: 100,
        spread: 70,
        origin: { y: 0.6 }
    });
});

// Optional: Add a name dynamically (you can replace this with a prompt or other logic)
document.getElementById('name').textContent = 'Anu'; // Replace 'John' with the person's name
