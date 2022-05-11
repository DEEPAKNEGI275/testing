<template>
    <nav>
            <div class="container">
                <div class="bg-orange">
                    <a class="hide-on-large-only" id="mobile-nav-handle" href="homePage" style="border: none; padding: 10px 20px; color: #f2f2f2">
                        <i class="fa fa-bars fa-lg"></i>
                    </a>
                </div>
                <ul class="top-menu heightinc"></ul>

                <div class="clear"></div>
            </div>
        </nav>
</template>

<style>

.hide-on-large-only {
    display: none !important;
}

.container {
    width: 984px;
    padding: 0 20px;
    text-align: left;
}

.bg-orange {
    background-color: #f36e21 !important;
}

.heightinc {
    height: 16px;
}

.clear {
    clear: both;
}

nav{
        background-color: #f85b5b;
    }
    nav ul{
        list-style: none;
        padding: 0;
        margin: 0;
    }
    nav ul li{
        float: left;
    }
    nav ul li a{
        display: inline-block;
        color: #e8e8e8;
        text-decoration: none;
        padding: 10px 20px;
    }
    nav ul li a:hover{
        background-color: #004892;
    }
    nav ul li:nth-child(1) a{
        background-color: rgba(162, 49, 44, 0.7);
    }
    .hide-on-large-only{
        display: none !important;
    }


    /**
    Sub Menu CSS
    **/
    nav ul li.has-sub-menu ul{
        display: none;
        position: absolute;
        box-shadow: 0px 2px 2px #444;
        z-index: 9;
    }
    nav ul li.has-sub-menu ul li{
        float: none;
    }
    nav ul li.has-sub-menu ul li a{
        background-color: #4866af;
        border-bottom: 1px solid #607ABE;
        display: block;

    }
    nav ul li.has-sub-menu ul li a:hover{
        background-color: #004892;
    }
    nav ul li.has-sub-menu:hover > ul{
        display: block;
    }
    nav ul li.has-sub-menu:hover > ul.sub-menu-l2{
        right: -450px;
        bottom: -120px;
    }
    nav ul li.has-sub-menu:hover > ul.sub-menu-l3{
        right: -270px;
        bottom: -40px;
    }
    /********/


</style>