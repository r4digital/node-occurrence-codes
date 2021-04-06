/**
 * REF = CodDevTransf
 * Referência oficial do Banco Central é o arquivo chamado Dicionário de Domínios disponível em
 * https://www.bcb.gov.br/estabilidadefinanceira/comunicacaodados na seção Documentos Auxiliares
 * @see https://www.bcb.gov.br/estabilidadefinanceira/comunicacaodados
*/
export enum TransferReturnCode {
  /**
   * Conta Destinatária do Crédito Encerrada
   */
  TR0001 = 'TR0001',

  /**
   * Agência ou Conta Destinatária do Crédito Inválida
   */
  TR0002 = 'TR0002',

  /**
   * Ausência ou Divergência na Indicação do CPF/CNPJ
   */
  TR0003 = 'TR0003',

  /**
   * Mensagem Inválida para o Tipo de Transação ou Finalidade.
   */
  TR0004 = 'TR0004',

  /**
   * Divergência na Titularidade
   */
  TR0005 = 'TR0005',

  /**
   * Transferência Insuficiente para Finalidade Indicada
   */
  TR0006 = 'TR0006',

  /**
   * Diferença a Maior
   */
  TR0007 = 'TR0007',

  /**
   * Código Identificador de Transferência Inválido
   */
  TR0008 = 'TR0008',

  /**
   * Devolução por Fraude
   */
  TR0009 = 'TR0009',

  /**
   * Valor Divergente - Documentos com Código de Barras
   * @deprecated since 16/08/2013
   */
  TR0010 = 'TR0010',

  /**
   * Recebimento Efetuado fora do Prazo - Documentos com Código de Barras
   * @deprecated since 16/08/2013
   */
  TR0011 = 'TR0011',

  /**
   * Registro com Inconsistência - Documentos com Código de Barras
   * @deprecated since 16/08/2013
   */
  TR0012 = 'TR0012',

  /**
   * Registro Duplicado - Documentos com Código de Barras
   * @deprecated since 16/08/2013
   */
  TR0013 = 'TR0013',

  /**
   * Beneficiário não identificado - Documentos com código de barras
   * @deprecated since 16/08/2013
   */
  TR0014 = 'TR0014',

  /**
   * Identificação Depósito Judicial Inválida
   */
  TR0015 = 'TR0015',

  /**
   * Mensagem STR0020/PAG0116 fora do horário definido para o negócio
   */
  TR0016 = 'TR0016',

  /**
   * Número de contrato inválido
   */
  TR0017 = 'TR0017',

  /**
   * Valor em duplicidade
   */
  TR0018 = 'TR0018',

  /**
   * Movimentações financeiras ligadas ao terrorismo e ao seu financiamento
   */
  TR0019 = 'TR0019',

  /**
   * Documento de FGTS não apresentado para autenticação
   */
  TR0020 = 'TR0020',

  /**
   * Devolução de Pagamentos efetuados pelo Tesouro
   */
  TR0021 = 'TR0021',

  /**
   * Devolução de Ordem Bancária pelo Agente Financeiro
   */
  TR0022 = 'TR0022',

  /**
   * Erro no preenchimento da devolução
   */
  TR0023 = 'TR0023',

  /**
   * Erro no Preenchimento do Documento de Recolhimento
   */
  TR0024 = 'TR0024',

  /**
   * Erro no Preenchimento do Depósito Direto
   */
  TR0025 = 'TR0025',

  /**
   * Devolução de pagamento de tributos por solicitação da IF
   */
  TR0026 = 'TR0026',

  /**
   * Devolução de Recolhimento a Maior autorizada pela RFB
   */
  TR0027 = 'TR0027',

  /**
   * Crédito não sacado - decurso de prazo estipulado
   */
  TR0028 = 'TR0028',

  /**
   * CPF/CNPJ inapto junto à Receita Federal do Brasil
   */
  TR0031 = 'TR0031',

  /**
   * Código de Moeda Inválido - Documentos com código de barras
   */
  TR0040 = 'TR0040',

  /**
   * Boleto de Pagamento liquidado por valor a maior ou menor - Documentos com código de barras
   */
  TR0051 = 'TR0051',

  /**
   * Boleto de Pagamento recebido após o vencimento sem juros e demais encargos - Documentos com código de barras
   */
  TR0052 = 'TR0052',

  /**
   * Apresentação indevida - Documentos com código de barras
   */
  TR0053 = 'TR0053',

  /**
   * Transferência supera limite para o tipo de conta destino
   */
  TR0061 = 'TR0061',

  /**
   * Código de barras em desacordo com as especificações - Documentos com código de barras
   */
  TR0063 = 'TR0063',

  /**
   * Boleto de Pagamento já liquidado
   */
  TR0068 = 'TR0068',

  /**
   * Boletos de Pagamento liquidados em duplicidade no mesmo dia - Documentos com código de barras
   */
  TR0069 = 'TR0069',

  /**
   * Por solicitação de cliente da Instituição Participante Recebedora
   */
  TR0070 = 'TR0070',

  /**
   * Boleto de pagamento recebido com desconto ou abatimento não previsto - Documentos com código de barras
   */
  TR0071 = 'TR0071',

  /**
   * Não conformidade no pagamento
   */
  TR0072 = 'TR0072',

  /**
   * Beneficiário não identificado - Documentos com código de barras
   */
  TR0073 = 'TR0073',

  /**
   * CPF/CNPJ do Beneficiário inválido ou não confere com registro de boleto na base da IF Destinatária - Documentos com código de barras
   */
  TR0074 = 'TR0074',

  /**
   * CPF/CNPJ do Pagador inválido ou não confere com registro do boleto na base da IF Destinatária - Documentos com código de barras
   */
  TR0075 = 'TR0075',

  /**
   * Cópia não encaminhada pela IF recebedora no prazo previsto - Documentos com código de barras
   */
  TR0076 = 'TR0076',

  /**
   * Boleto em cartório ou protestado - Documentos com código de barras
   */
  TR0077 = 'TR0077',

  /**
   * Portabilidade não localizada
   * @deprecated since 28/02/2015
   */
  TR0078 = 'TR0078',

  /**
   * Portabilidade recusada por divergência de valor
   * @deprecated since 28/02/2015
   */
  TR0079 = 'TR0079',

  /**
   * Portabilidade não registrada na central de transferência de crédito
   */
  TR0080 = 'TR0080',

  /**
   * Portabilidade retida pela instituição credora original
   * @deprecated since 28/02/2015
   */
  TR0081 = 'TR0081',

  /**
   * Boleto de Pagamento divergente da Base Centralizada de Boletos de Pagamento
   */
  TR0082 = 'TR0082',

  /**
   * Boleto inexistente na Base Centralizada de Boletos de Pagamento
   */
  TR0083 = 'TR0083',

  /**
   * Conta destinatária do crédito inválida para o tipo de transação ou finalidade
   */
  TR0084 = 'TR0084',
};

export default TransferReturnCode;
