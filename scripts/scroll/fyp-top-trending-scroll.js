
const topTrendingRightArrow = document.querySelector(
    ".topTrending-scrollbar-box .right-arrow svg"
  );
  
  const topTrendingLeftArrow = document.querySelector(
    ".topTrending-scrollbar-box .left-arrow svg"
  );
  
  const topTrendingTabsList = document.querySelector(".topTrending-scrollbar-box ul");
  
  const topTrendingLeftArrowContainer = document.querySelector(".topTrending-scrollbar-box .left-arrow");
  const topTrendingRightArrowContainer = document.querySelector(".topTrending-scrollbar-box .right-arrow");
  
  const topTrendingManageIcons = () => {
    if (topTrendingTabsList.scrollLeft >= 20) {
      topTrendingLeftArrowContainer.classList.add("active");
    } else {
      topTrendingLeftArrowContainer.classList.remove("active");
    }
  
    let topTrendingMaxScrollValue = topTrendingTabsList.scrollWidth - topTrendingTabsList.clientWidth - 20;
    console.log("scroll width: ", topTrendingTabsList.scrollWidth);
    console.log("client width: ", topTrendingTabsList.clientWidth);
  
    if (topTrendingTabsList.scrollLeft >= topTrendingMaxScrollValue) {
      topTrendingRightArrowContainer.classList.remove("active");
    } else {
      topTrendingRightArrowContainer.classList.add("active");
    }
  };
  
  topTrendingRightArrow.addEventListener("click", () => {
    topTrendingTabsList.scrollLeft += 200;
    topTrendingManageIcons();
  });
  topTrendingLeftArrow.addEventListener("click", () => {
    topTrendingTabsList.scrollLeft -= 200;
    topTrendingManageIcons();
  });
  
  topTrendingTabsList.addEventListener("scroll", topTrendingManageIcons);
  
  