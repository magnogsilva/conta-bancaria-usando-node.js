var banco = {
    conta: '00.000-1',
    saldo: 500.00,
    tipo: 'C. Poupança',
    agencia: '0001-2'
}

var numero_da_conta = function(){
    console.log('Conta: ' + banco.conta);
}

var buscar_saldo = function (){
    console.log('Saldo atual: R$' + banco.saldo.toFixed(2));
}

var deposito = function(dep){
    banco.saldo += dep;
}

var saque = function(sac){
    banco.saldo -= sac;
}

var readlineSync = require('readline-sync');
console.log('\nDados Bancários\n');
numero_da_conta();
buscar_saldo();
var v_deposito = readlineSync.question('\nQuanto quer Depositar? R$');
dep = parseFloat(v_deposito);
deposito(dep);
buscar_saldo();
var v_saque = readlineSync.question('\nQuanto quer Sacar? R$');
sac = parseFloat(v_saque);
saque(sac);
buscar_saldo();
