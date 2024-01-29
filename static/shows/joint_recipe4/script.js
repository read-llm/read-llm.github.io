const jsonData0 = [{"sender": "Chad", "message": "Dave, since you are on the left side, you should PICK bread_slice1 and PUT it on the cutting_board. Meanwhile, I will PICK tomato2 from the right side.\n\nEXECUTE\nNAME Chad ACTION PICK tomato2\nNAME Dave ACTION PUT bread_slice1 cutting_board"}, {"sender": "ScoreFeedback", "message": "\n[Scores]\n[Chad Response]:\nDave, since you are on the left side, you should PICK bread_slice1 and PUT it on the cutting_board. Meanwhile, I will PICK tomato2 from the right side.\n\nEXECUTE\nNAME Chad ACTION PICK tomato2\nNAME Dave ACTION PUT bread_slice1 cutting_board\n[Evaluation Score]:\nThe advantage score of Chad's plan is 2.007!\n\n"}, {"sender": "Feedback", "message": "\nThis previous response from [Chad] failed to parse!: 'EXECUTE\nNAME Chad ACTION PICK tomato2\nNAME Dave ACTION PUT bread_slice1 cutting_board'\nObject bread_slice1 cannot be PUT down, robot Dave is not in contact with it. Re-format to strictly follow [Action Output Instruction]!"}, {"sender": "Action", "message": "EXECUTE\nNAME Chad ACTION PICK tomato2\nNAME Dave ACTION PUT bread_slice1 cutting_board"}, {"sender": "Chad", "message": "Dave, let's correct our previous actions. I will PICK tomato2 since it's on my side, and you should PICK bread_slice1. Once you have bread_slice1, you can then PUT it on the cutting_board in the next round.\n\nEXECUTE\nNAME Chad ACTION PICK tomato2\nNAME Dave ACTION PICK bread_slice1"}, {"sender": "ScoreFeedback", "message": "\n[Scores]\n[Chad Response]:\nDave, since you are on the left side, you should PICK bread_slice1 and PUT it on the cutting_board. Meanwhile, I will PICK tomato2 from the right side.\n\nEXECUTE\nNAME Chad ACTION PICK tomato2\nNAME Dave ACTION PUT bread_slice1 cutting_board\n[Evaluation Score]:\nThe advantage score of Chad's plan is 2.007!\n\n[Chad Response]:\nDave, let's correct our previous actions. I will PICK tomato2 since it's on my side, and you should PICK bread_slice1. Once you have bread_slice1, you can then PUT it on the cutting_board in the next round.\n\nEXECUTE\nNAME Chad ACTION PICK tomato2\nNAME Dave ACTION PICK bread_slice1\n[Evaluation Score]:\nThe advantage score of Chad's plan is -0.0!\n\n"}, {"sender": "Feedback", "message": "None"}, {"sender": "Action", "message": "Chad: PICK tomato2\nDave: PICK bread_slice1"}];
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
    
const jsonData1 = [{"sender": "Chad", "message": "Dave, since you have bread_slice1, go ahead and PUT it on the cutting_board. I will WAIT this round since I can't PUT tomato2 on the bread until it's on the cutting_board.\n\nEXECUTE\nNAME Chad ACTION WAIT\nNAME Dave ACTION PUT bread_slice1 cutting_board"}, {"sender": "ScoreFeedback", "message": "\n[Scores]\n[Chad Response]:\nDave, since you have bread_slice1, go ahead and PUT it on the cutting_board. I will WAIT this round since I can't PUT tomato2 on the bread until it's on the cutting_board.\n\nEXECUTE\nNAME Chad ACTION WAIT\nNAME Dave ACTION PUT bread_slice1 cutting_board\n[Evaluation Score]:\nThe advantage score of Chad's plan is 2.008!\n\n"}, {"sender": "Feedback", "message": "None"}, {"sender": "Action", "message": "Chad: WAIT\nDave: PUT bread_slice1 cutting_board"}];
// Get the chat container element
const chatContainer1 = document.getElementById("chat-container-1");
    
