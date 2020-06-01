// does a calendar overlap. example data:

function calendarOverlap(events) {
    if(events.length <= 1){
        return true
    } else {
        const compareArray = events
        for(let i = 0; i < events.length; i++) {
            if(events[i + 1]){
                if(events[i + 1].startTime > events[i].startTime && events[i + 1].startTime < events[i].endTime) {
                    return false
                } else if(events[i + 1].endTime > events[i].startTime && events[i + 1].endTime < events[i].endTime){
                    return false
                } else if(events[i + 1].startTime === events[i].startTime && events[i + 1].endTime === events[i].endTime){
                    return false
                }
            }  else {
                return true
            }
        }
    }
}

module.exports = calendarOverlap
