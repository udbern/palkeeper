const tabsBox = document.querySelector(".user-tabsection .tabs");
const allTabs = tabsBox.querySelectorAll(".tab");
const arrowIcons = document.querySelectorAll(".icon-back, .icon-right");
let isDragging = false;

const handleIcons = (scrollVal) => {
    let maxScrollableWidth = tabsBox.scrollWidth - tabsBox.clientWidth;
    arrowIcons[0].style.display = scrollVal <= 0 ? "none" : "flex";
    arrowIcons[1].style.display = maxScrollableWidth - scrollVal <= 1 ? "none" : "flex";
};

arrowIcons.forEach(icon => {
    icon.addEventListener("click", () => {
        if (icon.classList.contains("icon-back")) {
            let scrollWidth =  tabsBox.scrollLeft -= 30; // Scroll back to the beginning
            handleIcons(scrollWidth);
            tabsBox.scrollTo({
                left: scrollWidth,
                behavior: 'smooth', 
            });
        } else {
            let scrollWidth = tabsBox.scrollLeft += 30;
            handleIcons(scrollWidth);
            tabsBox.scrollTo({
                left: scrollWidth,
                behavior: 'smooth', 
            });
        }
    });
});

allTabs.forEach(tab => {
    tab.addEventListener("click", () => {
        tabsBox.querySelector(".active").classList.remove("active");
        tab.classList.add("active");
    });
});

const dragging = (e) => {
    if (!isDragging) return;
    tabsBox.classList.add("dragging");
    tabsBox.scrollLeft -= e.movementX - 5; 
    handleIcons(tabsBox.scrollLeft);
};

const dragStop = () => {
    isDragging = false;
    tabsBox.classList.remove("dragging");
};

tabsBox.addEventListener("mousedown", () => isDragging = true);
tabsBox.addEventListener("mousemove", dragging);
document.addEventListener("mouseup", dragStop);

tabsBox.addEventListener("touchstart", (e) => {
    isDragging = true;
    startX = e.touches[0].pageX - tabsBox.offsetLeft;
});

tabsBox.addEventListener("touchmove", (e) => {
    if (!isDragging) return;
    e.preventDefault();
    const x = e.touches[0].pageX - tabsBox.offsetLeft;
    const walk = (x - startX) * 2;
    tabsBox.scrollLeft = tabsBox.scrollLeft - walk;
    handleIcons(tabsBox.scrollLeft);
});

tabsBox.addEventListener("touchend", () => isDragging = false);
