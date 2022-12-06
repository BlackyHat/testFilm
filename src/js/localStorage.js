export class FilmsLocalStorage {
  constructor() {}

  getStorage = queryType => {
    try {
      const local = localStorage.getItem(queryType);
      const db = JSON.parse(local);
      return db ? db : [];
    } catch (error) {
      console.log(error);
    }
  };
  setStorage = (queryType, filmsArr) => {
    localStorage.setItem(queryType, filmsArr);
    return;
  };

  //////////////////////////////////////////////////////////////////////
  save = (key, value) => {
    try {
      const serializedState = JSON.stringify(value);
      localStorage.setItem(key, serializedState);
    } catch (error) {
      console.error('Set state error: ', error.message);
    }
  };

  load = key => {
    try {
      const serializedState = localStorage.getItem(key);
      return serializedState === null ? undefined : JSON.parse(serializedState);
    } catch (error) {
      console.error('Get state error: ', error.message);
    }
  };
}
