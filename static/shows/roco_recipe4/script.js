const jsonData0 = [{"sender": "Chad", "message": "I will PICK tomato2 since it's the next item in the recipe that is on my side of the table. Dave should WAIT because only one robot can PUT at a time and I need to place the tomato2 on the bread_slice1 which is not yet on the cutting_board.\n\nPROCEED"}, {"sender": "Dave", "message": "Chad, you should PICK bread_slice1 instead, as it is the first item in the recipe and needs to be PUT on the cutting_board before we can add any other ingredients. After you PICK and PUT bread_slice1, I can proceed with the next steps.\n\nPROCEED"}, {"sender": "Chad", "message": "Understood, Dave. I will PICK bread_slice1 as it is indeed the first item that needs to be placed on the cutting_board. Once I have done that, you can continue with the next steps.\n\nEXECUTE\nNAME Chad ACTION PICK bread_slice1\nNAME Dave ACTION WAIT\n"}, {"sender": "Feedback", "message": "[Environment Feedback]:\n- Previous Plan:\nNAME Chad ACTION PICK bread_slice1\nNAME Dave ACTION WAIT\n- Goal Step Chad (-0.80, 0.61, 0.21); Dave (-0.59, 0.86, 0.44):\n   - Reachability failed: Out of reach: Chad (-0.80, 0.61, 0.21); \n  "}, {"sender": "Action", "message": "Chad: PICK bread_slice1\nDave: WAIT"}, {"sender": "Chad", "message": "It seems there was a misunderstanding. I cannot reach bread_slice1 as it is not on my side of the table. I will PICK tomato2, which is the next item in the recipe that is on my side and can be placed on the bread_slice1 once it's on the cutting_board.\n\nEXECUTE\nNAME Chad ACTION PICK tomato2\nNAME Dave ACTION WAIT"}, {"sender": "Feedback", "message": "None"}, {"sender": "Action", "message": "Chad: PICK tomato2\nDave: WAIT"}];
function createChatBubble(sender, message) {
    const bubbleWrapper = document.createElement("div");
    bubbleWrapper.className = "bubble-wrapper";

    const nameBox = document.createElement("div");
    nameBox.className = "user-name-box";
    nameBox.innerText = sender;

    const bubble = document.createElement("div");
    bubble.className = `.chat-bubble ${sender}-bubble`;
    bubble.innerText = message;

    bubbleWrapper.appendChild(nameBox);
    bubbleWrapper.appendChild(bubble);
    return bubbleWrapper;
    }  
        
// Get the chat container element
const chatContainer0 = document.getElementById("chat-container-0");
    
// Iterate over the JSON data and generate chat bubbles
jsonData0.forEach(
    
    data => {
    const { sender, message } = data;
    const bubble = createChatBubble(sender, message);
    
    chatContainer0.appendChild(bubble);
    
});
    
const jsonData1 = [{"sender": "Chad", "message": "Dave, since I am currently holding tomato2, I will PUT it on the bread_slice1 once you have placed it on the cutting_board. Please PICK bread_slice1 and PUT it on the cutting_board so I can proceed with the next step.\n\nPROCEED"}, {"sender": "Dave", "message": "EXECUTE\nNAME Dave ACTION PICK bread_slice1\nNAME Chad ACTION WAIT"}, {"sender": "Feedback", "message": "None"}, {"sender": "Action", "message": "Dave: PICK bread_slice1\nChad: WAIT"}];
// Get the chat container element
const chatContainer1 = document.getElementById("chat-container-1");
    
// Iterate over the JSON data and generate chat bubbles
jsonData1.forEach(
    
    data => {
    const { sender, message } = data;
    const bubble = createChatBubble(sender, message);
    
    chatContainer1.appendChild(bubble);
    
});
    
const jsonData2 = [{"sender": "Chad", "message": "Dave, now that you have PICKed bread_slice1, you need to PUT it on the cutting_board. After that, I will be able to PUT tomato2 on the bread_slice1.\n\nEXECUTE\nNAME Dave ACTION PUT bread_slice1 cutting_board\nNAME Chad ACTION WAIT"}, {"sender": "Dave", "message": "PROCEED"}, {"sender": "Chad", "message": "PROCEED"}, {"sender": "Dave", "message": "EXECUTE\nNAME Dave ACTION PUT bread_slice1 cutting_board\nNAME Chad ACTION WAIT"}, {"sender": "Feedback", "message": "None"}, {"sender": "Action", "message": "Dave: PUT bread_slice1 cutting_board\nChad: WAIT"}];
// Get the chat container element
const chatContainer2 = document.getElementById("chat-container-2");
    
