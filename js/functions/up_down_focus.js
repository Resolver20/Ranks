import { focussed_element, previous_switch } from "./basic.js";

export function options_up_downer() {
document.addEventListener(
  "keydown",
  function (event) {
    try {
      let options = document.querySelectorAll(".input_options_items");
      if (event.key == "ArrowUp") {
        if (options.length > 0) {
          event.preventDefault();
          if (previous_switch.value == "down" && focussed_element.value == 1) {
            focussed_element.value = options.length; // corner_case
          } else if (
            previous_switch.value == "down" &&
            focussed_element.value == 0
          ) {
            focussed_element.value = options.length - 1; // unexpected jump to direct 0
          } else if (previous_switch.value == "down") {
            // focus goes two steps vertically as upwards one step is caused by arrowdown by default
            focussed_element.value = Math.max(focussed_element.value - 1, 0);
          } else if (focussed_element.value == 0) {
            focussed_element.value = options.length;
          }
          focussed_element.value =
            Math.max(focussed_element.value - 1, 0) % options.length;
          options[focussed_element.value].focus();
          previous_switch.value = "up";
        }
      } else if (event.key == "ArrowDown") {
        if (options.length > 0) {
          event.preventDefault();
          if (previous_switch.value == "up") {
            focussed_element.value =
              (focussed_element.value + 1) % options.length;
          }
          options[focussed_element.value].focus();
          focussed_element.value =
            (focussed_element.value + 1) % options.length;
          previous_switch.value = "down";
        }
      }
    } catch (e) {
      console.log("No focussable element on arrow key press");
    }
  },
  false
);
}
export function options_destroyer(){
  document.querySelectorAll('input[type="text"]').forEach((item) => {
    item.addEventListener(
      "focusin",
      function () {
        try {
          document.querySelector(".input_options").remove();
          focussed_element.value = 0;
          previous_switch.value = "none";
        } catch (err) {
          console.log("Not found any absolute_div");
        }
      },
      false
    );
  });
}