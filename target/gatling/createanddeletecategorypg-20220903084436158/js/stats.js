var stats = {
    type: "GROUP",
name: "Global Information",
path: "",
pathFormatted: "group_missing-name-b06d1",
stats: {
    "name": "Global Information",
    "numberOfRequests": {
        "total": "1815",
        "ok": "1630",
        "ko": "185"
    },
    "minResponseTime": {
        "total": "48",
        "ok": "48",
        "ko": "2149"
    },
    "maxResponseTime": {
        "total": "11053",
        "ok": "11004",
        "ko": "11053"
    },
    "meanResponseTime": {
        "total": "3310",
        "ok": "3043",
        "ko": "5662"
    },
    "standardDeviation": {
        "total": "2951",
        "ok": "2935",
        "ko": "1841"
    },
    "percentiles1": {
        "total": "3141",
        "ok": "2221",
        "ko": "5541"
    },
    "percentiles2": {
        "total": "5853",
        "ok": "5514",
        "ko": "7269"
    },
    "percentiles3": {
        "total": "8000",
        "ok": "7962",
        "ko": "8350"
    },
    "percentiles4": {
        "total": "9627",
        "ok": "9534",
        "ko": "10447"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 732,
    "percentage": 40
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 37,
    "percentage": 2
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 861,
    "percentage": 47
},
    "group4": {
    "name": "failed",
    "count": 185,
    "percentage": 10
},
    "meanNumberOfRequestsPerSecond": {
        "total": "151.25",
        "ok": "135.833",
        "ko": "15.417"
    }
},
contents: {
"req_create-new-cate-e7e04": {
        type: "REQUEST",
        name: "Create new category",
path: "Create new category",
pathFormatted: "req_create-new-cate-e7e04",
stats: {
    "name": "Create new category",
    "numberOfRequests": {
        "total": "1000",
        "ok": "815",
        "ko": "185"
    },
    "minResponseTime": {
        "total": "1873",
        "ok": "1873",
        "ko": "2149"
    },
    "maxResponseTime": {
        "total": "11053",
        "ok": "11004",
        "ko": "11053"
    },
    "meanResponseTime": {
        "total": "5659",
        "ok": "5658",
        "ko": "5662"
    },
    "standardDeviation": {
        "total": "1828",
        "ok": "1825",
        "ko": "1841"
    },
    "percentiles1": {
        "total": "5524",
        "ok": "5514",
        "ko": "5541"
    },
    "percentiles2": {
        "total": "7051",
        "ok": "7020",
        "ko": "7269"
    },
    "percentiles3": {
        "total": "8546",
        "ok": "8601",
        "ko": "8350"
    },
    "percentiles4": {
        "total": "10388",
        "ok": "10333",
        "ko": "10447"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 0,
    "percentage": 0
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 0,
    "percentage": 0
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 815,
    "percentage": 82
},
    "group4": {
    "name": "failed",
    "count": 185,
    "percentage": 19
},
    "meanNumberOfRequestsPerSecond": {
        "total": "83.333",
        "ok": "67.917",
        "ko": "15.417"
    }
}
    },"req_delete-category-448b8": {
        type: "REQUEST",
        name: "Delete category",
path: "Delete category",
pathFormatted: "req_delete-category-448b8",
stats: {
    "name": "Delete category",
    "numberOfRequests": {
        "total": "815",
        "ok": "815",
        "ko": "0"
    },
    "minResponseTime": {
        "total": "48",
        "ok": "48",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "4406",
        "ok": "4406",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "429",
        "ok": "429",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "476",
        "ok": "476",
        "ko": "-"
    },
    "percentiles1": {
        "total": "333",
        "ok": "333",
        "ko": "-"
    },
    "percentiles2": {
        "total": "422",
        "ok": "422",
        "ko": "-"
    },
    "percentiles3": {
        "total": "1274",
        "ok": "1274",
        "ko": "-"
    },
    "percentiles4": {
        "total": "2534",
        "ok": "2534",
        "ko": "-"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 732,
    "percentage": 90
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 37,
    "percentage": 5
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 46,
    "percentage": 6
},
    "group4": {
    "name": "failed",
    "count": 0,
    "percentage": 0
},
    "meanNumberOfRequestsPerSecond": {
        "total": "67.917",
        "ok": "67.917",
        "ko": "-"
    }
}
    }
}

}

function fillStats(stat){
    $("#numberOfRequests").append(stat.numberOfRequests.total);
    $("#numberOfRequestsOK").append(stat.numberOfRequests.ok);
    $("#numberOfRequestsKO").append(stat.numberOfRequests.ko);

    $("#minResponseTime").append(stat.minResponseTime.total);
    $("#minResponseTimeOK").append(stat.minResponseTime.ok);
    $("#minResponseTimeKO").append(stat.minResponseTime.ko);

    $("#maxResponseTime").append(stat.maxResponseTime.total);
    $("#maxResponseTimeOK").append(stat.maxResponseTime.ok);
    $("#maxResponseTimeKO").append(stat.maxResponseTime.ko);

    $("#meanResponseTime").append(stat.meanResponseTime.total);
    $("#meanResponseTimeOK").append(stat.meanResponseTime.ok);
    $("#meanResponseTimeKO").append(stat.meanResponseTime.ko);

    $("#standardDeviation").append(stat.standardDeviation.total);
    $("#standardDeviationOK").append(stat.standardDeviation.ok);
    $("#standardDeviationKO").append(stat.standardDeviation.ko);

    $("#percentiles1").append(stat.percentiles1.total);
    $("#percentiles1OK").append(stat.percentiles1.ok);
    $("#percentiles1KO").append(stat.percentiles1.ko);

    $("#percentiles2").append(stat.percentiles2.total);
    $("#percentiles2OK").append(stat.percentiles2.ok);
    $("#percentiles2KO").append(stat.percentiles2.ko);

    $("#percentiles3").append(stat.percentiles3.total);
    $("#percentiles3OK").append(stat.percentiles3.ok);
    $("#percentiles3KO").append(stat.percentiles3.ko);

    $("#percentiles4").append(stat.percentiles4.total);
    $("#percentiles4OK").append(stat.percentiles4.ok);
    $("#percentiles4KO").append(stat.percentiles4.ko);

    $("#meanNumberOfRequestsPerSecond").append(stat.meanNumberOfRequestsPerSecond.total);
    $("#meanNumberOfRequestsPerSecondOK").append(stat.meanNumberOfRequestsPerSecond.ok);
    $("#meanNumberOfRequestsPerSecondKO").append(stat.meanNumberOfRequestsPerSecond.ko);
}
