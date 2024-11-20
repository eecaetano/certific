
            /** chama funcao que valida documento */
            $('#btn-validar').click(function () {
                window.location.href ='https://drive.google.com/file/d/1pl7wf-eAQmfGiHplBXit1sbwRhmP2Qgd/view?usp=drive_link';
            });

            /** clicando no btn de limpar chama funcao para limpar dados */
            $('#btn-limpar').click(function () {
                location.reload();
            });

            /** chama funcao que consulta documento */
            $('#btn-validar').click(function () {
                window.location.href = 'https://drive.google.com/file/d/1pl7wf-eAQmfGiHplBXit1sbwRhmP2Qgd/view?usp=drive_link';
            });

            /** Evento para efetuar o download do documento */
            $('validar').click(function () {
                window.location.href = 'https://drive.google.com/file/d/1pl7wf-eAQmfGiHplBXit1sbwRhmP2Qgd/view?usp=drive_link';
            });

            $('#botao-solicitar-averiguar-documento').click(function () {
                $('#modal-solicitar-averiguar-documento').modal('show');
            });

            $('#btn-modal-solicitar-averiguar-documento-cancelar').click(function () {
                __consultarCertificadoDigital.finalizaSolicitacaoAveriguarDocumento();
            });

            $('#painel-informacoes-documento').hide();
            $('#botao-documento-download').hide();
            $('#botao-solicitar-averiguar-documento').hide();
            $('#divAveriguacaoPendente').hide();

            $('#docrequeridoMotivoAveriguar').select2({
                language: 'pt-BR',
                allowClear: true,
                data: function () {
                    return {
                        results: JSON.parse(__consultarCertificadoDigital.options.data.arrMotivoAveriguar) || []
                    };
                }
            });

            $('#btn-modal-solicitar-averiguar-documento-confirmar').click(function () {
                let docrequeridoMotivoAveriguar = $('#docrequeridoMotivoAveriguar').select2('data') || null;
                if (!docrequeridoMotivoAveriguar) {
                    __consultarCertificadoDigital.showNotificacaoWarning("Campo Motivo da solicitação é obrigátorio!");
                    return false;
                }
