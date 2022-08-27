var stats = {
    type: "GROUP",
name: "Global Information",
path: "",
pathFormatted: "group_missing-name-b06d1",
stats: {
    "name": "Global Information",
    "numberOfRequests": {
        "total": "1665",
        "ok": "1330",
        "ko": "335"
    },
    "minResponseTime": {
        "total": "46",
        "ok": "46",
        "ko": "10168"
    },
    "maxResponseTime": {
        "total": "22891",
        "ok": "22891",
        "ko": "15421"
    },
    "meanResponseTime": {
        "total": "5822",
        "ok": "4487",
        "ko": "11125"
    },
    "standardDeviation": {
        "total": "4801",
        "ok": "4429",
        "ko": "1217"
    },
    "percentiles1": {
        "total": "5262",
        "ok": "3097",
        "ko": "10321"
    },
    "percentiles2": {
        "total": "10254",
        "ok": "8662",
        "ko": "12560"
    },
    "percentiles3": {
        "total": "12916",
        "ok": "11516",
        "ko": "13151"
    },
    "percentiles4": {
        "total": "13867",
        "ok": "15068",
        "ko": "13831"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 473,
    "percentage": 28
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 30,
    "percentage": 2
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 827,
    "percentage": 50
},
    "group4": {
    "name": "failed",
    "count": 335,
    "percentage": 20
},
    "meanNumberOfRequestsPerSecond": {
        "total": "69.375",
        "ok": "55.417",
        "ko": "13.958"
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
        "ok": "665",
        "ko": "335"
    },
    "minResponseTime": {
        "total": "2008",
        "ok": "2008",
        "ko": "10168"
    },
    "maxResponseTime": {
        "total": "22891",
        "ok": "22891",
        "ko": "15421"
    },
    "meanResponseTime": {
        "total": "9082",
        "ok": "8053",
        "ko": "11125"
    },
    "standardDeviation": {
        "total": "3177",
        "ok": "3357",
        "ko": "1217"
    },
    "percentiles1": {
        "total": "10110",
        "ok": "8618",
        "ko": "10321"
    },
    "percentiles2": {
        "total": "10382",
        "ok": "10097",
        "ko": "12560"
    },
    "percentiles3": {
        "total": "13131",
        "ok": "12745",
        "ko": "13151"
    },
    "percentiles4": {
        "total": "15905",
        "ok": "19406",
        "ko": "13831"
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
    "count": 665,
    "percentage": 67
},
    "group4": {
    "name": "failed",
    "count": 335,
    "percentage": 34
},
    "meanNumberOfRequestsPerSecond": {
        "total": "41.667",
        "ok": "27.708",
        "ko": "13.958"
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
        "total": "665",
        "ok": "665",
        "ko": "0"
    },
    "minResponseTime": {
        "total": "46",
        "ok": "46",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "14766",
        "ok": "14766",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "921",
        "ok": "921",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "1593",
        "ok": "1593",
        "ko": "-"
    },
    "percentiles1": {
        "total": "246",
        "ok": "246",
        "ko": "-"
    },
    "percentiles2": {
        "total": "1165",
        "ok": "1165",
        "ko": "-"
    },
    "percentiles3": {
        "total": "3622",
        "ok": "3622",
        "ko": "-"
    },
    "percentiles4": {
        "total": "9193",
        "ok": "9193",
        "ko": "-"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 473,
    "percentage": 71
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 30,
    "percentage": 5
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 162,
    "percentage": 24
},
    "group4": {
    "name": "failed",
    "count": 0,
    "percentage": 0
},
    "meanNumberOfRequestsPerSecond": {
        "total": "27.708",
        "ok": "27.708",
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
