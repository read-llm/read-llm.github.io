const jsonData0 = [{"sender": "Alice", "message": "EXECUTE\nNAME Alice ACTION MOVE green_cube_1\nNAME Bob ACTION MOVE green_cube_1"}, {"sender": "ScoreFeedback", "message": "\n[Scores]\n[Alice Response]:\nEXECUTE\nNAME Alice ACTION MOVE green_cube_1\nNAME Bob ACTION MOVE green_cube_1\n[Evaluation Score]:\nThe advantage score of Alice's plan is 2.196!\n\n"}, {"sender": "Feedback", "message": "None"}, {"sender": "Action", "message": "Alice: MOVE green_cube_1\nBob: MOVE green_cube_1"}];
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
    
const jsonData1 = [{"sender": "Alice", "message": "EXECUTE\nNAME Alice ACTION WAIT\nNAME Bob ACTION SWEEP green_cube_1"}, {"sender": "ScoreFeedback", "message": "\n[Scores]\n[Alice Response]:\nEXECUTE\nNAME Alice ACTION WAIT\nNAME Bob ACTION SWEEP green_cube_1\n[Evaluation Score]:\nThe advantage score of Alice's plan is 0.937!\n\n"}, {"sender": "Feedback", "message": "None"}, {"sender": "Action", "message": "Alice: WAIT\nBob: SWEEP green_cube_1"}];
// Get the chat container element
const chatContainer1 = document.getElementById("chat-container-1");
    
// Iterate over the JSON data and generate chat bubbles
jsonData1.forEach(
    
    data => {
    const { sender, message } = data;
    const bubble = createChatBubble(sender, message);
    
    chatContainer1.appendChild(bubble);
    
});
    
const jsonData2 = [{"sender": "Alice", "message": "EXECUTE\nNAME Alice ACTION MOVE green_cube_2\nNAME Bob ACTION MOVE green_cube_2"}, {"sender": "ScoreFeedback", "message": "\n[Scores]\n[Alice Response]:\nEXECUTE\nNAME Alice ACTION MOVE green_cube_2\nNAME Bob ACTION MOVE green_cube_2\n[Evaluation Score]:\nThe advantage score of Alice's plan is -0.141!\n\n"}, {"sender": "Feedback", "message": "None"}, {"sender": "Action", "message": "Alice: MOVE green_cube_2\nBob: MOVE green_cube_2"}];
// Get the chat container element
const chatContainer2 = document.getElementById("chat-container-2");
    
// Iterate over the JSON data and generate chat bubbles
jsonData2.forEach(
    
    data => {
    const { sender, message } = data;
    const bubble = createChatBubble(sender, message);
    
    chatContainer2.appendChild(bubble);
    
});
    
const jsonData3 = [{"sender": "Alice", "message": "EXECUTE\nNAME Alice ACTION WAIT\nNAME Bob ACTION SWEEP green_cube_2"}, {"sender": "ScoreFeedback", "message": "\n[Scores]\n[Alice Response]:\nEXECUTE\nNAME Alice ACTION WAIT\nNAME Bob ACTION SWEEP green_cube_2\n[Evaluation Score]:\nThe advantage score of Alice's plan is 0.641!\n\n"}, {"sender": "Feedback", "message": "None"}, {"sender": "Action", "message": "Alice: WAIT\nBob: SWEEP green_cube_2"}];
// Get the chat container element
const chatContainer3 = document.getElementById("chat-container-3");
    
// Iterate over the JSON data and generate chat bubbles
jsonData3.forEach(
    
    data => {
    const { sender, message } = data;
    const bubble = createChatBubble(sender, message);
    
    chatContainer3.appendChild(bubble);
    
});
    
const jsonData4 = [{"sender": "Alice", "message": "EXECUTE\nNAME Alice ACTION MOVE yellow_cube_2\nNAME Bob ACTION MOVE yellow_cube_2"}, {"sender": "ScoreFeedback", "message": "\n[Scores]\n[Alice Response]:\nEXECUTE\nNAME Alice ACTION MOVE yellow_cube_2\nNAME Bob ACTION MOVE yellow_cube_2\n[Evaluation Score]:\nThe advantage score of Alice's plan is 0.75!\n\n"}, {"sender": "Feedback", "message": "None"}, {"sender": "Action", "message": "Alice: MOVE yellow_cube_2\nBob: MOVE yellow_cube_2"}];
// Get the chat container element
const chatContainer4 = document.getElementById("chat-container-4");
    
