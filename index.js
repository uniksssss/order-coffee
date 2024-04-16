document.addEventListener("DOMContentLoaded", function(){
    document.querySelector('[href="#openModal"]').addEventListener('click',function(){
      document.body.style.overflow = 'hidden';
    });
    document.querySelector('[href="#close"]').addEventListener('click',function(){
      document.body.style.overflow = 'visible';
      document.querySelector('#openModal').style.marginLeft = '0px';
    });
    document.getElementsByClassName('submit-button')[0].addEventListener('click', function() {
        document.body.style.overflow = 'hidden';
      });    
  });