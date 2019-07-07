pragma solidity >=0.4.21 <0.6.0;
import "./Roles.sol";
import "./SafeMath.sol";

contract UniCert{

    using Roles for Roles.Role;
    using SafeMath for uint;
    using SafeMath for uint8;

    Roles.Role private admin;
    Roles.Role private student;
    Roles.Role private employer;
    Roles.Role private institution;

    uint public userNumber;
    uint public certificationFee;

    struct User{
        uint    id;
        address useraddress;
        string  firstname;
        string  lastname;
        string  email;
        uint  role;
        bool    active;
    }

    mapping(uint => User) public users;

    event userCreated(
        uint id,
        address useraddress,
        string firstname,
        string lastname,
        string email,
        uint role,
        bool active
    );

    event walletLoaded(
        address receivingaddress,
        uint amount
    );

    event feesUpdated(
        uint certificationFee
    );

    /* Modifer that checks if the msg.sender has an admin role */
    modifier onlyAdmin {
        require(
            admin.has(msg.sender),
            "Only the admin can call this function"
            );
        _;
    }

    modifier onlyRegisteredUser(address _useraddress) {
        require(
            student.has(msg.sender) || student.has(msg.sender),
            "Only registered users are allowed for this function"
            );
        _;
    }

    constructor() public {
        admin.add(msg.sender);

        userNumber = 0;
        certificationFee=1;
    }

    /** @dev Creates a new User 
     * @param _firstname Firstname of the user
     * @param _lastname last name of the user
     * @param _email Email address of the user 
     * @return Boolean for testing in solidity
     */
    function createUser(
        address _useraddress,
        string memory _firstname, 
        string memory _lastname, 
        string memory _email,
        uint _role
    ) 
            public 
            onlyAdmin
    {
        users[userNumber] = User(
            userNumber, 
            _useraddress, 
            _firstname, 
            _lastname,  
            _email, 
            _role, 
            true);

        userNumber = userNumber + 1;

        //Add the store owner to store owner roles
        if (_role==1) {
            student.add(_useraddress);
        }
        else if (_role==2) {
            employer.add(_useraddress);
        }

        emit userCreated(
            userNumber, 
            _useraddress,
            _firstname, 
            _lastname, 
            _email, 
            _role,  
            true
        );
    }

    /** @dev Loads user's wallet 
     * @param _receivingaddress last name of the store owner
     * @param _amount Email address of the store owner 
     * @return Boolean for testing in solidity
     */

    function loadWallet(
        address payable _receivingaddress,
        uint _amount
    ) 
        public 
        payable
        onlyAdmin
        // onlyRegisteredUser(_receivingaddress)
    {
        require(msg.sender.balance >= _amount, "Amount should be less that or equal to admin balance");
        _receivingaddress.transfer(_amount);
        emit walletLoaded(
            _receivingaddress,
            _amount
        );
    }

    /** @dev Lets admin update certification fee
     * @param _certificationFee in Eth for certification
     */
    function updateFees(uint _certificationFee)
        public
        onlyAdmin
    {
        certificationFee = _certificationFee;
        emit feesUpdated(_certificationFee);
    }

}