
// ## Helper functions
function showSlide(id) {
  // Hide all slides
	$(".slide").hide();
	// Show just the slide we want to show
	$("#"+id).show();
}

function showText(id) {
  // Hide all slides
	$(".text").hide();
	// Show just the slide we want to show
	$("#"+id).show();
}


function showAgent(id, orient) {
	$(".agent").hide();
    $(".point_agent_l").hide();
    $(".point_agent_r").hide();
    $(".look_agent_l").hide();
    $(".look_agent_r").hide();
	$("#"+id+"_"+orient).show();
}

function hideAgent() {
  // Hide all slides
	$(".agent").hide();
}


function choiceAgent(id,orient) {
  // Hide all slides
	$(".agent").hide();
	// Show just the agent we want to show
	$("#"+id+"_look_choice_"+orient).show();
}

function sourceRightFruit(a) {
        document.getElementById("fruit_r").src=a;
    };

function sourceRightFruit2(a) {
        document.getElementById("fruit_r2").src=a;
    };

function sourceLeftFruit(b) {
        document.getElementById("fruit_l").src=b;
    };

function sourceLeftFruit2(b) {
        document.getElementById("fruit_l2").src=b;
    };

function showRightFruit() {
    document.getElementById('fruit_r').style.visibility='visible';
      };

function showRightFruit2() {
    document.getElementById('fruit_r2').style.visibility='visible';
      };

function hideRightFruit() {
    document.getElementById('fruit_r').style.visibility='hidden';
      };

function showLeftFruit() {
    document.getElementById('fruit_l').style.visibility='visible';
      };

function showLeftFruit2() {
    document.getElementById('fruit_l2').style.visibility='visible';
      };

function hideLeftFruit() {
    document.getElementById('fruit_l').style.visibility='hidden';
      };

function showEat(id) {
	$(".agent_eat").hide();
	$("#"+id+"_eat").show();
};

function showBarrierRight () {
	$(".barrier_l").hide();
	$("#barrier_r").show();
};

function showBarrierLeft () {
	$(".barrier_r").hide();
	$("#barrier_l").show();
};

function hideBarrier () {
	$(".barrier_r").hide();
	$(".barrier_l").hide();
};


function hideBarrierChoice () {
	$(".barrier_rc").hide();
	$(".barrier_lc").hide();
};


function showBarrierRightChoice () {
	$(".barrier_lc").hide();
	$("#barrier_rc").show();
};

function showBarrierLeftChoice () {
	$(".barrier_rc").hide();
	$("#barrier_lc").show();
};


function choiceLeftFruit(a) {
        document.getElementById("choiceFruit_l").src=a;
    };

function choiceLeftFruit2(a) {
        document.getElementById("choiceFruit_l2").src=a;
    };

function choiceRightFruit(a) {
        document.getElementById("choiceFruit_r").src=a;
    };

function choiceRightFruit2(a) {
        document.getElementById("choiceFruit_r2").src=a;
    };

function getTime1() {
    return startTime = (new Date()).getTime();
};

// Get a random integer less than n.
function randomInteger(n) {
	return Math.floor(Math.random()*n);
};

function randomElement(array) {
  return array[randomInteger(array.length)];
};

function shuffle(array) {
    for (var i = array.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }
    return array;
}


function sourceSound(c) {
        document.getElementById("sound").src=c;
    };
function playSound() {
    document.getElementById("sound").play();
      };



  function pause(id,time){
      $("#"+id).hide();
      setTimeout(function() {
           $("#"+id).show();    
       }, time); 
    };

// disabling next button in preview mode

$("#button").click(function() {
    //disable accept button if in turk preview mode
    if (turk.previewMode) {
      showSlide("instructions");
      alert("Please accept HIT to view");
    } else {
      showSlide('training')
    }
});

// Progress bar

$("#progressbar").progressbar();
$("#progressbar").progressbar( "option", "max", 12);

// move progress bar

