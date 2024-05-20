const jsonData0 = [{"sender": "ReActAgent", "message": "Think: Dave should PICK bread_slice1 and Chad should PICK tomato2 since these are the first two items needed for the big_sandwich.\nAction: EXECUTE\nNAME Chad ACTION PICK tomato2\nNAME Dave ACTION PICK bread_slice1"}, {"sender": "Feedback", "message": "None"}, {"sender": "Action", "message": "Chad: PICK tomato2\nDave: PICK bread_slice1"}];
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
    
const jsonData1 = [{"sender": "ReActAgent", "message": "Think: Dave should PUT bread_slice1 on the cutting_board, and Chad should WAIT because he can't put tomato2 on anything yet.\nAction: EXECUTE\nNAME Chad ACTION WAIT\nNAME Dave ACTION PUT bread_slice1 cutting_board"}, {"sender": "Feedback", "message": "None"}, {"sender": "Action", "message": "Chad: WAIT\nDave: PUT bread_slice1 cutting_board"}];
// Get the chat container element
const chatContainer1 = document.getElementById("chat-container-1");
    
// Iterate over the JSON data and generate chat bubbles
jsonData1.forEach(
    
    data => {
    const { sender, message } = data;
    const bubble = createChatBubble(sender, message);
    
    chatContainer1.appendChild(bubble);
    
});
    
const jsonData2 = [{"sender": "ReActAgent", "message": "Think: Now that Dave's gripper is empty, he should PICK cheese, which is the next ingredient after tomato. Chad should PUT tomato2 on the bread_slice1 on the cutting_board.\nAction: EXECUTE\nNAME Chad ACTION PUT tomato2 bread_slice1\nNAME Dave ACTION PICK cheese"}, {"sender": "Feedback", "message": "None"}, {"sender": "Action", "message": "Chad: PUT tomato2 bread_slice1\nDave: PICK cheese"}];
// Get the chat container element
const chatContainer2 = document.getElementById("chat-container-2");
    
// Iterate over the JSON data and generate chat bubbles
jsonData2.forEach(
    
    data => {
    const { sender, message } = data;
    const bubble = createChatBubble(sender, message);
    
    chatContainer2.appendChild(bubble);
    
});
    
const jsonData3 = [{"sender": "ReActAgent", "message": "Think: Chad should PICK beef_patty2 as it's the next ingredient after cheese, and Dave should PUT cheese on top of the tomato2 on the bread_slice1 on the cutting_board.\nAction: EXECUTE\nNAME Chad ACTION PICK beef_patty2\nNAME Dave ACTION PUT cheese tomato2"}, {"sender": "Feedback", "message": "None"}, {"sender": "Action", "message": "Chad: PICK beef_patty2\nDave: PUT cheese tomato2"}];
// Get the chat container element
const chatContainer3 = document.getElementById("chat-container-3");
    
// Iterate over the JSON data and generate chat bubbles
jsonData3.forEach(
    
    data => {
    const { sender, message } = data;
    const bubble = createChatBubble(sender, message);
    
    chatContainer3.appendChild(bubble);
    
});
    
const jsonData4 = [{"sender": "ReActAgent", "message": "Think: Dave should PICK ham, which is the next ingredient after beef_patty2. Chad should PUT beef_patty2 on top of the cheese on the bread_slice1 on the cutting_board.\nAction: EXECUTE\nNAME Chad ACTION PUT beef_patty2 cheese\nNAME Dave ACTION PICK ham"}, {"sender": "Feedback", "message": "None"}, {"sender": "Action", "message": "Chad: PUT beef_patty2 cheese\nDave: PICK ham"}];
// Get the chat container element
const chatContainer4 = document.getElementById("chat-container-4");
    
// Iterate over the JSON data and generate chat bubbles
jsonData4.forEach(
    
    data => {
    const { sender, message } = data;
    const bubble = createChatBubble(sender, message);
    
    chatContainer4.appendChild(bubble);
    
});
    
