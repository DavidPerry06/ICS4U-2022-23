let data;

//delcaring arrays
let NFCEast = [];
let NFCNorth = [];
let NFCSouth = [];
let NFCWest = [];
let AFCEast = [];
let AFCNorth = [];
let AFCSouth = [];
let AFCWest = [];
let NFCGroups = [];
let AFCGroups = [];
let NFCTeams = [];
let AFCTeams = [];
let allGroups =[];
let allTeams =[];

//declare temp array to store a team
let team = {};
team['TEAM'] = 'Eagles';
team['id'] = '1';
team['W']= '8';
team['L']= '0';
team['T']= '0';
team['WP'] = (parseInt(team['W'])/(parseInt(team['W']) + parseInt(team['L']) + parseInt(team['T']))).toFixed(3);
team['HOME']= '4-0-0';
team['ROAD']= '4-0-0';
team['GAMES'] = [
    {
        opp: 'Lions',
        status: 'WIN',
        score: '38',
        oppScore: '35',
        type: 'Road',
        date: '11/9/2022'
    },
    {
        opp: 'Vikings',
        status: 'WIN',
        score: '24',
        oppScore: '7',
        type: 'Home',
        date: '19/9/2022'
    },
    {
        opp: 'Commanders',
        status: 'WIN',
        score: '24',
        oppScore: '8',
        type: 'Road',
        date: '25/9/2022'
    },
    {
        opp: 'Jaguars',
        status: 'WIN',
        score: '29',
        oppScore: '21',
        type: 'Home',
        date: '02/10/2022'
    },
    {
        opp: 'Cardinals',
        status: 'WIN',
        score: '20',
        oppScore: '17',
        type: 'Road',
        date: '09/10/2022'
    },
    {
        opp: 'Cowboys',
        status: 'WIN',
        score: '26',
        oppScore: '17',
        type: 'Home',
        date: '16/10/2022'
    },
    {
        opp: 'Steelers',
        status: 'WIN',
        score: '35',
        oppScore: '13',
        type: 'Home',
        date: '30/10/2022'
    },
    {
        opp: 'Texans',
        status: 'WIN',
        score: '29',
        oppScore: '17',
        type: 'Road',
        date: '03/11/2022'
    },
]
NFCEast.push(team);
allTeams.push(team);
NFCTeams.push(team);

//push the team to their respective arrays and then clear out the temp array for the next team

team = {};
team['TEAM'] = 'Cowboys';
team['id'] = '2';
team['W']= '6';
team['L']= '2';
team['T']= '0';
team['WP'] = (parseInt(team['W'])/(parseInt(team['W']) + parseInt(team['L']) + parseInt(team['T']))).toFixed(3);
team['HOME']= '4-1-0';
team['ROAD']= '2-1-0';

team['GAMES'] = [
    {
        opp: 'Bucaneers',
        status: 'LOSS',
        score: '3',
        oppScore: '19',
        type: 'Home',
        date: '11/9/2022'
    },
    {
        opp: 'Bengals',
        status: 'WIN',
        score: '20',
        oppScore: '17',
        type: 'Home',
        date: '18/9/2022'
    },
    {
        opp: 'Giants',
        status: 'WIN',
        score: '23',
        oppScore: '16',
        type: 'Road',
        date: '27/9/2022'
    },
    {
        opp: 'Commanders',
        status: 'WIN',
        score: '25',
        oppScore: '10',
        type: 'Home',
        date: '2/10/2022'
    },
    {
        opp: 'Rams',
        status: 'WIN',
        score: '22',
        oppScore: '10',
        type: 'Road',
        date: '9/10/2022'
    },
    {
        opp: 'Eagles',
        status: 'LOSS',
        score: '26',
        oppScore: '17',
        type: 'Road',
        date: '17/10/2022'
    },
    {
        opp: 'Lions',
        status: 'WIN',
        score: '24',
        oppScore: '6',
        type: 'Home',
        date: '23/10/2022'
    },
    {
        opp: 'Bears',
        status: 'WIN',
        score: '49',
        oppScore: '29',
        type: 'Home',
        date: '30/10/2022'
    },
]
NFCEast.push(team);
allTeams.push(team)
NFCTeams.push(team);

team = {};
team['TEAM'] = 'Giants';
team['id'] = '3';
team['W']= '6';
team['L']= '2';
team['T']= '0';
team['WP'] = (parseInt(team['W'])/(parseInt(team['W']) + parseInt(team['L']) + parseInt(team['T']))).toFixed(3);
team['HOME']= '3-1-0';
team['ROAD']= '3-1-0';

team['GAMES'] = [
    {
        opp: 'Titans',
        status: 'WIN',
        score: '21',
        oppScore: '20',
        type: 'Road',
        date: '11/9/2022'
    },
    {
        opp: 'Panthers',
        status: 'WIN',
        score: '19',
        oppScore: '16',
        type: 'Home',
        date: '18/9/2022'
    },
    {
        opp: 'Cowboys',
        status: 'LOSS',
        score: '16',
        oppScore: '23',
        type: 'Home',
        date: '27/9/2022'
    },
    {
        opp: 'Bears',
        status: 'WIN',
        score: '20',
        oppScore: '12',
        type: 'Home',
        date: '2/10/2022'
    },
    {
        opp: 'Packers',
        status: 'WIN',
        score: '27',
        oppScore: '22',
        type: 'Home',
        date: '9/10/2022'
    },
    {
        opp: 'Ravens',
        status: 'WIN',
        score: '24',
        oppScore: '20',
        type: 'Home',
        date: '16/10/2022'
    },
    {
        opp: 'Jaguars',
        status: 'WIN',
        score: '23',
        oppScore: '17',
        type: 'Road',
        date: '23/10/2022'
    },
    {
        opp: 'Seahawks',
        status: 'LOSS',
        score: '13',
        oppScore: '27',
        type: 'Road',
        date: '30/10/2022'
    },
]
NFCEast.push(team);
allTeams.push(team)
NFCTeams.push(team);

team = {};
team['TEAM'] = 'Commanders';
team['id'] = '4';
team['W']= '4';
team['L']= '5';
team['T']= '0';
team['WP'] = (parseInt(team['W'])/(parseInt(team['W']) + parseInt(team['L']) + parseInt(team['T']))).toFixed(3);
team['HOME']= '2-3-0';
team['ROAD']= '2-2-0';

team['GAMES'] = [
    {
        opp: 'Jaguars',
        status: 'WIN',
        score: '28',
        oppScore: '22',
        type: 'Home',
        date: '11/9/2022',
    },
    {
        opp: 'Lions',
        status: 'LOSS',
        score: '27',
        oppScore: '36',
        type: 'Road',
        date: '18/9/2022',
    },
    {
        opp: 'Eagles',
        status: 'LOSS',
        score: '8',
        oppScore: '24',
        type: 'Home',
        date: '25/9/2022',
    },
    {
        opp: 'Cowboys',
        status: 'LOSS',
        score: '10',
        oppScore: '25',
        type: 'Road',
        date: '2/10/2022',
    },
    {
        opp: 'Titans',
        status: 'LOSS',
        score: '17',
        oppScore: '21',
        type: 'Home',
        date: '9/10/2022',
    },
    {
        opp: 'Bears',
        status: 'WIN',
        score: '12',
        oppScore: '7',
        type: 'Road',
        date: '14/10/2022',
    },
    {
        opp: 'Packers',
        status: 'WIN',
        score: '23',
        oppScore: '21',
        type: 'Home',
        date: '23/10/2022',
    },
    {
        opp: 'Colts',
        status: 'WIN',
        score: '17',
        oppScore: '16',
        type: 'Road',
        date: '30/10/2022',
    },
    {
        opp: 'Vikings',
        status: 'LOSS',
        score: '17',
        oppScore: '20',
        type: 'Home',
        date: '6/11/2022',
    },
]
NFCEast.push(team);
allTeams.push(team)
NFCTeams.push(team);



