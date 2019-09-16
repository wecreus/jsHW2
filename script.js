let roles;

function compile() {
    //default value of roles, this allows us to change roles while we compile our result,
    //and still have brand new roles array every time we call this function
    roles = [
        "Городничий",
        "Аммос Федорович",
        "Лука Лукич",
        "Почтмейстер",
        "Бобчинский",
        "Добчинский",
        "Квартальный",
        "Частный пристав",
        "Анна Андреевна",
        "Марья Антоновна",
        "Артемий Филиппович"
    ];

    // creating object based on roles
    for (let i = 0; i < roles.length; i++) {
        roles[i] = { name: roles[i], linesIndex: [], lines: [] };
    }

    let text = document.querySelector(".textArea").value;

    if (text) {
        //finding every line of every role
        for (let i = roles.length - 1; i >= 0; i--) {
            let myRegex = new RegExp(roles[i].name + "( \\(.+\\))?\\..+", "g");
            let match;
            while ((match = myRegex.exec(text)) != null) {
                roles[i].linesIndex.push(match.index);
                let myRegex2 = new RegExp(roles[i].name + "( \\(.+\\))\\.","g"); // checking if there is brackets after name
                let match2;
                if((match2 = myRegex2.exec(match[0])) != null){
                    let temp = match[0];
                    temp = temp.slice(0, match2[0].length - 1) + temp.slice(match2[0].length, temp.length); // removing "." after brackets
                    roles[i].lines.push(temp.slice(roles[i].name.length + 1));
                } else {
                    roles[i].lines.push(match[0].slice(roles[i].name.length + 2));
                }


            }
            // deleting empty roles
            if(!(roles[i].linesIndex[0] || roles[i].linesIndex[0] === 0)){
                roles.splice(i, 1);
            }
        }
        // sorting array by the order they appear in text
        roles.sort(function (a, b) {
            return a.linesIndex[0] - b.linesIndex[0];
        });

        console.log(roles);
    }
}
