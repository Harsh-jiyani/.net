document.getElementById("startButton").addEventListener("click", function() {
    botMessage("Welcome to the Astrology Chatbot! Please upload your Kundli image.");
  });
  
  document.getElementById("kundliUpload").addEventListener("change", function(event) {
    var file = event.target.files[0];
    var reader = new FileReader();
    
    reader.onload = function(e) {
      var imgElement = document.getElementById("kundliPreview");
      imgElement.src = e.target.result;
      imgElement.style.display = "block"; // Show the uploaded image
      enableDropdowns(); // Enable dropdowns after upload
    };
  
    if (file) {
      reader.readAsDataURL(file);
    }
  });
  
  function botMessage(message) {
    var chatOutput = document.getElementById("chatOutput");
    var botBubble = document.createElement("div");
    botBubble.classList.add("chat-bubble", "bot");
    botBubble.textContent = message;
    chatOutput.appendChild(botBubble);
    chatOutput.scrollTop = chatOutput.scrollHeight; // Auto-scroll to the latest message
  }
  
  function enableDropdowns() {
    var planetDropdown = document.getElementById("planetDropdown");
    var houseDropdown = document.getElementById("houseDropdown");
    var zodiacDropdown = document.getElementById("zodiacDropdown");
  
    planetDropdown.disabled = false;
    houseDropdown.disabled = false;
    zodiacDropdown.disabled = false;
  }
  
  function showHouseExplanation(house) {
    var explanation = "Explanation for " + house; // Example: you can define explanations
    document.getElementById("houseExplanation").textContent = explanation;
  }
  
  document.getElementById("planetDropdown").addEventListener("change", function() {
    var planet = this.value;
    botMessage("You selected planet: " + planet);
  });
  
  document.getElementById("zodiacDropdown").addEventListener("change", function() {
    var zodiac = this.value;
    botMessage("You selected zodiac: " + zodiac);
  });
  
  document.getElementById("houseDropdown").addEventListener("change", function() {
    var house = this.value;
    botMessage("You selected house: " + house);
    showHouseExplanation(house); // Show explanation when a house is selected
  });
  
  document.getElementById("conjunctionDropdown").addEventListener("change", function() {
    var conjunction = this.value;
    botMessage("You selected conjunction: " + conjunction);
  });
  
  document.getElementById("newPredictionButton").addEventListener("click", function() {
    // Reset selections and start new prediction
    document.getElementById("planetDropdown").selectedIndex = 0;
    document.getElementById("zodiacDropdown").selectedIndex = 0;
    document.getElementById("houseDropdown").selectedIndex = 0;
    document.getElementById("conjunctionDropdown").selectedIndex = 0;
    
    var finalResultContainer = document.getElementById("finalResultContainer");
    finalResultContainer.innerHTML = ''; // Clear previous result
    
    botMessage("Starting a new prediction. Please select your options.");
  });
  
  // You can dynamically generate options for planets, zodiac signs, houses, and conjunctions in these dropdowns:
  function createOptions() {
    var planets = ["Sun", "Moon", "Mars", "Mercury", "Jupiter", "Venus", "Saturn", "Rahu", "Ketu"];
    var zodiacSigns = ["Aries", "Taurus", "Gemini", "Cancer", "Leo", "Virgo", "Libra", "Scorpio", "Sagittarius", "Capricorn", "Aquarius", "Pisces"];
    var houses = ["1st House", "2nd House", "3rd House", "4th House", "5th House", "6th House", "7th House", "8th House", "9th House", "10th House", "11th House", "12th House"];
    var conjunctions = ["None", "Sun & Moon", "Mars & Venus", "Mercury & Jupiter", "Saturn & Rahu"];
    
    // Populate the dropdowns dynamically
    populateDropdown("planetDropdown", planets);
    populateDropdown("zodiacDropdown", zodiacSigns);
    populateDropdown("houseDropdown", houses);
    populateDropdown("conjunctionDropdown", conjunctions);
  }
  
  function populateDropdown(id, options) {
    var dropdown = document.getElementById(id);
    options.forEach(function(option) {
      var optionElement = document.createElement("option");
      optionElement.value = option;
      optionElement.textContent = option;
      dropdown.appendChild(optionElement);
    });
  }
  
  createOptions(); // Call this function to populate the dropdowns when the page loads
  