team = {};
team['TEAM'] = 'Vikings';
team['id'] = '5';
team['W']= '7';
team['L']= '1';
team['T']= '0';
team['WP'] = (parseInt(team['W'])/(parseInt(team['W']) + parseInt(team['L']) + parseInt(team['T']))).toFixed(3);
team['HOME']= '4-0-0';
team['ROAD']= '3-1-0';

team['GAMES'] = [
    {
        opp: 'Packers',
        status: 'WIN',
        score: '23',
        oppScore: '7',
        type: 'Home',
        date: '11/9/2022'
    },
    {
        opp: 'Eagle',
        status: 'LOSS',
        score: '7',
        oppScore: '24',
        type: 'Road',
        date: '20/9/2022'
    },
    {
        opp: 'Lions',
        status: 'WIN',
        score: '28',
        oppScore: '24',
        type: 'Home',
        date: '25/9/2022'
    },
    {
        opp: 'Saints',
        status: 'WIN',
        score: '28',
        oppScore: '25',
        type: 'Home',
        date: '2/10/2022'
    },
    {
        opp: 'Bears',
        status: 'WIN',
        score: '29',
        oppScore: '22',
        type: 'Home',
        date: '9/10/2022'
    },
    {
        opp: 'Dolphins',
        status: 'WIN',
        score: '24',
        oppScore: '16',
        type: 'Road',
        date: '16/10/2022'
    },
    {
        opp: 'Cardinals',
        status: 'WIN',
        score: '34',
        oppScore: '26',
        type: 'Home',
        date: '30/10/2022'
    },
    {
        opp: 'Commanders',
        status: 'WIN',
        score: '20',
        oppScore: '17',
        type: 'Road',
        date: '6/11/2022'
    },
]
NFCNorth.push(team);
allTeams.push(team)
NFCTeams.push(team);

team = {};
team['TEAM'] = 'Packers';
team['id'] = '6';
team['W']= '3';
team['L']= '6';
team['T']= '0';
team['WP'] = (parseInt(team['W'])/(parseInt(team['W']) + parseInt(team['L']) + parseInt(team['T']))).toFixed(3);
team['HOME']= '2-2-0';
team['ROAD']= '1-4-0';

team['GAMES'] = [
    {
        opp: 'Vikings',
        status: 'LOSS',
        score: '7',
        oppScore: '23',
        type: 'Road',
        date: '11/9/2022'
    },
    {
        opp: 'Bears',
        status: 'WIN',
        score: '27',
        oppScore: '10',
        type: 'Home',
        date: '19/9/2022'
    },
    {
        opp: 'Buccaneers',
        status: 'WIN',
        score: '14',
        oppScore: '12',
        type: 'Road',
        date: '25/9/2022'
    },
    {
        opp: 'Patriots',
        status: 'WIN',
        score: '27',
        oppScore: '24',
        type: 'Home',
        date: '2/10/2022'
    },
    {
        opp: 'Giants',
        status: 'LOSS',
        score: '22',
        oppScore: '27',
        type: 'Home',
        date: '9/10/2022'
    },
    {
        opp: 'Jets',
        status: 'LOSS',
        score: '10',
        oppScore: '27',
        type: 'Home',
        date: '16/10/2022'
    },
    {
        opp: 'Commanders',
        status: 'LOSS',
        score: '21',
        oppScore: '23',
        type: 'Road',
        date: '23/10/2022'
    },
    {
        opp: 'Bills',
        status: 'LOSS',
        score: '17',
        oppScore: '27',
        type: 'Home',
        date: '31/10/2022'
    },
    {
        opp: 'Lions',
        status: 'LOSS',
        score: '9',
        oppScore: '15',
        type: 'Road',
        date: '6/11/2022'
    },
]
NFCNorth.push(team);
allTeams.push(team)
NFCTeams.push(team);

team = {};
team['TEAM'] = 'Bears';
team['id'] = '7';
team['W']= '3';
team['L']= '6';
team['T']= '0';
team['WP'] = (parseInt(team['W'])/(parseInt(team['W']) + parseInt(team['L']) + parseInt(team['T']))).toFixed(3);
team['HOME']= '2-2-0';
team['ROAD']= '1-4-0';

team['GAMES'] = [
    {
        opp: '49ers',
        status: 'WIN',
        score: '19',
        oppScore: '10',
        type: 'Home',
        date: '11/9/2022'
    },
    {
        opp: 'Packers',
        status: 'LOSS',
        score: '10',
        oppScore: '27',
        type: 'Road',
        date: '19/9/2022'
    },
    {
        opp: 'Texans',
        status: 'WIN',
        score: '23',
        oppScore: '20',
        type: 'Home',
        date: '25/9/2022'
    },
    {
        opp: 'Giants',
        status: 'LOSS',
        score: '12',
        oppScore: '20',
        type: 'Road',
        date: '2/10/2022'
    },
    {
        opp: 'Vikings',
        status: 'LOSS',
        score: '22',
        oppScore: '29',
        type: 'Road',
        date: '9/10/2022'
    },
    {
        opp: 'Commanders',
        status: 'LOSS',
        score: '7',
        oppScore: '12',
        type: 'Home',
        date: '14/10/2022'
    },
    {
        opp: 'Patriots',
        status: 'WIN',
        score: '33',
        oppScore: '14',
        type: 'Road',
        date: '24/10/2022'
    },
    {
        opp: 'Cowboys',
        status: 'LOSS',
        score: '29',
        oppScore: '49',
        type: 'Road',
        date: '30/10/2022'
    },
    {
        opp: 'Dolphins',
        status: 'LOSS',
        score: '32',
        oppScore: '35',
        type: 'Home',
        date: '6/11/2022'
    },
]
NFCNorth.push(team);
allTeams.push(team)
NFCTeams.push(team);

team = {};
team['TEAM'] = 'Lions';
team['id'] = '8';
team['W']= '2';
team['L']= '6';
team['T']= '0';
team['WP'] = (parseInt(team['W'])/(parseInt(team['W']) + parseInt(team['L']) + parseInt(team['T']))).toFixed(3);
team['HOME']= '2-3-0';
team['ROAD']= '0-3-0';

team['GAMES'] = [
    {
        opp: 'Eagles',
        status: 'LOSS',
        score: '35',
        oppScore: '38',
        type: 'Home',
        date: '11/9/2022',
    },
    {
        opp: 'Commanders',
        status: 'WIN',
        score: '36',
        oppScore: '27',
        type: 'Home',
        date: '18/9/2022',
    },
    {
        opp: 'Vikings',
        status: 'WIN',
        score: '24',
        oppScore: '28',
        type: 'Road',
        date: '25/9/2022',
    },
    {
        opp: 'Seahawks',
        status: 'LOSS',
        score: '45',
        oppScore: '48',
        type: 'Home',
        date: '2/10/2022',
    },
    {
        opp: 'Patriots',
        status: 'LOSS',
        score: '0',
        oppScore: '29',
        type: 'Road',
        date: '9/10/2022',
    },
    {
        opp: 'Cowboys',
        status: 'LOSS',
        score: '6',
        oppScore: '24',
        type: 'Road',
        date: '23/10/2022',
    },
    {
        opp: 'Dolphins',
        status: 'LOSS',
        score: '27',
        oppScore: '31',
        type: 'Home',
        date: '30/10/2022',
    },
    {
        opp: 'Packers',
        status: 'WIN',
        score: '15',
        oppScore: '9',
        type: 'Home',
        date: '6/11/2022',
    },
]
NFCNorth.push(team);
allTeams.push(team)
NFCTeams.push(team);


