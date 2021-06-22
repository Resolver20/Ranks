import { options_up_downer,options_destroyer } from "./up_down_focus.js";

export var focussed_element = { value: 0 };
export var previous_switch = { value: "none" };

export function help() {
  let p = document.getElementById("help");
  let q = document.getElementById("instructions");
  if (p.style.display == "none") {
    p.style.display = "block";
    q.innerHTML = "Hide_instructions";
  } else {
    p.style.display = "none";
    q.innerHTML = "Show_instructions";
  }
}
export function initialize_all_event_listeners() {
  options_destroyer();
  options_up_downer();
}
