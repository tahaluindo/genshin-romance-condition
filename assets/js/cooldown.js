$('button.cooldown').click(function(){
    var btn = $(this);
    btn.prop('disabled', true);
    setTimeout(function(){
      btn.prop('disabled', false);
    },5000);
  });