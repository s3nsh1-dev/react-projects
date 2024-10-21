import { useReducer } from "react";
import Button from "../components/Button";
import Panel from "../components/Panel";

// using variables help reduce typos
const INCREMENT_COUNT = "increment";
const SET_VALUE_TO_ADD = "change_value_to_add";
const DECREMENT_COUNT = "decrement";
const ADD_VALUE_TO_COUNT = "add_value_to_count";

// Reducer function that handles state changes and called when we mention dispatch function
// in reducers there is not place for 3rd variable
const reducer = (state, action) => {
  switch (action.type) {
    case INCREMENT_COUNT:
      return {
        ...state,
        count: state.count + 1,
      };
    case DECREMENT_COUNT:
      return {
        ...state,
        count: state.count - 1,
      };
    case ADD_VALUE_TO_COUNT:
      return {
        ...state,
        count: state.count + state.valueToAdd,
        valueToAdd: 0,
      };
    case SET_VALUE_TO_ADD:
      return {
        ...state,
        valueToAdd: action.payload,
      };
    default:
      return state;
  }
};

// reducers way to create and mutate states
function CounterPage({ initialCount }) {
  const [state, dispatch] = useReducer(reducer, {
    // these both keys are state
    count: initialCount,
    valueToAdd: 0,
  });

  const increment = () => {
    // call reducers with sending INCREMENT_COUNT in action.type
    dispatch({
      type: INCREMENT_COUNT,
    });
  };
  const decrement = () => {
    dispatch({
      type: DECREMENT_COUNT,
    });
  };
  const handleChange = (event) => {
    // if user submits "empty value" as the number to add in count then assign state.valueToAdd = 0
    const value = parseInt(event.target.value) || 0;

    dispatch({
      type: SET_VALUE_TO_ADD,
      payload: value,
    });
  };
  const handleSubmit = (event) => {
    // prevent form from submitting automatically
    event.preventDefault();

    // call to add value in text field and count state(state.count)
    dispatch({
      type: ADD_VALUE_TO_COUNT,
    });
  };

  return (
    <Panel className='m-3'>
      <h1 className='text-lg'>Count is {state.count}</h1>
      <div className='flex flex-row'>
        <Button onClick={increment}>Increment</Button>
        <Button onClick={decrement}>Decrement</Button>
      </div>

      <form onSubmit={handleSubmit}>
        <label>Add a lot!</label>
        <input
          // if the value in 0 inside textfield the empty the textfield and its value is sets to 0 when added to count
          value={state.valueToAdd || ""}
          onChange={handleChange}
          // event toughs the type is clearly mentioned as number but the data in console log is of type string
          type='number'
          className='p-1 m-3 bg-gray-50 border border-gray-300'
        />
        <Button>Add it!</Button>
      </form>
    </Panel>
  );
}

export default CounterPage;
