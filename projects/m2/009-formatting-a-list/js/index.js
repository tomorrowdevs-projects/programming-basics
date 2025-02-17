
let list = [];

    function getList () {
        let itemInput;
        while (itemInput !== "") {
            itemInput = prompt("Please, enter an item for your list: ");
            list.push(itemInput);
        }

        list.pop();
    }

    function sortList (array){

        let result;

        if (list.length > 2) {
            let firsts = array.slice(0, array.length - 1);
            let last = array[array.length - 1];
            result = firsts.join(", ") + " and " + last;

        } else if (list.length === 2) {
            result = list.join(" and ");

        } else if (list.length <= 1) {
            result = list;
        }

    return result;

    }

getList();
alert(sortList(list));