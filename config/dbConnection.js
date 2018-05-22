
module.exports = function (mongoose) {
  mongoose.connect(process.env.MONGO_DB)
  var db = mongoose.connection;
  db.on('error', console.error.bind(console, 'connection error:'));
  db.once('open', function () {
    console.log('connected to DB!')
  });

  //mongoose promise for es6
  mongoose.Promise = Promise;
}