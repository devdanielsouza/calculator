function calculos (tipo, valor) {
//Validação caso o operador venha primeiro.
if (document.getElementById('resultado').value === '') {
	 document.getElementById('resultado').value = ''
}else{

  //Indica as operações
    if (tipo === 'acao') {

       //limpeza da tela de resultado.
       if (valor === 'c') {
            document.getElementById('resultado').value = ''
       }
       //Concatenação com os operadores.
       if (valor === '.' || valor === '/' || valor === '*' || valor === '+' || valor === '-') {
            document.getElementById('resultado').value += valor
       }
       //Ação de fazer a operação desejada e obter o resultado.
       if (valor === '=') {
            var result = eval(document.getElementById('resultado').value)
            document.getElementById('resultado').value = result
       }
    }
}
  //Fim das operações

    //concatenação de um valor com o outro.
    if (tipo === 'valor'){
        document.getElementById('resultado').value += valor
      }
    }