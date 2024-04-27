import { newMockEvent } from "matchstick-as"
import { ethereum, Address } from "@graphprotocol/graph-ts"
import { TokenCreated } from "../generated/TokenFactory/TokenFactory"

export function createTokenCreatedEvent(
  businessOwner: Address,
  token: Address
): TokenCreated {
  let tokenCreatedEvent = changetype<TokenCreated>(newMockEvent())

  tokenCreatedEvent.parameters = new Array()

  tokenCreatedEvent.parameters.push(
    new ethereum.EventParam(
      "businessOwner",
      ethereum.Value.fromAddress(businessOwner)
    )
  )
  tokenCreatedEvent.parameters.push(
    new ethereum.EventParam("token", ethereum.Value.fromAddress(token))
  )

  return tokenCreatedEvent
}
