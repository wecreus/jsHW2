let roles = ["Городничий", "Аммос Федорович",
    "Лука Лукич", "Почтмейстер", "Бобчинский", "Добчинский",
    "Квартальный", "Частный пристав", "Анна Андреевна", "Артемий Филиппович", "Марья Антоновна"];

function compile(){
    //clearing arrays
    let text = document.querySelector(".textArea").value;
    for(let i = 0; i < roles.length; i++){
        roles[i].linesIndex = [];
        roles[i].lines = [];
    }
    if(text){
        let order = [];
        //finding every line of every role
        for(let i = 0; i < roles.length; i++){
            let myRegex = new RegExp(roles[i].name + "\..+", "g");
            let match;
            let firstIteration = true;
            while ((match = myRegex.exec(text)) != null) {
                if(firstIteration === true) {
                    order.push(i);
                    firstIteration = false;
                }
                roles[i].linesIndex.push(match.index);
                roles[i].lines.push(match[0].slice(roles[i].name.length + 2));
            }
        }

        console.log(order);
        console.log(roles);
    }


}

// creating objects based on array roles
for(let i = 0; i < roles.length; i++){
    roles[i] = {name: roles[i], linesIndex: [], lines: []};
}

