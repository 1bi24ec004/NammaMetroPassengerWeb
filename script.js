function updateClock() {
    const now = new Date();

    const time = now.toLocaleTimeString("en-IN", {
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
        hour12: false
    });

    document.getElementById("clock").textContent = time;
}

document.addEventListener("DOMContentLoaded", () => {
    updateClock();
    setInterval(updateClock, 1000);
});

// Test loading all three timetable files

// Full passenger-friendly station names

const stationNames = {
    "Madavara": {
        english: "Madavara",
        kannada: "ಮಾದಾವರ"
    },
    "CKB Kallu": {
        english: "Chikkabidarakallu",
        kannada: "ಚಿಕ್ಕಬಿದರಕಲ್ಲು"
    },
    "M J Nagar": {
        english: "Manjunathanagara",
        kannada: "ಮಂಜುನಾಥನಗರ"
    },
    "Nagasandra": {
        english: "Nagasandra",
        kannada: "ನಾಗಸಂದ್ರ"
    },
    "Dasarahalli": {
        english: "Dasarahalli",
        kannada: "ದಾಸರಹಳ್ಳಿ"
    },
    "Jalahalli": {
        english: "Jalahalli",
        kannada: "ಜಾಲಹಳ್ಳಿ"
    },
    "Peenya Industry": {
        english: "Peenya Industry",
        kannada: "ಪೀಣ್ಯ ಇಂಡಸ್ಟ್ರಿ"
    },
    "Peenya": {
        english: "Peenya",
        kannada: "ಪೀಣ್ಯ"
    },
    "Goraguntepalya": {
        english: "Goraguntepalya",
        kannada: "ಗೊರಗುಂಟೆಪಾಳ್ಯ"
    },
    "Yeshwanthpur": {
        english: "Yeshwanthpur",
        kannada: "ಯಶವಂತಪುರ"
    },
    "Soap Factory": {
        english: "Sandal Soap Factory",
        kannada: "ಸ್ಯಾಂಡಲ್ ಸೋಪ್ ಫ್ಯಾಕ್ಟರಿ"
    },
    "Mahalakshmi": {
        english: "Mahalakshmi",
        kannada: "ಮಹಾಲಕ್ಷ್ಮಿ"
    },
    "Rajajinagar": {
        english: "Rajajinagar",
        kannada: "ರಾಜಾಜಿನಗರ"
    },
    "MK Road": {
        english: "Mahakavi Kuvempu Road",
        kannada: "ಮಹಾಕವಿ ಕುವೆಂಪು ರಸ್ತೆ"
    },
    "Srirampura": {
        english: "Srirampura",
        kannada: "ಶ್ರೀರಾಮಪುರ"
    },
    "Mantri Square": {
        english: "Mantri Square Sampige Road",
        kannada: "ಮಂತ್ರಿ ಸ್ಕ್ವೇರ್ ಸಂಪಿಗೆ ರಸ್ತೆ"
    },
    "Majestic": {
        english: "Majestic",
        kannada: "ಮೆಜೆಸ್ಟಿಕ್"
    },
    "Chickpet": {
        english: "Chickpete",
        kannada: "ಚಿಕ್ಕಪೇಟೆ"
    },
    "KR Market": {
        english: "Krishna Rajendra Market",
        kannada: "ಕೃಷ್ಣ ರಾಜೇಂದ್ರ ಮಾರುಕಟ್ಟೆ"
    },
    "National College": {
        english: "National College",
        kannada: "ನ್ಯಾಷನಲ್ ಕಾಲೇಜು"
    },
    "Lalbagh": {
        english: "Lalbagh",
        kannada: "ಲಾಲ್‌ಬಾಗ್"
    },
    "S. end circle": {
        english: "South End Circle",
        kannada: "ಸೌತ್ ಎಂಡ್ ಸರ್ಕಲ್"
    },
    "Jayanagara": {
        english: "Jayanagar",
        kannada: "ಜಯನಗರ"
    },
    "RV Road": {
        english: "Rashtreeya Vidyalaya Road",
        kannada: "ರಾಷ್ಟ್ರೀಯ ವಿದ್ಯಾಲಯ ರಸ್ತೆ"
    },
    "BSK": {
        english: "Banashankari",
        kannada: "ಬನಶಂಕರಿ"
    },
    "JP Nagar": {
        english: "Jaya Prakash Nagar",
        kannada: "ಜಯಪ್ರಕಾಶ್ ನಗರ"
    },
    "Yelachenahalli": {
        english: "Yelachenahalli",
        kannada: "ಯಲಚೇನಹಳ್ಳಿ"
    },
    "KK cross": {
        english: "Konanakunte Cross",
        kannada: "ಕೊಣನಕುಂಟೆ ಕ್ರಾಸ್"
    },
    "DK sandra": {
        english: "Doddakallasandra",
        kannada: "ದೊಡ್ಡಕಲ್ಲಸಂದ್ರ"
    },
    "Vajarahalli": {
        english: "Vajarahalli",
        kannada: "ವಜ್ರಹಳ್ಳಿ"
    },
    "T.G pura": {
        english: "Thalaghattapura",
        kannada: "ತಲಘಟ್ಟಪುರ"
    },
    "Silk Inst.": {
        english: "Silk Institute",
        kannada: "ಸಿಲ್ಕ್ ಇನ್ಸ್ಟಿಟ್ಯೂಟ್"
    }
};
const timetableFiles = {
    weekday: "https://raw.githubusercontent.com/1bi24ec004/namma-metro/refs/heads/main/weekday.json",
    saturday: "https://raw.githubusercontent.com/1bi24ec004/namma-metro/refs/heads/main/saturday.json",
    sunday: "https://raw.githubusercontent.com/1bi24ec004/namma-metro/refs/heads/main/sunday.json"
};

