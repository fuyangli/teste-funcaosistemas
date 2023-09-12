
var beneficiarios = [];
$(document).ready(function () {
    $('#formCadastro').submit(function (e) {
        e.preventDefault();
        $.ajax({
            url: urlPost,
            method: "POST",
            data: {
                "NOME": $(this).find("#Nome").val(),
                "CEP": $(this).find("#CEP").val(),
                "Email": $(this).find("#Email").val(),
                "Sobrenome": $(this).find("#Sobrenome").val(),
                "Nacionalidade": $(this).find("#Nacionalidade").val(),
                "Estado": $(this).find("#Estado").val(),
                "Cidade": $(this).find("#Cidade").val(),
                "Logradouro": $(this).find("#Logradouro").val(),
                "Telefone": $(this).find("#Telefone").val(),
                "CPF": $(this).find("#CPF").val(),
                "Beneficiarios": beneficiarios
            },
            error:
                function (r) {
                    if (r.status == 400)
                        ModalDialog("Ocorreu um erro", r.responseJSON);
                    else if (r.status == 500)
                        ModalDialog("Ocorreu um erro", "Ocorreu um erro interno no servidor.");
                },
            success:
                function (r) {
                    ModalDialog("Sucesso!", r)
                    window.location.assign("/");
                }
        });
    })

    function handleBeneficiarioModal() {
        $("#modalBeneficiarios").modal();
    }

    $('#formBeneficiario').submit(function (e) {
        e.preventDefault();
        var beneficiario = {
            "Nome": $(this).find("#nomeBeneficiario").val(),
            "CPF": $(this).find("#cpfBeneficiario").val(),
            "Id": beneficiarios.length + 1
        };

        var temCpf = beneficiarios.filter(function (item) {
            return item.CPF == beneficiario.CPF
        }).length > 0;
        if (temCpf) {
            ModalDialog("CPF já existente!", "CPF já existente!");
            return;
        }
       
        beneficiarios.push(beneficiario);
        $("#formBeneficiario")[0].reset();
        ModalDialog("Beneficiário adicionado!", "Beneficiário adicionado!");
        $('#gridBeneficiarios').jtable('load');
    });

    $('#beneficiarios').click(function (e) {
        e.preventDefault();
        handleBeneficiarioModal();
    })

    if (document.getElementById("gridBeneficiarios")) {
        $('#gridBeneficiarios').jtable({
            title: 'Beneficiarios',
            sorting: true, //Enable sorting
            defaultSorting: 'Nome ASC', //Set default sorting
            actions: {
                listAction: function (postData, jtParams) {
                    return $.Deferred(function ($dfd) {
                        var data = { Result: "OK", Records: beneficiarios, TotalRecordCount: beneficiarios.length };
                        $dfd.resolve(data);
                    });
                },
            },
            toolbar: {
                items: [{

                    text: '<i class="glyphicon glyphicon-plus"></i> Adicionar Novo',
                    click: function () {
                        handleBeneficiarioModal();
                    }
                }]
            },
            fields: {
                Nome: {
                    title: 'Nome',
                    width: '50%'
                },
                CPF: {
                    title: 'CPF',
                    width: '35%'
                },
                Delete: {
                    sorting: false,
                    title: '',
                    width: '10%',
                    display: function (data) {
                        return '<button class="btn btn-danger btn-sm" data-id="' + data.record.Id + '">Excluir</button>';
                    }
                }
            }
        });
        $('#gridBeneficiarios').jtable('load');
    };

    $('#gridBeneficiarios').on('click', 'button.btn-danger', function (e) {
        e.preventDefault();
        var beneficiarioId = $(this).data('id');

        if (confirm('Tem certeza de que deseja excluir este beneficiário?')) {
            beneficiarios = beneficiarios.filter(function (item) {
                return item.Id !== beneficiarioId;
            });
            $('#gridBeneficiarios').jtable('load');
        }
    });

})

function ModalDialog(titulo, texto) {
    var random = Math.random().toString().replace('.', '');
    var texto = '<div id="' + random + '" class="modal fade">                                                               ' +
        '        <div class="modal-dialog">                                                                                 ' +
        '            <div class="modal-content">                                                                            ' +
        '                <div class="modal-header">                                                                         ' +
        '                    <button type="button" class="close" data-dismiss="modal" aria-hidden="true">×</button>         ' +
        '                    <h4 class="modal-title">' + titulo + '</h4>                                                    ' +
        '                </div>                                                                                             ' +
        '                <div class="modal-body">                                                                           ' +
        '                    <p>' + texto + '</p>                                                                           ' +
        '                </div>                                                                                             ' +
        '                <div class="modal-footer">                                                                         ' +
        '                    <button type="button" class="btn btn-default" data-dismiss="modal">Fechar</button>             ' +
        '                                                                                                                   ' +
        '                </div>                                                                                             ' +
        '            </div><!-- /.modal-content -->                                                                         ' +
        '  </div><!-- /.modal-dialog -->                                                                                    ' +
        '</div> <!-- /.modal -->                                                                                        ';

    $('body').append(texto);
    $('#' + random).modal('show');
}
