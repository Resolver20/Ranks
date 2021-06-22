import { focussed_element, previous_switch } from "./basic.js";

export function focus_on_next_input(curr_tab_index) {
  let input_lists = document.querySelectorAll("input");
  for (let i = 0; i < input_lists.length; i++) {
    if (input_lists[i].tabIndex == curr_tab_index + 1) {
      input_lists[i].focus();
      break;
    }
  }
  focussed_element.value = 0;
  previous_switch.value = "none";
}
export function update_input_text(event, curr) {
  if (event.type == "click" || event.key == "Enter") {
    curr.parentElement.parentElement.querySelector("input").value = curr.innerHTML;
    let current_tab_index = curr.parentElement.parentElement.querySelector("input").tabIndex;
    let child = curr.parentElement.parentElement.querySelector(".input_options");
    curr.parentElement.parentElement.removeChild(child);
    focus_on_next_input(current_tab_index); 
  }
}