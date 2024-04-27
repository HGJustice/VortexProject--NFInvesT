import { TokenCreated as TokenCreatedEvent } from "../generated/TokenFactory/TokenFactory";
import { TokenCreated } from "../generated/schema";

export function handleTokenCreated(event: TokenCreatedEvent): void {
  let entity = new TokenCreated(
    event.transaction.hash.toHex().concat("-").concat(event.logIndex.toString())
  );
  entity.businessOwner = event.params.businessOwner;
  entity.token = event.params.token;

  entity.blockNumber = event.block.number;
  entity.blockTimestamp = event.block.timestamp;
  entity.transactionHash = event.transaction.hash;

  entity.save();
}
