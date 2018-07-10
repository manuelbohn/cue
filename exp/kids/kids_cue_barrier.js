// preload
var preFruits = ["duck.png","car.png","bear.png","ball.png","t1.png", "t2.png", "t3.png", "t4.png", "t5.png", "t6.png", "t7.png", "t8.png", "t9.png", "t10.png", "t11.png", "t12.png", "t13.png", "t14.png", "t15.png", "t16.png", "t17.png", "t18.png","back1.jpg","back2.jpg","back3.jpg","empty.png"];
//for critical trials and fillers
var images = new Array();
for (i = 0; i < preFruits.length; i++) {
	images[i] = new Image();
	images[i].src = "images/" + preFruits[i];
    images[i].id = preFruits[i];
}


var preSounds = ["Frog_choice.mp3", "Mouse_choice.mp3", "Bear_choice.mp3", "Beaver_choice.mp3", "Monkey_choice.mp3", "Dog_choice.mp3", "Cat_choice.mp3", "Bunny_choice.mp3", "Tiger_choice.mp3", "Sheep_choice.mp3","Pig_choice.mp3","Pig_train.mp3","Elephant_train.mp3","Frog_hello.mp3", "Mouse_hello.mp3", "Bear_hello.mp3", "Monkey_hello.mp3", "Dog_hello.mp3", "Cat_hello.mp3", "Bunny_hello.mp3", "Tiger_hello.mp3", "Sheep_hello.mp3","Pig_hello.mp3","Elephant_hello.mp3", "Beaver_hello.mp3","end.mp3"];
//for critical trials and fillers
var sound = new Array();
for (i = 0; i < preSounds.length; i++) {
	sound[i] = new Audio();
	sound[i].src = "sound/" + preSounds[i];
    sound[i].id = preSounds[i];
}

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


function choiceAgent(id) {
  // Hide all slides
	$(".agent").hide();
	// Show just the agent we want to show
	$("#"+id+"_straight").show();
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


function background(x) {
        document.getElementById("background").src=x;
    };

function background2(x) {
        document.getElementById("background2").src=x;
    };var back = shuffle([1,2,3,1,2,3,1,2,3,1]);


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


// Variables and randomization for the experiment

var trial = ["train1","train2","finTrain",1,2,3,4,5,6,7,8]
// agent order for training
var trainAgents = ["Elephant","Pig"]
var allAgents = ["Frog","Mouse","Monkey","Bunny","Dog","Bear","Tiger","Cat","Sheep"];
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
    ["straight","down"],
    ["straight","down"],
    ["straight","down"],
    ["straight","down"],
    ["straight","down"],
    ["straight","down"],
    ["straight","down"],
    ["straight","down"],
    ["straight","down"]];

// randomizing location of target object (i.e. single object)
var trainInf = ["left","right"];
var testInf = shuffle(["left","right","left","right","left","right","left","right","left","right"]);
var inf = trainInf.concat(testInf)

var trainControl = ["no","no"];
var testControl = shuffle(["no","yes","no","yes","no","yes","no","yes"]);
var control = trainControl.concat(testControl)

var back = shuffle([1,2,3,1,2,3,1,2,3,1]);

// beginning of actual experiment

// Show the instructions slide .
showSlide("instructions");

// the actual experiment
var experiment = {
  // Parameters for this sequence.
  trial: trial,
  control: control,
  back: back,
  cond: cond,
  agents: agents,
  agentOrient: agentOrient,
  rightFruit: rightFruit,
  leftFruit: leftFruit,
  inf: inf,
  data: [],
  fruitPosition: [],
  fruitPosition2: [],
    
    
checkInput: function() {
		//subject ID
		if (document.getElementById("subjectID").value.length < 1) {
			$("#checkMessage").html('<font color="red">You must input a subject ID</font>');
			return;
		}
        if (document.getElementById("subjectAge").value.length < 1) {
			$("#checkMessage").html('<font color="red">You must input a subject age</font>');
			return;
		}
		experiment.subid = document.getElementById("subjectID").value
        experiment.subage = document.getElementById("subjectAge").value
        experiment.trainingDot()
      }, 
    
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
       
    background("images/back"+back[0]+".jpg");
    
    
       if (experiment.trial[0] == "train1" || experiment.trial[0] == "train2"){
           sound.find(function (obj){return obj.id == agents[0]+"_train.mp3"}).pause();
        sound.find(function (obj){return obj.id == "end.mp3"}).play()
        
    } else {
       
        sound.find(function (obj){return obj.id ==  agents[0]+"_choice.mp3"}).pause();
        sound.find(function (obj){return obj.id == "end.mp3"}).play()

    }

   
    showEat(agents[0])

    
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
        experiment: "cue_strength_controls_barrier",
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

   
    sourceLeftFruit("images/empty.png");
            showLeftFruit(); 
    sourceRightFruit("images/empty.png");
            showRightFruit();
      sourceLeftFruit2("images/empty.png");
            showLeftFruit(); 
    sourceRightFruit2("images/empty.png");
            showRightFruit();
     
     
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
    experiment.back.shift(); 
     
   
  
//    
//     $("#"+agents[0]+"_straight").css({width: "280px", left: "380px", bottom:"450px", queue: false, duration:0}); 
//     
// move progress bar 
 
   experiment.next();
  },


