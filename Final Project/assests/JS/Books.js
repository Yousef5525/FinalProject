function ChangeBox(type) {
  if (type == "history") {
    document.getElementById("history").style.display = "flex";
    document.getElementById("novel").style.display = "none";
    document.getElementById("islam").style.display = "none";
  } else if (type == "novel") {
    document.getElementById("history").style.display = "none";
    document.getElementById("novel").style.display = "flex";
    document.getElementById("islam").style.display = "none";
  } else if (type == "islam") {
    document.getElementById("history").style.display = "none";
    document.getElementById("novel").style.display = "none";
    document.getElementById("islam").style.display = "flex";
  } else if (type == "all") {
    document.getElementById("history").style.display = "flex";
    document.getElementById("novel").style.display = "flex";
    document.getElementById("islam").style.display = "flex";
  }
}
