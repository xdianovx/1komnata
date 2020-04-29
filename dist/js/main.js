$('.main__slider').slick({
    dots: true,
    dotsClass: "slick-dots",
    arrows: false,
    infinite: true,
});

// dropdown

let headerDropdown = document.querySelector('.header__contacts_wrap');
let dropdownMenu = document.querySelector('.header__dropdown');
dropdownMenu.style.display = 'none';

let fade = document.getElementById('fade');


headerDropdown.onclick = function openDropdown() {

  let dropdownMenu = document.querySelector('.header__dropdown');
  if (dropdownMenu.style.display === 'none') {
      dropdownMenu.style.display = 'block';
      fade.style.display = 'block';
  } else {
      dropdownMenu.style.display = 'none';
      fade.style.display = 'none';
  }
};


fade.onclick = function () {
    dropdownMenu.style.display = 'none';
    fade.style.display = 'none';
};


//Sidebar
$(document).ready(function () {
    $('#filter-btn, .sidebar-close').click(function(event){
        $('.sidebar').toggleClass('active-sidebar');
        $('body').toggleClass('lock');
    })
});


//burger
$('#fade-burger').hide();

$(document).ready(function () {


    $('.menu__burger').click(function(event){
        $('.menu__burger, .menu__nav').toggleClass('active');
        $('body').toggleClass('lock');
        $('#fade-burger').show();
    })

    $('#fade-burger').hide();
});




//Sidebar-accordion
let acc = document.getElementsByClassName("sidebar__accordion");
let i;
for (i = 0; i < acc.length; i++) {
    acc[i].addEventListener("click", function() {
        this.classList.toggle("active");
        let panel = this.nextElementSibling;
        if (panel.style.maxHeight){
            panel.style.maxHeight = null;
        } else {
            panel.style.maxHeight = panel.scrollHeight + "px";
        }
    });
}

//select

$(document).ready(function () {
    $('.kitchens__drop_btn').click(function(event){
        $('.kitchens__drop').toggleClass('active-src');
    })
});

function select(element) {
    var value = element.getAttribute("data-value"); // Считываем значение выбранного элемента
    var nodes = element.parentNode.childNodes; // Получаем все остальные элементы
    for (var i = 0; i < nodes.length; i++) {
        /* Отфильтровываем посторонние элементы text и input */
        if (nodes[i] instanceof HTMLParagraphElement) {
            /* Добавляем active у выбранного элемента, стирая данный класс у всех остальных */
            if (value == nodes[i].getAttribute("data-value")) nodes[i].className = "source-active";
            else nodes[i].className = "";
        }
    }
    document.getElementById("sources").value = value;
    console.log(value);

}

