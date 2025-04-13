## 🚀🚀Redux Beginer to Advanced

## 🧠 What is Redux?
**Redux** is a **state management library** for JavaScript apps (commonly used with React). It lets you store and manage **application-level state** (like user info, cart items, settings, etc.) in a **central place**, outside of your React components.

---

## 🔰 Beginner Level – Basics of Redux
### 🔹 Core Concepts
| Term | Meaning |
| ----- | ----- |
| **Store** | The global state container |
| **Action** | <p>A plain object that describes </p><p>_what_</p><p> happened</p> |
| **Reducer** | A function that updates state based on the action |
| **Dispatch** | Function to send actions to the reducer |

### Example Flow:
1. **User clicks a button**
2. Dispatches an **action** → `{ type: 'INCREMENT' }` 
3. **Reducer** handles the action and returns new state

## 👉npm install redux react-redux

## ⚙️ Intermediate Level – Redux Toolkit (RTK)
Redux Toolkit simplifies Redux setup and usage.

```bash
npm install @reduxjs/toolkit react-redux
```
### ✅ Why RTK?
- Less boilerplate
- Built-in `createSlice` , `configureStore` , etc.
- Easier to handle async code with `createAsyncThunk` 

### Example: Counter with RTK See the code which file folder name is-Intermediate

## 🚀 Advanced Redux – For Big Projects
### 🔥 Best Practices
1. **Use Redux Toolkit** always (reduces complexity)
2. **Slice-wise architecture**: Create one slice per feature (authSlice, userSlice, productSlice)
3. **Keep side effects (API calls) in **`**createAsyncThunk**` 
4. **Normalize data** with `entityAdapter`  when managing lists (like users, products)
5. **Use middleware** for logging, analytics, or JWT token injection
6. **Split store logic** using `combineReducers`  or modular slices
7. **Typescript** (optional but powerful in large apps)
```
🧱 Big Project Structure Example
```
```

src/
│
├── app/
│   └── store.js
│
├── features/
│   ├── auth/
│   │   ├── authSlice.js
│   │   └── Login.js
│   ├── products/
│   │   ├── productSlice.js
│   │   └── ProductList.js
│   └── users/
│       ├── userSlice.js
│       └── UserList.js
```
### 🌐 Example: Async Thunk for API Calls

### 🌐 Example: Async Thunk for API Calls
```js
// userSlice.js
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchUsers = createAsyncThunk('users/fetch', async () => {
  const response = await axios.get('/api/users');
  return response.data;
});

const userSlice = createSlice({
  name: 'users',
  initialState: { data: [], loading: false },
  extraReducers: (builder) => {
    builder
      .addCase(fetchUsers.pending, (state) => { state.loading = true })
      .addCase(fetchUsers.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload;
      });
  },
});

export default userSlice.reducer;
```
## 🔁 Summary: Roadmap
| Level | What to Learn |
| ----- | ----- |
| Beginner | Actions, Reducers, Store, useSelector/useDispatch |
| Intermediate | Redux Toolkit, Slices, Async Thunks |
| Advanced | Feature-based structure, entityAdapter, middleware, devtools, scaling techniques |

## See UseReducer Here - Github Repo--> https://github.com/ankit13819/userReducer-Hook


