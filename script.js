function filterGallery(category) {
    const cards = document.querySelectorAllconst modal = document.getElementById("modal");
const modalImg = document.getElementById("modalImg");

document.querySelectorAll(".card img").forEach(img => {
    img.addEventListener("click", () => {
        modalImg.src = img.src;
        modal.classList.add("show");
    });
});

// 背景クリックで閉じる
modal.addEventListener("click", () => {
    modal.classList.remove("show");
});('.card');

    cards.forEach(card => {
        // すべて表示
        if (category === 'all') {
            card.classList.remove('hide');
        } else {
            // 該当カテゴリだけ表示
            if (card.classList.contains(category)) {
                card.classList.remove('hide');
            } else {
                card.classList.add('hide');
            }
        }
    });
}
