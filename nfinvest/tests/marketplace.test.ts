import {
  assert,
  describe,
  test,
  clearStore,
  beforeAll,
  afterAll,
} from "matchstick-as";
import { BigInt, Address } from "@graphprotocol/graph-ts";
import { ListingBought } from "../generated/schema";
import { ListingBought as ListingBoughtEvent } from "../generated/Marketplace/Marketplace";
import { handleListingBought } from "../src/marketplace";
import { createListingBoughtEvent } from "./marketplace-utils";

// Tests structure (matchstick-as >=0.5.0)
// https://thegraph.com/docs/en/developer/matchstick/#tests-structure-0-5-0

describe("Describe entity assertions", () => {
  beforeAll(() => {
    let id = BigInt.fromI32(234);
    let buyer = Address.fromString(
      "0x0000000000000000000000000000000000000001"
    );
    let price = BigInt.fromI32(234);
    let amount = BigInt.fromI32(234);
    let newListingBoughtEvent = createListingBoughtEvent(
      id,
      buyer,
      price,
      amount
    );
    handleListingBought(newListingBoughtEvent);
  });

  afterAll(() => {
    clearStore();
  });

  // For more test scenarios, see:
  // https://thegraph.com/docs/en/developer/matchstick/#write-a-unit-test

  test("ListingBought created and stored", () => {
    assert.entityCount("ListingBought", 1);

    // 0xa16081f360e3847006db660bae1c6d1b2e17ec2a is the default address used in newMockEvent() function
    assert.fieldEquals(
      "ListingBought",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1",
      "buyer",
      "0x0000000000000000000000000000000000000001"
    );
    assert.fieldEquals(
      "ListingBought",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1",
      "price",
      "234"
    );
    assert.fieldEquals(
      "ListingBought",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1",
      "amount",
      "234"
    );

    // More assert options:
    // https://thegraph.com/docs/en/developer/matchstick/#asserts
  });
});
