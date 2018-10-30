//// OLD WAY (with callback functions)
// const printStudent = (studentData) => {
//   $('#student').html(`<h2>${studentData.name}</h2>`);
// }

// export {printStudent};

//// NEW WAY (with promises)
import {loadStudent} from '../data/studentData.js';

const printStudent = (studentData) => {
  $('#student').html(`<h2>${studentData.name}</h2>`);
}

const initializeStudent = () => {
  loadStudent().then((studentData) => {
    printStudent(studentData);
  }).catch((error) => {
    console.error('i have problems', error);
  })
}

export {initializeStudent};
