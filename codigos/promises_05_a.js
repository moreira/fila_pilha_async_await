const URL_TO_FETCH = "https://swapi.dev/api/films/1/";

function xpto() {
  return fetch(URL_TO_FETCH).then(resp => {
    return resp.json().then((jsonResp => {
      console.log(jsonResp.title);
    }));
  });
}

xpto().then(()=>{
  console.log("fim");
});
