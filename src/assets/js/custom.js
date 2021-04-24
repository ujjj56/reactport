$(".split").each(function () {
    let text = $(this).text();
    let split = text.split("").join("</span><span aria-hidden='true'>");
    split = "<span aria-hidden='true'>" + split + "</span>";
    $(this).html(split).attr("aria-label", text);
});

// page transition
function pageClick() {
    document.querySelectorAll(".page__click").forEach((elem) => {
      elem.addEventListener("click", (e) => {
        e.preventDefault();
        const hrefName = elem.innerText.toLowerCase();
        console.log(hrefName);
        document.getElementById("loader").style.visibility = "visible";
        document.getElementById("loader").classList.add("loader__active");
        setTimeout(() => {
          window.location.href =
            "http://ujjj.dothome.co.kr/reactPF/pages/" + hrefName + ".html";
        }, 1000);
      });
    });
  }
pageClick();