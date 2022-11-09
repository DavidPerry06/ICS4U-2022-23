function start() {
   const dataString = localStorage.getItem('teams');
   const teams = JSON.parse(dataString);
   let params = (new URL(document.location)).searchParams;

   const team = teams.filter(team => team.Id == params.get('id'));

   document.querySelector('#test').textContent = team[0].Name;

   }
