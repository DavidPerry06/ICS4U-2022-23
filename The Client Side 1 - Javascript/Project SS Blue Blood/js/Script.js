let numbers = [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,56,57,58,59,60,61,62,63,64,65,66,67,68,69,70,71,72,73,74,75,76,77,78,79,80,81,82,83,84,85,86,87,88,89,90,91,92,93,94,95,96,97,98,99,100,101,102,103,104,105,106,107,108,109,110,111,112,113,114,115,116,117,118,119,120,121,122,123,124,125,126,127,128,129,130,131,132,133,134,135,136,137,138,139,140,141,142,143,144,145,146,147,148,149,150,151,152,153,154,155,156,157,158,159,160,161,162,163,164,165,166,167,168,169,170,171,172,173,174,175,176,177,178,179,180,181,182,183,184,185,186,187,188,189,190,191,192,193,194,195,196,197,198,199,200];
let nameA = false;
let winA = false;
let lossA = false;
let wpA = false;
let tA = false;
let homeA = false;
let roadA = false;

let nameB = false;
let winB = false;
let lossB = false;
let wpB = false;
let tB = false;
let homeB = false;
let roadB = false;

let nameC = false;
let winC = false;
let lossC = false;
let wpC = false;
let tC = false;
let homeC = false;
let roadC = false;

let nameD = false;
let winD = false;
let lossD = false;
let wpD = false;
let tD = false;
let homeD = false;
let roadD = false;

let nonParsedALLTeams = localStorage.getItem('allTeams');
let AllTeams = JSON.parse(nonParsedALLTeams)
let East = localStorage.getItem('NFCEast'); 
let North = localStorage.getItem('NFCNorth');
let South = localStorage.getItem('NFCSouth');
let West = localStorage.getItem('NFCWest');
let NFCteams = localStorage.getItem('NFCTeams')
    // ^ NFC groups
let AFCeast = localStorage.getItem('AFCEast')
let AFCnorth = localStorage.getItem('AFCNorth')
let AFCsouth = localStorage.getItem('AFCSouth')
let AFCwest = localStorage.getItem('AFCWest')
let AFCteams = localStorage.getItem('AFCTeams')


  
let AFCE = JSON.parse(AFCeast);
let AFCN = JSON.parse(AFCnorth);
let AFCS = JSON.parse(AFCsouth);
let AFCW = JSON.parse(AFCwest);
let AFCT = JSON.parse(AFCteams);

let GE = JSON.parse(East);
let GN = JSON.parse(North);
let GS = JSON.parse(South);
let GW = JSON.parse(West);
let NFCT = JSON.parse(NFCteams)
   

    //calls the create table for each group, used to start up each page
   function NFCstartUp() {
      createTable(GE, 'A')
      createTable(GN, 'B');
      createTable(GS, 'C');
      createTable(GW, 'D');
   } 
   //calls the create table for each group, used to start up each page
   function AFCstartUp() {
    createTable(AFCE, 'A')
    createTable(AFCN, 'B');
    createTable(AFCS, 'C');
    createTable(AFCW, 'D');
 } 


 //identifies and selects the table which we want to put the data into
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
   
//creates the tables by creates new html elements to manipulate and add classes to, which store the data
   function createTable(teams, table) {
      let tableBody = document.querySelector(tableSelect(table));
      tableBody.replaceChildren();
      

      teams.forEach((team) => {
         const row = document.createElement('tr');
         let cell = document.createElement('td');
         let link = document.createElement('a');
         link.href = 'teamPage.html?id=' + team['id'];
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
         
         tableBody.appendChild(row);
      });
      
   }
//calls the required data to start up the individual team pages
   function load (){
        teams = JSON.parse(localStorage.getItem('allTeams'));
        let params = (new URL (document.location)).searchParams;
        let imgLink = document.querySelector('#team-logo-head');

        teams = teams.filter(
            team => {
                return team.id == params.get('id');
                }
            );
        document.querySelector('#team').textContent = teams[0].TEAM;
        document.querySelector('#name').textContent = teams[0].TEAM;
        createGamesTable(teams);


        imgLink.src = '/The Client Side 1 - Javascript/Project SS Blue Blood/images/' + teams[0].id +'.png';

        colorpicker(teams[0].id)

        setCurrentPage(1);
        createPaginationButton()
        eventAdd()
   }
//identifies which color will be needed for which page
   function colorpicker(ID){
    let hero = document.querySelector('section')

    hero.classList.add('color' + ID)

   }
