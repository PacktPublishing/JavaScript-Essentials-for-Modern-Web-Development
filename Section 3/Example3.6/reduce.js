const runStats = [{
    distance: 10.2,
    time: {
        hours: 0,
        minutes: 54,
        seconds: 32
    },
    calories: 590
}, {
    distance: 7,
    time: {
        hours: 0,
        minutes: 38,
        seconds: 32
    },
    calories: 300
}, {
    distance: 21,
    time: {
        hours: 1,
        minutes: 45,
        seconds: 20
    },
    calories: 990
}, {
    distance: 30,
    time: {
        hours: 2,
        minutes: 25,
        seconds: 32
    },
    calories: 1182
}, {
    distance: 9,
    time: {
        hours: 0,
        minutes: 55,
        seconds: 00
    },
    calories: 522
}];

// runStats.forEach(stat => {
//     console.log(`Ran ${stat.distance}km in ${stat.time.hours}H ${stat.time.minutes}M ${stat.time.seconds}S`);
// });

let avgStats = runStats.reduce((acc, current) => {
    return {
        totalTime: acc.totalTime + timeToMinutes(current.time.hours, current.time.minutes),
        totalDistance: acc.totalDistance + current.distance
    }
}, {
    totalTime: 0,
    totalDistance: 0
});
console.log(avgStats);

function timeToMinutes(hours, minutes) {
    return hours*60 + minutes;
}

function runStatToString(formattedStat) {
    return `Ran ${formattedStat.distance} in ${formattedStat.time}`;
}

function formatRunStat(stat) {
    return {
        time: formatTime(stat),
        distance: stat.distance
    };
}

function formatTime(stat) {
    let time = stat.time;
    return `${time.hours}H ${time.minutes}M ${time.seconds}S`;
}
