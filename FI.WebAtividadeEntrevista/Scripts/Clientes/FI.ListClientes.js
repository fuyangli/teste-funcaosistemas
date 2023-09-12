
$(document).ready(function () {

    if (document.getElementById("gridClientes")) {
        $('#gridClientes').jtable({
            title: 'Clientes',
            paging: true, //Enable paging
            pageSize: 5, //Set page size (default: 10)
            sorting: true, //Enable sorting
            defaultSorting: 'Nome ASC', //Set default sorting
            actions: {
                listAction: urlClienteList,
            },
            fields: {
                Nome: {
                    title: 'Nome',
                    width: '50%'
                },
                Email: {
                    title: 'Email',
                    width: '35%'
                },
                Alterar: {
                    sorting: false,
                    title: '',
                    display: function (data) {
                        return '<button onclick="window.location.href=\'' + urlAlteracao + '/' + data.record.Id + '\'" class="btn btn-primary btn-sm">Alterar</button>';
                    }
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

        $('#gridClientes').on('click', 'button.btn-danger', function () {
            var clienteId = $(this).data('id');

            if (confirm('Tem certeza de que deseja excluir este cliente?'))
                $.ajax({
                    url: '/Cliente/Delete/' + clienteId,
                    type: 'DELETE',
                    success: function (result) {
                        $('#gridClientes').jtable('load');
                    },
                    error: function (error) {
                        alert('Erro ao excluir cliente: ' + error.responseText);
                    }
                });
        });
    }


    //Load student list from server
    if (document.getElementById("gridClientes"))
        $('#gridClientes').jtable('load');
})