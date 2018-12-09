
class Transaction {

    constructor(driverLicenseNumber, violationDate,violationType){
      this.driverLicenseNumber = driverLicenseNumber
      this.violationdDate = violationdDate
      this.violationType = violationType
      this.noOfViolations = 1
      this.isDriverLicenseSuspended = false

    }


}

module.exports = Transaction
