import {
  assert,
  describe,
  test,
  clearStore,
  beforeAll,
  afterAll,
} from "matchstick-as";
import { BigInt } from "@graphprotocol/graph-ts";
import { BusinessCreated } from "../generated/schema";
import { BusinessCreated as BusinessCreatedEvent } from "../generated/BusinessManagement/BusinessManagement";
import { handleBusinessCreated } from "../src/business-management";
import { createBusinessCreatedEvent } from "./business-management-utils";

// Tests structure (matchstick-as >=0.5.0)
// https://thegraph.com/docs/en/developer/matchstick/#tests-structure-0-5-0

describe("Describe entity assertions", () => {
  beforeAll(() => {
    let ID = BigInt.fromI32(234);
    let registrationDocuments = "Example string value";
    let taxIDNumber = "Example string value";
    let proofOfAddress = "Example string value";
    let bankAccountNumber = BigInt.fromI32(234);
    let financialDocuments = "Example string value";
    let anualReports = "Example string value";
    let businessWebsite = "Example string value";
    let newBusinessCreatedEvent = createBusinessCreatedEvent(
      ID,
      registrationDocuments,
      taxIDNumber,
      proofOfAddress,
      bankAccountNumber,
      financialDocuments,
      anualReports,
      businessWebsite
    );
    handleBusinessCreated(newBusinessCreatedEvent);
  });

  afterAll(() => {
    clearStore();
  });

  // For more test scenarios, see:
  // https://thegraph.com/docs/en/developer/matchstick/#write-a-unit-test

  test("BusinessCreated created and stored", () => {
    assert.entityCount("BusinessCreated", 1);

    // 0xa16081f360e3847006db660bae1c6d1b2e17ec2a is the default address used in newMockEvent() function
    assert.fieldEquals(
      "BusinessCreated",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1",
      "ID",
      "234"
    );
    assert.fieldEquals(
      "BusinessCreated",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1",
      "registrationDocuments",
      "Example string value"
    );
    assert.fieldEquals(
      "BusinessCreated",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1",
      "taxIDNumber",
      "Example string value"
    );
    assert.fieldEquals(
      "BusinessCreated",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1",
      "proofOfAddress",
      "Example string value"
    );
    assert.fieldEquals(
      "BusinessCreated",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1",
      "bankAccountNumber",
      "234"
    );
    assert.fieldEquals(
      "BusinessCreated",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1",
      "financialDocuments",
      "Example string value"
    );
    assert.fieldEquals(
      "BusinessCreated",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1",
      "anualReports",
      "Example string value"
    );
    assert.fieldEquals(
      "BusinessCreated",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1",
      "businessWebsite",
      "Example string value"
    );

    // More assert options:
    // https://thegraph.com/docs/en/developer/matchstick/#asserts
  });
});
