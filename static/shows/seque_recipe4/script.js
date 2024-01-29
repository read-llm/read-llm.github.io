const jsonData0 = [{"sender": "Chad", "message": "Dave, you should PICK bread_slice1 and PUT it on the cutting_board. Meanwhile, I will PICK tomato2 since it's the next item we need after the bread_slice1.\n\nPROCEED\nNAME Chad ACTION PICK tomato2"}, {"sender": "ScoreFeedback", "message": "\n[Scores]\n[Chad Response]:\nDave, you should PICK bread_slice1 and PUT it on the cutting_board. Meanwhile, I will PICK tomato2 since it's the next item we need after the bread_slice1.\n\nPROCEED\nNAME Chad ACTION PICK tomato2\n[Evaluation Score]:\nThe advantage score of Chad's action is -0.311!\n\n"}, {"sender": "Dave", "message": "Chad, your plan is good, but you've made a mistake. You should PICK tomato1, not tomato2, as tomato1 is on my side and tomato2 should be on your side. I will PICK bread_slice1 and PUT it on the cutting_board as you suggested.\n\nPROCEED\nNAME Dave ACTION PICK bread_slice1"}, {"sender": "ScoreFeedback", "message": "\n[Scores]\n[Chad Response]:\nDave, you should PICK bread_slice1 and PUT it on the cutting_board. Meanwhile, I will PICK tomato2 since it's the next item we need after the bread_slice1.\n\nPROCEED\nNAME Chad ACTION PICK tomato2\n[Evaluation Score]:\nThe advantage score of Chad's action is -0.311!\n\n[Dave Response]:\nChad, your plan is good, but you've made a mistake. You should PICK tomato1, not tomato2, as tomato1 is on my side and tomato2 should be on your side. I will PICK bread_slice1 and PUT it on the cutting_board as you suggested.\n\nPROCEED\nNAME Dave ACTION PICK bread_slice1\n[Evaluation Score]:\nThe advantage score of Dave's action is 4.284!\n\n"}, {"sender": "Feedback", "message": "None"}, {"sender": "Action", "message": "Chad: PICK tomato2\nDave: PICK bread_slice1"}];
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
    
const jsonData1 = [{"sender": "Chad", "message": "Dave, since I am currently holding tomato2, I will PUT tomato2 on bread_slice1 which is on the cutting_board. This follows the recipe order. You should WAIT this round since only one robot can PUT at a time.\n\nPROCEED\nNAME Chad ACTION PUT tomato2 cutting_board"}, {"sender": "ScoreFeedback", "message": "\n[Scores]\n[Chad Response]:\nDave, since I am currently holding tomato2, I will PUT tomato2 on bread_slice1 which is on the cutting_board. This follows the recipe order. You should WAIT this round since only one robot can PUT at a time.\n\nPROCEED\nNAME Chad ACTION PUT tomato2 cutting_board\n[Evaluation Score]:\nThe advantage score of Chad's action is -2.107!\n\n"}, {"sender": "Chad", "message": "Dave, I made a mistake in my previous action. I should not PUT tomato2 on bread_slice1 because bread_slice1 is not yet on the cutting_board. I will WAIT this round so you can PUT bread_slice1 on the cutting_board. Once that is done, I can then PUT tomato2 on the bread_slice1 in the next round.\n\nPROCEED\nNAME Chad ACTION WAIT"}, {"sender": "ScoreFeedback", "message": "\n[Scores]\n[Chad Response]:\nDave, since I am currently holding tomato2, I will PUT tomato2 on bread_slice1 which is on the cutting_board. This follows the recipe order. You should WAIT this round since only one robot can PUT at a time.\n\nPROCEED\nNAME Chad ACTION PUT tomato2 cutting_board\n[Evaluation Score]:\nThe advantage score of Chad's action is -2.107!\n\n[Chad Response]:\nDave, I made a mistake in my previous action. I should not PUT tomato2 on bread_slice1 because bread_slice1 is not yet on the cutting_board. I will WAIT this round so you can PUT bread_slice1 on the cutting_board. Once that is done, I can then PUT tomato2 on the bread_slice1 in the next round.\n\nPROCEED\nNAME Chad ACTION WAIT\n[Evaluation Score]:\nThe advantage score of Chad's action is 2.915!\n\n"}, {"sender": "Dave", "message": "Chad, that's correct. I will PUT bread_slice1 on the cutting_board as planned. Then you can proceed with the tomato2 in the next round.\n\nPROCEED\nNAME Dave ACTION PUT bread_slice1 cutting_board"}, {"sender": "ScoreFeedback", "message": "\n[Scores]\n[Chad Response]:\nDave, since I am currently holding tomato2, I will PUT tomato2 on bread_slice1 which is on the cutting_board. This follows the recipe order. You should WAIT this round since only one robot can PUT at a time.\n\nPROCEED\nNAME Chad ACTION PUT tomato2 cutting_board\n[Evaluation Score]:\nThe advantage score of Chad's action is -2.107!\n\n[Chad Response]:\nDave, I made a mistake in my previous action. I should not PUT tomato2 on bread_slice1 because bread_slice1 is not yet on the cutting_board. I will WAIT this round so you can PUT bread_slice1 on the cutting_board. Once that is done, I can then PUT tomato2 on the bread_slice1 in the next round.\n\nPROCEED\nNAME Chad ACTION WAIT\n[Evaluation Score]:\nThe advantage score of Chad's action is 2.915!\n\n[Dave Response]:\nChad, that's correct. I will PUT bread_slice1 on the cutting_board as planned. Then you can proceed with the tomato2 in the next round.\n\nPROCEED\nNAME Dave ACTION PUT bread_slice1 cutting_board\n[Evaluation Score]:\nThe advantage score of Dave's action is 0.991!\n\n"}, {"sender": "Feedback", "message": "None"}, {"sender": "Action", "message": "Chad: WAIT\nDave: PUT bread_slice1 cutting_board"}];
// Get the chat container element
const chatContainer1 = document.getElementById("chat-container-1");
    
