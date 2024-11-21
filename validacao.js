document.addEventListener('DOMContentLoaded', function() {
    const btnConsultar = document.getElementById('btn-consultar');
    const docRegistroInput = document.getElementById('docRegistro');
    const chaveInput = document.getElementById('chave');

    if (btnConsultar && docRegistroInput && chaveInput) {
        btnConsultar.addEventListener('click', function() {
            const docRegistro = docRegistroInput.value;
            const chave = chaveInput.value;

            if (docRegistro === '299.413.308-32' && chave === 'E8281C7D-71FBE3FF-8C8F0B1A-0B713877') {
                window.open('https://drive.google.com/file/d/1pl7wf-eAQmfGiHplBXit1sbwRhmP2Qgd/view?usp=drive_link', '_blank');
            } else {
                alert('Documento de Registro ou Chave inválidos.');
            }
        });
 
document.addEventListener('DOMContentLoaded', function() {
    $.sound_path = '/smart-admin/sound/';

    $.consultarCertificadoDigital({
        ajaxSubmit: 0,
        listagem: 0,
        url: {
            consultarCertificadoDigital: '/documentos/documento-requerido/consultar-certificado-digital',
            urlarquivoDowload: '/gerenciador-arquivos/arquivo/download',
            averiguarDocumento: '/documentos/documento-requerido/averiguar-documento',
        },
        data: {
            arrMotivoAveriguar: '[{"id":"Informa\u00e7\u00f5es do Documento impresso tem dados err\u00f4neos","text":"Informa\u00e7\u00f5es do Documento impresso tem dados err\u00f4neos"},{"id":"Tipo de Documento impresso \u00e9 incompat\u00edvel com o impresso","text":"Tipo de Documento impresso \u00e9 incompat\u00edvel com o impresso"},{"id":"Dados do Aluno do Documento n\u00e3o \u00e9 compat\u00edvel com a retornada na valida\u00e7\u00e3o","text":"Dados do Aluno do Documento n\u00e3o \u00e9 compat\u00edvel com a retornada na valida\u00e7\u00e3o"},{"id":"QR Code n\u00e3o redireciona","text":"QR Code n\u00e3o redireciona"}]',
        },
        value: {
            exibirBotaoInformarDocumentoNaoCoerente: '0'
        }
    });
});
