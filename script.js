// Flip Card Click Interaction
document.querySelectorAll('.flip-card').forEach(card => {
    card.addEventListener('click', function () {
        this.querySelector('.flip-card-inner').classList.toggle('flipped');
    });
});

// Surprise Message
document.getElementById("surpriseBtn").addEventListener("click", function () {
    let message = document.getElementById("surpriseMessage");
    
    message.classList.toggle("hidden");
    message.style.opacity = message.classList.contains("hidden") ? "0" : "1";
});
let isMusicPlaying = false; // Variable to track music state
let heartInterval; // Variable to store the interval for heart creation

document.getElementById('surpriseBtn').addEventListener('click', function() {
    const message = document.getElementById('message');
    const music = document.getElementById('music');
    const roseContainer = document.getElementById("roses-container");

    function createRose() {
        const rose = document.createElement("div");
        rose.classList.add("rose");
        rose.innerHTML = "🌸💗";
    
        // Random position & animation duration
        const randomLeft = Math.random() * window.innerWidth;
        const randomDuration = Math.random() * 3 + 2;

        rose.style.left = `${randomLeft}px`;
        rose.style.animationDuration = `${randomDuration}s`;

        roseContainer.appendChild(rose);

        setTimeout(() => {
            rose.remove()
        }, randomDuration * 1000); 
    }

    // Generate roses every 700ms for a more natural effect
    setInterval(createRose, 90);
    
    // Show the message and start music on first click
    if (!isMusicPlaying) {
        // message.textContent = "Happy Women's Day!";
        message.classList.remove('hidden');
        message.style.top = '10px'; // Move the message down to show it
        
        // Play the music
        music.play();
        isMusicPlaying = true; // Update the state
        
        // Start creating hearts
        createRose(); // Create 1000 hearts
    } else {
        // Stop the music
        music.pause();
        music.currentTime = 0; // Reset the music to the beginning
        isMusicPlaying = false; // Update the state
        
        // Stop creating hearts
        // clearInterval(heartInterval);
    }
});

    //     function createRose() {
    //         const rose = document.createElement("div");
    //         rose.classList.add("rose");
    //         rose.innerHTML = "🌸💗";
        
    //         // Random position & animation duration
    //         const randomLeft = Math.random() * window.innerWidth;
    //         const randomDuration = Math.random() * 3 + 2;

    //         rose.style.left = `${randomLeft}px`;
    //         rose.style.animationDuration = `${randomDuration}s`;

    //         roseContainer.appendChild(rose);

    //         setTimeout(() => {
    //             rose.remove()
    //         }, randomDuration * 1000); 
    //     }

    //     // Generate roses every 700ms for a more natural effect
    //     setInterval(createRose, 80);
    // });


// function createHearts(count) {
    //     let heartsCreated = 0;
    
    //     heartInterval = setInterval(() => {
        //         if (heartsCreated < count) {
//             createHeart();
//             heartsCreated++;
//         } else {
//             clearInterval(heartInterval); // Stop the interval when all hearts are created
//         }
//     }, 50); // Adjust the interval time for heart creation speed
// }

// function createHeart() {
//     const heart = document.createElement("div");
//     heart.classList.add("rose");
//     heart.innerHTML = "💗";

//     // Random position & animation duration
//     const randomLeft = Math.random() * window.innerWidth;
//     const randomDuration = Math.random() * 3 + 2;

//     heart.style.left = `${randomLeft}px`;
//     heart.style.animationDuration = `${randomDuration}s`;

//     roseContainer.appendChild(rose);

//     setTimeout(() => {
//         heart.remove();
//     }, randomDuration * 100); 
// }