package org.example

import io.gatling.core.Predef._
import io.gatling.http.Predef._

class GetDifferentEndpointsToFirstFail extends Simulation {

  val httpProtocol = http
    		.baseUrl("https://fast-api-mgr-pgsql.herokuapp.com")
//    .baseUrl("https://fast-api-mgr.herokuapp.com")

  var fail = 0


  var scen = exec(http("GetShipper1")
      .get("/shippers/1"))

  var exit = exitBlockOnFail {
    exec(scen)
  }

  val scn = scenario("asd")
    .exec(exit)

  setUp(scn.inject(
    rampUsers(2000).during(10))
    .protocols(httpProtocol))
}
