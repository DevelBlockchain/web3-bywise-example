import Head from 'next/head'
import styles from '../styles/Home.module.css'
import { useState } from 'react';
import BywiseProvider from '@bywise/provider';
import { BywiseHelper, TxType } from '@bywise/web3';
import { useRouter } from 'next/router';

const chain = 'mainnet'
const provider = new BywiseProvider(chain);

export default function Home() {
  const router = useRouter();
  const [connected, setConnect] = useState(false);
  const [address, setAddress] = useState('');
  const [balance, setBalance] = useState('0');
  const [name, setName] = useState(null);


  const connect = async () => {
    const userInfo = await provider.connect();

    if (userInfo) {
      console.log('userInfo', userInfo)
      setAddress(provider.address)

      const infoBlockchainUser = await provider.web3.wallets.getWalletInfo(provider.address, chain);
      console.log('infoBlockchainUser', infoBlockchainUser)
      if (infoBlockchainUser) {
        setBalance(infoBlockchainUser.balance)
        setName(infoBlockchainUser.name)
      }
      setConnect(true);
    }
  }

  const trySendTransaction = async () => {
    const result = await provider.send({
      to: [BywiseHelper.ZERO_ADDRESS],
      amount: ['0'],
      type: TxType.TX_JSON,
      data: {
        myData: `huehuehue`
      }
    });
    if (result) {
      console.log('result', result)
      alert(`success - txId: ${result.tx.hash}`);
    } else {
      alert(`canceled transaction`);
    }
  }

  return (
    <div className={styles.container}>
      <Head>
        <title>Web3 Example</title>
        <meta name="description" content="Bywise web3 provider example" />
        <link rel="icon" href={`${router.basePath}/favicon.ico`} />
      </Head>

      <main className={styles.main}>
        <img className={styles.bywise_logo} src={`${router.basePath}/favicon.ico`} alt='Blockchain Bywise Logo' />
        <h1 className={styles.title}>
          Welcome to <a target="_blank" href="https://bywise.org" rel="noopener noreferrer">Bywise</a>
        </h1>

        <p className={styles.description}>
          Get started by editing{' '}
          <code className={styles.code}>pages/index.js</code>
        </p>

        {connected && <>
          <p className={styles.description}>
            <span>
              {'Connected User'}
            </span>
            <br />
            <span>
              {'Address: '}
              <code className={styles.code}>{address}</code>
            </span>
            <br />
            <span>
              {'Balance: '}
              <code className={styles.code}>
                {balance}
                {' BWS'}
              </code>
            </span>
            <br />
            {name && <span>
              {'Name: '}
              <code className={styles.code}>{name}</code>
            </span>}
          </p>
        </>}

        <div className={styles.grid} >
          {connected && <>
            <button className={styles.card} onClick={trySendTransaction}>
              <h2>Send Transaction 🔥</h2>
            </button>
          </>}

          {!connected && <button className={styles.card} onClick={connect}>
            <h2>Connect Wallet 🚀</h2>
          </button>}
        </div>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://develblockchain.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <span className={styles.logo}>
            <img src={`${router.basePath}/devel.svg`} alt='Devel Blockchain Logo' height={40} />
          </span>
        </a>
      </footer>
    </div>
  )
}
