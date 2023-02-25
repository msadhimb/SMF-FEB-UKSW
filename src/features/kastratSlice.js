import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios, { AxiosHeaders } from "axios";
import Swal from "sweetalert2";

export const fetchKastrats = createAsyncThunk(
  "kastrat/getKastrat",
  async () => {
    // const response = await fetch("https://smf-api.000webhostapp.com/kastrat", {
    //   method: "GET",
    //   headers: {
    //     "Content-Type": "application/json",
    //     "Access-Control-Allow-Origin": "*",
    //     "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS",
    //   },
    //   mode: "no-cors",
    // });
    // const data = await response.json();
    // return data;
    const response = await axios.get("http://localhost:8080/kastrat");
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
    // const response = await fetch(
    //   `http://localhost:8080/kastrat/${id}`,
    //   {
    //     method: "DELETE",
    //     headers: {
    //       "Content-Type": "application/json",
    //     },
    //   }
    // ).then((response) => {
    //   Swal.fire({
    //     icon: "success",
    //     title: "Data Berhasil Dihapus",
    //     showConfirmButton: false,
    //     timer: 1500,
    //   }).catch((error) => {
    //     Swal.fire({
    //       icon: "error",
    //       title: "Oops...",
    //       text: "Something went wrong!",
    //     });
    //   });
    // });
    const response = await axios
      .delete(`http://localhost:8080/kastrat/${id}`)
      .then((response) => {
        Swal.fire({
          icon: "success",
          title: "Data Berhasil Dihapus",
          showConfirmButton: false,
          timer: 1500,
        }).catch((error) => {
          Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "Something went wrong!",
          });
        });
      });
    return response.data;
  }
);

export const getKegiatan = createAsyncThunk(
  "kegiatan/getKegiatan",
  async () => {
    const response = await axios.get("http://localhost:8080/kegiatan");
    return response.data;
  }
);

export const getDataKegiatanById = createAsyncThunk(
  "kegiatan/detailKegiatan",
  async (id) => {
    const response = await axios.get(`http://localhost:8080/kegiatan/${id}`);
    return response.data;
  }
);

export const deletekegiatan = createAsyncThunk(
  "kegiatan/deletekegiatan",
  async (id) => {
    const response = await axios
      .delete(`http://localhost:8080/kegiatan/${id}`)
      .then((response) => {
        Swal.fire({
          icon: "success",
          title: "Data Berhasil Dihapus",
          showConfirmButton: false,
          timer: 1500,
        }).catch((error) => {
          Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "Something went wrong!",
          });
        });
      });
    return response.data;
  }
);

const kastratSlice = createSlice({
  name: "kastrat",
  initialState: {
    data: [],
    dataById: [],
    dataKegiatan: [],
    dataByKegiatanId: [],
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
    [getKegiatan.fulfilled]: (state, action) => {
      state.dataKegiatan = action.payload;
    },
    [getDataKegiatanById.fulfilled]: (state, action) => {
      state.dataByKegiatanId = action.payload;
    },
    [deletekegiatan.fulfilled]: (state, action) => {
      state.dataKegiatan = action.payload;
    },
  },
});

export default kastratSlice.reducer;