// Iterate over the JSON data and generate chat bubbles
jsonData1.forEach(
    
    data => {
    const { sender, message } = data;
    const bubble = createChatBubble(sender, message);
    
    chatContainer1.appendChild(bubble);
    
});
    
const jsonData2 = [{"sender": "Chad", "message": "Dave, now that bread_slice1 is on the cutting_board, I will PUT tomato2 on bread_slice1 as per the recipe order.\n\nPROCEED\nNAME Chad ACTION PUT tomato2 bread_slice1"}, {"sender": "ScoreFeedback", "message": "\n[Scores]\n[Chad Response]:\nDave, now that bread_slice1 is on the cutting_board, I will PUT tomato2 on bread_slice1 as per the recipe order.\n\nPROCEED\nNAME Chad ACTION PUT tomato2 bread_slice1\n[Evaluation Score]:\nThe advantage score of Chad's action is 2.98!\n\n"}, {"sender": "Dave", "message": "Chad, your plan is correct. Since you will PUT tomato2 on bread_slice1, I will WAIT this round.\n\nPROCEED\nNAME Dave ACTION WAIT"}, {"sender": "ScoreFeedback", "message": "\n[Scores]\n[Chad Response]:\nDave, now that bread_slice1 is on the cutting_board, I will PUT tomato2 on bread_slice1 as per the recipe order.\n\nPROCEED\nNAME Chad ACTION PUT tomato2 bread_slice1\n[Evaluation Score]:\nThe advantage score of Chad's action is 2.98!\n\n[Dave Response]:\nChad, your plan is correct. Since you will PUT tomato2 on bread_slice1, I will WAIT this round.\n\nPROCEED\nNAME Dave ACTION WAIT\n[Evaluation Score]:\nThe advantage score of Dave's action is -2.932!\n\n"}, {"sender": "Dave", "message": "Chad, since you are putting tomato2 on bread_slice1, I should prepare the next ingredient. I will PICK cheese, which is the next item needed for the recipe after tomato2.\n\nPROCEED\nNAME Dave ACTION PICK cheese"}, {"sender": "ScoreFeedback", "message": "\n[Scores]\n[Chad Response]:\nDave, now that bread_slice1 is on the cutting_board, I will PUT tomato2 on bread_slice1 as per the recipe order.\n\nPROCEED\nNAME Chad ACTION PUT tomato2 bread_slice1\n[Evaluation Score]:\nThe advantage score of Chad's action is 2.98!\n\n[Dave Response]:\nChad, your plan is correct. Since you will PUT tomato2 on bread_slice1, I will WAIT this round.\n\nPROCEED\nNAME Dave ACTION WAIT\n[Evaluation Score]:\nThe advantage score of Dave's action is -2.932!\n\n[Dave Response]:\nChad, since you are putting tomato2 on bread_slice1, I should prepare the next ingredient. I will PICK cheese, which is the next item needed for the recipe after tomato2.\n\nPROCEED\nNAME Dave ACTION PICK cheese\n[Evaluation Score]:\nThe advantage score of Dave's action is 0.99!\n\n"}, {"sender": "Feedback", "message": "None"}, {"sender": "Action", "message": "Chad: PUT tomato2 bread_slice1\nDave: PICK cheese"}];
// Get the chat container element
const chatContainer2 = document.getElementById("chat-container-2");
    
