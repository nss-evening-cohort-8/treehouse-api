//// OLD WAY (with callback functions)
// import {printStudent} from '../component/student.js';

// const dataGetterStudent = () => {
//   $.get('https://teamtreehouse.com/austincumberlander.json')
//   .done((data) => {
//     printStudent(data);
//   }).fail((error) => {
//     console.error()
//   })
// }

// export {dataGetterStudent};

//// NEW WAY (with promises)
const loadStudent = () => {
  return new Promise ((resolve, reject) => {
    $.get('https://teamtreehouse.com/austincumberlander.json')
    .done((data) => {
      resolve(data);
    }).fail((error) => {
      reject(error);
    })
  })
}

export {loadStudent};
