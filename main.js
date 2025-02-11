window.onload = function () {
    if (sessionStorage.getItem("authenticated") !== "true") {
        alert("Unauthorized access! Redirecting to login page.");
        window.location.href = "index.html";
    }
};

const scrollers = document.querySelectorAll(".scroller");

if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    addAnimation();
}

function addAnimation() {
    scrollers.forEach((scroller) => {
        scroller.setAttribute("data-animated", true);

        const scrollerInner = scroller.querySelector(".scroller__inner");
        const scrollerContent = Array.from(scrollerInner.children);

        scrollerContent.forEach((item) => {
            const duplicatedItem = item.cloneNode(true);
            duplicatedItem.setAttribute("aria-hidden", true);
            scrollerInner.appendChild(duplicatedItem);
        });
    });
}

const questionPage = document.querySelector('#question-page');
const wrapper = document.querySelector('#question');
const imageChange = document.querySelector('#image-container img');
const btnGroup = document.querySelector('#btn-group');
const question = document.querySelector('#question-text');
const yesBtn = document.querySelector('#yes-btn.button');
const noBtn = document.querySelector('#no-btn.button');
const wrapperRect = wrapper.getBoundingClientRect();
const noBtnRect = noBtn.getBoundingClientRect();
yesBtn.addEventListener('click', () => {
    btnGroup.style.display = 'none';
    question.innerHTML = 'Love you ♡';
    imageChange.src = 'assets/yes.gif';
    imageChange.style.width = '300px';
    btnGroup.style.display = 'hidden';

});
noBtn.addEventListener('mouseover', () => {
    const i = Math.floor(Math.random() * (wrapperRect.width - noBtnRect.width)) + 1;
    const j = Math.floor(Math.random() * (wrapperRect.height - noBtnRect.height)) + 1;
    noBtn.style.position = 'relative';
    noBtn.style.left = i + 'px';
    noBtn.style.top = j + 'px';
});