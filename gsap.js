const timelines = gsap.timeline({ defaults : {duration : 1}});
// Sets all durations to 1 seconds
timelines
    .from(".nav",{ease : 'bounce', y : "-100%"})
    .fromTo(".nav-child",{ opacity : 0, stagger : .5}, {opacity : 1, stagger :.5})
    .from(".hero",{duration : 2.5, x : "-100vw", ease : 'powe3.out'}, 1)
