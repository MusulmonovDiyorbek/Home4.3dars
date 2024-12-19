const fs = require('fs');
const path = require('path');
const filePath = path.join(__dirname, 'cars.json');
function createFolders(users) {
  users.forEach(folder => {
    const folderPath = path.join(__dirname, folder);
    if (!fs.existsSync(folderPath)) fs.mkdirSync(folderPath);
  });
}
function addCarData(car) {
  const data = fs.existsSync(filePath) ? JSON.parse(fs.readFileSync(filePath, 'utf8')) : [];
  data.push(car);
  fs.writeFileSync(filePath, JSON.stringify(data, null, 2));
}
function getAllCars() {
  return fs.existsSync(filePath) ? JSON.parse(fs.readFileSync(filePath, 'utf8')) : [];
}
function deleteCarById(id) {
  if (!fs.existsSync(filePath)) return;
  const data = JSON.parse(fs.readFileSync(filePath, 'utf8'));
  const updatedData = data.filter(car => car.id !== id);
  fs.writeFileSync(filePath, JSON.stringify(updatedData, null, 2));
}
createFolders(['user1', 'user2']); 
addCarData({ id: 1, model: 'BMWcp5', price: 100000 });
addCarData({ id: 2, model: 'MClaren720s', price: 2300000 });
console.log('Hamma malumotlar:', getAllCars()); 
deleteCarById(1);
console.log('Yangi malumotlar:', getAllCars());