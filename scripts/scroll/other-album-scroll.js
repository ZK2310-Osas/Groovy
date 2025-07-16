
const OtherAlbumRightArrow = document.querySelector(
    ".albumPageOtherAlbum-scrollbar-box .right-arrow svg"
  );
  
  const OtherAlbumLeftArrow = document.querySelector(
    ".albumPageOtherAlbum-scrollbar-box .left-arrow svg"
  );
  
  const OtherAlbumTabsList = document.querySelector(".albumPageOtherAlbum-scrollbar-box ul");
  
  const OtherAlbumLeftArrowContainer = document.querySelector(".albumPageOtherAlbum-scrollbar-box .left-arrow");
  const OtherAlbumRightArrowContainer = document.querySelector(".albumPageOtherAlbum-scrollbar-box .right-arrow");
  

  
  const OtherAlbumManageIcons = () => {
    if (OtherAlbumTabsList.scrollLeft >= 20) {
      OtherAlbumLeftArrowContainer.classList.add("active");
    } else {
      OtherAlbumLeftArrowContainer.classList.remove("active");
    }
  
    let OtherAlbumMaxScrollValue = OtherAlbumTabsList.scrollWidth - OtherAlbumTabsList.clientWidth - 20;
    console.log("scroll width: ", OtherAlbumTabsList.scrollWidth);
    console.log("client width: ", OtherAlbumTabsList.clientWidth);
  
    if (OtherAlbumTabsList.scrollLeft >= OtherAlbumMaxScrollValue) {
      OtherAlbumRightArrowContainer.classList.remove("active");
    } else {
      OtherAlbumRightArrowContainer.classList.add("active");
    }
  };
  
  OtherAlbumRightArrow.addEventListener("click", () => {
    OtherAlbumTabsList.scrollLeft += scrollStep;
    OtherAlbumManageIcons();
  });
  OtherAlbumLeftArrow.addEventListener("click", () => {
    OtherAlbumTabsList.scrollLeft -= scrollStep;
    OtherAlbumManageIcons();
  });
  
  OtherAlbumTabsList.addEventListener("scroll", OtherAlbumManageIcons);
  
  