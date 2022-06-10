
$(window).on('load', function() {
    setTimeout(function(){ 
        $('.preloader').addClass('preloader-deactivate');
    }, 2000);
});
        const menuToggle = document.querySelector('.menuToggle');
        const navigation = document.querySelector('.navigation');
        menuToggle.onclick = function(){
          navigation.classList.toggle('active');
        }
        var checkbox_toggle = document.getElementById('light-dark');
        checkbox_toggle.addEventListener('change', function(){
            document.body.classList.toggle('dark');
        });
