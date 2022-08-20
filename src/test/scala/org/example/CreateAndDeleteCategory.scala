package org.example

import io.gatling.core.Predef._
import io.gatling.http.Predef._

class CreateAndDeleteCategory extends Simulation {

  val httpProtocol = http
    .baseUrl("https://fast-api-mgr.herokuapp.com")
//    .baseUrl("https://fast-api-mgr-pgsql.herokuapp.com")


  var createCategory = exec(http("Create new category")
    .post("/categories")
    .body(StringBody("""{"name":"new_category"}"""))
    .check(status.is(201))
    .check(jsonPath("$.id").saveAs("id")))

  var deleteCategory = exec(
    http("Delete category")
      .delete("/categories/${id}")
      .check(status.is(200)))

  val scn1 = scenario("Create and delete new category").exec(createCategory, deleteCategory)

  setUp(scn1.inject(atOnceUsers(100)).protocols(httpProtocol))
}
