import 'react-native-gesture-handler'
import React, { useEffect } from 'react'
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/lib/integration/react'
import './Translations'
import { persistor, store } from '@Store/index'
import ApplicationNavigator from '@Navigators/Application'
import BootSplash from 'react-native-bootsplash'

const App = () => {
  useEffect(() => {
    const id = setTimeout(() => {
      BootSplash.hide({ fade: true })
    }, 1000)
    return () => clearTimeout(id)
  }, [])

  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <ApplicationNavigator />
      </PersistGate>
    </Provider>
  )
}

export default App