team = {};
team['TEAM'] = 'Buccaneers';
team['id'] = '9';
team['W']= '4';
team['L']= '5';
team['T']= '0';
team['WP'] = (parseInt(team['W'])/(parseInt(team['W']) + parseInt(team['L']) + parseInt(team['T']))).toFixed(3);
team['HOME']= '2-3-0';
team['ROAD']= '2-2-0';

team['GAMES'] = [
    {
        opp: 'Cowboys',
        status: 'WIN',
        score: '19',
        oppScore: '3',
        type: 'Road',
        date: '12/9/2022'
    },
    {
        opp: 'Saints',
        status: 'WIN',
        score: '20',
        oppScore: '10',
        type: 'Road',
        date: '18/9/2022'
    },
    {
        opp: 'Packers',
        status: 'LOSS',
        score: '12',
        oppScore: '14',
        type: 'Home',
        date: '25/9/2022'
    },
    {
        opp: 'Chiefs',
        status: 'WIN',
        score: '31',
        oppScore: '41',
        type: 'Home',
        date: '3/10/2022'
    },
    {
        opp: 'Falcons',
        status: 'WIN',
        score: '21',
        oppScore: '15',
        type: 'Home',
        date: '9/10/2022'
    },
    {
        opp: 'Steelers',
        status: 'LOSS',
        score: '18',
        oppScore: '20',
        type: 'Road',
        date: '16/10/2022'
    },
    {
        opp: 'Panthers',
        status: 'LOSS',
        score: '3',
        oppScore: '21',
        type: 'Road',
        date: '23/10/2022'
    },
    {
        opp: 'Ravens',
        status: 'LOSS',
        score: '22',
        oppScore: '27',
        type: 'Road',
        date: '28/10/2022'
    },
    {
        opp: 'Rams',
        status: 'WIN',
        score: '16',
        oppScore: '13',
        type: 'Home',
        date: '6/11/2022'
    },
]

NFCSouth.push(team);
allTeams.push(team)
NFCTeams.push(team);

team = {};
team['TEAM'] = 'Falcons';
team['id'] = '10';
team['W']= '4';
team['L']= '5';
team['T']= '0';
team['WP'] = (parseInt(team['W'])/(parseInt(team['W']) + parseInt(team['L']) + parseInt(team['T']))).toFixed(3);
team['HOME']= '3-2-0';
team['ROAD']= '1-3-0';

team['GAMES'] = [
    {
        opp: 'Saints',
        status: 'LOSS',
        score: '26',
        oppScore: '27',
        type: 'Home',
        date: '11/9/2022'
    },
    {
        opp: 'Rams',
        status: 'LOSS',
        score: '27',
        oppScore: '31',
        type: 'Road',
        date: '18/9/2022'
    },
    {
        opp: 'Seahawks',
        status: 'WIN',
        score: '27',
        oppScore: '23',
        type: 'Road',
        date: '25/9/2022'
    },
    {
        opp: 'Browns',
        status: 'WIN',
        score: '23',
        oppScore: '20',
        type: 'Home',
        date: '2/10/2022'
    },
    {
        opp: 'Buccaneers',
        status: 'LOSS',
        score: '15',
        oppScore: '21',
        type: 'Road',
        date: '9/10/2022'
    },
    {
        opp: '49ers',
        status: 'WIN',
        score: '28',
        oppScore: '14',
        type: 'Home',
        date: '16/10/2022'
    },
    {
        opp: 'Bengals',
        status: 'LOSS',
        score: '17',
        oppScore: '35',
        type: 'Road',
        date: '23/10/2022'
    },
    {
        opp: 'Panthers',
        status: 'WIN',
        score: '37',
        oppScore: '34',
        type: 'Home',
        date: '30/10/2022'
    },
    {
        opp: 'Chargers',
        status: 'LOSS',
        score: '17',
        oppScore: '20',
        type: 'Home',
        date: '6/11/2022'
    },
]
NFCSouth.push(team);
allTeams.push(team)
NFCTeams.push(team);

team = {};
team['TEAM'] = 'Saints';
team['id'] = '11';
team['W']= '3';
team['L']= '6';
team['T']= '0';
team['WP'] = (parseInt(team['W'])/(parseInt(team['W']) + parseInt(team['L']) + parseInt(team['T']))).toFixed(3);
team['HOME']= '2-4-0';
team['ROAD']= '1-2-0';

team['GAMES'] = [
    {
        opp: 'Falcons',
        status: 'WIN',
        score: '27',
        oppScore: '26',
        type: 'Road',
        date: '11/9/2022',
    },
    {
        opp: 'Buccaneers',
        status: 'LOSS',
        score: '10',
        oppScore: '20',
        type: 'Home',
        date: '18/9/2022'
    },
    {
        opp: 'Panthers',
        status: 'LOSS',
        score: '14',
        oppScore: '22',
        type: 'Road',
        date: '25/9/2022'
    },
    {
        opp: 'Vikings',
        status: 'LOSS',
        score: '25',
        oppScore: '28',
        type: 'Home',
        date: '2/10/2022'
    },
    {
        opp: 'Seahawks',
        status: 'WIN',
        score: '39',
        oppScore: '32',
        type: 'Home',
        date: '9/10/2022'
    },
    {
        opp: 'Bengals',
        status: 'LOSS',
        score: '26',
        oppScore: '30',
        type: 'Home',
        date: '16/10/2022'
    },
    {
        opp: 'Cardinals',
        status: 'LOSS',
        score: '34',
        oppScore: '42',
        type: 'Road',
        date: '21/10/2022'
    },
    {
        opp: 'Raiders',
        status: 'WIN',
        score: '24',
        oppScore: '0',
        type: 'Home',
        date: '30/10/2022'
    },
    {
        opp: 'Ravens',
        status: 'LOSS',
        score: '13',
        oppScore: '27',
        type: 'Home',
        date: '8/11/2022'
    },
]
NFCSouth.push(team);
allTeams.push(team)
NFCTeams.push(team);

team = {};
team['TEAM'] = 'Panthers';
team['id'] = '12';
team['W']= '2';
team['L']= '7';
team['T']= '0';
team['WP'] = (parseInt(team['W'])/(parseInt(team['W']) + parseInt(team['L']) + parseInt(team['T']))).toFixed(3);
team['HOME']= '2-3-0';
team['ROAD']= '0-4-0';

team['GAMES'] = [
    {
        opp: 'Browns',
        status: 'LOSS',
        score: '24',
        oppScore: '26',
        type: 'Home',
        date: '11/9/2022',
    },
    {
        opp: 'Gaints',
        status: 'LOSS',
        score: '16',
        oppScore: '19',
        type: 'Road',
        date: '18/9/2022'
    },
    {
        opp: 'Saints',
        status: 'WIN',
        score: '22',
        oppScore: '14',
        type: 'Home',
        date: '25/9/2022'
    },
    {
        opp: 'Cardinals',
        status: 'LOSS',
        score: '16',
        oppScore: '26',
        type: 'Home',
        date: '10/2/2022'
    },
    {
        opp: '49ers',
        status: 'LOSS',
        score: '15',
        oppScore: '37',
        type: 'Home',
        date: '9/10/2022'
    },
    {
        opp: 'Rams',
        status: 'LOSS',
        score: '10',
        oppScore: '24',
        type: 'Road',
        date: '16/10/2022'
    },
    {
        opp: 'Buccaneers',
        status: 'WIN',
        score: '21',
        oppScore: '3',
        type: 'Home',
        date: '23/10/2022'
    },
    {
        opp: 'Falcons',
        status: 'LOSS',
        score: '34',
        oppScore: '37',
        type: 'Road',
        date: '30/10/2022'
    },
    {
        opp: 'Bengals',
        status: 'LOSS',
        score: '21',
        oppScore: '42',
        type: 'Road',
        date: '6/11/2022'
    },
]
NFCSouth.push(team);
allTeams.push(team)
NFCTeams.push(team);

