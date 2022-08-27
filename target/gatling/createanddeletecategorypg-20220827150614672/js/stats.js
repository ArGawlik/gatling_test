var stats = {
    type: "GROUP",
name: "Global Information",
path: "",
pathFormatted: "group_missing-name-b06d1",
stats: {
    "name": "Global Information",
    "numberOfRequests": {
        "total": "1097",
        "ok": "994",
        "ko": "103"
    },
    "minResponseTime": {
        "total": "52",
        "ok": "52",
        "ko": "1077"
    },
    "maxResponseTime": {
        "total": "14938",
        "ok": "14938",
        "ko": "11093"
    },
    "meanResponseTime": {
        "total": "3276",
        "ok": "3081",
        "ko": "5156"
    },
    "standardDeviation": {
        "total": "3614",
        "ok": "3584",
        "ko": "3355"
    },
    "percentiles1": {
        "total": "1774",
        "ok": "1173",
        "ko": "4089"
    },
    "percentiles2": {
        "total": "5232",
        "ok": "4852",
        "ko": "7973"
    },
    "percentiles3": {
        "total": "10871",
        "ok": "10788",
        "ko": "10949"
    },
    "percentiles4": {
        "total": "11544",
        "ok": "11564",
        "ko": "11074"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 457,
    "percentage": 42
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 42,
    "percentage": 4
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 495,
    "percentage": 45
},
    "group4": {
    "name": "failed",
    "count": 103,
    "percentage": 9
},
    "meanNumberOfRequestsPerSecond": {
        "total": "68.562",
        "ok": "62.125",
        "ko": "6.438"
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
        "ok": "497",
        "ko": "103"
    },
    "minResponseTime": {
        "total": "1024",
        "ok": "1024",
        "ko": "1077"
    },
    "maxResponseTime": {
        "total": "14938",
        "ok": "14938",
        "ko": "11093"
    },
    "meanResponseTime": {
        "total": "5699",
        "ok": "5812",
        "ko": "5156"
    },
    "standardDeviation": {
        "total": "3294",
        "ok": "3270",
        "ko": "3355"
    },
    "percentiles1": {
        "total": "4720",
        "ok": "4861",
        "ko": "4089"
    },
    "percentiles2": {
        "total": "8458",
        "ok": "8542",
        "ko": "7973"
    },
    "percentiles3": {
        "total": "11021",
        "ok": "11108",
        "ko": "10949"
    },
    "percentiles4": {
        "total": "11937",
        "ok": "12505",
        "ko": "11074"
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
    "count": 493,
    "percentage": 82
},
    "group4": {
    "name": "failed",
    "count": 103,
    "percentage": 17
},
    "meanNumberOfRequestsPerSecond": {
        "total": "37.5",
        "ok": "31.062",
        "ko": "6.438"
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
        "total": "497",
        "ok": "497",
        "ko": "0"
    },
    "minResponseTime": {
        "total": "52",
        "ok": "52",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "1713",
        "ok": "1713",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "350",
        "ok": "350",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "271",
        "ok": "271",
        "ko": "-"
    },
    "percentiles1": {
        "total": "279",
        "ok": "279",
        "ko": "-"
    },
    "percentiles2": {
        "total": "498",
        "ok": "498",
        "ko": "-"
    },
    "percentiles3": {
        "total": "908",
        "ok": "908",
        "ko": "-"
    },
    "percentiles4": {
        "total": "1168",
        "ok": "1168",
        "ko": "-"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 457,
    "percentage": 92
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 38,
    "percentage": 8
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 2,
    "percentage": 0
},
    "group4": {
    "name": "failed",
    "count": 0,
    "percentage": 0
},
    "meanNumberOfRequestsPerSecond": {
        "total": "31.062",
        "ok": "31.062",
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
