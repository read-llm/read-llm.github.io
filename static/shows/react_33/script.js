const jsonData0 = [{"sender": "ReActAgent", "message": "Think: Bob is closest to green_cube_2, and Alice is at a reasonable distance to move to it as well. Let's start with green_cube_2 since it's a target cube and both robots can reach it quickly. Alice will MOVE to green_cube_2 and Bob will also MOVE to green_cube_2 to prepare for sweeping.\n\nAction: EXECUTE\nNAME Alice ACTION MOVE green_cube_2\nNAME Bob ACTION MOVE green_cube_2"}, {"sender": "Feedback", "message": "None"}, {"sender": "Action", "message": "Alice: MOVE green_cube_2\nBob: MOVE green_cube_2"}];
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
    
const jsonData1 = [{"sender": "ReActAgent", "message": "Think: Now that Alice and Bob are both in front of green_cube_2, Bob can SWEEP the green_cube_2 into Alice's dustpan while Alice WAITS.\n\nAction: EXECUTE\nNAME Alice ACTION WAIT\nNAME Bob ACTION SWEEP green_cube_2"}, {"sender": "Feedback", "message": "None"}, {"sender": "Action", "message": "Alice: WAIT\nBob: SWEEP green_cube_2"}];
// Get the chat container element
const chatContainer1 = document.getElementById("chat-container-1");
    
// Iterate over the JSON data and generate chat bubbles
jsonData1.forEach(
    
    data => {
    const { sender, message } = data;
    const bubble = createChatBubble(sender, message);
    
    chatContainer1.appendChild(bubble);
    
});
    
const jsonData2 = [{"sender": "ReActAgent", "message": "Think: With green_cube_2 now in the dustpan, the next closest target cube for both Alice and Bob is yellow_cube_2. They should both MOVE to yellow_cube_2 to prepare for the next sweep.\n\nAction: EXECUTE\nNAME Alice ACTION MOVE yellow_cube_2\nNAME Bob ACTION MOVE yellow_cube_2"}, {"sender": "Feedback", "message": "None"}, {"sender": "Action", "message": "Alice: MOVE yellow_cube_2\nBob: MOVE yellow_cube_2"}];
// Get the chat container element
const chatContainer2 = document.getElementById("chat-container-2");
    
// Iterate over the JSON data and generate chat bubbles
jsonData2.forEach(
    
    data => {
    const { sender, message } = data;
    const bubble = createChatBubble(sender, message);
    
    chatContainer2.appendChild(bubble);
    
});
    
const jsonData3 = [{"sender": "ReActAgent", "message": "Think: Now that Alice and Bob are both in front of yellow_cube_2, Bob can SWEEP the yellow_cube_2 into Alice's dustpan while Alice WAITS.\n\nAction: EXECUTE\nNAME Alice ACTION WAIT\nNAME Bob ACTION SWEEP yellow_cube_2"}, {"sender": "Feedback", "message": "None"}, {"sender": "Action", "message": "Alice: WAIT\nBob: SWEEP yellow_cube_2"}];
// Get the chat container element
const chatContainer3 = document.getElementById("chat-container-3");
    
// Iterate over the JSON data and generate chat bubbles
jsonData3.forEach(
    
    data => {
    const { sender, message } = data;
    const bubble = createChatBubble(sender, message);
    
    chatContainer3.appendChild(bubble);
    
});
    
const jsonData4 = [{"sender": "ReActAgent", "message": "Think: With two cubes in the dustpan, Alice should DUMP them into the trash bin while Bob WAITS.\n\nAction: EXECUTE\nNAME Alice ACTION DUMP\nNAME Bob ACTION WAIT"}, {"sender": "Feedback", "message": "None"}, {"sender": "Action", "message": "Alice: DUMP\nBob: WAIT"}];
// Get the chat container element
const chatContainer4 = document.getElementById("chat-container-4");
    
// Iterate over the JSON data and generate chat bubbles
jsonData4.forEach(
    
    data => {
    const { sender, message } = data;
    const bubble = createChatBubble(sender, message);
    
    chatContainer4.appendChild(bubble);
    
});
    
