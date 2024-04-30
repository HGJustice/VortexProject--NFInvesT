import { TokenCreated as TokenCreatedEvent } from "../generated/TokenFactory/TokenFactory"
import { TokenCreated } from "../generated/schema"

export function handleTokenCreated(event: TokenCreatedEvent): void {
  let entity = new TokenCreated(
    event.transaction.hash.concatI32(event.logIndex.toI32()),
  )
  entity.businessOwner = event.params.businessOwner
  entity.token = event.params.token
  entity.businessName = event.params.businessName
  entity.name = event.params.name
  entity.symbol = event.params.symbol

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}
