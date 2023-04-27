//
// This defines three routes that our API is going to use.
//

   
 

var routes = function(app) {

  app.get("/api/v1/supportedgames/v7/checksupport", function(req, res) {
      
  var GameListURL = "https://raw.githubusercontent.com/HexerMaster1929/HexHub-V7/main/Games/SupportedGames";
   
 let PlaceID = req.query.placeid; // is the string "Jonathan Smith".
 
 //console.log(PlaceID);
  
    var SupportedGames = require("./supportedgames.json")
        
       // var SupportedGamesJSON = JSON.parse(SupportedGames)
        

//console.log(JSON.stringify(json));
    
   // getJSON(GameListURL,
//function(err, data) {
 // if (err !== null) {
  //   res.send("{Success : false}");
  //} else {
     //res.send(JSON.stringify(SupportedGames));
 // }
//});

 //let cols = Object.keys(jsonData[0]);
    
    // res.send(SupportedGames.hasOwnProperty(PlaceID));
 
 if (SupportedGames.hasOwnProperty(PlaceID)) {
 res.send("{Success : true, Supported : true}");
} else {
   res.send("{Success : true, Supported : false}");
};

     
     
         console.log("Received GET");
       });
  
  var getJSON = function(url, callback) {
    var XMLHttpRequest = require('xhr2');
    var xhr = new XMLHttpRequest();
    xhr.open('GET', url, true);
    xhr.responseType = 'json';
    xhr.onload = function() {
      var status = xhr.status;
      if (status === 200) {
        callback(null, xhr.response);
      } else {
        callback(status, xhr.response);
      }
    };
    xhr.send();
};
  
  app.get("/api/v1/okgames/cvt/GetServers", function(req, res) {
    
    let PlaceID = req.query.placeid; // is the string "Jonathan Smith".
    let FullServ = req.query.excludefull; // is the string "Jonathan Smith".
      
  var SLURL = "https://games.roblox.com/v1/games/" + PlaceID + "/servers/0?sortOrder=2&excludeFullGames=" + FullServ + "&limit=100";
   
// res.send("{Success : true, ServerList: " + SLURL + '}');
 
 //console.log(PlaceID);
    
    getJSON(SLURL,
function(err, data) {
  //if (err !== null) {
    //res.send("{Success : true, ServerList: " + JSON.stringify(data) + '}');
      res.send(JSON.stringify(data));
  //} else {
  // res.send('{Success : false, Error: ' + err + '}');
 // }
});
  
   


     
     
         console.log("Received GET");
       });
   
  
  // List Games
  
  app.get("/api/v1/supportedgames/v7/list", function(req, res) {
      
     
     res.send("asa");
       console.log("Received GET");
     });
   
   
       
  // ----------------------------------------------------------------------------
  
  // Keysystem
 
 
   

 app.get("/api/v1/Keysystem/v7/validate", function(req, res) {
   
  let Key = req.query.Key;
      
     
     res.send("asa");
       console.log("Received GET");
     });
  
   
   








};   
   module.exports = routes;