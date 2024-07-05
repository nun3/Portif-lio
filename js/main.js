$(document).ready(function () {
    $('#carousel-img').slick({
        arrows: false,
        autoplay: true,
        fade: true,
        responsive: true,
        infinite: true,
    });

    $('.menu-hamburguer').click(function() {
        $('nav').slideToggle();
    })

    $('#telefone').mask('(00) 00000-0000');

    $('form').validate({
        rules: {
            nome: {
                required: true,
            },
            telefone: {
                required: true,
            },
            email: {
                required: true,
                email: true
            },
            veiculointeresse: {
                required: true
            },
            mensagem: {
                required: true
            }
        },
        messages: {
            nome: "Por favor, informe o seu nome",
            telefone: "Insira um número de telefone válido (xx xxxx-xxxx)",
            email: "Insira um e-mail válido",
            veiculointeresse: "Selecione qual é o veículo de sua preferência",
            mensagem: "Escreva uma breve descrição do que você precisa"
        },
        submitHandler: function(form){
            console.log(form);
        },
        invalidHandler: function(evento, validador) {
        let camposIncorretos = validador.numberOfInvalids();
            if(camposIncorretos){
                alert("Existem "+camposIncorretos+" campo(s) incorreto(s). Por favor, verifique os dados");
            }
        }

    });

    $('.lista-veiculos button').click(function(){
        const destino = $('#contato');

        const CarroValue = $(this).parent().find('h3').text();
        $('#veiculointeresse').val(CarroValue)

        $('html').animate({
            scrollTop: $(destino).offset().top
        }, 1000);
    })

});