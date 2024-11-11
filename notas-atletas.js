// Função que calcula a média sem considerar a maior e a menor nota
function calcularMedia(atletas) {
    atletas.forEach(atleta => {
      // Ordena as notas do atleta em ordem crescente
      let notasOrdenadas = atleta.notas.sort((a, b) => a - b);
      
      // Elimina a menor e a maior nota
      let notasValidas = notasOrdenadas.slice(1, 4);
      
      // Calcula a média das notas válidas
      let somaNotas = notasValidas.reduce((soma, nota) => soma + nota, 0);
      let media = somaNotas / notasValidas.length;
  
      // Exibe o nome, as notas e a média do atleta
      console.log(`Atleta: ${atleta.nome}`);
      console.log(`Notas Obtidas: ${atleta.notas.join(', ')}`);
      console.log(`Média Válida: ${media}`);
      console.log('-------------------------');
    });
  }
  
  // Lista de atletas e suas notas
  let atletas = [
    {
      nome: "Cesar Abascal",
      notas: [10, 9.34, 8.42, 10, 7.88]
    },
    {
      nome: "Fernando Puntel",
      notas: [8, 10, 10, 7, 9.33]
    },
    {
      nome: "Daiane Jelinsky",
      notas: [7, 10, 9.5, 9.5, 8]
    },
    {
      nome: "Bruno Castro",
      notas: [10, 10, 10, 9, 9.5]
    }
  ];
  
  // Chama a função para calcular e exibir os resultados
  calcularMedia(atletas);
  