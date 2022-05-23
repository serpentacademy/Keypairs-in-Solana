import { Keypair, PublicKey } from "@solana/web3.js";
import * as bip39 from 'bip39';
import * as bs58 from 'bs58';
//create a keypair
//let keypair = Keypair.generate();

//pk
let keypair = Keypair.generate();
console.log(keypair)

//keypair from bytes
let keypairFromBytes = Keypair.fromSecretKey(Uint8Array.from([
  46,204,90,180,96,209,157,192,157,175,108,194,60,174,76,151,247,139,105,56,178,222,156,78,165,28,207,19,136,251,184,64,56,229,99,164,190,45,64,208,28,82,129,251,53,242,57,220,185,182,78,66,87,138,29,232,2,156,141,102,172,241,175,203
]))
//console.log(keypair)

//keypair from base 58 string

console.log("encoded to bs58: "+bs58.encode(Uint8Array.from([46,204,90,180,96,209,157,192,157,175,108,194,60,174,76,151,247,139,105,56,178,222,156,78,165,28,207,19,136,251,184,64,56,229,99,164,190,45,64,208,28,82,129,251,53,242,57,220,185,182,78,66,87,138,29,232,2,156,141,102,172,241,175,203])))
let keypairFromBase58 = Keypair.fromSecretKey(bs58.decode("wGWyZh7wKdVGfvvAjpg8mRBLBFFvxR7gAZ6M5dVHFS7GGcox2qsJAumTUEijunJWSyZy3SozTipPJEcSw5g7wdk"));




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