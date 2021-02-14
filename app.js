const navSlide = () => {
    for (i = 1; i <= 5; i++) {
        const heading = document.querySelector('.heading-'+i );
        const headingText = document.querySelector('.heading-' + i +' span')
        const para = document.querySelector('.para-'+i );
        const arrow = document.querySelector('.arrow-'+i);

        heading.addEventListener('click', () => {         
            //Toggle p
            if (para.style.display === "block") {
                para.style.display = "none";
                arrow.style.transform = "rotate(0deg)";
                headingText.classList.remove("active-heading");
            } else {
                para.style.display = "block";
                arrow.style.transform = "rotate(180deg)";
                headingText.classList.add("active-heading");
            };
        });
    }
}
navSlide();