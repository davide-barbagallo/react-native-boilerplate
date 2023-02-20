import React, { type FC } from 'react'
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'
import AppStack from '@core/navigation/stack'
import { persistor, store } from '@core/store'
import { LocalizationProvider } from '@locales/localizationContext'

const App: FC = () => {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor} loading={null}>
        <LocalizationProvider>
          <AppStack />
        </LocalizationProvider>
      </PersistGate>
    </Provider>
  )
}

export default App
