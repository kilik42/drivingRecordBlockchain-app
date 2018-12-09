class DrivingRecordSmartContract{
  apply(transaction, blocks){

      // go through all the blocks
      blocks.forEach(function(block){

          block.transactions.forEach(function(trans){
            if(transaction.driversLicenseNumber == trans.driversLicenseNumber){
                  transaction.noOfViolations += 1
                  if(transaction.noOfViolations > 5){
                    transaction.isDriverLicenseSuspended = true
                  }
            }
          })
      })
  }
}

module.exports = DrivingRecordSmartContract
