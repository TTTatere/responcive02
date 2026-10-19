
document.addEventListener("DOMContentLoaded", () => {

    console.log("JS読み込み成功");


    window.filterGallery = function(category) {

        document.querySelectorAll(".card").forEach(card => {

            if (
                category === "all" ||
                card.classList.contains(category)
            ) {
                card.classList.remove("hide");
            } else {
                card.classList.add("hide");
            }

        });

    };



    const modal = document.getElementById("modal");

    const modalImg = document.getElementById("modalImg");
    const modalImg2 = document.getElementById("modalImg2");

    const googleMap = document.getElementById("googleMap");
    const modalClose = document.getElementById("modalClose");



    if (
        !modal ||
        !modalImg ||
        !modalImg2 ||
        !googleMap
    ) {
        console.error("モーダル関連の要素が見つかりません");
        return;
    }



    document.querySelectorAll(".card img").forEach(img => {

        img.addEventListener("click", (event) => {

            event.stopPropagation();

         
            modalImg.src = img.src;
            modalImg.alt = img.alt;


            const images = Array.from(
                document.querySelectorAll(".card img")
            );

 
            const currentIndex = images.indexOf(img);

       
            const nextIndex = (currentIndex + 1) % images.length;

           
            const nextImg = images[nextIndex];

           
            modalImg2.src = nextImg.src;
            modalImg2.alt = nextImg.alt;


            const lat = img.dataset.lat;
            const lng = img.dataset.lng;

            console.log("撮影場所");
            console.log("緯度:", lat);
            console.log("経度:", lng);

            if (lat && lng) {

                googleMap.src =
                    `https://www.google.com/maps?q=${lat},${lng}&output=embed`;

            } else {

                googleMap.src = "";

            }



            modal.classList.add("show");

            document.body.style.overflow = "hidden";

        });

    });



    if (modalClose) {

        modalClose.addEventListener("click", (event) => {

            event.stopPropagation();

            closeModal();

        });

    }



    modal.addEventListener("click", (event) => {

        if (event.target === modal) {

            closeModal();

        }

    });


  
    document.addEventListener("keydown", (event) => {

        if (event.key === "Escape") {

            closeModal();

        }

    });



    function closeModal() {

        modal.classList.remove("show");

        document.body.style.overflow = "";


        googleMap.src = "";


        modalImg.src = "";
        modalImg2.src = "";

    }

});