// Iterate over the JSON data and generate chat bubbles
jsonData2.forEach(
    
    data => {
    const { sender, message } = data;
    const bubble = createChatBubble(sender, message);
    
    chatContainer2.appendChild(bubble);
    
});
    
const jsonData3 = [{"sender": "Chad", "message": "Dave, since you have picked up the cheese, you can now PUT cheese on tomato2 which is on bread_slice1. I will PICK beef_patty2, which is the next ingredient needed after cheese.\n\nPROCEED\nNAME Chad ACTION PICK beef_patty2"}, {"sender": "ScoreFeedback", "message": "\n[Scores]\n[Chad Response]:\nDave, since you have picked up the cheese, you can now PUT cheese on tomato2 which is on bread_slice1. I will PICK beef_patty2, which is the next ingredient needed after cheese.\n\nPROCEED\nNAME Chad ACTION PICK beef_patty2\n[Evaluation Score]:\nThe advantage score of Chad's action is 2.991!\n\n"}, {"sender": "Dave", "message": "Chad, that's a good plan. I will PUT cheese on tomato2 which is on bread_slice1.\n\nPROCEED\nNAME Dave ACTION PUT cheese tomato2"}, {"sender": "ScoreFeedback", "message": "\n[Scores]\n[Chad Response]:\nDave, since you have picked up the cheese, you can now PUT cheese on tomato2 which is on bread_slice1. I will PICK beef_patty2, which is the next ingredient needed after cheese.\n\nPROCEED\nNAME Chad ACTION PICK beef_patty2\n[Evaluation Score]:\nThe advantage score of Chad's action is 2.991!\n\n[Dave Response]:\nChad, that's a good plan. I will PUT cheese on tomato2 which is on bread_slice1.\n\nPROCEED\nNAME Dave ACTION PUT cheese tomato2\n[Evaluation Score]:\nThe advantage score of Dave's action is 0.842!\n\n"}, {"sender": "Feedback", "message": "None"}, {"sender": "Action", "message": "Chad: PICK beef_patty2\nDave: PUT cheese tomato2"}];
// Get the chat container element
const chatContainer3 = document.getElementById("chat-container-3");
    
// Iterate over the JSON data and generate chat bubbles
jsonData3.forEach(
    
    data => {
    const { sender, message } = data;
    const bubble = createChatBubble(sender, message);
    
    chatContainer3.appendChild(bubble);
    
});
    
