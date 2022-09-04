package org.example

import io.gatling.core.Predef._
import io.gatling.core.structure.ChainBuilder
import io.gatling.http.Predef._

class PeekTest extends Simulation {
  val httpProtocol = http
    .baseUrl("https://fast-api-mgr.herokuapp.com")
  //    .baseUrl("https://fast-api-mgr-pgsql.herokuapp.com")
  var x = 0

  def fixUsersNumber(duration: Int) : ChainBuilder =
  { during(duration) {
    exec(http("GetProduct")
      .get("/products")
      .check(status.in(200, 404)))
  }}

  val peek = scenario("qwe")
//    .exec(fixUsersNumber(5))
    .exec(http("GetProduct1")
      .get("/products")
      .check(status.in(200, 404)))
    .exitHereIfFailed
//    .exec(fixUsersNumber(60))

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
