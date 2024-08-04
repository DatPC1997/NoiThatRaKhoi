var GUI = (function () {
  // menu mobi
  var showMenuMobi = function () {
    if (document.querySelector(".icon_clear")) {
      var btns = [
        document.querySelector(".icon_menu"),
        document.querySelector(".icon_clear"),
        document.querySelector(".bg_over_menu"),
      ];
      console.log(btns);
      btns.forEach((btn) => {
        btn.addEventListener("click", function () {
          document.querySelector("header").classList.toggle("active");
          document.body.classList.toggle("no-scroll");
        });
      });
    }
  };

  // tạo khoảng cách menu và body nội dung trong website có khoảng cách
  var menuHeaderScroll = () => {
    function adjustBodyMargin() {
      var headerHeight = document.querySelector("header").offsetHeight;
      document.querySelector("body").style.paddingTop = headerHeight + "px";
    }
    adjustBodyMargin();
    var resizeObserver = new ResizeObserver(() => {
      adjustBodyMargin();
    });
    resizeObserver.observe(document.querySelector("header"));
  };

  // click hiển thị danh sách của phần sản phẩm
  var showProduct = function () {
    if (document.querySelector(".show_products")) {
      var showList = [
        document.querySelector(".show_products"),
        document.querySelector(".clear_products"),
      ];
      console.log(showList);
      showList.forEach((btn) => {
        btn.addEventListener("click", function () {
          document.querySelector(".list_Products").classList.toggle("active");
        });
      });
    }
  };

  // click hiển thị danh sách chi tiết sản phẩm
  var showProductDetail = function () {
    if (document.querySelector(".show_products_Detail")) {
      var showListDetail = [
        document.querySelector(".show_products_Detail"),
        document.querySelector(".clear_products_Detail"),
      ];
      console.log(showListDetail);
      showListDetail.forEach((btn) => {
        btn.addEventListener("click", function () {
          document
            .querySelector(".list_Products_Detail")
            .classList.toggle("active");
        });
      });
    }
  };

  // click showitem products left
  var showItems = function () {
    document.querySelectorAll(".list__products").forEach((button) => {
      button.addEventListener("click", () => {
        const products = button.nextElementSibling;
        products.classList.toggle("active");
      });
    });
  };

  // nút click tottop
  var backToTop = () => {
    var backToTopButton = document.querySelector(".btn-to-top");
    if (backToTopButton) {
      window.addEventListener("scroll", function () {
        if (window.scrollY > 600) {
          backToTopButton.style.display = "flex";
        } else {
          backToTopButton.style.display = "none";
        }
      });
      backToTopButton.addEventListener("click", function () {
        var scrollOptions = {
          top: 0,
          behavior: "smooth",
        };
        if ("scrollBehavior" in document.documentElement.style) {
          window.scrollTo(scrollOptions);
        } else {
          var scrollInterval = setInterval(function () {
            if (window.scrollY <= 0) {
              clearInterval(scrollInterval);
            } else {
              window.scrollBy(0, -20);
            }
          }, 16);
        }
        return false;
      });
    }
  };

  // click show modal
  var modalModule = function () {
    if (document.querySelector(".module-modal")) {
      var modals = document.querySelectorAll(".module-modal[modal-target]");
      var clickBtns = document.querySelectorAll("a[modal-click-target]");

      clickBtns.forEach((btn) => {
        btn.addEventListener("click", (event) => {
          event.preventDefault();
          var target = btn.getAttribute("modal-click-target");
          var modal = document.querySelector(
            `.module-modal[modal-target="${target}"]`
          );
          modals.forEach((i) => i.classList.remove("active"));
          if (modal) {
            modal.classList.add("active");
          }
        });
      });

      modals.forEach((modal) => {
        var closeBtns = modal.querySelectorAll(".close-modal[modal-close]");
        closeBtns.forEach((closeBtn) => {
          closeBtn.addEventListener("click", () => {
            modal.classList.remove("active");
          });
        });
        modal.addEventListener("click", (e) => {
          if (!e.target.closest(".modal-content")) {
            modal.classList.remove("active");
          }
        });
      });
    }
  };

  return {
    _: function () {
      showMenuMobi();
      backToTop();
      modalModule();
      showProduct();
      showItems();
      showProductDetail();
      menuHeaderScroll();
    },
  };
})();

var SLIDER = (function () {
  var slider_banner = function () {
    var slider_banner = new Swiper(".slider_Banner", {
      slidesPerView: 1,
      loop: true,
      pagination: {
        el: ".pagination_slider",
      },
    });
  };

  var slder_new_Detail = function () {
    var slider_new_Detail = new Swiper(".slider_New_Detail", {
      loop: true,
      pagination: {
        el: ".pagisnation_new_detail",
      },
      breakpoints: {
        0: {
          slidesPerView: 1,
          spaceBetween: 20,
        },
        768: {
          slidesPerView: 2,
          spaceBetween: 20,
        },
        1024: {
          slidesPerView: 3,
          spaceBetween: 20,
        },
      },
    });
  };

  var slider_new = function () {
    var slider_new = new Swiper(".slider_new", {
      loop: true,
      pagination: {
        el: ".pagination_new",
        clickable: true,
      },
      breakpoints: {
        // when window width is >= 320px
        320: {
          slidesPerView: 2,
        },
        // when window width is >= 480px
        768: {
          slidesPerView: 3,
        },
        // when window width is >= 640px
        991: {
          slidesPerView: 4,
        },
      },
    });
  };

  var slider_certificate = function () {
    var slider_certificate = new Swiper(".certificate", {
      loop: true,
      breakpoints: {
        320: {
          slidesPerView: 1,
        },
        768: {
          slidesPerView: 3,
        },
        991: {
          slidesPerView: 5,
        },
      },
      pagination: {
        el: ".pagination_certificate",
      },
      navigation: {
        nextEl: ".certificate_next",
        prevEl: ".certificate_prev",
      },
    });
  };

  var productsDetail = function () {
    var productsDetail = new Swiper(".productsDetail", {
      loop: true,
      spaceBetween: 10,
      slidesPerView: 4,
      freeMode: true,
      watchSlidesProgress: true,
    });
    var productDetail2 = new Swiper(".productsDetal2", {
      loop: true,
      spaceBetween: 10,
      thumbs: {
        swiper: productsDetail,
      },
    });
  };
  return {
    _: function () {
      slider_banner();
      slder_new_Detail();
      slider_new();
      slider_certificate();
      productsDetail();
    },
  };
})();

document.addEventListener("DOMContentLoaded", function () {
  setTimeout(function () {
    GUI._();
    SLIDER._();
  }, 100);
});
