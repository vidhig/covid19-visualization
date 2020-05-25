function numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

function getKeyByValue(object, value) {
    return Object.keys(object).find(key => object[key] === value);
};

function yesterdayDate() {
    const today = new Date();
    var yesterday = new Date(today);
    yesterday.setDate(yesterday.getDate() - 1);
    return yesterday;
}

function getDateAsString(dt) {
    year = dt.getFullYear().toString().substr(-2);
    month = dt.getMonth() + 1;
    month = month.toString();
    exactDate = dt.getDate().toString();
    compDate = month + "/" + exactDate + "/" + year;
    return compDate
}

function getAllDates(fromDate, toDate) {
    var dateArray = new Array();
    var currentDate = fromDate;
    while (currentDate <= toDate) {
        dateArray.push(getDateAsString(currentDate));
        currentDate.setDate(currentDate.getDate() + 1);
    }
    return dateArray;
}

function wrap(text, width) {
    text.each(function () {
        var text = d3.select(this),
            words = text.text().split(/\s+/).reverse(),
            word,
            line = [],
            lineNumber = 0,
            lineHeight = 1.1, // ems
            x = text.attr("x"),
            y = text.attr("y"),
            dy = 0, //parseFloat(text.attr("dy")),
            tspan = text.text(null)
                        .append("tspan")
                        .attr("x", x)
                        .attr("y", y)
                        .attr("dy", dy + "em");
        while (word = words.pop()) {
            line.push(word);
            tspan.text(line.join(" "));
            if (tspan.node().getComputedTextLength() > width) {
                line.pop();
                tspan.text(line.join(" "));
                line = [word];
                tspan = text.append("tspan")
                            .attr("x", x)
                            .attr("y", y)
                            .attr("dy", ++lineNumber * lineHeight + dy + "em")
                            .text(word);
            }
        }
    });
}
