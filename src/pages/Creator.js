import { Button, Col, Container, Row, Form, Spinner } from "react-bootstrap";
import React, { useState, useEffect  } from "react";

import useBunzz from '../hooks/useBunzz';

import { getAuctionERC1155Contract, claim, addBid, createAuction  } from '../contracts/utils'
import { useWeb3React } from "@web3-react/core";

import { bnToDec, isAddress } from "../utils";
const Creator = () => {
    const bunzz = useBunzz();
    const { account} = useWeb3React();
    const auctionERC1155Contract = getAuctionERC1155Contract(bunzz);
    const [tokenId, setTokenId] = useState(0);
    const [startPrice, setStartPrice] = useState(0);
    const [desiredPrice, setDesiredPrice] = useState(0);
    const [nftAmount, setNFTAmount] = useState(0);
    const [startTime, setStartTime] = useState(0);
    const [endTime, setEndTime] = useState(0);

    const[bidAmount, setBidAmount] = useState(0);
    const[auctionID, setAuctionID] = useState(0);

    const[claimAuctionId, setClaimAuctionId] = useState(0);

    const [pendingCreateAuction, setPendingCreateAuction] = useState(false);
    const [pendingClaim, setPendingClaim] = useState(false);
    const [pendingAddBid, setPendingAddBid] = useState(false);

  
    return (
        <Container>
            <Row className="justify-content-center mt-5">
                <Col lg="4" md="4" xs="12">
                    <Form>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Input TokenID</Form.Label>
                            <Form.Control type="email" placeholder="Enter ID" value={tokenId} onChange={(val) => setTokenId(val.target.value)} />
                            <Form.Label>Input Start Price</Form.Label>
                            <Form.Control type="email" placeholder="Enter Amount" value={startPrice} onChange={(val) => setStartPrice(val.target.value)} />  
                            <Form.Label>Input Desired Price</Form.Label>
                            <Form.Control type="email" placeholder="Enter Amount" value={desiredPrice} onChange={(val) => setDesiredPrice(val.target.value)} />
                            <Form.Label>Input NFT Amount</Form.Label>
                            <Form.Control type="email" placeholder="Enter Amount" value={nftAmount} onChange={(val) => setNFTAmount(val.target.value)} />
                            <Form.Label>Input Start Time</Form.Label>
                            <Form.Control type="email" placeholder="Enter time" value={startTime} onChange={(val) => setStartTime(val.target.value)} />
                            <Form.Label>Input End Time</Form.Label>
                            <Form.Control type="email" placeholder="Enter time" value={endTime} onChange={(val) => setEndTime(val.target.value)} />  

                        </Form.Group>
                            {!pendingCreateAuction ?
                                <Button className="mx-3 mt-2" variant="dark" onClick={async () => {
                                    setPendingCreateAuction(true);
                                try {
                                    let txHash;
                                    txHash = await createAuction(
                                        auctionERC1155Contract,
                                        tokenId,
                                        startPrice,
                                        desiredPrice,
                                        nftAmount,
                                        startTime,
                                        endTime,
                                        account,
                                    );
                                    console.log(txHash);
                                    setPendingCreateAuction(false);
                                } catch (e) {
                                    console.log(e);
                                    setPendingCreateAuction(false);
                                }
                            }}>
                                Create Auction
                            </Button>
                            :
                            <Button className="mx-3 mt-2" variant="dark">
                                 <Spinner
                                    as="span"
                                    animation="border"
                                    size="sm"
                                    role="status"
                                    aria-hidden="true"
                                    />{` `} Create Auction
                            </Button>
                        }
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Input BidAmount</Form.Label>
                            <Form.Control type="email" placeholder="Enter Amount" value={bidAmount} onChange={(val) => setBidAmount(val.target.value)} />
                            <Form.Label>Input AuctionId</Form.Label>
                            <Form.Control type="email" placeholder="Enter ID" value={auctionID} onChange={(val) => setAuctionID(val.target.value)} />  
                          
                        </Form.Group>
                        {!pendingAddBid ?
                                <Button className="mx-3 mt-2" variant="dark" onClick={async () => {
                                    setPendingAddBid(true);
                                try {
                                    let txHash;
                                    
                                    txHash = await addBid(
                                        auctionERC1155Contract,
                                        bidAmount,
                                        auctionID,
                                        account,
                                    );
                                
                                    console.log(txHash);
                                    setPendingAddBid(false);
                                    
                                } catch (e) {
                                    console.log(e);
                                    setPendingAddBid(false);
                                    
                                }
                            }}>
                                Add Bid
                            </Button>
                            :
                            <Button className="mx-3 mt-2" variant="dark">
                                 <Spinner
                                    as="span"
                                    animation="border"
                                    size="sm"
                                    role="status"
                                    aria-hidden="true"
                                    />{` `} Add Bid
                            </Button>
                        }
                         <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Input AuctionId</Form.Label>
                            <Form.Control type="email" placeholder="Enter ID" value={claimAuctionId} onChange={(val) => setClaimAuctionId(val.target.value)} />
                        </Form.Group>
                        {!pendingClaim ?
                                <Button className="mx-3 mt-2" variant="dark" onClick={async () => {
                                    setPendingClaim(true);
                                try {
                                    let txHash;
                                    
                                    txHash = await claim(
                                        auctionERC1155Contract,
                                        claimAuctionId,
                                        account,
                                    );
                                
                                    console.log(txHash);
                                    setPendingClaim(false);
                                    
                                } catch (e) {
                                    console.log(e);
                                    setPendingClaim(false);
                                    
                                }
                            }}>
                                Claim
                            </Button>
                            :
                            <Button className="mx-3 mt-2" variant="dark">
                                 <Spinner
                                    as="span"
                                    animation="border"
                                    size="sm"
                                    role="status"
                                    aria-hidden="true"
                                    />{` `} Claim
                            </Button>
                        }
                    </Form>
                   

                        
                </Col>
            </Row>
        </Container>
    )
}

export default Creator;