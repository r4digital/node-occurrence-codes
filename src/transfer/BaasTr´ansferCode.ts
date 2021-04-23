export enum BaasTransferCode {
  /**
   * Registro criado
   */
  BT0001 = 'BT0001',
  /**
   * Registro confirmado
   */
  BT0002 = 'BT0002',
  /**
   * Registro sendo processado
   */
  BT0003 = 'BT0003',
  /**
  * Saldo Insuficiente
  */
  BT0004 = 'BT0004',
  /**
   * Registro processado
   */
  BT0005 = 'BT0005',
  /**
   * Registro rejeitado - Agência ou Conta do Dédito Inválida
   */
  BT0006 = 'BT0006',
  /**
   * Erro genérico
   */
  BT9999 = 'BT9999'
};

export default BaasTransferCode;
