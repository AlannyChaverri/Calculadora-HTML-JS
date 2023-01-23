function init() {
  // alert("Welcome")
  var ope1;
  var oper2;
  var operador;

  const resultado = document.getElementById("resultado");
  const decimal = document.getElementById("decimal");
  const igual = document.getElementById("igual");
  const uno = document.getElementById("uno");
  const dos = document.getElementById("dos");
  const tres = document.getElementById("tres");
  const cuatro = document.getElementById("cuatro");
  const cinco = document.getElementById("cinco");
  const seis = document.getElementById("seis");
  const siete = document.getElementById("siete");
  const ocho = document.getElementById("ocho");
  const nueve = document.getElementById("nueve");
  const cero = document.getElementById("cero");
  var suma = document.getElementById("suma");
  var resta = document.getElementById("resta");
  var multiplicacion = document.getElementById("multiplicacion");
  var divicion = document.getElementById("divicion");
  var reset = document.getElementById("reset");
  var borrar = document.getElementById("borrar");

  // // eventos
  borrar.onclick = function (e) {
    resultado.textContent = resultado.textContent.slice(0, -1);
  };
  decimal.onclick = function (e) {
    resultado.textContent = resultado.textContent + ".";
  };
  uno.onclick = function (e) {
    resultado.textContent = resultado.textContent + "1";
  };
  dos.onclick = function (e) {
    resultado.textContent = resultado.textContent + "2";
  };
  tres.onclick = function (e) {
    resultado.textContent = resultado.textContent + "3";
  };
  cuatro.onclick = function (e) {
    resultado.textContent = resultado.textContent + "4";
  };
  cinco.onclick = function (e) {
    resultado.textContent = resultado.textContent + "5";
  };
  seis.onclick = function (e) {
    resultado.textContent = resultado.textContent + "6";
  };
  siete.onclick = function (e) {
    resultado.textContent = resultado.textContent + "7";
  };
  ocho.onclick = function (e) {
    resultado.textContent = resultado.textContent + "8";
  };
  nueve.onclick = function (e) {
    resultado.textContent = resultado.textContent + "9";
  };
  cero.onclick = function (e) {
    resultado.textContent = resultado.textContent + "0";
  };
  reset.onclick = function (e) {
    resetear();
  };
  suma.onclick = function (e) {
    ope1 = resultado.textContent;
    operador = "+";
    limpiar();
  };
  resta.onclick = function (e) {
    ope1 = resultado.textContent;
    operador = "-";
    limpiar();
  };
  multiplicacion.onclick = function (e) {
    ope1 = resultado.textContent;
    operador = "*";
    limpiar();
  };
  divicion.onclick = function (e) {
    ope1 = resultado.textContent;
    operador = "/";
    limpiar();
  };
  igual.onclick = function (e) {
    oper2 = resultado.textContent;
    resolver();
  };
  // metosdos
  function limpiar() {
    resultado.textContent = "";
  }
  function resetear() {
    resultado.textContent = "";
    ope1 = "0";
    oper2 = "0";
    operador = "";
  }
  function resolver() {
    var res;
    switch (operador) {
      case "+":
        res = parseFloat(ope1) + parseFloat(oper2);
        break;
      case "-":
        res = parseFloat(ope1) - parseFloat(oper2);
        break;
      case "*":
        res = parseFloat(ope1) * parseFloat(oper2);
        break;
      case "/":
        res = parseFloat(ope1) / parseFloat(oper2);
        break;

      default:
        break;
    }
    resetear();
    resultado.textContent = res;
  }
}
