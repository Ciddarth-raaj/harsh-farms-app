// export default function (value) {
//   return new Intl.NumberFormat('en-IN', {
//     style: 'currency',
//     currency: 'INR',
//   }).format(value);
// }

export default function (value) {
  return '₹' + value.toFixed(2).replace(/(\d)(?=(\d{3})+(?!\d))/g);
}
