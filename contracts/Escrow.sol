// SPDX-License-Identifier: MIT
pragma solidity 0.8.17;

contract Escrow {
    address public depositor;
    address public beneficiary;
    address public arbiter;
    bool public isApproved;
    event Approved(uint balance);

    constructor(address _arbiter, address _beneficiary) payable
    {
        arbiter = _arbiter;
        beneficiary = _beneficiary;
        depositor = msg.sender;
    }

    function approve() external {
        require(msg.sender == arbiter, "Only an arbiter can approve");
        uint balance  = address(this).balance;
        (bool success, ) = beneficiary.call{value: balance}("");
        require(success, "Not sent");
        isApproved = true;
        emit Approved(balance);
    }
}
