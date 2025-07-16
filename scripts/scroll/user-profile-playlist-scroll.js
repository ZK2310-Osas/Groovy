
const playlistsListRightArrow = document.querySelector(
    ".playlistsList-scrollbar-box .right-arrow svg"
  );
  
  const playlistsListLeftArrow = document.querySelector(
    ".playlistsList-scrollbar-box .left-arrow svg"
  );
  
  const playlistsListTabsList = document.querySelector(".playlistsList-scrollbar-box ul");
  
  const playlistsListLeftArrowContainer = document.querySelector(".playlistsList-scrollbar-box .left-arrow");
  const playlistsListRightArrowContainer = document.querySelector(".playlistsList-scrollbar-box .right-arrow");
  
  const playlistsListManageIcons = () => {
    if (playlistsListTabsList.scrollLeft >= 20) {
      playlistsListLeftArrowContainer.classList.add("active");
    } else {
      playlistsListLeftArrowContainer.classList.remove("active");
    }
  
    let playlistsListMaxScrollValue = playlistsListTabsList.scrollWidth - playlistsListTabsList.clientWidth - 20;
    console.log("scroll width: ", playlistsListTabsList.scrollWidth);
    console.log("client width: ", playlistsListTabsList.clientWidth);
  
    if (playlistsListTabsList.scrollLeft >= playlistsListMaxScrollValue) {
      playlistsListRightArrowContainer.classList.remove("active");
    } else {
      playlistsListRightArrowContainer.classList.add("active");
    }
  };
  
  playlistsListRightArrow.addEventListener("click", () => {
    playlistsListTabsList.scrollLeft += 200;
    playlistsListManageIcons();
  });
  playlistsListLeftArrow.addEventListener("click", () => {
    playlistsListTabsList.scrollLeft -= 200;
    playlistsListMmanageIcons();
  });
  
  playlistsListTabsList.addEventListener("scroll", playlistsListManageIcons);
  
  