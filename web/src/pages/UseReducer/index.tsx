import { useReducer } from 'react';

// Define action handlers
const handlers = {
  incrementAge: (state, action) => ({
    ...state,
    age: state.age + action.value,
  }),
  decrementAge: (state, action) => ({
    ...state,
    age: state.age - action.value,
  }),
  // 👇 Thêm action mới tại đây mà không sửa reducer
  resetAge: (state, action) => ({
    ...state,
    age: action.value ?? 0,
  }),
};

// Reducer stays closed for modification, open for extension
function reducer(state, action) {
  const handler = handlers[action.type];
  if (!handler) {
    throw new Error(`Unknown action type: ${action.type}`);
  }
  return handler(state, action);
}

export default function App() {
  const defaultAge = 42
  const [state, dispatch] = useReducer(reducer, {
    name: 'Dung',
    age: defaultAge,
  });

  console.log('rerender');

  return (
    <>
      <button onClick={() => dispatch({ type: 'incrementAge', value: 1 })}>
        +1
      </button>
      <button onClick={() => dispatch({ type: 'decrementAge', value: 1 })}>
        -1
      </button>
      <button onClick={() => dispatch({ type: 'incrementAge', value: 2 })}>
        +2
      </button>
      <button onClick={() => dispatch({ type: 'resetAge', value: defaultAge })}>
        Reset
      </button>
      <p>Hello! You are {state.name}</p>
      <p>Your age is {state.age}</p>
    </>
  );
}
