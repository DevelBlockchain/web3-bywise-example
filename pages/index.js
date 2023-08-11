import Head from 'next/head'
import styles from '../styles/Home.module.css'
import { useState } from 'react';
import BywiseProvider from '@bywise/provider';
import { TxType } from '@bywise/web3';
import { useRouter } from 'next/router';

const chain = 'mainnet'
const provider = new BywiseProvider(chain);
const contractAddress = 'BWS1MC637abce1D5263e36FbBa6bCe77a01e764B4A65e1e68'; // your contract address

export default function Home() {
  const router = useRouter();
  const [connected, setConnect] = useState(false);
  const [value, setValue] = useState('');

  const connect = async () => {
    const userInfo = await provider.connect();

    if (userInfo) {
      setConnect(true);

      updateValue(); // call update value
    }
  }

  const updateValue = async () => {
    const fullOutput = await provider.web3.contracts.readContract(chain, contractAddress, 'getValue', []);
    if (fullOutput.error) {
      alert(`error ${fullOutput.error}`);
    } else {
      const contractReturnValue = fullOutput.output;
      setValue(contractReturnValue);
    }
  }

  const setValueButton = async () => {
    const result = await provider.send({
      to: [contractAddress],
      amount: ['0'],
      type: TxType.TX_CONTRACT_EXE,
      data: [
        {
          method: 'setValue',
          inputs: [`I believe I can fly - ${Math.floor(Math.random() * 1000)}`],
        },
      ]
    });
    updateValue(); // call update value
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

        {connected && <>
          <p className={styles.description}>
            <span>
              {'Contract Value: '}
              <code className={styles.code}>"{value}"</code>
            </span>
          </p>
        </>}

        <div className={styles.grid} >
          {connected && <>
            <button className={styles.card} onClick={setValueButton}>
              <h2>Update Value 🔥</h2>
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
