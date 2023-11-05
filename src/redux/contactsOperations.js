import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

axios.defaults.baseURL =
  'https://65426b23ad8044116ed358c5.mockapi.io';

export const fetchContacts = createAsyncThunk(
  'Phonebook/fetchAll',
  async (_, thunkAPI) => {
    try {
      const response = await axios.get('/Phonebook');
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const addContact = createAsyncThunk(
  'Phonebook/addContact',
  async (newContact, thunkAPI) => {
    try {
      const response = await axios.post('/Phonebook', newContact);
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const deleteContact = createAsyncThunk(
  'Phonebook/deleteContact',
  async (contactId, thunkAPI) => {
    try {
      const response = await axios.delete(`/Phonebook/${contactId}`);
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);