const jsonData5 = [{"sender": "ReActAgent", "message": "Think: Now that the dustpan is empty, the closest target cube for both Alice and Bob is yellow_cube_3. They should both MOVE to yellow_cube_3 to prepare for the next sweep.\n\nAction: EXECUTE\nNAME Alice ACTION MOVE yellow_cube_3\nNAME Bob ACTION MOVE yellow_cube_3"}, {"sender": "Feedback", "message": "None"}, {"sender": "Action", "message": "Alice: MOVE yellow_cube_3\nBob: MOVE yellow_cube_3"}];
// Get the chat container element
const chatContainer5 = document.getElementById("chat-container-5");
    
// Iterate over the JSON data and generate chat bubbles
jsonData5.forEach(
    
    data => {
    const { sender, message } = data;
    const bubble = createChatBubble(sender, message);
    
    chatContainer5.appendChild(bubble);
    
});
    
const jsonData6 = [{"sender": "ReActAgent", "message": "Think: Now that Alice and Bob are both in front of yellow_cube_3, Bob can SWEEP the yellow_cube_3 into Alice's dustpan while Alice WAITS.\n\nAction: EXECUTE\nNAME Alice ACTION WAIT\nNAME Bob ACTION SWEEP yellow_cube_3"}, {"sender": "Feedback", "message": "None"}, {"sender": "Action", "message": "Alice: WAIT\nBob: SWEEP yellow_cube_3"}];
// Get the chat container element
const chatContainer6 = document.getElementById("chat-container-6");
    
// Iterate over the JSON data and generate chat bubbles
jsonData6.forEach(
    
    data => {
    const { sender, message } = data;
    const bubble = createChatBubble(sender, message);
    
    chatContainer6.appendChild(bubble);
    
});
    
const jsonData7 = [{"sender": "ReActAgent", "message": "Think: With yellow_cube_3 now in the dustpan, the next closest target cube for both Alice and Bob is green_cube_1. They should both MOVE to green_cube_1 to prepare for the next sweep.\n\nAction: EXECUTE\nNAME Alice ACTION MOVE green_cube_1\nNAME Bob ACTION MOVE green_cube_1"}, {"sender": "Feedback", "message": "None"}, {"sender": "Action", "message": "Alice: MOVE green_cube_1\nBob: MOVE green_cube_1"}];
// Get the chat container element
const chatContainer7 = document.getElementById("chat-container-7");
    
// Iterate over the JSON data and generate chat bubbles
jsonData7.forEach(
    
    data => {
    const { sender, message } = data;
    const bubble = createChatBubble(sender, message);
    
    chatContainer7.appendChild(bubble);
    
});
    
const jsonData8 = [{"sender": "ReActAgent", "message": "Think: Now that Alice and Bob are both in front of green_cube_1, Bob can SWEEP the green_cube_1 into Alice's dustpan while Alice WAITS.\n\nAction: EXECUTE\nNAME Alice ACTION WAIT\nNAME Bob ACTION SWEEP green_cube_1"}, {"sender": "Feedback", "message": "None"}, {"sender": "Action", "message": "Alice: WAIT\nBob: SWEEP green_cube_1"}];
// Get the chat container element
const chatContainer8 = document.getElementById("chat-container-8");
    
// Iterate over the JSON data and generate chat bubbles
jsonData8.forEach(
    
    data => {
    const { sender, message } = data;
    const bubble = createChatBubble(sender, message);
    
    chatContainer8.appendChild(bubble);
    
});
    
const jsonData9 = [{"sender": "ReActAgent", "message": "Think: With two cubes in the dustpan, Alice should DUMP them into the trash bin while Bob WAITS.\n\nAction: EXECUTE\nNAME Alice ACTION DUMP\nNAME Bob ACTION WAIT"}, {"sender": "Feedback", "message": "None"}, {"sender": "Action", "message": "Alice: DUMP\nBob: WAIT"}];
// Get the chat container element
const chatContainer9 = document.getElementById("chat-container-9");
    
// Iterate over the JSON data and generate chat bubbles
jsonData9.forEach(
    
    data => {
    const { sender, message } = data;
    const bubble = createChatBubble(sender, message);
    
    chatContainer9.appendChild(bubble);
    
});
    