// Prepare Monday arrivals using special early-morning timings

function getMondayArrivals(arrivals, specialTimes, resumeTime) {

    const regularArrivals = arrivals.filter(arrival =>
        arrival.time >= resumeTime
    );

    const mondaySpecialArrivals = specialTimes.map(time => ({
        time: time,
        destination: arrivals[0]?.destination
    }));

    return [
        ...mondaySpecialArrivals,
        ...regularArrivals
    ];
}
// Apply Monday-specific timetable exceptions

function applyMondayExceptions(timetable) {

    const monday = timetable.monday_exceptions;

    if (!monday) return timetable;

    timetable.platforms.silk_institute.arrivals =
        getMondayArrivals(
            timetable.platforms.silk_institute.arrivals,
            monday.toward_silk_institute.special_times,
            monday.toward_silk_institute.resume_regular_at
        );

    timetable.platforms.madavara.arrivals =
        getMondayArrivals(
            timetable.platforms.madavara.arrivals,
            monday.toward_madavara.special_times,
            monday.toward_madavara.resume_regular_at
        );

    return timetable;
}
// Select timetable according to the phone's current day

function getCurrentDayTimetable() {

    const day = new Date().getDay();

    if (day === 0) {
        return allTimetables.sunday;
    }

    if (day === 6) {
        return allTimetables.saturday;
    }

    return allTimetables.weekday;
}

// Populate station dropdown

function populateStationDropdown(stations) {

    const stationSelect = document.getElementById("station");

    stationSelect.innerHTML = "";

    const sortedStations = [...stations].sort((a, b) => {
        const nameA = stationNames[a.name]?.english || a.name;
        const nameB = stationNames[b.name]?.english || b.name;

        return nameA.localeCompare(nameB);
    });

    stationSelect.innerHTML = "";

const placeholder = document.createElement("option");
placeholder.value = "";
placeholder.textContent = "Select Station";
placeholder.disabled = true;
placeholder.selected = true;

stationSelect.appendChild(placeholder);
    sortedStations.forEach(station => {

        const names = stationNames[station.name];

        const option = document.createElement("option");

        // Keep the exact JSON name as the internal value
        option.value = station.name;

        // Show full English and Kannada names
        option.textContent = names
            ? `${names.english} (${names.kannada})`
            : station.name;

        stationSelect.appendChild(option);
    });
}
// Stores the station sequence from the loaded timetable

let currentStations = [];
// Stores the currently active timetable

let currentTimetable = null;
let passengerStationSelected = false;
// Detect passenger station selection and calculate upcoming trains
let allTimetables = {};

