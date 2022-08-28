var stats = {
    type: "GROUP",
name: "Global Information",
path: "",
pathFormatted: "group_missing-name-b06d1",
stats: {
    "name": "Global Information",
    "numberOfRequests": {
        "total": "1126",
        "ok": "1052",
        "ko": "74"
    },
    "minResponseTime": {
        "total": "52",
        "ok": "52",
        "ko": "835"
    },
    "maxResponseTime": {
        "total": "17917",
        "ok": "17917",
        "ko": "5670"
    },
    "meanResponseTime": {
        "total": "5664",
        "ok": "5819",
        "ko": "3463"
    },
    "standardDeviation": {
        "total": "5570",
        "ok": "5720",
        "ko": "1331"
    },
    "percentiles1": {
        "total": "3989",
        "ok": "4096",
        "ko": "3660"
    },
    "percentiles2": {
        "total": "10530",
        "ok": "10951",
        "ko": "4368"
    },
    "percentiles3": {
        "total": "16239",
        "ok": "16352",
        "ko": "5522"
    },
    "percentiles4": {
        "total": "17761",
        "ok": "17764",
        "ko": "5655"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 321,
    "percentage": 29
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 18,
    "percentage": 2
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 713,
    "percentage": 63
},
    "group4": {
    "name": "failed",
    "count": 74,
    "percentage": 7
},
    "meanNumberOfRequestsPerSecond": {
        "total": "59.263",
        "ok": "55.368",
        "ko": "3.895"
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
        "ok": "526",
        "ko": "74"
    },
    "minResponseTime": {
        "total": "743",
        "ok": "743",
        "ko": "835"
    },
    "maxResponseTime": {
        "total": "17917",
        "ok": "17917",
        "ko": "5670"
    },
    "meanResponseTime": {
        "total": "8459",
        "ok": "9162",
        "ko": "3463"
    },
    "standardDeviation": {
        "total": "5156",
        "ok": "5105",
        "ko": "1331"
    },
    "percentiles1": {
        "total": "7740",
        "ok": "8991",
        "ko": "3660"
    },
    "percentiles2": {
        "total": "13029",
        "ok": "13760",
        "ko": "4368"
    },
    "percentiles3": {
        "total": "16870",
        "ok": "16941",
        "ko": "5522"
    },
    "percentiles4": {
        "total": "17800",
        "ok": "17820",
        "ko": "5655"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 1,
    "percentage": 0
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 11,
    "percentage": 2
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 514,
    "percentage": 86
},
    "group4": {
    "name": "failed",
    "count": 74,
    "percentage": 12
},
    "meanNumberOfRequestsPerSecond": {
        "total": "31.579",
        "ok": "27.684",
        "ko": "3.895"
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
        "total": "526",
        "ok": "526",
        "ko": "0"
    },
    "minResponseTime": {
        "total": "52",
        "ok": "52",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "12968",
        "ok": "12968",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "2477",
        "ok": "2477",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "4126",
        "ok": "4126",
        "ko": "-"
    },
    "percentiles1": {
        "total": "139",
        "ok": "139",
        "ko": "-"
    },
    "percentiles2": {
        "total": "2936",
        "ok": "2936",
        "ko": "-"
    },
    "percentiles3": {
        "total": "12534",
        "ok": "12534",
        "ko": "-"
    },
    "percentiles4": {
        "total": "12908",
        "ok": "12908",
        "ko": "-"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 320,
    "percentage": 61
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 7,
    "percentage": 1
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 199,
    "percentage": 38
},
    "group4": {
    "name": "failed",
    "count": 0,
    "percentage": 0
},
    "meanNumberOfRequestsPerSecond": {
        "total": "27.684",
        "ok": "27.684",
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
