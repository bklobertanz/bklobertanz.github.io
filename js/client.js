'use strict';

window.addEventListener('load',()=>{
    
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
        
    });

    //Tabla

    $('table tbody tr td').on('click',()=>{
       // identificar sobre cual td se hizo click
    });
});