team = {};
team['TEAM'] = 'Seahawks';
team['id'] = '13';
team['W']= '6';
team['L']= '3';
team['T']= '0';
team['WP'] = (parseInt(team['W'])/(parseInt(team['W']) + parseInt(team['L']) + parseInt(team['T']))).toFixed(3);
team['HOME']= '3-1-0';
team['ROAD']= '3-2-0';

team['GAMES'] = [
    {
        opp: 'Bronces',
        status: 'WIN',
        score: '17',
        oppScore: '16',
        type: 'Home',
        date: '13/9/2022',
    },
    {
        opp: '49ers',
        status: 'LOSS',
        score: '7',
        oppScore: '27',
        type: 'Road',
        date: '18/9/2022'
    },
    {
        opp: 'Falcons',
        status: 'LOSS',
        score: '23',
        oppScore: '27',
        type: 'Home',
        date: '25/9/2022'
    },
    {
        opp: 'Lions',
        status: 'WIN',
        score: '48',
        oppScore: '45',
        type: 'Road',
        date: '2/10/2022'
    },
    {
        opp: 'Saints',
        status: 'LOSS',
        score: '32',
        oppScore: '39',
        type: 'Road',
        date: '9/10/2022'
    },
    {
        opp: 'Cardinals',
        status: 'WIN',
        score: '19',
        oppScore: '9',
        type: 'Home',
        date: '16/10/2022'
    },
    {
        opp: 'Chargers',
        status: 'WIN',
        score: '37',
        oppScore: '23',
        type: 'Road',
        date: '23/10/2022'
    },
    {
        opp: 'Gaints',
        status: 'WIN',
        score: '27',
        oppScore: '13',
        type: 'Home',
        date: '30/10/2022'
    },
    {
        opp: 'Cardinals',
        status: 'WIN',
        score: '31',
        oppScore: '21',
        type: 'Road',
        date: '6/11/2022'
    },
]
NFCWest.push(team);
allTeams.push(team)
NFCTeams.push(team);

team = {};
team['TEAM'] = '49ers';
team['id'] = '14';
team['W']= '4';
team['L']= '4';
team['T']= '0';
team['WP'] = (parseInt(team['W'])/(parseInt(team['W']) + parseInt(team['L']) + parseInt(team['T']))).toFixed(3);
team['HOME']= '2-1-0';
team['ROAD']= '2-3-0';

team['GAMES'] = [
    {
        opp: 'Bears',
        status: 'LOSS',
        score: '10',
        oppScore: '19',
        type: 'Road',
        date: '11/9/2022'
    },
    {
        opp: 'Seahawks',
        status: 'WIN',
        score: '27',
        oppScore: '7',
        type: 'Home',
        date: '18/9/2022'
    },
    {
        opp: 'Broncos',
        status: 'LOSS',
        score: '10',
        oppScore: '11',
        type: 'Road',
        date: '26/9/2022'
    },
    {
        opp: 'Rams',
        status: 'WIN',
        score: '24',
        oppScore: '9',
        type: 'Home',
        date: '4/10/2022'
    },
    {
        opp: 'Panthers',
        status: 'WIN',
        score: '37',
        oppScore: '15',
        type: 'Road',
        date: '9/10/2022'
    },
    {
        opp: 'Falcons',
        status: 'LOSS',
        score: '14',
        oppScore: '28',
        type: 'Road',
        date: '16/10/2022'
    },
    {
        opp: 'Chiefs',
        status: 'LOSS',
        score: '23',
        oppScore: '44',
        type: 'Home',
        date: '23/10/2022'
    },
    {
        opp: 'Rams',
        status: 'WIN',
        score: '31',
        oppScore: '14',
        type: 'Road',
        date: '30/10/2022'
    },
]
NFCWest.push(team);
allTeams.push(team)
NFCTeams.push(team);

team = {};
team['TEAM'] = 'Rams';
team['id'] = '15';
team['W']= '3';
team['L']= '5';
team['T']= '0';
team['WP'] = (parseInt(team['W'])/(parseInt(team['W']) + parseInt(team['L']) + parseInt(team['T']))).toFixed(3);
team['HOME']= '2-3-0';
team['ROAD']= '1-2-0';

team['GAMES'] = [
    {
        opp: 'Bills',
        status: 'LOSS',
        score: '10',
        oppScore: '31',
        type: 'Home',
        date: '9/9/2022'
    },
    {
        opp: 'Falcons',
        status: 'WIN',
        score: '31',
        oppScore: '27',
        type: 'Home',
        date: '18/9/2022'
    },
    {
        opp: 'Cardinals',
        status: 'WIN',
        score: '20',
        oppScore: '12',
        type: 'Road',
        date: '25/9/2022'
    },
    {
        opp: '49ers',
        status: 'LOSS',
        score: '9',
        oppScore: '24',
        type: 'Road',
        date: '4/10/2022'
    },
    {
        opp: 'Cowboys',
        status: 'LOSS',
        score: '10',
        oppScore: '22',
        type: 'Home',
        date: '9/10/2022'
    },
    {
        opp: 'Panthers',
        status: 'WIN',
        score: '24',
        oppScore: '10',
        type: 'Home',
        date: '16/10/2022'
    },
    {
        opp: '49ers',
        status: 'LOSS',
        score: '14',
        oppScore: '31',
        type: 'Home',
        date: '30/10/2022'
    },
    {
        opp: 'Buccaneers',
        status: 'LOSS',
        score: '13',
        oppScore: '16',
        type: 'Road',
        date: '6/11/2022'
    },
]
NFCWest.push(team);
allTeams.push(team)
NFCTeams.push(team);

team = {};
team['TEAM'] = 'Cardinals';
team['id'] = '16';
team['W']= '3';
team['L']= '6';
team['T']= '0';
team['WP'] = (parseInt(team['W'])/(parseInt(team['W']) + parseInt(team['L']) + parseInt(team['T']))).toFixed(3);
team['HOME']= '1-4-0';
team['ROAD']= '2-2-0';

team['GAMES'] = [
    {
        opp: 'Chiefs',
        status: 'LOSS',
        score: '21',
        oppScore: '44',
        type: 'Home',
        date: '11/9/2022',
    },
    {
        opp: 'Raiders',
        status: 'WIN',
        score: '29',
        oppScore: '23',
        type: 'Road',
        date: '18/9/2022'
    },
    {
        opp: 'Rams',
        status: 'LOSS',
        score: '12',
        oppScore: '20',
        type: 'Home',
        date: '25/9/2022'
    },
    {
        opp: 'Panthers',
        status: 'WIN',
        score: '26',
        oppScore: '16',
        type: 'Road',
        date: '2/10/2022'
    },
    {
        opp: 'Eagles',
        status: 'LOSS',
        score: '20',
        oppScore: '17',
        type: 'Home',
        date: '9/10/2022'
    },
    {
        opp: 'Seahawks',
        status: 'LOSS',
        score: '9',
        oppScore: '19',
        type: 'Road',
        date: '16/10/2022'
    },
    {
        opp: 'Saints',
        status: 'WIN',
        score: '42',
        oppScore: '34',
        type: 'Home',
        date: '21/10/2022'
    },
    {
        opp: 'Vikings',
        status: 'LOSS',
        score: '26',
        oppScore: '34',
        type: 'Road',
        date: '30/10/2022'
    },
    {
        opp: 'Seahawks',
        status: 'LOSS',
        score: '21',
        oppScore: '31',
        type: 'Home',
        date: '6/11/2022'
    },
]
NFCWest.push(team);
allTeams.push(team)
NFCTeams.push(team);

allGroups.push(NFCEast);
allGroups.push(NFCNorth);
allGroups.push(NFCSouth);
allGroups.push(NFCWest);

