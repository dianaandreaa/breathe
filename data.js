// const url = "https://semester02t7-00e2.restdb.io/rest/breathe-text?max=4";
// const url1 = "https://semester02t7-00e2.restdb.io/rest/breathe-advice?max=4";

// //The API-Key:

// const options = {
//   headers: {
//     "x-apikey": "60352dbc5ad3610fb5bb658c",
//   },
// };

// fetch(url, options)
//   .then((response) => {
//     if (!response.ok) {
//       throw Error(response.statusText);
//     }
//     return response.json();
//   })
//   .then((data) => {
//     //we have the data
//     console.log(data);
//     //handle the data
//     handleData(data);
//   })
//   .catch((e) => {
//     console.error("An Error Occured:", e.message);
//   });

// fetch(url1, options)
//   .then((response) => {
//     if (!response.ok) {
//       throw Error(response.statusText);
//     }
//     return response.json();
//   })
//   .then((data1) => {
//     //we have the data
//     console.log(data1);
//     //handle the data
//     handleData1(data1);
//   })
//   .catch((e) => {
//     console.error("An Error Occured:", e.message);
//   });

const urlParams = new URLSearchParams(window.location.search);
//in the url grab id and store them under id
const feeling = urlParams.get("feeling");
document.body.classList.add(feeling)
let id;

if (feeling == "angry") {
    id = "60352a0e9fc7b60c00017f91"
}

if (feeling == "sad") {
    id = "603529cd9fc7b60c00017f8a"
}

if (feeling == "happy") {
    id = "60352a2d9fc7b60c00017f9a"
}
const url =
  "https://semester02t7-00e2.restdb.io/rest/breathe-advice/"+id;

//The API-Key:

const options = {
  headers: {
    "x-apikey": "60352dbc5ad3610fb5bb658c",
  },
};

fetch(url, options)
  .then((res) => res.json())
  .then((data) => {
    //we have the data
    // console.log(data);
    //handle the data
    showEmotion(data);
  })
  .catch((e) => {
    console.error("An Error Occured:", e.message);
  });

function showEmotion(emotion) {
  console.log(emotion);

  //populate site
  document.querySelector(".category").textContent =
    "You're feeling " + emotion.category + "!";
  document.querySelector(".description").textContent = emotion.description;
  document.querySelector(".title").textContent = emotion.title;
  document.querySelector(".advice1").textContent = emotion.advice_1;
  document.querySelector(".advice2").textContent = emotion.advice_2;
  document.querySelector(".advice3").textContent = emotion.advice_3;
  document.querySelector("img").src =
    "https://semester02t7-00e2.restdb.io/media/" + emotion.img;
}

// TEXT: category description img
// ADVICE: category title advice_1 advice_2 advice_3 img
