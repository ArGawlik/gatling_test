package org.example

import io.gatling.core.Predef._
import io.gatling.http.Predef._

import scala.concurrent.duration.DurationInt

class CreateAndDeleteCategoryLongTimePG extends Simulation {

  val httpProtocol = http
    .baseUrl("https://fast-api-mgr-pgsql.herokuapp.com")

  var createCategory = exec(http("Create new category")
    .post("/categories")
    .body(StringBody("""{"CategoryName":"new_category"}"""))
    .check(status.is(201))
    .check(jsonPath("$.CategoryID").saveAs("id")))

  var deleteCategory = exec(
    http("Delete category")
      .delete("/categories/${id}")
      .check(status.is(200)))

  val requestLoop = during(1.minutes) {
    exec(createCategory)
      .exec(deleteCategory)
  }

  val scn1 = scenario("Create and delete new category in loop")
    .exec(requestLoop)

  setUp(scn1.inject(atOnceUsers(600)).protocols(httpProtocol))
}
