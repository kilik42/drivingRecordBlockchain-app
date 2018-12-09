
class Transaction {

    constructor(driverLicenseNumber, violationdDate,violationType){
      this.driverLicenseNumber = driverLicenseNumber
      this.violationdDate = violationdDate
      this.violationType = violationType
      this.noOfViolation = 1
      this.isDriverLicenseSuspended = false
      
    }


}

module.exports = Transaction
