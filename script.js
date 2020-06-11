console.log("hello script js");

var clickHappened = function(currentInput1,currentInput2){
  console.log("selection: "+currentInput1 );
  console.log("input: "+currentInput2 );

  //Get array of items
  var items = getItems( products );

  // var resArray = getItemsByBrand(items,"Sony");
  // var resArray = getItemsByAuthor(items,"aaaaa");
  // var resArray = getAvailableProducts(items);
  // console.log(resArray);
  var msg="";

  switch(currentInput1){
    case "1": //number of product items
      msg = "Number of product items: "+items.length;
    break;
    case "2":
      msg = "Countries: " + getCountries(items);
    break;
    case "3":
      msg = "Total inventory price: " + getInventoryPrice(items);
    break;
  }

  // if (resArray.length==0){
  //   msg = "no results found";
  // }

  return msg;
};

var getItems = function(products){
  return products.items;
}

var getInventoryPrice = function(items){
  var result = 0;
  for(var i=0; i<items.length; i++){
    for(var j=0; j<items[i].product.inventories.length; j++){
      if (items[i].product.inventories[j].availability=="inStock"){
      result+=items[i].product.inventories[j].price
    }
  }
}
  return result;
}

var getCountries = function(items){
  var resArray = [];
  for(var i=0; i<items.length; i++){
      resArray.push(items[i].product.country);
  }
  return resArray;
}

var getItemsByBrand = function(items,brand){
  var resArray = [];
  for(var i=0; i<items.length; i++){
    if (items[i].product.brand==brand){
      resArray.push(items[i]);
    }
  }
  return resArray;
}

var getItemsByAuthor = function(items,author){
  var resArray = [];
  for(var i=0; i<items.length; i++){
    if (items[i].product.author.name==author){
      resArray.push(items[i]);
    }
  }
  return resArray;
}

var getAvailableProducts = function(items){
  var resArray = [];
  for(var i=0; i<items.length; i++){
    for(var j=0; j<items[i].product.inventories.length; j++){
      if (items[i].product.inventories[j].availability=="inStock"){
      resArray.push(items[i]);
    }
  }
}
   return resArray;
}

//Event listeners
document.querySelector('#button').addEventListener('click', function(event){
  console.log("event listener triggered");
  var currentInput1 = document.querySelector('#option').value;
  var currentInput2 = document.querySelector('#input2').value;
  var output = clickHappened(currentInput1,currentInput2);
  display( output );
});
var display = function( data ){
  var output = document.querySelector('#output');
  output.innerText = data;
}

