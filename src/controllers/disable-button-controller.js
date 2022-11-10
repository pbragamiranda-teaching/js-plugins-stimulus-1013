import { Controller } from "@hotwired/stimulus"

export default class extends Controller {
  static targets = [ "button", "reset" ]

  connect() {
    // console.log("Hello from our first Stimulus controller");
  }

  disable() {
    console.log(this.buttonTarget);
    // change the text from Click me! to Bingo!
    this.buttonTarget.innerText = "Bingo!"
    // disable the button
    this.buttonTarget.setAttribute("disabled", "")
    // remote display none from Reset button
    this.resetTarget.classList.remove("d-none")
  }

  rollback() {
    this.buttonTarget.innerText = "Click Me!"
    this.buttonTarget.removeAttribute("disabled")
    this.resetTarget.classList.add("d-none")
  }
}
