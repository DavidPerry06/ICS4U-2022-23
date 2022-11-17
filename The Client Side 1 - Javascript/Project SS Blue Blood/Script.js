let data;

let GroupEast = [];
let GroupNorth = [];
let GroupSouth = [];
let GroupWest = [];
let allGroups =[];
let allTeams =[];

let team = {};
team['TEAM'] = 'Philadelphia';
team['id'] = '1';
team['W']= '8';
team['L']= '0';
team['T']= '0';
team['WP'] = (parseInt(team['W'])/(parseInt(team['W']) + parseInt(team['L']) + parseInt(team['T']))).toFixed(3);
// team['PM'] = '225';
// team['PA'] = '135';
team['HOME']= '4-0-0';
team['ROAD']= '4-0-0';
team['STRK']= 'W8';
// team['GAMES']{
    
// }
GroupEast.push(team);
allTeams.push(team)

team = {};
team['TEAM'] = 'Dallas';
team['id'] = '2';
team['W']= '6';
team['L']= '2';
team['T']= '0';
team['WP'] = (parseInt(team['W'])/(parseInt(team['W']) + parseInt(team['L']) + parseInt(team['T']))).toFixed(3);
team['HOME']= '4-1-0';
team['ROAD']= '2-1-0';
team['STRK']= 'W2';
// team['GAMES']{
    
// }
GroupEast.push(team);
allTeams.push(team)

team = {};
team['TEAM'] = 'N.Y. Giants';
team['id'] = '3';
team['W']= '6';
team['L']= '2';
team['T']= '0';
team['WP'] = (parseInt(team['W'])/(parseInt(team['W']) + parseInt(team['L']) + parseInt(team['T']))).toFixed(3);
team['HOME']= '3-1-0';
team['ROAD']= '3-1-0';
team['STRK']= 'L1';
// team['GAMES']{
    
// }
GroupEast.push(team);
allTeams.push(team)

team = {};
team['TEAM'] = 'Washington';
team['id'] = '4';
team['W']= '4';
team['L']= '5';
team['T']= '0';
team['WP'] = (parseInt(team['W'])/(parseInt(team['W']) + parseInt(team['L']) + parseInt(team['T']))).toFixed(3);
team['HOME']= '2-3-0';
team['ROAD']= '2-2-0';
team['STRK']= 'L1';
// team['GAMES']{
    
// }
GroupEast.push(team);
allTeams.push(team)



team = {};
team['TEAM'] = 'Minnesota';
team['id'] = '5';
team['W']= '7';
team['L']= '1';
team['T']= '0';
team['WP'] = (parseInt(team['W'])/(parseInt(team['W']) + parseInt(team['L']) + parseInt(team['T']))).toFixed(3);
team['HOME']= '4-0-0';
team['ROAD']= '3-1-0';
team['STRK']= 'W6';
// team['GAMES']{
    
// }
GroupNorth.push(team);
allTeams.push(team)

team = {};
team['TEAM'] = 'Green Bay';
team['id'] = '6';
team['W']= '3';
team['L']= '6';
team['T']= '0';
team['WP'] = (parseInt(team['W'])/(parseInt(team['W']) + parseInt(team['L']) + parseInt(team['T']))).toFixed(3);
team['HOME']= '2-2-0';
team['ROAD']= '1-4-0';
team['STRK']= 'L5';
// team['GAMES']{
    
// }
GroupNorth.push(team);
allTeams.push(team)

team = {};
team['TEAM'] = 'Chicago';
team['id'] = '7';
team['W']= '3';
team['L']= '6';
team['T']= '0';
team['WP'] = (parseInt(team['W'])/(parseInt(team['W']) + parseInt(team['L']) + parseInt(team['T']))).toFixed(3);
team['HOME']= '2-2-0';
team['ROAD']= '1-4-0';
team['STRK']= 'L2';
// team['GAMES']{
    
// }
GroupNorth.push(team);
allTeams.push(team)

