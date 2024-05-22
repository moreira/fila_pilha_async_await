function xpto() {
    console.log("Começo XPTO");
    setTimeout(()=>{
        console.log("Mensagem 1");
    }, 50);
    setTimeout(()=>{
        console.log("Mensagem 2");
    }, 100);
    console.log("Final XPTO");
}

xpto();