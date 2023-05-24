# WRITE(main)

## createAuction
Create an auction in marketplace for a certain item from the collection

|Name|Type|Description|Example|Default|
|--- |---|---|---|---|
|tokenId|uint256|target token id||N/A|
|startPrice|uint256|starting price||N/A|
|desiredPrice|uint256|token out price to buy||N/A|
|nftAmount|uint256|The amount of tokens that will be sent||N/A|
|startTime|uint96|auction start time||N/A|
|endTime|uint96|auction end time||N/A|

## addBid
Add a bid to a certain auction

|Name|Type|Description|Example|Default|
|--- |---|---|---|---|
|id|uint256|target auction id||N/A|

## claim
Seller or winner call this function to claim ETH or token

|Name|Type|Description|Example|Default|
|--- |---|---|---|---|
|id|uint256|target auction id||N/A|

# READ(main)

## auctionId
Returns the current id of the auction

No arguments

## auctions
Returns auction information

|Name|Type|Description|
|--- |---|---|
|id|uint256|target auction id|

## bids
Returns the auction bids informations for a certain tokenId

|Name|Type|Description|
|--- |---|---|
|id|uint256|The bid id|


## supportsInterface
Returns the owner of the NFT specified by tokenId

|Name|Type|Description|
|--- |---|---|
|tokenId|uint256|The id of the token you want to check its owner of|

## token
Returns the token address

No arguments

