
const partyRightArrow = document.querySelector(
    ".party-scrollbar-box .right-arrow svg"
  );
  
  const partyLeftArrow = document.querySelector(
    ".party-scrollbar-box .left-arrow svg"
  );
  
  const partyTabsList = document.querySelector(".party-scrollbar-box ul");
  
  const partyLeftArrowContainer = document.querySelector(".party-scrollbar-box .left-arrow");
  const partyRightArrowContainer = document.querySelector(".party-scrollbar-box .right-arrow");
  
  const partyManageIcons = () => {
    if (partyTabsList.scrollLeft >= 20) {
      partyLeftArrowContainer.classList.add("active");
    } else {
      partyLeftArrowContainer.classList.remove("active");
    }
  
    let partyMaxScrollValue = partyTabsList.scrollWidth - partyTabsList.clientWidth - 20;
    console.log("scroll width: ", partyTabsList.scrollWidth);
    console.log("client width: ", partyTabsList.clientWidth);
  
    if (partyTabsList.scrollLeft >= partyMaxScrollValue) {
      partyRightArrowContainer.classList.remove("active");
    } else {
      partyRightArrowContainer.classList.add("active");
    }
  };
  
  partyRightArrow.addEventListener("click", () => {
    partyTabsList.scrollLeft += 200;
    partyManageIcons();
  });
  partyLeftArrow.addEventListener("click", () => {
    partyTabsList.scrollLeft -= 200;
    partyManageIcons();
  });
  
  partyTabsList.addEventListener("scroll", partyManageIcons);
  
  