//creates the cards for each game to be displayed in the team specific page
   function createGamesTable(teams){
    gameSect = document.querySelector('#games')
    

    let count = 0

    teams[0].GAMES.forEach(game => {

        
        let team = teams[0].TEAM;
        let oppID = game.opp;
        let teamScore = game.score;
        let opponentScore = game.oppScore;
        let date = game.date;
        let type = game.type;
        let status = game.status;
        let oppStatus;

        if(status == 'WIN'){
            oppStatus = 'LOSS'
        } else if (status == 'LOSS'){
            oppStatus = 'WIN'
        } else {
            oppStatus = 'TIE'
        }

        let card = document.createElement('div');
        card.classList.add('card');
        card.classList.add('card-content');
        card.classList.add('team-games');
        card.classList.add('columns');
        card.classList.add('has-text-centered')

        let col1 = document.createElement('div');
        col1.classList.add('column')
        col1.classList.add('is-4')

        let col2 = document.createElement('div');
        col2.classList.add('column')
        col1.classList.add('is-4')

        let col3 = document.createElement('div');
        col3.classList.add('column')
        col1.classList.add('is-4')
        
        card.appendChild(col1)
        card.appendChild(col2)
        card.appendChild(col3)

        let matchup1 = document.createElement('p');
        matchup1.classList.add('is-uppercase');
        matchup1.classList.add('has-text-weight-medium');
        matchup1.classList.add('is-size-4')

        let matchup2 = document.createElement('p');
        matchup2.classList.add('is-size-4')

        let matchup3 = document.createElement('p');
        matchup3.classList.add('is-uppercase');
        matchup3.classList.add('has-text-weight-medium');
        matchup3.classList.add('is-size-4')

        matchup1.textContent = team;
        matchup2.textContent = 'vs';
        matchup3.textContent = oppID;

        col1.appendChild(matchup1)
        col2.appendChild(matchup2)
        col3.appendChild(matchup3)

        let outcome = document.createElement('span');
        outcome.textContent = status;
        outcome.classList.add('has-text-weight-semibold');
        outcome.classList.add('is-size-5');
        let oppOutcome = document.createElement('span');
        oppOutcome.textContent = oppStatus;
        oppOutcome.classList.add('has-text-weight-semibold');
        oppOutcome.classList.add('is-size-5');
        if(status == 'WIN'){
            outcome.classList.add('has-text-success');
            oppOutcome.classList.add('has-text-danger');
        } else if (status == 'LOSS') {
            oppOutcome.classList.add('has-text-success');
            outcome.classList.add('has-text-danger');
        } else {
            oppOutcome.classList.add('has-text-light-grey');
            outcome.classList.add('has-text-light-grey');
        }

        let score = document.createElement('p');
        score.textContent = teamScore;
        score.classList.add('has-text-weight-semibold');
        score.classList.add('is-size-6');
        
        let oppScore = document.createElement('p');
        oppScore.textContent = opponentScore;
        oppScore.classList.add('has-text-weight-semibold');
        oppScore.classList.add('is-size-6');

        let dateDIV = document.createElement('p')
        dateDIV.classList.add('has-text-weight-medium')
        dateDIV.textContent = '|  ' + date + '  |';
        count++;

        
        col1.appendChild(score)
        col1.appendChild(outcome)
        col2.appendChild(dateDIV)
        col3.appendChild(oppScore)
        col3.appendChild(oppOutcome)
        
        
        
        gameSect.appendChild(card);  
    });


}
//used to sort each column of the table by sorting the information and then recreating the table using that information
   function sort(field, table, div) {

    if(div == 'NFC'){
    if(table == 'A'){
        teams = GE;
        if (field === 'Name') {
            if(nameA){
                nameA = false;
                teams = teams.sort((teamA, teamB) => {
                    return (teamA.TEAM < teamB.TEAM) ? -1 : 1
                 });
            } else {
                nameA = true;
                teams = teams.sort((teamA, teamB) => {
                    return (teamA.TEAM > teamB.TEAM) ? -1 : 1
                 });
            }
         } else if (field === 'W') {
            if(winA){
                teams = teams.sort((teamA, teamB) => teamA.W - teamB.W);
                winA =false;
            } else {
                teams = teams.sort((teamA, teamB) => teamB.W - teamA.W);
                winA = true;
            }
            
         } else if (field === 'L') {
            if(lossA){
                teams = teams.sort((teamA, teamB) => teamA.L - teamB.L);
                lossA =false;
            } else {
                teams = teams.sort((teamA, teamB) => teamB.L - teamA.L);
                lossA = true;
            }
        } else if (field === 'WP') {
            if(wpA){
                teams = teams.sort((teamA, teamB) => teamA.WP - teamB.WP);
                wpA =false;
            } else {
                teams = teams.sort((teamA, teamB) => teamB.WP - teamA.WP);
                wpA = true;
            }
         } else if (field === 'T') {
            if(tA){
                teams = teams.sort((teamA, teamB) => teamA.T - teamB.T);
                tA =false;
            } else {
                teams = teams.sort((teamA, teamB) => teamB.T - teamA.T);
                tA = true;
            }
         } else if (field === 'HOME') {
            if(homeA){
                teams = teams.sort((teamA, teamB) => {
                    teamA = teamA['HOME'].substring(0, teamA['HOME'].result.indexOf('-'));
                    teamB = teamB['HOME'].substring(0, teamB['HOME'].result.indexOf('-'));
                    return (teamA < teamB) ? -1 : 1
                 });
                 homeA = false;
            } else {
                teams = teams.sort((teamA, teamB) => {
                    teamA = teamA['HOME'].substring(0, teamA['HOME'].result.indexOf('-'));
                    teamB = teamB['HOME'].substring(0, teamB['HOME'].result.indexOf('-'));
                    return (teamA > teamB) ? -1 : 1
                 });
                homeA = true;
            }
         } else if (field === 'ROAD') {
            if(roadA){
                teams = teams.sort((teamA, teamB) => {
                    teamA = teamA['ROAD'].substring(0, teamA['ROAD'].result.indexOf('-'));
                    teamB = teamB['ROAD'].substring(0, teamB['ROAD'].result.indexOf('-'));
                    return (teamA < teamB) ? -1 : 1
                 });
                 roadA = false;
            } else {
                teams = teams.sort((teamA, teamB) => {
                    teamA = teamA['ROAD'].substring(0, teamA['ROAD'].result.indexOf('-'));
                    teamB = teamB['ROAD'].substring(0, teamB['ROAD'].result.indexOf('-'));
                    return (teamA > teamB) ? -1 : 1
                 });
                roadA = true;
            }
         }
         
        createTable(teams, 'A');
        }
         
       
        if(table == 'B'){
        teams = GN;
        if (field === 'Name') {
            if(nameB){
                nameB = false;
                teams = teams.sort((teamA, teamB) => {
                    return (teamA.TEAM < teamB.TEAM) ? -1 : 1
                 });
            } else {
                nameB = true;
                teams = teams.sort((teamA, teamB) => {
                    return (teamA.TEAM > teamB.TEAM) ? -1 : 1
                 });
            }
         } else if (field === 'W') {
            if(winB){
                teams = teams.sort((teamA, teamB) => teamA.W - teamB.W);
                winB =false;
            } else {
                teams = teams.sort((teamA, teamB) => teamB.W - teamA.W);
                winB = true;
            }
         } else if (field === 'L') {
            if(lossB){
                teams = teams.sort((teamA, teamB) => teamA.L - teamB.L);
                lossB =false;
            } else {
                teams = teams.sort((teamA, teamB) => teamB.L - teamA.L);
                lossB = true;
            }
        } else if (field === 'WP') {
            if(wpB){
                teams = teams.sort((teamA, teamB) => teamA.WP - teamB.WP);
                wpB =false;
            } else {
                teams = teams.sort((teamA, teamB) => teamB.WP - teamA.WP);
                wpB = true;
            }
         } else if (field === 'T') {
            if(tB){
                teams = teams.sort((teamA, teamB) => teamA.T - teamB.T);
                tB =false;
            } else {
                teams = teams.sort((teamA, teamB) => teamB.T - teamA.T);
                tB = true;
            }
         } else if (field === 'HOME') {
            if(homeB){
                teams = teams.sort((teamA, teamB) => {
                    teamA = teamA['HOME'].substring(0, teamA['HOME'].result.indexOf('-'));
                    teamB = teamB['HOME'].substring(0, teamB['HOME'].result.indexOf('-'));
                    return (teamA < teamB) ? -1 : 1
                 });
                 homeB = false;
            } else {
                teams = teams.sort((teamA, teamB) => {
                    teamA = teamA['HOME'].substring(0, teamA['HOME'].result.indexOf('-'));
                    teamB = teamB['HOME'].substring(0, teamB['HOME'].result.indexOf('-'));
                    return (teamA > teamB) ? -1 : 1
                 });
                homeB = true;
            }
         } else if (field === 'ROAD') {
            if(roadB){
                teams = teams.sort((teamA, teamB) => {
                    teamA = teamA['ROAD'].substring(0, teamA['ROAD'].result.indexOf('-'));
                    teamB = teamB['ROAD'].substring(0, teamB['ROAD'].result.indexOf('-'));
                    return (teamA < teamB) ? -1 : 1
                 });
                 roadB = false;
            } else {
                teams = teams.sort((teamA, teamB) => {
                    teamA = teamA['ROAD'].substring(0, teamA['ROAD'].result.indexOf('-'));
                    teamB = teamB['ROAD'].substring(0, teamB['ROAD'].result.indexOf('-'));
                    return (teamA > teamB) ? -1 : 1
                 });
                roadB = true;
            }
         }
         
        createTable(teams, 'B');
         
        }
        if(table == 'C'){
        teams = GS;
        if (field === 'Name') {
            if(nameC){
                nameC = false;
                teams = teams.sort((teamA, teamB) => {
                    return (teamA.TEAM < teamB.TEAM) ? -1 : 1
                 });
            } else {
                nameC = true;
                teams = teams.sort((teamA, teamB) => {
                    return (teamA.TEAM > teamB.TEAM) ? -1 : 1
                 });
            }
         } else if (field === 'W') {
            if(winC){
                teams = teams.sort((teamA, teamB) => teamA.W - teamB.W);
                winC =false;
            } else {
                teams = teams.sort((teamA, teamB) => teamB.W - teamA.W);
                winC = true;
            }
         } else if (field === 'L') {
            if(lossC){
                teams = teams.sort((teamA, teamB) => teamA.L - teamB.L);
                lossC =false;
            } else {
                teams = teams.sort((teamA, teamB) => teamB.L - teamA.L);
                lossC = true;
            }
        } else if (field === 'WP') {
            if(wpC){
                teams = teams.sort((teamA, teamB) => teamA.WP - teamB.WP);
                wpC =false;
            } else {
                teams = teams.sort((teamA, teamB) => teamB.WP - teamA.WP);
                wpC = true;
            }
         } else if (field === 'T') {
            if(tC){
                teams = teams.sort((teamA, teamB) => teamA.T - teamB.T);
                tC =false;
            } else {
                teams = teams.sort((teamA, teamB) => teamB.T - teamA.T);
                tC = true;
            }
         } else if (field === 'HOME') {
            if(homeC){
                teams = teams.sort((teamA, teamB) => {
                    teamA = teamA['HOME'].substring(0, teamA['HOME'].result.indexOf('-'));
                    teamB = teamB['HOME'].substring(0, teamB['HOME'].result.indexOf('-'));
                    return (teamA < teamB) ? -1 : 1
                 });
                 homeC = false;
            } else {
                teams = teams.sort((teamA, teamB) => {
                    teamA = teamA['HOME'].substring(0, teamA['HOME'].result.indexOf('-'));
                    teamB = teamB['HOME'].substring(0, teamB['HOME'].result.indexOf('-'));
                    return (teamA > teamB) ? -1 : 1
                 });
                homeC = true;
            }
         } else if (field === 'ROAD') {
            if(roadC){
                teams = teams.sort((teamA, teamB) => {
                    teamA = teamA['ROAD'].substring(0, teamA['ROAD'].result.indexOf('-'));
                    teamB = teamB['ROAD'].substring(0, teamB['ROAD'].result.indexOf('-'));
                    return (teamA < teamB) ? -1 : 1
                 });
                 roadC = false;
            } else {
                teams = teams.sort((teamA, teamB) => {
                    teamA = teamA['ROAD'].substring(0, teamA['ROAD'].result.indexOf('-'));
                    teamB = teamB['ROAD'].substring(0, teamB['ROAD'].result.indexOf('-'));
                    return (teamA > teamB) ? -1 : 1
                 });
                roadC = true;
            }
         }
         
        createTable(teams, 'C');
         
        }
        if(table == 'D'){
            teams = GW;
            if (field === 'Name') {
                if(nameD){
                    nameD = false;
                    teams = teams.sort((teamA, teamB) => {
                        return (teamA.TEAM < teamB.TEAM) ? -1 : 1
                     });
                } else {
                    nameD = true;
                    teams = teams.sort((teamA, teamB) => {
                        return (teamA.TEAM > teamB.TEAM) ? -1 : 1
                     });
                }
             } else if (field === 'W') {
                if(winD){
                    teams = teams.sort((teamA, teamB) => teamA.W - teamB.W);
                    winD =false;
                } else {
                    teams = teams.sort((teamA, teamB) => teamB.W - teamA.W);
                    winD = true;
                }
             } else if (field === 'L') {
                if(lossD){
                    teams = teams.sort((teamA, teamB) => teamA.L - teamB.L);
                    lossD =false;
                } else {
                    teams = teams.sort((teamA, teamB) => teamB.L - teamA.L);
                    lossD = true;
                }
            } else if (field === 'WP') {
                if(wpD){
                    teams = teams.sort((teamA, teamB) => teamA.WP - teamB.WP);
                    wpD =false;
                } else {
                    teams = teams.sort((teamA, teamB) => teamB.WP - teamA.WP);
                    wpD = true;
                }
             } else if (field === 'T') {
                if(tD){
                    teams = teams.sort((teamA, teamB) => teamA.T - teamB.T);
                    tD =false;
                } else {
                    teams = teams.sort((teamA, teamB) => teamB.T - teamA.T);
                    tD = true;
                }
             } else if (field === 'HOME') {
                if(homeD){
                    teams = teams.sort((teamA, teamB) => {
                        teamA = teamA['HOME'].substring(0, teamA['HOME'].result.indexOf('-'));
                        teamB = teamB['HOME'].substring(0, teamB['HOME'].result.indexOf('-'));
                        return (teamA < teamB) ? -1 : 1
                     });
                     homeD = false;
                } else {
                    teams = teams.sort((teamA, teamB) => {
                        teamA = teamA['HOME'].substring(0, teamA['HOME'].result.indexOf('-'));
                        teamB = teamB['HOME'].substring(0, teamB['HOME'].result.indexOf('-'));
                        return (teamA > teamB) ? -1 : 1
                     });
                    homeD = true;
                }
             } else if (field === 'ROAD') {
                if(roadD){
                    teams = teams.sort((teamA, teamB) => {
                        teamA = teamA['ROAD'].substring(0, teamA['ROAD'].result.indexOf('-'));
                        teamB = teamB['ROAD'].substring(0, teamB['ROAD'].result.indexOf('-'));
                        return (teamA < teamB) ? -1 : 1
                     });
                     roadD = false;
                } else {
                    teams = teams.sort((teamA, teamB) => {
                        teamA = teamA['ROAD'].substring(0, teamA['ROAD'].result.indexOf('-'));
                        teamB = teamB['ROAD'].substring(0, teamB['ROAD'].result.indexOf('-'));
                        return (teamA > teamB) ? -1 : 1
                     });
                    roadD = true;
                }
             }
             
            createTable(teams, 'D');
             
            }
    }
    
   
   if(div == 'AFC'){
    if(table == 'A'){
        teams = AFCE;
        if (field === 'Name') {
            if(nameA){
                nameA = false;
                teams = teams.sort((teamA, teamB) => {
                    return (teamA.TEAM < teamB.TEAM) ? -1 : 1
                 });
            } else {
                nameA = true;
                teams = teams.sort((teamA, teamB) => {
                    return (teamA.TEAM > teamB.TEAM) ? -1 : 1
                 });
            }
         } else if (field === 'W') {
            if(winA){
                teams = teams.sort((teamA, teamB) => teamA.W - teamB.W);
                winA =false;
            } else {
                teams = teams.sort((teamA, teamB) => teamB.W - teamA.W);
                winA = true;
            }
         } else if (field === 'L') {
            if(lossA){
                teams = teams.sort((teamA, teamB) => teamA.L - teamB.L);
                lossA =false;
            } else {
                teams = teams.sort((teamA, teamB) => teamB.L - teamA.L);
                lossA = true;
            }
        } else if (field === 'WP') {
            if(wpA){
                teams = teams.sort((teamA, teamB) => teamA.WP - teamB.WP);
                wpA =false;
            } else {
                teams = teams.sort((teamA, teamB) => teamB.WP - teamA.WP);
                wpA = true;
            }
         } else if (field === 'T') {
            if(tA){
                teams = teams.sort((teamA, teamB) => teamA.T - teamB.T);
                tA =false;
            } else {
                teams = teams.sort((teamA, teamB) => teamB.T - teamA.T);
                tA = true;
            }
         } else if (field === 'HOME') {
            if(homeA){
                teams = teams.sort((teamA, teamB) => {
                    teamA = teamA['HOME'].substring(0, teamA['HOME'].result.indexOf('-'));
                    teamB = teamB['HOME'].substring(0, teamB['HOME'].result.indexOf('-'));
                    return (teamA < teamB) ? -1 : 1
                 });
                 homeA = false;
            } else {
                teams = teams.sort((teamA, teamB) => {
                    teamA = teamA['HOME'].substring(0, teamA['HOME'].result.indexOf('-'));
                    teamB = teamB['HOME'].substring(0, teamB['HOME'].result.indexOf('-'));
                    return (teamA > teamB) ? -1 : 1
                 });
                homeA = true;
            }
         } else if (field === 'ROAD') {
            if(roadA){
                teams = teams.sort((teamA, teamB) => {
                    teamA = teamA['ROAD'].substring(0, teamA['ROAD'].result.indexOf('-'));
                    teamB = teamB['ROAD'].substring(0, teamB['ROAD'].result.indexOf('-'));
                    return (teamA < teamB) ? -1 : 1
                 });
                 roadA = false;
            } else {
                teams = teams.sort((teamA, teamB) => {
                    teamA = teamA['ROAD'].substring(0, teamA['ROAD'].result.indexOf('-'));
                    teamB = teamB['ROAD'].substring(0, teamB['ROAD'].result.indexOf('-'));
                    return (teamA > teamB) ? -1 : 1
                 });
                roadA = true;
            }
         }
         
        createTable(teams, 'A');
        }
         
       
        if(table == 'B'){
        teams = AFCN;
        if (field === 'Name') {
            if(nameB){
                nameB = false;
                teams = teams.sort((teamA, teamB) => {
                    return (teamA.TEAM < teamB.TEAM) ? -1 : 1
                 });
            } else {
                nameB = true;
                teams = teams.sort((teamA, teamB) => {
                    return (teamA.TEAM > teamB.TEAM) ? -1 : 1
                 });
            }
         } else if (field === 'W') {
            if(winB){
                teams = teams.sort((teamA, teamB) => teamA.W - teamB.W);
                winB =false;
            } else {
                teams = teams.sort((teamA, teamB) => teamB.W - teamA.W);
                winB = true;
            }
         } else if (field === 'L') {
            if(lossB){
                teams = teams.sort((teamA, teamB) => teamA.L - teamB.L);
                lossB =false;
            } else {
                teams = teams.sort((teamA, teamB) => teamB.L - teamA.L);
                lossB = true;
            }
        } else if (field === 'WP') {
            if(wpB){
                teams = teams.sort((teamA, teamB) => teamA.WP - teamB.WP);
                wpB =false;
            } else {
                teams = teams.sort((teamA, teamB) => teamB.WP - teamA.WP);
                wpB = true;
            }
         } else if (field === 'T') {
            if(tB){
                teams = teams.sort((teamA, teamB) => teamA.T - teamB.T);
                tB =false;
            } else {
                teams = teams.sort((teamA, teamB) => teamB.T - teamA.T);
                tB = true;
            }
         } else if (field === 'HOME') {
            if(homeB){
                teams = teams.sort((teamA, teamB) => {
                    teamA = teamA['HOME'].substring(0, teamA['HOME'].result.indexOf('-'));
                    teamB = teamB['HOME'].substring(0, teamB['HOME'].result.indexOf('-'));
                    return (teamA < teamB) ? -1 : 1
                 });
                 homeB = false;
            } else {
                teams = teams.sort((teamA, teamB) => {
                    teamA = teamA['HOME'].substring(0, teamA['HOME'].result.indexOf('-'));
                    teamB = teamB['HOME'].substring(0, teamB['HOME'].result.indexOf('-'));
                    return (teamA > teamB) ? -1 : 1
                 });
                homeB = true;
            }
         } else if (field === 'ROAD') {
            if(roadB){
                teams = teams.sort((teamA, teamB) => {
                    teamA = teamA['ROAD'].substring(0, teamA['ROAD'].result.indexOf('-'));
                    teamB = teamB['ROAD'].substring(0, teamB['ROAD'].result.indexOf('-'));
                    return (teamA < teamB) ? -1 : 1
                 });
                 roadB = false;
            } else {
                teams = teams.sort((teamA, teamB) => {
                    teamA = teamA['ROAD'].substring(0, teamA['ROAD'].result.indexOf('-'));
                    teamB = teamB['ROAD'].substring(0, teamB['ROAD'].result.indexOf('-'));
                    return (teamA > teamB) ? -1 : 1
                 });
                roadB = true;
            }
         }
         
        createTable(teams, 'B');
         
        }
        if(table == 'C'){
        teams = AFCS;
        if (field === 'Name') {
            if(nameC){
                nameC = false;
                teams = teams.sort((teamA, teamB) => {
                    return (teamA.TEAM < teamB.TEAM) ? -1 : 1
                 });
            } else {
                nameC = true;
                teams = teams.sort((teamA, teamB) => {
                    return (teamA.TEAM > teamB.TEAM) ? -1 : 1
                 });
            }
         } else if (field === 'W') {
            if(winC){
                teams = teams.sort((teamA, teamB) => teamA.W - teamB.W);
                winC =false;
            } else {
                teams = teams.sort((teamA, teamB) => teamB.W - teamA.W);
                winC = true;
            }
         } else if (field === 'L') {
            if(lossC){
                teams = teams.sort((teamA, teamB) => teamA.L - teamB.L);
                lossC =false;
            } else {
                teams = teams.sort((teamA, teamB) => teamB.L - teamA.L);
                lossC = true;
            }
        } else if (field === 'WP') {
            if(wpC){
                teams = teams.sort((teamA, teamB) => teamA.WP - teamB.WP);
                wpC =false;
            } else {
                teams = teams.sort((teamA, teamB) => teamB.WP - teamA.WP);
                wpC = true;
            }
         } else if (field === 'T') {
            if(tC){
                teams = teams.sort((teamA, teamB) => teamA.T - teamB.T);
                tC =false;
            } else {
                teams = teams.sort((teamA, teamB) => teamB.T - teamA.T);
                tC = true;
            }
         } else if (field === 'HOME') {
            if(homeC){
                teams = teams.sort((teamA, teamB) => {
                    teamA = teamA['HOME'].substring(0, teamA['HOME'].result.indexOf('-'));
                    teamB = teamB['HOME'].substring(0, teamB['HOME'].result.indexOf('-'));
                    return (teamA < teamB) ? -1 : 1
                 });
                 homeC = false;
            } else {
                teams = teams.sort((teamA, teamB) => {
                    teamA = teamA['HOME'].substring(0, teamA['HOME'].result.indexOf('-'));
                    teamB = teamB['HOME'].substring(0, teamB['HOME'].result.indexOf('-'));
                    return (teamA > teamB) ? -1 : 1
                 });
                homeC = true;
            }
         } else if (field === 'ROAD') {
            if(roadC){
                teams = teams.sort((teamA, teamB) => {
                    teamA = teamA['ROAD'].substring(0, teamA['ROAD'].result.indexOf('-'));
                    teamB = teamB['ROAD'].substring(0, teamB['ROAD'].result.indexOf('-'));
                    return (teamA < teamB) ? -1 : 1
                 });
                 roadC = false;
            } else {
                teams = teams.sort((teamA, teamB) => {
                    teamA = teamA['ROAD'].substring(0, teamA['ROAD'].result.indexOf('-'));
                    teamB = teamB['ROAD'].substring(0, teamB['ROAD'].result.indexOf('-'));
                    return (teamA > teamB) ? -1 : 1
                 });
                roadC = true;
            }
         }
         
        createTable(teams, 'C');
         
        }
        if(table == 'D'){
            teams = AFCW;
            if (field === 'Name') {
                if(nameD){
                    nameD = false;
                    teams = teams.sort((teamA, teamB) => {
                        return (teamA.TEAM < teamB.TEAM) ? -1 : 1
                     });
                } else {
                    nameD = true;
                    teams = teams.sort((teamA, teamB) => {
                        return (teamA.TEAM > teamB.TEAM) ? -1 : 1
                     });
                }
             } else if (field === 'W') {
                if(winD){
                    teams = teams.sort((teamA, teamB) => teamA.W - teamB.W);
                    winD =false;
                } else {
                    teams = teams.sort((teamA, teamB) => teamB.W - teamA.W);
                    winD = true;
                }
             } else if (field === 'L') {
                if(lossD){
                    teams = teams.sort((teamA, teamB) => teamA.L - teamB.L);
                    lossD =false;
                } else {
                    teams = teams.sort((teamA, teamB) => teamB.L - teamA.L);
                    lossD = true;
                }
            } else if (field === 'WP') {
                if(wpD){
                    teams = teams.sort((teamA, teamB) => teamA.WP - teamB.WP);
                    wpD =false;
                } else {
                    teams = teams.sort((teamA, teamB) => teamB.WP - teamA.WP);
                    wpD = true;
                }
             } else if (field === 'T') {
                if(tD){
                    teams = teams.sort((teamA, teamB) => teamA.T - teamB.T);
                    tD =false;
                } else {
                    teams = teams.sort((teamA, teamB) => teamB.T - teamA.T);
                    tD = true;
                }
             } else if (field === 'HOME') {
                if(homeD){
                    teams = teams.sort((teamA, teamB) => {
                        teamA = teamA['HOME'].substring(0, teamA['HOME'].result.indexOf('-'));
                        teamB = teamB['HOME'].substring(0, teamB['HOME'].result.indexOf('-'));
                        return (teamA < teamB) ? -1 : 1
                     });
                     homeD = false;
                } else {
                    teams = teams.sort((teamA, teamB) => {
                        teamA = teamA['HOME'].substring(0, teamA['HOME'].result.indexOf('-'));
                        teamB = teamB['HOME'].substring(0, teamB['HOME'].result.indexOf('-'));
                        return (teamA > teamB) ? -1 : 1
                     });
                    homeD = true;
                }
             } else if (field === 'ROAD') {
                if(roadD){
                    teams = teams.sort((teamA, teamB) => {
                        teamA = teamA['ROAD'].substring(0, teamA['ROAD'].result.indexOf('-'));
                        teamB = teamB['ROAD'].substring(0, teamB['ROAD'].result.indexOf('-'));
                        return (teamA < teamB) ? -1 : 1
                     });
                     roadD = false;
                } else {
                    teams = teams.sort((teamA, teamB) => {
                        teamA = teamA['ROAD'].substring(0, teamA['ROAD'].result.indexOf('-'));
                        teamB = teamB['ROAD'].substring(0, teamB['ROAD'].result.indexOf('-'));
                        return (teamA > teamB) ? -1 : 1
                     });
                    roadD = true;
                }
             }
             
            createTable(teams, 'D');
             
            }
    }
    
   }
