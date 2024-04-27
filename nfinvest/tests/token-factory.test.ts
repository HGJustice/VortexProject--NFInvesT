import {
  assert,
  describe,
  test,
  clearStore,
  beforeAll,
  afterAll,
} from "matchstick-as";
import { Address } from "@graphprotocol/graph-ts";
import { TokenCreated } from "../generated/schema";
import { TokenCreated as TokenCreatedEvent } from "../generated/TokenFactory/TokenFactory";
import { handleTokenCreated } from "../src/token-factory";
import { createTokenCreatedEvent } from "./token-factory-utils";

// Tests structure (matchstick-as >=0.5.0)
// https://thegraph.com/docs/en/developer/matchstick/#tests-structure-0-5-0

describe("Describe entity assertions", () => {
  beforeAll(() => {
    let businessOwner = Address.fromString(
      "0x0000000000000000000000000000000000000001"
    );
    let token = Address.fromString(
      "0x0000000000000000000000000000000000000001"
    );
    let newTokenCreatedEvent = createTokenCreatedEvent(businessOwner, token);
    handleTokenCreated(newTokenCreatedEvent);
  });

  afterAll(() => {
    clearStore();
  });

  // For more test scenarios, see:
  // https://thegraph.com/docs/en/developer/matchstick/#write-a-unit-test

  test("TokenCreated created and stored", () => {
    assert.entityCount("TokenCreated", 1);

    // 0xa16081f360e3847006db660bae1c6d1b2e17ec2a is the default address used in newMockEvent() function
    assert.fieldEquals(
      "TokenCreated",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1",
      "businessOwner",
      "0x0000000000000000000000000000000000000001"
    );
    assert.fieldEquals(
      "TokenCreated",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1",
      "token",
      "0x0000000000000000000000000000000000000001"
    );

    // More assert options:
    // https://thegraph.com/docs/en/developer/matchstick/#asserts
  });
});
