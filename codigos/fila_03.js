function xpto() {
    console.log("Começo XPTO");
    setTimeout(()=>{
        console.log("Mensagem 1");
    }, 100);
    setTimeout(()=>{
        console.log("Mensagem 2");
    }, 50);
    console.log("Final XPTO");
}

xpto();