//checks whether or not the entered name is valid
    function validName (){
            input = document.querySelector('#validName').value;
            console.log(input)
            valid = document.querySelector('#validName');
            msg = document.querySelector('#nameError');
            console.log(valid)
            if(input == 'Lebrahn Jahames'){
                valid.classList.remove('is-danger')
                valid.classList.add('is-success')
                msg.classList.remove('has-text-danger')
                msg.classList.add('has-text-success')
                msg.textContent = 'hey ;) (said with unimaginable impeccable jaw-dropping rizz)'
                return true;
            } else {
                valid.classList.remove('is-danger')
                valid.classList.add('is-danger')
                msg.classList.remove('has-text-success')
                msg.classList.add('has-text-danger')
                msg.textContent = 'ahem, you aint from around these parts are ya (lightskin stare)'
             return false;
            }
   } 
//checks whether or not the entered email is valid
    function validEmail (){
        input = document.querySelector('#validEmail').value;
        console.log(input)
        valid = document.querySelector('#validEmail');
        msg = document.querySelector('#emailError');
        console.log(valid)
        if(input == 'bball4life@ball.com'){
            valid.classList.remove('is-danger')
            valid.classList.add('is-success')
            msg.classList.remove('has-text-danger')
            msg.classList.add('has-text-success')
            msg.textContent = 'hey ;) (said with globally desired Rizz)'
            return true;
        } else {
            valid.classList.remove('is-success')
            valid.classList.add('is-danger')
            msg.classList.remove('has-text-success')
            msg.classList.add('has-text-danger')
            msg.textContent = 'ahem, you aint from around these parts are ya (lightskin stare)'
            return false;
        }
    }
