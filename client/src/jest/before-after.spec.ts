let cities: Array<string>;
let food: Array<string>;
const citiesAndFood: Array<string> = ['Vienna - Wiener Schnitzel', 'San Juan - Mofongo'];

// beforeAll(() => {
//   return initializeCityDatabaseAsync();
// });

beforeEach(() => {
  initializeCityDatabase();
  // return initializeCityDatabaseAsync();
});

afterEach(() => {
  clearCityDatabase();
});

// afterAll(() => {
//   return clearCityDatabaseAsync();
// });

describe('matching cities to foods', () => {
  // Applies only to tests in this describe block
  beforeEach(() => {
    return initializeFoodDatabase();
  });

  test('Vienna <3 sausage', () => {
    expect(isValidCityFoodPair('Vienna', 'Wiener Schnitzel')).toBe(true);
  });

  test('San Juan <3 plantains', () => {
    expect(isValidCityFoodPair('San Juan', 'Mofongo')).toBe(true);
  });
});

test('city database has Vienna', () => {
  expect(isCity('Vienna')).toBeTruthy();
});

test('city database has San Juan', () => {
  expect(isCity('San Juan')).toBeTruthy();
});

function initializeCityDatabase() {
  cities = ['Vienna', 'San Juan'];
}

function isCity(city: string) {
  return cities.includes(city);
}

function clearCityDatabase() {
  cities = [];
}

function initializeCityDatabaseAsync() {
  return new Promise(resolve => {
    setTimeout(() => {
      cities = ['Vienna', 'San Juan'];
      resolve(cities);
    }, 3000);
  })
}

function clearCityDatabaseAsync() {
  return new Promise(resolve => {
    setTimeout(() => {
      cities = [];
      resolve(cities);
    }, 3000);
  })
}

function initializeFoodDatabase() {
  return new Promise(resolve => {
    setTimeout(() => {
      food = ['Wiener Schnitzel', 'Mofongo'];
      resolve(food);
    }, 3000);
  })
}

function isValidCityFoodPair(city: string, food: string) {
  return citiesAndFood.includes(`${city} - ${food}`);
}