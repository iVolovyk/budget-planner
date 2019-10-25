export const Type = {
  ADD_EXPENSE: 'ADD_EXPENSE',
  REMOVE_EXPENSE: 'REMOVE_EXPENSE',
  GET_EXPENSES: 'GET_EXPENSES',
};

export const addExpense = expense => ({
  type: Type.ADD_EXPENSE,
  payload: expense,
});

export const removeExpense = id => ({
  type: Type.REMOVE_EXPENSE,
  payload: id,
});
