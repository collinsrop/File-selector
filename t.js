"use strict";
//function call back
document.addEventListener("DOMContentLoaded", ()=>{
let allTime = document.querySelector("#rest");
allTime.addEventListener("click",validFiles)
function validFiles(){
let inputFile = document.querySelector("#put").files[0];
const maxFileSize = 20 * 1024;//12kilobytes
if (inputFile.size <= maxFileSize){
	alert("Successfully Submitted!");
}else{
	alert("Large File Upload! Failed");
}
}
});
