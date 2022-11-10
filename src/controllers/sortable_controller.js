import { Controller } from "@hotwired/stimulus"
import Sortable from 'sortablejs';

export default class extends Controller {
  static targets = [ "results" ]

  connect() {
    // console.log(this.resultsTarget);
    Sortable.create(this.resultsTarget, {
      animation: 1500
    });
  }
}