function move() {
	$("#progressbar").progressbar("option", "value", 
        ($("#progressbar").progressbar( "option", "value")+1));
}

// preloading images and sounds
// images

var folder = "images/";

$.ajax({
    url : folder,
    success: function (data) {
        $(data).find("a").attr("href", function (i, val) {
            if( val.match(/\.(png)$/) ) { 
                $("preload").append( "<img src='"+ folder + val +"'>" );
            } 
        });
    }
});

// sound

var folder2 = "sound/";

$.ajax({
    url : folder2,
    success: function (data) {
        $(data).find("a").attr("href", function (i, val) {
            if( val.match(/\.(mp3)$/) ) { 
                $("body").append( "<audio src='"+ folder2 + val +"'>" );
            } 
        });
    }
});



// Variables and randomization for the experiment

var trial = ["train1","train2","finTrain",1,2,3,4,5,6,7,8]
// agent order for training
var trainAgents = ["Elephant","Pig"]
var allAgents = ["Beaver","Frog","Mouse","Monkey","Bunny","Dog","Bear","Tiger","Cat","Sheep"];
// randomization of agent order for test trials
var testAgents = allAgents.sort(() => .5 - Math.random()).slice(0,8);
var agents = trainAgents.concat(testAgents);

// randomizing order of control and test condition
var trainCond = ["label","label"];
var testCond = shuffle([
    "lookLabel", 
    "lookLabel",
    "lookLabel",
    "lookLabel",
    "lookLabel",
    "lookLabel",
    "lookLabel",
    "lookLabel",
    "lookLabel"]);
var cond = trainCond.concat(testCond);

// objects on tables in training and test (fruits = toys)
var trainFruitLeft = ["car","duck"];
var trainFruitRight = ["bear","ball"];
var fruits = ["t1","t2","t3","t4","t5","t6","t7","t8","t9","t10", "t11","t12","t13","t14","t15","t16","t17","t18"];
// randomizing order and combiantion of test objects
var testRightFruit = fruits.sort(() => .5 - Math.random()).slice(0,8);
var remainingFruits = $.grep(fruits, function(value) {
    return $.inArray(value, testRightFruit) < 0;});
var testLeftFruit = remainingFruits.sort(() => .5 - Math.random()).slice(0,8);
var leftFruit = trainFruitLeft.concat(testLeftFruit);
var rightFruit = trainFruitRight.concat(testRightFruit);

// orientation of agent 
var agentOrient = [
    ["straight","down"],
    ["straight","down"],
    ["straight","torn","down"],
    ["straight","torn","down"],
    ["straight","torn","down"],
    ["straight","torn","down"],
    ["straight","torn","down"],
    ["straight","torn","down"],
    ["straight","torn","down"],
    ["straight","torn","down"]];

// randomizing location of target object (i.e. single object)
var trainInf = ["left","right"];
var testInf = shuffle(["left","right","left","right","left","right","left","right","left","right"]);
var inf = trainInf.concat(testInf)

var trainControl = ["no","no"];
var testControl = shuffle(["yes","yes","yes","yes","yes","yes","yes","yes"]);
var control = trainControl.concat(testControl)

// beginning of actual experiment

// Show the instructions slide .
showSlide("instructions");

