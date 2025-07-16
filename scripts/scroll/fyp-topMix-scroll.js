
const topMixRightArrow = document.querySelector(
    ".topMix-scrollbar-box .right-arrow svg"
  );
  
  const topMixLeftArrow = document.querySelector(
    ".topMix-scrollbar-box .left-arrow svg"
  );
  
  const topMixTabsList = document.querySelector(".topMix-scrollbar-box ul");
  
  const topMixLeftArrowContainer = document.querySelector(".topMix-scrollbar-box .left-arrow");
  const topMixRightArrowContainer = document.querySelector(".topMix-scrollbar-box .right-arrow");
  
  const topMixManageIcons = () => {
    if (topMixTabsList.scrollLeft >= 20) {
      topMixLeftArrowContainer.classList.add("active");
    } else {
      topMixLeftArrowContainer.classList.remove("active");
    }
  
    let topMixMaxScrollValue = topMixTabsList.scrollWidth - topMixTabsList.clientWidth - 20;
    console.log("scroll width: ", topMixTabsList.scrollWidth);
    console.log("client width: ", topMixTabsList.clientWidth);
  
    if (topMixTabsList.scrollLeft >= topMixMaxScrollValue) {
      topMixRightArrowContainer.classList.remove("active");
    } else {
      topMixRightArrowContainer.classList.add("active");
    }
  };
  
  topMixRightArrow.addEventListener("click", () => {
    topMixTabsList.scrollLeft += 200;
    topMixManageIcons();
  });
  topMixLeftArrow.addEventListener("click", () => {
    topMixTabsList.scrollLeft -= 200;
    topMixManageIcons();
  });
  
  topMixTabsList.addEventListener("scroll", topMixManageIcons);
  
  