document.addEventListener("DOMContentLoaded", () => {

// ================= DARK MODE =================
window.toggleMode = function () {
document.body.classList.toggle("dark");
document.body.classList.toggle("light");
};

// ================= DATA =================
const genres = [
"Action",
"Romance",
"RomCom",
"Horror",
"Fantasy",
"Comedy",
"Thriller",
"Sci-Fi"
];

const moods = [
"Happy",
"Sad",
"Excited",
"Lonely",
"Relaxed",
"Emotional",
"Motivated",
"Heartbroken"
];

const genreMovies = {

Action: [

{
title:"The Batman",
year:"2022",
duration:"2h 56m",
rating:"7.9",
available:"HBO Max, Apple TV",
poster:"https://image.tmdb.org/t/p/w500/74xTEgt7R36Fpooo50r9T25onhq.jpg",
trailer:"https://www.youtube.com/watch?v=mqqft2x_Aa4"
},

{
title:"Avengers: Endgame",
year:"2019",
duration:"3h 1m",
rating:"8.4",
available:"Disney+, Apple TV",
poster:"https://image.tmdb.org/t/p/w500/or06FN3Dka5tukK1e9sl16pB3iy.jpg",
trailer:"https://www.youtube.com/watch?v=TcMBFSGVi1c"
},

{
title:"John Wick",
year:"2014",
duration:"1h 41m",
rating:"7.4",
available:"Prime Video, Apple TV",
poster:"https://image.tmdb.org/t/p/w500/fZPSd91yGE9fCcCe6OoQr6E3Bev.jpg",
trailer:"https://www.youtube.com/watch?v=2AUmvWm5ZDQ"
},

{
title:"Top Gun Maverick",
year:"2022",
duration:"2h 10m",
rating:"8.2",
available:"Paramount+, Apple TV",
poster:"https://image.tmdb.org/t/p/w500/62HCnUTziyWcpDaBO2i1DX17ljH.jpg",
trailer:"https://www.youtube.com/watch?v=giXco2jaZ_4"
},

{
title:"Mission Impossible Fallout",
year:"2018",
duration:"2h 27m",
rating:"7.7",
available:"Paramount+",
poster:"https://image.tmdb.org/t/p/w500/AkJQpZp9WoNdj7pLYSj1L0RcMMN.jpg",
trailer:"https://www.youtube.com/watch?v=wb49-oV0F78"
},

{
title:"Gladiator",
year:"2000",
duration:"2h 35m",
rating:"8.5",
available:"Netflix",
poster:"https://image.tmdb.org/t/p/w500/ty8TGRuvJLPUmAR1H1nRIsgwvim.jpg",
trailer:"https://www.youtube.com/watch?v=owK1qxDselE"
},

{
title:"Baby Driver",
year:"2017",
duration:"1h 53m",
rating:"7.6",
available:"Netflix",
poster:"https://image.tmdb.org/t/p/w500/dN9LbVNNZFITwfaRjl4tmwGWkRg.jpg",
trailer:"https://www.youtube.com/watch?v=zTvJJnoWIPk"
}

,{
title:"Nobody",
year:"2021",
duration:"1h 32m",
rating:"7.4",
available:"Netflix",
poster:"https://image.tmdb.org/t/p/w500/oBgWY00bEFeZ9N25wWVyuQddbAo.jpg",
trailer:"https://www.youtube.com/watch?v=wZti8QKBWPo"
}

],

Romance: [

{
title:"The Notebook",
year:"2004",
duration:"2h 3m",
rating:"7.8",
available:"Netflix",
poster:"https://image.tmdb.org/t/p/original/28HcbSyLA3SlgmXSEnt5gOPaiKH.jpg",
trailer:"https://www.youtube.com/watch?v=FC6biTjEyZw"
},

{
title:"Titanic",
year:"1997",
duration:"3h 14m",
rating:"7.9",
available:"Disney+",
poster:"https://image.tmdb.org/t/p/w500/9xjZS2rlVxm8SFx8kPC3aIGCOYQ.jpg",
trailer:"https://www.youtube.com/watch?v=kVrqfYjkTdQ"
},

{
title:"Me Before You",
year:"2016",
duration:"1h 50m",
rating:"7.4",
available:"Netflix",
poster:"https://image.tmdb.org/t/p/w500/Ia3dzj5LnCj1ZBdlVeJrbKJQxG.jpg",
trailer:"https://www.youtube.com/watch?v=Eh993__rOxA"
},

{
title:"La La Land",
year:"2016",
duration:"2h 8m",
rating:"8.0",
available:"Netflix",
poster:"https://image.tmdb.org/t/p/w500/uDO8zWDhfWwoFdKS4fzkUJt0Rf0.jpg",
trailer:"https://www.youtube.com/watch?v=0pdqf4P9MB8"
},

{
title:"Pride and Prejudice",
year:"2005",
duration:"2h 9m",
rating:"7.8",
available:"Netflix",
poster:"https://image.tmdb.org/t/p/w500/sGjIvtVvTlWnia2zfJfHz81pZ9Q.jpg",
trailer:"https://www.youtube.com/watch?v=1dYv5u6v55Y"
},

{
title:"Before Sunrise",
year:"1995",
duration:"1h 41m",
rating:"8.1",
available:"Prime Video",
poster:"https://image.tmdb.org/t/p/w500/kf1Jb1c2JAOqjuzA3H4oDM263uB.jpg",
trailer:"https://www.youtube.com/watch?v=6MUcuqbGTxc"
},

{
title:"The Fault in Our Stars",
year:"2014",
duration:"2h 6m",
rating:"7.7",
available:"Disney+",
poster:"https://image.tmdb.org/t/p/w500/ep7dF4QR4Mm39LI958V0XbwE0hK.jpg",
trailer:"https://www.youtube.com/watch?v=9ItBvH5J6ss"
},

{
title:"Five Feet Apart",
year:"2019",
duration:"1h 56m",
rating:"7.2",
available:"Netflix",
poster:"https://image.tmdb.org/t/p/w500/kreTuJBkUjVWePRfhHZuYfhNE1T.jpg",
trailer:"https://www.youtube.com/watch?v=24YrEAGF32M"
}

],

RomCom: [

{
title:"Mean Girls",
year:"2004",
duration:"1h 37m",
rating:"7.1",
available:"Netflix",
poster:"https://image.tmdb.org/t/p/w500/2ZkuQXvVhh45uSvkBej4S7Ix1NJ.jpg",
trailer:"https://www.youtube.com/watch?v=oDU84nmSDZY"
},

{
title:"Crazy Rich Asians",
year:"2018",
duration:"2h",
rating:"6.9",
available:"Netflix",
poster:"https://image.tmdb.org/t/p/w500/1XxL4LJ5WHdrcYcihEZUCgNCpAW.jpg",
trailer:"https://www.youtube.com/watch?v=ZQ-YX-5bAs0"
},

{
title:"Anyone But You",
year:"2023",
duration:"1h 43m",
rating:"6.5",
available:"Netflix",
poster:"https://image.tmdb.org/t/p/w500/yRt7MGBElkLQOYRvLTT1b3B1rcp.jpg",
trailer:"https://www.youtube.com/watch?v=UtjH6Sk7Gxs"
},

{
title:"To All The Boys I've Loved Before",
year:"2018",
duration:"1h 39m",
rating:"7.0",
available:"Netflix",
poster:"https://image.tmdb.org/t/p/w500/hKHZhUbIyUAjcSrqJThFGYIR6kI.jpg",
trailer:"https://www.youtube.com/watch?v=555oiY9RWM4"
},

{
title:"Clueless",
year:"1995",
duration:"1h 37m",
rating:"6.9",
available:"Netflix",
poster:"https://image.tmdb.org/t/p/w500/8AwVTcgpTnmeOs4TdTWqcFDXEsA.jpg",
trailer:"https://www.youtube.com/watch?v=RS0KyTZ3Ie4"
},

{
title:"How to Lose a Guy in 10 Days",
year:"2003",
duration:"1h 56m",
rating:"6.5",
available:"Netflix",
poster:"https://image.tmdb.org/t/p/w500/2dlftyPz7mTYbrsPvTogyFmYd7d.jpg",
trailer:"https://www.youtube.com/watch?v=2ZMGk_Ml1fc"
},

{
title: "13 Going on 30",
year: "2004",
duration: "1h 38m",
rating: "6.2",
available: "Netflix",
poster: "https://image.tmdb.org/t/p/original/k4x1pdgiNCbuoLnNyFW7FLgfafW.jpg",
trailer: "https://www.youtube.com/watch?v=y-0Ej6tSpZQ"
},
{
title:"10 Things I Hate About You",
year:"1999",
duration:"1h 37m",
rating:"7.3",
available:"Disney+",
poster:"https://image.tmdb.org/t/p/w500/ujERk3aKABXU3NDXOAxEQYTHe9A.jpg",
trailer:"https://www.youtube.com/watch?v=YjD76qX2h5c"
},

],

Horror: [

{
title:"The Conjuring",
year:"2013",
duration:"1h 52m",
rating:"7.5",
available:"Netflix",
poster:"https://image.tmdb.org/t/p/w500/wVYREutTvI2tmxr6ujrHT704wGF.jpg",
trailer:"https://www.youtube.com/watch?v=k10ETZ41q5o"
},

{
title:"Smile",
year:"2022",
duration:"1h 55m",
rating:"6.5",
available:"Paramount+",
poster:"https://image.tmdb.org/t/p/w500/aPqcQwu4VGEewPhagWNncDbJ9Xp.jpg",
trailer:"https://www.youtube.com/watch?v=BcDK7lkzzsU"
},

{
title:"IT",
year:"2017",
duration:"2h 15m",
rating:"7.3",
available:"HBO Max",
poster:"https://image.tmdb.org/t/p/w500/9E2y5Q7WlCVNEhP5GiVTjhEhx1o.jpg",
trailer:"https://www.youtube.com/watch?v=xKJmEC5ieOk"
},

{
title:"A Quiet Place",
year:"2018",
duration:"1h 30m",
rating:"7.5",
available:"Netflix",
poster:"https://image.tmdb.org/t/p/w500/nAU74GmpUk7t5iklEp3bufwDq4n.jpg",
trailer:"https://www.youtube.com/watch?v=WR7cc5t7tv8"
},

{
title:"Evil Dead Rise",
year:"2023",
duration:"1h 36m",
rating:"6.5",
available:"HBO Max",
poster:"https://image.tmdb.org/t/p/w500/5ik4ATKmNtmJU6AYD0bLm56BCVM.jpg",
trailer:"https://www.youtube.com/watch?v=smTK_AeAPHs"
},

{
title:"Hereditary",
year:"2018",
duration:"2h 7m",
rating:"7.3",
available:"Prime Video",
poster:"https://image.tmdb.org/t/p/w500/lHV8HHlhwNup2VbpiACtlKzaGIQ.jpg",
trailer:"https://www.youtube.com/watch?v=V6wWKNij_1M"
},

{
title:"The Black Phone",
year:"2021",
duration:"1h 43m",
rating:"6.9",
available:"Netflix",
poster:"https://image.tmdb.org/t/p/w500/p9ZUzCyy9wRTDuuQexkQ78R2BgF.jpg",
trailer:"https://www.youtube.com/watch?v=3eGP6im8AZA"
},

{
title:"Talk to Me",
year:"2022",
duration:"1h 35m",
rating:"7.1",
available:"Netflix",
poster:"https://image.tmdb.org/t/p/w500/kdPMUMJzyYAc4roD52qavX0nLIC.jpg",
trailer:"https://www.youtube.com/watch?v=aLAKJu9aJys"
}

],

Fantasy: [

{
title:"Harry Potter and the Sorcerer's Stone",
year:"2001",
duration:"2h 32m",
rating:"7.6",
available:"HBO Max",
poster:"https://image.tmdb.org/t/p/w500/wuMc08IPKEatf9rnMNXvIDxqP4W.jpg",
trailer:"https://www.youtube.com/watch?v=VyHV0BRtdxo"
},

{
title:"The Lord of the Rings: The Fellowship of the Ring",
year:"2001",
duration:"2h 58m",
rating:"8.8",
available:"Prime Video",
poster:"https://image.tmdb.org/t/p/w500/6oom5QYQ2yQTMJIbnvbkBL9cHo6.jpg",
trailer:"https://www.youtube.com/watch?v=V75dMMIW2B4"
},

{
title:"Fantastic Beasts and Where to Find Them",
year:"2016",
duration:"2h 12m",
rating:"7.2",
available:"HBO Max",
poster:"https://image.tmdb.org/t/p/w500/fLsaFKExQt05yqjoAvKsmOMYvJR.jpg",
trailer:"https://www.youtube.com/watch?v=ViuDsy7yb8M"
},

{
title:"Maleficent",
year:"2014",
duration:"1h 37m",
rating:"7.0",
available:"Disney+",
poster:"https://image.tmdb.org/t/p/w500/bDG3yei6AJlEAK3A5wN7RwFXQ7V.jpg",
trailer:"https://www.youtube.com/watch?v=w-XO4XiRop0"
},

{
title:"Percy Jackson & The Olympians: The Lightning Thief",
year:"2010",
duration:"1h 58m",
rating:"5.9",
available:"Disney+",
poster:"https://www.themoviedb.org/t/p/original/brzpTyZ5bnM7s53C1KSk1TmrMO6.jpg",
trailer:"https://www.youtube.com/watch?v=R86InkfdboA"
},

{
title:"Alice in Wonderland",
year:"2010",
duration:"1h 48m",
rating:"6.4",
available:"Disney+",
poster:"https://image.tmdb.org/t/p/w500/o0kre9wRCZz3jjSjaru7QU0UtFz.jpg",
trailer:"https://www.youtube.com/watch?v=9POCgSRVvf0"
},

{
title:"The Chronicles of Narnia: The Lion, the Witch and the Wardrobe",
year:"2005",
duration:"2h 23m",
rating:"6.9",
available:"Disney+",
poster:"https://static0.cbrimages.com/wordpress/wp-content/uploads/sharedimages/2024/04/the-chronicles-of-narnia-lion-witch-wardrobe-movie-poster.jpg", 
trailer:"https://www.youtube.com/watch?v=maOK8mCp0K0"
},

{
title:"Pan's Labyrinth",
year:"2006",
duration:"1h 58m",
rating:"8.2",
available:"Netflix",
poster:"https://image.tmdb.org/t/p/original/qmLCuvSMHolIaHdHGoCRIVlR68Z.jpg",
trailer:"https://www.youtube.com/watch?v=EqYiSlkvRuw"
}

],

Comedy: [

{
title:"Free Guy",
year:"2021",
duration:"1h 55m",
rating:"7.1",
available:"Disney+",
poster:"https://image.tmdb.org/t/p/w500/xmbU4JTUm8rsdtn7Y3Fcm30GpeT.jpg",
trailer:"https://www.youtube.com/watch?v=X2m-08cOAbc"
},

{
title:"Home Alone",
year:"1990",
duration:"1h 43m",
rating:"7.7",
available:"Disney+",
poster:"https://image.tmdb.org/t/p/w500/9wSbe4CwObACCQvaUVhWQyLR5Vz.jpg",
trailer:"https://www.youtube.com/watch?v=jEDaVHmw7r4"
},

{
title:"The Mask",
year:"1994",
duration:"1h 41m",
rating:"6.9",
available:"Netflix",
poster:"https://image.tmdb.org/t/p/w500/xbbXp9px4o8Oe7IbGd0yIbla8mZ.jpg",
trailer:"https://www.youtube.com/watch?v=hOqVRwGVUkA"
},

{
title: "21 Jump Street",
year: "2012",
duration: "1h 49m",
rating: "7.2",
available: "Netflix",
poster: "https://image.tmdb.org/t/p/original/qXB2YlUcBJYSiqJ8slGSHdav3NT.jpg",
trailer: "https://www.youtube.com/watch?v=RLoKtb4c4W0"
},

{
title:"The Hangover",
year:"2009",
duration:"1h 40m",
rating:"7.7",
available:"Netflix",
poster:"https://image.tmdb.org/t/p/w500/uluhlXubGu1VxU63X9VHCLWDAYP.jpg",
trailer:"https://www.youtube.com/watch?v=tcdUhdOlz9M"
},

{
title:"We're the Millers",
year:"2013",
duration:"1h 50m",
rating:"7.0",
available:"Netflix",
poster:"https://image.tmdb.org/t/p/original/1MzHJj89pbDoMjz4XnX5WTPbuEb.jpg",
trailer:"https://www.youtube.com/watch?v=0Vsy5KzsieQ"
},

{
  title: "Superbad",
  year: "2007",
  duration: "1h 53m",
  rating: "7.6",
  available: "Netflix",
  poster: "https://image.tmdb.org/t/p/w500/ek8e8txUyUwd2BNqj6lFEerJfbq.jpg",
  trailer: "https://www.youtube.com/watch?v=4eaZ_48ZYog"
},

{
  title: "Baby's Day Out",
  year: "1994",
  duration: "1h 39m",
  rating: "6.2",
  available: "Disney+",
  poster: "https://image.tmdb.org/t/p/original/21U2jwl36hoTHsXB3fDuIQkcchu.jpg",
  trailer: "https://www.youtube.com/watch?v=1lF2uF0xZ1o"
}

],
Thriller: [

  {
    title: "Se7en",
    year: "1995",
    duration: "2h 7m",
    rating: "8.6",
    available: "Netflix",
    poster: "https://image.tmdb.org/t/p/w500/6yoghtyTpznpBik8EngEmJskVUO.jpg",
    trailer: "https://www.youtube.com/watch?v=znmZoVkCjpI"
  },
  {
    title: "Zodiac",
    year: "2007",
    duration: "2h 37m",
    rating: "7.7",
    available: "Netflix",
    poster: "https://image.tmdb.org/t/p/original/qb2outNa8emE2Dpjt8R9P7xj19Y.jpg",
    trailer: "https://www.youtube.com/watch?v=yNncHPl1UXg"
  },
  {
    title: "Nightcrawler",
    year: "2014",
    duration: "1h 57m",
    rating: "7.8",
    available: "Netflix",
    poster: "https://m.media-amazon.com/images/M/MV5BYjMwMmI5MWQtOTU4OS00OTAyLTg0OTYtNmQ5YzExZTQ3ZWJhXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg",
    trailer: "https://www.youtube.com/watch?v=u1uP_8VJkDQ"
  },
   {
    title: "Fractured",
    year: "2019",
    duration: "1h 40m",
    rating: "6.4",
    available: "Netflix",
    poster: "https://m.media-amazon.com/images/M/MV5BMDViOTQwZDMtNjBiMS00YzU4LTllNGUtM2YwNjk4NGMwOTk3XkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg",
    trailer: "https://www.youtube.com/watch?v=ZV9Zs5V7L4E"
  },
  {
    title: "Prisoners",
    year: "2013",
    duration: "2h 33m",
    rating: "8.1",
    available: "Prime Video",
    poster: "https://image.tmdb.org/t/p/w500/uhviyknTT5cEQXbn6vWIqfM4vGm.jpg",
    trailer: "https://www.youtube.com/watch?v=bpXfcTF6iVk"
  },
  {
    title: "Gone Girl",
    year: "2014",
    duration: "2h 29m",
    rating: "8.1",
    available: "Netflix",
    poster: "https://image.tmdb.org/t/p/w500/ts996lKsxvjkO2yiYG0ht4qAicO.jpg",
    trailer: "https://www.youtube.com/watch?v=Ym3LB0lOJ0o"
  },
  {
    title: "Shutter Island",
    year: "2010",
    duration: "2h 18m",
    rating: "8.2",
    available: "Netflix",
    poster: "https://image.tmdb.org/t/p/w500/4GDy0PHYX3VRXUtwK5ysFbg3kEx.jpg",
    trailer: "https://www.youtube.com/watch?v=5iaYLCiq5RM"
  },
  {
    title: "The Girl with the Dragon Tattoo",
    year: "2011",
    duration: "2h 38m",
    rating: "7.8",
    available: "Netflix",
    poster: "https://image.tmdb.org/t/p/original/vbLedKc1BUF4FOH1GyHW62FulCc.jpg",
    trailer: "https://www.youtube.com/watch?v=WVLvMg62RPA"
  }

],
"Sci-Fi": [

{
    title: "Interstellar",
    year: "2014",
    duration: "2h 49m",
    rating: "8.7",
    available: "Netflix",
    poster: "https://image.tmdb.org/t/p/w500/gEU2QniE6E77NI6lCU6MxlNBvIx.jpg",
    trailer: "https://www.youtube.com/watch?v=zSWdZVtXT7E"
},

  {
  title: "Ex Machina",
  year: "2014",
  duration: "1h 48m",
  rating: "7.7",
  available: "Netflix",
  poster: "https://theworldofmovies.com/wp-content/uploads/2016/02/Ex-Machina.jpg",
  trailer: "https://www.youtube.com/watch?v=XYGzRB4Pnq8"
},

  {
    title: "The Matrix",
    year: "1999",
    duration: "2h 16m",
    rating: "8.7",
    available: "HBO Max",
    poster: "https://image.tmdb.org/t/p/w500/f89U3ADr1oiB1s9GkdPOEpXUk5H.jpg",
    trailer: "https://www.youtube.com/watch?v=vKQi3bBA1y8"
  },
  {
    title: "Blade Runner 2049",
    year: "2017",
    duration: "2h 44m",
    rating: "8.0",
    available: "Netflix",
    poster: "https://image.tmdb.org/t/p/w500/gajva2L0rPYkEWjzgFlBXCAVBE5.jpg",
    trailer: "https://www.youtube.com/watch?v=gCcx85zbxz4"
  },
  {
    title: "Edge of Tomorrow",
    year: "2014",
    duration: "1h 53m",
    rating: "7.9",
    available: "Prime Video",
    poster: "https://image.tmdb.org/t/p/w500/uUHvlkLavotfGsNtosDy8ShsIYF.jpg",
    trailer: "https://www.youtube.com/watch?v=vw61gCe2oqI"
  },
  {
    title: "Ready Player One",
    year: "2018",
    duration: "2h 20m",
    rating: "7.4",
    available: "Netflix",
    poster: "https://image.tmdb.org/t/p/w500/pU1ULUq8D3iRxl1fdX2lZIzdHuI.jpg",
    trailer: "https://www.youtube.com/watch?v=cSp1dM2Vj48"
  },
  {
    title: "Oblivion",
    year: "2013",
    duration: "2h 4m",
    rating: "7.0",
    available: "Netflix",
    poster: "https://image.tmdb.org/t/p/w500/eO3r38fwnhb58M1YgcjQBd3VNcp.jpg",
    trailer: "https://www.youtube.com/watch?v=XmIIgE7eSak"
  },
  {
    title: "Passengers",
    year: "2016",
    duration: "1h 56m",
    rating: "7.0",
    available: "Netflix",
    poster: "https://www.themoviedb.org/t/p/original/vjgwnupjdG21Km86G9dAepPbMGO.jpg",
    trailer: "https://www.youtube.com/watch?v=7BWWWQzTpNU"
  }

]

};

const moodMovies = {

Happy: [
{
title:"Little Miss Sunshine",
year:"2006",
duration:"1h 41m",
rating:"7.8",
available:"Netflix",
poster:"https://image.tmdb.org/t/p/w500/r7kLKvHbTP0NDyKlFiXMdmSzMc7.jpg",
trailer:"https://www.youtube.com/watch?v=wvwVkllXT80"
},

{
title:"Paddington",
year:"2014",
duration:"1h 35m",
rating:"7.3",
available:"Netflix",
poster:"https://image.tmdb.org/t/p/w500/wpchRGhRhvhtU083PfX2yixXtiw.jpg",
trailer:"https://www.youtube.com/watch?v=7bZf8g8q1xQ"
},

{
title:"School of Rock",
year:"2003",
duration:"1h 49m",
rating:"7.2",
available:"Netflix",
poster:"https://image.tmdb.org/t/p/w500/95igCO3V1ZHy3dUfAMKzsUMqdkj.jpg",
trailer:"https://www.youtube.com/watch?v=3PsUJFEBC74"
},

{
title:"The Secret Life of Walter Mitty",
year:"2013",
duration:"1h 54m",
rating:"7.3",
available:"Disney+",
poster:"https://image.tmdb.org/t/p/w500/iAo1hlzsPV9XpYcLQp6Ud065tGO.jpg",
trailer:"https://www.youtube.com/watch?v=QD6cy4PBQPI"
},

{
title:"About Time",
year:"2013",
duration:"2h 3m",
rating:"7.8",
available:"Netflix",
poster:"https://upload.wikimedia.org/wikipedia/en/7/7c/About_Time_%282013_film%29_Poster.jpg",
trailer:"https://www.youtube.com/watch?v=T7A810duHvw"
},

{
title:"Crazy Rich Asians",
year:"2018",
duration:"2h 1m",
rating:"6.9",
available:"Netflix",
poster:"https://m.media-amazon.com/images/M/MV5BMTYxNDMyOTAxN15BMl5BanBnXkFtZTgwMDg1ODYzNTM@._V1_.jpg",
trailer:"https://www.youtube.com/watch?v=ZQ-YX-5b8v0"
},

{
title:"Yes Man",
year:"2008",
duration:"1h 44m",
rating:"6.8",
available:"Netflix",
poster:"https://image.tmdb.org/t/p/w500/16zVbgFLTUaUTG1wQHuGjfWNuDM.jpg",
trailer:"https://www.youtube.com/watch?v=r5X-hFf6Bwo"
},

{
title:"The Proposal",
year:"2009",
duration:"1h 48m",
rating:"6.7",
available:"Netflix",
poster:"https://image.tmdb.org/t/p/w500/aYlnDia7ldvqFUst1O5S8LZeM2S.jpg",
trailer:"https://www.youtube.com/watch?v=Z1B2b0Q0Q0Q"
}
],
Sad: [
    
  {
    title: "Atonement",
    year: "2007",
    duration: "2h 3m",
    rating: "7.8",
    available: "Netflix",
    poster: "https://m.media-amazon.com/images/M/MV5BZmQ5ZjZlMzMtODA1ZS00NTNiLWIzOTYtOTQyYjQ2YWQxMTA1XkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg",
    trailer: "https://www.youtube.com/watch?v=DJAYH2C4WnE"
  },
  {
    title: "The Green Mile",
    year: "1999",
    duration: "3h 9m",
    rating: "8.6",
    available: "Netflix",
    poster: "https://image.tmdb.org/t/p/w500/velWPhVMQeQKcxggNEU8YmIo52R.jpg",
    trailer: "https://www.youtube.com/watch?v=Ki4haFrqSrw"
  },
  {
    title: "Hachi: A Dog's Tale",
    year: "2009",
    duration: "1h 33m",
    rating: "8.1",
    available: "Netflix",
    poster: "https://image.tmdb.org/t/p/w500/aYGmy0XzQsu4uYr07JVH6iLOnmZ.jpg",
    trailer: "https://www.youtube.com/watch?v=F8d8l7Z0g1Y"
  },
  {
    title: "Good Will Hunting",
    year: "1997",
    duration: "2h 6m",
    rating: "8.3",
    available: "Netflix",
    poster: "https://media.themoviedb.org/t/p/w500/z2FnLKpFi1HPO7BEJxdkv6hpJSU.jpg",
    trailer: "https://www.youtube.com/watch?v=ReIJ1lbL-Q8"
  },
  {
title:"My Sister’s Keeper",
year:"2009",
duration:"1h 49m",
rating:"7.4",
available:"Netflix",
poster:"https://m.media-amazon.com/images/S/pv-target-images/cf11200289e1a8f7bb0039df97aa2504657a4f79b7927e67551452916f5c0de4.jpg",
trailer:"https://www.youtube.com/watch?v=8R2F0lQx5xY"
},
{
title:"Schindler’s List",
year:"1993",
duration:"3h 15m",
rating:"9.0",
available:"Netflix",
poster:"https://image.tmdb.org/t/p/w500/sF1U4EUQS8YHUYjNl3pMGNIQyr0.jpg",
trailer:"https://www.youtube.com/watch?v=gG22XNhtnoY"
},
{
title:"The Pursuit of Happyness",
year:"2006",
duration:"1h 57m",
rating:"8.0",
available:"Netflix",
poster:"https://www.sonypictures.com/sites/default/files/styles/max_560x840/public/title-key-art/thepursuitofhappyness_onesheet_1400x2100.png",
trailer:"https://www.youtube.com/watch?v=DMOBlEcRuw8"
},
{
title:"Remember Me",
year:"2010",
duration:"1h 53m",
rating:"7.1",
available:"Netflix",
poster:"https://images.plex.tv/photo?size=large-720&scale=2&url=https%3A%2F%2Fmetadata-static.plex.tv%2F5%2Fgracenote%2F58a40c34a528f2ed7fc6240980137553.jpg",
trailer:"https://www.youtube.com/watch?v=7vg0b1F8k5k"
}
],

Excited: [

  {
    title: "Guardians of the Galaxy Vol. 3",
    year: "2023",
    duration: "2h 30m",
    rating: "7.9",
    available: "Disney+",
    poster: "https://www.themoviedb.org/t/p/original/zuZPq8Wz8IOYR4qU1oliTuDsjBT.jpg",
    trailer: "https://www.youtube.com/watch?v=u3V5KDHRQvk"
  },
  {
    title: "Fast & Furious 7",
    year: "2015",
    duration: "2h 17m",
    rating: "7.1",
    available: "Netflix",
    poster: "https://image.tmdb.org/t/p/original/jPFsjmFlTFmpIY41BP3C4sVYOKw.jpg",
    trailer: "https://www.youtube.com/watch?v=Skpu5HaVkOc"
  },
  {
    title: "Deadpool",
    year: "2016",
    duration: "1h 48m",
    rating: "8.0",
    available: "Disney+",
    poster: "https://image.tmdb.org/t/p/original/3E53WEZJqP6aM84D8CckXx4pIHw.jpg",
    trailer: "https://www.youtube.com/watch?v=ONHBaC-pfsk"
  },
  {
title:"Suicide Squad",
year:"2016",
duration:"2h 3m",
rating:"5.9",
available:"Netflix",
poster:"https://image.tmdb.org/t/p/original/7ipeXnga37Y9TX697AKRqx8h7Yw.jpg",
trailer:"https://www.youtube.com/watch?v=CmRih_VtVAs"
},
{
title:"Wonder Woman",
year:"2017",
duration:"2h 21m",
rating:"7.4",
available:"Netflix",
poster:"http://celebmafia.com/wp-content/uploads/2017/02/gal-gadot-wonder-woman-2017-posters-and-photos-8.jpg",
trailer:"https://www.youtube.com/watch?v=VSB4wGIdDwo"
},
  {
    title: "The Avengers",
    year: "2012",
    duration: "2h 23m",
    rating: "8.0",
    available: "Disney+",
    poster: "https://image.tmdb.org/t/p/w500/RYMX2wcKCBAr24UyPD7xwmjaTn.jpg",
    trailer: "https://www.youtube.com/watch?v=eOrNdBpGMv8"
  },
  {
    title: "Jurassic World",
    year: "2015",
    duration: "2h 4m",
    rating: "6.9",
    available: "Netflix",
    poster: "https://image.tmdb.org/t/p/w500/rhr4y79GpxQF9IsfJItRXVaoGs4.jpg",
    trailer: "https://www.youtube.com/watch?v=RFinNxS5KN4"
  },
  {
    title: "Black Panther",
    year: "2018",
    duration: "2h 14m",
    rating: "7.3",
    available: "Disney+",
    poster: "https://image.tmdb.org/t/p/w500/uxzzxijgPIY7slzFvMotPv8wjKA.jpg",
    trailer: "https://www.youtube.com/watch?v=xjDjIWPwcPU"
  }
],

Lonely: [

{
title:"Anna with an E",
year:"2017-2019",
type:"Series",
poster:"https://flxt.tmsimg.com/assets/p17155833_b_v13_aa.jpg",
trailer:"https://www.youtube.com/watch?v=S5qJXYNNINo"
},
{
title:"Inside Out 2",
year:"2024",
type:"Movie",
poster:"https://static1.srcdn.com/wordpress/wp-content/uploads/2024/03/inside-out-2-poster-showing-joy-and-the-other-emotions-squished-together.jpeg",
trailer:"https://www.youtube.com/watch?v=LEjhY15e6ZQ"
},
{
title:"Her",
year:"2013",
type:"Movie",
poster:"https://image.tmdb.org/t/p/original/70NBqsoTHo7fOwcK4urZEFaGOSw.jpg",
trailer:"https://www.youtube.com/watch?v=WzV6mXIOVl4"
},
{
title:"Lost in Translation",
year:"2003",
type:"Movie",
poster:"https://m.media-amazon.com/images/M/MV5BMTUxMzk0NDg1MV5BMl5BanBnXkFtZTgwNDg0NjkxMDI@._V1_FMjpg_UX1000_.jpg",
trailer:"https://www.youtube.com/watch?v=W6iVPCRflQM"
},
{
title:"The Perks of Being a Wallflower",
year:"2012",
type:"Movie",
poster:"https://static1.srcdn.com/wp-content/uploads/2023/05/perks-of-being-a-wallflower-poster.jpeg",
trailer:"https://www.youtube.com/watch?v=n5rh7O4IDc0"
},
{
title:"Manchester by the Sea",
year:"2016",
type:"Movie",
poster:"https://image.tmdb.org/t/p/original/jtH63rd7UFdNSeVWXEXiul616Ls.jpg",
trailer:"https://www.youtube.com/watch?v=gsVoD0pT2hg"
},
{
title:"The Drama",
year:"2026",
type:"Movie",
poster:"https://assets-in.bmscdn.com/iedb/movies/images/mobile/thumbnail/xlarge/the-drama-et00486484-1770882616.jpg",
trailer:"TBA"
},
{
title:"Taxi Driver",
year:"1976",
type:"Movie",
poster:"https://static1.colliderimages.com/wordpress/wp-content/uploads/2023/11/taxi-driver-poster.jpg",
trailer:"https://www.youtube.com/watch?v=cujiHDeqnHY"
},
],

Relaxed: [
   
{
title:"Midnight in Paris",
year:"2011",
type:"Movie",
genre:"Romance, Fantasy",
poster:"https://www.sonypictures.com/sites/default/files/styles/max_560x840/public/chameleon/title-movie/454872_MIDNIGHT%20IN%20PARIS_1400x2100_English%20(US).jpg",
trailer:"https://www.youtube.com/watch?v=atLg2wQQxvU"
},
{
title:"Luck",
year:"2022",
type:"Movie",
genre:"Animation, Fantasy",
poster:"https://images.plex.tv/photo?size=medium-360&scale=2&url=https://metadata-static.plex.tv/3/gracenote/30c738199d6a65d464b9b8d1a4b1b7b5.jpg",
trailer:"https://www.youtube.com/watch?v=xSG5UX0EQVg"
},
{
title:"It Ends With Us",
year:"2024",
type:"Movie",
genre:"Romance, Drama",
poster:"https://s3.amazonaws.com/nightjarprod/content/uploads/sites/261/2024/07/17125931/cSMdFWmajaX4oUMLx7HEDI84GkP-scaled.jpg",
trailer:"https://www.youtube.com/watch?v=6Uo1j6Z0mQ8"
},
{
title:"Flipped",
year:"2010",
type:"Movie",
genre:"Romance, Comedy, Drama",
poster:"https://images.plex.tv/photo?size=medium-240&scale=2&url=https://metadata-static.plex.tv/3/gracenote/3988adf7ef4fd5ad41c80c3288faafc4.jpg",
trailer:"https://www.youtube.com/watch?v=FqJ7mC2X7k8"
},
{
title:"My Neighbor Totoro",
year:"1988",
type:"Movie",
genre:"Animation, Fantasy, Family",
poster:"https://www.tallengestore.com/cdn/shop/products/MyNeighborTotoro-StudioGhibli-JapanaeseAnimatedMoviePoster_5a3f7231-6098-4edb-8bd8-fc0cda71e676.jpg?v=1690844927",
trailer:"https://www.youtube.com/watch?v=92a7Hj0ijLs"
},
{
title:"Paterson",
year:"2016",
type:"Movie",
genre:"Drama",
poster:"https://m.media-amazon.com/images/M/MV5BMTUzODA4Nzk0OF5BMl5BanBnXkFtZTgwNzE1MDIwMDI@._V1_.jpg",
trailer:"https://www.youtube.com/watch?v=8lQp8h9h5yQ"
},
{
title:"Mamma Mia!",
year:"2008",
type:"Movie",
genre:"Comedy, Romance, Musical",
poster:"https://www.themoviedb.org/t/p/original/iaMCKqXXdUA3P98Piz3RAs4QTx6.jpg",
trailer:"https://www.youtube.com/watch?v=8RBNHdG35WY"
},
{
title:"Legally Blonde",
year:"2001",
type:"Movie",
genre:"Comedy",
poster:"https://image.tmdb.org/t/p/original/9ohlMrJHQqKhfUKh7Zr3JQqHNLZ.jpg",
trailer:"https://www.youtube.com/watch?v=vWOHwI_FgAo"
}
],

Emotional: [
   
  {
    title: "Your Name",
    year: "2016",
    duration: "1h 52m",
    rating: "8.4",
    available: "Netflix",
    poster: "https://image.tmdb.org/t/p/w500/q719jXXEzOoYaps6babgKnONONX.jpg",
    trailer: "https://www.youtube.com/watch?v=xU47nhruN-Q"
  },
  {
    title: "Coco",
    year: "2017",
    duration: "1h 45m",
    rating: "8.4",
    available: "Disney+",
    poster: "https://image.tmdb.org/t/p/w500/gGEsBPAijhVUFoiNpgZXqRVWJt2.jpg",
    trailer: "https://www.youtube.com/watch?v=Ga6RYejo6Hk"
  },
  {
  title: "Breathe",
  year: "2017",
  duration: "1h 58m",
  rating: "7.1",
  available: "Various / rent",
  poster: "https://image.tmdb.org/t/p/original/khegT9B5yqoTuT4RrYssfV8gE1m.jpg",
  trailer: "https://www.youtube.com/results?search_query=Breathe+2017+trailer"
},
{
  title: "The Call of the Wild",
  year: "2020",
  duration: "1h 40m",
  rating: "6.7",
  available: "Disney+ / rent (varies by region)",
  poster: "https://lumiere-a.akamaihd.net/v1/images/image_9b33376c.jpeg?region=0,0,1400,2100",
  trailer: "https://www.youtube.com/results?search_query=The+Call+of+the+Wild+2020+trailer"
},
{
title:"Aftersun",
year:"2022",
duration:"1h 42m",
rating:"7.7",
available:"Mubi / Apple TV",
poster:"https://images07.kaleidescape.com/transformed/covers/1134x1624s/436/43682166.jpg",
trailer:"https://www.youtube.com/watch?v=G9j9X1X6V9Q"
},
{
title:"A Star Is Born",
year:"2018",
duration:"2h 16m",
rating:"7.6",
available:"Netflix / HBO Max (tergantung region)",
poster:"https://www.kino-zeit.de/sites/default/files/styles/plakat/public/2018-06/a-star-is-born.jpg",
trailer:"https://www.youtube.com/watch?v=4-tcHHyy1Sg"
},
{
title:"Room",
year:"2015",
duration:"1h 58m",
rating:"8.1",
available:"Apple TV / Amazon Prime",
poster:"https://image.tmdb.org/t/p/original/pCURNjeomWbMSdiP64gj8NVVHTQ.jpg",
trailer:"https://www.youtube.com/watch?v=E_Ci-pAL4eE"
},
{
title:"CODA",
year:"2021",
duration:"1h 51m",
rating:"8.0",
available:"Apple TV+",
poster:"https://image.tmdb.org/t/p/original/jpgbZtjs5KcPPiZm3K5PrFLpElK.jpg",
trailer:"https://www.youtube.com/watch?v=0pmfrE1YL4I"
}
],

Motivated: [
    
{
title:"A Beautiful Mind",
year:"2001",
duration:"2h 15m",
rating:"8.2",
available:"Netflix / Apple TV",
poster:"https://image.tmdb.org/t/p/original/zwzWCmH72OSC9NA0ipoqw5Zjya8.jpg",
trailer:"https://www.youtube.com/watch?v=9wZM7CQY130"
},
{
title:"The Shawshank Redemption",
year:"1994",
duration:"2h 22m",
rating:"9.3",
available:"Netflix / Prime Video",
poster:"https://image.tmdb.org/t/p/original/q6y0Go1tsGEsmtFryDOJo3dEmqu.jpg",
trailer:"https://www.youtube.com/watch?v=6hB3S9bIaco"
},
{
title:"Rocky",
year:"1976",
duration:"2h",
rating:"8.1",
available:"Prime Video",
poster:"https://image.tmdb.org/t/p/original/hEjK9A9BkNXejFW4tfacVAEHtkn.jpg",
trailer:"https://www.youtube.com/watch?v=3VUblDwa648"
},
{
title:"Enola Holmes",
year:"2020",
duration:"2h 3m",
rating:"6.6",
available:"Netflix",
poster:"https://image.tmdb.org/t/p/original/riYInlsq2kf1AWoGm80JQW5dLKp.jpg",
trailer:"https://www.youtube.com/watch?v=1d0Zf9sXlHk"
},
{
title:"The Devil Wears Prada",
year:"2006",
duration:"1h 49m",
rating:"6.9",
available:"Disney+ / Star / Apple TV",
poster:"https://image.tmdb.org/t/p/original/u6QBDGUCOEMRekna95ip2MxplbQ.jpg",
trailer:"https://www.youtube.com/watch?v=XTDSwAxlNhc"
},
{
title:"Feel the Beat",
year:"2020",
duration:"1h 49m",
rating:"6.3",
available:"Netflix",
poster:"https://image.tmdb.org/t/p/original/wXBxd34dFEx6Wruf5Ch5jKLBxDi.jpg",
trailer:"https://www.youtube.com/watch?v=z7t2C2h3z9k"
},
{
title:"Marty Supreme",
year:"2025",
duration:"Unknown",
rating:"TBA",
available:"TBA",
poster:"https://static0.srcdn.com/wp-content/uploads/sharedimages/2025/12/marty-supreme-poster.jpg",
trailer:"https://www.youtube.com/watch?v=placeholder"
},
{
title:"Soul",
year:"2020",
duration:"1h 40m",
rating:"8.0",
available:"Disney+",
poster:"https://image.tmdb.org/t/p/original/eAi5NjSqxfZCy9mZ9NH6bus2my6.jpg",
trailer:"https://www.youtube.com/watch?v=xOsLIiBStEs"
},

],

Heartbroken: [

{
title:"500 Days of Summer",
year:"2009",
duration:"1h 35m",
rating:"7.7",
available:"Netflix",
poster:"https://image.tmdb.org/t/p/original/mKrdarFQ6H4E9HR02YiubLABXSZ.jpg",
trailer:"https://www.youtube.com/watch?v=PsD0NpFSADM"
}, 
{
title:"Blue Valentine",
year:"2010",
duration:"1h 52m",
rating:"7.3",
available:"Netflix",
poster:"https://image.tmdb.org/t/p/original/okblnnauvcOkeaG6R9HFdoQ9jj5.jpg",
trailer:"https://www.youtube.com/watch?v=aILx69WrRhQ"
},
{
title:"Marriage Story",
year:"2019",
duration:"2h 17m",
rating:"7.9",
available:"Netflix",
poster:"https://m.media-amazon.com/images/M/MV5BZGVmY2RjNDgtMTc3Yy00YmY0LTgwODItYzBjNWJhNTRlYjdkXkEyXkFqcGdeQXVyMjM4NTM5NDY@._V1_.jpg",
trailer:"https://www.youtube.com/watch?v=BHi-a1n8t7M"
},
{
title:"Past Lives",
year:"2023",
duration:"1h 46m",
rating:"7.8",
available:"Cinema",
poster:"https://image.tmdb.org/t/p/original/dvvYHDjrMZVdOUWOiPCLtR45AlM.jpg",
trailer:"https://www.youtube.com/watch?v=kA244xewjcI"
},
{
title:"All the Bright Places",
year:"2020",
duration:"1h 48m",
rating:"6.6",
available:"Netflix",
poster:"https://image.tmdb.org/t/p/original/4SafxuMKQiw4reBiWKVZJpJn80I.jpg",
trailer:"https://www.youtube.com/watch?v=zA3wY4k5h4o"
},
{
title:"The Greatest Hits",
year:"2024",
duration:"1h 34m",
rating:"6.4",
available:"Hulu",
poster:"https://m.media-amazon.com/images/M/MV5BMzhlODdmMjEtZDIxMC00ZDE5LWJkNzgtMDMwMDYyY2Q5ZDZlXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg",
trailer:"https://www.youtube.com/watch?v=V6H3v6lX2kQ"
},

{
title:"Eternal Sunshine of the Spotless Mind",
year:"2004",
duration:"1h 48m",
rating:"8.3",
available:"Netflix",
poster:"https://image.tmdb.org/t/p/original/xtAFddnDZD7E5tKHo99u4Ca1rdi.jpg",
trailer:"https://www.youtube.com/watch?v=rb9a00bXf-U"
},

{
title:"A Walk to Remember",
year:"2002",
duration:"1h 41m",
rating:"7.3",
available:"Netflix",
poster:"https://image.tmdb.org/t/p/original/ckmcWwINzZgUR35i0NTrI6rAwps.jpg",
trailer:"https://www.youtube.com/watch?v=k3B2XBcp7vA"
},
],
};

// ================= ELEMENTS =================
const typeSelect = document.getElementById("typeSelect");
const categorySelect = document.getElementById("categorySelect");
const result = document.getElementById("movie-results");
const magicText = document.getElementById("magic-text");

if(!typeSelect || !categorySelect || !result) return;

// ================= CATEGORY =================
function updateCategory(){

const list =
typeSelect.value === "genre"
? genres
: moods;

categorySelect.innerHTML = "";

const firstOption = document.createElement("option");

firstOption.value = "";
firstOption.textContent = "Choose Category";
firstOption.disabled = true;
firstOption.selected = true;

categorySelect.appendChild(firstOption);

list.forEach(item => {

const option = document.createElement("option");

option.value = item;
option.textContent = item;

categorySelect.appendChild(option);

});

}

typeSelect.addEventListener("change", updateCategory);

updateCategory();

// ================= FIND MOVIES =================
window.findMovies = function(){

const type = typeSelect.value;

const category = categorySelect.value;

if(!category){
alert("Please select category");
return;
}

const movies =
type === "genre"
? genreMovies[category]
: moodMovies[category];

result.innerHTML = "";

magicText.innerText =
"Here are your recommendations ✨";

if(!movies || movies.length === 0){

result.innerHTML =
"<p style='color:white'>No movies found</p>";

return;

}

movies.forEach(movie => {

result.innerHTML += `

<div class="movie-card">

<img src="${movie.poster}">

<div class="movie-info">

<h3>${movie.title}</h3>

<p>⭐ ${movie.rating}</p>

<button
class="watch-btn"
onclick='addToWatchlist(
"${movie.title}",
"${movie.poster}",
"${movie.rating}"
)'>

⭐ Add Watchlist

</button>

<button
class="detail-btn"
onclick='openDetails(
"${movie.title}",
"${movie.poster}",
"${movie.rating}",
"${movie.year}",
"${movie.duration}",
"${movie.available}",
"${movie.trailer}"
)'>

✨ View Details

</button>

</div>

</div>

`;

});

};

// ================= DETAILS =================
window.openDetails = function(
title,
poster,
rating,
year,
duration,
available,
trailer
){

document.getElementById("details-content").innerHTML = `

<div class="movie-hero">

<div class="movie-backdrop"
style="background-image:url('${poster}')">

<div class="movie-overlay"></div>

</div>

<div class="movie-detail-container">

<div class="movie-left">

<img src="${poster}" class="movie-big-poster">

</div>

<div class="movie-right">

<p class="movie-type">
Movie
</p>

<h1 class="movie-title-big">
${title}
</h1>

<div class="movie-tags">

<span>${year}</span>
<span>${duration}</span>
<span>⭐ ${rating}</span>

</div>

<div class="movie-platforms">

<p class="platform-label">

WATCH ${title.toUpperCase()} ON

</p>

<div class="platform-list">

${available.split(",").map(platform => `

<a
href="https://www.google.com/search?q=Watch+${title}+on+${platform.trim()}"
target="_blank"
class="platform-link">

${platform.trim()}

</a>

`).join("")}

</div>

</div>

<p class="movie-description">

A cinematic movie experience filled with
action, emotion, and unforgettable moments.

</p>

<div class="movie-buttons">

<a href="${trailer}"
target="_blank"
class="watch-trailer-btn">

▶ Watch Trailer

</a>

<button
class="watchlist-detail-btn"
onclick='addToWatchlist(
"${title}",
"${poster}",
"${rating}"
)'>

⭐ Add Watchlist

</button>

</div>

</div>

</div>

</div>

`;

document.getElementById("details-modal").style.display =
"block";

};

// ================= CLOSE =================
window.closeDetails = function(){

document.getElementById("details-modal").style.display =
"none";

};

// ================= WATCHLIST =================
window.addToWatchlist = function(
title,
poster,
rating
){

let list =
JSON.parse(
localStorage.getItem("watchlist")
|| "[]"
);

if(list.some(m => m.title === title)){
alert("Already in watchlist");
return;
}

list.push({
title,
poster,
rating
});

localStorage.setItem(
"watchlist",
JSON.stringify(list)
);

alert("Added ⭐");

};

});