# Pyratz test

This project is a CoinMarketCap clone to show you my front-end skills. 
In this project you will have an implementation of a wallet connection, 

## App structure

The app is based on Next.js. I have used the T3-stack template to start the project. The T3-stack provide a suit of tools integrated in the app. In my case I choosed to keep prisma, next-auth, tRCP and tailwind. 

### Styling

To implement the UI I have tried to do all of it with TailwindCSS and in some rare case I have use inline style to solve particular issues.

## Functionalities

### Wallet

To create a wallet connection I choosed to use Rainbowkit. This is a wallet managment library. The library itself relies on `viem` and `wagmi`.
I wanted to try this library because it's an easy way to provide multiple wallet connector such as connectors for Metamask, WalletConnect ...
Also the default UI of this library fit perfectly with the CoinMarketCap UI. And the integration in the project feels natural.

For now I have only used the wallet connection functionality, but I am aware that the best way to use RainbowKit is to add the authentication to provide a reliable and secure connection to the wallet.
Using authentication would prevent user to use a wallet that they don't own.

### Token informations

My first choice to find all the informations related to the token and the market in general was Coingecko API. I have used this API to create the `Table` component. In this component I display all the informations about the top 10 coins in the world and rank them in a table.
I have also used the API form coingecko to create the `Trend` component. A component where you can see the 3 most search tokens by the users.

But for the global market informations displayed on top of the page I had to use CoinPaprika API to find global market related informations. Especialy for the global capitalization.

To fetch the data in the application, I choosed to use the SWR hooks for a better reactivity.

The only component that have a different that use a different approach for token information is the `UserTokens` component. In this component the goal was to display the tokens owned by the user in his wallet. My first approach was to use the `useBalance` hooks provide by Wagmi but the informations retrived were not sufficient to implement the rest of the UI. That's why I choosed to use the Alchemy provider for this task. So once the user connect his wallet, a script go and fetch all the Tokens in his wallet to display 3 of them with their name, symbol and icon.

### NFTs

I have implemented a component called `NFT` to display 4 NFTs from the user wallet. Unfortunately I don't have NFTs in my wallet, so I choosed to display 4 random NFTs from an Opensea collection.
I have choosed Alchemy provider to fetch thoose NFTs. 


## Improvents

A lot of improvment can be made with this app. Here is a list of some of them :

* Types : Use better typing pratice to create a more robust app
* Authentication : As said before, an authentication should be implemented to secure the wallet connection
* UI : The integration is not pixel perfect and some elements should be improved to math perfectly the model 
