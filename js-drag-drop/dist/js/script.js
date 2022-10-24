"use strict";

// Selecting all requied Elements
const dropArea = document.querySelector(".drag-area"),
  dragText = dropArea.querySelector("p"),
  button = dropArea.querySelector("button"),
  input = dropArea.querySelector("input");

let file; // this is a global variable and we'll use it inside multiple functions

button.onclick = () => {
  input.click(); // if user click on the button then the input also clicked
};

input.addEventListener("change", function () {
  // getting user select file and [0] this means if user select mutiple files then we'll select only the first one
  file = this.files[0];
  showFile(); // calling Finction
  dropArea.style.borderStyle = "solid";
});

// If use Drag File Over DropArea
dropArea.addEventListener("dragover", (event) => {
  event.preventDefault(); // Prevent Default Behaviour
  dropArea.style.borderStyle = "solid";
  dragText.textContent = "Releass to upload File";
});

// If use Leave Dragged File form DropArea
dropArea.addEventListener("dragleave", () => {
  dropArea.style.borderStyle = "dashed";
  dragText.textContent = "Drag & Drop to Upload File";
});

// If use Drop File on DropArea
dropArea.addEventListener("drop", (event) => {
  event.preventDefault(); // Prevent Default Behaviour
  // getting user select file and [0] this means if user select mutiple files then we'll select only the first one
  file = event.dataTransfer.files[0];
  showFile(); // calling Finction
});

function showFile() {
  let fileType = file.type;

  let validExtensions = ["image/jpeg", "image/jpg", "image/png"]; // adding some vaild image extensions in array

  if (validExtensions.includes(fileType)) {
    // if user select file is a image file

    let fileReader = new FileReader(); // creating new FileReader object

    fileReader.onload = () => {
      let fileURL = fileReader.result; // passing user file source in fileURL Variable
      console.log(fileURL);

      let imgtag = `<img class="w-full h-full object-cover object-center rounded-lg" src="${fileURL}" alt="">`; // ceating an img tag and user selected file source src attribte
      dropArea.innerHTML = imgtag; // adding that created img tag inside dropArea
    };
    fileReader.readAsDataURL(file);
  } else {
    alert("This is not a an Image File");
    dropArea.style.borderStyle = "dashed";
    dragText.textContent = "Drag & Drop to Upload File";
  }
}
