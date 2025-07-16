
const recentPlayedRightArrow = document.querySelector(
    ".recent-played-scrollbar-box .right-arrow svg"
  );
  
  const recentPlayedLeftArrow = document.querySelector(
    ".recent-played-scrollbar-box .left-arrow svg"
  );
  
  const recentPlayedTabsList = document.querySelector(".recent-played-scrollbar-box ul");
  
  const recentPlayedLeftArrowContainer = document.querySelector(".recent-played-scrollbar-box .left-arrow");
  const recentPlayedRightArrowContainer = document.querySelector(".recent-played-scrollbar-box .right-arrow");
  
  const recentPlayedManageIcons = () => {
    if (recentPlayedTabsList.scrollLeft >= 20) {
      recentPlayedLeftArrowContainer.classList.add("active");
    } else {
      recentPlayedLeftArrowContainer.classList.remove("active");
    }
  
    let recentPlayedMaxScrollValue = recentPlayedTabsList.scrollWidth - recentPlayedTabsList.clientWidth - 20;
    console.log("scroll width: ", recentPlayedTabsList.scrollWidth);
    console.log("client width: ", recentPlayedTabsList.clientWidth);
  
    if (recentPlayedTabsList.scrollLeft >= recentPlayedMaxScrollValue) {
      recentPlayedRightArrowContainer.classList.remove("active");
    } else {
      recentPlayedRightArrowContainer.classList.add("active");
    }
  };
  
  recentPlayedRightArrow.addEventListener("click", () => {
    recentPlayedTabsList.scrollLeft += 200;
    recentPlayedManageIcons();
  });
  recentPlayedLeftArrow.addEventListener("click", () => {
    recentPlayedTabsList.scrollLeft -= 200;
    recentPlayedManageIcons();
  });
  
  recentPlayedTabsList.addEventListener("scroll", recentPlayedManageIcons);
  
  