/**
 * Select an random element form an array
 *  - input: Array
 *  - output: Array[random]
 */
function getRandElement(items) {
  const randomIndex = Math.floor(Math.random() * items.length);

  return items[randomIndex];
}

module.exports = {
  getRandElement,
};
