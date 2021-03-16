class Form{
    constructor(){
        
    }

 display(){
    var title = createElement("h1");
    title.html("Car Racing Game!");
    title.position(130,0);
    var input = createInput("Enter your name");
    input.position(130,160);
    var button = createButton("Play");
    button.position(250,200);
    var greeting = createElement("h3");

    button.mousePressed(()=>{
        input.hide();
        button.hide();
        var name = input.value();
        //"playerCount += " means playerCount = playerCount + 1
        playerCount += 1;
        player.update(name);
        player.updateCount(playerCount);
        greeting.html("Hello "+ name);
        greeting.position(130,160);
    })
    
 }   
}