//checks to make sure the two teams are not the same
    function validTeams (){
        let team = document.getElementById('team1').value
        let opp = document.getElementById('team2').value
        let teamOneMsg = document.getElementById('teamOneError')
        let teamTwoMsg = document.getElementById('teamTwoError')
        let box1 = document.getElementById('box1')
        let box2 = document.getElementById('box2')

        if (team == opp){
            box1.classList.remove('is-success')
            box1.classList.add('is-danger')
            teamOneMsg.classList.remove('has-text-success')
            teamOneMsg.classList.add('has-text-danger')
            teamOneMsg.textContent = 'You have to rizz up a team other than yourself'

            box2.classList.remove('is-success')
            box2.classList.add('is-danger')
            teamTwoMsg.classList.remove('has-text-success')
            teamTwoMsg.classList.add('has-text-danger')
            teamTwoMsg.textContent = 'You have to rizz up a team other than yourself'

            return false;
        } else {
            box1.classList.remove('is-danger')
            box1.classList.add('is-success')
            teamOneMsg.classList.remove('has-text-danger')
            teamOneMsg.textContent = ''

            box2.classList.remove('is-danger')
            box2.classList.add('is-success')
            teamTwoMsg.classList.remove('has-text-danger')
            teamTwoMsg.textContent = ''

            return true;
        }
    }
