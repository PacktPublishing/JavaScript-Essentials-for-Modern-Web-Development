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
}];

// runStats.forEach(stat => {
//     console.log(`Ran ${stat.distance}km in ${stat.time.hours}H ${stat.time.minutes}M ${stat.time.seconds}S`);
// });

let timeStats = runStats.map(stat => formatRunStat(stat))
                        .map(formattedStat => runStatToString(formattedStat))
                        .forEach(l => console.log(l));


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