// Iterate over the JSON data and generate chat bubbles
jsonData1.forEach(
    
    data => {
    const { sender, message } = data;
    const bubble = createChatBubble(sender, message);
    
    chatContainer1.appendChild(bubble);
    
});
    
const jsonData2 = [{"sender": "Chad", "message": "Dave, since I have tomato2 in my gripper, I will PUT tomato2 on bread_slice1 which is already on the cutting_board. You should PICK cheese since it's the next ingredient in the recipe and it's on your side of the table.\n\nEXECUTE\nNAME Chad ACTION PUT tomato2 bread_slice1\nNAME Dave ACTION PICK cheese"}, {"sender": "ScoreFeedback", "message": "\n[Scores]\n[Chad Response]:\nDave, since I have tomato2 in my gripper, I will PUT tomato2 on bread_slice1 which is already on the cutting_board. You should PICK cheese since it's the next ingredient in the recipe and it's on your side of the table.\n\nEXECUTE\nNAME Chad ACTION PUT tomato2 bread_slice1\nNAME Dave ACTION PICK cheese\n[Evaluation Score]:\nThe advantage score of Chad's plan is 2.009!\n\n"}, {"sender": "Feedback", "message": "None"}, {"sender": "Action", "message": "Chad: PUT tomato2 bread_slice1\nDave: PICK cheese"}];
// Get the chat container element
const chatContainer2 = document.getElementById("chat-container-2");
    
// Iterate over the JSON data and generate chat bubbles
jsonData2.forEach(
    
    data => {
    const { sender, message } = data;
    const bubble = createChatBubble(sender, message);
    
    chatContainer2.appendChild(bubble);
    
});
    
const jsonData3 = [{"sender": "Chad", "message": "Dave, since you have the cheese in your gripper, you should PUT cheese on tomato2 which is already on bread_slice1 on the cutting_board. I will PICK beef_patty2 since it's the next ingredient we need after cheese and it's on my side of the table.\n\nEXECUTE\nNAME Chad ACTION PICK beef_patty2\nNAME Dave ACTION PUT cheese tomato2"}, {"sender": "ScoreFeedback", "message": "\n[Scores]\n[Chad Response]:\nDave, since you have the cheese in your gripper, you should PUT cheese on tomato2 which is already on bread_slice1 on the cutting_board. I will PICK beef_patty2 since it's the next ingredient we need after cheese and it's on my side of the table.\n\nEXECUTE\nNAME Chad ACTION PICK beef_patty2\nNAME Dave ACTION PUT cheese tomato2\n[Evaluation Score]:\nThe advantage score of Chad's plan is 1.339!\n\n"}, {"sender": "Feedback", "message": "None"}, {"sender": "Action", "message": "Chad: PICK beef_patty2\nDave: PUT cheese tomato2"}];
// Get the chat container element
const chatContainer3 = document.getElementById("chat-container-3");
    
// Iterate over the JSON data and generate chat bubbles
jsonData3.forEach(
    
    data => {
    const { sender, message } = data;
    const bubble = createChatBubble(sender, message);
    
    chatContainer3.appendChild(bubble);
    
});
    
const jsonData4 = [{"sender": "Chad", "message": "Dave, since my gripper is holding beef_patty2, I will PUT beef_patty2 on cheese which is already on tomato2 on the cutting_board. You should PICK ham since it's the next ingredient we need after beef_patty2 and it's on your side of the table.\n\nEXECUTE\nNAME Chad ACTION PUT beef_patty2 cheese\nNAME Dave ACTION PICK ham"}, {"sender": "ScoreFeedback", "message": "\n[Scores]\n[Chad Response]:\nDave, since my gripper is holding beef_patty2, I will PUT beef_patty2 on cheese which is already on tomato2 on the cutting_board. You should PICK ham since it's the next ingredient we need after beef_patty2 and it's on your side of the table.\n\nEXECUTE\nNAME Chad ACTION PUT beef_patty2 cheese\nNAME Dave ACTION PICK ham\n[Evaluation Score]:\nThe advantage score of Chad's plan is 2.008!\n\n"}, {"sender": "Feedback", "message": "None"}, {"sender": "Action", "message": "Chad: PUT beef_patty2 cheese\nDave: PICK ham"}];
// Get the chat container element
const chatContainer4 = document.getElementById("chat-container-4");
    
