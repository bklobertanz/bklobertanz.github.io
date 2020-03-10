'use strict';
$(document).ready(()=>{
     //Compartamiento de los botones de los modals

     $('.btnConoceme').on('click',()=>{
        $('#modalConoceme').modal('show')
    });

    $('.btnSolVisita').on('click',()=>{
        $('#modalConoceme').modal('hide');
        $('#modalSolVisita').modal('show');
        
    });

    $('.btnConfirmarVisita').on('click',()=>{
        $('#modalSolVisita').modal('hide');
        $('#modalConfirmarVisita').modal('show');
        precioTotal();
        escribirModalResumen(localStorage.getItem('horasTotales'),localStorage.getItem('precioTotal'));
    });

    $('.btnDismiss').on('click',()=>{
        $('html, body').scrollTop(0);
        location.reload();
    })

    //Selección de horarios de cuidado
    let horarioTrabajo = []
    const precioCuidador = 3000;

    $('table tbody td').on('click',(ev)=>{

        // Identificando horario (hora y día de la semana) seleccionado
        const semana = ["Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado", "Domingo"];
        const td = ev.target;
        const tdIndex = td.cellIndex;
        const tr = td.parentNode;
        const th = tr.cells[0];
        const thText = th.firstChild.data;
        const horario = `${semana[tdIndex-1]} - ${thText}`;

        // Cambiar la celda de disponible a seleccionado
            if(!$(td).hasClass('ocupado'))
            {   
                $(td).addClass('ocupado');
                td.childNodes[0].data = 'Seleccionado';
                horarioTrabajo.push(horario);
            }
            else{
                $(td).removeClass('ocupado');
                td.childNodes[0].data = 'Disponible';
                popByIndex(horario,horarioTrabajo);
            }
            actualizarHorasPrecio(horarioTrabajo.length, precioCuidador*horarioTrabajo.length); 
    });

    
    function actualizarHorasPrecio(horas,precio){
        $('#horasSeleccionadas').text(`Horas seleccionadas para cuidado: ${horas}.`);

        $('#totalSeleccionado').text(`Total: $${precio}.`)
    }
    //Determinar precio total
    function precioTotal(){
        const horas = horarioTrabajo.length;
        localStorage.setItem('precioTotal', horas * precioCuidador);
        localStorage.setItem('horasTotales',horas);
    }

    function escribirModalResumen(horasTotales,precioTotal){

        let p1 = '<p>Nombre cuidador realizará los siguientes cuidados:</p>';
        var lista = '<ul>';
        horarioTrabajo.forEach(horario =>{
            lista+=`<li>${horario}</li>`;
        });
        lista+='</ul>';
        let p2 =`<p>Esto sería un total de $${precioTotal}, ya que nuestro cuidador trabajará un total de ${horasTotales} hora(s).<p>`;
        let p3 = `<p>El cuidador se presentará en ${localStorage.getItem('direccionFamiliar')} para cuidar a ${localStorage.getItem('nombreFamiliar')}.</p>`;
        let p4 = `<p>Gracias ${localStorage.getItem('nombre')} por confiar en nosotros!</p>`;
        $('#modalConfirmarVisita .modal-body').append(p1,lista,p2,p3,p4);
    }
    function popByIndex(element,array){
        let index = array.indexOf(element);
        array.splice(index,1);
    }
});
    
   
   

 
