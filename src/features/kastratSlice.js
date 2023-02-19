import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios, { AxiosHeaders } from "axios";

export const login = createAsyncThunk("user/login", async (data) => {
  const response = await axios.post(
    "https://uksw-api.000webhostapp.com/login",
    {
      email: "admin@gmail.com",
      password: 123,
    }
  );
  console.log(response.data);
  return response.data;
});

export const fetchKastrats = createAsyncThunk(
  "kastrat/getKastrat",
  async () => {
    const response = await axios.get(
      "https://uksw-api.000webhostapp.com/kastrat"
    );
    return response.data;
  }
);

export const getDataById = createAsyncThunk(
  "kastrat/detailKastrat",
  async (id) => {
    const response = await axios.get(
      `https://uksw-api.000webhostapp.com/kastrat/${id}`
    );
    return response.data;
  }
);

export const deleteKastrat = createAsyncThunk(
  "kastrat/deleteKastrat",
  async (id) => {
    const response = await fetch(
      `https://uksw-api.000webhostapp.com/kastrat-delete/${id}`,
      {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    return response.data;
  }
);

const kastratSlice = createSlice({
  name: "kastrat",
  initialState: {
    data: [],
    dataById: [],
    token: "",
  },

  extraReducers: {
    [fetchKastrats.fulfilled]: (state, action) => {
      state.data = action.payload.kastrat;
    },
    [getDataById.fulfilled]: (state, action) => {
      state.dataById = action.payload.kastrat_id;
    },
    [deleteKastrat.fulfilled]: (state, action) => {
      state.data = state.data.filter((item) => item.id !== action.payload.id);
    },
    [login.fulfilled]: (state, action) => {
      state.token = action.payload.token;
    },
  },
});

export default kastratSlice.reducer;
