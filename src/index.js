import "./styles.css";
import { greeting } from "./greeting.js";
import rockImage from "./kevin-schmid-3060eOz9IQs-unsplash.jpg";

console.log(greeting);

const image = document.createElement("img");
image.src = rockImage;

document.body.appendChild(image);