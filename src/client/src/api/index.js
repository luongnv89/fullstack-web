// read and pass the environment variables into reactjs application
const URL = `http://localhost:31057`;
// Comment the above line and uncomment the bellow one for production
// const URL = "";

// MODELS
export const sendRequestAllROMs = async () => {
  const url = `${URL}/api/roms`;
  const response = await fetch(url);
  const data = await response.json();
  if (data.error) {
    throw data.error;
  }
  return data.roms;
}

// export const requestDeleteModel = async (modelFileName) => {
//   const url = `${URL}/api/models/${modelFileName}`;
//   const response = await fetch(url,{
//     method: 'DELETE',
//   });
//   const data = await response.json();
//   if (data.error) {
//     throw data.error;
//   }
//   return data.result;
// }

// export const uploadModel = async (model) => {
//   const url = `${URL}/api/models`;
//   const response = await fetch(url,{
//     method: 'POST',
//     headers: {
//       'Content-Type':'application/json'
//     },
//     body: JSON.stringify({model})
//   });
//   const data = await response.json();
//   if (data.error) {
//     throw data.error;
//   }
//   return data.modelFileName;
// };