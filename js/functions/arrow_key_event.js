import { focussed_element, previous_switch } from "./help.js";

// add class to the focussed element
export function add_class(element, class_name) {
  element.classList.add(class_name);
  element.addEventListener("keydown", function(event) {
    if(event.key=="Enter"){
      console.log(this);
      console.log("From colored Text");
  }});
}
//remove class to the element
export function remove_class(elements, class_name) {
  elements.forEach((elem)=>{elem.classList.remove(class_name);});
}

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
            remove_class(options,"color_up");
            add_class( options[focussed_element.value],"color_up");
          previous_switch.value = "up";
        }
      } else if (event.key == "ArrowDown") {
        if (options.length > 0) {
          event.preventDefault();
          if (previous_switch.value == "up") {
            focussed_element.value =
              (focussed_element.value + 1) % options.length;
          }
            remove_class(options, "color_up");
            add_class(options[focussed_element.value], "color_up");
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