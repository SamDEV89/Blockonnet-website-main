import Image from "next/image";
import React, { useState } from "react";
import Link from "next/link";
import { Col, Container, Row } from "react-bootstrap";
import Modal from "../Modal";
import WalletModal from "./WalletModal";
import wallectmodal from "./WalletModal";

export default function GetInEarly() {
  const [showModal, setShowModal] = useState(false);

  return (
    <section className="early">
      <div className="container">
        <div className="early-1">
          <div className="early-left">
            <div className="inner-container">
              <h1>
                GET IN EARLY ON THE <br /> BLOCKONNECT PRE-SALE
              </h1>
              <p>
                Blockonnect is the next generation one-stop-shop for handling
                cryptocurrency transactions and is now available for purchase
                via pre sale! To make sure you dont miss out on the early access
                of $BCON, follow the steps below to make your purchase.
              </p>
              <br />
              <br />
              <span>1 USDT = 66.67 BCON</span>
              <br />
              <br />
              <span>USDT Raised : $1,072,869.985/$4,750,000</span>
              <br />
              <br />
            </div>
          </div>

          <div className="early-right">
            <div className="inner-container-right">
              <div className="right-left">
                <div className="fill-cont">
                  
                  <div className="fill"></div>
                  <div className="fill"></div>
                  <div className="fill"></div>
                </div>
              </div>
              <div className="right-right">
                <div className="red-line">
                  <div className="box-div">
                    <p className="box-text">45,142,001</p>
                    <br />
                    <p className="box-text">BCON REMAINING </p>
                    <br />
                    <p className="box-text">UNTIL 1 USDT =57.14 BCON </p>
                  </div>
                </div>
                <div className="hero-links space">
                  <a className="btn-1 " onClick={() => setShowModal(true)}>
                    CONNECT WALLET
                  </a>

                  <Modal onClose={() => setShowModal(false)} show={showModal}>
                    <div className="heeaad">
                      <div>Select A Provider</div>

                      <WalletModal />
                    </div>
                  </Modal>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* <Container className="marketplace">
          <Row>
            <Col lg={6} xs={12}>
              <h2>GET IN EARLY ON THE <br /> BLOCKONNECT PRE-SALE</h2>
              <div className="d-flex d-lg-none mb-4">
                <Image
                  src={"/images/mobile-nft.png"}
                  alt="Market Place"
                  width={328}
                  height={400}
                  objectFit="contain"
                />
              </div>
              <div className="market-content">
                <p>
                Blockonnect is the next generation one-stop-shop for handling
                cryptocurrency transactions and is now available for purchase
                via pre sale! To make sure you dont miss out on the early access
                of $BCON, follow the steps below to make your purchase.
                </p>
                <br />
              <br />
              <span>1 USDT = 66.67 BCON</span>
              <br />
              <br />
              <span>USDT Raised : $4,072,869.985/$4,750,000</span>
              <br />
              <br />
              </div>
              
            </Col>
            <Col lg={6} xs={12}>
              <div className="marketplace-image d-none d-lg-flex">
              <div className="inner-container">
                
              <div className="red-line">
                
                <div className="box-div">
                  <p className="box-text">45,142,001</p>
                  <br />
                  
                  <p className="box-text">BCON REMAINING </p>
                  <br />
                  <p className="box-text">UNTIL 1 USDT =57.14 BCON </p>
                </div>
              </div>
              <div className="hero-links space">
                <a className="btn-1 " onClick={() => setShowModal(true)}>
                  CONNECT WALLET
                </a>

                <Modal onClose={() => setShowModal(false)} show={showModal}>
                  <div className="heeaad">
                    <div>Select A Provider</div>

                    <WalletModal />
                  </div>
                </Modal>
              </div>
            </div>
               
              </div>
            </Col>
          </Row>
        </Container> */}

        <div className="early-red">
          <div className="container spaze">
            <div className="outer">
              <div className="inner">
                <p className="box-text">HOW TO BUY BLOCKONNECT</p>
              </div>
            </div>
          </div>
        </div>

        <div className="early-step1">
          <div className="container spazze">
            <h1 className="step-subhead">Step1</h1>
            <div className="txt-back">
              <p className="step-txt">
                In order to acquire $BCON tokens, you must first establish a
                cryptocurrency wallet. Metamask and Trust Wallet are two of the
                most widely used digital wallets.
              </p>
            </div>
          </div>
        </div>

        <div className="early-step1">
          <div className="container spazze">
            <h1 className="step-subhead">Step2</h1>
            <div className="txt-back">
              <p className="step-txt">
                Purchase BNB from either a major exchange and send to your
                wallet or buy from your wallet directly if able to do so.
              </p>
            </div>
          </div>
        </div>

        <div className="early-step1">
          <div className="container spazze">
            <h1 className="step-subhead">Step3</h1>
            <div className="txt-back">
              <p className="step-txt">
                Once your wallet has been loaded, click the connect wallet
                button at the top of the website and choose the wallet you've
                selected; you will be taken to a new pop-up.
              </p>
            </div>
          </div>
        </div>

        <div className="early-step1">
          <div className="container spazze">
            <h1 className="step-subhead">Step4</h1>
            <div className="txt-back">
              <p className="step-txt">
                Confirm that everything is accurate, then click the purchase
                button. Following a few seconds, your transaction should be
                processed.
              </p>
            </div>
          </div>
        </div>

        <div className="early-step1">
          <div className="container spazze">
            <h1 className="step-subhead">Step5</h1>
            <div className="txt-back">
              <p className="step-txt">
                You've just acquired $BCON! After the presale concludes, you may
                locate your tokens by clicking the "Claim" button on the main
                page.
              </p>
            </div>
          </div>
        </div>

        <div className="early-red">
          <div className="container spaze">
            <div className="outer">
              <div className="inner">
                <p className="box-text">BLOCKONNECT CONTRACT</p>
              </div>
            </div>
          </div>
        </div>

        <div className="early-contract">
          <p>
            Use the contract information below to add the BCON token to your
            wallet.
            <br />
            <br /> Address: 0x12b6893cE26Ea6341919FE289212ef77e51688c8
            <br />
            <br />
            Decimals: 18
            <br />
            <br /> Token symbol: BCON
          </p>
        </div>

        <section className="faq" id="faq">
          <Container>
            <div className="ref-area">
              <ul className="d-none d-lg-flex">
                <li>
                  <Image
                    src="/images/coingecko.png"
                    alt="coingecko"
                    width={279}
                    height={56}
                    objectFit="contain"
                  />
                </li>
                <li>
                  <Image
                    src="/images/coinmarketcap.png"
                    alt="coinmarketcap"
                    width={325}
                    height={56}
                    objectFit="contain"
                  />
                </li>
                <li>
                  <Image
                    src="/images/pancake.png"
                    alt="pancake"
                    width={363}
                    height={56}
                    objectFit="contain"
                  />
                </li>
              </ul>
              <ul className="d-flex d-lg-none">
                <li>
                  <Image
                    src="/images/coingecko-mobile.png"
                    alt="coingecko"
                    width={40}
                    height={40}
                    objectFit="contain"
                  />
                </li>
                <li>
                  <Image
                    src="/images/coinmarketcap-mobile.png"
                    alt="coinmarketcap"
                    width={40}
                    height={40}
                    objectFit="contain"
                  />
                </li>
                <li>
                  <Image
                    src="/images/pancake-mobile.png"
                    alt="pancake"
                    width={40}
                    height={40}
                    objectFit="contain"
                  />
                </li>
              </ul>
            </div>
          </Container>
        </section>
      </div>
    </section>
  );
}
