var stats = {
    type: "GROUP",
name: "Global Information",
path: "",
pathFormatted: "group_missing-name-b06d1",
stats: {
    "name": "Global Information",
    "numberOfRequests": {
        "total": "37283",
        "ok": "37281",
        "ko": "2"
    },
    "minResponseTime": {
        "total": "97",
        "ok": "97",
        "ko": "4262"
    },
    "maxResponseTime": {
        "total": "8649",
        "ok": "8649",
        "ko": "4301"
    },
    "meanResponseTime": {
        "total": "976",
        "ok": "976",
        "ko": "4282"
    },
    "standardDeviation": {
        "total": "420",
        "ok": "420",
        "ko": "20"
    },
    "percentiles1": {
        "total": "932",
        "ok": "932",
        "ko": "4282"
    },
    "percentiles2": {
        "total": "1031",
        "ok": "1031",
        "ko": "4291"
    },
    "percentiles3": {
        "total": "1254",
        "ok": "1253",
        "ko": "4299"
    },
    "percentiles4": {
        "total": "2220",
        "ok": "2217",
        "ko": "4301"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 2659,
    "percentage": 7
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 31983,
    "percentage": 86
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 2639,
    "percentage": 7
},
    "group4": {
    "name": "failed",
    "count": 2,
    "percentage": 0
},
    "meanNumberOfRequestsPerSecond": {
        "total": "601.339",
        "ok": "601.306",
        "ko": "0.032"
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
        "total": "18779",
        "ok": "18777",
        "ko": "2"
    },
    "minResponseTime": {
        "total": "108",
        "ok": "108",
        "ko": "4262"
    },
    "maxResponseTime": {
        "total": "8649",
        "ok": "8649",
        "ko": "4301"
    },
    "meanResponseTime": {
        "total": "1016",
        "ok": "1016",
        "ko": "4282"
    },
    "standardDeviation": {
        "total": "560",
        "ok": "559",
        "ko": "20"
    },
    "percentiles1": {
        "total": "936",
        "ok": "936",
        "ko": "4282"
    },
    "percentiles2": {
        "total": "1037",
        "ok": "1037",
        "ko": "4291"
    },
    "percentiles3": {
        "total": "1294",
        "ok": "1293",
        "ko": "4299"
    },
    "percentiles4": {
        "total": "4201",
        "ok": "4156",
        "ko": "4301"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 1241,
    "percentage": 7
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 16032,
    "percentage": 85
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 1504,
    "percentage": 8
},
    "group4": {
    "name": "failed",
    "count": 2,
    "percentage": 0
},
    "meanNumberOfRequestsPerSecond": {
        "total": "302.887",
        "ok": "302.855",
        "ko": "0.032"
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
        "total": "18504",
        "ok": "18504",
        "ko": "0"
    },
    "minResponseTime": {
        "total": "97",
        "ok": "97",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "1536",
        "ok": "1536",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "936",
        "ok": "936",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "186",
        "ok": "186",
        "ko": "-"
    },
    "percentiles1": {
        "total": "928",
        "ok": "928",
        "ko": "-"
    },
    "percentiles2": {
        "total": "1025",
        "ok": "1025",
        "ko": "-"
    },
    "percentiles3": {
        "total": "1224",
        "ok": "1224",
        "ko": "-"
    },
    "percentiles4": {
        "total": "1347",
        "ok": "1347",
        "ko": "-"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 1418,
    "percentage": 8
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 15951,
    "percentage": 86
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 1135,
    "percentage": 6
},
    "group4": {
    "name": "failed",
    "count": 0,
    "percentage": 0
},
    "meanNumberOfRequestsPerSecond": {
        "total": "298.452",
        "ok": "298.452",
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
