function toggleDescription(button) {
    var description = button.previousElementSibling;
    if (description.style.display === "none") {
      description.style.display = "block";
      button.textContent = "Sembunyikan deskripsi";
    } else {
      description.style.display = "none";
      button.textContent = "Baca tentang bus ini";
    }
  }
  
  function search() {
    var input, filter, gallery, items, titles, i, txtValue;
    input = document.getElementById("searchInput");
    filter = input.value.toUpperCase();
    gallery = document.getElementsByClassName("gallery")[0];
    items = gallery.getElementsByClassName("item");
    titles = gallery.getElementsByTagName("h2");
    for (i = 0; i < titles.length; i++) {
      txtValue = titles[i].textContent || titles[i].innerText;
      if (txtValue.toUpperCase().indexOf(filter) > -1) {
        items[i].style.display = "";
      } else {
        items[i].style.display = "none";
      }
    }
  }
  