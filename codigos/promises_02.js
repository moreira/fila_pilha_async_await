function xpto() {
    console.log("Começo XPTO");
    Promise.resolve(true).then(()=>{
        console.log("Mensagem Promise");
    });
    setTimeout(()=>{
        console.log("Mensagem setTimeout");
    }, 0);
    console.log("Final XPTO");
}

xpto();