//checks to make sure the match type is different
   function validType (){
        let type1 = (document.getElementById('teamOneType').value).toLowerCase()
        let type2 = (document.getElementById('teamTwoType').value).toLowerCase()
        let team1 = document.getElementById('teamOneType')
        let teamOneMsg = document.getElementById('errorMsg1')
        let team2 = document.getElementById('teamTwoType')
        let teamTwoMsg = document.getElementById('errorMsg2')

        if(type1 == 'home' && type2 == 'road'){
            team1.classList.remove('is-danger')
            team1.classList.add('is-success')
            teamOneMsg.classList.remove('has-text-danger')
            teamOneMsg.classList.add('has-text-success')
            teamOneMsg.textContent = 'IT HAS ARIZZIN'

            team2.classList.remove('is-danger')
            team2.classList.add('is-success')
            teamTwoMsg.classList.remove('has-text-danger')
            teamTwoMsg.classList.add('has-text-success')
            teamTwoMsg.textContent = 'ITS RIZZENSTEIN'

            return true;
        } else if (type2 == 'home' && type1 == 'road'){
            team1.classList.remove('is-danger')
            team1.classList.add('is-success')
            teamOneMsg.classList.remove('has-text-danger')
            teamOneMsg.classList.add('has-text-success')
            teamOneMsg.textContent = 'IT HAS ARIZZIN'

            team2.classList.remove('is-danger')
            team2.classList.add('is-success')
            teamTwoMsg.classList.remove('has-text-danger')
            teamTwoMsg.classList.add('has-text-success')
            teamTwoMsg.textContent = 'ITS RIZZENSTEIN'

            return true;
        } else if(type1 != '' && type1 == type2){
            team1.classList.add('is-danger')
            teamOneMsg.classList.remove('has-text-success')
            teamOneMsg.classList.add('has-text-danger')
            teamOneMsg.textContent = 'both teams cannot rizz the same type'

            team2.classList.add('is-danger')
            teamTwoMsg.classList.remove('has-text-success')
            teamTwoMsg.classList.add('has-text-danger')
            teamTwoMsg.textContent = 'both teams cannot rizz the same type'

            return false;
        } else {
            team1.classList.add('is-danger')
            teamOneMsg.classList.remove('has-text-success')
            teamOneMsg.classList.add('has-text-danger')
            teamOneMsg.textContent = 'Can\'t forget to rizz up this box'

            team2.classList.add('is-danger')
            teamTwoMsg.classList.remove('has-text-success')
            teamTwoMsg.classList.add('has-text-danger')
            teamTwoMsg.textContent = 'Can\'t forget to rizz up this box'
        }
    }
