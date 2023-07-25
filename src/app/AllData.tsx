import {
  FlexProductsProps,
  SubHeaderProps,
  CategoryLinkProps,
} from '#/globalTypes';
import chargeImage from '../@images/charge.png';
import handImage from '../@images/hand.png';
import upgradeImage from '../@images/upgrade.svg';
import refurbishedImage from '../@images/refurbished.svg';
import depositImage from '../@images/deposit.svg';

const featuredProducts = [
  {
    productSlug: 'iphone-13',
    category: 'IPhone 13',
    link: '#',
    title: 'iPhone 13',
    price: 369.99,
    offerPercentage: 5,
    protectionPlan: 20.99,
    rentingPrice: 34.99,
    averageRating: 4.3,
    description:
      'The iPhone 13 Pro is a high-end smartphone that boasts a 6.1-inch Super Retina XDR display, an A15 Bionic chip with 5-core GPU, 5G connectivity, and a triple-camera system with 12MP Ultra Wide, Wide, and Telephoto lenses. It also features ProRes video recording, Night mode on all cameras, and a new Cinematic mode for video. Additionally, the device includes Face ID, up to 1TB of storage, and a longer-lasting battery life compared to its predecessor. The iPhone 13 Pro is available in four stunning finishes: Graphite, Gold, Silver, and Sierra Blue.',
    productRemaining: 9,
    variants: [
      {
        color: ['Graphite', 'Gold', 'Silver', 'Sierra Blue'],
        storageCapacity: ['64', '128', '256', '512', '1024'],
        carrier: ['AT&T', 'Sprint', 'T-Mobile', 'Verizon', 'Unlocked'],
        condition: ['Fair', 'Good', 'Excellent'],
      },
    ],
    images: [
      {
        altText: 'iPhone 13',
        height: 500,
        width: 500,
        id: 'image1',
        url: 'https://cdn.shopify.com/s/files/1/0008/9296/0821/products/500x500iphone13_37af3966-51f5-4dae-8ddb-05e9d7705daa_1024x.jpg?v=1642528554',
      },
      {
        altText: 'iPhone 13',
        height: 50,
        width: 50,
        id: 'image2',
        url: 'https://images.unsplash.com/photo-1632582593957-e28f748ba619?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8SVBob25lJTIwMTMlMjBQcm98ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60',
      },
      {
        altText: 'iPhone 13',
        height: 50,
        width: 50,
        id: 'image3',
        url: 'https://images.unsplash.com/photo-1663761879666-312880c27fc0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTJ8fElQaG9uZSUyMDEzJTIwUHJvfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60',
      },
    ],
    keyFeatures: [
      {
        title: 'Performance',
        description:
          'Sleek, redesigned, intelligent, and best of all, insanely fast. The Apple iPhone 13 is the “it” phone for 2021 for a reason. This model houses a revamped A15 chip that is certain to knock your socks off when it comes to speed and performance. Noted to be nearly 50% faster than its competition, the iPhone 13 is a no-brainer if you’re looking to upgrade to an all-around top tier smartphone. It also features incredible battery life with up to 17 hours of video playback and wireless charging capabilities.',
      },
      {
        title: 'Display',
        description:
          'Similar to its spectacular performance, the iPhone 13’s display is also quite impressive. The 5.4” Super Retina XDR display features HDR, True Tone and wide color technology with haptic tough and increased brightness. The Super Retina XDR technology allows for super sharp picture, while it also features precise color accuracy. The iPhone 13 from Gazelle is a solid choice for anyone who enjoys an immersive photo and video viewing experience. Honestly, who wouldn’t enjoy that?',
      },
      {
        title: 'Camera',
        description:
          'One of the most notable upgrades for the iPhone 13 is its new camera system. Apple scaled down from three to two rear-facing camera lenses, but that doesn’t mean the iPhone 13 is lacking in camera quality one bit. The new Ultra Wide camera is able to pull more detail out of dark photos, while the new wide camera captures almost 50% more light. For the video lovers, the iPhone 13 features a brand-new cinematic mode which allows for rack focus when shooting.',
      },
      {
        title: 'Other features',
        description:
          'If you weren’t sold already, the iPhone 13 is loaded with a variety of other exciting new or upgraded features. The new Photographic Styles feature allows the camera to remember which colors to mute or boost in your photos. This model is also compatible with MagSafe accessories and has several built-in apps to get you started. Gazelle has certified refurbished iPhone 13 models to help you upgrade for a fraction of the retail price tag. Browse our inventory and grab a deal today!',
      },
      {
        title: "What's included",
        description: [
          '30-point quality inspection',
          'Easy 30-day returns',
          'Charger cable included',
          'No contracts or strings attached',
        ],
      },
      {
        title: 'Carrier Compatibility',
        description:
          'This phone is guaranteed to work with SIM Unlocked. That means this device should work on any carrier but it is not guaranteed due to carrier specific restrictions. For compatibility with other carriers ',
      },
      {
        title: 'How to activate',
        description:
          'Most carriers offer activation through their website, however you may need to call the carrier directly to complete activation.',
      },
    ],
    specifications: [
      {
        title: 'Operating System',
        description: 'iOS 15, upgradable to iOS 15.1',
      },
      {
        title: 'Processor',
        description: 'Apple A15 Bionic (5 nm)',
      },
      {
        title: 'Memory',
        description: '6GB RAM',
      },
      {
        title: 'Storage',
        description: '256GB',
      },
      {
        title: 'Rear Camera',
        description: '12 MP, f/1.5, 26mm Wide',
      },
      {
        title: 'Rear Camera',
        description:
          '12 MP, f/2.8, 77mm (telephoto), PDAF, OIS, 3x optical zoom',
      },
      {
        title: 'Rear Camera',
        description: '12 MP, f/1.8, 120˚, 13mm UltraWide',
      },
      {
        title: 'Front Camera',
        description: '12 MP, f/2.2, 23mm (wide), 1/3.6"',
      },
      {
        title: 'Battery',
        description:
          'Li-Ion 4352 mAh, non-removable, fast charging 18W, MagSafe wireless charging 15W',
      },
      {
        title: 'Display Size',
        description: '6.7"',
      },
      {
        title: 'Display Resolution',
        description: '1284 x 2778 pixels',
      },
      {
        title: 'Connectivity',
        description: 'Wi-Fi, Bluetooth 5.0, GPS, NFC, USB-C 3.2',
      },
      {
        title: 'Height',
        description: '0.30"',
      },
      {
        title: 'Width',
        description: '3.07"',
      },
      {
        title: 'Length',
        description: '6.33"',
      },
      {
        title: 'Weight',
        description: '240g',
      },
    ],
    reviews: [
      {
        name: 'Jennifer M.',
        date: '03/25/23',
        stars: 5,
        cosmeticCondition: 'Excellent',
        image: null,
        title: 'Exactly as described. No problem with returns.',
        description:
          'This iPhone arrived quickly and I had to make a return which was no problem. Lots of choices. We got another model and it is in excellent condition.',
        comments: [],
      },
      {
        name: 'Abass A.',
        date: '03/04/23',
        stars: 5,
        cosmeticCondition: 'Excellent',
        image: null,
        title: 'Excellent.',
        description: 'Excellent',
        comments: [],
      },
      {
        name: 'Maximo I.',
        date: '02/22/23',
        stars: 5,
        cosmeticCondition: 'Good',
        image: null,
        title: 'IPhone 13 pro max',
        description: 'Great working phone Great buy...',
        comments: [],
      },
      {
        name: 'Joseph R.',
        date: '02/07/23',
        stars: 5,
        cosmeticCondition: 'Good',
        image: null,
        title: 'Great phone',
        description: 'Great phone',
        comments: [],
      },
      {
        name: 'Vida P.',
        date: '01/27/23',
        stars: 5,
        cosmeticCondition: 'Excellent',
        image: null,
        title: 'Terrific',
        description:
          "I'll be checking Gazelle for future purchases of electronics Phone is great. Quite an upgrade from the 8. Excellent condition as advertised.",
        comments: [],
      },
      {
        name: 'Jennifer M.',
        date: '06/11/22',
        stars: 4,
        cosmeticCondition: 'Fair',
        image: null,
        title: 'Wrong color. No problem with returns though.',
        description:
          'This iPhone arrived quickly and I had to make a return which was no problem. Lots of choices. We got another model and it is in excellent condition.',
        comments: [],
      },
      {
        name: 'Marcus J.',
        date: '03/24/22',
        stars: 4,
        cosmeticCondition: 'Excellent',
        image: null,
        title: 'iPhone 13 Pro Max: Pleased',
        description:
          'Recently purchased an iPhone 13 Pro Max. While I’ve heard of and been familiar with the company for years, this was my first buy. Although I was frustrated with some miscommunication about the actual shipping times for my product after paying for expedited shipping, I received the phone much faster than anticipated. Was further surprised that a waRead more about review stating iPhone 13 Pro Max: Pleasedll charger was included in the box! While the battery appears to drain just a tad faster than I anticipated, the overall phone has been a tremendous delight (directly upgrading from an iPhone 6s Plus) and I think I might order more products from Gazelle in the future.',
        comments: [],
      },
      {
        name: 'Courtney W.',
        date: '02/19/23',
        stars: 1,
        cosmeticCondition: 'Fair',
        image: null,
        title: 'Disappointed',
        description:
          'On the website it says no screen damage on the screen. That was a gazelle promise. When I receive my phone the whole front of screen is scratched extremely. Very upset gazelle didn’t keep there promise on there website. So I would never get a phone a fair condition again!',
        comments: [
          {
            by: 'Store Owner',
            comment:
              'Thank you for your feedback. Were sorry to hear that your device did not meet your expectations. We take your comments very seriously and will use them to help improve our processes.',
          },
        ],
      },
    ],
  },
  {
    productSlug: 'iphone-12',
    category: 'IPhone 12',
    link: '#',
    title: 'iPhone 12',
    price: 369.99,
    offerPercentage: 5,
    protectionPlan: 17.79,
    rentingPrice: 24.99,
    averageRating: 4.1,
    description:
      'The iPhone 12 is a high-end smartphone that boasts a 6.1-inch Super Retina XDR display, an A15 Bionic chip with 5-core GPU, 5G connectivity, and a triple-camera system with 12MP Ultra Wide, Wide, and Telephoto lenses. It also features ProRes video recording, Night mode on all cameras, and a new Cinematic mode for video. Additionally, the device includes Face ID, up to 1TB of storage, and a longer-lasting battery life compared to its predecessor. The iPhone 13 Pro is available in four stunning finishes: Graphite, Gold, Silver, and Sierra Blue.',
    productRemaining: 21,
    variants: [
      {
        color: ['Gold', 'Graphite', 'Silver', 'Sierra Blue'],
        storageCapacity: ['128', '64', '256', '512', '1024'],
        carrier: ['Sprint', 'T-Mobile', 'Verizon', 'Unlocked', 'AT&T'],
        condition: ['Good', 'Excellent', 'Fair'],
      },
    ],
    images: [
      {
        altText: 'iPhone 12',
        height: 500,
        width: 500,
        id: 'image1',
        url: 'https://images.unsplash.com/photo-1604054923518-e491a9a6afbb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1780&q=80',
      },
      {
        altText: 'iPhone 12',
        height: 50,
        width: 50,
        id: 'image2',
        url: 'https://images.unsplash.com/photo-1633053699034-459674171bec?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fElQaG9uZSUyMDEzJTIwUHJvfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60',
      },
      {
        altText: 'iPhone 12',
        height: 50,
        width: 50,
        id: 'image3',
        url: 'https://images.unsplash.com/photo-1663761879666-312880c27fc0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTJ8fElQaG9uZSUyMDEzJTIwUHJvfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60',
      },
    ],
    keyFeatures: [
      {
        title: 'Performance',
        description:
          'Sleek, redesigned, intelligent, and best of all, insanely fast. The Apple iPhone 13 is the “it” phone for 2021 for a reason. This model houses a revamped A15 chip that is certain to knock your socks off when it comes to speed and performance. Noted to be nearly 50% faster than its competition, the iPhone 13 is a no-brainer if you’re looking to upgrade to an all-around top tier smartphone. It also features incredible battery life with up to 17 hours of video playback and wireless charging capabilities.',
      },
      {
        title: 'Display',
        description:
          'Similar to its spectacular performance, the iPhone 13’s display is also quite impressive. The 5.4” Super Retina XDR display features HDR, True Tone and wide color technology with haptic tough and increased brightness. The Super Retina XDR technology allows for super sharp picture, while it also features precise color accuracy. The iPhone 13 from Gazelle is a solid choice for anyone who enjoys an immersive photo and video viewing experience. Honestly, who wouldn’t enjoy that?',
      },
      {
        title: 'Camera',
        description:
          'One of the most notable upgrades for the iPhone 13 is its new camera system. Apple scaled down from three to two rear-facing camera lenses, but that doesn’t mean the iPhone 13 is lacking in camera quality one bit. The new Ultra Wide camera is able to pull more detail out of dark photos, while the new wide camera captures almost 50% more light. For the video lovers, the iPhone 13 features a brand-new cinematic mode which allows for rack focus when shooting.',
      },
      {
        title: 'Other features',
        description:
          'If you weren’t sold already, the iPhone 13 is loaded with a variety of other exciting new or upgraded features. The new Photographic Styles feature allows the camera to remember which colors to mute or boost in your photos. This model is also compatible with MagSafe accessories and has several built-in apps to get you started. Gazelle has certified refurbished iPhone 13 models to help you upgrade for a fraction of the retail price tag. Browse our inventory and grab a deal today!',
      },
      {
        title: "What's included",
        description: [
          '30-point quality inspection',
          'Easy 30-day returns',
          'Charger cable included',
          'No contracts or strings attached',
        ],
      },
      {
        title: 'Carrier Compatibility',
        description:
          'This phone is guaranteed to work with SIM Unlocked. That means this device should work on any carrier but it is not guaranteed due to carrier specific restrictions. For compatibility with other carriers ',
      },
      {
        title: 'How to activate',
        description:
          'Most carriers offer activation through their website, however you may need to call the carrier directly to complete activation.',
      },
    ],
    specifications: [
      {
        title: 'Operating System',
        description: 'iOS 15, upgradable to iOS 15.1',
      },
      {
        title: 'Processor',
        description: 'Apple A15 Bionic (5 nm)',
      },
      {
        title: 'Memory',
        description: '6GB RAM',
      },
      {
        title: 'Storage',
        description: '256GB',
      },
      {
        title: 'Rear Camera',
        description: '12 MP, f/1.5, 26mm Wide',
      },
      {
        title: 'Rear Camera',
        description:
          '12 MP, f/2.8, 77mm (telephoto), PDAF, OIS, 3x optical zoom',
      },
      {
        title: 'Rear Camera',
        description: '12 MP, f/1.8, 120˚, 13mm UltraWide',
      },
      {
        title: 'Front Camera',
        description: '12 MP, f/2.2, 23mm (wide), 1/3.6"',
      },
      {
        title: 'Battery',
        description:
          'Li-Ion 4352 mAh, non-removable, fast charging 18W, MagSafe wireless charging 15W',
      },
      {
        title: 'Display Size',
        description: '6.7"',
      },
      {
        title: 'Display Resolution',
        description: '1284 x 2778 pixels',
      },
      {
        title: 'Connectivity',
        description: 'Wi-Fi, Bluetooth 5.0, GPS, NFC, USB-C 3.2',
      },
      {
        title: 'Height',
        description: '0.30"',
      },
      {
        title: 'Width',
        description: '3.07"',
      },
      {
        title: 'Length',
        description: '6.33"',
      },
      {
        title: 'Weight',
        description: '240g',
      },
    ],
    reviews: [
      {
        name: 'Jennifer M.',
        date: '03/25/23',
        stars: 5,
        cosmeticCondition: 'Excellent',
        image: null,
        title: 'Exactly as described. No problem with returns.',
        description:
          'This iPhone arrived quickly and I had to make a return which was no problem. Lots of choices. We got another model and it is in excellent condition.',
        comments: [],
      },
      {
        name: 'Abass A.',
        date: '03/04/23',
        stars: 5,
        cosmeticCondition: 'Excellent',
        image: null,
        title: 'Excellent.',
        description: 'Excellent',
        comments: [],
      },
      {
        name: 'Maximo I.',
        date: '02/22/23',
        stars: 5,
        cosmeticCondition: 'Good',
        image: null,
        title: 'IPhone 13 pro max',
        description: 'Great working phone Great buy...',
        comments: [],
      },
      {
        name: 'Joseph R.',
        date: '02/07/23',
        stars: 5,
        cosmeticCondition: 'Good',
        image: null,
        title: 'Great phone',
        description: 'Great phone',
        comments: [],
      },
      {
        name: 'Vida P.',
        date: '01/27/23',
        stars: 5,
        cosmeticCondition: 'Excellent',
        image: null,
        title: 'Terrific',
        description:
          "I'll be checking Gazelle for future purchases of electronics Phone is great. Quite an upgrade from the 8. Excellent condition as advertised.",
        comments: [],
      },
      {
        name: 'Jennifer M.',
        date: '06/11/22',
        stars: 4,
        cosmeticCondition: 'Fair',
        image: null,
        title: 'Wrong color. No problem with returns though.',
        description:
          'This iPhone arrived quickly and I had to make a return which was no problem. Lots of choices. We got another model and it is in excellent condition.',
        comments: [],
      },
      {
        name: 'Marcus J.',
        date: '03/24/22',
        stars: 4,
        cosmeticCondition: 'Excellent',
        image: null,
        title: 'iPhone 13 Pro Max: Pleased',
        description:
          'Recently purchased an iPhone 13 Pro Max. While I’ve heard of and been familiar with the company for years, this was my first buy. Although I was frustrated with some miscommunication about the actual shipping times for my product after paying for expedited shipping, I received the phone much faster than anticipated. Was further surprised that a waRead more about review stating iPhone 13 Pro Max: Pleasedll charger was included in the box! While the battery appears to drain just a tad faster than I anticipated, the overall phone has been a tremendous delight (directly upgrading from an iPhone 6s Plus) and I think I might order more products from Gazelle in the future.',
        comments: [],
      },
      {
        name: 'Courtney W.',
        date: '02/19/23',
        stars: 1,
        cosmeticCondition: 'Fair',
        image: null,
        title: 'Disappointed',
        description:
          'On the website it says no screen damage on the screen. That was a gazelle promise. When I receive my phone the whole front of screen is scratched extremely. Very upset gazelle didn’t keep there promise on there website. So I would never get a phone a fair condition again!',
        comments: [
          {
            by: 'Store Owner',
            comment:
              'Thank you for your feedback. Were sorry to hear that your device did not meet your expectations. We take your comments very seriously and will use them to help improve our processes.',
          },
        ],
      },
    ],
  },
  {
    productSlug: 'iphone-11',
    category: 'IPhone 11',
    link: '#',
    title: 'iPhone 11',
    price: 269.99,
    offerPercentage: 5,
    protectionPlan: 17.79,
    rentingPrice: 18.99,
    averageRating: 4.1,
    description:
      'The iPhone 11 is a high-end smartphone that boasts a 6.1-inch Super Retina XDR display, an A15 Bionic chip with 5-core GPU, 5G connectivity, and a triple-camera system with 12MP Ultra Wide, Wide, and Telephoto lenses. It also features ProRes video recording, Night mode on all cameras, and a new Cinematic mode for video. Additionally, the device includes Face ID, up to 1TB of storage, and a longer-lasting battery life compared to its predecessor. The iPhone 13 Pro is available in four stunning finishes: Graphite, Gold, Silver, and Sierra Blue.',
    productRemaining: 21,
    variants: [
      {
        color: ['Gold', 'Graphite', 'Silver', 'Sierra Blue'],
        storageCapacity: ['128', '64', '256', '512', '1024'],
        carrier: ['Sprint', 'T-Mobile', 'Verizon', 'Unlocked', 'AT&T'],
        condition: ['Good', 'Excellent', 'Fair'],
      },
    ],
    images: [
      {
        altText: 'iPhone 11',
        height: 500,
        width: 500,
        id: 'image1',
        url: 'https://images.unsplash.com/photo-1604054923518-e491a9a6afbb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1780&q=80',
      },
      {
        altText: 'iPhone 11',
        height: 50,
        width: 50,
        id: 'image2',
        url: 'https://images.unsplash.com/photo-1633053699034-459674171bec?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fElQaG9uZSUyMDEzJTIwUHJvfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60',
      },
      {
        altText: 'iPhone 11',
        height: 50,
        width: 50,
        id: 'image3',
        url: 'https://images.unsplash.com/photo-1663761879666-312880c27fc0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTJ8fElQaG9uZSUyMDEzJTIwUHJvfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60',
      },
    ],
    keyFeatures: [
      {
        title: 'Performance',
        description:
          'Sleek, redesigned, intelligent, and best of all, insanely fast. The Apple iPhone 13 is the “it” phone for 2021 for a reason. This model houses a revamped A15 chip that is certain to knock your socks off when it comes to speed and performance. Noted to be nearly 50% faster than its competition, the iPhone 13 is a no-brainer if you’re looking to upgrade to an all-around top tier smartphone. It also features incredible battery life with up to 17 hours of video playback and wireless charging capabilities.',
      },
      {
        title: 'Display',
        description:
          'Similar to its spectacular performance, the iPhone 13’s display is also quite impressive. The 5.4” Super Retina XDR display features HDR, True Tone and wide color technology with haptic tough and increased brightness. The Super Retina XDR technology allows for super sharp picture, while it also features precise color accuracy. The iPhone 13 from Gazelle is a solid choice for anyone who enjoys an immersive photo and video viewing experience. Honestly, who wouldn’t enjoy that?',
      },
      {
        title: 'Camera',
        description:
          'One of the most notable upgrades for the iPhone 13 is its new camera system. Apple scaled down from three to two rear-facing camera lenses, but that doesn’t mean the iPhone 13 is lacking in camera quality one bit. The new Ultra Wide camera is able to pull more detail out of dark photos, while the new wide camera captures almost 50% more light. For the video lovers, the iPhone 13 features a brand-new cinematic mode which allows for rack focus when shooting.',
      },
      {
        title: 'Other features',
        description:
          'If you weren’t sold already, the iPhone 13 is loaded with a variety of other exciting new or upgraded features. The new Photographic Styles feature allows the camera to remember which colors to mute or boost in your photos. This model is also compatible with MagSafe accessories and has several built-in apps to get you started. Gazelle has certified refurbished iPhone 13 models to help you upgrade for a fraction of the retail price tag. Browse our inventory and grab a deal today!',
      },
      {
        title: "What's included",
        description: [
          '30-point quality inspection',
          'Easy 30-day returns',
          'Charger cable included',
          'No contracts or strings attached',
        ],
      },
      {
        title: 'Carrier Compatibility',
        description:
          'This phone is guaranteed to work with SIM Unlocked. That means this device should work on any carrier but it is not guaranteed due to carrier specific restrictions. For compatibility with other carriers ',
      },
      {
        title: 'How to activate',
        description:
          'Most carriers offer activation through their website, however you may need to call the carrier directly to complete activation.',
      },
    ],
    specifications: [
      {
        title: 'Operating System',
        description: 'iOS 15, upgradable to iOS 15.1',
      },
      {
        title: 'Processor',
        description: 'Apple A15 Bionic (5 nm)',
      },
      {
        title: 'Memory',
        description: '6GB RAM',
      },
      {
        title: 'Storage',
        description: '256GB',
      },
      {
        title: 'Rear Camera',
        description: '12 MP, f/1.5, 26mm Wide',
      },
      {
        title: 'Rear Camera',
        description:
          '12 MP, f/2.8, 77mm (telephoto), PDAF, OIS, 3x optical zoom',
      },
      {
        title: 'Rear Camera',
        description: '12 MP, f/1.8, 120˚, 13mm UltraWide',
      },
      {
        title: 'Front Camera',
        description: '12 MP, f/2.2, 23mm (wide), 1/3.6"',
      },
      {
        title: 'Battery',
        description:
          'Li-Ion 4352 mAh, non-removable, fast charging 18W, MagSafe wireless charging 15W',
      },
      {
        title: 'Display Size',
        description: '6.7"',
      },
      {
        title: 'Display Resolution',
        description: '1284 x 2778 pixels',
      },
      {
        title: 'Connectivity',
        description: 'Wi-Fi, Bluetooth 5.0, GPS, NFC, USB-C 3.2',
      },
      {
        title: 'Height',
        description: '0.30"',
      },
      {
        title: 'Width',
        description: '3.07"',
      },
      {
        title: 'Length',
        description: '6.33"',
      },
      {
        title: 'Weight',
        description: '240g',
      },
    ],
    reviews: [
      {
        name: 'Jennifer M.',
        date: '03/25/23',
        stars: 5,
        cosmeticCondition: 'Excellent',
        image: null,
        title: 'Exactly as described. No problem with returns.',
        description:
          'This iPhone arrived quickly and I had to make a return which was no problem. Lots of choices. We got another model and it is in excellent condition.',
        comments: [],
      },
      {
        name: 'Abass A.',
        date: '03/04/23',
        stars: 5,
        cosmeticCondition: 'Excellent',
        image: null,
        title: 'Excellent.',
        description: 'Excellent',
        comments: [],
      },
      {
        name: 'Maximo I.',
        date: '02/22/23',
        stars: 5,
        cosmeticCondition: 'Good',
        image: null,
        title: 'IPhone 13 pro max',
        description: 'Great working phone Great buy...',
        comments: [],
      },
      {
        name: 'Joseph R.',
        date: '02/07/23',
        stars: 5,
        cosmeticCondition: 'Good',
        image: null,
        title: 'Great phone',
        description: 'Great phone',
        comments: [],
      },
      {
        name: 'Vida P.',
        date: '01/27/23',
        stars: 5,
        cosmeticCondition: 'Excellent',
        image: null,
        title: 'Terrific',
        description:
          "I'll be checking Gazelle for future purchases of electronics Phone is great. Quite an upgrade from the 8. Excellent condition as advertised.",
        comments: [],
      },
      {
        name: 'Jennifer M.',
        date: '06/11/22',
        stars: 4,
        cosmeticCondition: 'Fair',
        image: null,
        title: 'Wrong color. No problem with returns though.',
        description:
          'This iPhone arrived quickly and I had to make a return which was no problem. Lots of choices. We got another model and it is in excellent condition.',
        comments: [],
      },
      {
        name: 'Marcus J.',
        date: '03/24/22',
        stars: 4,
        cosmeticCondition: 'Excellent',
        image: null,
        title: 'iPhone 13 Pro Max: Pleased',
        description:
          'Recently purchased an iPhone 13 Pro Max. While I’ve heard of and been familiar with the company for years, this was my first buy. Although I was frustrated with some miscommunication about the actual shipping times for my product after paying for expedited shipping, I received the phone much faster than anticipated. Was further surprised that a waRead more about review stating iPhone 13 Pro Max: Pleasedll charger was included in the box! While the battery appears to drain just a tad faster than I anticipated, the overall phone has been a tremendous delight (directly upgrading from an iPhone 6s Plus) and I think I might order more products from Gazelle in the future.',
        comments: [],
      },
      {
        name: 'Courtney W.',
        date: '02/19/23',
        stars: 1,
        cosmeticCondition: 'Fair',
        image: null,
        title: 'Disappointed',
        description:
          'On the website it says no screen damage on the screen. That was a gazelle promise. When I receive my phone the whole front of screen is scratched extremely. Very upset gazelle didn’t keep there promise on there website. So I would never get a phone a fair condition again!',
        comments: [
          {
            by: 'Store Owner',
            comment:
              'Thank you for your feedback. Were sorry to hear that your device did not meet your expectations. We take your comments very seriously and will use them to help improve our processes.',
          },
        ],
      },
    ],
  },
  {
    productSlug: 'galaxy-ultra-s23',
    category: 'Samsung Galaxy',
    link: '#',
    title: 'Samsung Galaxy Ultra s23',
    price: 309.49,
    offerPercentage: 5,
    protectionPlan: 59.49,
    rentingPrice: 0,
    averageRating: 4.6,
    description:
      'Samsung Galaxy Ultra s23 key features include a 6.8-inch Dynamic AMOLED 2X display, a powerful Exynos 2100 or Snapdragon 888 processor, up to 16GB of RAM, up to 512GB of storage, and a quad-camera system with a 108MP main sensor, 10MP periscope telephoto lens, and two 10MP sensors for ultra-wide and telephoto shots. It also supports 5G connectivity, features an in-display fingerprint scanner, and has a large 5000mAh battery with 25W fast charging and 15W wireless charging capabilities.',
    productRemaining: 4,
    variants: [
      {
        color: ['Silver', 'Graphite', 'Gold', 'Sierra Blue'],
        storageCapacity: ['256', '64', '128', '512', '1024'],
        carrier: ['T-Mobile', 'Verizon', 'Unlocked', 'AT&T', 'Sprint'],
        condition: ['Excellent', 'Fair', 'Good'],
      },
    ],
    images: [
      {
        altText: 'Samsung',
        height: 500,
        width: 500,
        id: 'image1',
        url: 'https://cdn.shopify.com/s/files/1/0008/9296/0821/products/500x500galaxys22ultra_98d94f72-203f-41b5-be05-14dd22bae7d1_1024x.jpg?v=1656347246',
      },
      {
        altText: 'Samsung',
        height: 50,
        width: 50,
        id: 'image2',
        url: 'https://images.unsplash.com/photo-1632582593957-e28f748ba619?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8SVBob25lJTIwMTMlMjBQcm98ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60',
      },
      {
        altText: 'Samsung',
        height: 50,
        width: 50,
        id: 'image3',
        url: 'https://images.unsplash.com/photo-1663761879666-312880c27fc0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTJ8fElQaG9uZSUyMDEzJTIwUHJvfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60',
      },
    ],
    keyFeatures: [
      {
        title: 'Performance',
        description:
          'Sleek, redesigned, intelligent, and best of all, insanely fast. The Apple iPhone 13 is the “it” phone for 2021 for a reason. This model houses a revamped A15 chip that is certain to knock your socks off when it comes to speed and performance. Noted to be nearly 50% faster than its competition, the iPhone 13 is a no-brainer if you’re looking to upgrade to an all-around top tier smartphone. It also features incredible battery life with up to 17 hours of video playback and wireless charging capabilities.',
      },
      {
        title: 'Display',
        description:
          'Similar to its spectacular performance, the iPhone 13’s display is also quite impressive. The 5.4” Super Retina XDR display features HDR, True Tone and wide color technology with haptic tough and increased brightness. The Super Retina XDR technology allows for super sharp picture, while it also features precise color accuracy. The iPhone 13 from Gazelle is a solid choice for anyone who enjoys an immersive photo and video viewing experience. Honestly, who wouldn’t enjoy that?',
      },
      {
        title: 'Camera',
        description:
          'One of the most notable upgrades for the iPhone 13 is its new camera system. Apple scaled down from three to two rear-facing camera lenses, but that doesn’t mean the iPhone 13 is lacking in camera quality one bit. The new Ultra Wide camera is able to pull more detail out of dark photos, while the new wide camera captures almost 50% more light. For the video lovers, the iPhone 13 features a brand-new cinematic mode which allows for rack focus when shooting.',
      },
      {
        title: 'Other features',
        description:
          'If you weren’t sold already, the iPhone 13 is loaded with a variety of other exciting new or upgraded features. The new Photographic Styles feature allows the camera to remember which colors to mute or boost in your photos. This model is also compatible with MagSafe accessories and has several built-in apps to get you started. Gazelle has certified refurbished iPhone 13 models to help you upgrade for a fraction of the retail price tag. Browse our inventory and grab a deal today!',
      },
      {
        title: "What's included",
        description: [
          '30-point quality inspection',
          'Easy 30-day returns',
          'Charger cable included',
          'No contracts or strings attached',
        ],
      },
      {
        title: 'Carrier Compatibility',
        description:
          'This phone is guaranteed to work with SIM Unlocked. That means this device should work on any carrier but it is not guaranteed due to carrier specific restrictions. For compatibility with other carriers ',
      },
      {
        title: 'How to activate',
        description:
          'Most carriers offer activation through their website, however you may need to call the carrier directly to complete activation.',
      },
    ],
    specifications: [
      {
        title: 'Operating System',
        description: 'iOS 15, upgradable to iOS 15.1',
      },
      {
        title: 'Processor',
        description: 'Apple A15 Bionic (5 nm)',
      },
      {
        title: 'Memory',
        description: '6GB RAM',
      },
      {
        title: 'Storage',
        description: '256GB',
      },
      {
        title: 'Rear Camera',
        description: '12 MP, f/1.5, 26mm Wide',
      },
      {
        title: 'Rear Camera',
        description:
          '12 MP, f/2.8, 77mm (telephoto), PDAF, OIS, 3x optical zoom',
      },
      {
        title: 'Rear Camera',
        description: '12 MP, f/1.8, 120˚, 13mm UltraWide',
      },
      {
        title: 'Front Camera',
        description: '12 MP, f/2.2, 23mm (wide), 1/3.6"',
      },
      {
        title: 'Battery',
        description:
          'Li-Ion 4352 mAh, non-removable, fast charging 18W, MagSafe wireless charging 15W',
      },
      {
        title: 'Display Size',
        description: '6.7"',
      },
      {
        title: 'Display Resolution',
        description: '1284 x 2778 pixels',
      },
      {
        title: 'Connectivity',
        description: 'Wi-Fi, Bluetooth 5.0, GPS, NFC, USB-C 3.2',
      },
      {
        title: 'Height',
        description: '0.30"',
      },
      {
        title: 'Width',
        description: '3.07"',
      },
      {
        title: 'Length',
        description: '6.33"',
      },
      {
        title: 'Weight',
        description: '240g',
      },
    ],
    reviews: [
      {
        name: 'Jennifer M.',
        date: '03/25/23',
        stars: 5,
        cosmeticCondition: 'Excellent',
        image: null,
        title: 'Exactly as described. No problem with returns.',
        description:
          'This iPhone arrived quickly and I had to make a return which was no problem. Lots of choices. We got another model and it is in excellent condition.',
        comments: [],
      },
      {
        name: 'Abass A.',
        date: '03/04/23',
        stars: 5,
        cosmeticCondition: 'Excellent',
        image: null,
        title: 'Excellent.',
        description: 'Excellent',
        comments: [],
      },
      {
        name: 'Maximo I.',
        date: '02/22/23',
        stars: 5,
        cosmeticCondition: 'Good',
        image: null,
        title: 'IPhone 13 pro max',
        description: 'Great working phone Great buy...',
        comments: [],
      },
      {
        name: 'Joseph R.',
        date: '02/07/23',
        stars: 5,
        cosmeticCondition: 'Good',
        image: null,
        title: 'Great phone',
        description: 'Great phone',
        comments: [],
      },
      {
        name: 'Vida P.',
        date: '01/27/23',
        stars: 5,
        cosmeticCondition: 'Excellent',
        image: null,
        title: 'Terrific',
        description:
          "I'll be checking Gazelle for future purchases of electronics Phone is great. Quite an upgrade from the 8. Excellent condition as advertised.",
        comments: [],
      },
      {
        name: 'Jennifer M.',
        date: '06/11/22',
        stars: 4,
        cosmeticCondition: 'Fair',
        image: null,
        title: 'Wrong color. No problem with returns though.',
        description:
          'This iPhone arrived quickly and I had to make a return which was no problem. Lots of choices. We got another model and it is in excellent condition.',
        comments: [],
      },
      {
        name: 'Marcus J.',
        date: '03/24/22',
        stars: 4,
        cosmeticCondition: 'Excellent',
        image: null,
        title: 'iPhone 13 Pro Max: Pleased',
        description:
          'Recently purchased an iPhone 13 Pro Max. While I’ve heard of and been familiar with the company for years, this was my first buy. Although I was frustrated with some miscommunication about the actual shipping times for my product after paying for expedited shipping, I received the phone much faster than anticipated. Was further surprised that a waRead more about review stating iPhone 13 Pro Max: Pleasedll charger was included in the box! While the battery appears to drain just a tad faster than I anticipated, the overall phone has been a tremendous delight (directly upgrading from an iPhone 6s Plus) and I think I might order more products from Gazelle in the future.',
        comments: [],
      },
      {
        name: 'Courtney W.',
        date: '02/19/23',
        stars: 1,
        cosmeticCondition: 'Fair',
        image: null,
        title: 'Disappointed',
        description:
          'On the website it says no screen damage on the screen. That was a gazelle promise. When I receive my phone the whole front of screen is scratched extremely. Very upset gazelle didn’t keep there promise on there website. So I would never get a phone a fair condition again!',
        comments: [
          {
            by: 'Store Owner',
            comment:
              'Thank you for your feedback. Were sorry to hear that your device did not meet your expectations. We take your comments very seriously and will use them to help improve our processes.',
          },
        ],
      },
    ],
  },
  {
    productSlug: 'pixel-6',
    category: 'Google Phones',
    link: '#',
    title: 'Google Pixel 6',
    price: 400.09,
    offerPercentage: 5,
    protectionPlan: 48.99,
    rentingPrice: 0,
    averageRating: 3.9,
    description:
      'Google Pixel 6 key features include a 6.8-inch Dynamic AMOLED 2X display, a powerful Exynos 2100 or Snapdragon 888 processor, up to 16GB of RAM, up to 512GB of storage, and a quad-camera system with a 108MP main sensor, 10MP periscope telephoto lens, and two 10MP sensors for ultra-wide and telephoto shots. It also supports 5G connectivity, features an in-display fingerprint scanner, and has a large 5000mAh battery with 25W fast charging and 15W wireless charging capabilities.',
    productRemaining: 17,
    variants: [
      {
        color: ['Sierra Blue', 'Graphite', 'Gold', 'Silver'],
        storageCapacity: ['64', '128', '256', '512', '1024'],
        carrier: ['Unlocked', 'AT&T', 'Sprint', 'T-Mobile', 'Verizon'],
        condition: ['Fair', 'Good', 'Excellent'],
      },
    ],
    images: [
      {
        altText: 'Google pixel',
        height: 50,
        width: 50,
        id: 'image1',
        url: 'https://cdn.shopify.com/s/files/1/0008/9296/0821/products/500x500googlepixel6_a0d5fb89-b7c5-4251-9b35-ef07d876249d_1024x.jpg?v=1667250384',
      },
      {
        altText: 'Google pixel',
        height: 50,
        width: 50,
        id: 'image2',
        url: 'https://images.unsplash.com/photo-1632582593957-e28f748ba619?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8SVBob25lJTIwMTMlMjBQcm98ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60',
      },
      {
        altText: 'Google pixel',
        height: 50,
        width: 50,
        id: 'image3',
        url: 'https://images.unsplash.com/photo-1663761879666-312880c27fc0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTJ8fElQaG9uZSUyMDEzJTIwUHJvfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60',
      },
    ],
    keyFeatures: [
      {
        title: 'Performance',
        description:
          'Sleek, redesigned, intelligent, and best of all, insanely fast. The Apple iPhone 13 is the “it” phone for 2021 for a reason. This model houses a revamped A15 chip that is certain to knock your socks off when it comes to speed and performance. Noted to be nearly 50% faster than its competition, the iPhone 13 is a no-brainer if you’re looking to upgrade to an all-around top tier smartphone. It also features incredible battery life with up to 17 hours of video playback and wireless charging capabilities.',
      },
      {
        title: 'Display',
        description:
          'Similar to its spectacular performance, the iPhone 13’s display is also quite impressive. The 5.4” Super Retina XDR display features HDR, True Tone and wide color technology with haptic tough and increased brightness. The Super Retina XDR technology allows for super sharp picture, while it also features precise color accuracy. The iPhone 13 from Gazelle is a solid choice for anyone who enjoys an immersive photo and video viewing experience. Honestly, who wouldn’t enjoy that?',
      },
      {
        title: 'Camera',
        description:
          'One of the most notable upgrades for the iPhone 13 is its new camera system. Apple scaled down from three to two rear-facing camera lenses, but that doesn’t mean the iPhone 13 is lacking in camera quality one bit. The new Ultra Wide camera is able to pull more detail out of dark photos, while the new wide camera captures almost 50% more light. For the video lovers, the iPhone 13 features a brand-new cinematic mode which allows for rack focus when shooting.',
      },
      {
        title: 'Other features',
        description:
          'If you weren’t sold already, the iPhone 13 is loaded with a variety of other exciting new or upgraded features. The new Photographic Styles feature allows the camera to remember which colors to mute or boost in your photos. This model is also compatible with MagSafe accessories and has several built-in apps to get you started. Gazelle has certified refurbished iPhone 13 models to help you upgrade for a fraction of the retail price tag. Browse our inventory and grab a deal today!',
      },
      {
        title: "What's included",
        description: [
          '30-point quality inspection',
          'Easy 30-day returns',
          'Charger cable included',
          'No contracts or strings attached',
        ],
      },
      {
        title: 'Carrier Compatibility',
        description:
          'This phone is guaranteed to work with SIM Unlocked. That means this device should work on any carrier but it is not guaranteed due to carrier specific restrictions. For compatibility with other carriers ',
      },
      {
        title: 'How to activate',
        description:
          'Most carriers offer activation through their website, however you may need to call the carrier directly to complete activation.',
      },
    ],
    specifications: [
      {
        title: 'Operating System',
        description: 'iOS 15, upgradable to iOS 15.1',
      },
      {
        title: 'Processor',
        description: 'Apple A15 Bionic (5 nm)',
      },
      {
        title: 'Memory',
        description: '6GB RAM',
      },
      {
        title: 'Storage',
        description: '256GB',
      },
      {
        title: 'Rear Camera',
        description: '12 MP, f/1.5, 26mm Wide',
      },
      {
        title: 'Rear Camera',
        description:
          '12 MP, f/2.8, 77mm (telephoto), PDAF, OIS, 3x optical zoom',
      },
      {
        title: 'Rear Camera',
        description: '12 MP, f/1.8, 120˚, 13mm UltraWide',
      },
      {
        title: 'Front Camera',
        description: '12 MP, f/2.2, 23mm (wide), 1/3.6"',
      },
      {
        title: 'Battery',
        description:
          'Li-Ion 4352 mAh, non-removable, fast charging 18W, MagSafe wireless charging 15W',
      },
      {
        title: 'Display Size',
        description: '6.7"',
      },
      {
        title: 'Display Resolution',
        description: '1284 x 2778 pixels',
      },
      {
        title: 'Connectivity',
        description: 'Wi-Fi, Bluetooth 5.0, GPS, NFC, USB-C 3.2',
      },
      {
        title: 'Height',
        description: '0.30"',
      },
      {
        title: 'Width',
        description: '3.07"',
      },
      {
        title: 'Length',
        description: '6.33"',
      },
      {
        title: 'Weight',
        description: '240g',
      },
    ],
    reviews: [
      {
        name: 'Jennifer M.',
        date: '03/25/23',
        stars: 5,
        cosmeticCondition: 'Excellent',
        image: null,
        title: 'Exactly as described. No problem with returns.',
        description:
          'This iPhone arrived quickly and I had to make a return which was no problem. Lots of choices. We got another model and it is in excellent condition.',
        comments: [],
      },
      {
        name: 'Abass A.',
        date: '03/04/23',
        stars: 5,
        cosmeticCondition: 'Excellent',
        image: null,
        title: 'Excellent.',
        description: 'Excellent',
        comments: [],
      },
      {
        name: 'Maximo I.',
        date: '02/22/23',
        stars: 5,
        cosmeticCondition: 'Good',
        image: null,
        title: 'IPhone 13 pro max',
        description: 'Great working phone Great buy...',
        comments: [],
      },
      {
        name: 'Joseph R.',
        date: '02/07/23',
        stars: 5,
        cosmeticCondition: 'Good',
        image: null,
        title: 'Great phone',
        description: 'Great phone',
        comments: [],
      },
      {
        name: 'Vida P.',
        date: '01/27/23',
        stars: 5,
        cosmeticCondition: 'Excellent',
        image: null,
        title: 'Terrific',
        description:
          "I'll be checking Gazelle for future purchases of electronics Phone is great. Quite an upgrade from the 8. Excellent condition as advertised.",
        comments: [],
      },
      {
        name: 'Jennifer M.',
        date: '06/11/22',
        stars: 4,
        cosmeticCondition: 'Fair',
        image: null,
        title: 'Wrong color. No problem with returns though.',
        description:
          'This iPhone arrived quickly and I had to make a return which was no problem. Lots of choices. We got another model and it is in excellent condition.',
        comments: [],
      },
      {
        name: 'Marcus J.',
        date: '03/24/22',
        stars: 4,
        cosmeticCondition: 'Excellent',
        image: null,
        title: 'iPhone 13 Pro Max: Pleased',
        description:
          'Recently purchased an iPhone 13 Pro Max. While I’ve heard of and been familiar with the company for years, this was my first buy. Although I was frustrated with some miscommunication about the actual shipping times for my product after paying for expedited shipping, I received the phone much faster than anticipated. Was further surprised that a waRead more about review stating iPhone 13 Pro Max: Pleasedll charger was included in the box! While the battery appears to drain just a tad faster than I anticipated, the overall phone has been a tremendous delight (directly upgrading from an iPhone 6s Plus) and I think I might order more products from Gazelle in the future.',
        comments: [],
      },
      {
        name: 'Courtney W.',
        date: '02/19/23',
        stars: 1,
        cosmeticCondition: 'Fair',
        image: null,
        title: 'Disappointed',
        description:
          'On the website it says no screen damage on the screen. That was a gazelle promise. When I receive my phone the whole front of screen is scratched extremely. Very upset gazelle didn’t keep there promise on there website. So I would never get a phone a fair condition again!',
        comments: [
          {
            by: 'Store Owner',
            comment:
              'Thank you for your feedback. Were sorry to hear that your device did not meet your expectations. We take your comments very seriously and will use them to help improve our processes.',
          },
        ],
      },
    ],
  },
  {
    productSlug: 'i-pad',
    category: 'IPads',
    link: '#',
    title: 'iPad Mini 6',
    price: 350.99,
    offerPercentage: 5,
    protectionPlan: 56.0,
    rentingPrice: 0,
    averageRating: 3.5,
    description:
      'iPad Mini 6th gen offers a beautiful display without any of the sacrifice of having a smaller screen. The 8.3-inch Liquid Retina LED display provides a stunning viewing experience with bright colors, smooth movement and so much more. The iPad Mini 6th gens display supports both HDR and True Tone technology. Whether you are streaming your latest guilty-binge show or creating a digital masterpiece with any of the many supported art apps, the iPad Mini 6th gen is certain to keep up.',
    productRemaining: 11,
    variants: [
      {
        color: ['Black', 'Graphite', 'Gold', 'Silver', 'Sierra Blue'],
        storageCapacity: ['512', '64', '128', '256', '1024'],
        carrier: ['Verizon', 'AT&T', 'Sprint', 'T-Mobile', 'Unlocked'],
        condition: ['Good', 'Fair', 'Excellent'],
      },
    ],
    images: [
      {
        altText: 'iPad Mini',
        height: 500,
        width: 500,
        id: 'image1',
        url: 'https://cdn.shopify.com/s/files/1/0008/9296/0821/products/iPadmini6_94f3e9fc-9c17-4836-bf4b-18b9644fe797_1024x.png?v=1650921994',
      },
      {
        altText: 'iPad Mini',
        height: 50,
        width: 50,
        id: 'image2',
        url: 'https://images.unsplash.com/photo-1632582593957-e28f748ba619?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8SVBob25lJTIwMTMlMjBQcm98ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60',
      },
      {
        altText: 'iPad Mini',
        height: 50,
        width: 50,
        id: 'image3',
        url: 'https://images.unsplash.com/photo-1663761879666-312880c27fc0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTJ8fElQaG9uZSUyMDEzJTIwUHJvfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60',
      },
    ],
    keyFeatures: [
      {
        title: 'Performance',
        description:
          'Sleek, redesigned, intelligent, and best of all, insanely fast. The Apple iPhone 13 is the “it” phone for 2021 for a reason. This model houses a revamped A15 chip that is certain to knock your socks off when it comes to speed and performance. Noted to be nearly 50% faster than its competition, the iPhone 13 is a no-brainer if you’re looking to upgrade to an all-around top tier smartphone. It also features incredible battery life with up to 17 hours of video playback and wireless charging capabilities.',
      },
      {
        title: 'Display',
        description:
          'Similar to its spectacular performance, the iPhone 13’s display is also quite impressive. The 5.4” Super Retina XDR display features HDR, True Tone and wide color technology with haptic tough and increased brightness. The Super Retina XDR technology allows for super sharp picture, while it also features precise color accuracy. The iPhone 13 from Gazelle is a solid choice for anyone who enjoys an immersive photo and video viewing experience. Honestly, who wouldn’t enjoy that?',
      },
      {
        title: 'Camera',
        description:
          'One of the most notable upgrades for the iPhone 13 is its new camera system. Apple scaled down from three to two rear-facing camera lenses, but that doesn’t mean the iPhone 13 is lacking in camera quality one bit. The new Ultra Wide camera is able to pull more detail out of dark photos, while the new wide camera captures almost 50% more light. For the video lovers, the iPhone 13 features a brand-new cinematic mode which allows for rack focus when shooting.',
      },
      {
        title: 'Other features',
        description:
          'If you weren’t sold already, the iPhone 13 is loaded with a variety of other exciting new or upgraded features. The new Photographic Styles feature allows the camera to remember which colors to mute or boost in your photos. This model is also compatible with MagSafe accessories and has several built-in apps to get you started. Gazelle has certified refurbished iPhone 13 models to help you upgrade for a fraction of the retail price tag. Browse our inventory and grab a deal today!',
      },
      {
        title: "What's included",
        description: [
          '30-point quality inspection',
          'Easy 30-day returns',
          'Charger cable included',
          'No contracts or strings attached',
        ],
      },
      {
        title: 'Carrier Compatibility',
        description:
          'This phone is guaranteed to work with SIM Unlocked. That means this device should work on any carrier but it is not guaranteed due to carrier specific restrictions. For compatibility with other carriers ',
      },
      {
        title: 'How to activate',
        description:
          'Most carriers offer activation through their website, however you may need to call the carrier directly to complete activation.',
      },
    ],
    specifications: [
      {
        title: 'Operating System',
        description: 'iOS 15, upgradable to iOS 15.1',
      },
      {
        title: 'Processor',
        description: 'Apple A15 Bionic (5 nm)',
      },
      {
        title: 'Memory',
        description: '6GB RAM',
      },
      {
        title: 'Storage',
        description: '256GB',
      },
      {
        title: 'Rear Camera',
        description: '12 MP, f/1.5, 26mm Wide',
      },
      {
        title: 'Rear Camera',
        description:
          '12 MP, f/2.8, 77mm (telephoto), PDAF, OIS, 3x optical zoom',
      },
      {
        title: 'Rear Camera',
        description: '12 MP, f/1.8, 120˚, 13mm UltraWide',
      },
      {
        title: 'Front Camera',
        description: '12 MP, f/2.2, 23mm (wide), 1/3.6"',
      },
      {
        title: 'Battery',
        description:
          'Li-Ion 4352 mAh, non-removable, fast charging 18W, MagSafe wireless charging 15W',
      },
      {
        title: 'Display Size',
        description: '6.7"',
      },
      {
        title: 'Display Resolution',
        description: '1284 x 2778 pixels',
      },
      {
        title: 'Connectivity',
        description: 'Wi-Fi, Bluetooth 5.0, GPS, NFC, USB-C 3.2',
      },
      {
        title: 'Height',
        description: '0.30"',
      },
      {
        title: 'Width',
        description: '3.07"',
      },
      {
        title: 'Length',
        description: '6.33"',
      },
      {
        title: 'Weight',
        description: '240g',
      },
    ],
    reviews: [
      {
        name: 'Jennifer M.',
        date: '03/25/23',
        stars: 5,
        cosmeticCondition: 'Excellent',
        image: null,
        title: 'Exactly as described. No problem with returns.',
        description:
          'This iPhone arrived quickly and I had to make a return which was no problem. Lots of choices. We got another model and it is in excellent condition.',
        comments: [],
      },
      {
        name: 'Abass A.',
        date: '03/04/23',
        stars: 5,
        cosmeticCondition: 'Excellent',
        image: null,
        title: 'Excellent.',
        description: 'Excellent',
        comments: [],
      },
      {
        name: 'Maximo I.',
        date: '02/22/23',
        stars: 5,
        cosmeticCondition: 'Good',
        image: null,
        title: 'IPhone 13 pro max',
        description: 'Great working phone Great buy...',
        comments: [],
      },
      {
        name: 'Joseph R.',
        date: '02/07/23',
        stars: 5,
        cosmeticCondition: 'Good',
        image: null,
        title: 'Great phone',
        description: 'Great phone',
        comments: [],
      },
      {
        name: 'Vida P.',
        date: '01/27/23',
        stars: 5,
        cosmeticCondition: 'Excellent',
        image: null,
        title: 'Terrific',
        description:
          "I'll be checking Gazelle for future purchases of electronics Phone is great. Quite an upgrade from the 8. Excellent condition as advertised.",
        comments: [],
      },
      {
        name: 'Jennifer M.',
        date: '06/11/22',
        stars: 4,
        cosmeticCondition: 'Fair',
        image: null,
        title: 'Wrong color. No problem with returns though.',
        description:
          'This iPhone arrived quickly and I had to make a return which was no problem. Lots of choices. We got another model and it is in excellent condition.',
        comments: [],
      },
      {
        name: 'Marcus J.',
        date: '03/24/22',
        stars: 4,
        cosmeticCondition: 'Excellent',
        image: null,
        title: 'iPhone 13 Pro Max: Pleased',
        description:
          'Recently purchased an iPhone 13 Pro Max. While I’ve heard of and been familiar with the company for years, this was my first buy. Although I was frustrated with some miscommunication about the actual shipping times for my product after paying for expedited shipping, I received the phone much faster than anticipated. Was further surprised that a waRead more about review stating iPhone 13 Pro Max: Pleasedll charger was included in the box! While the battery appears to drain just a tad faster than I anticipated, the overall phone has been a tremendous delight (directly upgrading from an iPhone 6s Plus) and I think I might order more products from Gazelle in the future.',
        comments: [],
      },
      {
        name: 'Courtney W.',
        date: '02/19/23',
        stars: 1,
        cosmeticCondition: 'Fair',
        image: null,
        title: 'Disappointed',
        description:
          'On the website it says no screen damage on the screen. That was a gazelle promise. When I receive my phone the whole front of screen is scratched extremely. Very upset gazelle didn’t keep there promise on there website. So I would never get a phone a fair condition again!',
        comments: [
          {
            by: 'Store Owner',
            comment:
              'Thank you for your feedback. Were sorry to hear that your device did not meet your expectations. We take your comments very seriously and will use them to help improve our processes.',
          },
        ],
      },
    ],
  },
  {
    productSlug: 'macbook',
    category: 'Macbooks',
    link: '#',
    title: 'Macbook Air Core i5',
    price: 469.99,
    offerPercentage: 5,
    protectionPlan: 109.99,
    rentingPrice: 0,
    averageRating: 3.6,
    description:
      'MacBook Air holds its own when it comes to memory. The 120GB SSD gives you ample storage to keep all of your files within fingertips reach. This includes work projects, videos, music, you name it. All are MacBook Air accessible.',
    productRemaining: 9,
    variants: [
      {
        color: ['Silver', 'Graphite', 'Gold', 'Sierra Blue'],
        storageCapacity: ['1024', '64', '128', '256', '512'],
        carrier: ['AT&T', 'Sprint', 'T-Mobile', 'Verizon', 'Unlocked'],
        condition: ['Fair', 'Good', 'Excellent'],
      },
    ],
    images: [
      {
        altText: 'Macbook Air i5',
        height: 500,
        width: 500,
        id: 'image1',
        url: 'https://cdn.shopify.com/s/files/1/0008/9296/0821/products/500x500-13-Macbook-Air-2015_a7555806-1458-4bb1-9a99-4445baa4b2b5_1024x.jpg?v=1677528674',
      },
      {
        altText: 'Macbook Air i5',
        height: 50,
        width: 50,
        id: 'image2',
        url: 'https://images.unsplash.com/photo-1632582593957-e28f748ba619?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8SVBob25lJTIwMTMlMjBQcm98ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60',
      },
      {
        altText: 'Macbook Air i5',
        height: 50,
        width: 50,
        id: 'image3',
        url: 'https://images.unsplash.com/photo-1663761879666-312880c27fc0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTJ8fElQaG9uZSUyMDEzJTIwUHJvfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60',
      },
    ],
    keyFeatures: [
      {
        title: 'Performance',
        description:
          'Sleek, redesigned, intelligent, and best of all, insanely fast. The Apple iPhone 13 is the “it” phone for 2021 for a reason. This model houses a revamped A15 chip that is certain to knock your socks off when it comes to speed and performance. Noted to be nearly 50% faster than its competition, the iPhone 13 is a no-brainer if you’re looking to upgrade to an all-around top tier smartphone. It also features incredible battery life with up to 17 hours of video playback and wireless charging capabilities.',
      },
      {
        title: 'Display',
        description:
          'Similar to its spectacular performance, the iPhone 13’s display is also quite impressive. The 5.4” Super Retina XDR display features HDR, True Tone and wide color technology with haptic tough and increased brightness. The Super Retina XDR technology allows for super sharp picture, while it also features precise color accuracy. The iPhone 13 from Gazelle is a solid choice for anyone who enjoys an immersive photo and video viewing experience. Honestly, who wouldn’t enjoy that?',
      },
      {
        title: 'Camera',
        description:
          'One of the most notable upgrades for the iPhone 13 is its new camera system. Apple scaled down from three to two rear-facing camera lenses, but that doesn’t mean the iPhone 13 is lacking in camera quality one bit. The new Ultra Wide camera is able to pull more detail out of dark photos, while the new wide camera captures almost 50% more light. For the video lovers, the iPhone 13 features a brand-new cinematic mode which allows for rack focus when shooting.',
      },
      {
        title: 'Other features',
        description:
          'If you weren’t sold already, the iPhone 13 is loaded with a variety of other exciting new or upgraded features. The new Photographic Styles feature allows the camera to remember which colors to mute or boost in your photos. This model is also compatible with MagSafe accessories and has several built-in apps to get you started. Gazelle has certified refurbished iPhone 13 models to help you upgrade for a fraction of the retail price tag. Browse our inventory and grab a deal today!',
      },
      {
        title: "What's included",
        description: [
          '30-point quality inspection',
          'Easy 30-day returns',
          'Charger cable included',
          'No contracts or strings attached',
        ],
      },
      {
        title: 'Carrier Compatibility',
        description:
          'This phone is guaranteed to work with SIM Unlocked. That means this device should work on any carrier but it is not guaranteed due to carrier specific restrictions. For compatibility with other carriers ',
      },
      {
        title: 'How to activate',
        description:
          'Most carriers offer activation through their website, however you may need to call the carrier directly to complete activation.',
      },
    ],
    specifications: [
      {
        title: 'Operating System',
        description: 'iOS 15, upgradable to iOS 15.1',
      },
      {
        title: 'Processor',
        description: 'Apple A15 Bionic (5 nm)',
      },
      {
        title: 'Memory',
        description: '6GB RAM',
      },
      {
        title: 'Storage',
        description: '256GB',
      },
      {
        title: 'Rear Camera',
        description: '12 MP, f/1.5, 26mm Wide',
      },
      {
        title: 'Rear Camera',
        description:
          '12 MP, f/2.8, 77mm (telephoto), PDAF, OIS, 3x optical zoom',
      },
      {
        title: 'Rear Camera',
        description: '12 MP, f/1.8, 120˚, 13mm UltraWide',
      },
      {
        title: 'Front Camera',
        description: '12 MP, f/2.2, 23mm (wide), 1/3.6"',
      },
      {
        title: 'Battery',
        description:
          'Li-Ion 4352 mAh, non-removable, fast charging 18W, MagSafe wireless charging 15W',
      },
      {
        title: 'Display Size',
        description: '6.7"',
      },
      {
        title: 'Display Resolution',
        description: '1284 x 2778 pixels',
      },
      {
        title: 'Connectivity',
        description: 'Wi-Fi, Bluetooth 5.0, GPS, NFC, USB-C 3.2',
      },
      {
        title: 'Height',
        description: '0.30"',
      },
      {
        title: 'Width',
        description: '3.07"',
      },
      {
        title: 'Length',
        description: '6.33"',
      },
      {
        title: 'Weight',
        description: '240g',
      },
    ],
    reviews: [
      {
        name: 'Jennifer M.',
        date: '03/25/23',
        stars: 5,
        cosmeticCondition: 'Excellent',
        image: null,
        title: 'Exactly as described. No problem with returns.',
        description:
          'This iPhone arrived quickly and I had to make a return which was no problem. Lots of choices. We got another model and it is in excellent condition.',
        comments: [],
      },
      {
        name: 'Abass A.',
        date: '03/04/23',
        stars: 5,
        cosmeticCondition: 'Excellent',
        image: null,
        title: 'Excellent.',
        description: 'Excellent',
        comments: [],
      },
      {
        name: 'Maximo I.',
        date: '02/22/23',
        stars: 5,
        cosmeticCondition: 'Good',
        image: null,
        title: 'IPhone 13 pro max',
        description: 'Great working phone Great buy...',
        comments: [],
      },
      {
        name: 'Joseph R.',
        date: '02/07/23',
        stars: 5,
        cosmeticCondition: 'Good',
        image: null,
        title: 'Great phone',
        description: 'Great phone',
        comments: [],
      },
      {
        name: 'Vida P.',
        date: '01/27/23',
        stars: 5,
        cosmeticCondition: 'Excellent',
        image: null,
        title: 'Terrific',
        description:
          "I'll be checking Gazelle for future purchases of electronics Phone is great. Quite an upgrade from the 8. Excellent condition as advertised.",
        comments: [],
      },
      {
        name: 'Jennifer M.',
        date: '06/11/22',
        stars: 4,
        cosmeticCondition: 'Fair',
        image: null,
        title: 'Wrong color. No problem with returns though.',
        description:
          'This iPhone arrived quickly and I had to make a return which was no problem. Lots of choices. We got another model and it is in excellent condition.',
        comments: [],
      },
      {
        name: 'Marcus J.',
        date: '03/24/22',
        stars: 4,
        cosmeticCondition: 'Excellent',
        image: null,
        title: 'iPhone 13 Pro Max: Pleased',
        description:
          'Recently purchased an iPhone 13 Pro Max. While I’ve heard of and been familiar with the company for years, this was my first buy. Although I was frustrated with some miscommunication about the actual shipping times for my product after paying for expedited shipping, I received the phone much faster than anticipated. Was further surprised that a waRead more about review stating iPhone 13 Pro Max: Pleasedll charger was included in the box! While the battery appears to drain just a tad faster than I anticipated, the overall phone has been a tremendous delight (directly upgrading from an iPhone 6s Plus) and I think I might order more products from Gazelle in the future.',
        comments: [],
      },
      {
        name: 'Courtney W.',
        date: '02/19/23',
        stars: 1,
        cosmeticCondition: 'Fair',
        image: null,
        title: 'Disappointed',
        description:
          'On the website it says no screen damage on the screen. That was a gazelle promise. When I receive my phone the whole front of screen is scratched extremely. Very upset gazelle didn’t keep there promise on there website. So I would never get a phone a fair condition again!',
        comments: [
          {
            by: 'Store Owner',
            comment:
              'Thank you for your feedback. Were sorry to hear that your device did not meet your expectations. We take your comments very seriously and will use them to help improve our processes.',
          },
        ],
      },
    ],
  },
];
const gazelleCertifiedInfo = [
  'Front camera takes great selfies',
  'Front camera video recording is clear and ready for video chat',
  'Earpiece audio is not distorted',
  'Ring/Silent switch works',
  'Accesses Wi-Fi',
  'Connects to a cellular network',
  'Serial Number is clear for activation with your carrier',
  'Rear camera captures true, sharp images',
  'Autofocuses as expected',
  'Video recording is smooth',
  'LED flash is nice and bright',
  'Volume buttons work',
  'GPS can get you there',
  'Sleep/Wake button works',
  "It's the genuine article",
  'Device is cleaned thoroughly',
  'SIM card tray works',
  'Touchscreen functions fluidly',
  'Glass is free of damage',
  'Backlight is bright',
  'No dead pixels',
  'Makes calls',
  'Connects to the web',
  'Home button operates smoothly',
  'Headphone jack works',
  'Microphone records clear sound',
  'Voice commands work',
  'Device charges normally',
  'Device passes data via USB',
  'Loudspeaker is...loud',
];
const howItWorks = [
  {
    step: 1,
    title: 'Choose your plan',
    description:
      'Pick what best fits your style, use and budget. All unlocked for whatever floats you boat',
  },
  {
    step: 2,
    title: 'Get your device',
    description:
      'Enjoy your new-to-you device. Do your happy dance - you just scored some cool tech with predicatable monthly payments',
  },
  {
    step: 3,
    title: 'Get your next device',
    description:
      'At the end of 12 months, upgrade to a newer model. Or if you are done, simply return your phone',
  },
];
const flexReviews = [
  {
    name: 'Jennifer M.',
    userImage:
      'https://images.unsplash.com/photo-1463453091185-61582044d556?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fHVzZXIlMjBwcm9maWxlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60',
    title: 'Exactly as described. No problem with returns.',
    description:
      'This iPhone arrived quickly and I had to make a return which was no problem. Lots of choices. We got another model and it is in excellent condition.',
  },
  {
    name: 'Abass A.',
    userImage:
      'https://images.unsplash.com/photo-1463453091185-61582044d556?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fHVzZXIlMjBwcm9maWxlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60',
    title: 'Excellent.',
    description: 'Excellent',
  },
  {
    name: 'Maximo I.',
    userImage:
      'https://images.unsplash.com/photo-1463453091185-61582044d556?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fHVzZXIlMjBwcm9maWxlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60',
    title: 'IPhone 13 pro max',
    description: 'Great working phone Great buy...',
  },
  {
    name: 'Joseph R.',
    userImage:
      'https://images.unsplash.com/photo-1463453091185-61582044d556?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fHVzZXIlMjBwcm9maWxlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60',
    title: 'Great phone',
    description: 'Great phone',
  },
  {
    name: 'Vida P.',
    userImage:
      'https://images.unsplash.com/photo-1463453091185-61582044d556?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fHVzZXIlMjBwcm9maWxlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60',
    title: 'Terrific',
    description:
      "I'll be checking Gazelle for future purchases of electronics Phone is great. Quite an upgrade from the 8. Excellent condition as advertised.",
  },
  {
    name: 'Jennifer M.',
    userImage:
      'https://images.unsplash.com/photo-1463453091185-61582044d556?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fHVzZXIlMjBwcm9maWxlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60',
    title: 'Wrong color. No problem with returns though.',
    description:
      'This iPhone arrived quickly and I had to make a return which was no problem. Lots of choices. We got another model and it is in excellent condition.',
  },
  {
    name: 'Marcus J.',
    userImage:
      'https://images.unsplash.com/photo-1463453091185-61582044d556?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fHVzZXIlMjBwcm9maWxlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60',
    title: 'iPhone 13 Pro Max: Pleased',
    description:
      'Recently purchased an iPhone 13 Pro Max. While I’ve heard of and been familiar with the company for years, this was my first buy. Although I was frustrated with some miscommunication about the actual shipping times for my product after paying for expedited shipping, I received the phone much faster than anticipated. Was further surprised that a waRead more about review stating iPhone 13 Pro Max: Pleasedll charger was included in the box! While the battery appears to drain just a tad faster than I anticipated, the overall phone has been a tremendous delight (directly upgrading from an iPhone 6s Plus) and I think I might order more products from Gazelle in the future.',
  },
];
const loveFlexReasons = [
  {
    id: 1,
    title: 'Its lighter on your wallet',
    description:
      'Getting a newer phone just got easier on you and your monthly budget',
  },
  {
    id: 2,
    title: 'Any carrier you want',
    description:
      'All our Gazelle flex devices are unlocked for even more savings onn your preferred carrier. Catch you later, carrier lock.',
  },
  {
    id: 3,
    title: "Stay flexing'",
    description:
      "You'll have a certified, with our 30 point inspection, refurbished newer device every year.",
  },
  {
    id: 4,
    title: 'Commitment free',
    description:
      "It's not you, it's us. If you're not feeling it, send the phone back. No problem.",
  },
  {
    id: 5,
    title: 'The planet will thank you',
    description:
      'All our devices are recirculated and that helps us keep the carbon emissions and toxic materials out of our environment down',
  },
];
const FAQs = [
  {
    question: 'Question 1',
    answer:
      '1. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate.',
  },
  {
    question: 'Question 2',
    answer:
      '2. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate.',
  },
  {
    question: 'Question 3',
    answer:
      '3. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate.',
  },
  {
    question: 'Question 4',
    answer:
      '4. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate.',
  },
];
const footerLinks = [
  {
    name: 'About Gazelle',
    link: 'https://www.gazelle.com/our_story',
  },
  {
    name: 'Contact Us',
    link: 'https://www.gazelle.com/help/contact_us',
  },
  {
    name: 'FAQ',
    link: 'https://www.gazelle.com/help/faq/buy',
  },
  {
    name: 'Resource Centre',
    link: 'https://buy.gazelle.com/pages/resource-center',
  },
  {
    name: 'Shipping & Returns',
    link: 'https://buy.gazelle.com/pages/shipping-policy',
  },
  {
    name: 'WarrantyLife',
    link: 'https://www.gazelle.com/help/faq/buy/question_4',
  },
  {
    name: 'Financing',
    link: 'https://buy.gazelle.com/pages/financing',
  },
  {
    name: 'Exclusive Discounts',
    link: 'https://buy.gazelle.com/pages/exclusive-discounts',
  },
  {
    name: 'Become an Affliate',
    link: 'https://www.gazelle.com/affiliate-program',
  },
  {
    name: 'Blog',
    link: '#',
  },
  {
    name: 'Press',
    link: 'https://www.gazelle.com/media',
  },
  {
    name: 'Accessibility Statement',
    link: 'https://www.gazelle.com/accessibility-statement',
  },
  {
    name: 'Terms and Conditions',
    link: 'https://buy.gazelle.com/pages/terms-and-conditions',
  },
  {
    name: 'Privacy Policy',
    link: 'https://buy.gazelle.com/pages/privacy-policy',
  },
  {
    name: 'Do Not Sell My',
    link: '#',
  },
  {
    name: 'Personal Information',
    link: '#',
  },
];
const footerPopularSearches = [
  {
    name: 'Buy iPhone 14',
    link: '#',
  },
  {
    name: 'Buy iPhone 14 Plus',
    link: '#',
  },
  {
    name: 'Buy iPhone 14 Pro',
    link: '#',
  },
  {
    name: 'Buy iPhone 14 Pro Max',
    link: '#',
  },
  {
    name: 'Buy iPhone 13',
    link: '#',
  },
  {
    name: 'Buy iPhone 13 Mini',
    link: '#',
  },
  {
    name: 'Buy iPhone 13 Pro',
    link: '#',
  },
  {
    name: 'Buy iPhone 13 Pro Max',
    link: '#',
  },
  {
    name: 'Buy iPhone 12',
    link: '#',
  },
  {
    name: 'Buy iPhone 12 Pro',
    link: '#',
  },
  {
    name: 'Buy iPhone 12 Pro Max',
    link: '#',
  },
  {
    name: 'Buy iPhone 12 Mini',
    link: '#',
  },
  {
    name: 'Buy iPhone 11',
    link: '#',
  },
  {
    name: 'Buy iPhone 11 Pro',
    link: '#',
  },
  {
    name: 'Buy iPhone 11 Pro Max',
    link: '#',
  },
  {
    name: 'Buy iPhone SE',
    link: '#',
  },
  {
    name: 'Buy iPhone XS',
    link: '#',
  },
  {
    name: 'Buy iPhone XS Max',
    link: '#',
  },
  {
    name: 'Buy iPhone XR',
    link: '#',
  },
  {
    name: 'Buy iPhone X',
    link: '#',
  },
  {
    name: 'Buy iPhone 8',
    link: '#',
  },
  {
    name: 'Buy iPhone 8 Plus',
    link: '#',
  },
  {
    name: 'Buy MacBook',
    link: '#',
  },
  {
    name: 'Buy MacBook Pro',
    link: '#',
  },
  {
    name: 'Buy iPad',
    link: '#',
  },
  {
    name: 'Buy iPad Pro',
    link: '#',
  },
  {
    name: 'Buy Samsung Galaxy',
    link: '#',
  },
  {
    name: 'Buy Google Pixel',
    link: '#',
  },
];
const currentYear = new Date().getFullYear();

