const phrase  = document.querySelector('#string');
const textarea = document.querySelector('#textarea');
const button = document.querySelector('#btn');
const widthArea = document.querySelector('#widthArea');
const errorMessage = document.querySelector('#errorMessage');

function centeredString(s,w){
    if(s.length < w){
        let spaces = (w - s.length) /2;
        for(i=0; i <= spaces; i++){
            s = ' ' + s;
        };
        console.log(s.length, w);

        return s + '\n\n';
    }else return s + '\n\n';
};

button.addEventListener('click', function(){
    if(/^[a-zA-Z\s]+$/.test(phrase.value)) {
        let widthValue = parseInt(widthArea.value);
        textarea.cols = widthValue;
        widthArea.disabled = true;
        textarea.value += centeredString(phrase.value, widthValue);
        phrase.value = '';
    }else{
        errorMessage.style.display = 'block';
        phrase.value = '';
        setTimeout(function (){
            errorMessage.style.display = 'none';
        }, 3000);
    }
});