team = {};
team['TEAM'] = 'Bills';
team['id'] = '17';
team['W']= '6';
team['L']= '2';
team['T']= '0';
team['WP'] = (parseInt(team['W'])/(parseInt(team['W']) + parseInt(team['L']) + parseInt(team['T']))).toFixed(3);
team['HOME']= '4-0-0';
team['ROAD']= '2-2-0';

team['GAMES'] = [
    {
        opp: 'Rams',
        status: 'WIN',
        score: '31',
        oppScore: '10',
        type: 'Road',
        date: '9/9/2022',
    },
    {
        opp: 'Titans',
        status: 'WIN',
        score: '41',
        oppScore: '7',
        type: 'Home',
        date: '20/9/2022'
    },
    {
        opp: 'Dolphins',
        status: 'LOSS',
        score: '19',
        oppScore: '21',
        type: 'Road',
        date: '25/9/2022'
    },
    {
        opp: 'Ravens',
        status: 'WIN',
        score: '23',
        oppScore: '20',
        type: 'Road',
        date: '2/10/2022'
    },
    {
        opp: 'Steelers',
        status: 'WIN',
        score: '38',
        oppScore: '3',
        type: 'Home',
        date: '9/10/2022'
    },
    {
        opp: 'Chiefs',
        status: 'WIN',
        score: '24',
        oppScore: '20',
        type: 'Road',
        date: '16/10/2022'
    },
    {
        opp: 'Packers',
        status: 'WIN',
        score: '27',
        oppScore: '17',
        type: 'Home',
        date: '31/10/2022'
    },
    {
        opp: 'Jets',
        status: 'LOSS',
        score: '17',
        oppScore: '20',
        type: 'Road',
        date: '6/11/2022'
    }
]

AFCEast.push(team);
allTeams.push(team)
AFCTeams.push(team);

team = {};
team['TEAM'] = 'Dolphins';
team['id'] = '18';
team['W']= '6';
team['L']= '3';
team['T']= '0';
team['WP'] = (parseInt(team['W'])/(parseInt(team['W']) + parseInt(team['L']) + parseInt(team['T']))).toFixed(3);
team['HOME']= '3-1-0';
team['ROAD']= '3-2-0';

team['GAMES'] = [
    {
        opp: 'Patriots',
        status: 'WIN',
        score: '20',
        oppScore: '7',
        type: 'Home',
        date: '11/9/2022',
    },
    {
        opp: 'Ravens',
        status: 'WIN',
        score: '42',
        oppScore: '38',
        type: 'Road',
        date: '18/9/2022'
    },
    {
        opp: 'Bills',
        status: 'WIN',
        score: '21',
        oppScore: '19',
        type: 'Home',
        date: '25/9/2022'
    },
    {
        opp: 'Bengals',
        status: 'LOSS',
        score: '15',
        oppScore: '27',
        type: 'Road',
        date: '30/9/2022'
    },
    {
        opp: 'Jets',
        status: 'LOSS',
        score: '17',
        oppScore: '40',
        type: 'Road',
        date: '9/10/2022'
    },
    {
        opp: 'Vikings',
        status: 'LOSS',
        score: '16',
        oppScore: '24',
        type: 'Home',
        date: '16/10/2022'
    },
    {
        opp: 'Steelers',
        status: 'WIN',
        score: '16',
        oppScore: '10',
        type: 'Home',
        date: '24/10/2022'
    },
    {
        opp: 'Lions',
        status: 'WIN',
        score: '31',
        oppScore: '27',
        type: 'Road',
        date: '30/10/2022'
    },
    {
        opp: 'Bears',
        status: 'WIN',
        score: '35',
        oppScore: '32',
        type: 'Road',
        date: '6/11/2022'
    }
]

AFCEast.push(team);
allTeams.push(team)
AFCTeams.push(team);

team = {};
team['TEAM'] = 'Patriots';
team['id'] = '19';
team['W']= '5';
team['L']= '4';
team['T']= '0';
team['WP'] = (parseInt(team['W'])/(parseInt(team['W']) + parseInt(team['L']) + parseInt(team['T']))).toFixed(3);
team['HOME']= '2-2-0';
team['ROAD']= '3-2-0';

team['GAMES'] = [
    {
        opp: 'Dolphins',
        status: 'LOSS',
        score: '7',
        oppScore: '20',
        type: 'Road',
        date: '11/9/2022',
    },
    {
        opp: 'Steelers',
        status: 'WIN',
        score: '17',
        oppScore: '14',
        type: 'Road',
        date: '18/9/2022'
    },
    {
        opp: 'Ravens',
        status: 'LOSS',
        score: '26',
        oppScore: '37',
        type: 'Home',
        date: '25/9/2022'
    },
    {
        opp: 'Ravens',
        status: 'LOSS',
        score: '24',
        oppScore: '27',
        type: 'Road',
        date: '2/10/2022'
    },
    {
        opp: 'Lions',
        status: 'WIN',
        score: '29',
        oppScore: '0',
        type: 'Home',
        date: '9/10/2022'
    },
    {
        opp: 'Browns',
        status: 'WIN',
        score: '38',
        oppScore: '15',
        type: 'Road',
        date: '16/10/2022'
    },
    {
        opp: 'Bears',
        status: 'LOSS',
        score: '14',
        oppScore: '33',
        type: 'Home',
        date: '24/10/2022'
    },
    {
        opp: 'Jets',
        status: 'WIN',
        score: '22',
        oppScore: '17',
        type: 'Road',
        date: '30/10/2022'
    },
    {
        opp: 'Colts',
        status: 'WIN',
        score: '26',
        oppScore: '3',
        type: 'Home',
        date: '6/11/2022',
    }
]

AFCEast.push(team);
allTeams.push(team)
AFCTeams.push(team);

team = {};
team['TEAM'] = 'Jets';
team['id'] = '20';
team['W']= '6';
team['L']= '3';
team['T']= '0';
team['WP'] = (parseInt(team['W'])/(parseInt(team['W']) + parseInt(team['L']) + parseInt(team['T']))).toFixed(3);
team['HOME']= '3-3-0';
team['ROAD']= '3-0-0';

team['GAMES'] = [
    {
        opp: 'Ravens',
        status: 'LOSS',
        score: '9',
        oppScore: '24',
        type: 'Home',
        date: '11/9/2022',
    },
    {
        opp: 'Browns',
        status: 'WIN',
        score: '31',
        oppScore: '30',
        type: 'Road',
        date: '18/9/2022'
    },
    {
        opp: 'Bengals',
        status: 'LOSS',
        score: '12',
        oppScore: '27',
        type: 'Home',
        date: '25/9/2022'
    },
    {
        opp: 'Steelers',
        status: 'WIN',
        score: '24',
        oppScore: '20',
        type: 'Road',
        date: '2/10/2022'
    },
    {
        opp: 'Dolphins',
        status: 'WIN',
        score: '40',
        oppScore: '17',
        type: 'Home',
        date: '9/10/2022'
    },
    {
        opp: 'Packers',
        status: 'WIN',
        score: '27',
        oppScore: '10',
        type: 'Road',
        date: '16/10/2022'
    },
    {
        opp: 'Broncos',
        status: 'WIN',
        score: '16',
        oppScore: '9',
        type: 'Road',
        date: '23/10/2022'
    },
    {
        opp: 'Patriots',
        status: 'LOSS',
        score: '17',
        oppScore: '20',
        type: 'Home',
        date: '30/10/2022'
    },
    {
        opp: 'Patriots',
        status: 'LOSS',
        score: '17',
        oppScore: '20',
        type: 'Home',
        date: '6/11/2022'
    }
]

AFCEast.push(team);
allTeams.push(team)
AFCTeams.push(team);

