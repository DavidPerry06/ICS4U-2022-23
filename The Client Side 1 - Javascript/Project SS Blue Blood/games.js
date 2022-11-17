   const dataString = localStorage.getItem('teams');
   const teams = JSON.parse(dataString);
   let params = (new URL(document.location)).searchParams;
   const team = teams.filter(team => team.Id == params.get('id'));

   displayTeam()

function displayTeam(){
   document.querySelector('#test').textContent = team[0].Name;
}

displayGames();

function displayGames(){
   let section = document.querySelector('#container');
   team[0].games.foreach((gameData)=>{
      let div = document.createElement('div')
      div.setAttribute('class', 'card');
      let divContent = document.createElement('div');
      divContent.setAttribute('class', 'card-content')
      let divHeader = document.createElement('header');
      divHeader.setAttribute('class', 'card-header-title')
      let oppArr = teams.filter(team => team.id == gameData.opp)
      let opp = oppArr[0].name;
      divContent.textContent = opp;
      divHeader.textContent = "Date: " + gameData.day;

      section.appendChild(div)
      div.appendChild(divHeader)
      div.appendChild(divContent)
   })
}