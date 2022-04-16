/* SCRIPTS THAT LOAD THE PROJECT */
import { Process } from "./process.js";

const container = document.getElementById("game-container");

document.addEventListener("DOMContentLoaded", startGame);

function startGame() {
  initServices();
}

let initServices = () => {
  let process = new Process();
};
