// Import Tinytest from the tinytest Meteor package.
import { Tinytest } from "meteor/tinytest";

// Import and rename a variable exported by panter-kubernetes-leader.js.
import { name as packageName } from "meteor/panter-kubernetes-leader";

// Write your tests here!
// Here is an example.
Tinytest.add('panter-kubernetes-leader - example', function (test) {
  test.equal(packageName, "panter-kubernetes-leader");
});
