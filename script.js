document.addEventListener("DOMContentLoaded", () => {

    console.log("JS読み込み成功");

    window.filterGallery = function(category){

        document.querySelectorAll(".card").forEach(card => {

            if(category === "all" || card.classList.contains(category)){
                card.classList.remove("hide");
            } else {
                card.classList.add("hide");
            }

        });

    }

    const modal = document.getElementById("modal");
    const modalImg = document.getElementById("modalImg");

    console.log("modal:", modal);
    console.log("modalImg:", modalImg);

    if(!modal || !modalImg){
        console.error("modalが見つかりません");
        return;
    }

    document.querySelectorAll(".card img").forEach(img => {

        img.addEventListener("click", () => {

            console.log("クリック:", img.src);

            modalImg.src = img.src;
            modal.classList.add("show");

        });

    });

    modal.addEventListener("click", () => {
        modal.classList.remove("show");
    });

});
