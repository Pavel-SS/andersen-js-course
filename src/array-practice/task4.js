/**
 * Реализовать функцию union в этом файле, и экспортировать ее.
 *
 * Функция принимает 2 массива, и возвращает массив объедененных значений,
 * без дублирования
 *
 * console.log(union([5, 1, 2, 3, 3], [4, 3, 2])); -> [5, 1, 2, 3, 4]
 * console.log(union([5, 1, 3, 3, 4], [1, 3, 4])); -> [5, 1, 3, 4]
 */
// eslint-disable-next-line import/prefer-default-export
// export const union = (arr1, arr2) => {
//   const newNotSortArr = [...arr1, ...arr2];
//   const newArr = [];
//   // eslint-disable-next-line no-restricted-syntax, prefer-const
//   for (let elm of newNotSortArr) {
//     if (!newArr.includes(elm)) {
//       newArr.push(elm);
//     }
//   }
//   return newArr;
// };

// var2
// eslint-disable-next-line import/prefer-default-export
export const union = (arr1, arr2) => {
  const newNotSortArr = [...arr1, ...arr2];
  return Array.from(new Set(newNotSortArr));
};
