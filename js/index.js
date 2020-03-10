"use static";
$(document).ready(()=>{
    $('form').on('submit',(ev)=>{
      ev.preventDefault();
      const form = $('form').serializeArray();
      localStorage.setItem('nombre',form[0].value);
      localStorage.setItem('apellido',form[1].value);
      localStorage.setItem('email',form[2].value);
      localStorage.setItem('celular',form[3].value);
      localStorage.setItem('nombreFamiliar',form[4].value);
      localStorage.setItem('direccionFamiliar',form[5].value);
    });
});