//gets the date of the match
    function getDate() {
        let date = document.getElementById('date').value;
        let month = date.substring(0, date.indexOf('/'))
        let day = date.substring(date.indexOf('/')+1, date.lastIndexOf('/'))
        let year = date.substring(date.lastIndexOf('/')+1)

        let newDate = day +'' + month +'' + year

        return newDate;
    }
//checks whether the date entered is valid
   function validDate (){
    let date = document.getElementById('date').value;

    let msg = document.getElementById('dateMsg')
    if(date.substring(0,4) != '2022'){
        document.getElementById('date').classList.add('is-danger');
        msg.classList.add('has-text-danger');
        msg.textContent = 'Please rizz a date in 2022';      

        return false;  
    } else {
        document.getElementById('date').classList.remove('is-danger');
        document.getElementById('date').classList.add('is-success');
        
        return true;
    }

    }
//makes sure the score value is valid 
    function validScore(){
        let score1 = parseInt(document.getElementById('teamOneScore').value);
        let score2 = parseInt(document.getElementById('teamTwoScore').value);
        let team1Score = document.getElementById('teamOneScore');
        let team2Score = document.getElementById('teamTwoScore');
        let team1Msg = document.getElementById('scoreWError');
        let team2Msg = document.getElementById('scoreLError');

        if(isInteger(score1) && isInteger(score2)){
            team1Score.classList.add('is-success')
            team1Msg.classList.add('has-text-success')
            team1Msg.textContent = 'You must be Rizzlightyear';
            team2Score.classList.add('is-success')
            team2Msg.classList.add('has-text-success')
            team2Msg.textContent = 'To inrizzity and beyond';

            return true;
        } else {
            if(!score1.isInteger()){
                team1Score.classList.add('is-danger')
                team1Msg.classList.add('has-text-danger')
                team1Msg.textContent = 'Invalid Input, Rizz has failed';
                return false;
            }
            if(!score2.isInteger()){
                team2Score.classList.add('is-danger')
                team2Msg.classList.add('has-text-danger')
                team2Msg.textContent = 'Invalid Input, Rizz has failed';
                return false;
            }

        }


        
    }
//calls all valid functions in one place to make sure they are all true at the same time
    function isValid(){
        if(validName() && validEmail() && validTeams() && validType() && validDate() && validScore()){
            return true;
        } else {
            return false;
        }
        
    }
