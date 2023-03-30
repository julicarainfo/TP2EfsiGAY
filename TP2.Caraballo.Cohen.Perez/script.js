let btnAgregarTarea = document.getElementById("btnAgregarTarea");
let inputTarea = document.getElementById("texto");

let ulTareas = document.getElementById("tareas");
console.log(inputTarea);
let lista = [
    {
        texto: "Hacer matemática",
        fechaYHoraCreado: new Date(),
        fechaYHoraTachado: null,
        estado: false,
    },
    {
        texto: "Hacer Efsi",
        fechaYHoraCreado: new Date(),
        fechaYHoraTachado: null,
        estado: false,
    },
    {
        texto: "Leer Lengua",
        fechaYHoraCreado: new Date(),
        fechaYHoraTachado: null,
        estado: false,
    }
]

console.log(lista);

agregarTarea = () =>{
    /*let div = createElement("div");
    div.id = "task";
    div.appendChild(inputTarea.value);
    console.log("divTareas")*/
    lista.push({texto : inputTarea.value , fechaYHoraCreado : new Date(), fechaYHoraTachado :  null, estado: false});
    mostrarLista();
}

btnAgregarTarea.onclick = () => {   
   if(!inputTarea.value.length){
      alert("completa todos los campos pedazo de termita asesina de alfajores")
   } else{
        agregarTarea()
   }
}
calcularFechaMasRapida = () =>{
   let tiempoDemora= null;
   let MaxTiemp=null;
}

mostrarLista = () =>{
        let checked ="";
        ulTareas.innerHTML = "";
        lista.forEach(tarea => {
            let checkbox = document.createElement("input");
            let unLi = document.createElement("li");
            if (tarea.estado) {
                unLi.style.textDecoration = "line-through";
                checkbox.checked="checked";
                lista.push({fechaYHoraTachado: new Date()})
            }
            checkbox.type = "checkbox";
            unLi.innerHTML = tarea.texto;
            unLi.onclick = () => {
                tarea.estado = true;
                unLi.style.textDecoration = "line-through";
            }
            unLi.appendChild(checkbox);
            ulTareas.appendChild(unLi);
        });
}

mostrarLista();