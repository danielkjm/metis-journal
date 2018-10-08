'use strict';

const { db, Entry } = require('./index');

const entries = [
  {
    title: 'I love comedy',
    author: 'Jerry Seinfeld',
    date: 'December 15, 1994',
    entry:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Aenean euismod elementum nisi quis eleifend quam adipiscing vitae proin. Purus faucibus ornare suspendisse sed. Leo a diam sollicitudin tempor. Commodo ullamcorper a lacus vestibulum sed arcu. Arcu non odio euismod lacinia at. Elit scelerisque mauris pellentesque pulvinar. Eros donec ac odio tempor orci dapibus. Diam phasellus vestibulum lorem sed risus ultricies tristique nulla aliquet. Dui accumsan sit amet nulla facilisi morbi tempus. Feugiat in ante metus dictum at tempor commodo ullamcorper a. Sit amet aliquam id diam maecenas ultricies.'
  },
  {
    title: 'Computers Rock!',
    author: 'Bill Gates',
    date: 'October 5, 2011',
    entry:
      'Neque viverra justo nec ultrices dui sapien eget mi. Ornare lectus sit amet est placerat in egestas erat. Magnis dis parturient montes nascetur ridiculus. Fermentum leo vel orci porta non pulvinar. Facilisi etiam dignissim diam quis enim lobortis scelerisque. Facilisi etiam dignissim diam quis enim. Facilisi etiam dignissim diam quis enim lobortis scelerisque fermentum. Eget lorem dolor sed viverra ipsum nunc aliquet. Elit scelerisque mauris pellentesque pulvinar pellentesque habitant morbi tristique. Aliquet nec ullamcorper sit amet risus nullam eget felis. Proin sagittis nisl rhoncus mattis rhoncus urna. Pulvinar neque laoreet suspendisse interdum consectetur libero id faucibus nisl. Semper feugiat nibh sed pulvinar proin gravida hendrerit. Feugiat nisl pretium fusce id velit. Platea dictumst vestibulum rhoncus est pellentesque elit.'
  }
];

const seed = async () => {
  try {
    console.log('syncing db! \n');
    await db.sync({ force: true });

    const dbEntries = await Entry.bulkCreate(entries, {
      returning: true
    });
  } catch (err) {
    console.log(err);
  } finally {
    db.close();
  }
};

seed();

// {
