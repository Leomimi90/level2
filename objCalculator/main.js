let calculator = {}
calculator.writeToDom = () => {
    $('.calc').click(function () {
        $('#display').val($('#display').val() + $(this).val());
    })
}

calculator.basicMathOperation = (...x) => {
    $('.ops').click(function () {
        $('#display').val($('#display').val() + $(this).val());
    });
    $('.equal').click(function () {
        $('#display').val(eval($('#display').val()))
    });
}

calculator.removeElement = () => {
    $('.clear').click(function () {
        $('#display').val('')
    });
    $('.Del').click(function () {
        popnum = $('#display').val();
        $('#display').val(popnum.substring(0, popnum.length - 1))
    });
}

calculator.writeToDom();
calculator.basicMathOperation();
calculator.removeElement();




