let roles = ["Городничий", "Артемий Филиппович", "Аммос Федорович",
    "Лука Лукич", "Почтмейстер", "Бобчинский", "Добчинский",
    "Квартальный", "Частный пристав", "Анна Андреевна", "Марья Антоновна"];
let textAreaValue;

function compile(){
    textAreaValue = document.querySelector(".textArea").value;
    
}

// creating objects based on array roles
for(let i = 0; i < roles.length; i++){
    roles[i] = {name: roles[i], lines: []};
}


