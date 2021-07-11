import { focussed_element, previous_switch } from "./help.js";

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
export function recommend_input_options(current,data,input_value) {
      let absolute_div = document.createElement("div");
      absolute_div.setAttribute("class", "input_options");
      current.parentElement.appendChild(absolute_div);
      for (let i = 0; i < data.length; i++) {
        if (input_value == data[i].slice(0, input_value.length)) {
          let child_option = document.createElement("div");
          child_option.setAttribute("class", "input_options_items");
          child_option.setAttribute("tabindex", "0");
          child_option.innerHTML = data[i];

          child_option.addEventListener( "click", function (event) {
              update_input_text(event, this);
            },
            false
          );
          absolute_div.appendChild(child_option);
        }
      }
}