import React, { useReducer, useContext, useEffect, useRef } from "react";
//useEffect (to store our data when data changes ...so we dont lose all items on refreash)
//useReducer for easy updating of complex pieces of data
//reducer function (as in Redux)
//-->Reducers specify how the application's state changes in response to actions sent to the store
//Context for passing  data to child

//...(spread) to pass whole state obj
function appReducer(state, action) {
  switch (action.type) {
    case "reset": {
      return action.payload;
    }
    case "add": {
      return [
        ...state,
        {
          id: Date.now(),
          text: "",
          completed: false
        }
      ];
    }
    //filter out that is not that payload(by id)
    case "delete": {
      return state.filter(item => item.id !== action.payload);
    }
    //state.map --->because we need to return new object
    case "completed": {
      return state.map(item => {
        if (item.id === action.payload) {
          return {
            ...item,
            completed: !item.completed
          };
        }
        //if its not that item -->return it without modifing it
        return item;
      });
    }
    default: {
      return state;
    }
  }
}

const Context = React.createContext();

//custom separate hook , so its not inline (does same thing as useRef)
function useEffectOnce(callback) {
  //we use it in 'useEffect' by removing 2nd param [] there (works both ways)
  const didRun = useRef(false); //like instance in class components (used to save state in func component)
  //here we save raw data(unparsed)
  useEffect(() => {
    if (!didRun.current) {
      callback();

      didRun.current = true;
    }
  }); // [] param specifies that its only run once !!! else it will loop multiple times(infinite loop)
}

export default function TodosHooksApp() {
  const [state, dispatch] = useReducer(appReducer, []);

  useEffectOnce(() => {
    const rawData = localStorage.getItem("data");
    dispatch({ type: "reset", payload: JSON.parse(rawData) });
  });

  useEffect(() => {
    localStorage.setItem("data", JSON.stringify(state));
  }, [state]); // 2nd param [state] tells to only run this when state value changes

  return (
    <Context.Provider value={dispatch}>
      <h1>Todos App</h1>
      <button onClick={() => dispatch({ type: "add" })}>New Todo</button>
      <TodosList items={state} />
    </Context.Provider>
  );
}

function TodosList({ items }) {
  return items.map(item => <TodoItem key={item.id} {...item} />);
}

function TodoItem({ id, text, completed }) {
  const dispatch = useContext(Context); //provide context to the child
  return (
    <div>
      <input
        type="checkbox"
        checked={completed}
        onChange={() => dispatch({ type: "completed", payload: id })}
      />
      <input type="text" defaultValue={text} />
      <button onClick={() => dispatch({ type: "delete", payload: id })}>
        Delete
      </button>
    </div>
  );
}
//render item's on the page  (We're dispatching--> action.type which returns new item(Date.now()) )
//    <Context.Provider value={dispatch}> -->any child of provider can grab'value' to use in local area

//useRef before custom hook implementation

//   //we use it in 'useEffect' by removing 2nd param [] there (works both ways)
//   const didRun = useRef(false); //like instance in class components (used to save state in func component)

//   //here we save raw data(unparsed)
//   useEffect(() => {
//     if (!didRun.current) {
//       const rawData = localStorage.getItem("data");
//       dispatch({ type: "reset", payload: JSON.parse(rawData) });
//       didRun.current = true;
//     }
//   }); // [] param specifies that its only run once !!! else it will loop multiple times(infinite loop)
