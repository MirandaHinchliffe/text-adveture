//#region enemie
var beast = [{
        'name': 'The Beast ',
        'type': 'Unknown Creature',
        'ability': 'Strength stronger than any man, with the power of its Screeching noises that can make eardrums bleed. ',
        'health': 50.0,
        'power': 10.0,
        'dodge': 4.0,
        'block': 8.0,
        'block': 9.0,
    },
    {
        'name': 'Beastie',
        'type': 'Unknown Creature',
        'abilityr': 'Speed faster than lightning, Crying like a child to lure in its prey. ',
        'health': 50.0,
        'power': 5.0,
        'dodge': 7.0,
        'block': 6.0,

    },
    {
        'name': 'Beast',
        'type': 'Unknown Creature',
        'ability': 'Strength stronger than any man, with the power of its Screeching noises that can make eardrums bleed.',
        'health': 50.0,
        'power': 9.0,
        'dodge': 5.0,
        'block': 7.0,
    },
    {
        'name': 'Beast-Man',
        'type': 'Unknown Creature',
        'ability': 'Speed faster than lightning, Crying like a child to lure in its prey. ',
        'health': 50.0,
        'power': 6.0,
        'dodge': 5.0,
        'block': 3.0,

    }]
//#endregion
//#region stranders
var stranders =[{
        'name': 'Leroy',
        'type': 'Man',
        'ability': 'Speed, Knife wielder ',
        'health': 50.0,
        'power': 8.0,
        'dodge': 6.0,
        'block': 6.0,
    },
    {
        'name': 'Olli',
        'type': 'Man',
        'ability': 'Knife wielder',
        'health': 50.0,
        'power': 7.0,
        'dodge': 5.0,
        'block': 5.0,
        

    },
    {
        'name': 'Red',
        'type': 'Man',
        'ability': 'Speed, Pocket Knife wielder',
        'health': 50.0,
        'power': 5.0,
        'dodge': 7.0,
        'block': 4.0,
    },
    {
        'name': 'Stan',
        'type': 'Man',
        'ability': 'Strength, Staff wielder',
        'health': 50.0,
        'power': 6.0,
        'dodge': 3.0,
        'block': 7.0,
    },
    {
        'name': 'Ki',
        'type': 'Man',
        'ability': 'Strength, Knife wielder',
        'health': 50.0,
        'power': 9.0,
        'dodge': 6.0,
        'block': 8.0,
    }]
//#endregion
//#region selection
function beastSelection(){
    randomBeast = Math.floor(Math.random()*3)

    var beastName = beast[randomBeast]["name"];
    var beastPower = beast[randomBeast]["power"];
    var beastHealth = beast[randomBeast]["health"];
    console.log(`${beastName} starts to come out of the forest, the ${beastPower}, their ${beastHealth} health, is all full. Prepare yourself lost one.`);
    document.getElementById("Beast").innerHTML = (`${beastName} comes out into the open to make their presence known. Its power is ${beastPower}, .They're health is ${beastHealth}. Are you ready to take them on?`);
    document.getElementById("strand").style.display = "none";
}
function stranderSelection(){
    randomStrander = Math.floor(Math.random()*5)
    var stranderName = stranders[randomStrander]["name"];
    var stranderPower = stranders[randomStrander]["power"];
    var stranderHealth = stranders[randomStrander]["health"];
    console.log(`${stranderName} walks towards the noises the beast is making in the forest, they're power is ${stranderPower}, and they're health is at ${stranderHealth}, prepare for this battle. `)
}