// Iterate over the JSON data and generate chat bubbles
jsonData2.forEach(
    
    data => {
    const { sender, message } = data;
    const bubble = createChatBubble(sender, message);
    
    chatContainer2.appendChild(bubble);
    
});
    
const jsonData3 = [{"sender": "Chad", "message": "EXECUTE\nNAME Chad ACTION PUT tomato2 bread_slice1\nNAME Dave ACTION WAIT"}, {"sender": "Dave", "message": "PROCEED"}, {"sender": "Chad", "message": "PROCEED"}, {"sender": "Dave", "message": "Chad, you are correct. Once you PUT tomato2 on bread_slice1, I will PICK cheese, which is the next ingredient in the recipe.\n\nEXECUTE\nNAME Chad ACTION PUT tomato2 bread_slice1\nNAME Dave ACTION PICK cheese"}, {"sender": "Feedback", "message": "None"}, {"sender": "Action", "message": "Chad: PUT tomato2 bread_slice1\nDave: PICK cheese"}];
// Get the chat container element
const chatContainer3 = document.getElementById("chat-container-3");
    
// Iterate over the JSON data and generate chat bubbles
jsonData3.forEach(
    
    data => {
    const { sender, message } = data;
    const bubble = createChatBubble(sender, message);
    
    chatContainer3.appendChild(bubble);
    
});
    
const jsonData4 = [{"sender": "Chad", "message": "Dave has already PICKed cheese, which is the correct next item according to the recipe. My next step should be to PICK beef_patty2, as it is the next ingredient on my side that needs to be stacked on the sandwich.\n\nEXECUTE\nNAME Chad ACTION PICK beef_patty2\nNAME Dave ACTION WAIT"}, {"sender": "Dave", "message": "PROCEED"}, {"sender": "Chad", "message": "PROCEED"}, {"sender": "Dave", "message": "EXECUTE\nNAME Dave ACTION PUT cheese tomato2\nNAME Chad ACTION WAIT"}, {"sender": "Feedback", "message": "None"}, {"sender": "Action", "message": "Dave: PUT cheese tomato2\nChad: WAIT"}];
// Get the chat container element
const chatContainer4 = document.getElementById("chat-container-4");
    
// Iterate over the JSON data and generate chat bubbles
jsonData4.forEach(
    
    data => {
    const { sender, message } = data;
    const bubble = createChatBubble(sender, message);
    
    chatContainer4.appendChild(bubble);
    
});
    
const jsonData5 = [{"sender": "Chad", "message": "Dave has already PUT the cheese on top of the tomato2, which is on the bread_slice1 on the cutting_board. The next item in the recipe is beef_patty2, which is on my side of the table. I will PICK beef_patty2 and wait for Dave to PUT the cheese on the tomato2 before I can PUT the beef_patty2 on the cheese.\n\nEXECUTE\nNAME Chad ACTION PICK beef_patty2\nNAME Dave ACTION WAIT"}, {"sender": "Dave", "message": "Chad, you have already PICKed beef_patty2 in the previous round, so you should be ready to PUT it on the cheese. I will PICK ham, which is the next ingredient on my side of the table and the next item in the recipe after beef_patty2.\n\nEXECUTE\nNAME Dave ACTION PICK ham\nNAME Chad ACTION PUT beef_patty2 cheese"}, {"sender": "Feedback", "message": "\nThis previous response from [Dave] failed to parse!: 'Chad, you have already PICKed beef_patty2 in the previous round, so you should be ready to PUT it on the cheese. I will PICK ham, which is the next ingredient on my side of the table and the next item in the recipe after beef_patty2.\n\nEXECUTE\nNAME Dave ACTION PICK ham\nNAME Chad ACTION PUT beef_patty2 cheese'\nObject beef_patty2 cannot be PUT down, robot Chad is not in contact with it. Re-format to strictly follow [Action Output Instruction]!"}, {"sender": "Action", "message": "Chad, you have already PICKed beef_patty2 in the previous round, so you should be ready to PUT it on the cheese. I will PICK ham, which is the next ingredient on my side of the table and the next item in the recipe after beef_patty2.\n\nEXECUTE\nNAME Dave ACTION PICK ham\nNAME Chad ACTION PUT beef_patty2 cheese"}, {"sender": "Chad", "message": "Dave, I have not yet PICKed beef_patty2. I will PICK it now and wait for your next action.\n\nEXECUTE\nNAME Chad ACTION PICK beef_patty2\nNAME Dave ACTION WAIT"}, {"sender": "Feedback", "message": "None"}, {"sender": "Action", "message": "Chad: PICK beef_patty2\nDave: WAIT"}];
// Get the chat container element
const chatContainer5 = document.getElementById("chat-container-5");
    
