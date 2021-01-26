$(window).scroll(() => {
    // window.console.log($(".navbar").height()); //height of the div
    // window.console.log($(window).scrollTop()); //the scrolled earia
    //to make the navbar blowler when scroll

    if ($(window).scrollTop() >= $(".navbar").innerHeight()) {
        $(".navbar").addClass("show");
        window.console.log("beb")
    } else {
        $(".navbar").removeClass("show");
    }

})

//tabs manegment =>

let btns = document.querySelectorAll(".btn-group-vertical .btn"),
    tabs = document.querySelectorAll(".tabs-content div");

btns.forEach(btn => {
    //manage activted class

    btn.addEventListener("click", (e) => {
        btn.parentElement.querySelectorAll(".activted").forEach(i => { i.classList.remove("activted") })
        e.target.classList.add("activted")

        ////hied all the tabs => display the selected tab on click=> //خلي بالك خافيين باقى الديفات بال css
        tabs.forEach(tab => {
            tab.style.display = "none"
            if (e.target.dataset.class == tab.className) {
                tab.style.display = "inline";
            }
        })
    })
})


// collor box =>

let boxBtn = document.querySelector(".setting-box i"),
    box = document.querySelector(".setting-box"),
    colors = document.querySelectorAll(".setting-box ul li");



//toggle thwe class display
boxBtn.onclick = () => { box.classList.toggle("display") };

colors.forEach(color => {
    color.addEventListener("click", (e) => {
        let bG = e.target.dataset.color;
        document.documentElement.style.setProperty("--main-color", bG);
        localStorage.setItem("theColor", bG)
    })

})

// to  remember the color

if (localStorage.getItem !== null) {
    document.documentElement.style.setProperty("--main-color", localStorage.getItem("theColor"))
}

//pic lay out=>

let imgs = document.querySelectorAll("#About .row img"),
    layout = document.createElement("div"),
    icon = document.createElement("i");

//add class to the layout and but icon

layout.classList.add("fit")
icon.classList.add("fa", "fa-search-plus", "fa-2x")

layout.appendChild(icon)

//display pic layout and the zoom icon
imgs.forEach(img => {
    img.onmousemove = (e) => {
        e.target.parentElement.insertBefore(layout, img)
    }
    img.onclick = (e) => {

    }
})

//make lay out for all screen and display the pic
icon.onclick = (e) => {
    let popupLayout = document.createElement("div"),
        pic = document.createElement("img"),
        imgLayout = document.createElement("div"),
        closeBtn = document.createElement("span");

    closeBtn.className = "close-x";
    closeBtn.innerHTML = "&#9747;"
    popupLayout.className = "popupLayout"
    pic.classList.add("img-thumbnail", "img-fluid");
    imgLayout.className = "imgLayout"

    pic.src = e.target.parentElement.parentNode.lastElementChild.src

    imgLayout.append(pic, closeBtn)
    console.log(popupLayout)

    document.body.insertBefore(popupLayout, document.body.firstChild)
    document.body.insertBefore(imgLayout, document.body.firstElementChild.nextSibling)

    //close button activate =>

    closeBtn.onclick = () => {
        //remove the pic and the pic container
        closeBtn.parentElement.remove()

        //remove the layout 

        document.body.firstChild.remove()
    }

}



$(document).ready(function () {
    // isotope filter
    var $grid = $(".grid").isotope({
        itemSelector: '.grid-item',
        layoutMode: 'fitRows'
    });

    // filter items on button click
    $(".button-group").on("click", "button", function () {
        var filterValue = $(this).attr('data-filter');
        $grid.isotope({ filter: filterValue });
    })
})


// Counter section =>

let target = document.querySelector(".progress .col");

window.onscroll = () => {


    //skills offset top
    let skilloffsetTop = target.offsetTop; // دا طول الشاشه بتاعتنا

    //skills offsetheight

    let skillOffsetHeight = target.offsetHeight; //دا طول الديف بالكامل 

    //window height =>

    let windowhight = this.innerHeight;

    // Window scrollTop

    let scrollTop = this.pageYOffset;


    if (scrollTop > (skilloffsetTop + skillOffsetHeight - windowhight)) {
        setInterval(count, 1);
    }
}

let spans = document.querySelectorAll(".progress span"),
    speed = 200,
    count;

count = () => {
    spans.forEach(span => {
        const number = +span.getAttribute("data-value"),
            text = +span.textContent;

        const inc = number / speed;
        if (text < number) {
            span.innerText = text + inc;
            setInterval(count, 0.5);
        } else {
            clearInterval(1)
            span.innerText = number
        }

    })
}





