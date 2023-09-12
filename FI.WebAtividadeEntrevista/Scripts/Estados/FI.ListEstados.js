
$(document).ready(function () {

    $.ajax({
        url: urlGet,
        method: "GET",
        error:
            function (r) {
                if (r.status == 400)
                    ModalDialog("Ocorreu um erro", r.responseJSON);
                else if (r.status == 500)
                    ModalDialog("Ocorreu um erro", "Ocorreu um erro interno no servidor.");
            },
        success:
            function (r) {
                
                var selectEstado = $('#Estado');
                $.each(r.Records, function (index, estado) {
                    selectEstado.append($('<option>', {
                        value: estado.Sigla,
                        text: `${estado.Nome} (${estado.Sigla})`
                    }));
                });
                if (typeof obj !== "undefined") {
                    selectEstado.val(obj.Estado);
                }
            }
    });
})