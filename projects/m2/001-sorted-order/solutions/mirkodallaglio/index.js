let int = '';
let arr = [];

do{

    int = Number(prompt('Enter a integer number'));

    if(/^[-+]?\d*$/.test(int)){

        if(int === 0) {
            arr.sort(function(a, b){return a-b});
            alert(arr.join('\n'));
        }else arr.push(int);

    }else alert("You didn't enter an integer, please try again");

}while(int !== 0)
