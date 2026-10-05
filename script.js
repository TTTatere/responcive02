document.addEventListener("DOMContentLoaded", () => {

    console.log("JS読み込み成功");


    window.filterGallery = function(category){

        document.querySelectorAll(".card").forEach(card => {

            if(
                category === "all" ||
                card.classList.contains(category)
            ){

                card.classList.remove("hide");

            }else{

                card.classList.add("hide");

            }

        });

    };



    const modal = document.getElementById("modal");

    const modalImg = document.getElementById("modalImg");

    const googleMap = document.getElementById("googleMap");

    const modalClose = document.getElementById("modalClose");


    if(
        !modal ||
        !modalImg ||
        !googleMap
    ){

        console.error("モーダル関連の要素が見つかりません");

        return;

    }



    document.querySelectorAll(".card img").forEach(img => {

        img.addEventListener("click", (event) => {

            event.stopPropagation();


            /* 画像を表示 */

            modalImg.src = img.src;

            modalImg.alt = img.alt;



            const lat = img.dataset.lat;

            const lng = img.dataset.lng;


            console.log("撮影場所");

            console.log("緯度:", lat);

            console.log("経度:", lng);



            if(lat && lng){

                googleMap.src =
                    `https://www.google.com/maps?q=${lat},${lng}&output=embed`;

            }else{


                googleMap.src = "";

            }




            modal.classList.add("show");



            document.body.style.overflow = "hidden";

        });

    });



    if(modalClose){

        modalClose.addEventListener("click", (event) => {

            event.stopPropagation();

            closeModal();

        });

    }




    modal.addEventListener("click", (event) => {

        if(event.target === modal){

            closeModal();

        }

    });



    document.addEventListener("keydown", (event) => {

        if(event.key === "Escape"){

            closeModal();

        }

    });


    function closeModal(){

        modal.classList.remove("show");

        document.body.style.overflow = "";

        googleMap.src = "";

    }

});
