import { Keypair, PublicKey } from "@solana/web3.js";
import * as bip39 from 'bip39';
import * as bs58 from 'bs58';
//create a keypair
//let keypair = Keypair.generate();

//pk
let keypair = Keypair.generate();
console.log(keypair)

//keypair from bytes
let keypairFromBytes = Keypair.fromSecretKey(Uint8Array.from(["YOUR PRIVATE KEY AS UINT8 ARRAY"]))
//console.log(keypair)

//keypair from base 58 string

console.log("encoded to bs58: "+bs58.encode(Uint8Array.from(["YOUR PRIVATE KEY AS UINT8 ARRAY"])))
let keypairFromBase58 = Keypair.fromSecretKey(bs58.decode("YOUR PRIVATE STRING KEY"));




//Check if both are equal -- VERIFY A KEYPAIR
if (keypairFromBytes.publicKey.toBase58()=== keypairFromBase58.publicKey.toBase58()
){
  console.log("are the same pk: ");

}else{
  console.log("not the same")
}


//console.log("PublicKey"+keypair.publicKey);
//console.log(keypair.publicKey.toBase58())

//check if is on ed2559 curve

let publicKey: PublicKey = new PublicKey(keypair.publicKey.toBase58());

//console.log(PublicKey.isOnCurve(publicKey));


//CREATE A MNEMMONIC PHRASE
const mnemonic = bip39.generateMnemonic();

//MNEMONIC TO SEED
const seed = bip39.mnemonicToSeedSync("ability genre strike alpha spatial marriage inhale engage canoe circle inmate to", ""); // (mnemonic, password)

//MNEMNONIC TO SEED
console.log("mnemonic"+ mnemonic);
bip39.mnemonicToSeed("ability genre strike alpha spatial marriage inhale engage canoe circle inmate to").then((seed)=>{
  console.log(seed);
  let buffer: Buffer = Buffer.from(seed);

let a = new Uint8Array(buffer.toJSON().data.slice(0,32))


const key = Keypair.fromSeed(a);
console.log("The key: "+key.secretKey)
console.log(PublicKey.isOnCurve(key.publicKey.toBase58()))
console.log(key.publicKey.toBase58())

//last 32 is the public key  


});
//console.log(mnemonic);