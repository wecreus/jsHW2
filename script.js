let roles = ["Городничий", "Артемий Филиппович", "Аммос Федорович",
    "Лука Лукич", "Почтмейстер", "Бобчинский", "Добчинский",
    "Квартальный", "Частный пристав", "Анна Андреевна", "Марья Антоновна"];

function compile(){
    //clearing arrays
    for(let i = 0; i < roles.length; i++){
        roles[i].linesIndex = [];
        roles[i].lines = [];
    }
    let text = document.querySelector(".textArea").value;
    if(text){
        //finding every line of every role
        for(let i = 0; i < roles.length; i++){
            let myRegex = new RegExp(roles[i].name + "\..+", "g");
            let match;
            while ((match = myRegex.exec(text)) != null) {
                roles[i].linesIndex.push(match.index);
                roles[i].lines.push(match[0].slice(roles[i].name.length + 2));
            }
        }



        console.log(roles);
    }


}

// creating objects based on array roles
for(let i = 0; i < roles.length; i++){
    roles[i] = {name: roles[i], linesIndex: [], lines: []};
}