document.getElementById("station").addEventListener("change", function () {

    const selectedStation = this.value;

    console.log("Passenger selected station:", selectedStation);

    const offsets = calculateStationOffsets(
        currentStations,
        selectedStation
    );

    console.log("Selected station offsets:", offsets);

    if (!currentTimetable || !offsets) {
        console.log("Timetable or station offsets unavailable.");
        return;
    }
    passengerStationSelected = true;

document.querySelector(".trains-section").hidden = false;
document.querySelector(".current-station").hidden = false;

    const now = new Date();

    const madavaraTrains = getUpcomingTrains(
    currentTimetable.platforms.madavara.arrivals,
    offsets.madavara,
    now,
    selectedStation,
    "madavara"
);

    const silkTrains = getUpcomingTrains(
    currentTimetable.platforms.silk_institute.arrivals,
    offsets.silk,
    now,
    selectedStation,
    "silk"
);

    console.log("Selected station - Upcoming Madavara trains:",
        madavaraTrains.slice(0, 5)
    );

    console.log("Selected station - Upcoming Silk Institute trains:",
        silkTrains.slice(0, 5)
    );
updateMadavaraDisplay();
updateSilkDisplay();
});
// Calculate station offsets from National College

function calculateStationOffsets(stations, selectedName) {

    const nationalCollegeIndex = stations.findIndex(
        station => station.name === "National College"
    );

    const selectedIndex = stations.findIndex(
        station => station.name === selectedName
    );

    if (nationalCollegeIndex === -1 || selectedIndex === -1) {
        return null;
    }

    let travelMinutes = 0;

    const start = Math.min(nationalCollegeIndex, selectedIndex);
    const end = Math.max(nationalCollegeIndex, selectedIndex);

    for (let i = start + 1; i <= end; i++) {
        travelMinutes += Number(stations[i].minutes_from_previous);
    }

    let madavaraOffset = 0;
    let silkOffset = 0;

    if (selectedIndex < nationalCollegeIndex) {

        // Station is towards Madavara from National College
        madavaraOffset = travelMinutes;
        silkOffset = -travelMinutes;

    } else if (selectedIndex > nationalCollegeIndex) {

        // Station is towards Silk Institute from National College
        madavaraOffset = -travelMinutes;
        silkOffset = travelMinutes;
    }

    return {
        madavara: madavaraOffset,
        silk: silkOffset
    };
}
// Apply a minute offset to an HH:MM time

function adjustArrivalTime(time, offsetMinutes) {
    const [hours, minutes] = time.split(":").map(Number);

    let totalMinutes = hours * 60 + minutes + offsetMinutes;

    // Keep the time within a 24-hour day
    totalMinutes = (totalMinutes + 1440) % 1440;

    const adjustedHours = Math.floor(totalMinutes / 60);
    const adjustedMinutes = totalMinutes % 60;

    return (
        String(adjustedHours).padStart(2, "0") +
        ":" +
        String(adjustedMinutes).padStart(2, "0")
    );
}
// Convert HH:MM time into minutes since midnight

function timeToMinutes(time) {

    const [hours, minutes] = time.split(":").map(Number);

    return hours * 60 + minutes;
}
// Convert an arrival time into its position on a continuous timeline

function getContinuousArrivalTime(time, offsetMinutes) {

    return timeToMinutes(time) + offsetMinutes;
}
function getContinuousArrivalTime(time, offsetMinutes) {

    return timeToMinutes(time) + offsetMinutes;
}


// Find the next occurrence of an arrival time

// Find the next occurrence of an adjusted arrival time
function getNextOccurrence(arrivalMinutes, currentDate) {

    const midnight = new Date(currentDate);
    midnight.setHours(0, 0, 0, 0);

    let nextArrival = null;

    // Check yesterday, today and tomorrow's timetable
    for (let dayOffset = -1; dayOffset <= 2; dayOffset++) {

        const serviceDay = new Date(midnight);
        serviceDay.setDate(serviceDay.getDate() + dayOffset);

        const candidate = new Date(serviceDay);
        candidate.setMinutes(arrivalMinutes);

        if (candidate.getTime() + 60000 > currentDate.getTime()) {
            if (nextArrival === null || candidate < nextArrival) {
                nextArrival = candidate;
            }
        }
    }

    return nextArrival;
}
// Create adjusted copies of all train arrivals

