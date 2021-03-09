import { MenuEntry } from '@radiumfi-libs/uikit'

const config: MenuEntry[] = [
  {
    label: 'Home',
    icon: 'HomeIcon',
    href: '/',
  },
 // {
  //  label: 'Trade',
  //  icon: 'TradeIcon',
  //  items: [
  //    {
  //      label: 'Exchange',
   //     href: '#',
   //   },
   //   {
   //     label: 'Liquidity',
    //    href: '#',
   //   },
   // ],
 // },
  {
    label: 'Buy Now',
    icon: 'TradeIcon',
    href: 'https://exchange.pancakeswap.finance/#/swap?inputCurrency=0x9813589661197bd9d060d924de3e688a0a50c50e',
  },
  {
    label: 'Farms',
    icon: 'FarmIcon',
    href: '/farms',
  },
  {
    label: 'Stakes',
    icon: 'PoolIcon',
    href: '/stakes',
  },
  // {
  //   label: 'Pools',
  //   icon: 'PoolIcon',
  //   href: '/pools',
  // },
  // {
  //   label: 'Lottery',
  //   icon: 'TicketIcon',
  //   href: '/lottery',
  // },
  // {
  //   label: 'NFT',
  //   icon: 'NftIcon',
  //   href: '/nft',
  // },
  // {
  //  label: 'Info',
  //  icon: 'InfoIcon',
  //  items: [
  //    {
  //      label: 'PancakeSwap',
  //      href: 'https://pancakeswap.info/token/',
  //    },
  //    {
  //      label: 'CoinGecko',
  //      href: 'https://www.coingecko.com/en/coins/',
  //    },
  //    {
  //      label: 'CoinMarketCap',
  //      href: 'https://coinmarketcap.com/currencies//',
  //    },
  //    {
  //      label: 'AstroTools',
   //     href: 'https://app.astrotools.io/pancake-pair-explorer/',
  //    },
  //  ],
 // },
 {
    label: 'Info',
    icon: 'InfoIcon',
    items: [
      {
        label: 'RDF8 Contract',
        href: 'https://bscscan.com/address/0x9813589661197bd9d060d924de3e688a0a50c50e',
      },
      {
        label: 'Masterchef',
        href: 'https://bscscan.com/address/0x2f3b531e912814af835b42fd36ef41aa4b19823f',
      },
      {
        label: 'Timelock',
        href: 'https://bscscan.com/address/0x7e98c8445daf38f9ba56c80b48b64c73292fa194',
      },
    ],
  },
  {
    label: 'More',
    icon: 'MoreIcon',
    items: [
      {
        label: 'Github',
        href: 'https://github.com/radiumfi/',
      },
      {
        label: 'Medium',
        href: 'https://radiumfinance.medium.com',
      },
      {
        label: 'Blog',
        href: 'https://radiumfinance.medium.com/',
      },
    ],
  },
]

export default config
