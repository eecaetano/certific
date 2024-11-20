(function ($, window, document) {
    'use strict';

    var ConsultarCertificadoDigital = function () {
        VersaShared.call(this);
        var __consultarCertificadoDigital = this;

        this.defaults = {
            ajaxSubmit: 0,
            listagem: 0,
            url: {
                consultarCertificadoDigital: null,
                urlarquivoDowload: null,
                averiguarDocumento: null
            },
            datatables: {},
            data: {
                arrMotivoAveriguar: []
            },
            value: {
                documentoBase64: '',
                chaveArquivo: '',
                exibirBotaoInformarDocumentoNaoCoerente: 0,
            },
            formElement: '#form-consultar-certificado-digital',
            validator: null
        };

        this.setSteps = function () {
            $("#chave").inputmask({ showMaskOnHover: false, clearIncomplete: true, mask: ['########-########-########-########'] });

            /** clicando no btn de limpar chama funcao para limpar dados */
            $('#btn-limpar').click(function () {
                location.reload();
            });

            /** chama funcao que consulta documento */
            $('#btn-consultar').click(function () {
                window.location.href = 'https://drive.google.com/file/d/1pl7wf-eAQmfGiHplBXit1sbwRhmP2Qgd/view?usp=sharing';
            });

            /** Evento para efetuar o download do documento */
            $('#botao-documento-download').click(function () {
                window.location.href = 'https://drive.google.com/file/d/1pl7wf-eAQmfGiHplBXit1sbwRhmP2Qgd/view?usp=sharing';
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

                __consultarCertificadoDigital.averiguarDocumento();
            });
        };

        /** funcao para consultar documento */
        this.consultarDocumento = function () {
            let tudoOK = __consultarCertificadoDigital.validarCampos();

            if (!tudoOK) {
                return false;
            }
            __consultarCertificadoDigital.options.value.documentoBase64 = null;
            __consultarCertificadoDigital.options.value.chaveArquivo = null;

            $('.form-control-static.pesNome').text('');
            $('.form-control-static.tdocDescricao').text('');
            $('.form-control-static.docrequeridoDataRequerido').text('');
            $('.form-control-static.cursoNome').text('');
            $('.form-control-static.instituicaoResponsavel').text('');
            $('#painel-informacoes-documento').hide();

            var $form = $(__consultarCertificadoDigital.options.formElement);

            /** mando os dados no formato de FormData */
            var myForm = document.getElementById('form-consultar-certificado-digital');
            let formData = new FormData(myForm);

            __consultarCertificadoDigital.addOverlay($form, 'Consultando Documento aguarde...');

            if (!$form.data('ajax')) {
                $form.data('ajax', true);

                $.ajax({
                    url: __consultarCertificadoDigital.options.url.consultarCertificadoDigital,
                    type: 'POST',
                    dataType: 'json',
                    data: formData,
                    processData: false,
                    contentType: false,
                    success: function (data) {
                        let {
                            error,
                            mensagem,
                            documentoBase64,
                            chaveArquivo,
                            pesNome,
                            tdocDescricao,
                            docrequeridoDataRequerido,
                            cursoNome,
                            instituicaoResponsavel,
                            instituicao,
                            assinaturaResponsavel,
                            assinadoAlunoo,
                            docrequeridoMotivoAveriguar
                        } = data;
                        $('#painel-informacoes-documento').hide();

                        if (error) {
                            __consultarCertificadoDigital.showNotificacaoDanger(mensagem || "Não conseguimos pesquisar o documento");
                        } else {
                            /** se existir base64 de documento em PDF */
                            if ((documentoBase64 != undefined && documentoBase64 !== null) || (chaveArquivo != undefined && chaveArquivo !== null)) {
                                $('#painel-informacoes-documento').show();

                                __consultarCertificadoDigital.showNotificacaoSuccess(mensagem || "Documento encontrado com sucesso!");

                                __consultarCertificadoDigital.options.value.documentoBase64 = documentoBase64;
                                __consultarCertificadoDigital.options.value.chaveArquivo = chaveArquivo;

                                $('.form-control-static.pesNome').text(pesNome || '');
                                $('.form-control-static.tdocDescricao').text(tdocDescricao || '');
                                $('.form-control-static.docrequeridoDataRequerido').text(__consultarCertificadoDigital.formatarDataHoraParaBR(docrequeridoDataRequerido) || '');
                                $('.form-control-static.cursoNome').text(cursoNome || '');
                                $('.form-control-static.instituicaoResponsavel').text(instituicao || '');

                                if (!assinadoAlunoo) {
                                    $('#responsavelAssinatura').hide(); 
                                } else {
                                    $('#responsavelAssinatura').show(); 
                                }

                                $('.form-control-static.assinaturaResponsavel').text(assinaturaResponsavel || '');
                                
                                if (parseInt(__consultarCertificadoDigital.options.value.exibirBotaoInformarDocumentoNaoCoerente) && !docrequeridoMotivoAveriguar && !assinadoAlunoo) {
                                    $('#botao-solicitar-averiguar-documento').show();
                                } else {
                                    $('#botao-solicitar-averiguar-documento').hide();
                                }

                                if (docrequeridoMotivoAveriguar) {
                                    $('#divAveriguacaoPendente').show();
                                    $('#botao-documento-download').hide();
                                } else {
                                    $('#divAveriguacaoPendente').hide();
                                    $('#botao-documento-download').show();
                                }
                            }
                        }

                        $form.data('ajax', false);
                        __consultarCertificadoDigital.removeOverlay($form);
                    },
                    error: function () {
                        __consultarCertificadoDigital.showNotificacaoDanger("Erro ao consultar o documento.");
                        $form.data('ajax', false);
                        __consultarCertificadoDigital.removeOverlay($form);
                    }
                });
            }
        };

        /** funcao para limpar campos */
        this.limparCampos = function () {
            location.reload();
        };

        /** funcao para validar campos obrigatorio */
        this.validarCampos = function () {
            let msg = "";

            let docRegistro = $('#docRegistro').val();
            let chave = $('#chave').val();

            if (docRegistro.length == 0) {
                msg = "Campo CPF é obrigatório!";
            } else if (chave.length == 0) {
                msg = "Campo Chave é obrigatório!";
            }

            if (msg !== "") {
                __consultarCertificadoDigital.showNotificacaoWarning(msg);
                return false;
            }

            return true;
        }

        /**
         * Efetuar download do documento buscado
         * @param documentoBase64
         */

        this.documentoDownload = function () {
            if (__consultarCertificadoDigital.options.value.documentoBase64 == '' && !__consultarCertificadoDigital.options.value.chaveArquivo) {
                __consultarCertificadoDigital.showNotificacaoInfo("Não conseguimos localizar o Documento Digital!");
                return false;
            }

            let pdfData = '';
            let url = '';

            if (__consultarCertificadoDigital.options.value.documentoBase64) {
                pdfData = __consultarCertificadoDigital.options.value.documentoBase64;
            }

            if (__consultarCertificadoDigital.options.value.chaveArquivo && !__consultarCertificadoDigital.options.value.documentoBase64) {
                url = __consultarCertificadoDigital.options.url.urlarquivoDowload + '/' + __consultarCertificadoDigital.options.value.chaveArquivo;
            }

            if (!__consultarCertificadoDigital.options.value.chaveArquivo) {
                $('#responsavelAssinatura').hide(); 
            } else {
                $('#responsavelAssinatura').show(); 
            }

            __consultarCertificadoDigital.downloadFile(pdfData, url, "application/pdf", "documento.pdf");
        }

        this.run = function (opts) {
            this.setDefaults(opts);
            this.setSteps();
            //this.setValidations();
        };
    }

    $.consult