function getAdjustedArrivals(arrivals, offsetMinutes) {

    return arrivals.map(arrival => {
        return {
            ...arrival,
            time: adjustArrivalTime(arrival.time, offsetMinutes)
        };
    });

}
// Find upcoming trains that can reach the passenger's selected station
function getUpcomingTrains(
    arrivals,
    offsetMinutes,
    currentDate,
    selectedStation,
    direction
) {

    const upcomingTrains = [];

    // Find the passenger's position in the original route order
    const selectedIndex = currentStations.findIndex(
        station => station.name === selectedStation
    );

    if (selectedIndex === -1) {
        console.error("Selected station not found:", selectedStation);
        return [];
    }

    arrivals.forEach(arrival => {

    
        // Find this train's terminal destination in the route
       const destinationIndex = currentStations.findIndex(
    station =>
        station.name === arrival.destination ||
        (station.name === "Silk Inst." && arrival.destination === "Silk Institute")
);
        // Ignore entries with an unrecognised destination
        if (destinationIndex === -1) {
            console.warn("Unknown train destination:", arrival.destination);
            return;
        }

        // Check whether this train can reach the selected station
        let canReachSelectedStation = false;

        if (direction === "madavara") {

            // Madavara direction travels backwards through the route
            canReachSelectedStation =
                selectedIndex >= destinationIndex;

        } else if (direction === "silk") {

            // Silk Institute direction travels forwards through the route
            canReachSelectedStation =
                selectedIndex <= destinationIndex;
        }

        // Do not display trains that terminate before the selected station
        if (!canReachSelectedStation) {
            return;
        }

        // Existing arrival-time calculation remains unchanged
        const arrivalMinutes = getContinuousArrivalTime(
            arrival.time,
            offsetMinutes
        );

        const arrivalDate = getNextOccurrence(
            arrivalMinutes,
            currentDate
        );

        if (arrivalDate !== null) {
            upcomingTrains.push({
                ...arrival,
                adjustedTime: adjustArrivalTime(
                    arrival.time,
                    offsetMinutes
                ),
                arrivalDate: arrivalDate
            });
        }
    });

    // Existing chronological sorting remains unchanged
    upcomingTrains.sort((a, b) =>
        a.arrivalDate - b.arrivalDate
    );

    return upcomingTrains;
}
async function testTimetables() {

    for (const [day, url] of Object.entries(timetableFiles)) {

        try {
            const response = await fetch(url);

            if (!response.ok) {
                throw new Error("File could not be loaded");
            }

            const data = await response.json();

if (!data || !data.route || !data.platforms) {
    console.error("Invalid timetable data for:", day, data);
    throw new Error("Timetable JSON is missing route or platforms");
}

allTimetables[day] = data;

            if (day === "weekday") {
                
                // Test adjusted train arrival lists

const testOffsets = calculateStationOffsets(
    data.route.stations,
    "Rajajinagar"
);

const adjustedMadavara = getAdjustedArrivals(
    data.platforms.madavara.arrivals,
    testOffsets.madavara
);

const adjustedSilk = getAdjustedArrivals(
    data.platforms.silk_institute.arrivals,
    testOffsets.silk
);

console.log("Original Madavara first 3:",
    data.platforms.madavara.arrivals.slice(0, 3)
);

console.log("Adjusted Madavara first 3:",
    adjustedMadavara.slice(0, 3)
);

console.log("Original Silk first 3:",
    data.platforms.silk_institute.arrivals.slice(0, 3)
);

console.log("Adjusted Silk first 3:",
    adjustedSilk.slice(0, 3)
);
                console.log("Time adjustment tests:");

console.log("12:00 + 14 minutes:",
    adjustArrivalTime("12:00", 14)
);

console.log("12:00 - 14 minutes:",
    adjustArrivalTime("12:00", -14)
);

console.log("00:05 - 10 minutes:",
    adjustArrivalTime("00:05", -10)
);
console.log("Midnight calculation tests:");

console.log("00:05 with -10 minutes:",
    getContinuousArrivalTime("00:05", -10)
);

console.log("23:55 with +10 minutes:",
    getContinuousArrivalTime("23:55", 10)
);

console.log("12:00 with +14 minutes:",
    getContinuousArrivalTime("12:00", 14)
);
// Test next train occurrence around midnight

const testCurrentTime = new Date();
testCurrentTime.setHours(23, 55, 0, 0);

console.log("Next occurrence tests:");

console.log("00:05 with no offset:",
    getNextOccurrence(5, testCurrentTime).toString()
);

console.log("00:05 shifted backward by 10 minutes:",
    getNextOccurrence(-5, testCurrentTime).toString()
);

console.log("23:55 shifted forward by 10 minutes:",
    getNextOccurrence(1445, testCurrentTime).toString()
);
    console.log("KR Market offsets:",
    calculateStationOffsets(data.route.stations, "KR Market")
);

console.log("Lalbagh offsets:",
    calculateStationOffsets(data.route.stations, "Lalbagh")
);

console.log("National College offsets:",
    calculateStationOffsets(data.route.stations, "National College")
);
}

            console.log(day.toUpperCase() + " loaded successfully");
            console.log("Stations:", data.route.stations.length);
            console.log("National College index:",
    data.route.stations.findIndex(
        station => station.name === "National College"
    )
);
console.log("National College data:",
    data.route.stations[19]
);

console.log("Madavara sample:",
    data.platforms.madavara.arrivals.slice(0, 3)
);

console.log("Silk Institute sample:",
    data.platforms.silk_institute.arrivals.slice(0, 3)
);
console.log("Silk Institute sample:",
    data.platforms.silk_institute.arrivals.slice(0, 3)
);

// Station sequence
console.log("Station sequence:");
console.log("First station full data:", data.route.stations[0]);

data.route.stations.forEach((station, index) => {
    console.log(
        index,
        station.name,
        station.minutes_from_previous
    );
});

        } catch (error) {
            console.error(day.toUpperCase() + " loading failed:", error);
        }
    }
        // Activate the timetable for the current day

    currentTimetable = getCurrentDayTimetable();

    // Apply special timings only on Monday
if (new Date().getDay() === 1) {
    currentTimetable = applyMondayExceptions(currentTimetable);
    console.log("Monday exceptions applied.");
}

    if (currentTimetable) {
        currentStations = currentTimetable.route.stations;
        console.log("Last route station:", currentStations[currentStations.length - 1].name);
console.log("Silk Institute exists:", currentStations.some(
    station => station.name === "Silk Institute"
));

        populateStationDropdown(currentStations);

        console.log("Active timetable selected:", currentTimetable);
    }
}
testTimetables().then(() => {
    if (currentTimetable) {

        if (passengerStationSelected) {
            updateMadavaraDisplay();
            updateSilkDisplay();
        }

        setInterval(() => {
            if (passengerStationSelected) {
                updateMadavaraDisplay();
                updateSilkDisplay();
            }
        }, 1000);
    }
});

