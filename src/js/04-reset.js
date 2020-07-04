//FUNCION PARA RESETEAR FORMULARIO
function resetForm() {
  infoPerson.palette = 0;
  infoPerson.name = "";
  infoPerson.job = "";
  infoPerson.addImg = "";
  infoPerson.email = "";
  infoPerson.telephone = "";
  infoPerson.linkedin = "";
  infoPerson.github = "";
  fullName.value = "";
  job.value = "";
  email.value = "";
  telephone.value = "";
  linkedIn.value = "";
  gitHub.value = "";
  previewFullName.innerHTML = "Nombre Apellido";
  previewJob.innerHTML = "Front-End Developer";
}

function resetPreview() {
  const fullNameFilled = fullName.value;
  const jobFilled = job.value;
}

function resetImgPreview(){
  profileImage.style.backgroundImage = ``;
  profilePreview.style.backgroundImage = ``;
}

function resetComplete(event){
  resetForm();
  resetPreview();
  resetImgPreview();
}

resetButton.addEventListener("click", resetComplete);

