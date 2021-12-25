function subtrair(...numeros){
    return numeros.reduce((acum, num)=> acum -= num);
};

module.exports = subtrair;