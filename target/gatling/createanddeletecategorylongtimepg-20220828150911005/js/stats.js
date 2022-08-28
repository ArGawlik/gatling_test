var stats = {
    type: "GROUP",
name: "Global Information",
path: "",
pathFormatted: "group_missing-name-b06d1",
stats: {
    "name": "Global Information",
    "numberOfRequests": {
        "total": "3784",
        "ok": "3267",
        "ko": "517"
    },
    "minResponseTime": {
        "total": "1035",
        "ok": "1037",
        "ko": "1035"
    },
    "maxResponseTime": {
        "total": "60013",
        "ok": "20501",
        "ko": "60013"
    },
    "meanResponseTime": {
        "total": "10263",
        "ok": "10282",
        "ko": "10148"
    },
    "standardDeviation": {
        "total": "4168",
        "ok": "4066",
        "ko": "4759"
    },
    "percentiles1": {
        "total": "9820",
        "ok": "9888",
        "ko": "9541"
    },
    "percentiles2": {
        "total": "13186",
        "ok": "13181",
        "ko": "13176"
    },
    "percentiles3": {
        "total": "16484",
        "ok": "16481",
        "ko": "16390"
    },
    "percentiles4": {
        "total": "19540",
        "ok": "19525",
        "ko": "19563"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 0,
    "percentage": 0
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 8,
    "percentage": 0
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 3259,
    "percentage": 86
},
    "group4": {
    "name": "failed",
    "count": 517,
    "percentage": 14
},
    "meanNumberOfRequestsPerSecond": {
        "total": "39.417",
        "ok": "34.031",
        "ko": "5.385"
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
        "total": "2113",
        "ok": "1758",
        "ko": "355"
    },
    "minResponseTime": {
        "total": "1035",
        "ok": "1037",
        "ko": "1035"
    },
    "maxResponseTime": {
        "total": "60013",
        "ok": "20501",
        "ko": "60013"
    },
    "meanResponseTime": {
        "total": "10084",
        "ok": "10181",
        "ko": "9605"
    },
    "standardDeviation": {
        "total": "4372",
        "ok": "4225",
        "ko": "5009"
    },
    "percentiles1": {
        "total": "9627",
        "ok": "9727",
        "ko": "9051"
    },
    "percentiles2": {
        "total": "13116",
        "ok": "13204",
        "ko": "12417"
    },
    "percentiles3": {
        "total": "16666",
        "ok": "16701",
        "ko": "16168"
    },
    "percentiles4": {
        "total": "19586",
        "ok": "19639",
        "ko": "19468"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 0,
    "percentage": 0
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 8,
    "percentage": 0
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 1750,
    "percentage": 83
},
    "group4": {
    "name": "failed",
    "count": 355,
    "percentage": 17
},
    "meanNumberOfRequestsPerSecond": {
        "total": "22.01",
        "ok": "18.312",
        "ko": "3.698"
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
        "total": "1671",
        "ok": "1509",
        "ko": "162"
    },
    "minResponseTime": {
        "total": "1217",
        "ok": "1217",
        "ko": "3341"
    },
    "maxResponseTime": {
        "total": "19884",
        "ok": "19884",
        "ko": "19802"
    },
    "meanResponseTime": {
        "total": "10490",
        "ok": "10399",
        "ko": "11338"
    },
    "standardDeviation": {
        "total": "3882",
        "ok": "3869",
        "ko": "3902"
    },
    "percentiles1": {
        "total": "10230",
        "ok": "10177",
        "ko": "10798"
    },
    "percentiles2": {
        "total": "13207",
        "ok": "13168",
        "ko": "15388"
    },
    "percentiles3": {
        "total": "16310",
        "ok": "16286",
        "ko": "18879"
    },
    "percentiles4": {
        "total": "19506",
        "ok": "19429",
        "ko": "19703"
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
    "count": 1509,
    "percentage": 90
},
    "group4": {
    "name": "failed",
    "count": 162,
    "percentage": 10
},
    "meanNumberOfRequestsPerSecond": {
        "total": "17.406",
        "ok": "15.719",
        "ko": "1.688"
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