const footerLegalMessage = `2014 - ${currentYear} ecoATM, LLC. All Rights Reserved, Patents Pending. Gazelle is not affliated with nor has it been authorized, sponsered, or otherwise approved by the manufactured of the items available for trade-in or purchase. Gazelle and the Gazelle logo are trademarks of ecoATM, LLC, registered in the U.S. All other trademarks, logos and brands are the property of their respective owners, ecoATM, LLC CA DOJ #3711-2068`;

const flexProductColors = [
  {
    color: 'Silver',
    hex: '#c0c0c0',
  },
  {
    color: 'Midnight',
    hex: '#000',
  },
  {
    color: 'White',
    hex: '#fff',
  },
  {
    color: 'Space Grey',
    hex: '#808080',
  },
  {
    color: 'Rose Gold',
    hex: '#b76e79',
  },
];

const details = [
  {
    text: 'Charging cable included',
    icon: chargeImage,
    showTooltip: false,
  },
  {
    text: '12-month subscription agreement.',
    icon: handImage,
    showTooltip: false,
  },
  {
    text: 'Eligible to upgrade after 6 months.',
    icon: upgradeImage,
    showTooltip: true,
  },
  {
    text: 'All certified refurbished devices are in Good condition.',
    icon: refurbishedImage,
    showTooltip: true,
  },
  {
    text: '$49.99 deposit, refundable upon device return.',
    icon: depositImage,
    showTooltip: false,
  },
];
export function getFlexProductColors() {
  return flexProductColors;
}
export function getFooterLegalMessage() {
  return footerLegalMessage;
}
export function getFooterPopularSearches() {
  return footerPopularSearches;
}
export function getFooterLinks() {
  return footerLinks;
}
export function getFAQs() {
  return FAQs;
}
export function getReasonsToLoveFlex() {
  return loveFlexReasons;
}
export function getFlexReviews() {
  return flexReviews;
}
export function getHowItWorks() {
  return howItWorks;
}
export function getCertifiedInfo() {
  return gazelleCertifiedInfo;
}
export function getProduct(productSlug: string) {
  const selectedProduct = featuredProducts?.find(
    (product) => product.productSlug === productSlug
  );
  return selectedProduct;
}
export function getProducts() {
  const categoryLinkArray: CategoryLinkProps[] = featuredProducts.map(
    (product) => ({
      category: product.category,
      link: product.link,
    })
  );
  const flexProducts = featuredProducts.slice(0, 3).reverse();
  const subHeaderArray: SubHeaderProps[] = flexProducts.map((product) => ({
    productName: product.title,
    rentingPrice: product.rentingPrice,
  }));
  const flexProductsArray: FlexProductsProps[] = flexProducts.map(
    (product) => ({
      productName: product.title,
      rentingPrice: product.rentingPrice,
      carrier: product.variants[0].carrier[0],
      storageSpace: product.variants[0].storageCapacity[0],
      productQuality: product.variants[0].condition[0],
      src: product.images[0].url,
    })
  );
  return {
    categoryLinkArray,
    featuredProducts,
    flexProducts,
    subHeaderArray,
    flexProductsArray,
  };
}

export function getDetails() {
  return details;
}
