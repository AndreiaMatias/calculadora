function somar(...numeros){
    return numeros.reduce((acum, num) => acum += num);
};

module.exports = somar;

