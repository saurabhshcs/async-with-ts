import fetch from "node-fetch";

fetch("")
.then((res) => res.json)
.then((data) => console.log(data));