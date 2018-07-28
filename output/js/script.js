var dev = false;
var controller = new ScrollMagic.Controller();
var introVideo;
var sections;
var examples;
var exSiblings;

function startApp(){

    console.log('called')

    $(function () { // wait for document ready
        // init
        var controller = new ScrollMagic.Controller();

        // define movement of panels
        var wipeAnimation = new TimelineMax()
            .fromTo(".process_sect_1", 1,   {opacity:0,scale:1.5},{opacity:1,scale:1, ease: Linear.easeNone})  // in from left
            .fromTo(".process_sect_2", 1,   {opacity:0,y:'10%'},{opacity:1,y:'0%', ease: Linear.easeNone,delay:1})  // in from left
            .fromTo(".process_sect_3", 1,   {opacity:0,y:'10%'},{opacity:1,y:'0%', ease: Linear.easeNone,delay:1})  // in from right
        var wipeAnimation2 = new TimelineMax()
            //.fromTo(".portfolio_sect_1", 1,                 {x:'0%'},     {x:"0%", ease: Linear.easeNone})  // in from left
            .fromTo(".portfolio_sect_2", 1,              {x:'-100%'},     {x:"100%", ease: Linear.easeNone})  // in from left
            .fromTo(".portfolio_sect_3", 1,            {x:'-100%'},     {x:"100%", ease: Linear.easeNone})  // in from left
            .fromTo(".portfolio_sect_4", 1,            {y:'100%'},   {y:"0%", ease: Linear.easeNone})  // in from left



        // create scene to pin and link animation
        var t = new ScrollMagic.Scene({
                triggerElement: "#process",
                triggerHook: "onLeave",
                duration: "600%"
            })
            .setPin("#process")
            .setTween(wipeAnimation)
            //.addIndicators() // add indicators (requires plugin)
            .addTo(controller);

        var z = new ScrollMagic.Scene({
                triggerElement: "#portfolio",
                triggerHook: "onLeave",
                duration: "1200%"
            })
            .setPin("#portfolio")
            .setTween(wipeAnimation2)
            //.addIndicators() // add indicators (requires plugin)
            .addTo(controller);
    });

}

function test(event){
    var cSection = this.target;
    var cSectionSibling = cSection[0].children;
    console.log(cSectionSibling[0])

}


window.addEventListener("load", startApp);
