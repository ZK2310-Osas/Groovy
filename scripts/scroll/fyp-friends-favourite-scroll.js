
const friendsFavouriteRightArrow = document.querySelector(
    ".friendsFavourite-scrollbar-box .right-arrow svg"
  );
  
  const friendsFavouriteLeftArrow = document.querySelector(
    ".friendsFavourite-scrollbar-box .left-arrow svg"
  );
  
  const friendsFavouriteTabsList = document.querySelector(".friendsFavourite-scrollbar-box ul");
  
  const friendsFavouriteLeftArrowContainer = document.querySelector(".friendsFavourite-scrollbar-box .left-arrow");
  const friendsFavouriteRightArrowContainer = document.querySelector(".friendsFavourite-scrollbar-box .right-arrow");
  
  const friendsFavouriteManageIcons = () => {
    if (friendsFavouriteTabsList.scrollLeft >= 20) {
      friendsFavouriteLeftArrowContainer.classList.add("active");
    } else {
      friendsFavouriteLeftArrowContainer.classList.remove("active");
    }
  
    let friendsFavouriteMaxScrollValue = friendsFavouriteTabsList.scrollWidth - friendsFavouriteTabsList.clientWidth - 20;
    console.log("scroll width: ", friendsFavouriteTabsList.scrollWidth);
    console.log("client width: ", friendsFavouriteTabsList.clientWidth);
  
    if (friendsFavouriteTabsList.scrollLeft >= friendsFavouriteMaxScrollValue) {
      friendsFavouriteRightArrowContainer.classList.remove("active");
    } else {
      friendsFavouriteRightArrowContainer.classList.add("active");
    }
  };
  
  friendsFavouriteRightArrow.addEventListener("click", () => {
    friendsFavouriteTabsList.scrollLeft += 200;
    friendsFavouriteManageIcons();
  });
  friendsFavouriteLeftArrow.addEventListener("click", () => {
    friendsFavouriteTabsList.scrollLeft -= 200;
    friendsFavouriteManageIcons();
  });
  
  friendsFavouriteTabsList.addEventListener("scroll", friendsFavouriteManageIcons);
  
  