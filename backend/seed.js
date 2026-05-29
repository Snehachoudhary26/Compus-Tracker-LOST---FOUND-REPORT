require('dotenv').config();
const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const User = require('./models/User');
const Item = require('./models/Item');

const USERS = [
  { name:'Priya Sharma', email:'priya@campus.edu', password:'123456', role:'Student' },
  { name:'Arjun Mehta', email:'arjun@campus.edu', password:'123456', role:'Student' },
  { name:'Rahul Verma', email:'rahul@campus.edu', password:'123456', role:'Teacher' },
  { name:'Kavya Reddy', email:'kavya@campus.edu', password:'123456', role:'Staff' },
  { name:'Sneha Joshi', email:'sneha@campus.edu', password:'123456', role:'Student' },
  { name:'Vikram Singh', email:'vikram@campus.edu', password:'123456', role:'Student' },
  { name:'Ananya Patel', email:'ananya@campus.edu', password:'123456', role:'Student' },
];

const ITEMS = [
  { type:'lost', userType:'Student', userName:'Priya Sharma', email:'priya@campus.edu', name:'Blue Backpack', category:'Clothing & Bags', description:'Navy blue Wildcraft backpack with laptop compartment and red zipper pull. Has name tag inside with phone number.', location:'Main Library, 2nd Floor', date:'2026-05-25', status:'pending' },
  { type:'found', userType:'Student', userName:'Arjun Mehta', email:'arjun@campus.edu', name:'Black Leather Wallet', category:'Accessories', description:'Black leather wallet with student ID card, 500 rupees cash and metro card inside. Found near gate 3.', location:'Cafeteria near Gate 3', date:'2026-05-25', status:'approved' },
  { type:'lost', userType:'Teacher', userName:'Rahul Verma', email:'rahul@campus.edu', name:'iPhone 13 Pro', category:'Electronics', description:'Space grey iPhone 13 Pro, cracked screen protector, black case with camera cutout. Lock screen photo is a dog.', location:'Faculty Canteen', date:'2026-05-24', status:'pending' },
  { type:'found', userType:'Staff', userName:'Kavya Reddy', email:'kavya@campus.edu', name:'AirPods Pro', category:'Electronics', description:'White AirPods Pro in white charging case. Left earbud has small scratch. Found near gym entrance.', location:'Sports Complex, Gym Area', date:'2026-05-24', status:'pending' },
  { type:'lost', userType:'Student', userName:'Sneha Joshi', email:'sneha@campus.edu', name:'Student ID Card', category:'Documents & ID', description:'RGPV University student ID card. Name: Sneha Joshi, Roll No: 2021CS045. Blue lanyard attached.', location:'Main Gate Security', date:'2026-05-23', status:'approved' },
  { type:'found', userType:'Student', userName:'Vikram Singh', email:'vikram@campus.edu', name:'Set of Keys', category:'Keys & Cards', description:'3 keys on a blue keychain with a small torch attached. Found outside CSE block.', location:'CSE Department Corridor', date:'2026-05-23', status:'pending' },
  { type:'lost', userType:'Student', userName:'Ananya Patel', email:'ananya@campus.edu', name:'Scientific Calculator', category:'Books & Stationery', description:'Casio FX-991ES Plus scientific calculator. Name written on back in permanent marker.', location:'Examination Hall B, Room 204', date:'2026-05-22', status:'pending' },
  { type:'found', userType:'Teacher', userName:'Rahul Verma', email:'rahul@campus.edu', name:'Prescription Glasses', category:'Accessories', description:'Black rectangular frame glasses in brown leather case. Found on reading room table.', location:'Library Reading Room', date:'2026-05-22', status:'approved' },
  { type:'lost', userType:'Student', userName:'Arjun Mehta', email:'arjun@campus.edu', name:'College ID + Bus Pass', category:'Documents & ID', description:'College ID bundled with monthly bus pass in blue plastic holder. Very urgent needed.', location:'Bus Stand near Main Gate', date:'2026-05-21', status:'pending' },
  { type:'found', userType:'Student', userName:'Priya Sharma', email:'priya@campus.edu', name:'Milton Water Bottle', category:'Other', description:'Red 1 litre Milton steel water bottle with college sticker on it. Found after basketball practice.', location:'Basketball Court', date:'2026-05-21', status:'pending' },
  { type:'lost', userType:'Student', userName:'Kavya Reddy', email:'kavya@campus.edu', name:'Anatomy Textbook', category:'Books & Stationery', description:'Gray\'s Anatomy textbook 42nd edition. Has yellow highlights and sticky notes throughout all chapters.', location:'Medical Block, Seminar Hall', date:'2026-05-20', status:'approved' },
  { type:'found', userType:'Student', userName:'Vikram Singh', email:'vikram@campus.edu', name:'boAt Earphones', category:'Electronics', description:'boAt Bassheads 100 wired earphones, black color, in original pouch. Found on computer lab desk.', location:'Computer Lab 3, CS Building', date:'2026-05-20', status:'pending' },
];

async function seed(){
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log('✅ Connected to MongoDB');
    await User.deleteMany({});
    await Item.deleteMany({});
    console.log('🗑️  Cleared existing data');
    for(const u of USERS){
      const hashed = await bcrypt.hash(u.password, 10);
      await User.create({...u, password: hashed});
    }
    console.log('✅ Users seeded:', USERS.length);
    await Item.insertMany(ITEMS);
    console.log('✅ Items seeded:', ITEMS.length);
    console.log('\n🎉 Login credentials:');
    console.log('Student: priya@campus.edu / 123456');
    console.log('Teacher: rahul@campus.edu / 123456');
    await mongoose.disconnect();
    process.exit(0);
  } catch(e) {
    console.error(e);
    process.exit(1);
  }
}
seed();
