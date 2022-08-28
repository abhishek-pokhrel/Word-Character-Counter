let copytoClipboard = document.querySelector('.copytoclipboard');

let textBox = document.getElementById('textarea');



function charcountupdate(str) {
	var lng = str.length;
	document.querySelector(".characters-count").innerHTML = lng;


    let currWords = str.split(' ');
    document.querySelector(".words-count").textContent = currWords.length - 1;

}

copytoClipboard.addEventListener('click', ()=>{
    navigator.clipboard.writeText(textBox.value);
})