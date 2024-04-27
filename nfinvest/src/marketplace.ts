import {
  ListingBought as ListingBoughtEvent,
  ListingCreated as ListingCreatedEvent,
} from "../generated/Marketplace/Marketplace";
import { ListingBought, ListingCreated } from "../generated/schema";

export function handleListingBought(event: ListingBoughtEvent): void {
  let entity = new ListingBought(
    event.transaction.hash.toHex().concat("-").concat(event.logIndex.toString())
  );
  entity.Marketplace_id = event.params.id;
  entity.buyer = event.params.buyer;
  entity.price = event.params.price;
  entity.amount = event.params.amount;

  entity.blockNumber = event.block.number;
  entity.blockTimestamp = event.block.timestamp;
  entity.transactionHash = event.transaction.hash;

  entity.save();
}

export function handleListingCreated(event: ListingCreatedEvent): void {
  let entity = new ListingCreated(
    event.transaction.hash.toHex().concat("-").concat(event.logIndex.toString())
  );
  entity.Marketplace_id = event.params.id;
  entity.seller = event.params.seller;
  entity.tokenAddy = event.params.tokenAddy;
  entity.price = event.params.price;
  entity.amount = event.params.amount;

  entity.blockNumber = event.block.number;
  entity.blockTimestamp = event.block.timestamp;
  entity.transactionHash = event.transaction.hash;

  entity.save();
}