// recording the choice 
  choice: function(event) {
    
    showSlide("choice"); 
    
    background2("images/back"+back[0]+".jpg");
    
    // show agent
    
    // show control barrier
     
    hideBarrierChoice();
      
    if (experiment.control[0] == "yes"){
        
        if (experiment.inf[0] == "left"){
            showBarrierRightChoice();
        } else {
            showBarrierLeftChoice();
        };
    };
      
      
      choiceRightFruit("images/empty.png") 
      choiceRightFruit2("images/empty.png") 
      choiceLeftFruit("images/empty.png") 
      choiceLeftFruit2("images/empty.png") 
      
    // specify what is shown on the tables depending on training and test condition
    if (experiment.trial[0] == "train1"){
        showAgent(agents[0],"choice");
        
        
        sound.find(function (obj){return obj.id == agents[0]+"_train.mp3"}).play()
        
        
        $("#"+agents[0]+"_choice").css({width: "180px", left: "430px", bottom:"320px"})
        
        choiceLeftFruit("images/"+leftFruit[0]+".png");
        choiceLeftFruit2("images/empty.png");
      
        choiceRightFruit("images/"+rightFruit[0]+".png");     
        choiceRightFruit2("images/empty.png");
        
        } else if (experiment.trial[0] == "train2"){
        showAgent(agents[0],"choice");
        
        sound.find(function (obj){return obj.id == agents[0]+"_train.mp3"}).play()   
            
        $("#"+agents[0]+"_choice").css({width: "180px", left: "430px", bottom:"320px"})   

        choiceLeftFruit("images/empty.png");
        choiceLeftFruit2("images/"+leftFruit[0]+".png");
      
        choiceRightFruit("images/empty.png");     
        choiceRightFruit2("images/"+rightFruit[0]+".png");
        
        } else {
            if (experiment.cond[0] == "lookLabel"){
                if (experiment.inf[0] == "left") {
                    
                    showAgent(agents[0],"look_l")
                    
                    sound.find(function (obj){return obj.id == agents[0]+"_choice.mp3"}).play()
        
                    choiceLeftFruit("images/"+experiment.fruitPosition[0]+".png");
                    choiceLeftFruit2("images/"+experiment.fruitPosition.filter(function(x) { return x !== experiment.fruitPosition[0]; })+".png");
      
                   if (experiment.control[0] == "abs"){
                    
                    setTimeout(function() {
                    choiceRightFruit("images/"+rightFruit[0]+".png"); choiceRightFruit2("images/empty.png");
                 
                        
                    $("#choiceFruit_r").animate({width: "180px",opacity: '0.3', queue: false, duration: 1000});
                   $("#choiceFruit_r").animate({width: "130px",opacity: '1', queue: false, duration: 1000});
                   $("#choiceFruit_r2").animate({width: "180px",opacity: '0.3', queue: false, duration: 1000});
                   $("#choiceFruit_r2").animate({width: "130px",opacity: '1', queue: false, duration: 1000});
                    
                    },1500);
                       
                   } else { choiceRightFruit("images/"+rightFruit[0]+".png"); choiceRightFruit2("images/empty.png");
                          };
                    
//                    $("#choiceFruit_l").animate({width: "180px",opacity: '0.3', queue: false, duration: 1000});
//                    $("#choiceFruit_l").animate({width: "130px",opacity: '1', queue: false, duration: 1000});
//                    $("#choiceFruit_l2").animate({width: "180px",opacity: '0.3', queue: false, duration: 1000});
//                    $("#choiceFruit_l2").animate({width: "130px",opacity: '1', queue: false, duration: 1000});
                    
                } else { 
                    
                    showAgent(agents[0],"look_r")
                   
                    sound.find(function (obj){return obj.id == agents[0]+"_choice.mp3"}).play() 
                    
                    
                    if (experiment.control[0] == "abs"){
                    setTimeout(function() {choiceLeftFruit("images/"+leftFruit[0]+".png"); choiceLeftFruit2("images/empty.png");
                    $("#choiceFruit_l").animate({width: "180px",opacity: '0.3', queue: false, duration: 1000});
                    $("#choiceFruit_l").animate({width: "130px",opacity: '1', queue: false, duration: 1000});
                   $("#choiceFruit_l2").animate({width: "180px",opacity: '0.3', queue: false, duration: 1000});
                   $("#choiceFruit_l2").animate({width: "130px",opacity: '1', queue: false, duration: 1000});
                    },1500);
                        
                   
                       
                   } else { 
                       choiceLeftFruit("images/"+leftFruit[0]+".png"); choiceLeftFruit2("images/empty.png");
                          };
      
                    choiceRightFruit("images/"+experiment.fruitPosition[0]+".png"); choiceRightFruit2("images/"+experiment.fruitPosition.filter(function(x) { return x !== experiment.fruitPosition[0]; })+".png");
                    
//                    $("#choiceFruit_r").animate({width: "180px",opacity: '0.3', queue: false, duration: 1000});
//                    $("#choiceFruit_r").animate({width: "130px",opacity: '1', queue: false, duration: 1000});
//                    $("#choiceFruit_r2").animate({width: "180px",opacity: '0.3', queue: false, duration: 1000});
//                    $("#choiceFruit_r2").animate({width: "130px",opacity: '1', queue: false, duration: 1000});
                };
            } else if (experiment.cond[0] == "pointLabel"){
                if (experiment.inf[0] == "left") {
                    
                    showAgent(agents[0],"point_l")
                       // play choice sound
                    sound.find(function (obj){return obj.id == agents[0]+"_choice.mp3"}).play()
        
                    choiceLeftFruit("images/"+experiment.fruitPosition[0]+".png");
                    choiceLeftFruit2("images/"+experiment.fruitPosition.filter(function(x) { return x !== experiment.fruitPosition[0]; })+".png");
      
                    choiceRightFruit("images/"+rightFruit[0]+".png"); choiceRightFruit2("images/empty.png");
                    
//                    $("#choiceFruit_l").animate({width: "180px",opacity: '0.3', queue: false, duration: 1000});
//                    $("#choiceFruit_l").animate({width: "130px",opacity: '1', queue: false, duration: 1000});
//                    $("#choiceFruit_l2").animate({width: "180px",opacity: '0.3', queue: false, duration: 1000});
//                    $("#choiceFruit_l2").animate({width: "130px",opacity: '1', queue: false, duration: 1000});
                    
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
        }, 000)   
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
      
      
    background("images/back"+back[0]+".jpg");
      
    // show agent
    showAgent(agents[0],experiment.agentOrient[0][0]);  
    // move agent to back  
//    setTimeout(function() {
//        $("#"+agents[0]+"_straight").animate({width: "180px", left: "430px", bottom:"520px", queue: false, duration: 500})
//        }, 2000)
    ;
      
    // show control barrier 
      
    hideBarrier()
      
      if (experiment.control[0] == "yes"){
        
        if (experiment.inf[0] == "left"){
            showBarrierRight();
        } else {
            showBarrierLeft();
        };
    };
      
      
    // play hello sound and write name of agent
   if (experiment.agentOrient[0][0] == "straight") { 
        pause("next",2600); 
        
       sound.find(function (obj){return obj.id == agents[0]+"_hello.mp3"}).play()
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
    // move on to next phase of exposure
    experiment.agentOrient[0].shift(); 
  },
    
    trainingDot: function() {
		
        function createDot(dotx, doty, i) {
	   var dots = [1, 2, 3, 4, 5];

	   var dot = document.createElement("img");
	   dot.setAttribute("class", "dot");
	   dot.id = "dot_" + dots[i];
	   dot.src = "dots/dot_" + dots[i] + ".jpg";

	   var x = Math.floor(Math.random() * 850);
	   var y = Math.floor(Math.random() * 550);

	   var invalid = "true";
	//make sure dots do not overlap
	   while (true) {  
		invalid = "true";
		for (j = 0; j < dotx.length; j++) {
			if (Math.abs(dotx[j] - x) + Math.abs(doty[j] - y) < 200) {
				var invalid = "false";
				break;
			}
		}
		if (invalid === "true") {
			dotx.push(x);
			doty.push(y);
			break;
		}
		x = Math.floor(Math.random() * 400);
		y = Math.floor(Math.random() * 400);
	}

	dot.setAttribute("style", "position:absolute;left:" + x + "px;top:" + y + "px;");

	trainingDot.appendChild(dot);
};

        
        var allDots = ["dot_1", "dot_2", "dot_3", "dot_4", "dot_5"];

		var xcounter = 0;
		var dotCount = 5;

		var dotx = [];
		var doty = [];

		for (i = 0; i < dotCount; i++) {
			createDot(dotx, doty, i, "");
		}

		showSlide("trainingDot");
		$('.dot').bind('click touchstart', function(event) {

			var dotID = $(event.currentTarget).attr('id');

			//only count towards completion clicks on dots that have not yet been clicked
			if (allDots.indexOf(dotID) === -1) {
				return;
			}
			allDots.splice(allDots.indexOf(dotID), 1);
			document.getElementById(dotID).src = "dots/x.jpg";
			xcounter++
			if (xcounter === dotCount) {
				trainingDot.removeChild(dot_1);
				trainingDot.removeChild(dot_2);
				trainingDot.removeChild(dot_3);
				trainingDot.removeChild(dot_4);
				trainingDot.removeChild(dot_5);

				setTimeout(function() {
					$("#trainingDot").hide();
					setTimeout(function() {
						showSlide("dotGame");
					}, 500);
				}, 500);
			}
		});
	}    
};
