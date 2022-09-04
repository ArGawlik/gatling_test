var stats = {
    type: "GROUP",
name: "Global Information",
path: "",
pathFormatted: "group_missing-name-b06d1",
stats: {
    "name": "Global Information",
    "numberOfRequests": {
        "total": "6000",
        "ok": "5794",
        "ko": "206"
    },
    "minResponseTime": {
        "total": "188",
        "ok": "188",
        "ko": "10128"
    },
    "maxResponseTime": {
        "total": "28495",
        "ok": "28495",
        "ko": "23407"
    },
    "meanResponseTime": {
        "total": "10559",
        "ok": "10490",
        "ko": "12514"
    },
    "standardDeviation": {
        "total": "6415",
        "ok": "6479",
        "ko": "3733"
    },
    "percentiles1": {
        "total": "8174",
        "ok": "8028",
        "ko": "10776"
    },
    "percentiles2": {
        "total": "14172",
        "ok": "14224",
        "ko": "11566"
    },
    "percentiles3": {
        "total": "22633",
        "ok": "22768",
        "ko": "21163"
    },
    "percentiles4": {
        "total": "27712",
        "ok": "27719",
        "ko": "22565"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 31,
    "percentage": 1
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 12,
    "percentage": 0
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 5751,
    "percentage": 96
},
    "group4": {
    "name": "failed",
    "count": 206,
    "percentage": 3
},
    "meanNumberOfRequestsPerSecond": {
        "total": "65.217",
        "ok": "62.978",
        "ko": "2.239"
    }
},
contents: {
"req_getproduct1-db633": {
        type: "REQUEST",
        name: "GetProduct1",
path: "GetProduct1",
pathFormatted: "req_getproduct1-db633",
stats: {
    "name": "GetProduct1",
    "numberOfRequests": {
        "total": "6000",
        "ok": "5794",
        "ko": "206"
    },
    "minResponseTime": {
        "total": "188",
        "ok": "188",
        "ko": "10128"
    },
    "maxResponseTime": {
        "total": "28495",
        "ok": "28495",
        "ko": "23407"
    },
    "meanResponseTime": {
        "total": "10559",
        "ok": "10490",
        "ko": "12514"
    },
    "standardDeviation": {
        "total": "6415",
        "ok": "6479",
        "ko": "3733"
    },
    "percentiles1": {
        "total": "8173",
        "ok": "8030",
        "ko": "10776"
    },
    "percentiles2": {
        "total": "14172",
        "ok": "14222",
        "ko": "11566"
    },
    "percentiles3": {
        "total": "22633",
        "ok": "22768",
        "ko": "21163"
    },
    "percentiles4": {
        "total": "27712",
        "ok": "27719",
        "ko": "22565"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 31,
    "percentage": 1
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 12,
    "percentage": 0
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 5751,
    "percentage": 96
},
    "group4": {
    "name": "failed",
    "count": 206,
    "percentage": 3
},
    "meanNumberOfRequestsPerSecond": {
        "total": "65.217",
        "ok": "62.978",
        "ko": "2.239"
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
