function multiplicar(...numeros){
    return numeros.reduce((acum, num)=> acum *= num);
};

module.exports = multiplicar;