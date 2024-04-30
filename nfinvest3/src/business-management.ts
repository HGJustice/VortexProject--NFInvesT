import { BusinessCreated as BusinessCreatedEvent } from "../generated/BusinessManagement/BusinessManagement"
import { BusinessCreated } from "../generated/schema"

export function handleBusinessCreated(event: BusinessCreatedEvent): void {
  let entity = new BusinessCreated(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.ID = event.params.ID
  entity.registrationDocuments = event.params.registrationDocuments
  entity.taxIDNumber = event.params.taxIDNumber
  entity.proofOfAddress = event.params.proofOfAddress
  entity.bankAccountNumber = event.params.bankAccountNumber
  entity.financialDocuments = event.params.financialDocuments
  entity.anualReports = event.params.anualReports
  entity.businessWebsite = event.params.businessWebsite

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}
