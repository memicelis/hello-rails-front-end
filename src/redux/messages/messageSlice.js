import { createSlice, createAsyncThunk} from "@reduxjs/toolkit";
import axios from 'axios'


export const fetchGreeting = createAsyncThunk('greeting/fetchGreeting', async () => {
    try {
      const response = await axios.get('http://127.0.0.1:3000/api/greetings', {
        headers: {
          'Access-Control-Allow-Origin': '*',
        },
      });
  
      const data = response.data;
      const randomIndex = Math.floor(Math.random() * data.length);
      const randomGreeting = data.length > 0 ? data[randomIndex].content : null;
  
      return randomGreeting;
    } catch (error) {
      console.error('Error fetching random greeting', error);
      throw error;
    }
  });

const greetingSlice = createSlice({
    name: 'greeting',
    initialState:{
        value: '',
        loading: false,
        error: false,
        success: false,
        message: '',
    },
    reducers: {},
    extraReducers: (builder) =>{
        builder
        .addCase(fetchGreeting.pending, (state)=>{
            state.loading = true;
            state.error = false;
            state.success = false;
            state.message= '';
        })
        .addCase(fetchGreeting.fulfilled, (state, action) =>{
            state.value = action.payload;
            state.loading = false;
            state.error = false;
            state.success = true;
            state.message = 'Data fetched successfully';
        })
        .addCase(fetchGreeting.rejected, (state, action) => {
            state.loading = false;
            state.error = true;
            state.success = false;
            state.message = `Error fetching data: ${action.error.message}`
        })
    }
});

export const selectGreeting = (state) => state.greeting.value;

export default greetingSlice.reducer;