team = {};
team['TEAM'] = 'Detroit';
team['id'] = '8';
team['W']= '2';
team['L']= '6';
team['T']= '0';
team['WP'] = (parseInt(team['W'])/(parseInt(team['W']) + parseInt(team['L']) + parseInt(team['T']))).toFixed(3);
team['HOME']= '2-3-0';
team['ROAD']= '0-3-0';
team['STRK']= 'W1';
// team['GAMES']{
    
// }
GroupNorth.push(team);
allTeams.push(team)


team = {};
team['TEAM'] = 'Tampa Bay';
team['id'] = '9';
team['W']= '4';
team['L']= '5';
team['T']= '0';
team['WP'] = (parseInt(team['W'])/(parseInt(team['W']) + parseInt(team['L']) + parseInt(team['T']))).toFixed(3);
team['HOME']= '2-3-0';
team['ROAD']= '2-2-0';
team['STRK']= 'W1';
// team['GAMES']{
    
// }
GroupSouth.push(team);
allTeams.push(team)

team = {};
team['TEAM'] = 'Atlanta';
team['id'] = '10';
team['W']= '4';
team['L']= '5';
team['T']= '0';
team['WP'] = (parseInt(team['W'])/(parseInt(team['W']) + parseInt(team['L']) + parseInt(team['T']))).toFixed(3);
team['HOME']= '3-2-0';
team['ROAD']= '1-3-0';
team['STRK']= 'L1';
// team['GAMES']{
    
// }
GroupSouth.push(team);
allTeams.push(team)

team = {};
team['TEAM'] = 'New Orleans';
team['id'] = '11';
team['W']= '3';
team['L']= '6';
team['T']= '0';
team['WP'] = (parseInt(team['W'])/(parseInt(team['W']) + parseInt(team['L']) + parseInt(team['T']))).toFixed(3);
team['HOME']= '2-4-0';
team['ROAD']= '1-2-0';
team['STRK']= 'L1';
// team['GAMES']{
    
// }
GroupSouth.push(team);
allTeams.push(team)

team = {};
team['TEAM'] = 'Carolina';
team['id'] = '12';
team['W']= '2';
team['L']= '7';
team['T']= '0';
team['WP'] = (parseInt(team['W'])/(parseInt(team['W']) + parseInt(team['L']) + parseInt(team['T']))).toFixed(3);
team['HOME']= '2-3-0';
team['ROAD']= '0-4-0';
team['STRK']= 'L2';
// team['GAMES']{
    
// }
GroupSouth.push(team);
allTeams.push(team)

team = {};
team['TEAM'] = 'Seattle';
team['id'] = '13';
team['W']= '6';
team['L']= '3';
team['T']= '0';
team['WP'] = (parseInt(team['W'])/(parseInt(team['W']) + parseInt(team['L']) + parseInt(team['T']))).toFixed(3);
team['HOME']= '3-1-0';
team['ROAD']= '3-2-0';
team['STRK']= 'W4';
// team['GAMES']{
    
// }
GroupWest.push(team);
allTeams.push(team)

team = {};
team['TEAM'] = 'San Francisco';
team['id'] = '14';
team['W']= '4';
team['L']= '4';
team['T']= '0';
team['WP'] = (parseInt(team['W'])/(parseInt(team['W']) + parseInt(team['L']) + parseInt(team['T']))).toFixed(3);
team['HOME']= '2-1-0';
team['ROAD']= '2-3-0';
team['STRK']= 'W1';
// team['GAMES']{
    
// }
GroupWest.push(team);
allTeams.push(team)

team = {};
team['TEAM'] = 'L.A. Rams';
team['id'] = '15';
team['W']= '3';
team['L']= '5';
team['T']= '0';
team['WP'] = (parseInt(team['W'])/(parseInt(team['W']) + parseInt(team['L']) + parseInt(team['T']))).toFixed(3);
team['HOME']= '2-3-0';
team['ROAD']= '1-2-0';
team['STRK']= 'L2';
// team['GAMES']{
    
// }
GroupWest.push(team);
allTeams.push(team)

team = {};
team['TEAM'] = 'Arizona';
team['id'] = '16';
team['W']= '3';
team['L']= '6';
team['T']= '0';
team['WP'] = (parseInt(team['W'])/(parseInt(team['W']) + parseInt(team['L']) + parseInt(team['T']))).toFixed(3);
team['HOME']= '1-4-0';
team['ROAD']= '2-2-0';
team['STRK']= 'L2';
// team['GAMES']{
    