const jsonData4 = [{"sender": "Chad", "message": "Dave, since I am holding beef_patty2, I will PUT it on cheese which is on top of tomato2 on bread_slice1. This follows the recipe order correctly. You should WAIT this round since only one robot can PUT at a time.\n\nPROCEED\nNAME Chad ACTION PUT beef_patty2 cheese"}, {"sender": "ScoreFeedback", "message": "\n[Scores]\n[Chad Response]:\nDave, since I am holding beef_patty2, I will PUT it on cheese which is on top of tomato2 on bread_slice1. This follows the recipe order correctly. You should WAIT this round since only one robot can PUT at a time.\n\nPROCEED\nNAME Chad ACTION PUT beef_patty2 cheese\n[Evaluation Score]:\nThe advantage score of Chad's action is 3.084!\n\n"}, {"sender": "Dave", "message": "Chad, your action is correct. I will WAIT this round as you PUT beef_patty2 on the cheese.\n\nPROCEED\nNAME Dave ACTION WAIT"}, {"sender": "ScoreFeedback", "message": "\n[Scores]\n[Chad Response]:\nDave, since I am holding beef_patty2, I will PUT it on cheese which is on top of tomato2 on bread_slice1. This follows the recipe order correctly. You should WAIT this round since only one robot can PUT at a time.\n\nPROCEED\nNAME Chad ACTION PUT beef_patty2 cheese\n[Evaluation Score]:\nThe advantage score of Chad's action is 3.084!\n\n[Dave Response]:\nChad, your action is correct. I will WAIT this round as you PUT beef_patty2 on the cheese.\n\nPROCEED\nNAME Dave ACTION WAIT\n[Evaluation Score]:\nThe advantage score of Dave's action is -0.989!\n\n"}, {"sender": "Dave", "message": "Chad, while you PUT beef_patty2 on the cheese, I will PICK ham, which is the next ingredient we need after beef_patty2 according to the recipe.\n\nPROCEED\nNAME Dave ACTION PICK ham"}, {"sender": "ScoreFeedback", "message": "\n[Scores]\n[Chad Response]:\nDave, since I am holding beef_patty2, I will PUT it on cheese which is on top of tomato2 on bread_slice1. This follows the recipe order correctly. You should WAIT this round since only one robot can PUT at a time.\n\nPROCEED\nNAME Chad ACTION PUT beef_patty2 cheese\n[Evaluation Score]:\nThe advantage score of Chad's action is 3.084!\n\n[Dave Response]:\nChad, your action is correct. I will WAIT this round as you PUT beef_patty2 on the cheese.\n\nPROCEED\nNAME Dave ACTION WAIT\n[Evaluation Score]:\nThe advantage score of Dave's action is -0.989!\n\n[Dave Response]:\nChad, while you PUT beef_patty2 on the cheese, I will PICK ham, which is the next ingredient we need after beef_patty2 according to the recipe.\n\nPROCEED\nNAME Dave ACTION PICK ham\n[Evaluation Score]:\nThe advantage score of Dave's action is 0.776!\n\n"}, {"sender": "Feedback", "message": "None"}, {"sender": "Action", "message": "Chad: PUT beef_patty2 cheese\nDave: PICK ham"}];
// Get the chat container element
const chatContainer4 = document.getElementById("chat-container-4");
    
// Iterate over the JSON data and generate chat bubbles
jsonData4.forEach(
    
    data => {
    const { sender, message } = data;
    const bubble = createChatBubble(sender, message);
    
    chatContainer4.appendChild(bubble);
    
});
    
const jsonData5 = [{"sender": "Chad", "message": "Dave, since you have PICKed ham, you should now PUT ham on top of beef_patty2. I will WAIT this round because only one robot can PUT at a time.\n\nPROCEED\nNAME Chad ACTION WAIT"}, {"sender": "ScoreFeedback", "message": "\n[Scores]\n[Chad Response]:\nDave, since you have PICKed ham, you should now PUT ham on top of beef_patty2. I will WAIT this round because only one robot can PUT at a time.\n\nPROCEED\nNAME Chad ACTION WAIT\n[Evaluation Score]:\nThe advantage score of Chad's action is -3.348!\n\n"}, {"sender": "Chad", "message": "Dave, while you PUT ham on top of beef_patty2, I will PICK cucumber1, which is the next ingredient we need after ham according to the recipe.\n\nPROCEED\nNAME Chad ACTION PICK cucumber1"}, {"sender": "ScoreFeedback", "message": "\n[Scores]\n[Chad Response]:\nDave, since you have PICKed ham, you should now PUT ham on top of beef_patty2. I will WAIT this round because only one robot can PUT at a time.\n\nPROCEED\nNAME Chad ACTION WAIT\n[Evaluation Score]:\nThe advantage score of Chad's action is -3.348!\n\n[Chad Response]:\nDave, while you PUT ham on top of beef_patty2, I will PICK cucumber1, which is the next ingredient we need after ham according to the recipe.\n\nPROCEED\nNAME Chad ACTION PICK cucumber1\n[Evaluation Score]:\nThe advantage score of Chad's action is 2.816!\n\n"}, {"sender": "Dave", "message": "Chad, your plan is good. I will PUT ham on top of beef_patty2 as it is the next ingredient in the recipe.\n\nPROCEED\nNAME Dave ACTION PUT ham beef_patty2"}, {"sender": "ScoreFeedback", "message": "\n[Scores]\n[Chad Response]:\nDave, since you have PICKed ham, you should now PUT ham on top of beef_patty2. I will WAIT this round because only one robot can PUT at a time.\n\nPROCEED\nNAME Chad ACTION WAIT\n[Evaluation Score]:\nThe advantage score of Chad's action is -3.348!\n\n[Chad Response]:\nDave, while you PUT ham on top of beef_patty2, I will PICK cucumber1, which is the next ingredient we need after ham according to the recipe.\n\nPROCEED\nNAME Chad ACTION PICK cucumber1\n[Evaluation Score]:\nThe advantage score of Chad's action is 2.816!\n\n[Dave Response]:\nChad, your plan is good. I will PUT ham on top of beef_patty2 as it is the next ingredient in the recipe.\n\nPROCEED\nNAME Dave ACTION PUT ham beef_patty2\n[Evaluation Score]:\nThe advantage score of Dave's action is 1.151!\n\n"}, {"sender": "Feedback", "message": "None"}, {"sender": "Action", "message": "Chad: PICK cucumber1\nDave: PUT ham beef_patty2"}];
// Get the chat container element
const chatContainer5 = document.getElementById("chat-container-5");
    