// Iterate over the JSON data and generate chat bubbles
jsonData5.forEach(
    
    data => {
    const { sender, message } = data;
    const bubble = createChatBubble(sender, message);
    
    chatContainer5.appendChild(bubble);
    
});
    
const jsonData6 = [{"sender": "Chad", "message": "Dave, since I am currently holding beef_patty2, I will PUT it on the cheese. After that, you can proceed with PICKing cucumber1, which is the next ingredient in the recipe on my side of the table.\n\nEXECUTE\nNAME Chad ACTION PUT beef_patty2 cheese\nNAME Dave ACTION WAIT"}, {"sender": "Dave", "message": "PROCEED"}, {"sender": "Chad", "message": "PROCEED"}, {"sender": "Dave", "message": "Chad, you are correct. After you PUT beef_patty2 on the cheese, I will PICK ham, which is the next ingredient on my side of the table and the next item in the recipe.\n\nEXECUTE\nNAME Chad ACTION PUT beef_patty2 cheese\nNAME Dave ACTION PICK ham"}, {"sender": "Feedback", "message": "None"}, {"sender": "Action", "message": "Chad: PUT beef_patty2 cheese\nDave: PICK ham"}];
// Get the chat container element
const chatContainer6 = document.getElementById("chat-container-6");
    
// Iterate over the JSON data and generate chat bubbles
jsonData6.forEach(
    
    data => {
    const { sender, message } = data;
    const bubble = createChatBubble(sender, message);
    
    chatContainer6.appendChild(bubble);
    
});
    
const jsonData7 = [{"sender": "Chad", "message": "Dave has already PICKed ham, which is the correct next item according to the recipe. Since my gripper is empty and the next item in the recipe on my side is cucumber1, I will PICK cucumber1.\n\nEXECUTE\nNAME Chad ACTION PICK cucumber1\nNAME Dave ACTION WAIT"}, {"sender": "Dave", "message": "PROCEED"}, {"sender": "Chad", "message": "PROCEED"}, {"sender": "Dave", "message": "EXECUTE\nNAME Dave ACTION PUT ham beef_patty2\nNAME Chad ACTION WAIT"}, {"sender": "Feedback", "message": "None"}, {"sender": "Action", "message": "Dave: PUT ham beef_patty2\nChad: WAIT"}];
// Get the chat container element
const chatContainer7 = document.getElementById("chat-container-7");
    
// Iterate over the JSON data and generate chat bubbles
jsonData7.forEach(
    
    data => {
    const { sender, message } = data;
    const bubble = createChatBubble(sender, message);
    
    chatContainer7.appendChild(bubble);
    
});
    
const jsonData8 = [{"sender": "Chad", "message": "Dave has already PUT ham on top of beef_patty2. The next item in the recipe on my side is cucumber1. I will PICK cucumber1 and wait for Dave's next action.\n\nEXECUTE\nNAME Chad ACTION PICK cucumber1\nNAME Dave ACTION WAIT"}, {"sender": "Dave", "message": "Chad, you should PUT cucumber1 on the ham before I proceed with the next step. I will wait for your action.\n\nEXECUTE\nNAME Chad ACTION PUT cucumber1 ham\nNAME Dave ACTION WAIT"}, {"sender": "Feedback", "message": "\nThis previous response from [Dave] failed to parse!: 'Chad, you should PUT cucumber1 on the ham before I proceed with the next step. I will wait for your action.\n\nEXECUTE\nNAME Chad ACTION PUT cucumber1 ham\nNAME Dave ACTION WAIT'\nObject cucumber1 cannot be PUT down, robot Chad is not in contact with it. Re-format to strictly follow [Action Output Instruction]!"}, {"sender": "Action", "message": "Chad, you should PUT cucumber1 on the ham before I proceed with the next step. I will wait for your action.\n\nEXECUTE\nNAME Chad ACTION PUT cucumber1 ham\nNAME Dave ACTION WAIT"}, {"sender": "Chad", "message": "EXECUTE\nNAME Chad ACTION PICK cucumber1\nNAME Dave ACTION WAIT"}, {"sender": "Feedback", "message": "None"}, {"sender": "Action", "message": "Chad: PICK cucumber1\nDave: WAIT"}];
// Get the chat container element
const chatContainer8 = document.getElementById("chat-container-8");
    
// Iterate over the JSON data and generate chat bubbles
jsonData8.forEach(
    
    data => {
    const { sender, message } = data;
    const bubble = createChatBubble(sender, message);
    
    chatContainer8.appendChild(bubble);
    
});
    
