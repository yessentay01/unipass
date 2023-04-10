var grupoId,
    saveAndAddUser;

$('#formGrupo').form({
    afterSave: function (result) {
        if (!result.errors) {
            tableGrupos.api().ajax.reload();
            $('#modalGrupo').modal('hide');

            if (saveAndAddUser) {
                grupoId = result.id;
                carregarUsuariosDoGrupo();
                $('#modalGrupoUsuarios').modal('show');
            }
        }
    },
    afterDelete: function () {
        tableGrupos.api().ajax.reload();
    }
});

$('#modalGrupo').on('shown.bs.modal', function () {
    $('#txtGrupoDescricao').focus();
});

var tableGrupos = $('#tableGrupos').dataTable({
    pageLength: 15,
    ajax: {
        url: 'api/groups',
        type: 'GET',
        data: function (objParam) {
            objParam.is_data_table = true;
            return objParam;
        }
    },
    buttons: [
        {
            text: '<button class="btn btn-primary w-xs float-right" id="btnNovoGrupo" ' + (!can_create ? 'disabled' : '') + '>New</button>'
        }
    ],
    columns: [
        {
            data: 'name',
            width: '80%'
        },
        {
            data: 'id',
            orderable: false,
            className: 'text-right',
            render: function (value) {
                return '<a href="javascript:void(0)" class="btn btn-white btn-icon btn-sm btnUsuarios mr-2 ' + (!can_edit ? 'disabled' : '') + '" data-id="' + value + '" title="Group users"><svg xmlns="http://www.w3.org/2000/svg" class="icon" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z"></path><circle cx="12" cy="7" r="4"></circle><path d="M5.5 21v-2a4 4 0 0 1 4 -4h5a4 4 0 0 1 4 4v2"></path></svg></a>' +
                    '<a href="javascript:void(0)" class="btn btn-white btn-icon btn-sm btnEditar mr-2 ' + (!can_edit ? 'disabled' : '') + '" data-id="' + value + '" title="Update"><svg xmlns="http://www.w3.org/2000/svg" class="icon" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z"></path><path d="M4 20h4l10.5 -10.5a1.5 1.5 0 0 0 -4 -4l-10.5 10.5v4"></path><line x1="13.5" y1="6.5" x2="17.5" y2="10.5"></line></svg></a>' +
                    '<a href="javascript:void(0)" class="btn btn-white btn-icon btn-sm btnExcluir ' + (!can_delete ? 'disabled' : '') + '" data-id="' + value + '" title="Delete"><svg xmlns="http://www.w3.org/2000/svg" class="icon" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z"></path><line x1="4" y1="7" x2="20" y2="7"></line><line x1="10" y1="11" x2="10" y2="17"></line><line x1="14" y1="11" x2="14" y2="17"></line><path d="M5 7l1 12a2 2 0 0 0 2 2h8a2 2 0 0 0 2 -2l1 -12"></path><path d="M9 7v-3a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v3"></path></svg></a>';
            }
        }
    ]
});

$('.dataTables_wrapper').on('click', '#btnNovoGrupo', function () {
    $('#formGrupo').form().cancel();
    $('#modalGrupo').modal('show');
});

tableGrupos
    .on('click', 'tbody > tr .btnUsuarios', function () {
        grupoId = $(this).attr('data-id');
        carregarUsuariosDoGrupo();
        $('#modalGrupoUsuarios').modal('show');
    })
    .on('click', 'tbody > tr .btnEditar', function () {
        $('#formGrupo').form().open($(this).attr('data-id'));
        $('#modalGrupo').modal('show');
    })
    .on('click', 'tbody > tr .btnExcluir:not(.link-disabled)', function (event) {
        $('#formGrupo').form().delete($(this).attr('data-id'), {
            messageConfirm: 'Deseja realmente excluir?\n\nATENÇÃO!\nOs usuários perderão os acessos as senhas compartilhadas através deste grupo!'
        });

        event.stopPropagation();
    });

tableGruposUsuarios = $('#tableGruposUsuarios').dataTable({
    autoWidth: false,
    info: false,
    deferLoading: 0,
    buttons: [
        {
            text: '<button class="btn btn-primary w-xs float-right" id="btnUsuariosAdicionar"><i class="fe fe-user mr-1"></i>User</button>'
        }
    ],
    columns: [
        {
            data: 'name',
            width: '100%'
        },
        {
            data: 'id',
            orderable: false,
            render: function (value) {
                return '<a href="javascript:void(0)" class="btn btn-white btn-sm btn-icon " data-id="' + value + '"><svg xmlns="http://www.w3.org/2000/svg" class="icon" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z"></path><line x1="4" y1="7" x2="20" y2="7"></line><line x1="10" y1="11" x2="10" y2="17"></line><line x1="14" y1="11" x2="14" y2="17"></line><path d="M5 7l1 12a2 2 0 0 0 2 2h8a2 2 0 0 0 2 -2l1 -12"></path><path d="M9 7v-3a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v3"></path></svg></a>';
            }
        }
    ]
});

tableGruposUsuarios
    .on('click', 'tbody > tr a', function () {
        objThis = $(this);

        if (!confirm('Deseja realmente excluir?')) {
            return false;
        }

        if (!objThis.find('td:first').hasClass('dataTables_empty')) {
            var idUsuario = $(this).attr('data-id');

            $('#tableGruposUsuarios').block();
            $.ajax({
                url: '/api/groups/' + grupoId + '/user/' + idUsuario + '/delete',
                type: 'DELETE',
                dataType: 'JSON',
                error: function (objResult) {
                    $.notify({message: objResult.status + ' - ' + objResult.statusText}, {type: 'danger'});
                    $('#tableGruposUsuarios').unblock();
                },
                success: function () {
                    $('#tableGruposUsuarios').unblock();
                    tableGruposUsuarios.api().ajax.reload();
                }
            });
        }
    })
    .parents('.dataTables_wrapper')
    .on('click', '#btnUsuariosAdicionar', function () {
        $('#modalUsuariosDisponiveis').modal('show');
    });

function carregarUsuariosDoGrupo() {
    tableGruposUsuarios.block();
    tableGruposUsuarios.api().ajax.url('api/groups/' + grupoId + '/users').load(function () {
        tableGruposUsuarios.unblock();
    });
}
