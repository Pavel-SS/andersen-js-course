/**
 * Реализовать функцию membersOnActiveMeetups в этом файле, и экспортировать ее.
 *
 * Функция принимает массив meetups,
 * и возвращает суммарное количество человек, находящихся на активных митапах
 *
 * Пример вызова с нижним набором данных
 * membersOnActiveMeetups(meetups); // 1500
 */

// Раскомментировать нижнее, при начале реализации

// eslint-disable-next-line no-unused-vars
const meetups = [
  { name: 'JavaScript', isActive: true, members: 100 },
  { name: 'Angular', isActive: true, members: 900 },
  { name: 'Node', isActive: false, members: 600 },
  { name: 'React', isActive: true, members: 500 },
];

// eslint-disable-next-line no-shadow, import/prefer-default-export
// export function membersOnActiveMeetups(meetups) {
//   //   eslint-disable-next-line no-return-assign
//   return meetups.reduce((res, meetup) => {
//     res = meetup.isActive ? res + meetup.members : res;
//     return res;
//   }, 0);
// }
// var 2
// eslint-disable-next-line import/prefer-default-export, no-shadow
export function membersOnActiveMeetups(meetups) {
  let x = 0;
  // eslint-disable-next-line no-plusplus
  for (let i = 0; i < meetups.length; i++) {
    if (meetups[i].isActive) x += meetups[i].members;
  }
  return x;
}
