const API_KEY = "831552196309020602391x43511";
function getRandomNumber() {
  return new Promise((resolve) => {
    setTimeout(() => resolve(parseInt(Math.random() * 10)), 500);
  });
}

async function asyncCall() {
  console.log("calling");
  const result = await getRandomNumber();
  console.log(result);
  // expected output: "resolved"
}

asyncCall();

async function asyncCityCall(city) 
{
  var myHeaders = new Headers();
  myHeaders.append(
    "Cookie",
    "__cflb=0H28vTE11mXeuU6nLEGMumyL4X6iAPibZPeNgwnwcNq; xyzh=xyzh"
  );

  var requestOptions = {
    method: "GET",
    headers: myHeaders,
    redirect: "follow",
  };

  fetch(
    `https://geocode.xyz/${city}?json=1&auth=${API_KEY}`,
    requestOptions
  )
    .then((response) => response.json())
    .then((result) => console.log(city + ": " + "Latitude: " + result.latt + " Longitude: " + result.longt))
    .catch((error) => console.log("error", error));
}

asyncCityCall("Trenton");
asyncCityCall("East Orange");


