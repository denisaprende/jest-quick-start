// function fetchData(callback: any) {
//   const data = 'peanut butter';
//   callback(data);
// }

// // DON'T - Causes false positive
// test('the data is peanut butter', () => {
//   function callback(data) {
//     console.log('Start expect');;
//     expect(data).toBe('peanut butter');
//   }

//   fetchData(callback);
// });

// // Async test
// test('the data is peanut butter async test', done => {
//   function callback(data) {
//     try {
//       expect(data).toBe('peanut butter');
//       done();
//     } catch (error) {
//       done(error);
//     }
//   }

//   fetchData(callback);
// });

// ------------------------------------

// function fetchData() {
//   const data = 'peanut butter';
//   return new Promise(resolve => {
//     resolve(data);
//   })
// }

// test('the data is peanut butter', () => {
//   return fetchData().then(data => {
//     expect(data).toBe('peanut butter');
//   });
// });

// ------------------------------------

// function fetchData() {
//   return new Promise((resolve, reject) => {
//     try {
//       throw new Error('error');
//     } catch (error) {
//       reject('error');
//     }
//   })
// }

// test('the fetch fails with an error', () => {
//   expect.assertions(1);
//   return fetchData().catch(e => expect(e).toMatch('error'));
// });

// ------------------------------------

// function fetchData() {
//   return new Promise((resolve, reject) => {
//     try {
//       // throw new Error('error');
//       // resolve('peanut butter')
//     } catch (error) {
//       reject('error');
//     }
//   })
// }

// test('the data is peanut butter', () => {
//   return expect(fetchData()).resolves.toBe('peanut butter');
// });

// test('the fetch fails with an error', () => {
//   return expect(fetchData()).rejects.toMatch('error');
// });

// ------------------------------------

function fetchData() {
  return new Promise((resolve, reject) => {
    try {
      // throw new Error('error');
      resolve('peanut butter')
    } catch (error) {
      reject('error');
    }
  })
}

test('the data is peanut butter', async () => {
  const data = await fetchData();
  expect(data).toBe('peanut butter');
});

// test('the fetch fails with an error', async () => {
//   expect.assertions(1);
//   try {
//     await fetchData();
//   } catch (e) {
//     expect(e).toMatch('error');
//   }
// });

// test('the data is peanut butter', async () => {
//   await expect(fetchData()).resolves.toBe('peanut butter');
// });

// test('the fetch fails with an error', async () => {
//   await expect(fetchData()).rejects.toThrow('error');
// });