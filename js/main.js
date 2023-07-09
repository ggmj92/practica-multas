
const form = document.querySelector("#form");
const fragment = document.createDocumentFragment();

const data = [
    {nombre: "Martín", appellido: "Gutierrez", marca: "Ford", modelo: "Fiesta", matricula: "2345EXL", multas: 4},
    {nombre: "Victoria", appellido: "Poblete", marca: "Seat", modelo: "Ibiza", matricula: "1867LWC", multas: 0},
    {nombre: "Andrea", appellido: "Hevia", marca: "Nissan", modelo: "Note", matricula: "2289TVB", multas: 3},
    {nombre: "Gabriella", appellido: "Romero", marca: "Kia", modelo: "Picanto", matricula: "1201RVV", multas: 2},
    {nombre: "Aurelio", appellido: "Pérez", marca: "Toyota", modelo: "Corolla", matricula: "4141FMV", multas: 1},
    {nombre: "Daniel", appellido: "López", marca: "BMW", modelo: "325i", matricula: "3322TTB", multas: 0},
    {nombre: "Jorge", appellido: "Martínez", marca: "Renault", modelo: "Megane", matricula: "4876FDE", multas: 0},
    {nombre: "Claudia", appellido: "Álvarez", marca: "Citröen", modelo: "C3", matricula: "1147DDS", multas: 2},
    {nombre: "Cristian", appellido: "Muñoz", marca: "Suzuki", modelo: "Swift", matricula: "9098ESW", multas: 4},
    {nombre: "Elena", appellido: "Gómez", marca: "Subaru", modelo: "Impreza", matricula: "4342GAB", multas: 2},
    
];

form.addEventListener('submit', (ev) => {
    ev.preventDefault();
    validarFormulario();
   // pintarTablas();

});


const regExp = /^\d{4}[a-zA-Z]{3}$/;
const text = "1234abc";

if (regExp.test(text)) {
    console.log("Valid format");
} else {
    console.log("Invalid format");
}

//Array de objetos




const validarFormulario = () => {
    const matriculaUsuario = document.querySelector("#matricula").value;
    const matriculas = JSON.parse(localStorage.getItem('dataCoches'));

    if(!regExp.test(matriculaUsuario)){
        alert("Formato Matrícula Inválido: Introducir 4 números seguidos por 3 letras")
        return;
    }

    if (!matriculaUsuario) {
        alert('MATRICULA REQUERIDA')
        return;
    }
    let existe = false;
    matriculas.forEach((matricula)=>{
      if(matricula.matricula === matriculaUsuario && matricula.multas > 0){
        console.log('TIENE MULTAS -> PINTAR EN TABLA')
        alert('TIENE MULTAS')
        document.getElementById('bodyTabla').innerHTML += `<tr><td>${matricula.nombre}</td><td>${matricula.modelo}</td><td>${matricula.matricula}</td><td>${matricula.multas}</td></tr>`
      }
      if(matricula.matricula === matriculaUsuario && matricula.multas === 0){
        console.log('NO TIENE MULTAS -> MOSTRAR MENSAJE')
        alert('NO TIENE MULTAS')
      }
      if(matricula.matricula === matriculaUsuario){
        console.log('NO EXISTE -> MOSTRAR MENSAJE')
        existe = true;
      }
    })
    if(!existe){
        alert('NO EXISTE LA MATRICULA')
    }
}

// function checkMatricula(){
//     if(!matriculaCoche){
//         console.log('FORMATO ERRONEO -> MOSTRAR MENSAJE')
//     }
   
//     matriculas.forEach((matricula)=>{
//       if(matricula.matricula === matriculaUsuario && matricula.multas > 0){
//         console.log('TIENE MULTAS -> PINTAR EN TABLA')
//       }
//       if(matricula.matricula === matriculaUsuario && matricula.multas === 0){
//         console.log('NO TIENE MULTAS -> MOSTRAR MENSAJE')
//       }
//       if(matricula.matricula !== matriculaUsuario){
//         console.log('NO EXISTE -> MOSTRAR MENSAJE')
//       }
//     })
//   }
  

const pintarTablas = () => {
    const tabla = document.querySelector('#boxTabla');
    const cabezaTabla = document.querySelector('#cabezaTabla');
    const bodyTabla = document.querySelector("#bodyTabla")
    bodyTabla.innerHTML = "";
    data.forEach((item, index) => {

        const lineaTabla = document.createElement('tr');
        lineaTabla.classList.add("cabezaTabla")

        const th1 = document.createElement('td');
        th1.textContent = item.titulo;

        const th2 = document.createElement('td');
        th2.textContent = item.director;

        const th3 = document.createElement('td');
        th3.textContent = item.ano;

        const th4 = document.createElement('td');
        th4.textContent = item.genero;

        lineaTabla.append(th1, th2, th3, th4);
        fragment.append(lineaTabla);
    });
    bodyTabla.append(fragment);
};
// const arrayPropietarios = [
//     {id: 1, nombre: "Martín", appellido: "Gutierrez"},
//     {id: 2, nombre: "Victoria", appellido: "Poblete"},
//     {id: 3, nombre: "Andrea", appellido: "Hevia"},
//     {id: 4, nombre: "Gabriella", appellido: "Romero"},
//     {id: 5, nombre: "Aurelio", appellido: "Pérez"},
//     {id: 6, nombre: "Daniel", appellido: "López"},
//     {id: 7, nombre: "Jorge", appellido: "Martínez"},
//     {id: 8, nombre: "Claudia", appellido: "Álvarez"},
//     {id: 9, nombre: "Cristian", appellido: "Muñoz"},
//     {id: 10, nombre: "Elena", appellido: "Gómez"},
// ];

// const arrayCoches = [
//     {id: 1, marca: "Ford", modelo: "Fiesta", matricula: "2345EXL"},
//     {id: 2, marca: "Seat", modelo: "Ibiza", matricula: "1867LWC"},
//     {id: 3, marca: "Nissan", modelo: "Note", matricula: "2289TVB"},
//     {id: 4, marca: "Kia", modelo: "Picanto", matricula: "1201RVV"},
//     {id: 5, marca: "Toyota", modelo: "Corolla", matricula: "4141FMV"},
//     {id: 6, marca: "BMW", modelo: "325i", matricula: "3322TTB"},
//     {id: 7, marca: "Renault", modelo: "Megane", matricula: "4876FDE"},
//     {id: 8, marca: "Citröen", modelo: "C3", matricula: "1147DDS"},
//     {id: 9, marca: "Suzuki", modelo: "Swift", matricula: "9098ESW"},
//     {id: 10, marca: "Subaru", modelo: "Impreza", matricula: "4342GAB"}
// ];


// const multas = [
//     {id: 1, multas: 4},
//     {id: 2, multas: 0},
//     {id: 3, multas: 3},
//     {id: 4, multas: 2},
//     {id: 5, multas: 1},
//     {id: 6, multas: 0},
//     {id: 7, multas: 0},
//     {id: 8, multas: 2},
//     {id: 9, multas: 4},
//     {id: 10, multas: 2}
// ]


var jsonStr = JSON.stringify(data);
localStorage.setItem("dataCoches", jsonStr);

const matriculaCoche = data.matricula;

validarFormulario();
