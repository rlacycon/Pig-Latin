function pigLatinName(name) {
    var lowerCaseName = name.toLowerCase();
    var firstLetter = lowerCaseName[0];
    var restOfName = lowerCaseName.slice(1);
    
    var pigLatinName = restOfName + firstLetter + "ay";
    return pigLatinName[0].toUpperCase() + pigLatinName.slice(1);
}

function getName() {
    var firstName = document.getElementById('firstName').value;
    var lastName = document.getElementById('lastName').value;
    
    if(firstName !== '' && lastName !== '') {
        var pigLatinFirstName = pigLatinName(firstName);
        var pigLatinLastName = pigLatinName(lastName);

        var result = document.getElementById('result');
        result.textContent = 'Your pig latin name is ' + pigLatinFirstName + ' ' + pigLatinLastName + '.';
    } else {
        alert('something went wrong, enter both first and last name pls and thank you')
    }
}

var getPigName = document.getElementById('pigName');
getPigName.addEventListener('click', getName);