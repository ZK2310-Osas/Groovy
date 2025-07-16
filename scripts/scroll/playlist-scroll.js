
const similarplaylistRightArrow = document.querySelector(
    ".similarplaylist-scrollbar-box .right-arrow svg"
  );
  
  const similarplaylistLeftArrow = document.querySelector(
    ".similarplaylist-scrollbar-box .left-arrow svg"
  );
  
  const similarplaylistTabsList = document.querySelector(".similarplaylist-scrollbar-box ul");
  
  const similarplaylistLeftArrowContainer = document.querySelector(".similarplaylist-scrollbar-box .left-arrow");
  const similarplaylistRightArrowContainer = document.querySelector(".similarplaylist-scrollbar-box .right-arrow");
  

  
  const similarplaylistManageIcons = () => {
    if (similarplaylistTabsList.scrollLeft >= 20) {
      similarplaylistLeftArrowContainer.classList.add("active");
    } else {
      similarplaylistLeftArrowContainer.classList.remove("active");
    }
  
    let similarplaylistMaxScrollValue = similarplaylistTabsList.scrollWidth - similarplaylistTabsList.clientWidth - 20;
    console.log("scroll width: ", similarplaylistTabsList.scrollWidth);
    console.log("client width: ", similarplaylistTabsList.clientWidth);
  
    if (similarplaylistTabsList.scrollLeft >= similarplaylistMaxScrollValue) {
      similarplaylistRightArrowContainer.classList.remove("active");
    } else {
      similarplaylistRightArrowContainer.classList.add("active");
    }
  };
  
  similarplaylistRightArrow.addEventListener("click", () => {
    similarplaylistTabsList.scrollLeft += scrollStep;
    similarplaylistManageIcons();
  });
  similarplaylistLeftArrow.addEventListener("click", () => {
    similarplaylistTabsList.scrollLeft -= scrollStep;
    similarplaylistManageIcons();
  });
  
  similarplaylistTabsList.addEventListener("scroll", similarplaylistManageIcons);
  
  