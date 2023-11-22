document.addEventListener("DOMContentLoaded", async function() {
  const charactersContainer = document.getElementById("charactersContainer");

  try {
    const response = await fetch("mortalCombat.json");
    const characters = await response.json();

    characters.forEach(character => {
      const card = document.createElement("div");
      card.classList.add("card");

      const name = document.createElement("p");
      name.textContent = `Name: ${character.name}`;

      const age = document.createElement("p");
      age.textContent = `Age: ${character.age}`;

      const avatar = document.createElement("img");
      avatar.src = character.avatar;
      avatar.alt = "";

      const icon = document.createElement("img");
      icon.src = character.icon;
      icon.alt = "";

      card.appendChild(name);
      card.appendChild(age);
      card.appendChild(avatar);
      card.appendChild(icon);

      charactersContainer.appendChild(card);
    });

    console.log("Data from JSON file:", characters);
  } catch (error) {
    console.error("Error fetching or parsing JSON file:", error);
  }
});