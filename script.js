javascript id="jsfull"
document.addEventListener("DOMContentLoaded", () => {

    // フィルター
    window.filterGallery = function(category){

        const cards = document.querySelectorAll(".card");

        cards.forEach(card => {

            if(category === "all"){
                card.classList.remove("hide");
            } else {
                if(card.classList.contains(category)){
                    card.classList.remove("hide");
                } else {
                    card.classList.add("hide");
                }
            }

        });

    }

    // モーダル
    const modal = document.getElementById("modal");
    const modalImg = document.getElementById("modalImg");

    document.querySelectorAll(".card img").forEach(img => {

        img.addEventListener("click", () => {

            modalImg.src = img.src;
            modalImg.alt = img.alt;

            modal.classList.add("show");

        });

    });

    // 閉じる
    modal.addEventListener("click", () => {
        modal.classList.remove("show");
    });

});
