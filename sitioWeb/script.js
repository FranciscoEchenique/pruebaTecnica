let empleados = JSON.parse(localStorage.getItem("empleados")) || [
  {  
    nombre: "Francisco",
    apellido: "Echenique",
    estado: "0",
  },
  {
    nombre: "Juan",
    apellido: "Pérez",
    estado: "1"
  }
];

const empleadosContainer = document.querySelector(".empleados-container");

const empleadosActivosContainer = document.querySelector(".empleadosActivos-container");

const empleadosInactivosContainer = document.querySelector(".empleadosInactivos-container");

const labels = document.querySelectorAll(".formLabel")

const inputs = document.querySelectorAll(".formInput");

const formulario = document.getElementById("formulario");

const sectionFetch = document.querySelector(".section-fetch");

const actualizarListadoEmpleados = () => {
  empleadosContainer.innerHTML = "";

  empleados.forEach((empleado) => {
    empleadosContainer.innerHTML += `
    <div class="empleados">
        <h3 class="nombreApellido-empleado">${empleado.nombre} ${empleado.apellido}</h3>
        <p class="estado">${empleado.estado === "0" ? "Activo" : "Inactivo"}</p>
        <i class="fa fa-trash" aria-hidden="true"></i>
    </div>`;
  });

  const estados = document.querySelectorAll(".estado");

  estados.forEach(estado => {
      estado.textContent === "Activo" ? estado.classList.add("activo") : estado.classList.add("inactivo");
  })
  const botonesEliminar = document.querySelectorAll(".fa.fa-trash");

  botonesEliminar.forEach(boton => {
  boton.addEventListener("click", () => {
    const [nombre, apellido] = boton.previousElementSibling.previousElementSibling.textContent.split(" ");

    const nuevaListaEmpleados = empleados.filter(empleado => empleado.nombre !==  nombre || empleado.apellido !== apellido);
    empleados = nuevaListaEmpleados
    localStorage.setItem("empleados", JSON.stringify(nuevaListaEmpleados));
    actualizarListadoEmpleados();
    actualizarListadoActividadEmpleados();
  })
});

};

const actualizarListadoActividadEmpleados = () => {
  empleadosActivosContainer.innerHTML = "";
  empleadosInactivosContainer.innerHTML = "";

  empleados.forEach(empleado => {
    if(empleado.estado === "0"){
    empleadosActivosContainer.innerHTML += `
      <div class="actividadEmpleados">
          <h3>${empleado.nombre} ${empleado.apellido}</h3>
      </div>` 
    } else {
      empleadosInactivosContainer.innerHTML += `
      <div class="actividadEmpleados">
          <h3>${empleado.nombre} ${empleado.apellido}</h3>
      </div>` 
    }
  });
};

const agregarEmpleado = (empleado) => {
  empleados.push({
    ...empleado,
  });

  localStorage.setItem("empleados", JSON.stringify(empleados));
};

formulario.addEventListener("submit", (event) => {
  event.preventDefault();
  const formData = new FormData(formulario);

  const nombre = formData.get("nombre");
  const apellido = formData.get("apellido");
  const estado = formData.get("estado");

  if(nombre && apellido) {
    agregarEmpleado({ nombre, apellido, estado });
  } else {
    inputs.forEach(input => {
      if(!input.value) {
        input.style.borderBottom = "1px solid red";
        input.nextElementSibling.nextElementSibling.style.display = "block";
      }
    });
    return;
  }

  actualizarListadoEmpleados();
  actualizarListadoActividadEmpleados();

  inputs.forEach(input => input.value = "");

});

inputs.forEach(input => {
  input.addEventListener("focus", () => {
    input.nextSibling.nextSibling.nextSibling.nextSibling.style.display = "none";
    input.style.borderBottom = "1px solid #5757577e";
  });
});

const fetchingImagenes = async () => {
  try {
    const response = await fetch("https://randomuser.me/api/?results=9");
    const { results } = await response.json();

    results.forEach(e => {
      sectionFetch.innerHTML += `
        <div class="userFetch-container">
          <h3>${e.name.first} ${e.name.last}</h3>
          <img src="${e.picture.large}" alt="${e.name.first}"/>
          <p>${e.email}</p>
        </div>
      `
    })

  } catch (error){
    console.log('Error:', error);
  }
}

inputs.forEach(input => {
  input.addEventListener("input", () => {
     input.value = input.value.replace(/\s/g, ''); // Elimina todos los espacios en blanco para evitar errores al borrar.
  })
})

fetchingImagenes();

actualizarListadoEmpleados();
actualizarListadoActividadEmpleados();
