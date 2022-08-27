var stats = {
    type: "GROUP",
name: "Global Information",
path: "",
pathFormatted: "group_missing-name-b06d1",
stats: {
    "name": "Global Information",
    "numberOfRequests": {
        "total": "1188",
        "ok": "1176",
        "ko": "12"
    },
    "minResponseTime": {
        "total": "46",
        "ok": "46",
        "ko": "10108"
    },
    "maxResponseTime": {
        "total": "14985",
        "ok": "14985",
        "ko": "12303"
    },
    "meanResponseTime": {
        "total": "2610",
        "ok": "2529",
        "ko": "10529"
    },
    "standardDeviation": {
        "total": "2942",
        "ok": "2844",
        "ko": "785"
    },
    "percentiles1": {
        "total": "1480",
        "ok": "1422",
        "ko": "10182"
    },
    "percentiles2": {
        "total": "4220",
        "ok": "4189",
        "ko": "10260"
    },
    "percentiles3": {
        "total": "8481",
        "ok": "8397",
        "ko": "12279"
    },
    "percentiles4": {
        "total": "10118",
        "ok": "9026",
        "ko": "12298"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 535,
    "percentage": 45
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 43,
    "percentage": 4
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 598,
    "percentage": 50
},
    "group4": {
    "name": "failed",
    "count": 12,
    "percentage": 1
},
    "meanNumberOfRequestsPerSecond": {
        "total": "74.25",
        "ok": "73.5",
        "ko": "0.75"
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
        "total": "600",
        "ok": "588",
        "ko": "12"
    },
    "minResponseTime": {
        "total": "890",
        "ok": "890",
        "ko": "10108"
    },
    "maxResponseTime": {
        "total": "14985",
        "ok": "14985",
        "ko": "12303"
    },
    "meanResponseTime": {
        "total": "4859",
        "ok": "4744",
        "ko": "10529"
    },
    "standardDeviation": {
        "total": "2602",
        "ok": "2495",
        "ko": "785"
    },
    "percentiles1": {
        "total": "4210",
        "ok": "4184",
        "ko": "10182"
    },
    "percentiles2": {
        "total": "7809",
        "ok": "7244",
        "ko": "10260"
    },
    "percentiles3": {
        "total": "8950",
        "ok": "8865",
        "ko": "12279"
    },
    "percentiles4": {
        "total": "10242",
        "ok": "9123",
        "ko": "12298"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 0,
    "percentage": 0
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 4,
    "percentage": 1
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 584,
    "percentage": 97
},
    "group4": {
    "name": "failed",
    "count": 12,
    "percentage": 2
},
    "meanNumberOfRequestsPerSecond": {
        "total": "37.5",
        "ok": "36.75",
        "ko": "0.75"
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
        "total": "588",
        "ok": "588",
        "ko": "0"
    },
    "minResponseTime": {
        "total": "46",
        "ok": "46",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "4849",
        "ok": "4849",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "314",
        "ok": "314",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "376",
        "ok": "376",
        "ko": "-"
    },
    "percentiles1": {
        "total": "165",
        "ok": "165",
        "ko": "-"
    },
    "percentiles2": {
        "total": "381",
        "ok": "381",
        "ko": "-"
    },
    "percentiles3": {
        "total": "901",
        "ok": "901",
        "ko": "-"
    },
    "percentiles4": {
        "total": "1605",
        "ok": "1605",
        "ko": "-"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 535,
    "percentage": 91
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 39,
    "percentage": 7
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 14,
    "percentage": 2
},
    "group4": {
    "name": "failed",
    "count": 0,
    "percentage": 0
},
    "meanNumberOfRequestsPerSecond": {
        "total": "36.75",
        "ok": "36.75",
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