team = {};
team['TEAM'] = 'Ravens';
team['id'] = '21';
team['W']= '5';
team['L']= '3';
team['T']= '0';
team['WP'] = (parseInt(team['W'])/(parseInt(team['W']) + parseInt(team['L']) + parseInt(team['T']))).toFixed(3);
team['HOME']= '2-2-0';
team['ROAD']= '3-1-0';

team['GAMES'] = [
    {
        opp: 'Jets',
        status: 'WIN',
        score: '24',
        oppScore: '9',
        type: 'Road',
        date: '11/9/2022',
    },
    {
        opp: 'Dolphins',
        status: 'LOSS',
        score: '38',
        oppScore: '42',
        type: 'Home',
        date: '18/9/2022'
    },
    {
        opp: 'Patriots',
        status: 'WIN',
        score: '37',
        oppScore: '26',
        type: 'Road',
        date: '25/9/2022'
    },
    {
        opp: 'Bills',
        status: 'LOSS',
        score: '20',
        oppScore: '23',
        type: 'Home',
        date: '2/10/2022'
    },
    {
        opp: 'Bengals',
        status: 'WIN',
        score: '19',
        oppScore: '17',
        type: 'Home',
        date: '9/10/2022'
    },
    {
        opp: 'Giants',
        status: 'LOSS',
        score: '20',
        oppScore: '24',
        type: 'Road',
        date: '16/10/2022'
    },
    {
        opp: 'Browns',
        status: 'WIN',
        score: '23',
        oppScore: '20',
        type: 'Home',
        date: '23/10/2022'
    },
    {
        opp: 'Buccaneers',
        status: 'WIN',
        score: '27',
        oppScore: '22',
        type: 'Road',
        date: '30/10/2022'
    }
]

AFCNorth.push(team);
allTeams.push(team)
AFCTeams.push(team);


team = {};
team['TEAM'] = 'Bengals';
team['id'] = '22';
team['W']= '5';
team['L']= '4';
team['T']= '0';
team['WP'] = (parseInt(team['W'])/(parseInt(team['W']) + parseInt(team['L']) + parseInt(team['T']))).toFixed(3);
team['HOME']= '3-1-0';
team['ROAD']= '2-3-0';

team['GAMES'] = [
    {
        opp: 'Steelers',
        status: 'LOSS',
        score: '20',
        oppScore: '23',
        type: 'Home',
        date: '11/9/2022',
    },
    {
        opp: 'Cowboys',
        status: 'LOSS',
        score: '17',
        oppScore: '20',
        type: 'Road',
        date: '18/9/2022'
    },
    {
        opp: 'Jets',
        status: 'WIN',
        score: '27',
        oppScore: '12',
        type: 'Road',
        date: '25/9/2022'
    },
    {
        opp: 'Dolphins',
        status: 'WIN',
        score: '27',
        oppScore: '15',
        type: 'Home',
        date: '30/9/2022'
    },
    {
        opp: 'Ravens',
        status: 'LOSS',
        score: '17',
        oppScore: '19',
        type: 'Road',
        date: '10/10/2022'
    },
    {
        opp: 'Saints',
        status: 'WIN',
        score: '30',
        oppScore: '26',
        type: 'Road',
        date: '16/10/2022'
    },
    {
        opp: 'Falcons',
        status: 'WIN',
        score: '35',
        oppScore: '17',
        type: 'Home',
        date: '23/10/2022'
    },
    {
        opp: 'Browns',
        status: 'LOSS',
        score: '32',
        oppScore: '13',
        type: 'Road',
        date: '11/1/2022'
    },
    {
        opp: 'Panthers',
        status: 'WIN',
        score: '42',
        oppScore: '21',
        type: 'Home',
        date: '6/11/2022'
    }
]

AFCNorth.push(team);
allTeams.push(team)
AFCTeams.push(team);

team = {};
team['TEAM'] = 'Browns';
team['id'] = '23';
team['W']= '3';
team['L']= '5';
team['T']= '0';
team['WP'] = (parseInt(team['W'])/(parseInt(team['W']) + parseInt(team['L']) + parseInt(team['T']))).toFixed(3);
team['HOME']= '2-3-0';
team['ROAD']= '1-2-0';

team['GAMES'] = [
    {
        opp: 'Panthers',
        status: 'WIN',
        score: '26',
        oppScore: '24',
        type: 'Road',
        date: '11/9/2022',
    },
    {
        opp: 'Jets',
        status: 'LOSS',
        score: '30',
        oppScore: '31',
        type: 'Home',
        date: '18/9/2022'
    },
    {
        opp: 'Steelers',
        status: 'WIN',
        score: '28',
        oppScore: '17',
        type: 'Home',
        date: '23/9/2022'
    },
    {
        opp: 'Falcons',
        status: 'LOSS',
        score: '20',
        oppScore: '23',
        type: 'Road',
        date: '2/10/2022'
    },
    {
        opp: 'Chargers',
        status: 'LOSS',
        score: '28',
        oppScore: '30',
        type: 'Home',
        date: '9/10/2022'
    },
    {
        opp: 'Patriots',
        status: 'LOSS',
        score: '15',
        oppScore: '38',
        type: 'Home',
        date: '16/10/2022'
    },
    {
        opp: 'Ravens',
        status: 'LOSS',
        score: '20',
        oppScore: '23',
        type: 'Road',
        date: '23/10/2022'
    },
    {
        opp: 'Bengals',
        status: 'WIN',
        score: '32',
        oppScore: '13',
        type: 'Home',
        date: '1/11/2022'
    }
]

AFCNorth.push(team);
allTeams.push(team)
AFCTeams.push(team);

team = {};
team['TEAM'] = 'Steelers';
team['id'] = '24';
team['W']= '2';
team['L']= '6';
team['T']= '0';
team['WP'] = (parseInt(team['W'])/(parseInt(team['W']) + parseInt(team['L']) + parseInt(team['T']))).toFixed(3);
team['HOME']= '1-2-0';
team['ROAD']= '1-4-0';

team['GAMES'] = [
    {
        opp: 'Bengals',
        status: 'WIN',
        score: '23',
        oppScore: '20',
        type: 'Road',
        date: '11/9/2022',
    },
    {
        opp: 'Patriots',
        status: 'LOSS',
        score: '14',
        oppScore: '17',
        type: 'Home',
        date: '18/9/2022'
    },
    {
        opp: 'Browns',
        status: 'LOSS',
        score: '17',
        oppScore: '29',
        type: 'Road',
        date: '23/9/2022'
    },
    {
        opp: 'Jets',
        status: 'LOSS',
        score: '20',
        oppScore: '24',
        type: 'Home',
        date: '2/10/2022'
    },
    {
        opp: 'Bills',
        status: 'LOSS',
        score: '3',
        oppScore: '38',
        type: 'Road',
        date: '9/10/2022'
    },
    {
        opp: 'Bucanneers',
        status: 'WIN',
        score: '20',
        oppScore: '18',
        type: 'Home',
        date: '16/10/2022'
    },
    {
        opp: 'Dolphins',
        status: 'LOSS',
        score: '16',
        oppScore: '10',
        type: 'Road',
        date: '24/10/2022'
    },
    {
        opp: 'Eagles',
        status: 'LOSS',
        score: '13',
        oppScore: '35',
        type: 'Road',
        date: '30/10/2022'
    }
]

AFCNorth.push(team);
allTeams.push(team)
AFCTeams.push(team);

team = {};
team['TEAM'] = 'Titans';
team['id'] = '25';
team['W']= '5';
team['L']= '3';
team['T']= '0';
team['WP'] = (parseInt(team['W'])/(parseInt(team['W']) + parseInt(team['L']) + parseInt(team['T']))).toFixed(3);
team['HOME']= '2-1-0';
team['ROAD']= '3-2-0';

