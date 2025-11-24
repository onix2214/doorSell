<template>
    <div class="container col-10 fourth d-flex">
        <div>
            <h1 class="w-75">Designing Your Dream in Three Simple Steps</h1>
            <div class="d-flex flex-row mt-5 gap-5">
                <div class="d-flex flex-column align-items-center">
                    <div class="d-flex flex-column align-items-center block2">
                        <img class="icon" src="/public/info/rocket.svg" alt="">
                        <hr>
                    </div>
                    <div class="d-flex flex-column align-items-center block2">
                        <img class="icon" src="/public/info/lamp.svg" alt="">
                        <hr>
                    </div>
                    <div class="d-flex flex-column align-items-center block2">
                        <img class="icon" src="/public/info/conf.svg" alt="">
                        <hr>
                    </div>
                </div>
                <div class="d-flex flex-column gap-5">
                    <div class="w-75 block mt-1">
                        <h3><b>Start Project</b></h3>
                        <p>Embark on your design adventure by initialiting your project. Share your vision and set the stage for a bespoke design experience</p>
                    </div>
                    <div class="w-75 block">
                        <h3><b>Craft</b></h3>
                        <p>Collaborate closely to achieve design excellence refining your vision and crafting brillance into every aspect of your space</p>
                    </div>
                    <div class="w-75 block">
                        <h3><b>Execute</b></h3>
                        <p>Witness your vision becoming a reality as we execute the design plan with precision. Celebrate the joy of your newly transformed space</p>
                    </div>
                </div>
            </div>
        </div>
        <div>
            <img class="room" src="/public/info/room.svg" alt="">
        </div>
    </div>
</template>
<style scoped>
hr{
    width: 3px;
    height: 60px;
    border-radius: 25px;
    background-color: rgb(156, 155, 155);
}
.icon{
    width: 60px;
}

p{
    font-size: 18px;
}
.room{
    height: 680px;
}
.block{
    height: 138px;
}
.block2{
    height: 180px;
}
</style>