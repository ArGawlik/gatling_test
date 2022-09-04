package org.example

import scala.concurrent.duration._

import io.gatling.core.Predef._
import io.gatling.http.Predef._
import io.gatling.jdbc.Predef._

class GetShipper extends Simulation {

	val httpProtocol = http
		.baseUrl("https://fast-api-mgr-pgsql.herokuapp.com")
//		.baseUrl("https://fast-api-mgr.herokuapp.com")


	val scn = scenario("RecordedSimulation")
		.exec(http("GetShipper1")
			.get("/shippers/1"))
		.exec(http("GetShipper2")
			.get("/shippers/2"))
		.exec(http("GetShipper - Error")
			.get("/shippers/423")
			.check(status.is(404)))

	setUp(scn.inject(rampUsers(2000).during(10)).protocols(httpProtocol))


	//	setUp(scn.inject(rampConcurrentUsers(100).to(1000).during(10))).protocols(httpProtocol)
}