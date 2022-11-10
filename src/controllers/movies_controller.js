import { Controller } from "@hotwired/stimulus"

export default class extends Controller {
  static targets = [ "input", "list" ]

  connect() {
    // console.log("Im beging exectued on refresh!");
    // console.log(this);
    this.fetchMovies("Batman");
  }

  search(event) {
    // console.log(this.inputTarget.value);
    event.preventDefault()
    this.listTarget.innerHTML = ""
    this.fetchMovies(this.inputTarget.value)
  }

  fetchMovies(query) {
    fetch(`http://www.omdbapi.com/?s=${query}&apikey=a617c3b6`)
      .then(response => response.json())
      .then(data => this.insertMovies(data))
  }

  insertMovies(data) {
    data.Search.forEach((result) => {
      const movieTag = `<li class="list-group-item border-0">
        <img src="${result.Poster}" alt="" width="100">
      </li>`
      this.listTarget.insertAdjacentHTML("beforeend", movieTag)
    })
  }
}
