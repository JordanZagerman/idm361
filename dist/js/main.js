function checkFirstLaunch() {
  // Check to see if local storage is supported
  if (typeof (Storage) !== "undefined") {
    // Browser supports local storage
    var firstLaunch = localStorage.getItem('firstLaunch');
    console.log(firstLaunch);

    // Check if user has downloaded and opened the app
    if (firstLaunch == 'true') {
      return;
    }

    // If first time launching app, update item from storage and redirect to landing page
    localStorage.setItem('firstLaunch', true);
    // Goal is to take current arrays and convert them into local storage strings

    var phrases = [
      "TSA Precheck Meeting",
      "Conference call",
      "Left the gun on the porch",
      "Left potatoes in the oven",
      "Band practice",
      "Got called into work",
      "Gotta go to a blood drive",
      "Having an anxiety attack",
      "Migraine",
      "Got too high, need to go home",
      "Gotta get home to turn off the slow cooker",
      "Someone is locked out of a residence you have a key to",
      "I’ve soiled myself",
      "Gotta go participate in an intervention for a family friend",
      "Gotta post bail for _______",
      "Left my debit card in the atm",
      "Need to go get a typhoid shot for an upcoming trip"
    ];

    var laterPhrases = [
      "Waiting on a call from a friend of mine in crisis",
      "My contacts are getting really blurry",
      "Gotta sell someone a painting around ##:##. It might end up getting pushed back though",
      "Family issues",
      "I gotta work on a project that’s due tomorrow morning for work/school"
    ];

    var flakePhrases = [
      "My dog is throwing up",
      "I have to do work",
      "I totally forgot we had plans",
      "My hot water isn’t working",
      "I can’t find my keys",
      "I’m locked out",
      "I’m too upset about the state of the country to go out into the world",
      "I saw a photo of one of  my exes on IG and just need to be alone right now",
      "I totally forgot about *insert fictional relative* coming into town and I have to clean the house",
      "I pulled my calf muscle this morning",
      "I just threw up all over the apartment",
      "I’m feeling really emotional about The Color Purple and just need to be alone right now",
      "I have to wait for the internet technician to come over and they still haven’t shown",
      "I threw my hip out",
      "I watched an old episode of Room Raiders and it made me want to backlight my sheets and so I did and now I think I need to reevaluate some things",
      "I have a really terrible headache. Let me lie down and see if I feel better",
      "I have a really terrible headache and I know you’re going to make it worse",
      "I’m in the middle of a really invigorating Tinder convo and I honestly think they could be the one",
      "It’s too cold outside"
    ];

    // Convert object to string for local storage
    // Flattening array into string
    phrasesArray = JSON.stringify(phrases);

    // Store array of objects
    localStorage.setItem('phrases', phrasesArray);

    // Later Phrases
    LaterPhrasesArray = JSON.stringify(laterPhrases);

    // Store array of objects
    localStorage.setItem('laterPhrases', LaterPhrasesArray);


    flakePhrasesArray = JSON.stringify(flakePhrases);

    // Store array of objects
    localStorage.setItem('flakePhrases', flakePhrasesArray);


  } else {
    // Sorry! No Web Storage support..
    alert('This browser does NOT support local storage');
  }
}

function loadHomePage() {
  checkFirstLaunch();
  var phrases = this.loadData("phrases");
  var laterPhrases = this.loadData("laterPhrases");
  var flakePhrases = this.loadData("flakePhrases");
  // console.log(phrases);
  // console.log(laterPhrases);
  // console.log(flakePhrases);


  // Selecting the Id button 

  // Showing phrases
  var quoteEspace =
    document.getElementById("showPhrase");
  var quoteLaterEspace =
    document.getElementById("showLaterPhrase");
  var quoteFlakeEspace =
    document.getElementById("showFlakePhrase");

    var generateBtn = document.getElementById("generatorBtn");

    quoteEspace.innerHTML = this.getRandom(phrases);
    quoteLaterEspace.innerHTML = this.getRandom(laterPhrases);
    quoteFlakeEspace.innerHTML = this.getRandom(flakePhrases);


  // Generating phrases through Button

}

function loadData(key) {

  // Access local storage
  var itemArray = localStorage.getItem(key);
  console.log(itemArray);
  // Parse string
  var parsedArray = JSON.parse(itemArray);
  console.log(parsedArray);
  // Display random phrase

  return parsedArray;
}


function getRandom(arrayOfPhrases) {
  console.log("getRandom Called");
  var myPhrase = Math.floor(Math.random() * arrayOfPhrases.length);

  return arrayOfPhrases[myPhrase];
}