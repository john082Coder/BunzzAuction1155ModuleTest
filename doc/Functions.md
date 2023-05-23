# WRITE(main)

## transferFrom
Transfer a particular amount of tokens from the tokens owner to an certai address if the caller have the permision to transfer it

|Name|Type|Description|Example|Default|
|--- |---|---|---|---|
|sender|address|The sender of tokens||N/A|
|recipient|address|The tokens receiver||N/A|
|amount|uint256|The amount of tokens that will be sent||N/A|

## transfer
Transfer a particular amount of tokens from caller balance to another user balance

|Name|Type|Description|Example|Default|
|--- |---|---|---|---|
|recipient|address|The tokens receiver||N/A|
|amount|uint256|The amount of tokens that will be sent||N/A|

## approve
Gives an certain address permision to move tokens for the token owner

|Name|Type|Description|
|--- |---|---|
|spender|address|The operator of the tokens balance|
|amount|uint256|The amount of the tokens the spender is approved to spend|

## mint
Mint new tokens for a user

|Name|Type|Description|
|--- |---|---|
|to|address|The tokens receiver|
|amount|uint256|The amount of tokens that will be minted|

## revokeRole
Revokes role from account

|Name|Type|Description|
|--- |---|---|
|role|bytes32|The role id|
|account|address|The account that will be rovoked from role|

## renounceRole
Renounce role from account

|Name|Type|Description|
|--- |---|---|
|role|bytes32|The role id|
|account|address|The account that will renounce the role|

## grantRole
Grants a role to account

|Name|Type|Description|
|--- |---|---|
|role|bytes32|The role id|
|account|address|The account that will be granted the role|

## pause
Pause all tokens operations

No arguments

## unpause
Unpause all tokens operations

No arguments

## increaseAllowance
Increase an certain address permision to move tokens for the token owner

|Name|Type|Description|
|--- |---|---|
|spender|address|The tokens spender|
|addedValue|uint256|The value that will be added to the spender approval|

## decreaseAllowance
Decrease an certain address permision to move tokens for the token owner

|Name|Type|Description|
|--- |---|---|
|spender|address|The spender of the tokens|
|addedValue|uint256|The amount that will be substracted from the spender permission|

## burn
Burn a number of tokens from existence

|Name|Type|Description|
|--- |---|---|
|amount|uint256|The amount of tokens to be burned|

## burnFrom
Burn a number of tokens from a user that allowed the caller to do so

|Name|Type|Description|
|--- |---|---|
|account|address|The account from where you want to burn the tokens|
|amount|uint256|The amount of tokens to be burned|

# READ(main)


## totalSupply
Returns the amount of tokens in existence

No arguments

## supportsInterface
Returns a boolean that tells us if the contract supports royalties

|Name|Type|Description|
|--- |---|---|
|interfaceId|bytes4|Id of the interface|

## balanceOf
Returns the token amount owned by an address

|Name|Type|Description|
|--- |---|---|
|account|address|The account which you want to check the balance|


## ownerOf
Returns the owner of the NFT specified by tokenId

|Name|Type|Description|
|--- |---|---|
|tokenId|uint256|The id of the token you want to check its owner of|

## name
Returns the token name

No arguments

## symbol
Returns the token symbol

No arguments

## hasRole
Returns true if account has been granted role

|Name|Type|Description|
|--- |---|---|
|role|bytes32|The role id|
|account|address|The account that will be granted the role|

## getRoleAdmin
Returns the admin role that controls roles

|Name|Type|Description|
|--- |---|---|
|role|bytes32|The role id|

## getRoleMemberCount
Returns the number of accounts that have role

|Name|Type|Description|
|--- |---|---|
|role|bytes32|The role id|

## getRoleMember
Returns one of the accounts that have a role

|Name|Type|Description|
|--- |---|---|
|role|bytes32|The role id|
|index|uint256|The index of the role member|

## MINTER_ROLE
The role for minters

No arguments

## DEFAULT_ADMIN_ROLE
The starting admin for all roles

No arguments

## paused
Returns the paused status of the contract

No arguments

## PAUSE_ROLE
The role for pausers

No arguments

## decimals
Returns the decimals of the token

No arguments

## allowance
Returns the remaining number of tokens that spender will be allowed to spend on behalf of owner through transferFrom

|Name|Type|Description|
|--- |---|---|
|owner|address|The tokens owner|
|spender|address|The tokens spender|

## maxSupply
Returns the number of max avaiable for minting.