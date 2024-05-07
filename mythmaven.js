function update() {
    setname();
    health();
    prowess();
    arcana();
    speed();
    skills();
}
function health() {
    let might = document.getElementById('might').value;
    let level = document.getElementById('level').value;

    let health = (((might*1) + 1) * level) + 5;
    document.getElementById('health-max').value = health;
    document.getElementById('health').max = health;
}
function prowess() {
    let level = document.getElementById('level').value; 
    let agility = document.getElementById('agility').value;

    let prowess = Math.ceil(level/2) * agility;
    document.getElementById('prowess-max').value = prowess;
    document.getElementById('prowess').max = prowess;
}
function arcana() {
    let level = document.getElementById('level').value; 
    let charisma = document.getElementById('charisma').value;
    let knowledge = document.getElementById('knowledge').value;

    let arcana = Math.ceil(level/2) * charisma;
    if (document.getElementById('class-select') == "mage") {
        arcana = arcana+knowledge;
    }
    document.getElementById('arcana-max').value = arcana;
    document.getElementById('arcana').max = arcana;
}
function speed() {
    let size = document.getElementById('size').value;

    if (size=="small") {
        document.getElementById('speed').value = 5;
    } else {
        document.getElementById('speed').value = 6;
    }
}
function skills() {
    let level = document.getElementById('level').value;
    let prof = 2;
    if (level < 4) {
        prof = 2;
    } else if (level < 8) {
        prof = 3;
    } else if (level < 12) {
        prof = 4;
    } else if (level < 16) {
        prof = 5;
    } else if (level < 20) {
        prof = 6;
    } else {
        prof = 7;
    }
    document.getElementById('prof').value = prof;
    skillmax(prof);
    allskills();
    let fortitude = 1*document.getElementById('fortitude-total').value;
    let reflex = 1*document.getElementById('reflex-total').value;
    let shield = 0;
    if (document.getElementById('shield').checked) {
        shield = 1;
    }
}
function skill(skillID, attribute) {
    const skillElement = document.getElementById(skillID);
    const skillValue = skillElement.value;
    const skillTotalID = `${skillID}-total`;
    const totalElement = document.getElementById(skillTotalID);
    const totalValue = Number(skillValue) + Number(attribute);
    totalElement.value = totalValue;
}
function allskills() {
    skill('fortitude', document.getElementById('might').value);
    skill('athletics', document.getElementById('might').value);
    skill('reflex', document.getElementById('agility').value);
    skill('acrobatics', document.getElementById('agility').value);
    skill('stealth', document.getElementById('agility').value);
    skill('sleight', document.getElementById('agility').value);
    skill('focus', document.getElementById('knowledge').value);
    skill('history', document.getElementById('knowledge').value);
    skill('magic', document.getElementById('knowledge').value);
    skill('medicine', document.getElementById('knowledge').value);
    skill('nature', document.getElementById('knowledge').value);
    skill('religion', document.getElementById('knowledge').value);
    skill('world', document.getElementById('knowledge').value);
    skill('will', document.getElementById('charisma').value);
    skill('deception', document.getElementById('charisma').value);
    skill('insight', document.getElementById('charisma').value);
    skill('intimidation', document.getElementById('charisma').value);
    skill('perception', document.getElementById('charisma').value);
    skill('performance', document.getElementById('charisma').value);
    skill('persuasion', document.getElementById('charisma').value);
}
function skillmax(prof) {
    document.getElementById('fortitude').max = prof;
    document.getElementById('athletics').max = prof;
    document.getElementById('reflex').max = prof;
    document.getElementById('acrobatics').max = prof;
    document.getElementById('stealth').max = prof;
    document.getElementById('sleight').max = prof;
    document.getElementById('focus').max = prof;
    document.getElementById('history').max = prof;
    document.getElementById('magic').max = prof;
    document.getElementById('medicine').max = prof;
    document.getElementById('nature').max = prof;
    document.getElementById('religion').max = prof;
    document.getElementById('world').max = prof;
    document.getElementById('will').max = prof;
    document.getElementById('deception').max = prof;
    document.getElementById('insight').max = prof;
    document.getElementById('intimidation').max = prof;
    document.getElementById('perception').max = prof;
    document.getElementById('performance').max = prof;
    document.getElementById('persuasion').max = prof;
}
function setname() {
    let name = document.getElementById('name').value;
    let str = "Character Sheet"
    if (name != "") {
        str = name+"'s Character Sheet"
    }
    document.getElementById('title').innerText = str;
}

function theme() {
    let theme_select = document.getElementById('theme-select').value;
    document.getElementById('sheet-body').removeAttribute("class");
    document.getElementById('sheet-body').classList.add(theme_select);
}

function link() {
    const element = document.getElementById('journal-link');
    const link = element.getAttribute("href");
    if (link=="#popup-box") {
        element.setAttribute("href", "#");
    } else {
        element.setAttribute("href", "#popup-box");
    }
}