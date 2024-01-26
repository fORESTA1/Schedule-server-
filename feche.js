async function postData(url = "", data = {}){
  const response = await fetch(
    url,
    {
      method: "GET",
      mode: "cors",
      cache: "no-cache",
      credentials: "same-origin",
    }
  );
  return response.json();
}

postData("http://localhost:3000/schedule", { answer: 42 }).then((data) => {
  console.log(data);
});