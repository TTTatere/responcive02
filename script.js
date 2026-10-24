
document.addEventListener("DOMContentLoaded", () => {
    console.log("JS読み込み成功");

    window.filterGallery = function (category) {
        document.querySelectorAll("#gallery .card").forEach(card => {
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

    const gallery = document.getElementById("gallery");
    const modal = document.getElementById("modal");
    const modalImg = document.getElementById("modalImg");
    const modalImg2 = document.getElementById("modalImg2");
    const mapContainer = document.getElementById("mapContainer");
    const googleMap = document.getElementById("googleMap");
    const modalClose = document.getElementById("modalClose");

    if (
        !gallery ||
        !modal ||
        !modalImg ||
        !modalImg2 ||
        !mapContainer ||
        !googleMap ||
        !modalClose
    ) {
        console.error("モーダル関連の要素が見つかりません");
        return;
    }

    function isValidImage(img) {
        if (!img) return false;

        const src = img.getAttribute("src");

        return Boolean(
            src &&
            src.trim() !== "" &&
            !src.endsWith("/.jpg") &&
            !src.endsWith("/.png")
        );
    }

    gallery.addEventListener("click", event => {
        const img = event.target.closest("img");

        if (!img || !isValidImage(img)) {
            return;
        }

        const clickedCard = img.closest(".card");

        if (!clickedCard || clickedCard.classList.contains("hide")) {
            return;
        }

        modalImg.src = img.src;
        modalImg.alt = img.alt || "選択した店舗の画像";
        modalImg.style.display = "block";

        const secondImage = img.dataset.secondImage;

        if (secondImage && secondImage.trim() !== "") {
            modalImg2.src = secondImage;
            modalImg2.alt = (img.alt || "店舗") + "の別画像";
            modalImg2.style.display = "block";

            modalImg2.onerror = () => {
                console.error("2枚目の画像を読み込めません:", secondImage);
                modalImg2.removeAttribute("src");
                modalImg2.alt = "";
                modalImg2.style.display = "none";
            };
        } else {
            modalImg2.removeAttribute("src");
            modalImg2.alt = "";
            modalImg2.style.display = "none";
            modalImg2.onerror = null;
        }

        const lat = img.dataset.lat;
        const lng = img.dataset.lng;

        console.log("撮影場所");
        console.log("緯度:", lat);
        console.log("経度:", lng);

        if (
            lat &&
            lng &&
            lat.trim() !== "" &&
            lng.trim() !== "" &&
            Number.isFinite(Number(lat)) &&
            Number.isFinite(Number(lng))
        ) {
            googleMap.src =
                `https://maps.google.com/maps?q=${encodeURIComponent(
                    lat + "," + lng
                )}&z=16&output=embed`;

            mapContainer.style.display = "block";
        } else {
            googleMap.removeAttribute("src");
            mapContainer.style.display = "none";

            console.warn("この店舗には緯度・経度が登録されていません");
        }

        modal.classList.add("show");
        document.body.style.overflow = "hidden";
    });

    function closeModal() {
        modal.classList.remove("show");
        document.body.style.overflow = "";

        modalImg.removeAttribute("src");
        modalImg.alt = "";
        modalImg.style.display = "block";

        modalImg2.removeAttribute("src");
        modalImg2.alt = "";
        modalImg2.style.display = "none";
        modalImg2.onerror = null;

        googleMap.removeAttribute("src");
        mapContainer.style.display = "block";
    }

    modalClose.addEventListener("click", event => {
        event.stopPropagation();
        closeModal();
    });

    modal.addEventListener("click", event => {
        if (event.target === modal) {
            closeModal();
        }
    });

    document.addEventListener("keydown", event => {
        if (
            event.key === "Escape" &&
            modal.classList.contains("show")
        ) {
            closeModal();
        }
    });
});
