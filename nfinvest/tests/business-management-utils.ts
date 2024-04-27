import { newMockEvent } from "matchstick-as"
import { ethereum, BigInt } from "@graphprotocol/graph-ts"
import { BusinessCreated } from "../generated/BusinessManagement/BusinessManagement"

export function createBusinessCreatedEvent(
  ID: BigInt,
  registrationDocuments: string,
  taxIDNumber: string,
  proofOfAddress: string,
  bankAccountNumber: BigInt,
  financialDocuments: string,
  anualReports: string,
  businessWebsite: string
): BusinessCreated {
  let businessCreatedEvent = changetype<BusinessCreated>(newMockEvent())

  businessCreatedEvent.parameters = new Array()

  businessCreatedEvent.parameters.push(
    new ethereum.EventParam("ID", ethereum.Value.fromUnsignedBigInt(ID))
  )
  businessCreatedEvent.parameters.push(
    new ethereum.EventParam(
      "registrationDocuments",
      ethereum.Value.fromString(registrationDocuments)
    )
  )
  businessCreatedEvent.parameters.push(
    new ethereum.EventParam(
      "taxIDNumber",
      ethereum.Value.fromString(taxIDNumber)
    )
  )
  businessCreatedEvent.parameters.push(
    new ethereum.EventParam(
      "proofOfAddress",
      ethereum.Value.fromString(proofOfAddress)
    )
  )
  businessCreatedEvent.parameters.push(
    new ethereum.EventParam(
      "bankAccountNumber",
      ethereum.Value.fromUnsignedBigInt(bankAccountNumber)
    )
  )
  businessCreatedEvent.parameters.push(
    new ethereum.EventParam(
      "financialDocuments",
      ethereum.Value.fromString(financialDocuments)
    )
  )
  businessCreatedEvent.parameters.push(
    new ethereum.EventParam(
      "anualReports",
      ethereum.Value.fromString(anualReports)
    )
  )
  businessCreatedEvent.parameters.push(
    new ethereum.EventParam(
      "businessWebsite",
      ethereum.Value.fromString(businessWebsite)
    )
  )

  return businessCreatedEvent
}
