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

const p_cidade3 = document.getElementById("p_cidade3");
const p_endereco3 = document.getElementById("p_endereco3");
const p_bairro3 = document.getElementById("p_bairro3");
const p_cep3 = document.getElementById("p_cep3");
const p_numero3 = document.getElementById("p_numero3");

const p_cidade4 = document.getElementById("p_cidade4");
const p_endereco4 = document.getElementById("p_endereco4");
const p_bairro4 = document.getElementById("p_bairro4");
const p_cep4 = document.getElementById("p_cep4");
const p_numero4 = document.getElementById("p_numero4");

const p_cidade5 = document.getElementById("p_cidade5");
const p_endereco5 = document.getElementById("p_endereco5");
const p_bairro5 = document.getElementById("p_bairro5");
const p_cep5 = document.getElementById("p_cep5");
const p_numero5 = document.getElementById("p_numero5");

const p_cidade6 = document.getElementById("p_cidade6");
const p_endereco6 = document.getElementById("p_endereco6");
const p_bairro6 = document.getElementById("p_bairro6");
const p_cep6 = document.getElementById("p_cep6");
const p_numero6 = document.getElementById("p_numero6");

const p_cidade7 = document.getElementById("p_cidade7");
const p_endereco7 = document.getElementById("p_endereco7");
const p_bairro7 = document.getElementById("p_bairro7");
const p_cep7 = document.getElementById("p_cep7");
const p_numero7 = document.getElementById("p_numero7");

const p_cidade8 = document.getElementById("p_cidade8");
const p_endereco8 = document.getElementById("p_endereco8");
const p_bairro8 = document.getElementById("p_bairro8");
const p_cep8 = document.getElementById("p_cep8");
const p_numero8 = document.getElementById("p_numero8");

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

    p_cidade3.innerHTML = dados.cidade3;
    p_endereco3.innerHTML = dados.endereco3;
    p_bairro3.innerHTML = dados.bairro3;
    p_cep3.innerHTML = dados.cep3;
    p_numero3.innerHTML = dados.numero3;

    p_cidade4.innerHTML = dados.cidade4;
    p_endereco4.innerHTML = dados.endereco4;
    p_bairro4.innerHTML = dados.bairro4;
    p_cep4.innerHTML = dados.cep4;
    p_numero4.innerHTML = dados.numero4;

    p_cidade5.innerHTML = dados.cidade5;
    p_endereco5.innerHTML = dados.endereco5;
    p_bairro5.innerHTML = dados.bairro5;
    p_cep5.innerHTML = dados.cep5;
    p_numero5.innerHTML = dados.numero5;

    p_cidade6.innerHTML = dados.cidade6;
    p_endereco6.innerHTML = dados.endereco6;
    p_bairro6.innerHTML = dados.bairro6;
    p_cep6.innerHTML = dados.cep6;
    p_numero6.innerHTML = dados.numero6;

    p_cidade7.innerHTML = dados.cidade7;
    p_endereco7.innerHTML = dados.endereco7;
    p_bairro7.innerHTML = dados.bairro7;
    p_cep7.innerHTML = dados.cep7;
    p_numero7.innerHTML = dados.numero7;

    p_cidade8.innerHTML = dados.cidade8;
    p_endereco8.innerHTML = dados.endereco8;
    p_bairro8.innerHTML = dados.bairro8;
    p_cep8.innerHTML = dados.cep8;
    p_numero8.innerHTML = dados.numero8;
  });
