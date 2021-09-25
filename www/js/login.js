
// Botão para exibir e ocultar a senha
let input = document.querySelector('#password'),
button = document.querySelector('#button');

button.addEventListener('click', showHide);

function showHide() {

if (input.type == 'password') {
    input.type = 'text';
    button.innerText = 'Ocultar'
} else {
    input.type = 'password';
    button.innerText = 'Exibir'
}

}

// Validando Login

$(document).ready(function(){
  
    $('#btn_entrar').click(function(){
      username = $("#Username").val();
      password = $("#password").val();

      if (username == "" || password == "") {
        
        $("#campo_vazio").append(campovazio);
       campovazio = "";
        $("#campo_vazio").show().delay(3000).fadeOut();
       return false
        
      }

// Ajax para verificar os dados do usuario, e ver se tem registrado no banco     
      $.ajax({
        type: "post",
        dataType: 'json',  
        url: "https://www.syspan.com.br/services/login_veiculos.php?",
        method: "POST",
        
        data: {
            usuario :username,
            senha:password
           },

        complete: function (login){  
                
          login = JSON.parse(login.responseText);

          id_usuario = login.id_usuario;

          nomeUsuario = login.nome_usuario;


   $("#nomedousuario").html(`Ola  ${nomeUsuario}, bem-vindo ao SysCar`);
          
        },
        
        success: function(xhr ,resp){
         
   
        if(xhr.resp == "ok"){
             
            $.mobile.changePage("#PagInfo", {transition: "flow"});
                       
        }else{
            
              // Validação para ver se os dados que o usuario digitou, estão corretos          
            $("#dados_incorretos").append(dadosincorretos);
                  dadosincorretos = " ";
            $("#dados_incorretos").show().delay(3000).fadeOut();
            
          };
        }
      });
    });
  });






   