// Automatically update Madavara passenger display

// Calculate approximate train progress along the entire route
function calculateTrainProgress(selectedIndex, remainingMinutes, direction) {

    let totalRouteMinutes = 0;
    let distanceFromStart = 0;

    for (let i = 1; i < currentStations.length; i++) {

        const travelMinutes = Number(
            currentStations[i].minutes_from_previous
        );

        totalRouteMinutes += travelMinutes;

        if (i <= selectedIndex) {
            distanceFromStart += travelMinutes;
        }
    }

    if (totalRouteMinutes <= 0) return 0;

    let progress;

    if (direction === "madavara") {
        progress = distanceFromStart - remainingMinutes;
    } else {
        progress = totalRouteMinutes - distanceFromStart - remainingMinutes;
    }

    progress = Math.max(0, Math.min(totalRouteMinutes, progress));

    return (progress / totalRouteMinutes) * 100;
}
function updateMadavaraDisplay() {

    if (!currentTimetable || currentStations.length === 0 ||
    !passengerStationSelected) {
    return;
}

    const selectedStation = document.getElementById("station").value;

    if (!selectedStation) {
        return;
    }

    const offsets = calculateStationOffsets(
        currentStations,
        selectedStation
    );

    if (!offsets) return;

    const madavaraTrains = getUpcomingTrains(
    currentTimetable.platforms.madavara.arrivals,
    offsets.madavara,
    new Date(),
    selectedStation,
    "madavara"
);

    if (madavaraTrains.length === 0) {
    document.getElementById("madavara-destination").textContent = "No service";
    document.getElementById("madavara-countdown").textContent = "--";
    document.querySelector("#madavara-countdown + .arrival").textContent =
        "No train reaches this station";
    document.querySelector("#madavara-countdown")
        .closest(".train-card")
        .querySelector(".following-times").textContent = "";
    document.getElementById("madavara-position").textContent = "--";
    return;
}

    const nextTrain = madavaraTrains[0];
    const destinationName =
    stationNames[nextTrain.destination]?.english ||
    nextTrain.destination ||
    "Not available";

document.getElementById("madavara-destination").textContent =
    destinationName;

    const remainingMilliseconds = nextTrain.arrivalDate - new Date();

    const remainingMinutes = Math.max(
        0,
        Math.ceil(remainingMilliseconds / 60000)
    );

    document.getElementById("madavara-countdown").textContent =
        remainingMinutes + " min";

    document.querySelector("#madavara-countdown + .arrival").textContent =
        "Next arrival · " + nextTrain.adjustedTime;

    document.querySelector("#madavara-countdown")
        .closest(".train-card")
        .querySelector(".following-times").textContent =
        madavaraTrains.slice(1, 4)
            .map(train => train.adjustedTime)
            .join(" · ");
                // Estimate the current station of the next Madavara-bound train

    const remainingMinutesExact =
        remainingMilliseconds / 60000;

    const selectedIndex = currentStations.findIndex(
        station => station.name === selectedStation
    );

    let estimatedStation = selectedStation;
    let accumulatedMinutes = 0;

    // Madavara-bound trains approach from Silk Institute
    for (let i = selectedIndex + 1; i < currentStations.length; i++) {

        accumulatedMinutes += Number(
            currentStations[i].minutes_from_previous
        );

        if (accumulatedMinutes >= remainingMinutesExact) {
            estimatedStation = currentStations[i].name;
            break;
        }
    }
    // Prevent the estimated station from going beyond the train's destination
const destinationIndex = currentStations.findIndex(
    station => station.name === nextTrain.destination
);

const estimatedIndex = currentStations.findIndex(
    station => station.name === estimatedStation
);

if (
    destinationIndex !== -1 &&
    estimatedIndex !== -1 &&
    estimatedIndex < destinationIndex
) {
    estimatedStation = currentStations[destinationIndex].name;
}

    const stationDisplay =
        stationNames[estimatedStation]?.english || estimatedStation;

    document.getElementById("madavara-position").textContent =
        stationDisplay;
}

