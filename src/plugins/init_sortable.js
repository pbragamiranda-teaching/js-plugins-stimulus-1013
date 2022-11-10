import Sortable from 'sortablejs';

// select the list I want to make sortable
const list = document.getElementById("results");

// create a Sortable function
const initSortable = () => {
  Sortable.create(list, {
    animation: 1500,
    // onEnd: (event) => {
    //   alert(`${event.oldIndex} moved to ${event.newIndex}`)
    // }
  })
}

export { initSortable };