//checks whether the number is between 0-200, highest NFL game is 72 points, no need for more numbers
    function isInteger(number){
        valid = false;
        numbers.forEach(num => {
            if(num == number){
                valid = true;
            }
        });
        return valid;
    }
//gives the result of the match in the form of (winner-loser) or tie
    function Result(){
        let score1 = parseInt(document.getElementById('teamOneScore').value);
        let score2 = parseInt(document.getElementById('teamTwoScore').value);
        console.log(score1)
        console.log(score2)
        let team1 = document.getElementById('team1').value
        let team2 = document.getElementById('team2').value
        console.log(team1)
        console.log(team2)
        let team1Score = document.getElementById('teamOneScore');
        let team2Score = document.getElementById('teamTwoScore');
        let team1Msg = document.getElementById('scoreWError');
        let team2Msg = document.getElementById('scoreLError');
        
        let winner;
        let loser;
        let outcome;

        if(isInteger(score1) && isInteger(score2)){
            team1Score.classList.add('is-success')
            team1Msg.classList.add('has-text-success')
            team1Msg.textContent = 'You must be Rizzlightyear';
            team2Score.classList.add('is-success')
            team2Msg.classList.add('has-text-success')
            team2Msg.textContent = 'To inrizzity and beyond';
        if(score1 > score2){
            winner = team1
            loser = team2
            outcome = winner + '-' + loser;
            
        } else if (score1 < score2){
            winner = team2
            loser = team1
            outcome = winner + '-' + loser;
        } else{

            outcome = 'tie';
        }
        } else {
            if(!score1.isInteger()){
                team1Score.classList.add('is-danger')
                team1Msg.classList.add('has-text-danger')
                team1Msg.textContent = 'Invalid Input, Rizz has failed';
            }
            if(!score2.isInteger()){
                team2Score.classList.add('is-danger')
                team2Msg.classList.add('has-text-danger')
                team2Msg.textContent = 'Invalid Input, Rizz has failed';
            }

        }


        
        return outcome;

    }
//uses to result and the date entered to create a game and send it to the local storage to be added to the teams page
    function createGame(date){
        let teams = JSON.parse(localStorage.getItem('allTeams'));
        let score1 = parseInt(document.getElementById('teamOneScore').value);
        let score2 = parseInt(document.getElementById('teamTwoScore').value);
        let type1 = (document.getElementById('teamOneType').value).toUpperCase()
        let type2 = (document.getElementById('teamTwoType').value).toUpperCase()
        let teamValue = (document.getElementById('team1').value).toUpperCase()
        let team = teamValue.substring(teamValue.lastIndexOf(' ') +1)
        let oppValue = (document.getElementById('team2').value).toUpperCase()
        let opp = oppValue.substring(oppValue.lastIndexOf(' ') +1)
        let result = Result().toLowerCase();
        let outcomeT;
        let winner;
        let loser;
        let end = result.length;
        let winnerGame = {};
        let loserGame = {};
        let updatedTeamOne = {};
        let updatedTeamTwo = {};
        let team1;
        let team2;


        let foundTeam = false;
        let foundOpp = false;
        

        teams.forEach(obj => { // goes through all the teams and checks if it is the team submitted

            let teamFromArray = (obj.TEAM).toUpperCase();
            
            if(teamFromArray == team){
                foundTeam = true;
                team1 = obj
            }
            if(teamFromArray == opp){
                foundOpp = true;
                team2 = obj
            }
        });

        console.log(team1)
        console.log(team2)

        if(result.substring(0, result.indexOf('-')) == 'TIE'){
            outcomeT = 'TIE'
        } else {
            winner = result.substring(0, result.indexOf('-'))
            loser = result.substring(result.indexOf('-')+1, end)
        }

        updatedTeamOne = team1
        updatedTeamTwo = team2
   
        
        if(outcomeT == 'TIE'){
            console.log(team1)
            console.log(team2)
            winnerGame = {
                opp: opp,
                status: 'TIE',
                score: score1,
                oppScore: score2,
                type: type1,
                date: date
            }

            updatedTeamOne['T']++


            loserGame = {
                opp: team,
                status: 'TIE',
                score: score2,
                oppScore: score1,
                type: type2,
                date: date
            }


            updatedTeamTwo['T']++

        } else if(winner.toUpperCase() == teamValue){
            console.log(team1)
            console.log(team2)
            winnerGame = {
                opp: opp,
                status: 'WIN',
                score: score1,
                oppScore: score2,
                type: type1,
                date: date
            }


            updatedTeamOne['W']++

            

            loserGame = {
                opp: team,
                status: 'LOSS',
                score: score2,
                oppScore: score1,
                type: type2,
                date: date
            }

            updatedTeamTwo['L']++
      

        } else {
            console.log(team1)
            console.log(team2)
            loserGame = {
                opp: team,
                status: 'WIN',
                score: score2,
                oppScore: score1,
                type: type2,
                date: date
            }

            updatedTeamTwo['W']++


                winnerGame = {
                opp: opp,
                status: 'LOSS',
                score: score1,
                oppScore: score2,
                type: type1,
                date: date 
            }


            updatedTeamOne['L']++

            
        }

        updatedTeamOne['WP'] = (parseInt(updatedTeamOne['W'])/(parseInt(updatedTeamOne['W']) + parseInt(updatedTeamOne['L']) + parseInt(updatedTeamOne['T']))).toFixed(3);
        updatedTeamTwo['WP'] = (parseInt(updatedTeamTwo['W'])/(parseInt(updatedTeamTwo['W']) + parseInt(updatedTeamTwo['L']) + parseInt(updatedTeamTwo['T']))).toFixed(3);

        let team1ID = updatedTeamOne['id'] - 1
        let team2ID = updatedTeamTwo['id'] - 1
        console.log(team1ID)
        console.log(team2ID)
        team1['GAMES'].push(winnerGame)
        team2['GAMES'].push(loserGame)
        teams.splice(team1ID,1,updatedTeamOne)
        teams.splice(team2ID,1,updatedTeamTwo)
        newTeams = teams
        localStorage.setItem('allTeams', JSON.stringify(newTeams)); //into all teams and the corresponding group 
        console.log(allTeams)
        console.log(teams)
        // yes was 9 before, started at 8 but I havet reset storage yet

        if(team1.id> 0 && team1.id<5){
            group = JSON.parse(localStorage['NFCEast'])
            group.splice(team1ID,1,updatedTeamOne)
            NFCEast = group
            localStorage.setItem('NFCEast', JSON.stringify(NFCEast))
            NFCstartUp()
        } else if(team1.id> 4 && team1.id<9){
            group = JSON.parse(localStorage['NFCNorth'])
            group.splice(team1ID,1,updatedTeamOne)
            NFCNorth = group
            localStorage.setItem('NFCNorth', JSON.stringify(NFCNorth))
            NFCstartUp() //I have it redo the startup for that page when the data is changed, but that aint working, this start up is only the create games
        } else if(team1.id> 8 && team1.id<13){
            group = JSON.parse(localStorage['NFCSouth'])
            group.splice(team1ID,1,updatedTeamOne)
            NFCSouth = group
            localStorage.setItem('NFCSouth', JSON.stringify(NFCSouth))
            NFCstartUp()
        } else if(team1.id> 12 && team1.id<17){
            group = JSON.parse(localStorage['NFCWest'])
            group.splice(team1ID,1,updatedTeamOne)
            NFCWest = group
            localStorage.setItem('NFCWest', JSON.stringify(NFCWest))
            NFCstartUp()
        } else if(team1.id> 16 && team1.id<21){
            group = JSON.parse(localStorage['AFCEast'])
            group.splice(team1ID,1,updatedTeamOne)
            AFCEast = group
            localStorage.setItem('AFCEast', JSON.stringify(AFCEast))
            AFCstartUp()
        } else if(team1.id> 20 && team1.id<25){
            group = JSON.parse(localStorage['AFCNorth'])
            group.splice(team1ID,1,updatedTeamOne)
            AFCNorth = group
            localStorage.setItem('AFCNorth', JSON.stringify(AFCNorth))
            AFCstartUp()
        } else if(team1.id> 24 && team1.id<29){
            group = JSON.parse(localStorage['AFCSouth'])
            group.splice(team1ID,1,updatedTeamOne)
            AFCSouth = group
            localStorage.setItem('AFCSouth', JSON.stringify(AFCSouth))
            AFCstartUp()
        } else {
            group = JSON.parse(localStorage['AFCWest'])
            group.splice(team1ID,1,updatedTeamOne)
            AFCWest = group
            localStorage.setItem('AFCWest', JSON.stringify(AFCWest))
            AFCstartUp()
        }

        if(team2.id> 0 && team2.id<5){
            group = JSON.parse(localStorage['NFCEast'])
            group.splice(team2ID,1,updatedTeamTwo)
            NFCEast = group
            localStorage.setItem('NFCEast', JSON.stringify(NFCEast))
            NFCstartUp()
        } else if(team2.id> 4 && team2.id<9){
            group = JSON.parse(localStorage['NFCNorth'])
            group.splice(team2ID,1,updatedTeamTwo)
            NFCNorth = group
            localStorage.setItem('NFCNorth', JSON.stringify(NFCNorth))
            NFCstartUp()
        } else if(team2.id> 8 && team2.id<13){
            group = JSON.parse(localStorage['NFCSouth'])
            group.splice(team2ID,1,updatedTeamTwo)
            NFCSouth = group
            localStorage.setItem('NFCSouth', JSON.stringify(NFCSouth))
            NFCstartUp()
        }  else if (team2.id>12 && team2.id < 17){
            group = JSON.parse(localStorage['NFCWest'])
            group.splice(team2ID,1,updatedTeamTwo)
            NFCWest = group
            localStorage.setItem('NFCWest', JSON.stringify(NFCWest))
            NFCstartUp()
        }   else if(team2.id> 16 && team2.id<21){
            group = JSON.parse(localStorage['AFCEast'])
            group.splice(team2ID,1,updatedTeamTwo)
            AFCEast = group
            localStorage.setItem('AFCEast', JSON.stringify(AFCEast))
            AFCstartUp()
     
        } else if(team2.id> 20 && team2.id<25){
            group = JSON.parse(localStorage['AFCNorth'])
            group.splice(team2ID,1,updatedTeamTwo)
            AFCNorth = group
            localStorage.setItem('AFCNorth', JSON.stringify(AFCNorth))
            AFCstartUp()
            
        } else if(team2.id> 24 && team2.id<29){
            group = JSON.parse(localStorage['AFCSouth'])
            group.splice(team2ID,1,updatedTeamTwo)
            AFCSouth = group
            localStorage.setItem('AFCSouth', JSON.stringify(AFCSouth))
            AFCstartUp()
            
        } else {
            group = JSON.parse(localStorage['AFCWest'])
            group.splice(team2ID,1,updatedTeamTwo)
            AFCWest = group
            localStorage.setItem('AFCWest', JSON.stringify(AFCWest))
            AFCstartUp()
        }
        
        
        

    }
