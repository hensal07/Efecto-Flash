

         let  nosotros = $('#nosotros').offset().top,
                servicio = $('#servicio').offset().top,
                    trabajo = $('#trabajo').offset().top,
                        brouchure = $('#brouchure').offset().top;
                 
             
    
        window.addEventListener('resize', function(){
            let nosotros = $('#nosotros').offset().top,
                servicio = $('#servicio').offset().top,
                    trabajo = $('#trabajo').offset().top,
                        brouchure = $('#brouchure').offset().top;
                    
    });

    
        $('#enlace-inicio').on('click', function(e){
         e.preventDefault();
            $('html, body').animate({
                scrollTop:0
                    },600);
    });

        $('#enlace-nosotros').on('click', function(e){
         e.preventDefault();
            $('html, body').animate({
                scrollTop: nosotros-90
                    },600);
    });
    
        $('#enlace-servicio').on('click', function(e){
            e.preventDefault();
            $('html, body').animate({
            scrollTop: servicio-90
            },600);
    });
    
    
        $('#enlace-trabajo').on('click', function(e){
            e.preventDefault();
            $('html, body').animate({
            scrollTop: trabajo-90
            },600);
    });
    
    $('#enlace-brouchure').on('click', function(e){
        e.preventDefault();
        $('html, body').animate({
        scrollTop: brouchure-90
        },600);
});
        

