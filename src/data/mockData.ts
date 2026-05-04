export interface Item {
  id: string;
  name: string;
  price: string;
  affiliateLink: string;
  hotspotX: number; // percentage (0-100)
  hotspotY: number; // percentage (0-100)
  thumbnail: string;
}

export interface Outfit {
  id: string;
  imageURL: string;
  title: string;
  category: string;
  totalEstimatedPrice: string;
  items: Item[];
}

export const CATEGORIES = [
  "All",
  "Party",
  "College Casual Fit",
  "Wedding Guest",
  "Streetwear",
  "Brunch",
  "Vacation"
];

/*export const MOCK_OUTFITS: Outfit[] = [
  {
    id: "1",
    imageURL: "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?q=80&w=1400&auto=format&fit=crop",
    title: "Chic Brunch Ensemble",
    category: "Brunch",
    totalEstimatedPrice: "$185",
    items: [
      {
        id: "1-1",
        name: "Oversized Beige Blazer",
        price: "$85",
        affiliateLink: "#",
        hotspotX: 45,
        hotspotY: 35,
        thumbnail: "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?q=80&w=200&auto=format&fit=crop"
      },
      {
        id: "1-2",
        name: "White Crop Top",
        price: "$25",
        affiliateLink: "#",
        hotspotX: 52,
        hotspotY: 45,
        thumbnail: "https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?q=80&w=200&auto=format&fit=crop"
      },
      {
        id: "1-3",
        name: "Gold Layered Necklace",
        price: "$75",
        affiliateLink: "#",
        hotspotX: 50,
        hotspotY: 28,
        thumbnail: "https://images.unsplash.com/photo-1599643478524-fb66f70d00f0?q=80&w=200&auto=format&fit=crop"
      }
    ]
  },
  {
    id: "2",
    imageURL: "https://images.unsplash.com/photo-1550614000-4b95d4ebf32b?q=80&w=1400&auto=format&fit=crop",
    title: "Urban Streetwear Vibe",
    category: "Streetwear",
    totalEstimatedPrice: "$210",
    items: [
      {
        id: "2-1",
        name: "Distressed Denim Jacket",
        price: "$90",
        affiliateLink: "#",
        hotspotX: 48,
        hotspotY: 30,
        thumbnail: "https://images.unsplash.com/photo-1576871337622-98d48d1cf531?q=80&w=200&auto=format&fit=crop"
      },
      {
        id: "2-2",
        name: "Black Turtleneck",
        price: "$40",
        affiliateLink: "#",
        hotspotX: 50,
        hotspotY: 20,
        thumbnail: "https://images.unsplash.com/photo-1556821840-3a63f95609a7?q=80&w=200&auto=format&fit=crop"
      },
      {
        id: "2-3",
        name: "Chunky Sneakers",
        price: "$80",
        affiliateLink: "#",
        hotspotX: 55,
        hotspotY: 85,
        thumbnail: "https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?q=80&w=200&auto=format&fit=crop"
      }
    ]
  },
  {
    id: "3",
    imageURL: "https://images.unsplash.com/photo-1496747611176-843222e1e57c?q=80&w=1400&auto=format&fit=crop",
    title: "Summer Vacation Dress",
    category: "Vacation",
    totalEstimatedPrice: "$120",
    items: [
      {
        id: "3-1",
        name: "Floral Midi Dress",
        price: "$85",
        affiliateLink: "#",
        hotspotX: 50,
        hotspotY: 50,
        thumbnail: "https://images.unsplash.com/photo-1572804013309-59a88b7e92f1?q=80&w=200&auto=format&fit=crop"
      },
      {
        id: "3-2",
        name: "Woven Sun Hat",
        price: "$35",
        affiliateLink: "#",
        hotspotX: 45,
        hotspotY: 15,
        thumbnail: "https://images.unsplash.com/photo-1521369909029-2afed882baee?q=80&w=200&auto=format&fit=crop"
      }
    ]
  },
  {
    id: "4",
    imageURL: "https://images.unsplash.com/photo-1566206091558-7f218b696731?q=80&w=1400&auto=format&fit=crop",
    title: "Evening Wedding Guest",
    category: "Wedding Guest",
    totalEstimatedPrice: "$250",
    items: [
      {
        id: "4-1",
        name: "Silk Slip Dress",
        price: "$150",
        affiliateLink: "#",
        hotspotX: 55,
        hotspotY: 45,
        thumbnail: "https://images.unsplash.com/photo-1566206091558-7f218b696731?q=80&w=200&auto=format&fit=crop"
      },
      {
        id: "4-2",
        name: "Crystal Earrings",
        price: "$45",
        affiliateLink: "#",
        hotspotX: 48,
        hotspotY: 22,
        thumbnail: "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?q=80&w=200&auto=format&fit=crop"
      },
      {
        id: "4-3",
        name: "Strappy Heels",
        price: "$55",
        affiliateLink: "#",
        hotspotX: 45,
        hotspotY: 90,
        thumbnail: "https://images.unsplash.com/photo-1543163521-1bf539c55dd2?q=80&w=200&auto=format&fit=crop"
      }
    ]
  },
  {
    id: "5",
    imageURL: "https://images.unsplash.com/photo-1618245318763-a15156d6b23c?q=80&w=1400&auto=format&fit=crop",
    title: "College Fest Ready",
    category: "College Fest",
    totalEstimatedPrice: "$145",
    items: [
      {
        id: "5-1",
        name: "Graphic Vintage Tee",
        price: "$35",
        affiliateLink: "#",
        hotspotX: 50,
        hotspotY: 35,
        thumbnail: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?q=80&w=200&auto=format&fit=crop"
      },
      {
        id: "5-2",
        name: "Cargo Pants",
        price: "$65",
        affiliateLink: "#",
        hotspotX: 45,
        hotspotY: 65,
        thumbnail: "https://images.unsplash.com/photo-1624378439575-d8705ad7ae80?q=80&w=200&auto=format&fit=crop"
      },
      {
        id: "5-3",
        name: "Crossbody Bag",
        price: "$45",
        affiliateLink: "#",
        hotspotX: 60,
        hotspotY: 55,
        thumbnail: "https://images.unsplash.com/photo-1591561954557-26941169b49e?q=80&w=200&auto=format&fit=crop"
      }
    ]
  },
  {
    id: "6",
    imageURL: "https://images.unsplash.com/photo-1539109136881-3be0616acf4b?q=80&w=1400&auto=format&fit=crop",
    title: "Party Sequin Top",
    category: "Party",
    totalEstimatedPrice: "$180",
    items: [
      {
        id: "6-1",
        name: "Sequin Halter Top",
        price: "$85",
        affiliateLink: "#",
        hotspotX: 45,
        hotspotY: 38,
        thumbnail: "https://images.unsplash.com/photo-1583391733958-d25e07fac662?q=80&w=200&auto=format&fit=crop"
      },
      {
        id: "6-2",
        name: "Leather Trousers",
        price: "$95",
        affiliateLink: "#",
        hotspotX: 50,
        hotspotY: 65,
        thumbnail: "https://images.unsplash.com/photo-1551028719-00167b16eac5?q=80&w=200&auto=format&fit=crop"
      }
    ]
  }
];*/

import { client } from "../sanityClient";

export const fetchOutfits = async (): Promise<Outfit[]> => {
  const data = await client.fetch(`
    *[_type == "outfit"]{
      _id,
      title,
      category,
      totalEstimatedPrice,
      "imageURL": image.asset->url,
      items[]{
        _key,
        name,
        price,
        affiliateLink,
        hotspotX,
        hotspotY,
        "thumbnail": thumbnail.asset->url
      }
    }
  `);

  return data.map((outfit: any) => {
    let category = outfit.category;
    if (category === 'College') {
      category = 'College Casual Fit';
    }

    const items = (outfit.items || [])
      .filter((item: any) => item.name && item.hotspotX != null && item.hotspotY != null)
      .map((item: any) => ({
        id: item._key,
        name: item.name,
        price: item.price,
        affiliateLink: item.affiliateLink || '#',
        hotspotX: item.hotspotX,
        hotspotY: item.hotspotY,
        thumbnail: item.thumbnail || undefined
      }));

    return {
      id: outfit._id,
      imageURL: outfit.imageURL,
      title: outfit.title,
      category: category,
      totalEstimatedPrice: outfit.totalEstimatedPrice,
      items: items
    };
  });
};