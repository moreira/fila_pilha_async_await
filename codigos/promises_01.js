function xpto() {
    console.log("Começo XPTO");
    Promise.resolve(true).then(()=>{
        console.log("Mensagem 1");
    });
    Promise.resolve(true).then(()=>{
        console.log("Mensagem 2");
    });
    console.log("Final XPTO");
}

xpto();