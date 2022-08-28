package org.example

import io.gatling.core.Predef._
import io.gatling.http.Predef._

import scala.concurrent.duration.DurationInt

class GetDifferentEndpointsLongTime extends Simulation {

  val httpProtocol = http
    .baseUrl("https://fast-api-mgr.herokuapp.com")


  val requestLoop = during(15.minutes) {
    exec(http("GetShipper1")
      .get("/shippers/1"))
      .exec(http("GetProduct2")
        .get("/products/2"))
      .exec(http("GetShipper - Error")
        .get("/shippers/423")
        .check(status.is(404)))
      .exec(http("GetSupplier1")
        .get("/suppliers/1"))
  }

  val scn = scenario("RequestsInLoop")
    .exec(requestLoop)

  setUp(scn.inject(
    atOnceUsers(1000))
    .protocols(httpProtocol))
}
