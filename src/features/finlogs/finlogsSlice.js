import { createSlice, nanoid } from '@reduxjs/toolkit'

const initialState = [
  { id: '1', category: 'Thu', amount: '673000000000000', description: 'Kho báu ngoài biển' },
  { id: '2', category: 'Chi', amount: '5000000', description: 'Tiền nuôi con' }
]

const finlogSlice = createSlice({
  name: 'finlog',
  initialState,
  reducers: {
    finlogAdd: {
      reducer(state, action) {
        state.push(action.payload)
      },
      prepare(category, amount, description) {
        return {
          payload: {
            id: nanoid(),
            category,
            amount,
            description
          }
        }
      }
    }
  }
})

export const { finlogAdd } = finlogSlice.actions

export default finlogSlice.reducer