inpDec = document.getElementById("inp-dec");
inpOct = document.getElementById("inp-oct");
inpHex = document.getElementById("inp-hex");
inpBin = document.getElementById("inp-bin");

function execDec() {
  input = inpDec.value;
  inpOct.value = converter(input, 10, 8);
  inpHex.value = converter(input, 10, 16);
  inpBin.value = converter(input, 10, 2);
}

function execOct() {
  input = inpOct.value;
  inpDec.value = converter(input, 8, 10);
  inpHex.value = converter(input, 8, 16);
  inpBin.value = converter(input, 8, 2);
}

function execHex() {
  input = inpHex.value;
  inpDec.value = converter(input, 16, 10);
  inpOct.value = converter(input, 16, 8);
  inpBin.value = converter(input, 16, 2);
}

function execBin() {
  input = inpBin.value;
  inpDec.value = converter(input, 2, 10);
  inpOct.value = converter(input, 2, 8);
  inpHex.value = converter(input, 2, 16);
}

function converter(input, form, to) {
  convert = parseInt(input, form).toString(to);

  if (convert == "NaN") {
    convert = "";
  }
  return convert;
}
