document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('btn-consultar').addEventListener('click', function() {
        var docRegistro = document.getElementById('docRegistro').value;
        var chave = document.getElementById('chave').value;

        if (docRegistro === '299.413.308-32' && chave === 'E8281C7D-71FBE3FF-8C8F0B1A-0B713877') {
            window.open('https://drive.google.com/file/d/1pl7wf-eAQmfGiHplBXit1sbwRhmP2Qgd/view?usp=drive_link', '_blank');
        } else {
            alert('Documento de Registro ou Chave inválidos.');
        }
    });
});