const jsonData9 = [{"sender": "Chad", "message": "EXECUTE\nNAME Chad ACTION PUT cucumber1 ham\nNAME Dave ACTION WAIT"}, {"sender": "Dave", "message": "PROCEED"}, {"sender": "Chad", "message": "PROCEED"}, {"sender": "Dave", "message": "Chad, you are correct to PUT cucumber1 on the ham. After that, I will PICK bacon, which is the next ingredient on my side of the table and the next item in the recipe.\n\nEXECUTE\nNAME Chad ACTION PUT cucumber1 ham\nNAME Dave ACTION PICK bacon"}, {"sender": "Feedback", "message": "None"}, {"sender": "Action", "message": "Chad: PUT cucumber1 ham\nDave: PICK bacon"}];
// Get the chat container element
const chatContainer9 = document.getElementById("chat-container-9");
    
// Iterate over the JSON data and generate chat bubbles
jsonData9.forEach(
    
    data => {
    const { sender, message } = data;
    const bubble = createChatBubble(sender, message);
    
    chatContainer9.appendChild(bubble);
    
});
    
const jsonData10 = [{"sender": "Chad", "message": "Dave has PICKed bacon, which is the correct next item according to the recipe. Since my gripper is empty, I will PICK beef_patty1, which is the next ingredient on my side that needs to be stacked on the sandwich.\n\nEXECUTE\nNAME Chad ACTION PICK beef_patty1\nNAME Dave ACTION WAIT"}, {"sender": "Dave", "message": "PROCEED"}, {"sender": "Chad", "message": "PROCEED"}, {"sender": "Dave", "message": "Chad, you are correct to PICK beef_patty1. I will PUT bacon on the cucumber1, which is the next step in the recipe.\n\nEXECUTE\nNAME Dave ACTION PUT bacon cucumber1\nNAME Chad ACTION WAIT"}, {"sender": "Feedback", "message": "None"}, {"sender": "Action", "message": "Dave: PUT bacon cucumber1\nChad: WAIT"}];
// Get the chat container element
const chatContainer10 = document.getElementById("chat-container-10");
    
// Iterate over the JSON data and generate chat bubbles
jsonData10.forEach(
    
    data => {
    const { sender, message } = data;
    const bubble = createChatBubble(sender, message);
    
    chatContainer10.appendChild(bubble);
    
});
    
const jsonData11 = [{"sender": "Chad", "message": "Dave has PUT bacon on the cucumber1. Now, I will PUT beef_patty1 on the bacon as it is the next item in the recipe and it is on my side of the table.\n\nEXECUTE\nNAME Chad ACTION PUT beef_patty1 bacon\nNAME Dave ACTION WAIT"}, {"sender": "Dave", "message": "PROCEED"}, {"sender": "Chad", "message": "PROCEED"}, {"sender": "Dave", "message": "EXECUTE\nNAME Dave ACTION PICK bread_slice2\nNAME Chad ACTION WAIT"}, {"sender": "Feedback", "message": "None"}, {"sender": "Action", "message": "Dave: PICK bread_slice2\nChad: WAIT"}];
// Get the chat container element
const chatContainer11 = document.getElementById("chat-container-11");
    
// Iterate over the JSON data and generate chat bubbles
jsonData11.forEach(
    
    data => {
    const { sender, message } = data;
    const bubble = createChatBubble(sender, message);
    
    chatContainer11.appendChild(bubble);
    
});
    