// }
GroupWest.push(team);
allTeams.push(team)

allGroups.push(GroupEast);
allGroups.push(GroupNorth);
allGroups.push(GroupSouth);
allGroups.push(GroupWest);

function initData(){
localStorage.setItem('GroupEast', JSON.stringify(GroupEast));
localStorage.setItem('GroupNorth', JSON.stringify(GroupNorth));
localStorage.setItem('GroupSouth', JSON.stringify(GroupSouth));
localStorage.setItem('GroupWest', JSON.stringify(GroupWest));
localStorage.setItem('allGroups', JSON.stringify(allGroups));
localStorage.setItem('allTeams', JSON.stringify(allTeams));
}

initData();

   const East = localStorage.getItem('GroupEast');
   const North = localStorage.getItem('GroupNorth');
   const South = localStorage.getItem('GroupSouth');
   const West = localStorage.getItem('GroupWest');
   
   let GE = JSON.parse(East);
   let GN = JSON.parse(North);
   let GS = JSON.parse(South);
   let GW = JSON.parse(West);
   
   function startUp() {
      createTable(GE, 'A')
      createTable(GN, 'B');
      createTable(GS, 'C');
      createTable(GW, 'D');
   } 

   function tableSelect(table){
    if(table == 'A'){
        return '#groupA tbody'
    } else if(table == 'B'){
        return '#groupB tbody'
    } else if(table == 'C'){
        return '#groupC tbody'
    } else if(table == 'D'){
        return '#groupD tbody'
    }
    
   }
   

   function createTable(teams, table) {
      let tableBody = document.querySelector(tableSelect(table));
      tableBody.replaceChildren();
      

      teams.forEach((team) => {
         const row = document.createElement('tr');
         let cell = document.createElement('td');
         let link = document.createElement('a');
         link.href = 'teamPage.html?id=' + team['TEAM'];
         link.target = '_blank';
         link.textContent = team['TEAM'];
         cell.appendChild(link);
         row.appendChild(cell);

         cell = document.createElement('td');
         cell.textContent = team['W'];
         row.appendChild(cell);

         cell = document.createElement('td');
         cell.textContent = team['L'];
         row.appendChild(cell);
         
         cell = document.createElement('td');
         cell.textContent = team['T'];
         row.appendChild(cell);

         cell = document.createElement('td');
         cell.textContent = team['WP'];
         row.appendChild(cell);

         cell = document.createElement('td');
         cell.textContent = team['HOME'];
         row.appendChild(cell);

         cell = document.createElement('td');
         cell.textContent = team['ROAD'];
         row.appendChild(cell);

         cell = document.createElement('td');
         cell.textContent = team['STRK'];
         row.appendChild(cell);

         tableBody.appendChild(row);
      });
   }

   function load (){
        //teams = JSON.parse(localStorage.getItem('allTeams'));
        let params = (new URL (document.location)).searchParams;
        let imgLink = document.querySelector('#team-logo-head');

        let teams = (JSON.parse(localStorage.getItem('allTeams'))).filter(teams => teams.id == params.get('id'));
        document.querySelector('#team').textContent = teams[0].TEAM;
        document.querySelector('#name').textContent = teams[0].TEAM;
        //createGamesTable(teams);


        imgLink.src = 'images/' + teams[0].id +'.png';
   }

//    function sort(field, teams) {

//       let order = false;
//       if (field === 'Name') {
//          teams = teams.sort((teamA, teamB) => {
//             return (teamA.Name < teamB.Name) ? -1 : 1
//          });
//          order = true;
//       } else if (field === 'W') {
//          teams = teams.sort((teamA, teamB) => teamA.W - teamB.W);
//       } else if (field === 'L') {
//          teams = teams.sort((teamA, teamB) => teamA.L - teamB.L);
//       } else if (field === 'PTS') {
//          teams = teams.sort((teamA, teamB) => teamA.PTS - teamB.PTS);
//       }

//    createTable(teams);
//    }