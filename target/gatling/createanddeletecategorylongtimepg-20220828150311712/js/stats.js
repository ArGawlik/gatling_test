var stats = {
    type: "GROUP",
name: "Global Information",
path: "",
pathFormatted: "group_missing-name-b06d1",
stats: {
    "name": "Global Information",
    "numberOfRequests": {
        "total": "6412",
        "ok": "5388",
        "ko": "1024"
    },
    "minResponseTime": {
        "total": "616",
        "ok": "616",
        "ko": "963"
    },
    "maxResponseTime": {
        "total": "19886",
        "ok": "19886",
        "ko": "19282"
    },
    "meanResponseTime": {
        "total": "5915",
        "ok": "5940",
        "ko": "5787"
    },
    "standardDeviation": {
        "total": "3295",
        "ok": "3306",
        "ko": "3234"
    },
    "percentiles1": {
        "total": "5661",
        "ok": "5674",
        "ko": "5589"
    },
    "percentiles2": {
        "total": "7263",
        "ok": "7290",
        "ko": "7127"
    },
    "percentiles3": {
        "total": "12962",
        "ok": "13009",
        "ko": "11568"
    },
    "percentiles4": {
        "total": "17598",
        "ok": "17525",
        "ko": "17705"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 4,
    "percentage": 0
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 65,
    "percentage": 1
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 5319,
    "percentage": 83
},
    "group4": {
    "name": "failed",
    "count": 1024,
    "percentage": 16
},
    "meanNumberOfRequestsPerSecond": {
        "total": "95.701",
        "ok": "80.418",
        "ko": "15.284"
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
        "total": "3444",
        "ok": "2833",
        "ko": "611"
    },
    "minResponseTime": {
        "total": "722",
        "ok": "722",
        "ko": "963"
    },
    "maxResponseTime": {
        "total": "19886",
        "ok": "19886",
        "ko": "19282"
    },
    "meanResponseTime": {
        "total": "6055",
        "ok": "6098",
        "ko": "5860"
    },
    "standardDeviation": {
        "total": "3616",
        "ok": "3605",
        "ko": "3660"
    },
    "percentiles1": {
        "total": "5617",
        "ok": "5646",
        "ko": "5424"
    },
    "percentiles2": {
        "total": "7240",
        "ok": "7291",
        "ko": "6929"
    },
    "percentiles3": {
        "total": "13509",
        "ok": "13503",
        "ko": "14081"
    },
    "percentiles4": {
        "total": "18169",
        "ok": "18211",
        "ko": "18056"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 2,
    "percentage": 0
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 39,
    "percentage": 1
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 2792,
    "percentage": 81
},
    "group4": {
    "name": "failed",
    "count": 611,
    "percentage": 18
},
    "meanNumberOfRequestsPerSecond": {
        "total": "51.403",
        "ok": "42.284",
        "ko": "9.119"
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
        "total": "2968",
        "ok": "2555",
        "ko": "413"
    },
    "minResponseTime": {
        "total": "616",
        "ok": "616",
        "ko": "1204"
    },
    "maxResponseTime": {
        "total": "13540",
        "ok": "13540",
        "ko": "13405"
    },
    "meanResponseTime": {
        "total": "5753",
        "ok": "5765",
        "ko": "5679"
    },
    "standardDeviation": {
        "total": "2870",
        "ok": "2930",
        "ko": "2467"
    },
    "percentiles1": {
        "total": "5729",
        "ok": "5720",
        "ko": "5887"
    },
    "percentiles2": {
        "total": "7283",
        "ok": "7280",
        "ko": "7285"
    },
    "percentiles3": {
        "total": "11590",
        "ok": "11651",
        "ko": "9488"
    },
    "percentiles4": {
        "total": "13444",
        "ok": "13453",
        "ko": "13033"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 2,
    "percentage": 0
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 26,
    "percentage": 1
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 2527,
    "percentage": 85
},
    "group4": {
    "name": "failed",
    "count": 413,
    "percentage": 14
},
    "meanNumberOfRequestsPerSecond": {
        "total": "44.299",
        "ok": "38.134",
        "ko": "6.164"
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
