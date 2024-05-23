function xpto() {
  console.log("Começo XPTO");
  Promise.resolve(true).then(() => {
    console.log("Mensagem Promise");
  });
  console.log("Final XPTO");
}

xpto();