//beastSelection();
//stranderSelection();
let damage;
let power;
//#endregion selection
//#region RandomDiceRoll
let stranderHealth = 50;
let beastHealth = 50;
var stranderMultiplier;
function stranderRoll(){
    stranderMultiplier = Math.floor(Math.random()*5)
    console.log(`The Stranders have rolled: ${stranderMultiplier}`)
document.getElementById("stranderDice").innerHTML = `Stranders have rolled : ${stranderMultiplier}`
 beastHealth = beastHealth - stranderMultiplier;
 document.getElementById('beastHp').innerHTML = `The Beast is at ${beastHealth} health`
if(beastHealth <= 0){
    document.getElementById("stranderWon").innerHTML = "The Beast has Fallen";
    document.getElementById("beastDice").style.display = "none";
    document.getElementById("stranderDice").style.display = "none";
    document.getElementById("stranderHp").style.display = "none";
update(`${beastMultiplier}`)}}
var beastMultiplier;
function beastRoll(){
    beastMultiplier = Math.floor(Math.random()*3)
    document.getElementById("beastDice").innerHTML = `The Beast has rolled the ${beastMultiplier}`
    stranderHealth = stranderHealth - beastMultiplier;
    document.getElementById("stranderHp").innerHTML = `The Stranders are getting low, they're at ${stranderHealth} health`
    console.log(`The Beast has rolled ${beastMultiplier}`)
    if(stranderHealth <= 0){
        document.getElementById("beastWon").innerHTML = "The Stranders have been eaten by the Beast."
        document.getElementById("stranderDice").style.display = "none";
        document.getElementById("beastDice").style.display = "none";
        document.getElementById("beastHp").style.display = "none";
    }}
 function update(str){
     document.getElementById("stranderHp").innerHTML += (`${str}`)
 }
stranderRoll();
beastRoll();
//#endregion RandomDiceRoll 
//#region fight

function Le(){
    document.getElementById('start').style.display = "none"; 
    document.getElementById('youCrashed').style.display ="block";
    document.getElementById('strangeSounds').style.display = "none"
}
function Ol(){
    document.getElementById('start').style.display = "none"; 
    document.getElementById('youCrashed').style.display = "block";
    document.getElementById('strangeSounds').style.display = "none"
}
function Re(){
    document.getElementById('start').style.display = "none"; 
    document.getElementById('youCrashed').style.display = "block";
    document.getElementById('strangeSounds').style.display = "none"
}
function St(){
    document.getElementById('start').style.display = "none"; 
    document.getElementById('youCrashed').style.display = "block";
    document.getElementById('strangeSounds').style.display = "none"
}
function K(){
    document.getElementById('start').style.display = "none"; 
    document.getElementById('youCrashed').style.display = "block";
    document.getElementById('strangeSounds').style.display = "none"
}
var beastMultiplier;
var stranderMultiplier;
function fight() {
    beastMultiplier = Math.floor(Math.random()*10)
    stranderHealth = stranderHealth - beastMultiplier;
    document.getElementById('strangeSounds').style.display = "block"
    document.getElementById('strangeSoundsOne').innerHTML = `Your strander has ${stranderHealth} health left`;
        if (stranderHealth <= 0 ){
            document.getElementById('strangeSoundsOne').innerHTML = 'Your strander Has Perished'
        }
        stranderMultiplier = Math.floor(Math.random()*10)
        beastHealth = beastHealth - stranderMultiplier;
        document.getElementById('strangeSoundsTwo').innerHTML = `The beast has ${beastHealth} health left`;
            if (beastHealth <= 0 ){
                document.getElementById('strangeSoundsTwo').innerHTML = 'The beast Has Perished, continue on your way'
                document.getElementById('strangeSoundsOne').style.display = "none";
                document.getElementById('youCrashed').style.display = "none";
                document.getElementById('strangeSounds').style.display = "none"
            }}     
    function repairBoat() {
        document.getElementById('repairBoat').style.display = "block";
        document.getElementById('worry').style.display = "none";
       document.getElementById('strangeSoundsOne').style.display = "none";
       document.getElementById('strangeSoundsTwo').style.display = "none";
    }
    function buildNew() {
       document.getElementById('buildNew').style.display = "block";
       document.getElementById('worry').style.display = "none";
      document.getElementById('strangeSoundsOne').style.display = "none";
      document.getElementById('strangeSoundsTwo').style.display = "none";
   }

   var stranderOneMultiplier;
   var beastMulitplier;
//#endregion fight
//#region pictures

function buildShelter(){
document.getElementById("B").style.display="block";
}
function searchShelter(){
document.getElementById("shelt").style.display="block";
}

//#endregion pictures

