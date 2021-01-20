const fs = require('fs');

fs.watch('./target1.txt', (eventType, filename) => {
    console.log(eventType, filename);
});
