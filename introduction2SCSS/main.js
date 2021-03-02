$('#submit').click(function (e) {
    e.preventDefault();
    console.log('username: ' + $("#username").val() + '\n' + 'password: ' + $("#psw").val()
    );
})