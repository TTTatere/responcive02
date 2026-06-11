function filterGallery(category) {
    const cards = document.querySelectorAll('.card');

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
