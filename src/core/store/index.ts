import { type Middleware, configureStore } from '@reduxjs/toolkit'
import { logger } from 'redux-logger'
import { FLUSH, PAUSE, PERSIST, PURGE, REGISTER, REHYDRATE, persistStore } from 'redux-persist'
import createSagaMiddleware from 'redux-saga'
import rootSaga from './sagas'

const sagaMiddleware = createSagaMiddleware()
const middlewares: Middleware[] = [sagaMiddleware]
if (__DEV__) {
  middlewares.push(logger)
}

const store = configureStore({
  reducer: {},
  middleware: (getDefaultMiddleware) => {
    return [
      ...getDefaultMiddleware({
        thunk: true,
        serializableCheck: {
          ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
        },
      }),
      ...middlewares,
    ]
  },
})

sagaMiddleware.run(rootSaga)

const persistor = persistStore(store, null, () => {})

export { persistor, store }

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