// the actual experiment
var experiment = {
  // Parameters for this sequence.
  trial: trial,
  control: control,
  cond: cond,
  agents: agents,
  agentOrient: agentOrient,
  rightFruit: rightFruit,
  leftFruit: leftFruit,
  inf: inf,
  data: [],
  fruitPosition: [],
  fruitPosition2: [],
// end of the experiment
  end: function() {
    // Show the finish slide.
    showSlide("finished");
    setTimeout(function() { turk.submit(experiment) }, 8000);
  },
    
   endTraining: function() {
    showSlide("training2");
  }, 
  
// what happens between trials - display agent from previous trial and click on it to move on to the next trial    
   eat: function(event) {

    showSlide("eat");
    
    sourceSound("sound/end.mp3");
    playSound();
   
    showEat(agents[0])
   
    $("#continue").text("Click on the animal to continue")
    
    // get time for reaction time
    var endTime = (new Date()).getTime();    
    // select correct object
    //var corrFruit = $(".fruit_"+inf[0][0]).attr("src");
    if (inf[0]=="left") {
        var corrFruit = leftFruit[0];
    } else {
        var corrFruit = rightFruit[0]
        };
    // select chosen object  
    var pick = event.target.src;
    // record position of objects on each table
    var innerRight = $(".fruit_r").attr('src')
    var outerRight = $(".fruit_r2").attr('src')
    var innerLeft = $(".fruit_l").attr('src')
    var outerLeft = $(".fruit_l2").attr('src')
    // Code correct: does name of chosen object contain the name of the correct object
    if (pick.indexOf(corrFruit) > -1) {
        var correct =1
        } else {
        var correct = 0
        };
    //Code location of correct object (inner or outer one on the respective table)
       
    if (experiment.inf[0] == "left"){
            if (innerLeft.indexOf(corrFruit) > -1) {
                var tablePositionCorr = "inner"
            } else {
                var tablePositionCorr = "outer"
            };
    } else {
            if (innerRight.indexOf(corrFruit) > -1) {
                var tablePositionCorr = "inner"
            } else {
                var tablePositionCorr = "outer"
            };
    };
   
        
       
      
    // data collected  
      data = {
        experiment: "cue_strength_unintentional_tornado",
        trial: trial[0],
        cond: cond[0],
        control: control[0],
        agent: agents[0],
        leftFruit: leftFruit[0],
        rightFruit: rightFruit[0],
        tablePositionCorr: tablePositionCorr,
        inf: inf[0],
        pick: pick,
        correct: correct,
        rt: endTime - startTime,
            };
      experiment.data.push(data);
        
     $(".agent_eat").bind("click", experiment.newtrial);     
  },
    
// unbind and shif variables between trials      
 newtrial: function() {
    
    $(".agent_eat").unbind("click"); 
    $(".fruit_r").unbind("click");
    $(".fruit_l").unbind("click");
    $(".fruit_r2").unbind("click");
    $(".fruit_l2").unbind("click");
    $("#text").text("");
    $("#text2").text("");
    $("#text3").text("");
   
    sourceLeftFruit("images/empty.png");
            showLeftFruit(); 
    sourceRightFruit("images/empty.png");
            showRightFruit();
      sourceLeftFruit2("images/empty.png");
            showLeftFruit(); 
    sourceRightFruit2("images/empty.png");
            showRightFruit();
     
     
     $("#fruit_l").css({left: "244px", opacity: 1}); 
     $("#fruit_l2").css({left: "103px", opacity: 1}); 
     
     $("#fruit_r").css({left: "660px", opacity: 1}); 
     $("#fruit_r2").css({left: "804px", opacity: 1});  
     
    experiment.trial.shift();
    experiment.control.shift();
    experiment.agentOrient.shift();   
    experiment.agents.shift();
    experiment.inf.shift();
    experiment.cond.shift();
    experiment.rightFruit.shift();
    experiment.leftFruit.shift();
    experiment.fruitPosition = shuffle([leftFruit[0],rightFruit[0]]);
    experiment.fruitPosition2 = shuffle([leftFruit[0],rightFruit[0]]);
     
   
  
//    
//     $("#"+agents[0]+"_straight").css({width: "280px", left: "380px", bottom:"450px", queue: false, duration:0}); 
//     
// move progress bar 
   move()    
   experiment.next();
  },


// recording the choice 
  choice: function(event) {
    
    showSlide("choice");   
         
    $("#text3").text("")   
    $("#text2").text("")  
    setTimeout(function() {$("#text2").text("Click on the toy")}, 6000);
    
    // show agent
    
  setTimeout(function() {   
    if (agents[0] == "Mouse" ||
        agents[0] == "Tiger" ||
        agents[0] == "Cat" ||
        agents[0] == "Bunny" ||
        agents[0] == "Sheep"){  
    $("#text3").text("Can you give her the toy she wants?") 
    } else { 
   $("#text3").text("Can you give him the toy he wants?")
     }
  }, 6000)      
    // show control barrier
     
    hideBarrierChoice();

      
      
      choiceRightFruit("images/empty.png") 
      choiceRightFruit2("images/empty.png") 
      choiceLeftFruit("images/empty.png") 
      choiceLeftFruit2("images/empty.png") 
      
    // specify what is shown on the tables depending on training and test condition
    if (experiment.trial[0] == "train1"){
        showAgent(agents[0],"look_choice_l");
        
        sourceSound("sound/"+agents[0]+"_train.mp3");
        playSound(); 
    
        
        choiceLeftFruit("images/"+leftFruit[0]+".png");
        choiceLeftFruit2("images/empty.png");
      
        choiceRightFruit("images/"+rightFruit[0]+".png");     
        choiceRightFruit2("images/empty.png");
        
        } else if (experiment.trial[0] == "train2"){
        showAgent(agents[0],"look_choice_r");
        
        sourceSound("sound/"+agents[0]+"_train.mp3");
        playSound();     
            
        choiceLeftFruit("images/empty.png");
        choiceLeftFruit2("images/"+leftFruit[0]+".png");
      
        choiceRightFruit("images/empty.png");     
        choiceRightFruit2("images/"+rightFruit[0]+".png");
        
        } else {
            if (experiment.cond[0] == "lookLabel"){
        
            
                if (experiment.inf[0] == "left") {
                  
                   showAgent(agents[0],"look_choice_l");
                       // play choice sound
                    sourceSound("sound/"+agents[0]+"_choice.mp3");
                    playSound(); 
            
                    choiceLeftFruit("images/"+experiment.fruitPosition[0]+".png");
                    choiceLeftFruit2("images/"+experiment.fruitPosition.filter(function(x) { return x !== experiment.fruitPosition[0]; })+".png");
      
                    choiceRightFruit("images/empty.png"); choiceRightFruit2("images/empty.png");
                    

                    
                } else { 
                
                    showAgent(agents[0],"look_choice_r");
                       // play choice sound
                    sourceSound("sound/"+agents[0]+"_choice.mp3");
                    playSound(); 
        

                    choiceLeftFruit("images/empty.png");
                    choiceLeftFruit2("images/empty.png");
      
                    choiceRightFruit("images/"+experiment.fruitPosition[0]+".png"); choiceRightFruit2("images/"+experiment.fruitPosition.filter(function(x) { return x !== experiment.fruitPosition[0]; })+".png");
                    

                }; 
      
                
            } else if (experiment.cond[0] == "pointLabel"){
                if (experiment.inf[0] == "left") {
                    
                    showAgent(agents[0],"point_l")
                       // play choice sound
                    sourceSound("sound/"+agents[0]+"_choice.mp3");
                    playSound(); 
        
                    choiceLeftFruit("images/"+experiment.fruitPosition[0]+".png");
                    choiceLeftFruit2("images/"+experiment.fruitPosition.filter(function(x) { return x !== experiment.fruitPosition[0]; })+".png");
      
                    choiceRightFruit("images/empty.png"); choiceRightFruit2("images/empty.png");
                    
//                    $("#choiceFruit_l").animate({width: "180px",opacity: '0.3', queue: false, duration: 1000});
//                    $("#choiceFruit_l").animate({width: "130px",opacity: '1', queue: false, duration: 1000});
//                    $("#choiceFruit_l2").animate({width: "180px",opacity: '0.3', queue: false, duration: 1000});
//                    $("#choiceFruit_l2").animate({width: "130px",opacity: '1', queue: false, duration: 1000});
                    
                } else { 
                    
                    showAgent(agents[0],"point_r")
                    
                    sourceSound("sound/"+agents[0]+"_choice.mp3");
                    playSound(); 
                    
                    choiceLeftFruit("images/empty.png");
                    choiceLeftFruit2("images/empty.png");
      
                    choiceRightFruit("images/"+experiment.fruitPosition[0]+".png"); choiceRightFruit2("images/"+experiment.fruitPosition.filter(function(x) { return x !== experiment.fruitPosition[0]; })+".png");
                    
//                    $("#choiceFruit_r").animate({width: "180px",opacity: '0.3', queue: false, duration: 1000});
//                    $("#choiceFruit_r").animate({width: "130px",opacity: '1', queue: false, duration: 1000});
//                    $("#choiceFruit_r2").animate({width: "180px",opacity: '0.3', queue: false, duration: 1000});
//                    $("#choiceFruit_r2").animate({width: "130px",opacity: '1', queue: false, duration: 1000});
                }; 
            
            } else if (experiment.cond[0] == "point"){
                if (experiment.inf[0] == "left") {
                    
                    showAgent(agents[0],"point_l")
        
                    choiceLeftFruit("images/"+experiment.fruitPosition[0]+".png");
                    choiceLeftFruit2("images/"+experiment.fruitPosition.filter(function(x) { return x !== experiment.fruitPosition[0]; })+".png");
      
                     choiceRightFruit("images/"+rightFruit[0]+".png"); choiceRightFruit2("images/empty.png");
                    
//                    $("#choiceFruit_l").animate({width: "180px",opacity: '0.3', queue: false, duration: 1000});
//                    $("#choiceFruit_l").animate({width: "130px",opacity: '1', queue: false, duration: 1000});
//                    $("#choiceFruit_l2").animate({width: "180px",opacity: '0.3', queue: false, duration: 1000});
//                    $("#choiceFruit_l2").animate({width: "130px",opacity: '1', queue: false, duration: 1000});
//                    
                } else { 
                    
                    showAgent(agents[0],"point_r")
                    choiceLeftFruit("images/"+leftFruit[0]+".png");
                    choiceLeftFruit2("images/empty.png");
      
                    choiceRightFruit("images/"+experiment.fruitPosition[0]+".png"); choiceRightFruit2("images/"+experiment.fruitPosition.filter(function(x) { return x !== experiment.fruitPosition[0]; })+".png");
                    
//                    $("#choiceFruit_r").animate({width: "180px",opacity: '0.3', queue: false, duration: 1000});
//                    $("#choiceFruit_r").animate({width: "130px",opacity: '1', queue: false, duration: 1000});
//                    $("#choiceFruit_r2").animate({width: "180px",opacity: '0.3', queue: false, duration: 1000});
//                    $("#choiceFruit_r2").animate({width: "130px",opacity: '1', queue: false, duration: 1000});
                };
               
      }  else {
                if (experiment.inf[0] == "left") {
                    
                    showAgent(agents[0],"look_l")
                    choiceLeftFruit("images/"+experiment.fruitPosition[0]+".png");
                    choiceLeftFruit2("images/"+experiment.fruitPosition.filter(function(x) { return x !== experiment.fruitPosition[0]; })+".png");
      
                    choiceRightFruit("images/"+rightFruit[0]+".png"); choiceRightFruit2("images/empty.png");
                    
//                    $("#choiceFruit_l").animate({width: "180px",opacity: '0.3', queue: false, duration: 1000});
//                    $("#choiceFruit_l").animate({width: "130px",opacity: '1', queue: false, duration: 1000});
//                    $("#choiceFruit_l2").animate({width: "180px",opacity: '0.3', queue: false, duration: 1000});
//                    $("#choiceFruit_l2").animate({width: "130px",opacity: '1', queue: false, duration: 1000});
                    
                } else { 
                    
                    showAgent(agents[0],"look_r")
                    choiceLeftFruit("images/"+leftFruit[0]+".png");
                    choiceLeftFruit2("images/empty.png");
      
                    choiceRightFruit("images/"+experiment.fruitPosition[0]+".png"); choiceRightFruit2("images/"+experiment.fruitPosition.filter(function(x) { return x !== experiment.fruitPosition[0]; })+".png");
                    
//                    $("#choiceFruit_r").animate({width: "180px",opacity: '0.3', queue: false, duration: 1000});
//                    $("#choiceFruit_r").animate({width: "130px",opacity: '1', queue: false, duration: 1000});
//                    $("#choiceFruit_r2").animate({width: "180px",opacity: '0.3', queue: false, duration: 1000});
//                    $("#choiceFruit_r2").animate({width: "130px",opacity: '1', queue: false, duration: 1000});
                };

             };   
            };
      
    // choice can be made by clicking the objects after 

if(experiment.cond[0] == "pointLabel" ||
   experiment.cond[0] == "lookLabel" ||
   experiment.cond[0] == "label") {
        setTimeout(function() {
            if (experiment.trial[0] == "train1" || experiment.trial[0] == "train2") {
                $(".fruit_l").bind("click", experiment.eat);
                $(".fruit_l2").bind("click", experiment.eat);
            
                $(".fruit_r").bind("click", experiment.eat);
                $(".fruit_r2").bind("click", experiment.eat);
            } else { 
                if (experiment.inf[0] == "left") {
                    $(".fruit_l").bind("click", experiment.eat);
                    $(".fruit_l2").bind("click", experiment.eat);
                } else {  
                    $(".fruit_r").bind("click", experiment.eat);
                    $(".fruit_r2").bind("click", experiment.eat);
                };
            };
        }, 4000)   
    } else {
        if (experiment.inf[0] == "left") {
                $(".fruit_l").bind("click", experiment.eat);
                $(".fruit_l2").bind("click", experiment.eat);
            } else {  
                $(".fruit_r").bind("click", experiment.eat);
                $(".fruit_r2").bind("click", experiment.eat);
            };
    }
  
},

    
    
// moving on within a trial
  next: function() {
  // when training is over show sinished training slide 
    if (experiment.trial[0] == "finTrain"){
        experiment.endTraining();
        experiment.trial.shift();
        return;
    };
   // when no more trials are left, end experiment    
    if (experiment.trial.length == 0){
        setTimeout(function() {experiment.end() }, 0);
      return;
    };  
      
  // after exposure is finished, switch to choice      
    if (experiment.agentOrient[0][0] == "down") {
      setTimeout(function() {experiment.choice() }, 0);
      return;
    };  
    
    showSlide("stage");  
     
    // show agent
    showAgent(agents[0],experiment.agentOrient[0][0]);  
    // move agent to back  
//    setTimeout(function() {
//        $("#"+agents[0]+"_straight").animate({width: "180px", left: "430px", bottom:"520px", queue: false, duration: 500})
//        }, 2000)
    ;
      
    // show control barrier 
      
    hideBarrier()
      
      if (experiment.control[0] == "bar"){
        
        if (experiment.inf[0] == "left"){
            showBarrierRight();
        } else {
            showBarrierLeft();
        };
    };
      
      
    // play hello sound and write name of agent
   if (experiment.agentOrient[0][0] == "straight") { 
        pause("next",2000); 
        sourceSound("sound/"+agents[0]+"_hello.mp3");
        playSound();
        $("#text").text("");
    }; 
     
    // display obejcts on table depending on training and test condition     
      
      

    if (experiment.trial[0] == "train1"){
        sourceLeftFruit("images/"+leftFruit[0]+".png");
        showLeftFruit(); 
        sourceLeftFruit2("images/empty.png");
        showLeftFruit2(); 
        sourceRightFruit("images/"+rightFruit[0]+".png");
        showRightFruit();
        sourceRightFruit2("images/empty.png");
        showRightFruit2(); 
    } else  if (experiment.trial[0] == "train2"){
        sourceLeftFruit("images/empty.png");
        showLeftFruit(); 
        sourceLeftFruit2("images/"+leftFruit[0]+".png");
        showLeftFruit2(); 
        sourceRightFruit("images/empty.png");
        showRightFruit();
        sourceRightFruit2("images/"+rightFruit[0]+".png");
        showRightFruit2(); 
    } else {
        
            if (experiment.inf[0] == "left") {
                sourceLeftFruit("images/"+experiment.fruitPosition[0]+".png");
                showLeftFruit(); 
                sourceLeftFruit2("images/"+experiment.fruitPosition.filter(function(x) { return x !== experiment.fruitPosition[0]; })+".png");
                showLeftFruit2(); 
                
               if (experiment.control[0] == "abs"){
                    sourceRightFruit("images/empty.png");
                    showRightFruit();
                    sourceRightFruit2("images/empty.png");
                    showRightFruit2();
                   
                } else {                                
                    sourceRightFruit("images/"+rightFruit[0]+".png");
                    showRightFruit();
                    sourceRightFruit2("images/empty.png");
                    showRightFruit2();
                };
                
                
            } else { 
               
                if (experiment.control[0] == "abs"){
                sourceLeftFruit("images/empty.png");
                showLeftFruit(); 
                sourceLeftFruit2("images/empty.png");
                showLeftFruit2();
                   
                } else {   
               sourceLeftFruit("images/"+leftFruit[0]+".png");
                showLeftFruit(); 
                sourceLeftFruit2("images/empty.png");
                showLeftFruit2();
                };
                 sourceRightFruit("images/"+experiment.fruitPosition[0]+".png");
                showRightFruit();
                sourceRightFruit2("images/"+experiment.fruitPosition.filter(function(x) { return x !== experiment.fruitPosition[0]; })+".png");
                showRightFruit2(); 
            };
    };
      
      
    
    if (experiment.agentOrient[0][0] == "torn"){  
              
        if (experiment.control[0] == "yes" && experiment.inf[0] == "right"){

                    
            sourceSound("sound/"+agents[0]+"_torn.mp3");
            playSound();   
            
            pause("next",2000); 
            
            showAgent(agents[0],"straight");
                
            $("#tornado").animate({bottom: "400px",left: "410px", queue: false},500);
            $("#tornado").animate({bottom: "500px",left: "350px", queue: true},333);
            $("#tornado").animate({bottom: "400px",left: "470px", queue: true},333);
        
            $("#tornado").animate({bottom: "500px",left: "410px", queue: true},233);
            $("#tornado").animate({bottom: "900px",left: "410px", queue: true},200);         
            
            
   setTimeout(function() {
                $("#"+agents[0]+"_straight").animate({width: "160px", left: "390px", bottom:"600px",opacity: '0.5', queue: false},166)
    
                $("#"+agents[0]+"_straight").animate({width: "160px", left: "470px", bottom:"570px",opacity: '0.5', queue: true},166) 
                
            },300);
            
            setTimeout(function() {
                $("#"+agents[0]+"_straight").rotate({
                    angle: 0,
                    animateTo:240,
                    duration:700
                });
                      
            },500);               
            
            setTimeout(function() {
                showAgent(agents[0],"look_r");
        
                $("#"+agents[0]+"_look_r").animate({width: "160px", left: "400px", bottom:"600px",opacity: '0.5', queue: false},125);
                $("#"+agents[0]+"_look_r").animate({width: "180px", left: "460px", bottom:"520px",opacity: '1', queue: true},125)   
            }, 850);
        
            setTimeout(function() {
                showAgent(agents[0],"look_l");
                $("#"+agents[0]+"_look_l").animate({width: "160px", left: "400px", bottom:"600px",opacity: '0.5', queue: false},125);
                $("#"+agents[0]+"_look_l").animate({width: "180px", left: "460px", bottom:"520px",opacity: '1', queue: true},125)   
            }, 1100); 
      
            setTimeout(function() {
                showAgent(agents[0],"look_r");
                $("#"+agents[0]+"_look_r").animate({width: "160px", left: "400px", bottom:"540px",opacity: '0.5', queue: false},125);
                $("#"+agents[0]+"_look_r").animate({width: "180px", left: "410px", bottom:"520px",opacity: '1', queue: true},125)   
            }, 1350); 
            
            
            setTimeout(function() {    
                $("#fruit_l").animate({left: "0px", opacity: 0},2000);
            }, 2000)    
      
        } else if (experiment.control[0] == "yes" && experiment.inf[0] == "left") {
            
            
            sourceSound("sound/"+agents[0]+"_torn.mp3");
            playSound();   
            
            pause("next",2000); 
            
            showAgent(agents[0],"straight");
                
            $("#tornado").animate({bottom: "400px",left: "410px", queue: false},500);
            $("#tornado").animate({bottom: "500px",left: "350px", queue: true},333);
            $("#tornado").animate({bottom: "400px",left: "470px", queue: true},333);
        
            $("#tornado").animate({bottom: "500px",left: "410px", queue: true},233);
            $("#tornado").animate({bottom: "900px",left: "410px", queue: true},200);
             
            
            setTimeout(function() {
                $("#"+agents[0]+"_straight").animate({width: "160px", left: "390px", bottom:"600px",opacity: '0.5', queue: false},166)
    
                $("#"+agents[0]+"_straight").animate({width: "160px", left: "470px", bottom:"570px",opacity: '0.5', queue: true},166) 
                
            },300);
            
            setTimeout(function() {
                $("#"+agents[0]+"_straight").rotate({
                    angle: 0,
                    animateTo:240,
                    duration:700
                });
                      
            },500);               
            
            setTimeout(function() {
                showAgent(agents[0],"look_l");
        
                $("#"+agents[0]+"_look_l").animate({width: "160px", left: "400px", bottom:"600px",opacity: '0.5', queue: false},125);
                $("#"+agents[0]+"_look_l").animate({width: "180px", left: "460px", bottom:"520px",opacity: '1', queue: true},125)   
            }, 850);
        
            setTimeout(function() {
                showAgent(agents[0],"look_r");
                $("#"+agents[0]+"_look_l").animate({width: "160px", left: "400px", bottom:"600px",opacity: '0.5', queue: false},125);
                $("#"+agents[0]+"_look_r").animate({width: "180px", left: "460px", bottom:"520px",opacity: '1', queue: true},125)   
            }, 1100); 
      
            setTimeout(function() {
                showAgent(agents[0],"look_l");
                $("#"+agents[0]+"_look_l").animate({width: "160px", left: "400px", bottom:"540px",opacity: '0.5', queue: false},125);
                $("#"+agents[0]+"_look_l").animate({width: "180px", left: "430px", bottom:"520px",opacity: '1', queue: true},125)   
            }, 1350); 
      
            setTimeout(function() {    
                $("#fruit_r").animate({left: "900px", opacity: 0},2000);
            }, 2000)
        
        
            
        } else if (experiment.control[0] == "no" && experiment.inf[0] == "left") {
            
            showAgent(agents[0],"straight");
            
            pause("next",2000); 
            
            setTimeout(function() {
                    showAgent(agents[0],"look_l");
                }, 400);
        
                setTimeout(function() {
                    showAgent(agents[0],"look_r");
                }, 800); 
        
                setTimeout(function() {
                    showAgent(agents[0],"look_l");   
                }, 1200);
            
            setTimeout(function() {    
                $("#fruit_r").animate({left: "900px", opacity: 0},2000);
            }, 2000)
       
        } else {
           
            showAgent(agents[0],"straight");
            
            
            pause("next",2000); 
            
            setTimeout(function() {
                    showAgent(agents[0],"look_r");
                }, 400);
        
                setTimeout(function() {
                    showAgent(agents[0],"look_l");
                }, 800); 
        
                setTimeout(function() {
                    showAgent(agents[0],"look_r");   
                }, 1200);
            
             setTimeout(function() {    
                $("#fruit_l").animate({left: "0px", opacity: 0},2000);
            }, 2000)
        };
    };
                
     
      
    // move on to next phase of exposure
    experiment.agentOrient[0].shift(); 
  }
};
