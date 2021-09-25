$.ajax({
  dataType: 'json',
  url: 'https://www.syspan.com.br/services/dados_veiculos.php',
  method: 'get',
  complete: function (carros) {
    meuJSON = JSON.parse(carros.responseText)
    
// Pagina Relatório
    // Json CG

    $('#kmCG').html(`<b> Ultimo km: </b> ${meuJSON.veiculos[0].km}`);
    $('#oleoCarroCG').html(`<b> Ultima troca de óleo: </b> ${meuJSON.veiculos[0].km_troca_oleo}`);
    $('#dataAttCg').html(`<b>Ultimo Registro: </b>${meuJSON.veiculos[0].data_atualizacao}` );

    // Json Fiesta

    $('#kmFiesta').html(`<b> Ultimo km: </b> ${meuJSON.veiculos[1].km}`);
    $('#oleoCarroFiesta').html(`<b> Ultima troca de óleo: </b> ${meuJSON.veiculos[1].km_troca_oleo}`);
    $('#dataAttFiesta').html(`<b>Ultimo Registro: </b>${meuJSON.veiculos[1].data_atualizacao}` );
    // Json Mobi

    $('#kmMobi').html(`<b> Ultimo km: </b> ${meuJSON.veiculos[2].km}`);
    $('#oleoCarroMobi').html(`<b> Ultima troca de óleo: </b> ${meuJSON.veiculos[2].km_troca_oleo}`);
    $('#dataAttMobi').html(`<b>Ultimo Registro: </b>${meuJSON.veiculos[2].data_atualizacao}` );
    //Json Uno

    $('#kmUno').html(`<b> Ultimo km: </b> ${meuJSON.veiculos[3].km}`);
    $('#oleoCarroUno').html(`<b> Ultima troca de óleo: </b> ${meuJSON.veiculos[3].km_troca_oleo}`);
    $('#dataAttUno').html(`<b>Ultimo Registro: </b>${meuJSON.veiculos[3].data_atualizacao}` );

    // PagCarros - Dinamicamente

    carros = meuJSON.veiculos
    num_carros = carros.length

    var html = '<ul>'

    for (i = 0; i < num_carros; i++) {
      html += '<li class="veiculos"  id="' + i + '" >' + carros[i].descricao + '</li>'
    }

    html += '</ul>'

    //Pagina aonde aparece o nome dos veiculos

    $('#lista_veiculos').html(html)
  },
})


// Pagina Dinamicamente
$('#Pag_carros').on('click', '.veiculos', function () {
  id_carro_clicado = $(this).attr('id')

  $('#nome_veiculo').html(meuJSON.veiculos[id_carro_clicado].descricao)

  $('#data_atualizacao').html(`<b>Ultimo Registro: </b>${meuJSON.veiculos[id_carro_clicado].data_atualizacao}` )

  $('#oleo_veiculo').html(`<b> Ultima troca de óleo: </b> ${meuJSON.veiculos[id_carro_clicado].km_troca_oleo}`)

  $('#Km_veiculo').html(`<b> Ultimo km: </b> ${meuJSON.veiculos[id_carro_clicado].km}`)

  $('#id_carro').val(meuJSON.veiculos[id_carro_clicado].id)

  $.mobile.changePage('#PagCarro', { transition: 'flow' })
})


$(".relatorioCarros").hide();


$(".ui-listview").hide();