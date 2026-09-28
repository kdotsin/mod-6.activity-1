import _ from 'lodash';

interface shoppingItem {
    id: string;
    name: string;
    price: number;
    discountedPrice: number;
}

// const _ = require('lodash');
//data is array
function processData(data: shoppingItem[]): shoppingItem[] {
  let result: shoppingItem[] = [];
 
  for (let i = 0; i < data.length; i++) {
    //item is data i but we dont know what data[i]'s value is
    let item = data[i];
 // item is an object 100% 
    if (!item?.id) {
      throw new Error('Data item is missing an id');
    }
 
    let processedItem: shoppingItem = {
      id: item.id,
      name: item.name || 'Unknown',
      price: item.price || 0,
      discountedPrice: item.discountedPrice || item.price || 0,
    };

    result.push(processedItem);
  }
 
  return _.orderBy(result, ['discountedPrice'], ['asc']);
}

export { processData };
// module.exports = { processData };