// Iterate over the JSON data and generate chat bubbles
jsonData4.forEach(
    
    data => {
    const { sender, message } = data;
    const bubble = createChatBubble(sender, message);
    
    chatContainer4.appendChild(bubble);
    
});
    
const jsonData5 = [{"sender": "Alice", "message": "EXECUTE\nNAME Alice ACTION WAIT\nNAME Bob ACTION SWEEP yellow_cube_2"}, {"sender": "ScoreFeedback", "message": "\n[Scores]\n[Alice Response]:\nEXECUTE\nNAME Alice ACTION WAIT\nNAME Bob ACTION SWEEP yellow_cube_2\n[Evaluation Score]:\nThe advantage score of Alice's plan is 1.021!\n\n"}, {"sender": "Feedback", "message": "None"}, {"sender": "Action", "message": "Alice: WAIT\nBob: SWEEP yellow_cube_2"}];
// Get the chat container element
const chatContainer5 = document.getElementById("chat-container-5");
    
// Iterate over the JSON data and generate chat bubbles
jsonData5.forEach(
    
    data => {
    const { sender, message } = data;
    const bubble = createChatBubble(sender, message);
    
    chatContainer5.appendChild(bubble);
    
});
    
const jsonData6 = [{"sender": "Alice", "message": "EXECUTE\nNAME Alice ACTION MOVE green_cube_3\nNAME Bob ACTION MOVE green_cube_3"}, {"sender": "ScoreFeedback", "message": "\n[Scores]\n[Alice Response]:\nEXECUTE\nNAME Alice ACTION MOVE green_cube_3\nNAME Bob ACTION MOVE green_cube_3\n[Evaluation Score]:\nThe advantage score of Alice's plan is 3.711!\n\n"}, {"sender": "Feedback", "message": "None"}, {"sender": "Action", "message": "Alice: MOVE green_cube_3\nBob: MOVE green_cube_3"}];
// Get the chat container element
const chatContainer6 = document.getElementById("chat-container-6");
    
// Iterate over the JSON data and generate chat bubbles
jsonData6.forEach(
    
    data => {
    const { sender, message } = data;
    const bubble = createChatBubble(sender, message);
    
    chatContainer6.appendChild(bubble);
    
});
    
const jsonData7 = [{"sender": "Alice", "message": "EXECUTE\nNAME Alice ACTION WAIT\nNAME Bob ACTION SWEEP green_cube_3"}, {"sender": "ScoreFeedback", "message": "\n[Scores]\n[Alice Response]:\nEXECUTE\nNAME Alice ACTION WAIT\nNAME Bob ACTION SWEEP green_cube_3\n[Evaluation Score]:\nThe advantage score of Alice's plan is 5.789!\n\n"}, {"sender": "Feedback", "message": "None"}, {"sender": "Action", "message": "Alice: WAIT\nBob: SWEEP green_cube_3"}];
// Get the chat container element
const chatContainer7 = document.getElementById("chat-container-7");
    
// Iterate over the JSON data and generate chat bubbles
jsonData7.forEach(
    
    data => {
    const { sender, message } = data;
    const bubble = createChatBubble(sender, message);
    
    chatContainer7.appendChild(bubble);
    
});
    
const jsonData8 = [{"sender": "Alice", "message": "EXECUTE\nNAME Alice ACTION MOVE yellow_cube_1\nNAME Bob ACTION MOVE yellow_cube_1"}, {"sender": "ScoreFeedback", "message": "\n[Scores]\n[Alice Response]:\nEXECUTE\nNAME Alice ACTION MOVE yellow_cube_1\nNAME Bob ACTION MOVE yellow_cube_1\n[Evaluation Score]:\nThe advantage score of Alice's plan is 5.955!\n\n"}, {"sender": "Feedback", "message": "None"}, {"sender": "Action", "message": "Alice: MOVE yellow_cube_1\nBob: MOVE yellow_cube_1"}];
// Get the chat container element
const chatContainer8 = document.getElementById("chat-container-8");
    
// Iterate over the JSON data and generate chat bubbles
jsonData8.forEach(
    
    data => {
    const { sender, message } = data;
    const bubble = createChatBubble(sender, message);
    
    chatContainer8.appendChild(bubble);
    
});
    
