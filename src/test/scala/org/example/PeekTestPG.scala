package org.example

import io.gatling.core.Predef._
import io.gatling.core.structure.ChainBuilder
import io.gatling.http.Predef._

class PeekTestPG extends Simulation {
  val httpProtocol = http
      .baseUrl("https://fast-api-mgr-pgsql.herokuapp.com")

  val peek = scenario("peakTest")
    .exec(http("GetProduct1")
      .get("/products")
      .check(status.in(200, 404)))
    .exitHereIfFailed

  setUp(
    peek.inject(nothingFor(5),
      heavisideUsers(1000).during(1),
      nothingFor(30),
      heavisideUsers(2000).during(1),
      nothingFor(30),
      heavisideUsers(3000).during(1),
      nothingFor(30),
      heavisideUsers(4000).during(1)
    )
  ).protocols(httpProtocol)
}
