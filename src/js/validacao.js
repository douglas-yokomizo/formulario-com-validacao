/* 
1- Adiciona uma função enquanto o usuário vai preenchendo os campos
2- A função deve verificar SE todos os campos com * estão preenchidos
3- O email deve conter @ e o telefone números
4- SE cumprir todos os requisitos as bordas ficarão verdes e o envio será liberado
5- SE NÃO cumprir todos os requisitos, retornar a mensagem em vermelho "campo obrigatório" e pintar a borda de vermelho e o envio será bloquado
*/

const nomeInput = document.getElementById('name');
const emailInput = document.getElementById('email');
const telefoneInput = document.getElementById('phone');
const enviarButton = document.getElementById('submitBtn');

// Adiciona um listener de input em cada campo
nomeInput.addEventListener('input', validarCampos);
emailInput.addEventListener('input', validarCampos);
telefoneInput.addEventListener('input', validarCampos);

function validarCampos() {
  if (nomeInput.value.trim() === '' || emailInput.value.trim() === '' || telefoneInput.value.trim() === '') {
    // Pelo menos um dos campos obrigatórios está vazio
    nomeInput.style.borderColor = '';
    emailInput.style.borderColor = '';
    telefoneInput.style.borderColor = '';
    enviarButton.disabled = true;
  } else if (!emailInput.value.includes('@')) {
    // O campo email não contém o caracter @
    nomeInput.style.borderColor = 'green';
    emailInput.style.borderColor = 'red';
    telefoneInput.style.borderColor = 'green';
    enviarButton.disabled = true;
  } else if (!telefoneInput.value.match(/^\d+$/)) {
    // O campo telefone não contém apenas números
    nomeInput.style.borderColor = 'green';
    emailInput.style.borderColor = 'green';
    telefoneInput.style.borderColor = 'red';
    enviarButton.disabled = true;
  } else {
    // Todos os campos obrigatórios foram preenchidos corretamente
    nomeInput.style.borderColor = 'green';
    emailInput.style.borderColor = 'green';
    telefoneInput.style.borderColor = 'green';
    enviarButton.disabled = false;
  }
}
