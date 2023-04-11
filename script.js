let input = document.querySelector('.enter');
let nums = document.querySelectorAll('.num');
let result = document.querySelector('.result');
let clear = document.querySelector('.clear');
for (let num of nums) {
        num.addEventListener('click', function() {

            input.value += num.textContent;
        });
    };

clear.addEventListener('click', function() {
    input.value = ' ';
});    
result.addEventListener('click', function() {

    input.value = eval(input.value);
});
                                                                                                    id_rsa.pub                                                                                                         