// Iterate over the JSON data and generate chat bubbles
jsonData5.forEach(
    
    data => {
    const { sender, message } = data;
    const bubble = createChatBubble(sender, message);
    
    chatContainer5.appendChild(bubble);
    
});
    
const jsonData6 = [{"sender": "Chad", "message": "Dave, since I am currently holding cucumber1, I will PUT cucumber1 on ham, which is already on top of beef_patty2. This follows the recipe order correctly. You should WAIT this round since only one robot can PUT at a time.\n\nPROCEED\nNAME Chad ACTION PUT cucumber1 ham"}, {"sender": "ScoreFeedback", "message": "\n[Scores]\n[Chad Response]:\nDave, since I am currently holding cucumber1, I will PUT cucumber1 on ham, which is already on top of beef_patty2. This follows the recipe order correctly. You should WAIT this round since only one robot can PUT at a time.\n\nPROCEED\nNAME Chad ACTION PUT cucumber1 ham\n[Evaluation Score]:\nThe advantage score of Chad's action is 2.859!\n\n"}, {"sender": "Dave", "message": "Chad, your action is correct according to the recipe. I will WAIT this round as you PUT cucumber1 on the ham.\n\nPROCEED\nNAME Dave ACTION WAIT"}, {"sender": "ScoreFeedback", "message": "\n[Scores]\n[Chad Response]:\nDave, since I am currently holding cucumber1, I will PUT cucumber1 on ham, which is already on top of beef_patty2. This follows the recipe order correctly. You should WAIT this round since only one robot can PUT at a time.\n\nPROCEED\nNAME Chad ACTION PUT cucumber1 ham\n[Evaluation Score]:\nThe advantage score of Chad's action is 2.859!\n\n[Dave Response]:\nChad, your action is correct according to the recipe. I will WAIT this round as you PUT cucumber1 on the ham.\n\nPROCEED\nNAME Dave ACTION WAIT\n[Evaluation Score]:\nThe advantage score of Dave's action is -1.931!\n\n"}, {"sender": "Dave", "message": "Chad, while you PUT cucumber1 on the ham, I will PICK bacon, which is the next ingredient we need after cucumber1 according to the recipe.\n\nPROCEED\nNAME Dave ACTION PICK bacon"}, {"sender": "ScoreFeedback", "message": "\n[Scores]\n[Chad Response]:\nDave, since I am currently holding cucumber1, I will PUT cucumber1 on ham, which is already on top of beef_patty2. This follows the recipe order correctly. You should WAIT this round since only one robot can PUT at a time.\n\nPROCEED\nNAME Chad ACTION PUT cucumber1 ham\n[Evaluation Score]:\nThe advantage score of Chad's action is 2.859!\n\n[Dave Response]:\nChad, your action is correct according to the recipe. I will WAIT this round as you PUT cucumber1 on the ham.\n\nPROCEED\nNAME Dave ACTION WAIT\n[Evaluation Score]:\nThe advantage score of Dave's action is -1.931!\n\n[Dave Response]:\nChad, while you PUT cucumber1 on the ham, I will PICK bacon, which is the next ingredient we need after cucumber1 according to the recipe.\n\nPROCEED\nNAME Dave ACTION PICK bacon\n[Evaluation Score]:\nThe advantage score of Dave's action is 0.993!\n\n"}, {"sender": "Feedback", "message": "None"}, {"sender": "Action", "message": "Chad: PUT cucumber1 ham\nDave: PICK bacon"}];
// Get the chat container element
const chatContainer6 = document.getElementById("chat-container-6");
    