// Iterate over the JSON data and generate chat bubbles
jsonData4.forEach(
    
    data => {
    const { sender, message } = data;
    const bubble = createChatBubble(sender, message);
    
    chatContainer4.appendChild(bubble);
    
});
    
const jsonData5 = [{"sender": "Chad", "message": "Dave, since you are holding ham, you should PUT ham on beef_patty2 which is already on cheese on the cutting_board. I will PICK cucumber1 since it's the next ingredient we need after ham and it's on my side of the table.\n\nEXECUTE\nNAME Chad ACTION PICK cucumber1\nNAME Dave ACTION PUT ham beef_patty2"}, {"sender": "ScoreFeedback", "message": "\n[Scores]\n[Chad Response]:\nDave, since you are holding ham, you should PUT ham on beef_patty2 which is already on cheese on the cutting_board. I will PICK cucumber1 since it's the next ingredient we need after ham and it's on my side of the table.\n\nEXECUTE\nNAME Chad ACTION PICK cucumber1\nNAME Dave ACTION PUT ham beef_patty2\n[Evaluation Score]:\nThe advantage score of Chad's plan is 1.34!\n\n"}, {"sender": "Feedback", "message": "None"}, {"sender": "Action", "message": "Chad: PICK cucumber1\nDave: PUT ham beef_patty2"}];
// Get the chat container element
const chatContainer5 = document.getElementById("chat-container-5");
    
// Iterate over the JSON data and generate chat bubbles
jsonData5.forEach(
    
    data => {
    const { sender, message } = data;
    const bubble = createChatBubble(sender, message);
    
    chatContainer5.appendChild(bubble);
    
});
    
const jsonData6 = [{"sender": "Chad", "message": "Dave, since my gripper is holding cucumber1, I will PUT cucumber1 on ham which is already on beef_patty2 on the cutting_board. You should PICK bacon since it's the next ingredient we need after cucumber1 and it's on your side of the table.\n\nEXECUTE\nNAME Chad ACTION PUT cucumber1 ham\nNAME Dave ACTION PICK bacon"}, {"sender": "ScoreFeedback", "message": "\n[Scores]\n[Chad Response]:\nDave, since my gripper is holding cucumber1, I will PUT cucumber1 on ham which is already on beef_patty2 on the cutting_board. You should PICK bacon since it's the next ingredient we need after cucumber1 and it's on your side of the table.\n\nEXECUTE\nNAME Chad ACTION PUT cucumber1 ham\nNAME Dave ACTION PICK bacon\n[Evaluation Score]:\nThe advantage score of Chad's plan is 2.009!\n\n"}, {"sender": "Feedback", "message": "None"}, {"sender": "Action", "message": "Chad: PUT cucumber1 ham\nDave: PICK bacon"}];
// Get the chat container element
const chatContainer6 = document.getElementById("chat-container-6");
    
// Iterate over the JSON data and generate chat bubbles
jsonData6.forEach(
    
    data => {
    const { sender, message } = data;
    const bubble = createChatBubble(sender, message);
    
    chatContainer6.appendChild(bubble);
    
});
    