//once the submit button is clicked, it uses the isValid command to make sure everything is correct, if so, it uses the createGame function to create the game
    function submit(){
        let error = document.getElementById('submitErr');
        if(isValid()){
            error.classList.remove('has-text-danger');
            error.textContent = '';
        date = getDate()
        createGame(date)
        } else {
            error.classList.add('has-text-danger')
            error.textContent = 'Please correct your rizz and try again'
        }
    } 

    
//pagination specifc variables
   let paginationLimit = 3;
   let currentPage = 1;
   let pageLink = document.querySelector('.pagination-list')

//creates the paginate button
   function createPaginationButton() {
    let team;
    let params = (new URL(document.location)).searchParams;
    teams = JSON.parse(localStorage.getItem('allTeams'));
    team = teams.filter(team => team.id == params.get('id'));
    let pageCount = Math.ceil(team[0].GAMES.length/paginationLimit);

    

    for(i=0; i<pageCount; i++){
        let li = document.createElement('li');
        let a = document.createElement('a');
        a.classList.add('pagination-link');
        a.addEventListener('click', ()=>{setCurrentPage(Number(a.textContent))})
        a.textContent = i+1;
        pageLink.appendChild(li);
        li.appendChild(a)
        
    }
    activePage(1);
   }
//adds what happens when the button is clicked
   function eventAdd(){
    buttons = document.querySelectorAll('.pagination-link')

    buttons.forEach(element => {
        page = element.textContent
        element.addEventListener('click', function() {setCurrentPage(page)})
        element.classList.add('paginate-color')
    });

   }
//sets the current page when the button is click
   function setCurrentPage(pageNum){
    console.log(pageNum)
    let prevRange = (pageNum-1)*paginationLimit;
    let currRange = pageNum*paginationLimit;

    allGames = document.querySelectorAll('.card')

    allGames.forEach((game, index) => {
        game.classList.add('hidden')
        if(index >= prevRange && index < currRange){
            game.classList.remove('hidden')
        }
    });
   }
//functionality of the hamburger menu (take from bulma)
   document.addEventListener('DOMContentLoaded', () => {

    // Get all "navbar-burger" elements
    const $navbarBurgers = Array.prototype.slice.call(document.querySelectorAll('.navbar-burger'), 0);
  
    // Add a click event on each of them
    $navbarBurgers.forEach( el => {
      el.addEventListener('click', () => {
  
        // Get the target from the "data-target" attribute
        const target = el.dataset.target;
        const $target = document.getElementById(target);
  
        // Toggle the "is-active" class on both the "navbar-burger" and the "navbar-menu"
        el.classList.toggle('is-active');
        $target.classList.toggle('is-active');
  
      });
    });
  
  });

  

   
