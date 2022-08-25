import Image from "next/image";
import React, { useState } from "react";
import Link from "next/link";
import { Accordion, Container } from "react-bootstrap";
import Modal from "../Modal";
import WalletModal from "./WalletModal";
import UsdtModal from "./UsdtModal";
import BnbModal from "./BnbModal";
import CardModal from "./CardModal";

export default function PayOptions() {
  
  const [showModalb, setShowModalb] = useState(false);
  const [showModalc, setShowModalc] = useState(false);
  const [showModald, setShowModald] = useState(false);

  return (
    <section className="early">
      <div className="container">
        <div className="early-1">
          <div className="early-left">
            <div className="inner-container">
              <h1>
                BLOCKONNECT PRESALE IS NOW LIVE! <br />
                DON'T MISS OUT
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
              <span>USDT Raised : $1,072,869.98/$4,750,000</span>
              <br />
              <br />
            </div>
          </div>

          <div className="early-right">
            <div className="inner-container-right">
              <div className="right-left">
                <div className="fill-cont">
                <div className="fill fill-1"></div>
                  <div className="fill fill-2"></div>
                  <div className="fill fill-3"></div>
                  <div className="fill fill-4"></div>
                  <div className="fill fill-5"></div>
                  <div className="fill fill-6"></div>
                </div>
              </div>
              <div className="right-right">
              <div className="early-right shift">
            <div className="inner-container">
              
                <div className="after-connect-links flex-gap-y-6">
                  <div className="hhh">
                    <a
                      className="btn-1 same"
                      onClick={() => setShowModalc(true)}
                    >
                      BUY BLOCKONNECT WITH BNB
                    </a>
                  </div>
                  {/* <div className="hhh">
                    <a
                      className="btn-1 same"
                      onClick={() => setShowModald(true)}
                    >
                      BUY ETH WITH CARD
                    </a>
                  </div>
                  <div className="hhh">
                    <a
                      className="btn-1 same1"
                      onClick={() => setShowModalb(true)}
                    >
                      BUY BLOCKONNECT WITH USDT
                    </a>
                  </div> */}
                </div>
              
            </div>
          </div>
                
                
              </div>
            </div>
          </div>
          
        </div>
      </div>
      <Modal onClose={() => setShowModalb(false)} show={showModalb}>
        <div className="heeaad1">
          <div>Exchange</div>

          <UsdtModal />
        </div>
      </Modal>
      <Modal onClose={() => setShowModalc(false)} show={showModalc}>
        <div className="heeaad1">
          <div>Exchange</div>

          <BnbModal />
        </div>
      </Modal>
      <Modal onClose={() => setShowModald(false)} show={showModald}>
        <div className="heeaad1">
          <div></div>

          <CardModal />
        </div>
      </Modal>
    </section>
  );
}
