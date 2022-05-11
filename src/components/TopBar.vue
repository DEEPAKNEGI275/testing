<template>
<div>
    <div class="top-bar">
        <div class="container">
            <ul class="inline left">
                <li class="hide-on-mid hide-on-small">
                    {{ new Date().toDateString() }} {{ new Date().toLocaleTimeString() }}
                </li>
            </ul>
            <ul class="inline right">

                <li>
                    <a href="#">Skip to main content</a>
                </li>
                <li>|</li>
                <li>Screen Reader Access</li>
                <li>|</li>
                <li>Sitemap</li>
                <li>|</li>
                <li>Home</li>
                <li>|</li>
                <li style="background-color: #565656; padding: 2px 5px;">
                    <a href="#">A-</a>
                </li>
                <li style="background-color: #565656; padding: 2px 5px;">
                    <a href="#">A</a>
                </li>
                <li style="background-color: #565656; padding: 2px 5px;">
                    <a href="#">A+</a>
                </li>
                <li style="margin-left: 5px;">Hindi</li>
            </ul>
            <div class="clear"></div>
        </div>
    </div>
</div>
</template>

<style scoped>
.top-bar {
    background-color: #272727;
    color: #e8e8e8;
    padding: 10px 0;
    font-size: .9em;
    box-shadow: 0px 2px 3px #999;
}

.top-bar ul.inline {
    padding: 0;
    margin: 0;
    list-style: none;
}

.top-bar ul.inline li {
    display: inline;
}

.top-bar a {
    color: #e2e2e2;
    text-decoration: none;
}

.container {
    width: 984px;
    padding: 0 20px;
    text-align: left;
}

.inline {
    display: inline;
}

.left {
    float: left;
}

.right {
    float: right;
}

.clear {
    clear: both;
}
</style>