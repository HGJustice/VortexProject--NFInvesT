import { newMockEvent } from "matchstick-as"
import { ethereum, BigInt, Address } from "@graphprotocol/graph-ts"
import {
  ListingBought,
  ListingCreated
} from "../generated/Marketplace/Marketplace"

export function createListingBoughtEvent(
  id: BigInt,
  buyer: Address,
  price: BigInt,
  amount: BigInt
): ListingBought {
  let listingBoughtEvent = changetype<ListingBought>(newMockEvent())

  listingBoughtEvent.parameters = new Array()

  listingBoughtEvent.parameters.push(
    new ethereum.EventParam("id", ethereum.Value.fromUnsignedBigInt(id))
  )
  listingBoughtEvent.parameters.push(
    new ethereum.EventParam("buyer", ethereum.Value.fromAddress(buyer))
  )
  listingBoughtEvent.parameters.push(
    new ethereum.EventParam("price", ethereum.Value.fromUnsignedBigInt(price))
  )
  listingBoughtEvent.parameters.push(
    new ethereum.EventParam("amount", ethereum.Value.fromUnsignedBigInt(amount))
  )

  return listingBoughtEvent
}

export function createListingCreatedEvent(
  id: BigInt,
  seller: Address,
  tokenAddy: Address,
  price: BigInt,
  amount: BigInt
): ListingCreated {
  let listingCreatedEvent = changetype<ListingCreated>(newMockEvent())

  listingCreatedEvent.parameters = new Array()

  listingCreatedEvent.parameters.push(
    new ethereum.EventParam("id", ethereum.Value.fromUnsignedBigInt(id))
  )
  listingCreatedEvent.parameters.push(
    new ethereum.EventParam("seller", ethereum.Value.fromAddress(seller))
  )
  listingCreatedEvent.parameters.push(
    new ethereum.EventParam("tokenAddy", ethereum.Value.fromAddress(tokenAddy))
  )
  listingCreatedEvent.parameters.push(
    new ethereum.EventParam("price", ethereum.Value.fromUnsignedBigInt(price))
  )
  listingCreatedEvent.parameters.push(
    new ethereum.EventParam("amount", ethereum.Value.fromUnsignedBigInt(amount))
  )

  return listingCreatedEvent
}