const jsonData10 = [{"sender": "ReActAgent", "message": "Think: The closest target cube for both Alice and Bob is green_cube_3. They should both MOVE to green_cube_3 to prepare for the next sweep.\n\nAction: EXECUTE\nNAME Alice ACTION MOVE green_cube_3\nNAME Bob ACTION MOVE green_cube_3"}, {"sender": "Feedback", "message": "None"}, {"sender": "Action", "message": "Alice: MOVE green_cube_3\nBob: MOVE green_cube_3"}];
// Get the chat container element
const chatContainer10 = document.getElementById("chat-container-10");
    
// Iterate over the JSON data and generate chat bubbles
jsonData10.forEach(
    
    data => {
    const { sender, message } = data;
    const bubble = createChatBubble(sender, message);
    
    chatContainer10.appendChild(bubble);
    
});
    
const jsonData11 = [{"sender": "ReActAgent", "message": "Think: Now that Alice and Bob are both in front of green_cube_3, Bob can SWEEP the green_cube_3 into Alice's dustpan while Alice WAITS.\n\nAction: EXECUTE\nNAME Alice ACTION WAIT\nNAME Bob ACTION SWEEP green_cube_3"}, {"sender": "Feedback", "message": "None"}, {"sender": "Action", "message": "Alice: WAIT\nBob: SWEEP green_cube_3"}];
// Get the chat container element
const chatContainer11 = document.getElementById("chat-container-11");
    
// Iterate over the JSON data and generate chat bubbles
jsonData11.forEach(
    
    data => {
    const { sender, message } = data;
    const bubble = createChatBubble(sender, message);
    
    chatContainer11.appendChild(bubble);
    
});
    
const jsonData12 = [{"sender": "ReActAgent", "message": "Think: With green_cube_3 now in the dustpan, the next closest target cube for both Alice and Bob is yellow_cube_1. They should both MOVE to yellow_cube_1 to prepare for the next sweep.\n\nAction: EXECUTE\nNAME Alice ACTION MOVE yellow_cube_1\nNAME Bob ACTION MOVE yellow_cube_1"}, {"sender": "Feedback", "message": "None"}, {"sender": "Action", "message": "Alice: MOVE yellow_cube_1\nBob: MOVE yellow_cube_1"}];
// Get the chat container element
const chatContainer12 = document.getElementById("chat-container-12");
    
// Iterate over the JSON data and generate chat bubbles
jsonData12.forEach(
    
    data => {
    const { sender, message } = data;
    const bubble = createChatBubble(sender, message);
    
    chatContainer12.appendChild(bubble);
    
});
    
const jsonData13 = [{"sender": "ReActAgent", "message": "Think: Now that Alice and Bob are both in front of yellow_cube_1, Bob can SWEEP the yellow_cube_1 into Alice's dustpan while Alice WAITS.\n\nAction: EXECUTE\nNAME Alice ACTION WAIT\nNAME Bob ACTION SWEEP yellow_cube_1"}, {"sender": "Feedback", "message": "None"}, {"sender": "Action", "message": "Alice: WAIT\nBob: SWEEP yellow_cube_1"}];
// Get the chat container element
const chatContainer13 = document.getElementById("chat-container-13");
    
// Iterate over the JSON data and generate chat bubbles
jsonData13.forEach(
    
    data => {
    const { sender, message } = data;
    const bubble = createChatBubble(sender, message);
    
    chatContainer13.appendChild(bubble);
    
});
    
const jsonData14 = [{"sender": "ReActAgent", "message": "Think: With two cubes in the dustpan, Alice should DUMP them into the trash bin while Bob WAITS.\n\nAction: EXECUTE\nNAME Alice ACTION DUMP\nNAME Bob ACTION WAIT"}, {"sender": "Feedback", "message": "None"}, {"sender": "Action", "message": "Alice: DUMP\nBob: WAIT"}];
// Get the chat container element
const chatContainer14 = document.getElementById("chat-container-14");
    
// Iterate over the JSON data and generate chat bubbles
jsonData14.forEach(
    
    data => {
    const { sender, message } = data;
    const bubble = createChatBubble(sender, message);
    
    chatContainer14.appendChild(bubble);
    
});
    