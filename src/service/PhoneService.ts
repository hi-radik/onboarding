import { useNavigate } from "react-router-dom";

// const handleSubmit = (event) => {

//     event.preventDefault();

//     fetchPhone({
//         phoneNumber: inputField.username,
//         
//     });
// }

const API_HOST: string = "www.google.com";
const navigate = useNavigate()

export const fetchPhone = async (phoneNumber:any) => {
  var url = `${API_HOST}/auth/login/`;

  await fetch(url, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },

    body: JSON.stringify(phoneNumber),
  })
    .then((response) => {
      switch (response.status) {
        case 200:
          navigate("confirm");
          break;
      }
      return response.json();
    })
    // .then((data) => {
    //   localStorage.setItem("token", data.access);
    //   localStorage.setItem("refresh", data.refresh);
    // })
    .catch(function (err) {
      console.info(err + " url: " + url);
    });
};
