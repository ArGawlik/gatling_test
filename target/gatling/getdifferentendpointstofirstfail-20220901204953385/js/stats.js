var stats = {
    type: "GROUP",
name: "Global Information",
path: "",
pathFormatted: "group_missing-name-b06d1",
stats: {
    "name": "Global Information",
    "numberOfRequests": {
        "total": "2000",
        "ok": "1994",
        "ko": "6"
    },
    "minResponseTime": {
        "total": "300",
        "ok": "300",
        "ko": "10326"
    },
    "maxResponseTime": {
        "total": "17261",
        "ok": "17261",
        "ko": "11285"
    },
    "meanResponseTime": {
        "total": "2582",
        "ok": "2557",
        "ko": "11088"
    },
    "standardDeviation": {
        "total": "3164",
        "ok": "3134",
        "ko": "342"
    },
    "percentiles1": {
        "total": "1577",
        "ok": "1565",
        "ko": "11224"
    },
    "percentiles2": {
        "total": "3157",
        "ok": "3122",
        "ko": "11251"
    },
    "percentiles3": {
        "total": "10337",
        "ok": "8883",
        "ko": "11278"
    },
    "percentiles4": {
        "total": "17222",
        "ok": "17222",
        "ko": "11284"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 471,
    "percentage": 24
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 259,
    "percentage": 13
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 1264,
    "percentage": 63
},
    "group4": {
    "name": "failed",
    "count": 6,
    "percentage": 0
},
    "meanNumberOfRequestsPerSecond": {
        "total": "74.074",
        "ok": "73.852",
        "ko": "0.222"
    }
},
contents: {
"req_getshipper1-4f703": {
        type: "REQUEST",
        name: "GetShipper1",
path: "GetShipper1",
pathFormatted: "req_getshipper1-4f703",
stats: {
    "name": "GetShipper1",
    "numberOfRequests": {
        "total": "2000",
        "ok": "1994",
        "ko": "6"
    },
    "minResponseTime": {
        "total": "300",
        "ok": "300",
        "ko": "10326"
    },
    "maxResponseTime": {
        "total": "17261",
        "ok": "17261",
        "ko": "11285"
    },
    "meanResponseTime": {
        "total": "2582",
        "ok": "2557",
        "ko": "11088"
    },
    "standardDeviation": {
        "total": "3164",
        "ok": "3134",
        "ko": "342"
    },
    "percentiles1": {
        "total": "1577",
        "ok": "1565",
        "ko": "11224"
    },
    "percentiles2": {
        "total": "3157",
        "ok": "3122",
        "ko": "11251"
    },
    "percentiles3": {
        "total": "10337",
        "ok": "8883",
        "ko": "11278"
    },
    "percentiles4": {
        "total": "17222",
        "ok": "17222",
        "ko": "11284"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 471,
    "percentage": 24
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 259,
    "percentage": 13
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 1264,
    "percentage": 63
},
    "group4": {
    "name": "failed",
    "count": 6,
    "percentage": 0
},
    "meanNumberOfRequestsPerSecond": {
        "total": "74.074",
        "ok": "73.852",
        "ko": "0.222"
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
