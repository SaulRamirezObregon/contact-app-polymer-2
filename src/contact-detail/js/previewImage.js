const input = document.querySelector('#myfile');
const preview = document.querySelector('.preview');
input.addEventListener('change', (e) =>{
  const reader = new FileReader();
  reader.onload = (e) => preview.setAttribute('src', e.target.result);
  reader.readAsDataURL(input.files[0]);
});//
