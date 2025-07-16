
const yourForgottenRightArrow = document.querySelector(
    ".yourForgotten-scrollbar-box .right-arrow svg"
  );
  
  const yourForgottenLeftArrow = document.querySelector(
    ".yourForgotten-scrollbar-box .left-arrow svg"
  );
  
  const yourForgottenTabsList = document.querySelector(".yourForgotten-scrollbar-box ul");
  
  const yourForgottenLeftArrowContainer = document.querySelector(".yourForgotten-scrollbar-box .left-arrow");
  const yourForgottenRightArrowContainer = document.querySelector(".yourForgotten-scrollbar-box .right-arrow");
  
  const yourForgottenManageIcons = () => {
    if (yourForgottenTabsList.scrollLeft >= 20) {
      yourForgottenLeftArrowContainer.classList.add("active");
    } else {
      yourForgottenLeftArrowContainer.classList.remove("active");
    }
  
    let yourForgottenMaxScrollValue = yourForgottenTabsList.scrollWidth - yourForgottenTabsList.clientWidth - 20;
    console.log("scroll width: ", yourForgottenTabsList.scrollWidth);
    console.log("client width: ", yourForgottenTabsList.clientWidth);
  
    if (yourForgottenTabsList.scrollLeft >= yourForgottenMaxScrollValue) {
      yourForgottenRightArrowContainer.classList.remove("active");
    } else {
      yourForgottenRightArrowContainer.classList.add("active");
    }
  };
  
  yourForgottenRightArrow.addEventListener("click", () => {
    yourForgottenTabsList.scrollLeft += 200;
    yourForgottenManageIcons();
  });
  yourForgottenLeftArrow.addEventListener("click", () => {
    yourForgottenTabsList.scrollLeft -= 200;
    yourForgottenManageIcons();
  });
  
  yourForgottenTabsList.addEventListener("scroll", yourForgottenManageIcons);
  
  