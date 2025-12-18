/* ============================================================
   SLIDER-BOX — FULL HTML + CSS + JS TẠO GIAO DIỆN TỰ ĐỘNG
   Chỉ cần <div id="slider-box"></div> trong index là hiển thị
============================================================ */

document.addEventListener("DOMContentLoaded", () => {

    /* ------------------------------
       TẠO HTML CỦA SLIDER
    --------------------------------*/
    const html = `
        <div class="slider-container">
            <button id="slidePrev" class="slide-btn">❮</button>

            <div class="slide-wrapper">
                <div class="slide-item"><img src="https://sf-static.upanhlaylink.com/img/image_20251206474106afbcd2e7e035c15f44c09e21de.jpg"></div>
                <div class="slide-item"><img src="https://sf-static.upanhlaylink.com/img/image_202512060416654d6ece4606ac213f120636fffe.jpg"></div>
                <div class="slide-item"><img src="https://sf-static.upanhlaylink.com/img/image_202512067a47c119a9b705a67cddf06e852ccf5a.jpg"></div>
            </div>

            <button id="slideNext" class="slide-btn">❯</button>
        </div>
    `;

    // Nhét HTML vào div đích
    const container = document.getElementById("slider-box");
    container.innerHTML = html;

    /* ------------------------------
        CSS — tự thêm vào HEAD
    --------------------------------*/
    const css = `
        .slider-container {
            position: relative;
            width: 100%;
            max-width: 200%;
            overflow: hidden;
            margin: 15px auto;
            border-radius: 12px;
        }

        .slide-wrapper {
            display: flex;
            width: 100%;
            transition: transform 2s ease;
        }

        .slide-item {
            min-width: 100%;
            height: 420px;
        }

        .slide-item img {
    width: 100%;
    height: 100%;
    object-fit: cover;         /* luôn full, không méo */
    object-position: center;   /* căn giữa ảnh */
    display: block;            /* bỏ khoảng thừa inline-block */
}


        .slide-btn {
            position: absolute;
            top: 50%;
            transform: translateY(-50%);
            font-size: 26px;
            font-weight: bold;
            background: rgba(255,255,255,0.6);
            border: none;
            padding: 8px 14px;
            cursor: pointer;
            border-radius: 50%;
            user-select: none;
            transition: 0.2s;
            z-index:3103;
        }

        .slide-btn:hover {
            background: rgba(255,255,255,0.9);
        }

        #slidePrev { left: 10px; }
        #slideNext { right: 10px; }
    `;

    const style = document.createElement("style");
    style.textContent = css;
    document.head.appendChild(style);


    /* ------------------------------
       JS SLIDER — Auto + Next/Prev
    --------------------------------*/
    let sliderIndex = 0;

    const sliderWrapper = container.querySelector(".slide-wrapper");
    const sliderItems = container.querySelectorAll(".slide-item");
    const totalSlides = sliderItems.length;

    const btnNext = container.querySelector("#slideNext");
    const btnPrev = container.querySelector("#slidePrev");

    function updateSlider() {
        const offset = -sliderIndex * 100;
        sliderWrapper.style.transform = `translateX(${offset}%)`;
    }

    function nextSlide() {
        sliderIndex = (sliderIndex + 1) % totalSlides;
        updateSlider();
    }

    function prevSlide() {
        sliderIndex = (sliderIndex - 1 + totalSlides) % totalSlides;
        updateSlider();
    }

    let autoSlide = setInterval(nextSlide, 3500);

    function resetAuto() {
        clearInterval(autoSlide);
        autoSlide = setInterval(nextSlide, 3500);
    }

    btnNext.addEventListener("click", () => {
        nextSlide();
        resetAuto();
    });

    btnPrev.addEventListener("click", () => {
        prevSlide();
        resetAuto();
    });
});