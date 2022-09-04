package org.example

import scala.concurrent.duration._

import io.gatling.core.Predef._
import io.gatling.http.Predef._
import io.gatling.jdbc.Predef._

class SimulationPG extends Simulation{
  val httpProtocol = http
//    .baseUrl("https://fast-api-mgr.herokuapp.com")
    .baseUrl("https://fast-api-mgr-pgsql.herokuapp.com")

  val scn = scenario("RecordedSimulation")
    .exec(http("GetProduct1")
      .get("/products/123")
    .check(status.in(200, 404)))

  val scn2 = scenario("ASDASD")
    .exec(http("GetProduct2")
      .get("/products/2"))

//  setUp(scn.inject(rampConcurrentUsers(100).to(1000).during(5))).protocols(httpProtocol)
  setUp(scn.inject(
    nothingFor(4), // 1
    atOnceUsers(10), // 2
    rampUsers(10).during(5), // 3
    constantUsersPerSec(20).during(15), // 4
    constantUsersPerSec(20).during(15).randomized, // 5
    heavisideUsers(1000).during(3) // 8
  )).protocols(httpProtocol)
}
