function update() {
    setname();
    health();
    prowess();
    arcana();
    speed();
    prof();
}

function health() {
    let might = document.getElementById('might').value;
    let level = document.getElementById('level').value;

    let health = (((might*1) + 1) * level) + 5;
    document.getElementById('health-max').value = health;
}
function prowess() {
    let level = document.getElementById('level').value; 
    let agility = document.getElementById('agility').value;

    let prowess = Math.ceil(level/2) * agility;
    document.getElementById('prowess-max').value = prowess;
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
}
function speed() {
    let size = document.getElementById('size').value;

    if (size=="small") {
        document.getElementById('speed').value = 5;
    } else {
        document.getElementById('speed').value = 6;
    }
}
function prof() {
    let level = document.getElementById('level').value;

    if (level < 4) {
        document.getElementById('prof').value = 2;
    } else if (level < 8) {
        document.getElementById('prof').value = 3;
    } else if (level < 12) {
        document.getElementById('prof').value = 4;
    } else if (level < 16) {
        document.getElementById('prof').value = 5;
    } else if (level < 20) {
        document.getElementById('prof').value = 6;
    } else {
        document.getElementById('prof').value = 7;
    }
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