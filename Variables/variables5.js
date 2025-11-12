for (let i = 0; i < 1; i++) {
    let num = 10;          
    var str = "Hello world"; 
    const truth = true;    
}

try {
    console.log(num);  // Произойдет ошибка так как имеет блочную область видимости
}
catch(err) {
    console.log(`Error with let variable ${err}`);
}

try {
    console.log(str);  // Имеет функциональную область видимости и значение будет выведено
}
catch(err) {
    console.log(`Error with var variable ${err}`);
}

try {
    console.log(truth); 
}
catch(err) {
    console.log(`Error with const variable ${err}`); // Произойдет ошибка так как имеет блочную область видимости
}


