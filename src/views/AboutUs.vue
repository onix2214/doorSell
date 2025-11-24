<template>
    <div class="container firstBlock d-flex flex-row align-items-center justify-content-between">
        <div class="col-6"><img  style="width: 551px; height: 551px;" src="/public/desing.svg"></div>
        <div class="col-6 d-flex flex-column gap-4" style="height: 511px;">
            <h2>Designing Your Dream With Brilliance</h2>
            <p class="w-75">Elevate your spaces with bespoke interior designs that 
                reflect your unique style and aspirations, crafted with 
                precision and brilliance for an unforgettable living experience</p>

             <div>
                <p class="d-flex flex-column gap-2"> 
                    <a class="btn btn-none d-flex justify-content-between" style="border-bottom: solid 1px black; border-radius: 0px;" data-bs-toggle="collapse" href="#collapseExample" role="button" aria-expanded="false" aria-controls="collapseExample">
                        Living Room Interior Design
                        <i class="bi bi-plus"></i>
                    </a>
                    <div class="collapse" id="collapseExample">
                        <div class="card card-body">
                            Некоторый заполнитель для компонента сворачивания. Эта панель по умолчанию скрыта, но открывается, когда пользователь активирует соответствующий триггер.
                        </div>
                    </div>
                    <a class="btn btn-none d-flex justify-content-between" style="border-bottom: solid 1px black; border-radius: 0px;" data-bs-toggle="collapse" href="#collapseExample1" role="button" aria-expanded="false" aria-controls="collapseExample">
                        Commercial Office Room Interior Design
                        <i class="bi bi-plus"></i>
                    </a>
                    <div class="collapse" id="collapseExample1">
                    <div class="card card-body">
                        Некоторый заполнитель для компонента сворачивания. Эта панель по умолчанию скрыта, но открывается, когда пользователь активирует соответствующий триггер.
                    </div>
                </div>
                </p>
            </div>
        </div>
    </div>
    <div class="container secondBlock d-flex flex-column align-items-center gap-3">
        <h1 class="w-50 text-center">Subscribe to Our Newsletter for Design Insights</h1>
        <p class="w-50 text-center">Be the firt to discover trends, inspirations, and special offers as we bring the world of design directly to your inbox</p>
        <div class="col-5 d-flex flex-row gap-2">
           <div class="input-group mb-3" style="height: 50px;">
                <span class="input-group-text" id="basic-addon1"><i class="bi bi-envelope"></i></span>
                <input type="email" class="form-control" placeholder="Enter your email address" aria-label="Username" aria-describedby="basic-addon1">
            </div>
            <button class="btn" style="background-color: black; color: white; height: 50px;">Subscribe</button>
        </div>
    </div>
</template>
<style scoped>
.firstBlock{
    height: 700px;
}
.secondBlock{
    height: 300px;
}
</style>