const mongoose = require('mongoose');
const Listing = require('./listings');
const faker = require('faker');

const imagesCollection = [
  'https://himm-images.s3-us-west-1.amazonaws.com/FEC+image+batch/1.jpg',
  'https://himm-images.s3-us-west-1.amazonaws.com/FEC+image+batch/2.jpg',
  'https://himm-images.s3-us-west-1.amazonaws.com/FEC+image+batch/3.jpg',
  'https://himm-images.s3-us-west-1.amazonaws.com/FEC+image+batch/4.jpg',
  'https://himm-images.s3-us-west-1.amazonaws.com/FEC+image+batch/5.jpg',
  'https://himm-images.s3-us-west-1.amazonaws.com/FEC+image+batch/6.jpg',
  'https://himm-images.s3-us-west-1.amazonaws.com/FEC+image+batch/7.jpg',
  'https://himm-images.s3-us-west-1.amazonaws.com/FEC+image+batch/8.jpg',
  'https://himm-images.s3-us-west-1.amazonaws.com/FEC+image+batch/9.jpg',
  'https://himm-images.s3-us-west-1.amazonaws.com/FEC+image+batch/10.jpg',
  'https://himm-images.s3-us-west-1.amazonaws.com/FEC+image+batch/11.jpg',
  'https://himm-images.s3-us-west-1.amazonaws.com/FEC+image+batch/12.jpg',
  'https://himm-images.s3-us-west-1.amazonaws.com/FEC+image+batch/13.jpg',
  'https://himm-images.s3-us-west-1.amazonaws.com/FEC+image+batch/14.jpg',
  'https://himm-images.s3-us-west-1.amazonaws.com/FEC+image+batch/15.jpg',
  'https://himm-images.s3-us-west-1.amazonaws.com/FEC+image+batch/16.jpg',
  'https://himm-images.s3-us-west-1.amazonaws.com/FEC+image+batch/17.jpg',
  'https://himm-images.s3-us-west-1.amazonaws.com/FEC+image+batch/18.jpg',
  'https://himm-images.s3-us-west-1.amazonaws.com/FEC+image+batch/19.jpg',
  'https://himm-images.s3-us-west-1.amazonaws.com/FEC+image+batch/19.jpg',
  'https://himm-images.s3-us-west-1.amazonaws.com/FEC+image+batch/20.jpg',
  'https://himm-images.s3-us-west-1.amazonaws.com/FEC+image+batch/20.jpg',
  'https://himm-images.s3-us-west-1.amazonaws.com/FEC+image+batch/21.jpg',
  'https://himm-images.s3-us-west-1.amazonaws.com/FEC+image+batch/22.jpg',
  'https://himm-images.s3-us-west-1.amazonaws.com/FEC+image+batch/23.jpg',
  'https://himm-images.s3-us-west-1.amazonaws.com/FEC+image+batch/24.jpg',
  'https://himm-images.s3-us-west-1.amazonaws.com/FEC+image+batch/25.jpg',
  'https://himm-images.s3-us-west-1.amazonaws.com/FEC+image+batch/26.jpg',
  'https://himm-images.s3-us-west-1.amazonaws.com/FEC+image+batch/27.jpg',
  'https://himm-images.s3-us-west-1.amazonaws.com/FEC+image+batch/28.jpg',
  'https://himm-images.s3-us-west-1.amazonaws.com/FEC+image+batch/29.jpg',
  'https://himm-images.s3-us-west-1.amazonaws.com/FEC+image+batch/30.jpg'
];

// randomly select an image
const getRandomImage = () => {
  const index = Math.floor(Math.random() * 30);
  return imagesCollection[index];
};

const listings = []
for(let i = 0; i < 30; i++) {
  const images= [];

  for(let i = 0; i < 15; i++) {
    images.push({
      url: getRandomImage(),
      description: faker.lorem.sentence()
    })
  }

 listings.push({ images })
}

console.log(listings)

Listing.insertMany(listings, err => {
  if(err) console.log(err);

  console.log('Successfully inserted data to DB...');
  mongoose.connection.close();
})
