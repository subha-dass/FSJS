export const saveState = (state) => {
    try {
      const serializedState = JSON.stringify(state);
      localStorage.setItem('reduxState', serializedState);
    } catch {
      // Handle errors
    }
  };
  
  export const loadState = () => {
    try {
      const serializedState = localStorage.getItem('reduxState');
      console.log("accessing local storage")
      if (serializedState === null) {
        console.log("accessing null storage")
        return undefined; // Let Redux initialize the state
      }
      console.log(JSON.parse(serializedState))
      return JSON.parse(serializedState);
    } catch (err) {
      return undefined; // Let Redux initialize the state
    }
  };