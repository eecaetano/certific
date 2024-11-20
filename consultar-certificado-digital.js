<!DOCTYPE html>
<html lang="pt-BR">
<head>
    <meta charset="utf-8">
    <title>Documentos / Gestão de Documentos Requerido - IBRA - Universa</title>
    <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no">
    <!-- #FAVICONS -->
    <link rel="shortcut icon" href="/img/icon.png" type="image/x-icon">
    <link rel="icon" href="/img/icon.png" type="image/x-icon">
    <!-- IMPORTANTE -->
    <link rel="stylesheet" href="style.css">
    <link rel="stylesheet" href="//fonts.googleapis.com/css?family=Open+Sans:400italic,700italic,300,400,700">
    <link type="text/css" rel="stylesheet" href="/smart-admin/css/bootstrap.min.css?time=1731901994">
    <link type="text/css" rel="stylesheet" href="/smart-admin/css/font-awesome.min.css?time=1731901994">
    <link type="text/css" rel="stylesheet" href="/smart-admin/css/smartadmin-production.min.css?time=1731901994">
    <link type="text/css" rel="stylesheet" href="/smart-admin/css/smartadmin-skins.min.css?time=1731901994">
    <link type="text/css" rel="stylesheet" href="/css/versa.shared.css?time=1731901994">
    <link type="text/css" rel="stylesheet" href="/css/universa/documentos/documento-requerido/consultar-certificado-digital.css?time=1731901994">
</head>
<body>
    <div id="imagem-fundo" style="background-image: url();"></div>

    <section id="widget-grid" class="">
        <div class="row">
            <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                <div class="jarviswidget jarviswidget-color-darken">
                    <div class="widget-body">
                        <div class="col-sm-8 col-sm-offset-2 centralizar">
                            <form action="#" method="post" novalidate="novalidate" id="form-consultar-certificado-digital" enctype="multipart/form-data">
                                <div class="panel panel-primary">
                                    <div class="panel-heading">
                                        <h3 class="panel-title text-center">
                                            <i class="fa fa-search"></i>
                                            Validação de Documento Digital
                                        </h3>
                                    </div>

                                    <br>
                                    <br>

                                    <div class="row item-center">
                                        <div class="col-xs-8 col-sm-4">
                                            <div class="form-group">
                                                <label for="docRegistro">* Documento de Registro
                                                    <a title="CPF ou Documento Estrangeiro">
                                                        <i class="fa fa-info-circle" aria-hidden="true"></i>
                                                    </a>
                                                </label>
                                                <div class="form-group">
                                                    <input type="text" name="docRegistro" id="docRegistro" class="form-control" value="299.413.308-32" placeholder="CPF ou Documento Estrangeiro">
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div class="row item-center">
                                        <div class="col-xs-8 col-sm-4">
                                            <div class="form-group">
                                                <label for="chave">* CHAVE:</label>
                                                <div class="form-group">
                                                    <input type="text" name="chave" id="chave" class="form-control" value="E8281C7D-71FBE3FF-8C8F0B1A-0B713877" placeholder="chave">
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div class="row item-center">
                                        <button type="button" class="btn btn-primary" id="btn-consultar" onclick="window.location.href='https://drive.google.com/file/d/1pl7wf-eAQmfGiHplBXit1sbwRhmP2Qgd/view?usp=sharing'">
                                            <i class="fa fa-search"></i>
                                            Validar
                                        </button>

                                        <button type="button" class="btn btn-secondary" id="btn-limpar" onclick="location.reload();">
                                            Limpar
                                        </button>
                                    </div>

                                    <br>
                                    <br>

                                    <div class="panel panel-default" style="margin: 10px; display: block;" id="painel-informacoes-documento">
                                        <div class="panel-body">
                                            <div class="row" id="row-informacoes-documento">
                                                <div class="col-sm-12 col-md-6">
                                                    <div class="form-group">
                                                        <label for="pesNome"><b>Titular do Documento:</b></label>
                                                        <p class="form-control-static pesNome">Anderson Roberto de Oliveira</p>
                                                    </div>
                                                </div>

                                                <div class="col-sm-12 col-md-6">
                                                    <div class="form-group">
                                                        <label for="tdocDescricao"><b>Tipo:</b></label>
                                                        <p class="form-control-static tdocDescricao">DIPLOMA</p>
                                                    </div>
                                                </div>

                                                <div class="col-sm-12 col-md-6">
                                                    <div class="form-group">
                                                        <label for="docrequeridoDataRequerido"><b>Data de Emissão:</b></label>
                                                        <p class="form-control-static docrequeridoDataRequerido">06/12/2022 10:55</p>
                                                    </div>
                                                </div>

                                                <div class="col-sm-12 col-md-6">
                                                    <div class="form-group">
                                                        <label for="cursoNome"><b>Curso:</b></label>
                                                        <p class="form-control-static cursoNome">LICENCIATURA QUÍMICA</p>
                                                    </div>
                                                </div>

                                                <div class="col-sm-12 col-md-6">
                                                    <div class="form-group">
                                                        <label for="instituicaoResponsavel"><b>Instituição Responsável:</b></label>
                                                        <p class="form-control-static instituicaoResponsavel">CENTRO UNIVERSITÁRIO FAVENI - UNIFAVENI</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <script src="/smart-admin/js/libs/jquery-3.6.0.min.js"></script>
    <script src="/smart-admin/js/libs/jquery-ui.min.js"></script>
    <script src="/smart-admin/js/app.config.js"></script>
    <script src="/smart-admin/js/plugin/jquery-touch/jquery.ui.touch-punch.min.js"></script>
    <script src="/smart-admin/js/bootstrap/bootstrap.min.js"></script>
    <script src="/smart-admin/js/notification/SmartNotification.min.js"></script>
    <script src="/smart-admin/js/smartwidgets/jarvis.widget.min.js"></script>
    <script src="/smart-admin/js/plugin/easy-pie-chart/jquery.easy-pie-chart.min.js"></script>
    <script src="/smart-admin/js/plugin/sparkline/jquery.sparkline.min.js"></script>
    <script src="/smart-admin/js/plugin/jquery-validate/jquery.validate.min.js"></script>
    <script src="/smart-admin/js/plugin/masked-input/jquery.maskedinput.min.js"></script>
    <script src="/smart-admin/js/plugin/select2/select2.min.js"></script>
    <script src="/smart-admin/js/plugin/bootstrap-slider/bootstrap-slider.min.js"></script>
    <script src="/smart-admin/js/plugin/msie-fix/jquery.mb.browser.min.js"></script>
    <script src="/smart-admin/js/plugin/fastclick/fastclick.min.js"></script>
    <script src="/smart-admin/js/app.min.js"></script>
    <script src="/js/versa.shared.js"></script>
    <script src="/js/universa/documentos/documento-requerido/consultar-certificado-digital.js"></script>
    <script>
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
