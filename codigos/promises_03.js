function xpto() {
  console.log("Começo XPTO");
  setTimeout(() => {
    console.log("Mensagem setTimeout");
  }, 0);
  Promise.resolve(true).then(() => {
    console.log("Mensagem Promise");
  });
  console.log("Final XPTO");
}

xpto();