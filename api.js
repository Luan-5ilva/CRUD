const p_cidade = document.getElementById("p_cidade");
const p_endereco = document.getElementById("p_endereco");
const p_bairro = document.getElementById("p_bairro");
const p_cep = document.getElementById("p_cep");
const p_numero = document.getElementById("p_numero");

const p_cidade2 = document.getElementById("p_cidade2");
const p_endereco2 = document.getElementById("p_endereco2");
const p_bairro2 = document.getElementById("p_bairro2");
const p_cep2 = document.getElementById("p_cep2");
const p_numero2 = document.getElementById("p_numero2");

const endpoint =
  "https://7076ea10-f307-43cd-a9ce-5752f516c1e3-00-19x30ha1mhgit.riker.replit.dev/";
fetch(endpoint)
  .then((res) => res.json())
  .then((dados) => {
    console.log(dados);
    p_cidade.innerHTML = dados.cidade;
    p_endereco.innerHTML = dados.endereco;
    p_bairro.innerHTML = dados.bairro;
    p_cep.innerHTML = dados.cep;
    p_numero.innerHTML = dados.numero;

    p_cidade2.innerHTML = dados.cidade2;
    p_endereco2.innerHTML = dados.endereco2;
    p_bairro2.innerHTML = dados.bairro2;
    p_cep2.innerHTML = dados.cep2;
    p_numero2.innerHTML = dados.numero2;
  });
