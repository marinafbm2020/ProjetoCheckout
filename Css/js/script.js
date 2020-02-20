let inputCPF = document.getElementById('cpfUsuario');
let password = document.getElementById('senhaUsuario')
let confirmarSenhaUsuario = document.getElementById('confirmarSenhaUsuario')
let CPFTitular = document.getElementById('CPFTitular');
let inputCEP = document.getElementById('CEP')
let inputEndereco = document.getElementById('enderecoUsuario')
let inputBairro = document.getElementById('bairroUsuario')
let inputCidade = document.getElementById('cidadeUsuario')

inputCPF.addEventListener('keyup', ()=>{
   

    if(isNaN(inputCPF.value)){
        inputCPF.value = inputCPF.value.substring(0 , (inputCPF.value.length - 1 ));

    }
    if(inputCPF.value.length >= 11){
        inputCPF.value = inputCPF.value.substring(0, 11)
    }
})

confirmarSenhaUsuario.addEventListener('keyup', (e)=>{
    if(password.value != confirmarSenhaUsuario.value) {
        confirmarSenhaUsuario.setAttribute('class', 'form-control is-invalid');
    } else {
        confirmarSenhaUsuario.setAttribute('class', 'form-control is-valid');     
    }
})

CPFTitular.addEventListener('keyup', ()=>{
   

    if(isNaN(CPFTitular.value)){
        CPFTitular.value = CPFTitular.value.substring(0 , (CPFTitular.value.length - 1 ));

    }
    if(CPFTitular.value.length >= 11){
        CPFTitular.value = CPFTitular.value.substring(0, 11)
    }
})

function buscarCep(CEP){
    alert("Vou buscar o CEP: "+ CEP);
}

inputCEP.addEventListener('keyup', (event)=>{
   

    if(isNaN(inputCEP.value)){
        inputCEP.value = inputCEP.value.substring(0 , (inputCEP.value.length -1 ))

    }
    if(inputCEP.value.length >= 8){
        inputCEP.value = inputCEP.value.substring(0, 8)
        buscarCep(inputCEP.value)
    }
})


function buscarCep(CEP){
    fetch(`https://viacep.com.br/ws/${CEP}/json/`, config)
    .then(response => response.json())
    .then(dados =>{
        if(dados.erro){
            return inputCEP.setAttribute('class', 'form-control is-invalid')
        }
        inputCEP.setAttribute('class', 'form-control is-valid')
        inputEndereco.value = dados.logradouro
        inputBairro.value = dados.inputBairro
        inputCidade.value = dados.localidade

        $('#CompraFinalizadagit').modal('show')


    })
}







