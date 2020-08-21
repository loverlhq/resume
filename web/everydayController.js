
var path = new Map();

function editEveryday(request , response) {
  request.on("data", function (data) {
      console.log(data);
  })
}

path.set("/editEveryday", editEveryday());

module.exports.path = path;