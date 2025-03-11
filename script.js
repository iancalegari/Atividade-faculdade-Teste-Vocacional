function calcularResultado() {
  const respostas = document.querySelectorAll('input[type="radio"]:checked'); // pegando as alternativas marcadas
  let pontuacao = [0, 0, 0, 0, 0];

  // Calculo necessário para verificar e não conseguir responder vazio, caso nada esteja selecionado
  const perguntas = document.querySelectorAll('input[type="radio"]');
  const totalPerguntas = perguntas.length / 5; // Pegando o total de perguntas e dividindo por 5, por ser 5 alternativas por pergunta
  if (respostas.length !== totalPerguntas) {
    // Se o numero de respostas for diferente do de perguntas, não da pra responder
    document.getElementById("resultado").innerText = "Complete o teste antes";
    return;
  }

  respostas.forEach((resposta) => {
    const valor = parseInt(resposta.value);
    if (valor) {
      pontuacao[valor - 1]++; // Pegando a pontuação e comparando com os values no html
    }
  });

  const maxIndex = pontuacao.indexOf(Math.max(...pontuacao)); // Pegando o maior valor para o calculo da moda e exibir o resultado
  let resultado;

  switch (maxIndex) {
    case 0:
      resultado =
        "Analisando suas respostas, o que mais combina com você é... Area da Saúde";
      break;
    case 1:
      resultado =
        "Analisando suas respostas, o que mais combina com você é... Direito";
      break;
    case 2:
      resultado =
        "Analisando suas respostas, o que mais combina com você é... Engenharia de Produção";
      break;
    case 3:
      resultado =
        "Analisando suas respostas, o que mais combina com você é... TI";
      break;
    case 4:
      resultado =
        "Analisando suas respostas, o que mais combina com você é... Engenharia Elétrica";
      break;
    default:
      resultado = "Ops, não consegui uma resposta para você";
  }

  document.getElementById("resultado").innerText = resultado;
}