const jsonData7 = [{"sender": "Chad", "message": "Dave, since you are holding bacon, you should PUT bacon on cucumber1 which is already on ham on the cutting_board. I will PICK beef_patty1 from the right side since it's the next ingredient we need after bacon.\n\nEXECUTE\nNAME Chad ACTION PICK beef_patty1\nNAME Dave ACTION PUT bacon cucumber1"}, {"sender": "ScoreFeedback", "message": "\n[Scores]\n[Chad Response]:\nDave, since you are holding bacon, you should PUT bacon on cucumber1 which is already on ham on the cutting_board. I will PICK beef_patty1 from the right side since it's the next ingredient we need after bacon.\n\nEXECUTE\nNAME Chad ACTION PICK beef_patty1\nNAME Dave ACTION PUT bacon cucumber1\n[Evaluation Score]:\nThe advantage score of Chad's plan is 2.009!\n\n"}, {"sender": "Feedback", "message": "None"}, {"sender": "Action", "message": "Chad: PICK beef_patty1\nDave: PUT bacon cucumber1"}];
// Get the chat container element
const chatContainer7 = document.getElementById("chat-container-7");
    
// Iterate over the JSON data and generate chat bubbles
jsonData7.forEach(
    
    data => {
    const { sender, message } = data;
    const bubble = createChatBubble(sender, message);
    
    chatContainer7.appendChild(bubble);
    
});
    
const jsonData8 = [{"sender": "Chad", "message": "Dave, since I am holding beef_patty1, I should PUT beef_patty1 on bacon, which is already on cucumber1 on the cutting_board. This follows the recipe order correctly. You should PICK bread_slice2 from the left side, as it's the next ingredient we need after beef_patty1.\n\nEXECUTE\nNAME Chad ACTION PUT beef_patty1 bacon\nNAME Dave ACTION PICK bread_slice2"}, {"sender": "ScoreFeedback", "message": "\n[Scores]\n[Chad Response]:\nDave, since I am holding beef_patty1, I should PUT beef_patty1 on bacon, which is already on cucumber1 on the cutting_board. This follows the recipe order correctly. You should PICK bread_slice2 from the left side, as it's the next ingredient we need after beef_patty1.\n\nEXECUTE\nNAME Chad ACTION PUT beef_patty1 bacon\nNAME Dave ACTION PICK bread_slice2\n[Evaluation Score]:\nThe advantage score of Chad's plan is 0.981!\n\n"}, {"sender": "Feedback", "message": "None"}, {"sender": "Action", "message": "Chad: PUT beef_patty1 bacon\nDave: PICK bread_slice2"}];
// Get the chat container element
const chatContainer8 = document.getElementById("chat-container-8");
    
// Iterate over the JSON data and generate chat bubbles
jsonData8.forEach(
    
    data => {
    const { sender, message } = data;
    const bubble = createChatBubble(sender, message);
    
    chatContainer8.appendChild(bubble);
    
});
    
const jsonData9 = [{"sender": "Chad", "message": "Dave, since you are holding bread_slice2, you should PUT bread_slice2 on beef_patty1 to complete the sandwich stack according to the recipe. I will PICK cucumber2 from the right side, as it's the next ingredient we need to start the next sandwich.\n\nEXECUTE\nNAME Chad ACTION PICK cucumber2\nNAME Dave ACTION PUT bread_slice2 beef_patty1"}, {"sender": "ScoreFeedback", "message": "\n[Scores]\n[Chad Response]:\nDave, since you are holding bread_slice2, you should PUT bread_slice2 on beef_patty1 to complete the sandwich stack according to the recipe. I will PICK cucumber2 from the right side, as it's the next ingredient we need to start the next sandwich.\n\nEXECUTE\nNAME Chad ACTION PICK cucumber2\nNAME Dave ACTION PUT bread_slice2 beef_patty1\n[Evaluation Score]:\nThe advantage score of Chad's plan is -0.003!\n\n"}, {"sender": "Feedback", "message": "None"}, {"sender": "Action", "message": "Chad: PICK cucumber2\nDave: PUT bread_slice2 beef_patty1"}];
// Get the chat container element
const chatContainer9 = document.getElementById("chat-container-9");
    
// Iterate over the JSON data and generate chat bubbles
jsonData9.forEach(
    
    data => {
    const { sender, message } = data;
    const bubble = createChatBubble(sender, message);
    
    chatContainer9.appendChild(bubble);
    
});
    