function foo() {
    console.log("começo FOO");
    //metodo foo
    console.log("fim FOO");
}

function xyz() {
    console.log("começo XYZ");
    foo();
    console.log("fim XYZ");
}

function abc() {
    console.log("começo ABC");
    xyz();
    console.log("fim ABC");
}

abc();