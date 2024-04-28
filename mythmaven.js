function update() {
    health();
    prowess();
    arcana();
    speed();
    prof();
    physdef();
    magdef();
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
function physdef() {
    let reflex = document.getElementById('reflex-max').value;
    let prof = document.getElementById('prof').value;

    let physdef = reflex+prof;

    let armour = document.getElementById('armour').value;

    if (armour=="light-armour" || armour=="hybrid-armour") {
        physdef += 1;
    } else if (armour=="medium-armour") {
        physdef += 2;
    } else if (armour=="heavy-armour") {
        physdef+= 4;
    }

    document.getElementById('physical-defense').value = physdef;
}
function magdef() {
    let focus = document.getElementById('focus-max').value;
    let prof = document.getElementById('prof').value;

    let magdef = focus+prof;

    let armour = document.getElementById('armour').value;

    if (armour=="light-robes" || armour=="hybrid-armour") {
        magdef += 1;
    } else if (armour=="medium-robes") {
        magdef += 2;
    } else if (armour=="heavy-robes") {
        magdef+= 4;
    }

    document.getElementById('magical-defense').value = magdef;
}