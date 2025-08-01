import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";




const initialState = {
    habits: [],
    isLoading: false,
    error: null,
};

export const fetchHabits = createAsyncThunk("habits/fetchHabits", async () => {
    // Simulating an API call
    await new Promise((resolve) => setTimeout(resolve, 1000));
    const mockHabits = [
        {
            id: "1",
            name: "Read",
            frequency: "daily",
            completedDates: [],
            createdAt: new Date().toISOString(),
        },
        {
            id: "2",
            name: "Exercise",
            frequency: "daily",
            completedDates: [],
            createdAt: new Date().toISOString(),
        },
    ];
    return mockHabits;
});


const habitSlice = createSlice({
    name: 'habit',
    initialState,
    reducers: {
        addHabit: (state, action) => {
            const newHabit = {
                id: Date.now().toString(),
                name: action.payload.name,
                frequency: action.payload.frequency,
                completedDates: [],
                createdAt: new Date().toISOString(),
            }
            // mutate state
            state.habits.push(newHabit);
        },
        removeHabit: (state, action) => {
            state.habits = state.habits.filter(habit => habit.id !== action.payload);
        },
        toggleHabit: (state, action) => {
            const habit = state.habits.find(h => h.id === action.payload.id);
            if (habit) {
                const index = habit.completedDates.indexOf(action.payload.date);
                if (index > -1) {
                    habit.completedDates.splice(index, 1);
                } else {
                    habit.completedDates.push(action.payload.habit);
                }
            }
        },
        extraReducers: (builder) => {
            builder
                .addCase(fetchHabits.pending, (state) => {
                    state.isLoading = true;
                })
                .addCase(fetchHabits.fulfilled, (state, action) => {
                    state.isLoading = false;
                    state.habits = action.payload;
                })
                .addCase(fetchHabits.rejected, (state, action) => {
                    state.isLoading = false;
                    state.error = action.error.message || "Failed to fetch habits";
                });
        },
    }
});

export const { addHabit, removeHabit, toggleHabit } = habitSlice.actions;
export default habitSlice.reducer;

