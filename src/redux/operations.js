import axios from 'axios';

export const fetchContacts = async () => {
  const { data } = await axios.get(
    `https://653d08def52310ee6a99ca39.mockapi.io/api/v1/contacts`
  );
  console.log(data);
  return data;
};

export const deleteContact = async id => {
  const { data } = await axios.delete(
    `https://653d08def52310ee6a99ca39.mockapi.io/api/v1/contacts/${id}`
  );
  return data;
};

export const addContact = async newContact => {
  const { data } = await axios.post(
    `https://653d08def52310ee6a99ca39.mockapi.io/api/v1/contacts/`,
    newContact
  );
  return data;
};
