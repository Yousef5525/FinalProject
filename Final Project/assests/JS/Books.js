var hovering = function () {
  $("ul").show("slide", { direction: "right" }, 1000);
};

var leaving = function () {
  $("ul").hide("slide", { direction: "left" }, 1000);
};

$("container").hover(hovering, leaving);
