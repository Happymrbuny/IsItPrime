'use strict';

function setResult(result) {
    document.querySelector('.result').textContent = result;
}

document.querySelector('.check').addEventListener('click', function () {
    let i = 0;
    let testValue = document.querySelector('.number').value;
    let prime = true;
    if (!testValue) {
        setResult('No value entered.');
    } else if (testValue < 1 || testValue > 100) {
        setResult('Please pick a number between 1 and 100.');
    } else {
        while (i < testValue) {
            if (i === 1) {
                i++;
                continue;
            } else if (testValue % i === 0) {
                prime = false;
                break;
            }
            i++;
        }
        setResult(
            prime
                ? `${testValue} is prime.`
                : `${testValue} is not prime. (divisible by ${i})`
        );
    }
});
