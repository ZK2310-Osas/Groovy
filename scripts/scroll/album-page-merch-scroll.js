
const albumPageMerchRightArrow = document.querySelector(
    ".albumPageMerch-scrollbar-box .right-arrow svg"
  );
  
  const albumPageMerchLeftArrow = document.querySelector(
    ".albumPageMerch-scrollbar-box .left-arrow svg"
  );
  
  const albumPageMerchTabsList = document.querySelector(".albumPageMerch-scrollbar-box ul");
  
  const albumPageMerchLeftArrowContainer = document.querySelector(".albumPageMerch-scrollbar-box .left-arrow");
  const albumPageMerchRightArrowContainer = document.querySelector(".albumPageMerch-scrollbar-box .right-arrow");
  const scrollStep = 350;

  
  const albumPageMerchManageIcons = () => {
    if (albumPageMerchTabsList.scrollLeft >= 20) {
      albumPageMerchLeftArrowContainer.classList.add("active");
    } else {
      albumPageMerchLeftArrowContainer.classList.remove("active");
    }
  
    let albumPageMerchMaxScrollValue = albumPageMerchTabsList.scrollWidth - albumPageMerchTabsList.clientWidth - 20;
    console.log("scroll width: ", albumPageMerchTabsList.scrollWidth);
    console.log("client width: ", albumPageMerchTabsList.clientWidth);
  
    if (albumPageMerchTabsList.scrollLeft >= albumPageMerchMaxScrollValue) {
      albumPageMerchRightArrowContainer.classList.remove("active");
    } else {
      albumPageMerchRightArrowContainer.classList.add("active");
    }
  };
  
  albumPageMerchRightArrow.addEventListener("click", () => {
    albumPageMerchTabsList.scrollLeft += scrollStep;
    albumPageMerchManageIcons();
  });
  albumPageMerchLeftArrow.addEventListener("click", () => {
    albumPageMerchTabsList.scrollLeft -= scrollStep;
    albumPageMerchManageIcons();
  });
  
  albumPageMerchTabsList.addEventListener("scroll", albumPageMerchManageIcons);
  
  