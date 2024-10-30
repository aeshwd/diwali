



function burstCracker() {
    // Create a single cracker image element
    const cracker = document.createElement("img");
    cracker.src = "Cracker 2.gif"; // Replace with the actual cracker image path
    cracker.classList.add("single-cracker");

    // Append cracker to the body to cover the whole page
    document.body.appendChild(cracker);

    // Animate cracker upwards
    setTimeout(() => {
        cracker.style.transform = "translateY(-100vh)";
    }, 100);

    // Remove cracker after animation completes
    setTimeout(() => {
        cracker.remove();
    }, 3000);
}


function getBlessings() {
    const blessingsSection = document.getElementById("blessings-section");
    const greetingSection = document.getElementById("greeting-section");
    const userNameElement = document.getElementById("user-name");
    const blessingMessage = document.getElementById("blessing-message");

    // Prompt the user to enter their name
    const userName = prompt("Enter your name:");

    // Set the blessings and greeting messages with the user's name
    blessingMessage.innerHTML = `May this Diwali bring health, wealth, and happiness to you and your family, ${userName} and family. Wishing you abundant joy and blessings! ✨`;
    userNameElement.innerText = userName;

    // Display both sections with animations
    blessingsSection.style.display = "flex";
    greetingSection.style.display = "block";
}