const jsonData9 = [{"sender": "Alice", "message": "EXECUTE\nNAME Alice ACTION WAIT\nNAME Bob ACTION SWEEP yellow_cube_1"}, {"sender": "ScoreFeedback", "message": "\n[Scores]\n[Alice Response]:\nEXECUTE\nNAME Alice ACTION WAIT\nNAME Bob ACTION SWEEP yellow_cube_1\n[Evaluation Score]:\nThe advantage score of Alice's plan is 4.218!\n\n"}, {"sender": "Feedback", "message": "None"}, {"sender": "Action", "message": "Alice: WAIT\nBob: SWEEP yellow_cube_1"}];
// Get the chat container element
const chatContainer9 = document.getElementById("chat-container-9");
    
// Iterate over the JSON data and generate chat bubbles
jsonData9.forEach(
    
    data => {
    const { sender, message } = data;
    const bubble = createChatBubble(sender, message);
    
    chatContainer9.appendChild(bubble);
    
});
    
const jsonData10 = [{"sender": "Alice", "message": "EXECUTE\nNAME Alice ACTION DUMP\nNAME Bob ACTION WAIT"}, {"sender": "ScoreFeedback", "message": "\n[Scores]\n[Alice Response]:\nEXECUTE\nNAME Alice ACTION DUMP\nNAME Bob ACTION WAIT\n[Evaluation Score]:\nThe advantage score of Alice's plan is -1.463!\n\n"}, {"sender": "Bob", "message": "EXECUTE\nNAME Alice ACTION MOVE red_cube_1\nNAME Bob ACTION MOVE red_cube_1"}, {"sender": "ScoreFeedback", "message": "\n[Scores]\n[Alice Response]:\nEXECUTE\nNAME Alice ACTION DUMP\nNAME Bob ACTION WAIT\n[Evaluation Score]:\nThe advantage score of Alice's plan is -1.463!\n\n[Bob Response]:\nEXECUTE\nNAME Alice ACTION MOVE red_cube_1\nNAME Bob ACTION MOVE red_cube_1\n[Evaluation Score]:\nThe advantage score of Bob's plan is -1.473!\n\n"}, {"sender": "Feedback", "message": "None"}, {"sender": "Action", "message": "Alice: MOVE red_cube_1\nBob: MOVE red_cube_1"}];
// Get the chat container element
const chatContainer10 = document.getElementById("chat-container-10");
    
// Iterate over the JSON data and generate chat bubbles
jsonData10.forEach(
    
    data => {
    const { sender, message } = data;
    const bubble = createChatBubble(sender, message);
    
    chatContainer10.appendChild(bubble);
    
});
    
const jsonData11 = [{"sender": "Alice", "message": "EXECUTE\nNAME Alice ACTION MOVE blue_cube_1\nNAME Bob ACTION MOVE blue_cube_1"}, {"sender": "ScoreFeedback", "message": "\n[Scores]\n[Alice Response]:\nEXECUTE\nNAME Alice ACTION MOVE blue_cube_1\nNAME Bob ACTION MOVE blue_cube_1\n[Evaluation Score]:\nThe advantage score of Alice's plan is -1.754!\n\n"}, {"sender": "Bob", "message": "EXECUTE\nNAME Alice ACTION DUMP\nNAME Bob ACTION WAIT"}, {"sender": "ScoreFeedback", "message": "\n[Scores]\n[Alice Response]:\nEXECUTE\nNAME Alice ACTION MOVE blue_cube_1\nNAME Bob ACTION MOVE blue_cube_1\n[Evaluation Score]:\nThe advantage score of Alice's plan is -1.754!\n\n[Bob Response]:\nEXECUTE\nNAME Alice ACTION DUMP\nNAME Bob ACTION WAIT\n[Evaluation Score]:\nThe advantage score of Bob's plan is -0.766!\n\n"}, {"sender": "Feedback", "message": "None"}, {"sender": "Action", "message": "Alice: DUMP\nBob: WAIT"}];
// Get the chat container element
const chatContainer11 = document.getElementById("chat-container-11");
    
// Iterate over the JSON data and generate chat bubbles
jsonData11.forEach(
    
    data => {
    const { sender, message } = data;
    const bubble = createChatBubble(sender, message);
    
    chatContainer11.appendChild(bubble);
    
});
    