const jsonData5 = [{"sender": "ReActAgent", "message": "Think: Chad should PICK cucumber1 as it's the next ingredient after ham. Dave should PUT ham on top of the beef_patty2 on the bread_slice1 on the cutting_board.\nAction: EXECUTE\nNAME Chad ACTION PICK cucumber1\nNAME Dave ACTION PUT ham beef_patty2"}, {"sender": "Feedback", "message": "None"}, {"sender": "Action", "message": "Chad: PICK cucumber1\nDave: PUT ham beef_patty2"}];
// Get the chat container element
const chatContainer5 = document.getElementById("chat-container-5");
    
// Iterate over the JSON data and generate chat bubbles
jsonData5.forEach(
    
    data => {
    const { sender, message } = data;
    const bubble = createChatBubble(sender, message);
    
    chatContainer5.appendChild(bubble);
    
});
    
const jsonData6 = [{"sender": "ReActAgent", "message": "Think: Dave should PICK bacon, which is the next ingredient after cucumber1. Chad should PUT cucumber1 on top of the ham on the bread_slice1 on the cutting_board.\nAction: EXECUTE\nNAME Chad ACTION PUT cucumber1 ham\nNAME Dave ACTION PICK bacon"}, {"sender": "Feedback", "message": "None"}, {"sender": "Action", "message": "Chad: PUT cucumber1 ham\nDave: PICK bacon"}];
// Get the chat container element
const chatContainer6 = document.getElementById("chat-container-6");
    
// Iterate over the JSON data and generate chat bubbles
jsonData6.forEach(
    
    data => {
    const { sender, message } = data;
    const bubble = createChatBubble(sender, message);
    
    chatContainer6.appendChild(bubble);
    
});
    
const jsonData7 = [{"sender": "ReActAgent", "message": "Think: Chad should PICK beef_patty1 as it's the next ingredient after bacon. Dave should PUT bacon on top of the cucumber1 on the bread_slice1 on the cutting_board.\nAction: EXECUTE\nNAME Chad ACTION PICK beef_patty1\nNAME Dave ACTION PUT bacon cucumber1"}, {"sender": "Feedback", "message": "None"}, {"sender": "Action", "message": "Chad: PICK beef_patty1\nDave: PUT bacon cucumber1"}];
// Get the chat container element
const chatContainer7 = document.getElementById("chat-container-7");
    
// Iterate over the JSON data and generate chat bubbles
jsonData7.forEach(
    
    data => {
    const { sender, message } = data;
    const bubble = createChatBubble(sender, message);
    
    chatContainer7.appendChild(bubble);
    
});
    
const jsonData8 = [{"sender": "ReActAgent", "message": "Think: Dave should PICK bread_slice2, which is the final ingredient needed to complete the big_sandwich. Chad should PUT beef_patty1 on top of the bacon on the bread_slice1 on the cutting_board.\nAction: EXECUTE\nNAME Chad ACTION PUT beef_patty1 bacon\nNAME Dave ACTION PICK bread_slice2"}, {"sender": "Feedback", "message": "None"}, {"sender": "Action", "message": "Chad: PUT beef_patty1 bacon\nDave: PICK bread_slice2"}];
// Get the chat container element
const chatContainer8 = document.getElementById("chat-container-8");
    
// Iterate over the JSON data and generate chat bubbles
jsonData8.forEach(
    
    data => {
    const { sender, message } = data;
    const bubble = createChatBubble(sender, message);
    
    chatContainer8.appendChild(bubble);
    
});
    
const jsonData9 = [{"sender": "ReActAgent", "message": "Think: Now that all the ingredients are stacked in the correct order, Dave should PUT bread_slice2 on top of the beef_patty1 to complete the big_sandwich. Chad does not need to take any action this round.\nAction: EXECUTE\nNAME Chad ACTION WAIT\nNAME Dave ACTION PUT bread_slice2 beef_patty1"}, {"sender": "Feedback", "message": "None"}, {"sender": "Action", "message": "Chad: WAIT\nDave: PUT bread_slice2 beef_patty1"}];
// Get the chat container element
const chatContainer9 = document.getElementById("chat-container-9");
    
// Iterate over the JSON data and generate chat bubbles
jsonData9.forEach(
    
    data => {
    const { sender, message } = data;
    const bubble = createChatBubble(sender, message);
    
    chatContainer9.appendChild(bubble);
    
});
    