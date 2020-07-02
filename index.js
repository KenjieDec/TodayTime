function TodayTime (item) {
    var result = " ";
    if(!item) item = Date.now();
    var d = new Date(item);
    result = d.toLocaleTimeString();
    return result;
}


module.exports = TodayTime