import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchContacts = createAsyncThunk("contacts/fetchAll", async () => {
  const response = await axios.get(
    "https://65f6acb041d90c1c5e0b2028.mockapi.io/contacts"
  );
  return response.data;
});

export const addContact = createAsyncThunk(
  "contacts/addContact",
  async (newContact) => {
    const response = await axios.post(
      "https://65f6acb041d90c1c5e0b2028.mockapi.io/contacts",
      newContact
    );
    return response.data;
  }
);

export const deleteContact = createAsyncThunk(
  "contacts/deleteContact",
  async (contactId) => {
    await axios.delete(
      `https://65f6acb041d90c1c5e0b2028.mockapi.io/contacts/${contactId}`
    );
    return contactId;
  }
);
