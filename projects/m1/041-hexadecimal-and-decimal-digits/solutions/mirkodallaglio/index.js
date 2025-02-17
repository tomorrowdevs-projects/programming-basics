let choice = prompt('Write 1 for HEX TO INT  /// Write 2 for INT TO HEX');

const hex2int = hex => parseInt(hex, 16);

const int2hex = int => Number(int).toString(16);

if(/^[1-2]$/.test(choice)){
    
    if(choice === '1') {
        let hex = prompt('HEX TO INT - Enter a single hexadecimal number');

        if(/^[0-9a-fA-F]$/.test(hex)) alert(`Hex : ${hex} ==> Int : ${hex2int(hex)}`);
        else alert('you have not entered the hexadecimal number correctly');
    }else{
        let int = prompt('INT TO HEX - Enter a integer decimal number from 0 to 15');

        if(/^([0-9]|1[0-5])$/.test(int)) alert(`Int : ${int} ==> hex : ${int2hex(int)}`);
        else alert('you have not entered the integer number correctly');
    };
}else alert('you can only write 1 or 2');

