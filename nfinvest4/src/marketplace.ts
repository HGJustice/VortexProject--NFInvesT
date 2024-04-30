import {
  ListingBought as ListingBoughtEvent,
  ListingCreated as ListingCreatedEvent,
  OwnershipTransferred as OwnershipTransferredEvent,
} from "../generated/Marketplace/Marketplace"
import {
  ListingBought,
  ListingCreated,
  OwnershipTransferred,
} from "../generated/schema"

export function handleListingBought(event: ListingBoughtEvent): void {
  let entity = new ListingBought(
    event.transaction.hash.concatI32(event.logIndex.toI32()),
  )
  entity.Marketplace_id = event.params.id
  entity.buyer = event.params.buyer
  entity.price = event.params.price
  entity.amount = event.params.amount

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleListingCreated(event: ListingCreatedEvent): void {
  let entity = new ListingCreated(
    event.transaction.hash.concatI32(event.logIndex.toI32()),
  )
  entity.Marketplace_id = event.params.id
  entity.seller = event.params.seller
  entity.tokenAddy = event.params.tokenAddy
  entity.price = event.params.price
  entity.amount = event.params.amount

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleOwnershipTransferred(
  event: OwnershipTransferredEvent,
): void {
  let entity = new OwnershipTransferred(
    event.transaction.hash.concatI32(event.logIndex.toI32()),
  )
  entity.previousOwner = event.params.previousOwner
  entity.newOwner = event.params.newOwner

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}
