$(function(){
    const [text, btn] = $('input, button');
    $(btn).on('click', function(){
        $.post('book.php', {
            text: $(text).val()
        }, function(){
            console.log('success...');
        })
    })
})
    
  
  
  
  
  
  
  

  
  
  
  // Enable pusher logging - don't include this in production
    Pusher.logToConsole = true;

    var pusher = new Pusher('2c1bfaa7922092be00bb', {
      cluster: 'ap2'
    });

    var channel = pusher.subscribe('app');
    //app
    
    channel.bind('on-click', function(data){
        $('#cible').append(data);

    })