let list = ["mele mele e arance mele", "arance e banane mele", "arance, banane e limoni"];


function formattingList(){
    list = list.join(' ').split(' ');
    list.forEach((el, ind) => {
        if(el === "e"){
            list.splice(ind, 1);
        }
    })
    list = list.join(' ').split('');
    
    list.forEach((el, ind) => {
        if(el === ","){
            list.splice(ind, 1);
        }
    })
    list = list.join('').split(' ');
    list.splice(list.length - 1, 0, 'e');

    list.forEach((el, ind) => {
        if(ind != (list.length - 1) && ind != (list.length - 2) && ind != (list.length - 3)){
            list[ind] = el + ",";
        }
    })

    list = list.join(' ');
    console.log(list);

}


formattingList();