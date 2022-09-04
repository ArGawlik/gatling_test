var stats = {
    type: "GROUP",
name: "Global Information",
path: "",
pathFormatted: "group_missing-name-b06d1",
stats: {
    "name": "Global Information",
    "numberOfRequests": {
        "total": "6000",
        "ok": "5069",
        "ko": "931"
    },
    "minResponseTime": {
        "total": "198",
        "ok": "198",
        "ko": "1329"
    },
    "maxResponseTime": {
        "total": "30352",
        "ok": "29224",
        "ko": "30352"
    },
    "meanResponseTime": {
        "total": "12190",
        "ok": "10596",
        "ko": "20864"
    },
    "standardDeviation": {
        "total": "8499",
        "ok": "7554",
        "ko": "8110"
    },
    "percentiles1": {
        "total": "10359",
        "ok": "7864",
        "ko": "21384"
    },
    "percentiles2": {
        "total": "19028",
        "ok": "16988",
        "ko": "30085"
    },
    "percentiles3": {
        "total": "30054",
        "ok": "25647",
        "ko": "30174"
    },
    "percentiles4": {
        "total": "30165",
        "ok": "28216",
        "ko": "30349"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 47,
    "percentage": 1
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 21,
    "percentage": 0
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 5001,
    "percentage": 83
},
    "group4": {
    "name": "failed",
    "count": 931,
    "percentage": 16
},
    "meanNumberOfRequestsPerSecond": {
        "total": "64.516",
        "ok": "54.505",
        "ko": "10.011"
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
        "ok": "5069",
        "ko": "931"
    },
    "minResponseTime": {
        "total": "198",
        "ok": "198",
        "ko": "1329"
    },
    "maxResponseTime": {
        "total": "30352",
        "ok": "29224",
        "ko": "30352"
    },
    "meanResponseTime": {
        "total": "12190",
        "ok": "10596",
        "ko": "20864"
    },
    "standardDeviation": {
        "total": "8499",
        "ok": "7554",
        "ko": "8110"
    },
    "percentiles1": {
        "total": "10361",
        "ok": "7864",
        "ko": "21384"
    },
    "percentiles2": {
        "total": "19023",
        "ok": "16987",
        "ko": "30085"
    },
    "percentiles3": {
        "total": "30054",
        "ok": "25647",
        "ko": "30174"
    },
    "percentiles4": {
        "total": "30165",
        "ok": "28216",
        "ko": "30349"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 47,
    "percentage": 1
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 21,
    "percentage": 0
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 5001,
    "percentage": 83
},
    "group4": {
    "name": "failed",
    "count": 931,
    "percentage": 16
},
    "meanNumberOfRequestsPerSecond": {
        "total": "64.516",
        "ok": "54.505",
        "ko": "10.011"
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
