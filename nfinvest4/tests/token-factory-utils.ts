import { newMockEvent } from "matchstick-as"
import { ethereum, Address } from "@graphprotocol/graph-ts"
import { TokenCreated } from "../generated/TokenFactory/TokenFactory"

export function createTokenCreatedEvent(
  businessOwner: Address,
  token: Address,
  businessName: string,
  name: string,
  symbol: string
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
  tokenCreatedEvent.parameters.push(
    new ethereum.EventParam(
      "businessName",
      ethereum.Value.fromString(businessName)
    )
  )
  tokenCreatedEvent.parameters.push(
    new ethereum.EventParam("name", ethereum.Value.fromString(name))
  )
  tokenCreatedEvent.parameters.push(
    new ethereum.EventParam("symbol", ethereum.Value.fromString(symbol))
  )

  return tokenCreatedEvent
}
