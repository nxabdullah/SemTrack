import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage' // defaults to localStorage for web
import thunk from 'redux-thunk';
import {
  courseReducer,
  addCourse,
  editCourse,
  deleteCourse,
  setSelectedCourse,
  CourseState,
} from "./slices/coursesSlice";
import {
  gradesReducer,
  addGrade,
  updateGrade,
  GradeState,
  setEdit,
  removeGrade,
} from "./slices/gradesSlice";
import {
  toastsReducer,
  ToastsState,
  addToast,
  deleteToast,
} from "./slices/toastsSlice";
import { GPAState, gpaReducer } from "./slices/gpaSlice";

export interface RootState {
  toasts: ToastsState;
  courses: CourseState;
  grades: GradeState;
  gpa: GPAState;
}

const persistConfig = {
  key: 'root',
  storage,
  blacklist: ["toasts", "gpa"] // we shouldnt have to use magic strings. 
}

const rootReducer = combineReducers({
  toasts: toastsReducer,
  courses: courseReducer,
  grades: gradesReducer,
  gpa: gpaReducer,
})

const persistedReducer = persistReducer(persistConfig, rootReducer)

const store = configureStore({
  reducer: persistedReducer,
  middleware: [thunk]
});

export const persistor = persistStore(store)

export {
  store,
  addCourse,
  editCourse,
  deleteCourse,
  setSelectedCourse,
  addGrade,
  updateGrade,
  setEdit,
  removeGrade,
  addToast,
  deleteToast,
};
