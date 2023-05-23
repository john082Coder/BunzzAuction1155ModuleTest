import { ethers } from 'ethers';

import BigNumber from 'bignumber.js';
import { useWeb3React } from "@web3-react/core";
import {
  // SUBTRACT_GAS_LIMIT,
  contractAddresses,
} from './lib/constants.js';
import { bnToDec } from './utils';
BigNumber.config({
  EXPONENTIAL_AT: 1000,
  DECIMAL_PLACES: 80,
});



export const getAuctionERC1155Contract = (bunzz) => {
  return bunzz && bunzz.contracts && bunzz.contracts.auctionERC1155;
}


export const setErc20ContractAddress = (bunzz, address) => {
  bunzz.contracts.erc20.options.address = address;
}

export const addBid = async (auctionERC1155Contract, amount, auctionID, account) => {
  return auctionERC1155Contract.methods.addBid(auctionID).send({ from: account, value:new BigNumber(amount).times(new BigNumber(10).pow(18)).toString() })
  .on('transactionHash', (tx) => {
    console.log(tx)
    return tx.transactionHash
  }); 
}

export const claim = async (auctionERC1155Contract, auctionID, account) => {
  return auctionERC1155Contract.methods.claim(auctionID).send({ from: account})
  .on('transactionHash', (tx) => {
    console.log(tx)
    return tx.transactionHash
  }); 
}

export const createAuction = async (auctionERC1155Contract, tokenId, startPrice, desiredPrice, nftAmount, startTime, endTime, account) => {
  return auctionERC1155Contract.methods.createAuction(tokenId, new BigNumber(startPrice).times(new BigNumber(10).pow(18)).toString(), new BigNumber(desiredPrice).times(new BigNumber(10).pow(18)).toString(), nftAmount, startTime, endTime).send({ from: account})
  .on('transactionHash', (tx) => {
    console.log(tx)
    return tx.transactionHash
  }); 
}




