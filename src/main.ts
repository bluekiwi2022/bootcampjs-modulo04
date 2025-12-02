let turno = 1;

const btnAddTurno = document.getElementById("siguiente");
const btnRestarTurno = document.getElementById("anterior");
const btnResetTurno = document.getElementById("reset");
const btnCambioValor = document.getElementById("cambiar");

if (
  btnAddTurno !== null &&
  btnAddTurno !== undefined &&
  btnAddTurno instanceof HTMLButtonElement
) {
  btnAddTurno.addEventListener("click", () => {
    turno++;
    const mostrarTurno = document.getElementById("numero_turno");

    if (
      mostrarTurno !== null &&
      mostrarTurno !== undefined &&
      mostrarTurno instanceof HTMLHeadingElement
    ) {
      mostrarTurno.textContent = turno.toString().padStart(2, "0");
    }
  });
} else {
  console.error("error!!");
}

if (
  btnRestarTurno !== null &&
  btnRestarTurno !== undefined &&
  btnRestarTurno instanceof HTMLButtonElement
) {
  btnRestarTurno.addEventListener("click", () => {
    turno--;
    const mostrarTurno = document.getElementById("numero_turno");

    if (
      mostrarTurno !== null &&
      mostrarTurno !== undefined &&
      mostrarTurno instanceof HTMLHeadingElement
    ) {
      mostrarTurno.textContent = turno.toString().padStart(2, "0");
    }
  });
} else {
  console.error("error!!");
}

if (
  btnResetTurno !== null &&
  btnResetTurno !== undefined &&
  btnResetTurno instanceof HTMLButtonElement
) {
  btnResetTurno.addEventListener("click", () => {
    turno = 0;
    const mostrarTurno = document.getElementById("numero_turno");

    if (
      mostrarTurno !== null &&
      mostrarTurno !== undefined &&
      mostrarTurno instanceof HTMLHeadingElement
    ) {
      mostrarTurno.textContent = turno.toString().padStart(2, "0");
    }
  });
} else {
  console.error("error!!");
}

if (
  btnCambioValor !== null &&
  btnCambioValor !== undefined &&
  btnCambioValor instanceof HTMLButtonElement
) {
  btnCambioValor.addEventListener("click", () => {
    const cambiarValor = document.getElementById(
      "nuevoValor"
    ) as HTMLInputElement;

    turno = Number(cambiarValor.value);

    const mostrarTurno = document.getElementById("numero_turno");

    if (
      mostrarTurno !== null &&
      mostrarTurno !== undefined &&
      mostrarTurno instanceof HTMLHeadingElement
    ) {
      mostrarTurno.textContent = turno.toString().padStart(2, "0");
    }
  });
} else {
  console.error("error!!");
}
