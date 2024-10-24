import { configureStore, ThunkAction, Action} from '@reduxjs/toolkit';
import reduxLogger from 'redux-logger';
import ProductPageReducer from '../screens/BooksPage/slice';
import CreatePageReducer from '../screens/CreatePage/slice';


export const store = configureStore({
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(reduxLogger),
  reducer: {
    productPage: ProductPageReducer,
    createPage: CreatePageReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
  >;