team['GAMES'] = [
    {
        opp: 'Giants',
        status: 'LOSS',
        score: '20',
        oppScore: '21',
        type: 'Home',
        date: '11/9/2022',
    },
    {
        opp: 'Bills',
        status: 'LOSS',
        score: '7',
        oppScore: '41',
        type: 'Road',
        date: '20/9/2022'
    },
    {
        opp: 'Raiders',
        status: 'WIN',
        score: '24',
        oppScore: '22',
        type: 'Home',
        date: '25/9/2022'
    },
    {
        opp: 'Colts',
        status: 'WIN',
        score: '24',
        oppScore: '17',
        type: 'Road',
        date: '2/10/2022'
    },
    {
        opp: 'Commanders',
        status: 'WIN',
        score: '21',
        oppScore: '17',
        type: 'Road',
        date: '9/10/2022'
    },
    {
        opp: 'Colts',
        status: 'WIN',
        score: '19',
        oppScore: '10',
        type: 'Home',
        date: '23/10/2022'
    },
    {
        opp: 'Texans',
        status: 'WIN',
        score: '17',
        oppScore: '10',
        type: 'Road',
        date: '30/10/2022'
    },
    {
        opp: 'Chiefs',
        status: 'LOSS',
        score: '17',
        oppScore: '20',
        type: 'Road',
        date: '7/11/2022'
    }
]

AFCSouth.push(team);
allTeams.push(team)
AFCTeams.push(team);

team = {};
team['TEAM'] = 'Colts';
team['id'] = '26';
team['W']= '3';
team['L']= '5';
team['T']= '1';
team['WP'] = (parseInt(team['W'])/(parseInt(team['W']) + parseInt(team['L']) + parseInt(team['T']))).toFixed(3);
team['HOME']= '2-2-0';
team['ROAD']= '1-3-1';

team['GAMES'] = [
    {
        opp: 'Texans',
        status: 'TIE',
        score: '20',
        oppScore: '20',
        type: 'Road',
        date: '11/9/2022',
    },
    {
        opp: 'Jaguars',
        status: 'LOSS',
        score: '0',
        oppScore: '24',
        type: 'Road',
        date: '18/9/2022'
    },
    {
        opp: 'Chiefs',
        status: 'WIN',
        score: '20',
        oppScore: '17',
        type: 'HOme',
        date: '25/9/2022'
    },
    {
        opp: 'Titans',
        status: 'LOSS',
        score: '17',
        oppScore: '24',
        type: 'Home',
        date: '2/10/2022'
    },
    {
        opp: 'Broncos',
        status: 'WIN',
        score: '12',
        oppScore: '9',
        type: 'Road',
        date: '7/10/2022'
    },
    {
        opp: 'Jaguars',
        status: 'WIN',
        score: '34',
        oppScore: '27',
        type: 'Home',
        date: '16/10/2022'
    },
    {
        opp: 'Titans',
        status: 'LOSS',
        score: '10',
        oppScore: '19',
        type: 'Road',
        date: '23/10/2022'
    },
    {
        opp: 'Commanders',
        status: 'LOSS',
        score: '16',
        oppScore: '17',
        type: 'Home',
        date: '30/10/2022'
    },
    {
        opp: 'Patriots',
        status: 'LOSS',
        score: '3',
        oppScore: '26',
        type: 'Road',
        date: '6/11/2022'
    }
]

AFCSouth.push(team);
allTeams.push(team)
AFCTeams.push(team);

team = {};
team['TEAM'] = 'Jaguars';
team['id'] = '27';
team['W']= '3';
team['L']= '6';
team['T']= '0';
team['WP'] = (parseInt(team['W'])/(parseInt(team['W']) + parseInt(team['L']) + parseInt(team['T']))).toFixed(3);
team['HOME']= '2-3-0';
team['ROAD']= '1-3-0';

team['GAMES'] = [
    {
        opp: 'Commanders',
        status: 'LOSS',
        score: '22',
        oppScore: '28',
        type: 'Road',
        date: '11/9/2022',
    },
    {
        opp: 'Colts',
        status: 'WIN',
        score: '24',
        oppScore: '0',
        type: 'Home',
        date: '18/9/2022'
    },
    {
        opp: 'Chargers',
        status: 'WIN',
        score: '38',
        oppScore: '10',
        type: 'Road',
        date: '25/9/2022'
    },
    {
        opp: 'Eagles',
        status: 'LOSS',
        score: '21',
        oppScore: '29',
        type: 'Road',
        date: '2/10/2022'
    },
    {
        opp: 'Texans',
        status: 'LOSS',
        score: '6',
        oppScore: '13',
        type: 'Home',
        date: '9/10/2022'
    },
    {
        opp: 'Colts',
        status: 'LOSS',
        score: '27',
        oppScore: '34',
        type: 'Road',
        date: '16/10/2022'
    },
    {
        opp: 'Giants',
        status: 'LOSS',
        score: '17',
        oppScore: '23',
        type: 'Home',
        date: '23/10/2022'
    },
    {
        opp: 'Broncos',
        status: 'LOSS',
        score: '17',
        oppScore: '21',
        type: 'Home',
        date: '30/10/2022'
    },
    {
        opp: 'Raiders',
        status: 'WIN',
        score: '27',
        oppScore: '20',
        type: 'Home',
        date: '6/11/2022'
    }
]

AFCSouth.push(team);
allTeams.push(team)
AFCTeams.push(team);

team = {};
team['TEAM'] = 'Texans';
team['id'] = '28';
team['W']= '1';
team['L']= '6';
team['T']= '1';
team['WP'] = (parseInt(team['W'])/(parseInt(team['W']) + parseInt(team['L']) + parseInt(team['T']))).toFixed(3);
team['HOME']= '0-3-1';
team['ROAD']= '1-3-0';

team['GAMES'] = [
    {
        opp: 'Colts',
        status: 'TIE',
        score: '20',
        oppScore: '20',
        type: 'Home',
        date: '11/9/2022',
    },
    {
        opp: 'Broncos',
        status: 'LOSS',
        score: '9',
        oppScore: '16',
        type: 'Road',
        date: '18/9/2022'
    },
    {
        opp: 'Bears',
        status: 'LOSS',
        score: '20',
        oppScore: '23',
        type: 'Road',
        date: '25/9/2022'
    },
    {
        opp: 'Chargers',
        status: 'LOSS',
        score: '24',
        oppScore: '34',
        type: 'Home',
        date: '2/10/2022'
    },
    {
        opp: 'Jaguars',
        status: 'WIN',
        score: '13',
        oppScore: '6',
        type: 'Road',
        date: '9/10/2022'
    },
    {
        opp: 'Raiders',
        status: 'LOSS',
        score: '20',
        oppScore: '38',
        type: 'Road',
        date: '23/10/2022'
    },
    {
        opp: 'Titans',
        status: 'LOSS',
        score: '10',
        oppScore: '17',
        type: 'Home',
        date: '30/10/2022'
    },
    {
        opp: 'Eagles',
        status: 'LOSS',
        score: '17',
        oppScore: '29',
        type: 'Home',
        date: '4/11/2022'
    },
]

AFCSouth.push(team);
allTeams.push(team)
AFCTeams.push(team);

team = {};
team['TEAM'] = 'Chiefs';
team['id'] = '29';
team['W']= '6';
team['L']= '2';
team['T']= '0';
team['WP'] = (parseInt(team['W'])/(parseInt(team['W']) + parseInt(team['L']) + parseInt(team['T']))).toFixed(3);
team['HOME']= '3-1-0';
team['ROAD']= '3-1-0';

