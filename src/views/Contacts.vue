<template>
   <div class="container d-flex flex-row containerFirst justify-content-center align-items-center">
        <div class="col-6">
            <div>
                <h1 style="font-size: 50px;">Let's Talk</h1>
                <p class="w-75">Have some big idea or brand to develop and need help? Then reach out we'd love to hear about your project and provide help</p>
            </div>
            <div>
                <h2>Email</h2>
                <p>beebs@gmail.com</p>
            </div>
            <h2>Socials</h2>
            <div class="d-flex flex-row gap-4">
                <img src="/public/footer/Instagram.svg" alt="">
                <img src="/public/footer/X.svg" alt="">
                <img src="/public/footer/Facebook.svg" alt="">
            </div>
        </div>
        <div class="col-5">
            <form>
                <div class="form-group">
                    <label for="exampleInputName1">Name</label>
                    <input type="text" class="form-control" id="exampleInputName1">
                </div>
                <div class="form-group mt-4">
                    <label for="exampleInputEmail1">Email address</label>
                    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp">
                    <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
                </div>
                <div class="form-group mt-4">
                    <label for="exampleInputSer1">Service type</label>
                    <select id="exampleInputSer1" class="form-control">
                        <option selected disabled>Default select</option>
                        <option>Default select</option>
                        <option>Default select</option>
                    </select>
                </div>
                <div class="form-group mt-4">
                    <label for="exampleInputMessage1">Message</label>
                    <textarea class="form-control" height="150" id="exampleInputMessage1"></textarea>
                </div>
                <button type="submit" class="btn mt-4 w-100" style="background-color: black; border-radius: 2px; color: white;">Submit</button>
            </form>
        </div>
   </div>
</template>
<style scoped>
.containerFirst{
    height: 600px;
}

</style>