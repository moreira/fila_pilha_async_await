const URL_TO_FETCH = "https://swapi.dev/api/films/1/";

async function xpto() {
  const resp = await fetch(URL_TO_FETCH);
  const jsonResp = await resp.json()
  console.log(jsonResp.title);
}

xpto().then(()=>{
  console.log("fim");
});