// Iterate over the JSON data and generate chat bubbles
jsonData6.forEach(
    
    data => {
    const { sender, message } = data;
    const bubble = createChatBubble(sender, message);
    
    chatContainer6.appendChild(bubble);
    
});
    
const jsonData7 = [{"sender": "Chad", "message": "Dave has already PICKed bacon, which is the correct next item according to the recipe after cucumber1. Since my gripper is empty, I should PICK beef_patty1, which is the next ingredient we need after bacon.\n\nPROCEED\nNAME Chad ACTION PICK beef_patty1"}, {"sender": "ScoreFeedback", "message": "\n[Scores]\n[Chad Response]:\nDave has already PICKed bacon, which is the correct next item according to the recipe after cucumber1. Since my gripper is empty, I should PICK beef_patty1, which is the next ingredient we need after bacon.\n\nPROCEED\nNAME Chad ACTION PICK beef_patty1\n[Evaluation Score]:\nThe advantage score of Chad's action is 2.988!\n\n"}, {"sender": "Dave", "message": "Chad, you are correct to PICK beef_patty1 as it is the next ingredient we need after bacon. I am currently holding bacon, so I will PUT bacon on cucumber1 to continue following the recipe order.\n\nPROCEED\nNAME Dave ACTION PUT bacon cucumber1"}, {"sender": "ScoreFeedback", "message": "\n[Scores]\n[Chad Response]:\nDave has already PICKed bacon, which is the correct next item according to the recipe after cucumber1. Since my gripper is empty, I should PICK beef_patty1, which is the next ingredient we need after bacon.\n\nPROCEED\nNAME Chad ACTION PICK beef_patty1\n[Evaluation Score]:\nThe advantage score of Chad's action is 2.988!\n\n[Dave Response]:\nChad, you are correct to PICK beef_patty1 as it is the next ingredient we need after bacon. I am currently holding bacon, so I will PUT bacon on cucumber1 to continue following the recipe order.\n\nPROCEED\nNAME Dave ACTION PUT bacon cucumber1\n[Evaluation Score]:\nThe advantage score of Dave's action is 1.036!\n\n"}, {"sender": "Feedback", "message": "None"}, {"sender": "Action", "message": "Chad: PICK beef_patty1\nDave: PUT bacon cucumber1"}];
// Get the chat container element
const chatContainer7 = document.getElementById("chat-container-7");
    
// Iterate over the JSON data and generate chat bubbles
jsonData7.forEach(
    
    data => {
    const { sender, message } = data;
    const bubble = createChatBubble(sender, message);
    
    chatContainer7.appendChild(bubble);
    
});
    
