export const menuItemsData = [
    {
      id: 1,
      rank: 1,
      title: "[주문율 1등]아이스 아메리카노",
      description: "[주문율 1등] 아이스 아메리카노는 언제나 옳죠~",
      price: 4000,
      reviewCount: 26,
      image: "/images/coffee.png",
      category: "카페인음료",
      isRecommended: true,
      tags: ["사장님 추천"]
    },
    {
      id: 2,
      rank: 2,
      title: "카페라떼",
      description: "부드러운 카페라떼",
      price: 5000,
      reviewCount: 16,
      image: "/images/latte.png",
      category: "카페인음료",
      isRecommended: true,
      tags: []
    },
    {
      id: 3,
      rank: 3,
      title: "[인기]디카펜인 아메리카노",
      description: "건강을 위한 디카페인 아메리카노",
      price: 6000,
      category: "디카페인",
      isRecommended: true,
      image: "/images/americano.png",
      reviewCount: 0,
      tags: [],
      variants: [
        { size: "grande", price: 7000 },
        { size: "tall", price: 6000 }
      ]
    },
    {
        id: 4,
        rank: 4,
        title: "소금빵",
        description: "짭조름 한 소금빵",
        price: 9000,
        reviewCount: 44,
        image: "/images/bread.png",
        category: "디저트",
        isRecommended: true,
        tags: []
      }
  ];