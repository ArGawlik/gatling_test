var stats = {
    type: "GROUP",
name: "Global Information",
path: "",
pathFormatted: "group_missing-name-b06d1",
stats: {
    "name": "Global Information",
    "numberOfRequests": {
        "total": "1083",
        "ok": "966",
        "ko": "117"
    },
    "minResponseTime": {
        "total": "49",
        "ok": "49",
        "ko": "825"
    },
    "maxResponseTime": {
        "total": "7470",
        "ok": "7470",
        "ko": "7461"
    },
    "meanResponseTime": {
        "total": "1753",
        "ok": "1595",
        "ko": "3062"
    },
    "standardDeviation": {
        "total": "1774",
        "ok": "1723",
        "ko": "1643"
    },
    "percentiles1": {
        "total": "1200",
        "ok": "925",
        "ko": "2577"
    },
    "percentiles2": {
        "total": "2891",
        "ok": "2755",
        "ko": "3740"
    },
    "percentiles3": {
        "total": "4593",
        "ok": "4552",
        "ko": "7375"
    },
    "percentiles4": {
        "total": "7415",
        "ok": "7412",
        "ko": "7436"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 474,
    "percentage": 44
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 57,
    "percentage": 5
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 435,
    "percentage": 40
},
    "group4": {
    "name": "failed",
    "count": 117,
    "percentage": 11
},
    "meanNumberOfRequestsPerSecond": {
        "total": "135.375",
        "ok": "120.75",
        "ko": "14.625"
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
        "ok": "483",
        "ko": "117"
    },
    "minResponseTime": {
        "total": "825",
        "ok": "901",
        "ko": "825"
    },
    "maxResponseTime": {
        "total": "7470",
        "ok": "7470",
        "ko": "7461"
    },
    "meanResponseTime": {
        "total": "2972",
        "ok": "2951",
        "ko": "3062"
    },
    "standardDeviation": {
        "total": "1522",
        "ok": "1490",
        "ko": "1643"
    },
    "percentiles1": {
        "total": "2723",
        "ok": "2757",
        "ko": "2577"
    },
    "percentiles2": {
        "total": "3731",
        "ok": "3720",
        "ko": "3740"
    },
    "percentiles3": {
        "total": "7314",
        "ok": "6384",
        "ko": "7375"
    },
    "percentiles4": {
        "total": "7426",
        "ok": "7425",
        "ko": "7436"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 0,
    "percentage": 0
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 50,
    "percentage": 8
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 433,
    "percentage": 72
},
    "group4": {
    "name": "failed",
    "count": 117,
    "percentage": 20
},
    "meanNumberOfRequestsPerSecond": {
        "total": "75",
        "ok": "60.375",
        "ko": "14.625"
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
        "total": "483",
        "ok": "483",
        "ko": "0"
    },
    "minResponseTime": {
        "total": "49",
        "ok": "49",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "1501",
        "ok": "1501",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "239",
        "ok": "239",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "195",
        "ok": "195",
        "ko": "-"
    },
    "percentiles1": {
        "total": "199",
        "ok": "199",
        "ko": "-"
    },
    "percentiles2": {
        "total": "290",
        "ok": "290",
        "ko": "-"
    },
    "percentiles3": {
        "total": "633",
        "ok": "633",
        "ko": "-"
    },
    "percentiles4": {
        "total": "866",
        "ok": "866",
        "ko": "-"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 474,
    "percentage": 98
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 7,
    "percentage": 1
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
        "total": "60.375",
        "ok": "60.375",
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
