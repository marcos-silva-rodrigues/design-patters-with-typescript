import { resolve } from 'path';
import { CustomerDataParserJson } from './customer/parser-json';
import { CustomerDataParserTxt } from './customer/parser-txt';

async function main() {
  const filePath1 = resolve(__dirname, 'files', 'customer.txt');
  const filePath2 = resolve(__dirname, 'files', 'customer.json');

  console.log('txt - parser');
  const customerDataParser1 = new CustomerDataParserTxt(filePath1);
  await customerDataParser1.fixCustomerData();
  console.log(customerDataParser1.customerData);

  console.log('json - parser');
  const customerDataParser2 = new CustomerDataParserJson(filePath2);
  await customerDataParser2.fixCustomerData();
  console.log(customerDataParser2.customerData);
}

main();
