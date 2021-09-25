$(document).ready(function () {

  $('#btn_Alterar').click(function () {
    
    id_veiculo = meuJSON.veiculos[id_carro_clicado].id

// Colocando valor dos inputs nas variaveis 
    km = $('#ipnQuiloAtual').val()
    km_troca_oleo = $('#ipnTrocaOleo').val()

// Validando pra ver se os campos estão vazios      
    if (km == '' || km_troca_oleo == '') {
      $('#kmEoleoVazio').append(kmEoleoVazio)
      kmEoleoVazio = ''
      $('#kmEoleoVazio').show().delay(3000).fadeOut()
      return false
    }

// Validando pra ver se o valor coloca no input é maior que o valor registrado anteriormente
    if (km < Number(meuJSON.veiculos[id_carro_clicado].km)) {
      swal({
        icon: "error",
        title: '',
        text: "O km informado é inferior ao km registrado, insira novamente o km",
        timer: 3000,
        buttons: false
      })
      return false
    }
    if(km_troca_oleo < Number(meuJSON.veiculos[id_carro_clicado].km_troca_oleo)) {
      swal({
        icon: "error",
        title: '',
        text: "O óleo informado é inferior ao óleo registrado, insira novamente o óleo",
        timer: 3000,
        buttons: false
      })
      return false
    }

// Ajax para enviar os dados    
    $.ajax({
      dataType: 'json',
      url: 'https://syspan.com.br/services/update_veiculo.php?',
      method: 'POST',

      data: {
        km: km,
        km_troca_oleo: km_troca_oleo,
        id_veiculo: id_veiculo,
        id_usuario: id_usuario,
      },

      success: function (xhr, km_oleo) {
        if (km_oleo == 'success') {
          $.ajax({
            dataType: 'json',
            url: 'https://www.syspan.com.br/services/dados_veiculos.php',
            method: 'get',
            complete: function (carros) {
              meuJSON = JSON.parse(carros.responseText)    
              
              
// Pra quando o usuario digitar os valor no input e enviar, ja mudar sem precisar dar refresh      
  // Pagina Relatório
    // Json CG

    $('#kmCG').html(`<b> Ultimo km: </b> ${meuJSON.veiculos[0].km}`)
    $('#oleoCarroCG').html(`<b> Ultima troca de óleo: </b> ${meuJSON.veiculos[0].km_troca_oleo}`)
   

    // Json Fiesta

    $('#kmFiesta').html(`<b> Ultimo km: </b> ${meuJSON.veiculos[1].km}`)
    $('#oleoCarroFiesta').html(`<b> Ultima troca de óleo: </b> ${meuJSON.veiculos[1].km_troca_oleo}`
    )

    // Json Mobi

    $('#kmMobi').html(`<b> Ultimo km: </b> ${meuJSON.veiculos[2].km}`)
    $('#oleoCarroMobi').html(`<b> Ultima troca de óleo: </b> ${meuJSON.veiculos[2].km_troca_oleo}`)

    //Json Uno

    $('#kmUno').html(`<b> Ultimo km: </b> ${meuJSON.veiculos[3].km}`)
    $('#oleoCarroUno').html(`<b> Ultima troca de óleo: </b> ${meuJSON.veiculos[3].km_troca_oleo}`)

          },
          }) 
         
          
          formComentario.reset()

          
          //window.plugins.toast.showWithOptions('Hello there!', 'long', 'center');
         
         /* swal(
            "",
           dadosenviados,
            "success"
            )*/

            swal({
              icon: "success",
              title: '',
              text: dadosenviados,
              timer: 2000,
              buttons: false
            })
          $.mobile.changePage('#Pag_carros', { transition: 'flow' })
          
        } else {
          swal('O servidor esta com problemas!!!',"error")
        }
      },
      
    })
    
  })
  
})