const jsonData8 = [{"sender": "Chad", "message": "Dave, since I am currently holding beef_patty1, I will PUT it on bacon to continue following the recipe order. This will complete the stack up to beef_patty1. You should WAIT this round since only one robot can PUT at a time.\n\nPROCEED\nNAME Chad ACTION PUT beef_patty1 bacon"}, {"sender": "ScoreFeedback", "message": "\n[Scores]\n[Chad Response]:\nDave, since I am currently holding beef_patty1, I will PUT it on bacon to continue following the recipe order. This will complete the stack up to beef_patty1. You should WAIT this round since only one robot can PUT at a time.\n\nPROCEED\nNAME Chad ACTION PUT beef_patty1 bacon\n[Evaluation Score]:\nThe advantage score of Chad's action is 2.894!\n\n"}, {"sender": "Dave", "message": "Chad, your action to PUT beef_patty1 on bacon is correct. I will WAIT this round as you suggested.\n\nPROCEED\nNAME Dave ACTION WAIT"}, {"sender": "ScoreFeedback", "message": "\n[Scores]\n[Chad Response]:\nDave, since I am currently holding beef_patty1, I will PUT it on bacon to continue following the recipe order. This will complete the stack up to beef_patty1. You should WAIT this round since only one robot can PUT at a time.\n\nPROCEED\nNAME Chad ACTION PUT beef_patty1 bacon\n[Evaluation Score]:\nThe advantage score of Chad's action is 2.894!\n\n[Dave Response]:\nChad, your action to PUT beef_patty1 on bacon is correct. I will WAIT this round as you suggested.\n\nPROCEED\nNAME Dave ACTION WAIT\n[Evaluation Score]:\nThe advantage score of Dave's action is -1.949!\n\n"}, {"sender": "Dave", "message": "Chad, while you PUT beef_patty1 on bacon, I should PICK bread_slice2, which is the final item needed to complete the big_sandwich recipe. This way, we can continue working efficiently without any delay.\n\nPROCEED\nNAME Dave ACTION PICK bread_slice2"}, {"sender": "ScoreFeedback", "message": "\n[Scores]\n[Chad Response]:\nDave, since I am currently holding beef_patty1, I will PUT it on bacon to continue following the recipe order. This will complete the stack up to beef_patty1. You should WAIT this round since only one robot can PUT at a time.\n\nPROCEED\nNAME Chad ACTION PUT beef_patty1 bacon\n[Evaluation Score]:\nThe advantage score of Chad's action is 2.894!\n\n[Dave Response]:\nChad, your action to PUT beef_patty1 on bacon is correct. I will WAIT this round as you suggested.\n\nPROCEED\nNAME Dave ACTION WAIT\n[Evaluation Score]:\nThe advantage score of Dave's action is -1.949!\n\n[Dave Response]:\nChad, while you PUT beef_patty1 on bacon, I should PICK bread_slice2, which is the final item needed to complete the big_sandwich recipe. This way, we can continue working efficiently without any delay.\n\nPROCEED\nNAME Dave ACTION PICK bread_slice2\n[Evaluation Score]:\nThe advantage score of Dave's action is 1.022!\n\n"}, {"sender": "Feedback", "message": "None"}, {"sender": "Action", "message": "Chad: PUT beef_patty1 bacon\nDave: PICK bread_slice2"}];
// Get the chat container element
const chatContainer8 = document.getElementById("chat-container-8");
    
// Iterate over the JSON data and generate chat bubbles
jsonData8.forEach(
    
    data => {
    const { sender, message } = data;
    const bubble = createChatBubble(sender, message);
    
    chatContainer8.appendChild(bubble);
    
});
    
const jsonData9 = [{"sender": "Chad", "message": "Dave, since you have PICKed bread_slice2, you can now PUT it on beef_patty1 to complete the big_sandwich. I will WAIT this round as we can only perform one PUT action at a time.\n\nPROCEED\nNAME Chad ACTION WAIT"}, {"sender": "ScoreFeedback", "message": "\n[Scores]\n[Chad Response]:\nDave, since you have PICKed bread_slice2, you can now PUT it on beef_patty1 to complete the big_sandwich. I will WAIT this round as we can only perform one PUT action at a time.\n\nPROCEED\nNAME Chad ACTION WAIT\n[Evaluation Score]:\nThe advantage score of Chad's action is 3.0!\n\n"}, {"sender": "Dave", "message": "Chad, your plan is correct. I will PUT bread_slice2 on beef_patty1 to complete the big_sandwich.\n\nPROCEED\nNAME Dave ACTION PUT bread_slice2 beef_patty1"}, {"sender": "ScoreFeedback", "message": "\n[Scores]\n[Chad Response]:\nDave, since you have PICKed bread_slice2, you can now PUT it on beef_patty1 to complete the big_sandwich. I will WAIT this round as we can only perform one PUT action at a time.\n\nPROCEED\nNAME Chad ACTION WAIT\n[Evaluation Score]:\nThe advantage score of Chad's action is 3.0!\n\n[Dave Response]:\nChad, your plan is correct. I will PUT bread_slice2 on beef_patty1 to complete the big_sandwich.\n\nPROCEED\nNAME Dave ACTION PUT bread_slice2 beef_patty1\n[Evaluation Score]:\nThe advantage score of Dave's action is 1.046!\n\n"}, {"sender": "Feedback", "message": "None"}, {"sender": "Action", "message": "Chad: WAIT\nDave: PUT bread_slice2 beef_patty1"}];
// Get the chat container element
const chatContainer9 = document.getElementById("chat-container-9");
    
// Iterate over the JSON data and generate chat bubbles
jsonData9.forEach(
    
    data => {
    const { sender, message } = data;
    const bubble = createChatBubble(sender, message);
    
    chatContainer9.appendChild(bubble);
    
});
    