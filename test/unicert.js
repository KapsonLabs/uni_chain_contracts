const UniCert = artifacts.require("./UniCert.sol");
// const assertRevert = require('./utils/assertRevert').assertRevert;

contract('UniCert', function(accounts) {

    let uniCertInstance;
  
    beforeEach(async () => {
        uniCertInstance = await UniCert.new()
    })

    it("Should allow an admin to create a user", async () => {

        let tx = await uniCertInstance.createUser(accounts[1], "Allan",
                                    "Katongole","kapsonkatongole@gmail.com",1,
                                    {from: accounts[0]});
    
        assert.strictEqual(tx.receipt.logs.length, 1, "createUser() call did not log 1 event");
        assert.strictEqual(tx.logs.length, 1, "createUser() call did not log 1 event");
        const userCreated = tx.logs[0];
        assert.strictEqual(userCreated.event, "userCreated", "createUser() call did not log event userCreated");
        assert.strictEqual(userCreated.args.useraddress,accounts[1], "userCreated event logged did not have expected user address");
        assert.strictEqual(userCreated.args.firstname,"Allan", "userCreated event logged did not have expected firstname");
        assert.strictEqual(userCreated.args.lastname,"Katongole", "userCreated event logged did not have expected lastname");
        assert.strictEqual(userCreated.args.email,"kapsonkatongole@gmail.com", "userCreated event logged did not have expected email");
    
    });

    // it("Should allow an admin to load a user's wallet", async () => {

    //     let tx1 = await uniCertInstance.createUser(accounts[1], "Allan",
    //                                 "Katongole","kapsonkatongole@gmail.com",1,
    //                                 {from: accounts[0]});

    //     const userCreated = tx1.logs[0];

    //     let tx = await uniCertInstance.loadWallet(userCreated.args.useraddress, 10,
    //                                 {from: accounts[0]});
    
    //     assert.strictEqual(tx.receipt.logs.length, 1, "loadWallet() call did not log 1 event");
    //     assert.strictEqual(tx.logs.length, 1, "loadWallet() call did not log 1 event");
    //     const walletLoaded = tx.logs[0];
    //     assert.strictEqual(walletLoaded.event, "walletLoaded", "loadWallet() call did not log event userCreated");
    //     assert.strictEqual(walletLoaded.args.receivingaddress, accounts[1], "walletLoaded event logged did not have expected user address");
    //     assert.strictEqual(walletLoaded.args.amount.toNumber(), 10, "walletLoaded event logged did not have expected firstname");
    
    // });

    it("Should allow an admin to update certification fees", async () => {

        let tx = await uniCertInstance.updateFees(2,
                                    {from: accounts[0]});
    
        assert.strictEqual(tx.receipt.logs.length, 1, "updateFees() call did not log 1 event");
        assert.strictEqual(tx.logs.length, 1, "updateFees() call did not log 1 event");
        const feesUpdated = tx.logs[0];
        assert.strictEqual(feesUpdated.event, "feesUpdated", "updateFees() call did not log event feesUpdated");
        assert.strictEqual(feesUpdated.args.certificationFee.toNumber(),2, "feesUpdated event logged did not have expected certification fee");
    });

});