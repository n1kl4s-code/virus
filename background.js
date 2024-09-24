const backgrounds = ["computer-virus-1-svgrepo-com.svg", "computer-virus-2-svgrepo-com.svg", "computer-virus-3-svgrepo-com.svg", "computer-virus-4-svgrepo-com.svg"];
const randomNumber = Math.floor(Math.random() * backgrounds.length);
const randomBackground = backgrounds[randomNumber];

document.body.style.backgroundImage = `url("${randomBackground}")`;