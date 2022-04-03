<template>
<section id="inicio">
    <div id="cake-carousel" class="carousel slide" data-bs-ride="carousel">
        <div class="carousel-inner">
            <div class="carousel-item active">
                <img src="../assets/img/carousel-cake.png" class="d-block w-100" alt="Pastel con cupcakes">
            </div>
            <div class="carousel-item">
                <img src="../assets/img/carousel-cake2.png" class="d-block w-100" alt="Pastel unicornio">
            </div>
            <div class="carousel-item">
                <img src="../assets/img/carousel-cake3.png" class="d-block w-100" alt="Pastel con macarons">
            </div>
        </div>
        <button class="carousel-control-prev" type="button" data-bs-target="#cake-carousel" data-bs-slide="prev">
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Previous</span>
        </button>
        <button class="carousel-control-next" type="button" data-bs-target="#cake-carousel" data-bs-slide="next">
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Next</span>
        </button>
    </div>
</section>
</template>

<script>
export default {
    name: "Carousel",
};
</script>