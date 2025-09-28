// Enhanced script.js with background color changes

// Show the main menu and hide all scenarios
function showMainMenu() {
    document.getElementById('mainMenu').style.display = 'flex';
    document.querySelectorAll('.scenario').forEach(scenario => {
        scenario.classList.remove('active');
    });
    // Reset background color
    document.body.style.backgroundColor = '#f5f5f5';
}

// Show a specific scenario and hide the main menu
function showScenario(scenarioId) {
    document.getElementById('mainMenu').style.display = 'none';
    document.querySelectorAll('.scenario').forEach(scenario => {
        scenario.classList.remove('active');
    });
    document.getElementById(scenarioId).classList.add('active');
    
    // Change background color based on scenario
    switch(scenarioId) {
        case 'brawlhallaScenario':
            document.body.style.backgroundColor = '#e6f2ff';
            break;
        case 'gymScenario':
            document.body.style.backgroundColor = '#e6ffe6';
            break;
        case 'petsScenario':
            document.body.style.backgroundColor = '#fff5e6';
            break;
    }
}

// Set up event listeners for the icon cards
document.addEventListener('DOMContentLoaded', function() {
    document.querySelectorAll('.icon-card').forEach(card => {
        card.addEventListener('click', function() {
            const scenario = this.getAttribute('data-scenario') + 'Scenario';
            showScenario(scenario);
        });
    });
});

// State variables for each scenario
let brawlhallaState = 0;
let gymState = 0;
let petsState = 0;

// Brawlhalla code-switching function
function switchBrawlhalla() {
    const playerConv = document.getElementById('brawlhallaConversation');
    const siblingConv = document.getElementById('brawlhallaSiblingConversation');
    const scenario = document.getElementById('brawlhallaScenario');
    
    if (brawlhallaState === 0) {
        // Switch to sibling conversation
        playerConv.style.display = 'none';
        siblingConv.style.display = 'block';
        scenario.style.backgroundColor = '#fff5e6';
        brawlhallaState = 1;
    } else {
        // Switch back to player conversation
        playerConv.style.display = 'block';
        siblingConv.style.display = 'none';
        scenario.style.backgroundColor = '#f0f7ff';
        brawlhallaState = 0;
    }
}

// Gym code-switching function
function switchGym() {
    const memberConv = document.getElementById('gymConversation');
    const colleagueConv = document.getElementById('gymColleagueConversation');
    const scenario = document.getElementById('gymScenario');
    
    if (gymState === 0) {
        // Switch to colleague conversation
        memberConv.style.display = 'none';
        colleagueConv.style.display = 'block';
        scenario.style.backgroundColor = '#ffe6e6';
        gymState = 1;
    } else {
        // Switch back to member conversation
        memberConv.style.display = 'block';
        colleagueConv.style.display = 'none';
        scenario.style.backgroundColor = '#f0fff0';
        gymState = 0;
    }
}

// Pets code-switching function
function switchPets() {
    const happyConv = document.getElementById('petsConversation');
    const seriousConv = document.getElementById('petsSeriousConversation');
    const scenario = document.getElementById('petsScenario');
    
    if (petsState === 0) {
        // Switch to serious conversation
        happyConv.style.display = 'none';
        seriousConv.style.display = 'block';
        scenario.style.backgroundColor = '#ffe6e6';
        petsState = 1;
    } else {
        // Switch back to happy conversation
        happyConv.style.display = 'block';
        seriousConv.style.display = 'none';
        scenario.style.backgroundColor = '#fffaf0';
        petsState = 0;
    }
}
