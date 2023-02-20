import AsyncStorage from '@react-native-async-storage/async-storage'
import { createSlice } from '@reduxjs/toolkit'
import { type PersistConfig, persistReducer } from 'redux-persist'

type BaseReducerState = {
  data: string | null
}

const initialState: BaseReducerState = {
  data: null,
}

const basePersistConfiguration: PersistConfig<BaseReducerState> = {
  key: 'data',
  storage: AsyncStorage,
}

export const baseSlice = createSlice({
  name: 'Base',
  initialState,
  reducers: {
    setData: (state) => {
      state.data = 'data'
    },
  },
})

const baseActions = baseSlice.actions
export { baseActions }
export default persistReducer(basePersistConfiguration, baseSlice.reducer)
