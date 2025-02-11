export const LAST_SCREEN_REDIRECT_URL = 'https://heymax.ai';
import { icons, images } from '@heymax/assets';

export const ROUTES = [
  { route: '/', id: 0, instruction: 'See How It Works' },
  { route: '/shopping', id: 1, instruction: '' },
  { route: '/redeem', id: 2, instruction: 'Get Started' },
];

export const REDEEMS = [
  {
    id: 1,
    title: 'Transfer miles',
    body: '25 Airline and Hotel Partners, No Fees, 1:1 Transfer Ratio',
    icon: icons.TransferMilesIcon,
    instruction: 'Best for Business & First Class',
  },
  {
    id: 2,
    title: 'Fly and Claim',
    body: 'Upload your flight ticket, and get reimbursed within 5 days.',
    icon: icons.FlyClaimIcon,
    instruction: 'Best for Economy',
  },
  {
    id: 3,
    title: 'Not flying soon',
    body: 'You can always redeem Gift Cards with your Max Miles.',
    icon: icons.NoFlightSoonIcon,
    instruction: 'Best for Starters',
  },
];

export const QUICK_ACTIONS = [
  'Shop Online',
  'Book Travel',
  'Order Food',
  'Order Med',
  'Trade Online',
];

export const SHOPPING_BRANDS = [
  { url: images.ShopeeImage, height: 104, width: 197 },
  { url: images.LazadaImage, height: 126, width: 110 },
  { url: images.HnMImage, height: 92, width: 92 },
  { url: images.FaveImage, height: 92, width: 92 },
  { url: images.MerchantImage, height: 65, width: 110 },
  { url: images.AmazonSGImage, height: 104, width: 157 },
  { url: images.FairPriceImage, height: 104, width: 157 },
];
