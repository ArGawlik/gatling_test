var stats = {
    type: "GROUP",
name: "Global Information",
path: "",
pathFormatted: "group_missing-name-b06d1",
stats: {
    "name": "Global Information",
    "numberOfRequests": {
        "total": "1786",
        "ok": "1572",
        "ko": "214"
    },
    "minResponseTime": {
        "total": "50",
        "ok": "50",
        "ko": "2291"
    },
    "maxResponseTime": {
        "total": "14818",
        "ok": "14818",
        "ko": "13493"
    },
    "meanResponseTime": {
        "total": "3935",
        "ok": "3627",
        "ko": "6198"
    },
    "standardDeviation": {
        "total": "3749",
        "ok": "3758",
        "ko": "2782"
    },
    "percentiles1": {
        "total": "3349",
        "ok": "2716",
        "ko": "5325"
    },
    "percentiles2": {
        "total": "6050",
        "ok": "5846",
        "ko": "7951"
    },
    "percentiles3": {
        "total": "11374",
        "ok": "11373",
        "ko": "11379"
    },
    "percentiles4": {
        "total": "13454",
        "ok": "13458",
        "ko": "12127"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 648,
    "percentage": 36
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 76,
    "percentage": 4
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 848,
    "percentage": 47
},
    "group4": {
    "name": "failed",
    "count": 214,
    "percentage": 12
},
    "meanNumberOfRequestsPerSecond": {
        "total": "111.625",
        "ok": "98.25",
        "ko": "13.375"
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
        "ok": "786",
        "ko": "214"
    },
    "minResponseTime": {
        "total": "2273",
        "ok": "2273",
        "ko": "2291"
    },
    "maxResponseTime": {
        "total": "14818",
        "ok": "14818",
        "ko": "13493"
    },
    "meanResponseTime": {
        "total": "6535",
        "ok": "6627",
        "ko": "6198"
    },
    "standardDeviation": {
        "total": "3011",
        "ok": "3064",
        "ko": "2782"
    },
    "percentiles1": {
        "total": "5742",
        "ok": "5837",
        "ko": "5325"
    },
    "percentiles2": {
        "total": "8405",
        "ok": "8502",
        "ko": "7951"
    },
    "percentiles3": {
        "total": "11680",
        "ok": "11753",
        "ko": "11379"
    },
    "percentiles4": {
        "total": "13544",
        "ok": "13564",
        "ko": "12127"
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
    "count": 786,
    "percentage": 79
},
    "group4": {
    "name": "failed",
    "count": 214,
    "percentage": 21
},
    "meanNumberOfRequestsPerSecond": {
        "total": "62.5",
        "ok": "49.125",
        "ko": "13.375"
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
        "total": "786",
        "ok": "786",
        "ko": "0"
    },
    "minResponseTime": {
        "total": "50",
        "ok": "50",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "12219",
        "ok": "12219",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "628",
        "ok": "628",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "929",
        "ok": "929",
        "ko": "-"
    },
    "percentiles1": {
        "total": "395",
        "ok": "395",
        "ko": "-"
    },
    "percentiles2": {
        "total": "732",
        "ok": "732",
        "ko": "-"
    },
    "percentiles3": {
        "total": "1568",
        "ok": "1568",
        "ko": "-"
    },
    "percentiles4": {
        "total": "4700",
        "ok": "4700",
        "ko": "-"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 648,
    "percentage": 82
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 76,
    "percentage": 10
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 62,
    "percentage": 8
},
    "group4": {
    "name": "failed",
    "count": 0,
    "percentage": 0
},
    "meanNumberOfRequestsPerSecond": {
        "total": "49.125",
        "ok": "49.125",
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
