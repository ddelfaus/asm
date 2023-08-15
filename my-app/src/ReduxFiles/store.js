// store.js
import { configureStore } from '@reduxjs/toolkit'

import rootReducer from './reducers'; // Create this file later

export default configureStore({
    reducer: {
        counter : rootReducer
    }
})