<p align="center">
    <img src="https://image.noelshack.com/fichiers/2021/05/2/1612267227-b054c844-c578-4abe-b7e9-1cd375374904-200x200.png" width="150">
    <p align="center">
     Cryptology - Course exercises on encryption and decryption techniques
    </p>
</p>

## Description
<b> - Branch main (TP1) :</b> For this exercise we had to create several web pages, each consisting of an encryption and/or decryption algorithm. In each form, fill in a message to be encrypted as well as a key if the option is present. For certain encryption technique a decryption is possible, you just have to enter your encrypted message and click on "decrypt".

## Installation

```
https://github.com/JEANFRANCOISTeddy/Cryptologie.git
```

## How to use
####  Start :
``` node server.js ```

#### To navigate add an encryption type to the url : 

| Path          | Description   |
| ------------- |:-------------:|
| /AES     | The Advanced Encryption Standard (AES) is a U.S. Federal Information Processing Standard (FIPS). It was selected after a 5-year process where 15 competing designs were evaluated. |
| /Blowfish     | The Blowfish is a hash function, created by Bruce Schneier in 1993, and was one of the first hash algorithms to be freely distributed. That's why it is used quite a lot. The encryption key is very long and mostly random, which makes blowfish very difficult to break at the moment. The version of blowfish using 16 iterations is still inviolate.      |
| /Keccak-512 |       |
| /MD5 |   MD5 is a widely used hash function. It's been used in a variety of security applications and is also commonly used to check the integrity of files. Though, MD5 is not collision resistant, and it isn't suitable for applications like SSL certificates or digital signatures that rely on this property.    |
| /RipeMD160 |       |
| /SHA2-256 |    SHA-256 is one of the four variants in the SHA-2 set. It isn't as widely used as SHA-1, though it appears to provide much better security.   |
| /SHA3-512 |       |
| /RSA |   RSA (Rivest–Shamir–Adleman) is an algorithm used by modern computers to encrypt and decrypt messages. It is an asymmetric cryptographic algorithm. Asymmetric means that there are two different keys. This is also called public key cryptography, because one of the keys can be given to anyone. The other key must be kept private.    |