const jsonData12 = [{"sender": "Chad", "message": "Dave has PICKed bread_slice2, which is the correct next item according to the recipe. Since my gripper is empty, I will PUT beef_patty1 on the bacon as it is the next item in the recipe and it is on my side of the table.\n\nEXECUTE\nNAME Chad ACTION PUT beef_patty1 bacon\nNAME Dave ACTION WAIT"}, {"sender": "Dave", "message": "PROCEED"}, {"sender": "Chad", "message": "PROCEED"}, {"sender": "Dave", "message": "EXECUTE\nNAME Dave ACTION PUT bread_slice2 beef_patty1\nNAME Chad ACTION WAIT"}, {"sender": "Feedback", "message": "[Environment Feedback]:\n- Previous Plan:\nNAME Dave ACTION PUT bread_slice2 beef_patty1\nNAME Chad ACTION WAIT\nTask Constraints:\n faild, beef_patty1 is not on cutting_board\n\n"}, {"sender": "Action", "message": "Dave: PUT bread_slice2 beef_patty1\nChad: WAIT"}, {"sender": "Chad", "message": "Dave, there was an error because beef_patty1 was not yet on the cutting_board. I will PUT beef_patty1 on the bacon, and then you can PUT bread_slice2 on top of it to complete the sandwich.\n\nEXECUTE\nNAME Chad ACTION PUT beef_patty1 bacon\nNAME Dave ACTION WAIT"}, {"sender": "Feedback", "message": "\nThis previous response from [Chad] failed to parse!: 'Dave, there was an error because beef_patty1 was not yet on the cutting_board. I will PUT beef_patty1 on the bacon, and then you can PUT bread_slice2 on top of it to complete the sandwich.\n\nEXECUTE\nNAME Chad ACTION PUT beef_patty1 bacon\nNAME Dave ACTION WAIT'\nObject beef_patty1 cannot be PUT down, robot Chad is not in contact with it. Re-format to strictly follow [Action Output Instruction]!"}, {"sender": "Action", "message": "Dave, there was an error because beef_patty1 was not yet on the cutting_board. I will PUT beef_patty1 on the bacon, and then you can PUT bread_slice2 on top of it to complete the sandwich.\n\nEXECUTE\nNAME Chad ACTION PUT beef_patty1 bacon\nNAME Dave ACTION WAIT"}, {"sender": "Chad", "message": "EXECUTE\nNAME Chad ACTION PICK beef_patty1\nNAME Dave ACTION WAIT"}, {"sender": "Feedback", "message": "None"}, {"sender": "Action", "message": "Chad: PICK beef_patty1\nDave: WAIT"}];
// Get the chat container element
const chatContainer12 = document.getElementById("chat-container-12");
    
// Iterate over the JSON data and generate chat bubbles
jsonData12.forEach(
    
    data => {
    const { sender, message } = data;
    const bubble = createChatBubble(sender, message);
    
    chatContainer12.appendChild(bubble);
    
});
    
const jsonData13 = [{"sender": "Chad", "message": "Dave has already PICKed bread_slice2, which is the correct final item according to the recipe. Since my gripper is holding beef_patty1, I will PUT beef_patty1 on the bacon as it is the next item in the recipe.\n\nEXECUTE\nNAME Chad ACTION PUT beef_patty1 bacon\nNAME Dave ACTION WAIT"}, {"sender": "Dave", "message": "PROCEED"}, {"sender": "Chad", "message": "PROCEED"}, {"sender": "Dave", "message": "EXECUTE\nNAME Dave ACTION PUT bread_slice2 beef_patty1\nNAME Chad ACTION WAIT"}, {"sender": "Feedback", "message": "[Environment Feedback]:\n- Previous Plan:\nNAME Dave ACTION PUT bread_slice2 beef_patty1\nNAME Chad ACTION WAIT\nTask Constraints:\n faild, beef_patty1 is not on cutting_board\n\n"}, {"sender": "Action", "message": "Dave: PUT bread_slice2 beef_patty1\nChad: WAIT"}, {"sender": "Chad", "message": "EXECUTE\nNAME Chad ACTION PUT beef_patty1 bacon\nNAME Dave ACTION WAIT"}, {"sender": "Feedback", "message": "None"}, {"sender": "Action", "message": "Chad: PUT beef_patty1 bacon\nDave: WAIT"}];
// Get the chat container element
const chatContainer13 = document.getElementById("chat-container-13");
    
// Iterate over the JSON data and generate chat bubbles
jsonData13.forEach(
    
    data => {
    const { sender, message } = data;
    const bubble = createChatBubble(sender, message);
    
    chatContainer13.appendChild(bubble);
    
});
    
const jsonData14 = [{"sender": "Chad", "message": "Dave has already PICKed bread_slice2, which is the correct final item according to the recipe. Since my gripper is empty and all the ingredients are stacked correctly, I will WAIT for Dave to PUT bread_slice2 on top of beef_patty1 to complete the [big_sandwich].\n\nEXECUTE\nNAME Chad ACTION WAIT\nNAME Dave ACTION PUT bread_slice2 beef_patty1"}, {"sender": "Dave", "message": "PROCEED"}, {"sender": "Chad", "message": "PROCEED"}, {"sender": "Dave", "message": "EXECUTE\nNAME Chad ACTION WAIT\nNAME Dave ACTION PUT bread_slice2 beef_patty1"}, {"sender": "Feedback", "message": "None"}, {"sender": "Action", "message": "Chad: WAIT\nDave: PUT bread_slice2 beef_patty1"}];
// Get the chat container element
const chatContainer14 = document.getElementById("chat-container-14");
    
// Iterate over the JSON data and generate chat bubbles
jsonData14.forEach(
    
    data => {
    const { sender, message } = data;
    const bubble = createChatBubble(sender, message);
    
    chatContainer14.appendChild(bubble);
    
});
    