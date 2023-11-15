import transfer from './transfer';
import billPayment from './bill-payment';
import pix from './pix';
import investment from './investment';

const occurrence = Object.freeze({
  transfer,
  billPayment,
  pix,
  investment,
});

export default occurrence;

