# Redux Toolkit
library test


## How Redux toolkit works behinds the scenes

- How Redux understand reducers
<img width="667" height="223" alt="Screenshot 2026-06-01 at 22 41 29" src="https://github.com/user-attachments/assets/5710fd3e-93ca-400b-a038-459170338b7d" />

- What happens when actions are called?
<img width="525" height="382" alt="Screenshot 2026-06-01 at 22 42 22" src="https://github.com/user-attachments/assets/dc37a8d1-c3ec-4f78-bfc2-e4de955e2ca5" />

<img width="217" height="314" alt="Screenshot 2026-06-01 at 22 50 10" src="https://github.com/user-attachments/assets/bd25c3c5-6fd8-492d-ad1b-3059105ca7f3" />

## Immer
- React Redux doesn't use Immer, so direct changes aren't possible. Need return a new object
```javascript
function userReducer(state = initialState, action: any) {
  switch (action.type) {
    case "SET_NAME":
      return {
        ...state,
        name: action.payload,
      };

    case "CLEAR_NAME":
      return {
        ...state,
        name: "",
      };

    default:
      return state;
  }
}
```
- Workflow immer
<img width="836" height="360" alt="Screenshot 2026-06-01 at 23 00 04" src="https://github.com/user-attachments/assets/a6e7df16-d661-4e64-94b5-4749a4f9cbe0" />

### Producer
- These are the signatures hidden beneath Immer's work
- The Immer package exposes a produce function that does all the work

```javascript
produce(baseState, recipe: (draftState) => void): nextState
```

##### How Producer works
- createSlice use createReducer
- create reducer use produce


```javascript
import { produce } from "immer";

function reducer(state, action) {
  switch (action.type) {
    case "user/setName":
      return produce(
        state,
        draft => {
          draft.name = action.payload;
        }
      );

    default:
      return state;
  }
}
```