team['GAMES'] = [
    {
        opp: 'Cardinals',
        status: 'WIN',
        score: '44',
        oppScore: '21',
        type: 'Road',
        date: '11/9/2022',
    },
    {
        opp: 'Chargers',
        status: 'WIN',
        score: '27',
        oppScore: '24',
        type: 'Home',
        date: '16/9/2022'
    },
    {
        opp: 'Colts',
        status: 'LOSS',
        score: '17',
        oppScore: '20',
        type: 'Road',
        date: '25/9/2022'
    },
    {
        opp: 'Buccaneers',
        status: 'WIN',
        score: '41',
        oppScore: '31',
        type: 'Road',
        date: '3/10/2022'
    },
    {
        opp: 'Raiders',
        status: 'WIN',
        score: '41',
        oppScore: '31',
        type: 'Road',
        date: '11/10/2022'
    },
    {
        opp: 'Bills',
        status: 'LOSS',
        score: '20',
        oppScore: '24',
        type: 'Home',
        date: '16/10/2022'
    },
    {
        opp: '49ers',
        status: 'WIN',
        score: '44',
        oppScore: '23',
        type: 'Road',
        date: '23/10/2022'
    },
    {
        opp: 'Titans',
        status: 'WIN',
        score: '20',
        oppScore: '17',
        type: 'Home',
        date: '7/11/2022'
    }
]

AFCWest.push(team);
allTeams.push(team)
AFCTeams.push(team);

team = {};
team['TEAM'] = 'Chargers';
team['id'] = '30';
team['W']= '5';
team['L']= '3';
team['T']= '0';
team['WP'] = (parseInt(team['W'])/(parseInt(team['W']) + parseInt(team['L']) + parseInt(team['T']))).toFixed(3);
team['HOME']= '2-2-0';
team['ROAD']= '3-1-0';

team['GAMES'] = [
    {
        opp: 'Raiders',
        status: 'WIN',
        score: '24',
        oppScore: '19',
        type: 'Home',
        date: '11/9/2022',
    },
    {
        opp: 'Chiefs',
        status: 'LOSS',
        score: '24',
        oppScore: '27',
        type: 'Road',
        date: '16/9/2022'
    },
    {
        opp: 'Jaguars',
        status: 'LOSS',
        score: '10',
        oppScore: '38',
        type: 'Home',
        date: '25/9/2022'
    },
    {
        opp: 'Texans',
        status: 'WIN',
        score: '34',
        oppScore: '24',
        type: 'Road',
        date: '2/10/2022'
    },
    {
        opp: 'Browns',
        status: 'WIN',
        score: '30',
        oppScore: '28',
        type: 'Road',
        date: '11/10/2022'
    },
    {
        opp: 'Broncos',
        status: 'WIN',
        score: '19',
        oppScore: '16',
        type: 'Home',
        date: '18/10/2022'
    },
    {
        opp: 'Seahawks',
        status: 'LOSS',
        score: '23',
        oppScore: '37',
        type: 'Home',
        date: '23/10/2022'
    },
    {
        opp: 'Falcons',
        status: 'WIN',
        score: '20',
        oppScore: '17',
        type: 'Road',
        date: '6/11/2022'
    },
]

AFCWest.push(team);
allTeams.push(team)
AFCTeams.push(team);


team = {};
team['TEAM'] = 'Broncos';
team['id'] = '31';
team['W']= '3';
team['L']= '5';
team['T']= '0';
team['WP'] = (parseInt(team['W'])/(parseInt(team['W']) + parseInt(team['L']) + parseInt(team['T']))).toFixed(3);
team['HOME']= '3-2-0';
team['ROAD']= '0-3-0';

team['GAMES'] = [
    {
        opp: 'Seahawks',
        status: 'LOSS',
        score: '16',
        oppScore: '17',
        type: 'Road',
        date: '13/9/2022',
    },
    {
        opp: 'Texans',
        status: 'WIN',
        score: '16',
        oppScore: '9',
        type: 'Home',
        date: '18/9/2022'
    },
    {
        opp: '49ers',
        status: 'WIN',
        score: '11',
        oppScore: '10',
        type: 'Home',
        date: '26/9/2022'
    },
    {
        opp: 'Raiders',
        status: 'LOSS',
        score: '23',
        oppScore: '32',
        type: 'Road',
        date: '2/10/2022'
    },
    {
        opp: 'Colts',
        status: 'LOSS',
        score: '9',
        oppScore: '12',
        type: 'Home',
        date: '7/10/2022'
    },
    {
        opp: 'Chargers',
        status: 'LOSS',
        score: '16',
        oppScore: '19',
        type: 'Road',
        date: '18/10/2022'
    },
    {
        opp: 'Jets',
        status: 'LOSS',
        score: '9',
        oppScore: '16',
        type: 'Home',
        date: '23/10/2022'
    },
    {
        opp: 'Jaguars',
        status: 'WIN',
        score: '21',
        oppScore: '17',
        type: 'Home',
        date: '30/10/2022'
    },
]

AFCWest.push(team);
allTeams.push(team)
AFCTeams.push(team);

team = {};
team['TEAM'] = 'Raiders';
team['id'] = '32';
team['W']= '2';
team['L']= '6';
team['T']= '0';
team['WP'] = (parseInt(team['W'])/(parseInt(team['W']) + parseInt(team['L']) + parseInt(team['T']))).toFixed(3);
team['HOME']= '2-1-0';
team['ROAD']= '0-5-0';

team['GAMES'] = [
    {
        opp: 'Chargers',
        status: 'LOSS',
        score: '19',
        oppScore: '24',
        type: 'Road',
        date: '11/9/2022',
    },
    {
        opp: 'Cardinals',
        status: 'LOSS',
        score: '23',
        oppScore: '29',
        type: 'Home',
        date: '18/9/2022'
    },
    {
        opp: 'Titans',
        status: 'LOSS',
        score: '22',
        oppScore: '24',
        type: 'Road',
        date: '25/9/2022'
    },
    {
        opp: 'Broncos',
        status: 'WIN',
        score: '32',
        oppScore: '23',
        type: 'Home',
        date: '2/10/2022'
    },
    {
        opp: 'Chiefs',
        status: 'LOSS',
        score: '29',
        oppScore: '30',
        type: 'Road',
        date: '11/10/2022'
    },
    {
        opp: 'Texans',
        status: 'WIN',
        score: '38',
        oppScore: '20',
        type: 'Home',
        date: '23/10/2022'
    },
    {
        opp: 'Saints',
        status: 'LOSS',
        score: '0',
        oppScore: '24',
        type: 'Road',
        date: '30/10/2022'
    },
    {
        opp: 'Jaguars',
        status: 'Loss',
        score: '20',
        oppScore: '27',
        type: 'Road',
        date: '6/11/2022'
    },
]

AFCWest.push(team);
allTeams.push(team)
AFCTeams.push(team);

allGroups.push(AFCEast);
allGroups.push(AFCNorth);
allGroups.push(AFCSouth);
allGroups.push(AFCWest);

//comment out once the initial local storage push occurs so that the data does not get written over ever refresh

// function initData(){
// localStorage.setItem('NFCEast', JSON.stringify(NFCEast));
// localStorage.setItem('NFCNorth', JSON.stringify(NFCNorth));
// localStorage.setItem('NFCSouth', JSON.stringify(NFCSouth));
// localStorage.setItem('NFCWest', JSON.stringify(NFCWest));
// localStorage.setItem('AFCEast', JSON.stringify(AFCEast));
// localStorage.setItem('AFCNorth', JSON.stringify(AFCNorth));
// localStorage.setItem('AFCSouth', JSON.stringify(AFCSouth));
// localStorage.setItem('AFCWest', JSON.stringify(AFCWest));
// localStorage.setItem('NFCTeams', JSON.stringify(NFCTeams));
// localStorage.setItem('AFCTeams', JSON.stringify(AFCTeams));
// localStorage.setItem('allGroups', JSON.stringify(allGroups));
// localStorage.setItem('allTeams', JSON.stringify(allTeams));
// }

// initData();
