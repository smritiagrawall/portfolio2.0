export const pageAnimation={
    hidden:{
        opacity:0,
        y:300,
    },
    show:{
        opacity:1,
        y:0,
transition:{
    duration:2.4,
    when:'beforeChildren'
},
    },
    exit:{
        opacity:0,
        y:300,
        transition:{
            duration:2.4,
        }, 

    },
};

export const fade={
    hidden:{opacity:0},
    show:{
        opacity:1,
        transition:{ease:"easeOut",duration:0.75},
    },
};

export const titleAnim={
    hidden:{y:200},
    show:{
        y:0,
        transition:{duration:0.75,ease:"easeOut"},

    },
};