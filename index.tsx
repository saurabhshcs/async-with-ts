import fetch from "node-fetch";

//This API is gonna test pokemon api for learning of the async method and promise concept
fetch("")
.then((res) => res.json)
.then((data) => console.log(data));