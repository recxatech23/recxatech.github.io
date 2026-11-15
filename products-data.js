/* RECXA TECH — EDIT THIS FILE TO UPDATE THE WEBSITE
   Products: copy a block, change the text, keep the commas.
   image: path to a photo in assets/products (or "" to show the icon).
   price "" = "Contact for price". available:false = shows "Join waitlist". */
const COMPANY={name:"Recxa Tech",phone:"01636000246",
facebook:"https://www.facebook.com/share/1SM1dDQxzM/?mibextid=wwXIfr",
instagram:"https://www.instagram.com/recxatech?obrf=MTZwOXFqcWNmc2Y1bA==",
location:"Bangladesh"};
const FOUNDER={name:"Farhan Saleh",title:"Founder & Lead Engineer",photo:"",
bio:"Farhan started Recxa Tech to make technology feel friendly. He designs the electronics, writes the firmware and shapes the enclosures himself, so every Recxa product is built end to end by people who care how it feels in your hand."};
/* Orbi photos shown in the Orbi section (the top of the page keeps the animated ring) */
const PHOTOS={gallery:["assets/products/orbi-2.jpg","assets/products/orbi-4.jpg","assets/products/orbi-3.jpg"]};
const COLORS=[{n:"Black & Red",b:"#1f1d2b",l:"#e5484d"},{n:"White & Purple",b:"#f4f1ff",l:"#8b5cf6"},{n:"Pink & Sky Blue",b:"#ff8fa3",l:"#7cc4ff"},{n:"Orange & Black",b:"#ff9a3c",l:"#1f1d2b"}];
const PRODUCTS=[
{id:"orbi",image:"assets/products/orbi-2.jpg",name:"Orbi Ring",cat:"Gadgets",status:"Available now",price:"900 BDT",available:true,icon:"",
 desc:"A portable, handy robotic key chain ring with a tiny screen and a big personality.",
 specs:["0.96\" OLED","500 mAh battery","Up to 5 days"],
 features:["Emotion faces and short greeting texts","Exciting mini games","Desktop mode: shows current weather and time","Customizable text, messages and faces","Attractive colors","Battery backup up to 5 days"]},
{id:"bot",image:"",name:"Cute Robots",cat:"Robots",status:"Coming soon",price:"",available:false,icon:"🤖",
 desc:"Small, friendly desk robots with personality, built to make people smile.",specs:["Expressive","Desk-sized"]},
{id:"drone",image:"",name:"Drones",cat:"Drones",status:"In development",price:"",available:false,icon:"🚁",
 desc:"Compact, smart drones for learning, filming and everyday problem solving.",specs:["Smart flight","Compact"]},
{id:"smart",image:"",name:"Smart Solution Devices",cat:"Gadgets",status:"In development",price:"",available:false,icon:"💡",
 desc:"Connected devices that automate the small things at home and work.",specs:["IoT","App control"]},
{id:"apps",image:"",name:"Software & Apps",cat:"Software",status:"Coming soon",price:"",available:false,icon:"📱",
 desc:"Apps and software that pair with our devices and solve real problems.",specs:["Mobile","Web"]}];
