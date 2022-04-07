$(function(){

    const [task, from, to, isDone, btn] = document.querySelectorAll('input');


    $(btn).on('click', function(){
        $.post('book.php', {
            task: task.value,
            from: from.value,
            to: to.value,
            isDone: isDone.value
        }, function(){
            console.log('success...');
        })

        task.value = from.value = to.value = isDone.value = '';
        task.focus();
        // focus task on submit
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
        $('.taskList').append(data);

    })