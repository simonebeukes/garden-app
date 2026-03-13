// Ask the user which season it is.
// prompt() opens a dialog box in the browser where the user can type a value.
// The text the user enters (e.g., "summer" or "winter") is stored in the 'season' variable as a string.
let season = prompt("Enter the current season (e.g., summer, winter):");


// Hardcoded values for plant type.
// For now, 'plantType' is fixed to "flower". This means the advice below will always treat the plant as a flower.
// TODO: Replace with prompt() to allow user interaction.
let plantType = "flower"; // TODO: Replace with prompt() to allow user interaction.


// Variable to hold gardening advice.
// We'll build up a complete advice message by adding text to this string step by step.
let advice = "";


// Determine advice based on the season.
// This conditional block checks what the user entered for 'season' and appends different advice text.
// If the season is exactly "summer", we add watering and shade advice.
// If the season is exactly "winter", we add frost protection advice.
// For any other input (e.g., "spring", "autumn", or something unexpected), we fall back to a generic message.
if (season === "summer") {
    advice += "Water your plants regularly and provide some shade.\n";
} else if (season === "winter") {
    advice += "Protect your plants from frost with covers.\n";
} else {
    advice += "No advice for this season.\n";
}


// Determine advice based on the plant type.
// This second conditional block looks at 'plantType' and adds more specific guidance.
// If plantType is "flower", we suggest fertiliser to boost blooming.
// If plantType is "vegetable", we remind the user to watch out for pests.
// Any other value results in a generic message for unknown plant types.
if (plantType === "flower") {
    advice += "Use fertiliser to encourage blooms.";
} else if (plantType === "vegetable") {
    advice += "Keep an eye out for pests!";
} else {
    advice += "No advice for this type of plant.";
}


// Log the generated advice to the console.
// At this point, 'advice' contains season-based guidance plus plant-type-specific tips.
// console.log() outputs the full message so the user (or developer) can read it in the browser's console.
console.log(advice);


// TODO: Examples of possible features to add:
// - Add detailed comments explaining each block of code.
// - Refactor the code into functions for better readability and modularity.
// - Store advice in an object for multiple plants and seasons.
// - Suggest plants that thrive in the given season.
