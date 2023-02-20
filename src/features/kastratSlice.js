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
    const response = await axios.get("http://localhost:8080/kastrat");
    return response.data;
  }
);

export const addKastrat = createAsyncThunk(
  "kastrat/addKastrat",
  async (data) => {
    const response = await axios.post("http://localhost:8080/kastrat", data, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
    return response.data;
  }
);

export const getDataById = createAsyncThunk(
  "kastrat/detailKastrat",
  async (id) => {
    const response = await axios.get(`http://localhost:8080/kastrat/${id}`);
    return response.data;
  }
);

export const deleteKastrat = createAsyncThunk(
  "kastrat/deleteKastrat",
  async (id) => {
    const response = await axios.delete(`http://localhost:8080/kastrat/${id}`);
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
      state.data = action.payload;
    },
    [getDataById.fulfilled]: (state, action) => {
      state.dataById = action.payload;
    },
    [deleteKastrat.fulfilled]: (state, action) => {
      state.data = action.payload;
    },
  },
});

export default kastratSlice.reducer;
