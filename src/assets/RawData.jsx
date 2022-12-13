//side bar data
//Importing sidebar icons
import { TbTruckDelivery } from "react-icons/tb"
import {FaWallet,FaUserFriends} from "react-icons/fa"
import {BsFillSaveFill} from "react-icons/bs"
import {AiFillTag} from "react-icons/ai"
import { MdHelp ,MdFavorite } from "react-icons/md"
import Restruents from "../components/Restruents"
export const sideBar = [];
sideBar.push({ feature: 'Order', icon: <TbTruckDelivery size={25}/> });
sideBar.push({ feature: 'Favorites', icon: <MdFavorite size={25}/> });
sideBar.push({ feature: 'Wallet', icon:<FaWallet size={25}/> });
sideBar.push({ feature: 'Help', icon: <MdHelp size={25}/> });
sideBar.push({ feature: 'Promotions', icon: <AiFillTag size={25}/> });
sideBar.push({ feature: 'Best Ones', icon: <BsFillSaveFill size={25}/>});
sideBar.push({ feature: 'Invite Friends', icon: <FaUserFriends size={25}/> });

//resturentsCards Data(hotels)
export const resturentsCards=[];
resturentsCards.push({
  id:1,
  cardTitle:"Sun's Out BDGO's Out",
  date:'8/10',
  dishUrl:'https://images.pexels.com/photos/1600711/pexels-photo-1600711.jpeg?auto=compress&cs=tinysrgb&w=400',
  avilable:true,
})
resturentsCards.push({
  id:2,
  cardTitle:"Sun's Out BDGO's Out",
  date:'8/10',
  dishUrl:'https://images.pexels.com/photos/70497/pexels-photo-70497.jpeg?auto=compress&cs=tinysrgb&w=400',
  avilable:true,
})
resturentsCards.push({
  id:3,
  cardTitle:"Sun's Out BDGO's Out",
  date:'8/10',
  dishUrl:'https://images.pexels.com/photos/718742/pexels-photo-718742.jpeg?auto=compress&cs=tinysrgb&w=400',
  avilable:true,
})

//DishCards Data(menu) 
// export const DishCardsData=[];
// DishCardsData.push({
//   id:1,
//   cardTitle:"Sun's Out BDGO's Out",
//   date:'8/10',
//   dishUrl:'https://images.pexels.com/photos/376464/pexels-photo-376464.jpeg?auto=compress&cs=tinysrgb&w=400',
//   avilable:true,
// })
// DishCardsData.push({
//   id:2,
//   cardTitle:"Sun's Out BDGO's Out",
//   date:'8/10',
//   dishUrl:'https://images.pexels.com/photos/1600711/pexels-photo-1600711.jpeg?auto=compress&cs=tinysrgb&w=400',
//   avilable:true,
// })
// DishCardsData.push({
//   id:3,
//   cardTitle:"Sun's Out BDGO's Out",
//   date:'8/10',
//   dishUrl:'https://images.pexels.com/photos/70497/pexels-photo-70497.jpeg?auto=compress&cs=tinysrgb&w=400',
//   avilable:true,
// })
// DishCardsData.push({
//   id:4,
//   cardTitle:"Sun's Out BDGO's Out",
//   date:'8/10',
//   dishUrl:'https://images.pexels.com/photos/718742/pexels-photo-718742.jpeg?auto=compress&cs=tinysrgb&w=400',
//   avilable:true,
// })
// DishCardsData.push({
//   id:5,
//   cardTitle:"Sun's Out BDGO's Out",
//   date:'8/10',
//   dishUrl:'https://images.pexels.com/photos/2983101/pexels-photo-2983101.jpeg?auto=compress&cs=tinysrgb&w=400',
//   avilable:true,
// })
// DishCardsData.push({
//   id:6,
//   cardTitle:"Sun's Out BDGO's Out",
//   date:'8/10',
//   dishUrl:'https://images.pexels.com/photos/106343/pexels-photo-106343.jpeg?auto=compress&cs=tinysrgb&w=400',
//   avilable:false,
// })
// DishCardsData.push({
//   id:7,
//   cardTitle:"Sun's Out BDGO's Out",
//   date:'8/10',
//   dishUrl:'https://images.pexels.com/photos/1603901/pexels-photo-1603901.jpeg?auto=compress&cs=tinysrgb&w=400',
//   avilable:false,
// })
// DishCardsData.push({
//   id:8,
//   cardTitle:"Sun's Out BDGO's Out",
//   date:'8/10',
//   dishUrl:'https://images.pexels.com/photos/3186654/pexels-photo-3186654.jpeg?auto=compress&cs=tinysrgb&w=400',
//   avilable:true,
// })
// DishCardsData.push({
//   id:9,
//   cardTitle:"Sun's Out BDGO's Out",
//   date:'8/10',
//   dishUrl:'https://images.pexels.com/photos/376464/pexels-photo-376464.jpeg?auto=compress&cs=tinysrgb&w=400',
//   avilable:true,
// })

