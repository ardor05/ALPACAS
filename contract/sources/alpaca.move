module alpaca::alpaca {

    use sui::object::{Self as object, UID};
    use sui::coin::{Self as coin, Coin};
    use sui::tx_context::{Self as tx_context, TxContext};
    use sui::transfer;
    use std::vector; // Import vector for byte strings

    /// Our custom NFT struct
    public struct AlpacaNft has key, store {
        id: UID,
        name: vector<u8>,
        description: vector<u8>,
        url: vector<u8>,
    }

    public struct SellerVault<T> has key {
        id: UID,
        balance: Coin<T>,
    }

    public fun init_seller_vault<T: key + store>(
        ctx: &mut TxContext
    ): SellerVault<T> {
        SellerVault {
            id: object::new(ctx),
            balance: coin::zero<T>(ctx),
        }
    }

    public entry fun deposit_funds<T: key + store>(
        vault: &mut SellerVault<T>,
        payment: Coin<T>
    ) {
        let amount = coin::value(&payment);
        assert!(amount > 0, 1); // Using a non-zero error code is good practice
        coin::join(&mut vault.balance, payment);
    }

    public entry fun withdraw_funds<T: key + store>(
        vault: &mut SellerVault<T>,
        amount: u64,
        recipient: address,
        ctx: &mut TxContext
    ) {
        let coins = coin::split(&mut vault.balance, amount, ctx);
        transfer::public_transfer(coins, recipient);
    }
    public entry fun mint_nft_if_eligible<T: key + store>(
        amount: u64, 
        ctx: &mut TxContext
    ) {
         
       if (amount > 100_000_000) { // Check if this threshold matches the intended coin's decimals
            let name = b"Congrats!";
            let description = b"You spent > 100 units!"; // Adjusted description slightly
            let url = b"https://moccasin-payable-krill-371.mypinata.cloud/ipfs/bafkreibbxgbimygnehguwxsforc4cgun5wmky2odqqdvzpkcl3cshikwee";


            let nft = AlpacaNft {
                id: object::new(ctx), // Generate a unique ID for the new NFT object
                name: name,
                description: description,
                url: url,
            };

            // Use public transfer for transferring the newly created NFT object
            transfer::public_transfer(nft, tx_context::sender(ctx));
        }
    }
}