alunos = [
  { nome: "Pedro", nota: 6 },
  { nome: "Maria", nota: 8 },
  { nome: "João", nota: 4 },
];

function alunosAprovados(arr, media) {
  let aprovados = [];
  for (item of arr) {
    const { nome, nota } = item;
    if (nota >= media) {
      aprovados.push(nome);
    }
  }
  return aprovados;
}

//console.log(alunosAprovados(alunos, 5));