export const Dishdata = [
    {
      id: 1,
      name: 'Double Cheeseburger',
      category: 'burger',
      image:
        'https://images.unsplash.com/photo-1607013251379-e6eecfffe234?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8YnVyZ2Vyc3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=1400&q=60',
      price: '$$$$',
    },
    {
      id: 2,
      name: 'Bacon Cheeseburger',
      category: 'burger',
      image:
        'https://images.unsplash.com/photo-1553979459-d2229ba7433b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTh8fGJ1cmdlcnN8ZW58MHx8MHx8&auto=format&fit=crop&w=1400&q=60',
      price: '$',
    },
    {
      id: 3,
      name: 'Mushroom Burger',
      category: 'burger',
      image:
        'https://images.unsplash.com/photo-1608767221051-2b9d18f35a2f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTV8fGJ1cmdlcnN8ZW58MHx8MHx8&auto=format&fit=crop&w=1400&q=60',
      price: '$$',
    },
    {
      id: 4,
      name: 'Loaded Burger',
      category: 'burger',
      image:
        'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8YnVyZ2Vyc3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=1400&q=60',
      price: '$$$',
    },
    {
      id: 5,
      name: 'Feta & Spinnach',
      category: 'pizza',
      image:
        'https://images.unsplash.com/photo-1593560708920-61dd98c46a4e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8cGl6emF8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60',
      price: '$$',
    },
    {
      id: 6,
      name: 'Supreme Pizza',
      category: 'pizza',
      image:
        'https://images.unsplash.com/photo-1604382355076-af4b0eb60143?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8N3x8cGl6emF8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60',
      price: '$$$',
    },
    {
      id: 7,
      name: 'Meat Lovers',
      category: 'pizza',
      image:
        'https://images.unsplash.com/photo-1628840042765-356cda07504e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTh8fHBpenphfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60',
      price: '$$$$',
    },
    {
      id: 8,
      name: 'Cheese Pizza',
      category: 'pizza',
      image:
        'https://images.unsplash.com/photo-1548369937-47519962c11a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8Y2hlZXNlJTIwcGl6emF8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60',
      price: '$',
    },
    {
      id: 9,
      name: 'Kale Salad',
      category: 'salad',
      image:
        'https://images.unsplash.com/photo-1515543237350-b3eea1ec8082?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8c2FsYWQlMjBjZWFzYXJ8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60',
      price: '$$',
    },
    {
      id: 10,
      name: 'Ceasar Salad',
      category: 'salad',
      image:
        'https://images.unsplash.com/photo-1546793665-c74683f339c1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8c2FsYWQlMjBjZWFzYXJ8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60',
      price: '$$$',
    },
    {
      id: 11,
      name: 'Loaded Salad',
      category: 'salad',
      image:
        'https://images.unsplash.com/photo-1540420773420-3366772f4999?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8c2FsYWR8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60',
      price: '$$$$',
    },
    {
      id: 12,
      name: 'Fruit Salad',
      category: 'salad',
      image:
        'https://images.unsplash.com/photo-1564093497595-593b96d80180?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8ZnJ1aXQlMjBzYWxhZHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60',
      price: '$',
    },
    {
      id: 13,
      name: 'Wings',
      category: 'chicken',
      image:
        'https://images.unsplash.com/photo-1567620832903-9fc6debc209f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8Y2hpY2tlbiUyMGZvb2R8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60',
      price: '$$',
    },
    {
      id: 14,
      name: 'Baked Chicken',
      category: 'chicken',
      image:
        'https://images.unsplash.com/photo-1594221708779-94832f4320d1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8Y2hpY2tlbiUyMGZvb2R8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60',
      price: '$$$$',
    },
    {
      id: 15,
      name: 'Chicken Tenders',
      category: 'chicken',
      image:
        'https://images.unsplash.com/photo-1562967914-608f82629710?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fGNoaWNrZW4lMjBmb29kfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60',
      price: '$',
    },
    {
      id: 16,
      name: 'Chicken Kabob',
      category: 'chicken',
      image:
        'https://images.unsplash.com/photo-1603360946369-dc9bb6258143?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTN8fGNoaWNrZW4lMjBmb29kfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60',
      price: '$$$',
    },
  ];

  export const categories = [
    {
      id: 1,
      name: 'Fast Food',
      image:
        'https://duyt4h9nfnj50.cloudfront.net/new_search_home_eats_icon/FastFood_BrowseHome@3x.png',
    },
    {
      id: 2,
      name: 'Pizza',
      image:
        'https://duyt4h9nfnj50.cloudfront.net/new_search_home_eats_icon/Pizza_BrowseHome@3x.png',
    },
    {
      id: 3,
      name: 'Wings',
      image:
        'https://duyt4h9nfnj50.cloudfront.net/new_search_home_eats_icon/Wings_BrowseHome@3x.png',
    },
    {
      id: 4,
      name: 'Indian',
      image:
        'https://duyt4h9nfnj50.cloudfront.net/new_search_home_eats_icon/Indian_BrowseHome@3x.png',
    },
    {
      id: 5,
      name: 'Latest Deals',
      image:
        'https://duyt4h9nfnj50.cloudfront.net/new_search_home_eats_icon/Deals_BrowseHome@3x.png',
    },
    {
      id: 6,
      name: 'Restaurant Rewards',
      image:
        'https://duyt4h9nfnj50.cloudfront.net/new_search_home_eats_icon/RestoRewards_BrowseHome@3x.png',
    },
    {
      id: 7,
      name: 'Best Overall',
      image:
        'https://duyt4h9nfnj50.cloudfront.net/new_search_home_eats_icon/TopEats_Browse%20Home@3x.png',
    },
    {
      id: 8,
      name: 'Shipped Free',
      image:
        'https://duyt4h9nfnj50.cloudfront.net/new_search_home_eats_icon/Placeholder_Plates@3x.png',
    },
  ];