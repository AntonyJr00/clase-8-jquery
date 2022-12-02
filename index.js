// const form = $("#form");

// let parrafo = document.createElement("p");
// form.append(parrafo);

let errores = [];
$("#email").on("input", function () {
  const email = $("#email").val();
  let expReg =
    /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/g;
  let emailOk = expReg.test(email);
  if (emailOk) {
    $("#email").css({ "background-color": "#0616" });
    errores[0] = "";
  } else if (email == "") {
    $("#email").css({ "background-color": "none" });
  } else {
    $("#email").css({ "background-color": "#f116" });
    errores[0] = "Error en el 'email'. ";
  }
});
$("#telefono").on("input", function () {
  //const telefono = $("#telefono");
  const telefono = $("#telefono").val();
  let expReg = /^9[0-9]{8}$/gm;
  let telOk = expReg.test(telefono);
  console.log(telOk);
  if (telOk) {
    $("#telefono").css({ "background-color": "#0616" });
    errores[1] = "";
  } else if (telefono == "") {
    $("#telefono").css({ "background-color": "none" });
  } else {
    $("#telefono").css({ "background-color": "#f116" });
    errores[1] = "Error en el 'telefono'. ";
  }
});
$("#button").click(function (e) {
  e.preventDefault();
  if (!errores.every((e) => e == "")) {
    $("#textitoj").after(
      $("<div>", {
        class: "d-flex my-3center",
      }).append(
        $("<div>", { class: "w-100" }).append(
          $("<p>", {
            class: "bg-danger text-white rounded p-3",
          }).text(errores.join(""))
        )
      )
    );
  } else {
    $("#textitoj").after(
      $("<div>", {
        class: "d-flex my-3",
      }).append(
        $("<div>", { class: "w-100" }).append(
          $("<p>", {
            class: "bg-success text-white rounded p-3",
          }).text("Todo ok")
        )
      )
    );
  }
});

// button.addEventListener("click", (e) => {
//   e.preventDefault();
//   console.log(errores);
//   if (!errores.every((e) => e == "")) {
//     parrafo.textContent = errores.join("");
//   } else {
//     parrafo.textContent = "Todo ok";
//   }
// });

$("#textitoj").before(
  $("<div>", {
    class: "d-flex my-3",
  }).append(
    $("<div>").append(
      $("<i>", {
        class: "bi bi-calendar-day text-primary fs-3",
      })
    ),

    $("<div>", {
      class: "col-10 mx-2",
    }).append(
      $("<input>", {
        type: "date",
        class: "form-control",
      })
    )
  )
);

$("#textitoj").before(
  $("<div>", {
    class: "d-flex my-3",
  }).append(
    $("<div>").append(
      $("<i>", {
        class: "bi bi-gender-ambiguous text-primary fs-3",
      })
    ),

    $("<div>", {
      class: "col-10 mx-2",
    }).append(
      $("<select>", {
        name: "Genero",
        class: "form-control",
      }).append(
        $("<option>", {
          text: "Hombre",
        }),
        $("<option>", {
          text: "Mujer",
        }),
        $("<option>", {
          text: "No Binario",
        })
      )
    )
  )
);
