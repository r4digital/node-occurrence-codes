import transfer from './transfer';
import billPayment from './bill-payment';
import pix from './pix';

const occurrence = Object.freeze({
  transfer,
  billPayment,
  pix
});

export default occurrence;

