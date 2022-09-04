var stats = {
    type: "GROUP",
name: "Global Information",
path: "",
pathFormatted: "group_missing-name-b06d1",
stats: {
    "name": "Global Information",
    "numberOfRequests": {
        "total": "2000",
        "ok": "1796",
        "ko": "204"
    },
    "minResponseTime": {
        "total": "3724",
        "ok": "3724",
        "ko": "13292"
    },
    "maxResponseTime": {
        "total": "30035",
        "ok": "27254",
        "ko": "30035"
    },
    "meanResponseTime": {
        "total": "13973",
        "ok": "13062",
        "ko": "21990"
    },
    "standardDeviation": {
        "total": "4772",
        "ok": "3683",
        "ko": "5682"
    },
    "percentiles1": {
        "total": "13559",
        "ok": "13231",
        "ko": "20535"
    },
    "percentiles2": {
        "total": "16587",
        "ok": "15697",
        "ko": "30010"
    },
    "percentiles3": {
        "total": "21223",
        "ok": "19074",
        "ko": "30029"
    },
    "percentiles4": {
        "total": "30027",
        "ok": "20837",
        "ko": "30033"
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
    "count": 1796,
    "percentage": 90
},
    "group4": {
    "name": "failed",
    "count": 204,
    "percentage": 10
},
    "meanNumberOfRequestsPerSecond": {
        "total": "50",
        "ok": "44.9",
        "ko": "5.1"
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
        "ok": "1796",
        "ko": "204"
    },
    "minResponseTime": {
        "total": "3724",
        "ok": "3724",
        "ko": "13292"
    },
    "maxResponseTime": {
        "total": "30035",
        "ok": "27254",
        "ko": "30035"
    },
    "meanResponseTime": {
        "total": "13973",
        "ok": "13062",
        "ko": "21990"
    },
    "standardDeviation": {
        "total": "4772",
        "ok": "3683",
        "ko": "5682"
    },
    "percentiles1": {
        "total": "13559",
        "ok": "13231",
        "ko": "20535"
    },
    "percentiles2": {
        "total": "16587",
        "ok": "15697",
        "ko": "30010"
    },
    "percentiles3": {
        "total": "21223",
        "ok": "19074",
        "ko": "30029"
    },
    "percentiles4": {
        "total": "30027",
        "ok": "20837",
        "ko": "30033"
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
    "count": 1796,
    "percentage": 90
},
    "group4": {
    "name": "failed",
    "count": 204,
    "percentage": 10
},
    "meanNumberOfRequestsPerSecond": {
        "total": "50",
        "ok": "44.9",
        "ko": "5.1"
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
