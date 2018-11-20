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
  
  function getRandom() {
    console.log("getRandom Called");
    var myPhrase = Math.floor(Math.random() * phrases.length);
    return phrases[myPhrase];
  }
  
  // Selecting the Id button 
  var generateBtn = document.getElementById("generatorBtn");
  
  // Showing phrases
  var quoteEspace =
    document.getElementById("showPhrase");
  var quoteLaterEspace =
    document.getElementById("showLaterPhrase");
  var quoteFlakeEspace =
    document.getElementById("showFlakePhrase");
  
  // Generating phrases
  generateBtn.onclick = function () {
    quoteEspace.innerHTML = getRandom();
    quoteLaterEspace.innerHTML = getRandom();
    quoteFlakeEspace.innerHTML = getRandom();
  }
  
  
  
  // Showing phrases
  var quoteEspace = document.getElementById("showPhrase");
  var quoteLaterEspace = document.getElementById("showLaterPhrase");
  var quoteFlakeEspace = document.getElementById("showFlakePhrase");
  
  
  quoteEspace.innerHTML = getRandom();
  quoteLaterEspace.innerHTML = getRandom();
  quoteFlakeEspace.innerHTML = getRandom();