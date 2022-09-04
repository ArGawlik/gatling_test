package org.example

import io.gatling.core.Predef._
import io.gatling.http.Predef._

import scala.concurrent.duration.DurationInt
import scala.util.Random

class GetProductOrdersLongTime extends Simulation {

  val httpProtocol = http
    .baseUrl("https://fast-api-mgr.herokuapp.com")
//    .baseUrl("https://fast-api-mgr-pgsql.herokuapp.com")


  var scen = exec(http("GetProductsExtended")
      .get("/products_extended"))
    .exec(http("GetRandomProductsOrders")
      .get(s"/products/${Random.between(1,77)}/orders"))
    .exec(http("GetRandomProductsOrders2")
      .get(s"/products/${Random.between(1,77)}/orders"))
    .exec(http("GetRandomProductsOrders - Error")
      .get("/products/1234/orders")
      .check(status.is(404)))
    .exec(http("GetRandomProductsOrders3")
      .get(s"/products/${Random.between(1, 77)}/orders"))

  var loop = during(15.minutes) {
    exec(scen)
  }

  val scn = scenario("GetOrdersByProductId")
    .exec(loop)

  setUp(scn.inject(
    atOnceUsers(1000)).protocols(httpProtocol))
}
