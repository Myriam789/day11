function check_route(url) {
fetch(url)
.then(response=> {
   if(response.ok) {
console.Log('tout va bien');
} else {
    console.log('Il y a un problème');
   }
})
.catch(erreur => {
  console.log('Il y a un probleme');
});

}

check_route('https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=12528')
