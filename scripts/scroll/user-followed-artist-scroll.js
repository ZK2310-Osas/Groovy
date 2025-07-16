
const artistListRightArrow = document.querySelector(
    ".artists-list-scrollbar-box .right-arrow svg"
  );
  
  const artistListLeftArrow = document.querySelector(
    ".artists-list-scrollbar-box .left-arrow svg"
  );
  
  const artistListTabsList = document.querySelector(".artists-list-scrollbar-box ul");
  
  const artistListLeftArrowContainer = document.querySelector(".artists-list-scrollbar-box .left-arrow");
  const artistListRightArrowContainer = document.querySelector(".artists-list-scrollbar-box .right-arrow");
  
  const artistListManageIcons = () => {
    if (artistListTabsList.scrollLeft >= 20) {
      artistListLeftArrowContainer.classList.add("active");
    } else {
      artistListLeftArrowContainer.classList.remove("active");
    }
  
    let artistListMaxScrollValue = artistListTabsList.scrollWidth - artistListTabsList.clientWidth - 20;
    console.log("scroll width: ", artistListTabsList.scrollWidth);
    console.log("client width: ", artistListTabsList.clientWidth);
  
    if (artistListTabsList.scrollLeft >= artistListMaxScrollValue) {
      artistListRightArrowContainer.classList.remove("active");
    } else {
      artistListRightArrowContainer.classList.add("active");
    }
  };
  
  artistListRightArrow.addEventListener("click", () => {
    artistListTabsList.scrollLeft += 200;
    artistListManageIcons();
  });
  artistListLeftArrow.addEventListener("click", () => {
    artistListTabsList.scrollLeft -= 200;
    artistListMmanageIcons();
  });
  
  artistListTabsList.addEventListener("scroll", artistListManageIcons);
  
  