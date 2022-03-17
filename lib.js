/// BOTON identificacion wallet
const ethereumButton = document.querySelector('.enableEthereumButton');
const showAccount = document.querySelector('.showAccount');



ethereumButton.addEventListener('click', () => {
  getAccount();
});

async function getAccount() {
  accounts = await ethereum.request({ method: 'eth_requestAccounts' });
  const account = accounts[0];
  showAccount.innerHTML = account;
  return(accounts[0]);
}

ethereum.on('accountsChanged', function (accounts) {
    getAccount();
    // Time to reload your interface with accounts[0]!
  });
//////////////


//BOTON ENVIAR ETH
const sendEthButton = document.querySelector('.sendEthButton');

sendEthButton.addEventListener('click', () => {

     
    ethereum
      .request({
        method: 'eth_sendTransaction',
        params: [
          {
            from: accounts[0],
            to: '0x8c1B4C9A1BfBB7968FFfd464D0e2729093Cbc83d',
            value: '0xb1a2bc2ec50000',
            gasPrice: '0x09184e72a000',
            gas: '0x2710',
          },
        ],
      })
      .then((txHash) => console.log(txHash))
      .catch((error) => console.error);
  });






  


