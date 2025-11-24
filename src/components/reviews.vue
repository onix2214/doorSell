<template>
    <div class="container col-10 fifth d-flex justify-content-center mt-4">
        <div class="container col-11 d-flex flex-row gap-5">
            <img class="room" src="/public/reviews/room2.svg" alt="">
            <!-- <p><b>What Our Customers Say About Us</b></p> -->
        </div>
        <div id="carouselMultiSlide" class="carousel slide gap-5" data-bs-ride="carousel">
            <div class="carousel-inner gap-5">

                <!-- Первая группа из 2 слайдов -->
                <div class="carousel-item active">
                    <div class="row g-3">
                        <div class="col-md-6">
                            <img src="/public/reviews/review1.svg" class="d-block w-100" alt="Slide 1">
                        </div>
                        <div class="col-md-6">
                            <img src="/public/reviews/review2.svg" class="d-block w-100" alt="Slide 2">
                        </div>
                    </div>
                </div>
            
                <!-- Вторая группа из 2 слайдов -->
                <div class="carousel-item ms-2">
                    <div class="row g-3">
                        <div class="col-md-6">
                            <img src="/public/reviews/review1.svg" class="d-block w-100" alt="Slide 3">
                        </div>
                        <div class="col-md-6">
                            <img src="/public/reviews/review2.svg" class="d-block w-100" alt="Slide 4">
                        </div>
                    </div>
                </div>
            
                <!-- Третья группа из 2 слайдов -->
                <div class="carousel-item ms-2">
                    <div class="row g-3">
                        <div class="col-md-6">
                            <img src="/public/reviews/review1.svg" class="d-block w-100" alt="Slide 5">
                        </div>
                        <div class="col-md-6">
                            <img src="/public/reviews/review2.svg" class="d-block w-100" alt="Slide 6">
                        </div>
                    </div>
                </div>
            </div>
            <button class="carousel-control-prev" type="button" data-bs-target="#carouselMultiSlide" data-bs-slide="prev">
                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Previous</span>
            </button>
            <button class="carousel-control-next right" type="button" data-bs-target="#carouselMultiSlide" data-bs-slide="next">
                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Next</span>
            </button>
        </div>
    </div>
</template>
<style scoped>
.fifth{
    position: relative;
    height: 900px;
}
.room{
    z-index: 1;
    width: 1150px;
    height: 600px;
}
.carousel{
    width: 950px;
    position: absolute;
    z-index: 10;
    top: 21%;
    left: 21%
}
button{
    width: 75px;
    height: 75px;
    background-color: gray;
    color: white;
    top: 83.5%;
    left: -190px;
}
.right{
    left: -95px !important;
}
p{
    width: 40%;
    height: 150px;
    font-size: 42px;
}
</style>