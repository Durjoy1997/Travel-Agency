const handleOnClickGallery = (item) => {
  console.log(item);
  const element = document.getElementById(item);
  const all = document.getElementsByClassName("route-li");
  if (all) {
    for (let i = 0; i < 4; i++) {
      all[i].classList = "route-li px-4 py-2  d-block";
    }
  }
  console.log(element);
  element.className += element.className ? " active-route" : " active-route";
};