// Automatically update Silk Institute passenger display

function updateSilkDisplay() {

   if (!currentTimetable || currentStations.length === 0 ||
    !passengerStationSelected) {
    return;
}

    const selectedStation = document.getElementById("station").value;

    if (!selectedStation) {
        return;
    }

    const offsets = calculateStationOffsets(
        currentStations,
        selectedStation
    );

    if (!offsets) return;

    const silkTrains = getUpcomingTrains(
    currentTimetable.platforms.silk_institute.arrivals,
    offsets.silk,
    new Date(),
    selectedStation,
    "silk"
);

    if (silkTrains.length === 0) {
    document.getElementById("silk-destination").textContent = "No service";
    document.getElementById("silk-countdown").textContent = "--";
    document.querySelector("#silk-countdown + .arrival").textContent =
        "No train reaches this station";
    document.querySelector("#silk-countdown")
        .closest(".train-card")
        .querySelector(".following-times").textContent = "";
    document.getElementById("silk-position").textContent = "--";
    return;
}

    const nextTrain = silkTrains[0];
    const destinationName =
    stationNames[nextTrain.destination]?.english ||
    nextTrain.destination ||
    "Not available";

document.getElementById("silk-destination").textContent =
    destinationName;

    const remainingMilliseconds = nextTrain.arrivalDate - new Date();

    const remainingMinutes = Math.max(
        0,
        Math.ceil(remainingMilliseconds / 60000)
    );

    document.getElementById("silk-countdown").textContent =
        remainingMinutes + " min";

    document.querySelector("#silk-countdown + .arrival").textContent =
        "Next arrival · " + nextTrain.adjustedTime;

    document.querySelector("#silk-countdown")
        .closest(".train-card")
        .querySelector(".following-times").textContent =
        silkTrains.slice(1, 4)
            .map(train => train.adjustedTime)
            .join(" · ");
                // Estimate the current station of the next Silk Institute-bound train

    const remainingMinutesExact =
        remainingMilliseconds / 60000;

    const selectedIndex = currentStations.findIndex(
        station => station.name === selectedStation
    );

    let estimatedStation = selectedStation;
    let accumulatedMinutes = 0;

    // Silk Institute-bound trains approach from Madavara
    for (let i = selectedIndex; i > 0; i--) {

        accumulatedMinutes += Number(
            currentStations[i].minutes_from_previous
        );

        if (accumulatedMinutes >= remainingMinutesExact) {
            estimatedStation = currentStations[i - 1].name;
            break;
        }
    }
    // Prevent the estimated station from going beyond the train's destination
const destinationIndex = currentStations.findIndex(
    station => station.name === nextTrain.destination
);

const estimatedIndex = currentStations.findIndex(
    station => station.name === estimatedStation
);

if (
    destinationIndex !== -1 &&
    estimatedIndex !== -1 &&
    estimatedIndex > destinationIndex
) {
    estimatedStation = currentStations[destinationIndex].name;
}

    const stationDisplay =
        stationNames[estimatedStation]?.english || estimatedStation;

    document.getElementById("silk-position").textContent =
        stationDisplay;
}
