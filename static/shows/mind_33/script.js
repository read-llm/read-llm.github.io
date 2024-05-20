const jsonData0 = [{"sender": "MindAgent", "message": "It seems there might be a misunderstanding in the provided task description. The task description mentions robots Alice and Bob, but the prompt is asking for actions for agents named 'Chad' and 'Dave'. Since there is no information about Chad and Dave in the task description or the environment state, I will proceed with the assumption that 'Chad' and 'Dave' are actually 'Alice' and 'Bob' respectively, and provide actions for them.\n\nGiven the current environment state, the closest cube to both Alice (Chad) and Bob (Dave) that they need to sweep is yellow_cube_1. Alice is 0.49 units away from it, and Bob is 1.15 units away from it. They should both move towards yellow_cube_1 to prepare for sweeping it into the dustpan.\n\nLet's proceed with the actions for Alice and Bob:\n\nEXECUTE\nNAME Alice ACTION MOVE yellow_cube_1\nNAME Bob ACTION MOVE yellow_cube_1"}, {"sender": "Feedback", "message": "None"}, {"sender": "Action", "message": "Alice: MOVE yellow_cube_1\nBob: MOVE yellow_cube_1"}];
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
    
const jsonData1 = [{"sender": "MindAgent", "message": "Alice and Bob are now both close to yellow_cube_1, with Alice being 0.13 units away and Bob being 0.32 units away. They are in position to sweep the cube. Alice should WAIT while Bob SWEEPs yellow_cube_1 into the dustpan.\n\nLet's proceed with the actions for Alice and Bob:\n\nEXECUTE\nNAME Alice ACTION WAIT\nNAME Bob ACTION SWEEP yellow_cube_1"}, {"sender": "Feedback", "message": "None"}, {"sender": "Action", "message": "Alice: WAIT\nBob: SWEEP yellow_cube_1"}];
// Get the chat container element
const chatContainer1 = document.getElementById("chat-container-1");
    
// Iterate over the JSON data and generate chat bubbles
jsonData1.forEach(
    
    data => {
    const { sender, message } = data;
    const bubble = createChatBubble(sender, message);
    
    chatContainer1.appendChild(bubble);
    
});
    
const jsonData2 = [{"sender": "MindAgent", "message": "Alice and Bob have successfully swept yellow_cube_1 into the dustpan. The next closest target cube for both Alice and Bob is green_cube_3. Alice is 0.43 units away from it, and Bob is 0.65 units away from it. They should both move towards green_cube_3 to prepare for sweeping it into the dustpan.\n\nLet's proceed with the actions for Alice and Bob:\n\nEXECUTE\nNAME Alice ACTION MOVE green_cube_3\nNAME Bob ACTION MOVE green_cube_3"}, {"sender": "Feedback", "message": "None"}, {"sender": "Action", "message": "Alice: MOVE green_cube_3\nBob: MOVE green_cube_3"}];
// Get the chat container element
const chatContainer2 = document.getElementById("chat-container-2");
    
// Iterate over the JSON data and generate chat bubbles
jsonData2.forEach(
    
    data => {
    const { sender, message } = data;
    const bubble = createChatBubble(sender, message);
    
    chatContainer2.appendChild(bubble);
    
});
    
const jsonData3 = [{"sender": "MindAgent", "message": "Alice and Bob are now both close to green_cube_3, with Alice being 0.12 units away and Bob being 0.33 units away. They are in position to sweep the cube. Alice should WAIT while Bob SWEEPs green_cube_3 into the dustpan.\n\nLet's proceed with the actions for Alice and Bob:\n\nEXECUTE\nNAME Alice ACTION WAIT\nNAME Bob ACTION SWEEP green_cube_3"}, {"sender": "Feedback", "message": "None"}, {"sender": "Action", "message": "Alice: WAIT\nBob: SWEEP green_cube_3"}];
// Get the chat container element
const chatContainer3 = document.getElementById("chat-container-3");
    
// Iterate over the JSON data and generate chat bubbles
jsonData3.forEach(
    
    data => {
    const { sender, message } = data;
    const bubble = createChatBubble(sender, message);
    
    chatContainer3.appendChild(bubble);
    
});
    
const jsonData4 = [{"sender": "MindAgent", "message": "Alice and Bob have successfully swept yellow_cube_1 and green_cube_3 into the dustpan. The dustpan now contains multiple cubes, and it is time for Alice to DUMP the contents into the trash bin. Bob should WAIT while Alice performs this action.\n\nLet's proceed with the actions for Alice and Bob:\n\nEXECUTE\nNAME Alice ACTION DUMP\nNAME Bob ACTION WAIT"}, {"sender": "Feedback", "message": "None"}, {"sender": "Action", "message": "Alice: DUMP\nBob: WAIT"}];
// Get the chat container element
const chatContainer4 = document.getElementById("chat-container-4");
    
// Iterate over the JSON data and generate chat bubbles
jsonData4.forEach(
    
    data => {
    const { sender, message } = data;
    const bubble = createChatBubble(sender, message);
    
    chatContainer4.appendChild(bubble);
    
});
    
const jsonData5 = [{"sender": "MindAgent", "message": "Alice and Bob have successfully dumped the cubes into the trash bin. The next closest target cube for both Alice and Bob is yellow_cube_3. Alice is 0.72 units away from it, and Bob is 1.18 units away from it. They should both move towards yellow_cube_3 to prepare for sweeping it into the dustpan.\n\nLet's proceed with the actions for Alice and Bob:\n\nEXECUTE\nNAME Alice ACTION MOVE yellow_cube_3\nNAME Bob ACTION MOVE yellow_cube_3"}, {"sender": "Feedback", "message": "None"}, {"sender": "Action", "message": "Alice: MOVE yellow_cube_3\nBob: MOVE yellow_cube_3"}];
// Get the chat container element
const chatContainer5 = document.getElementById("chat-container-5");
    
// Iterate over the JSON data and generate chat bubbles
jsonData5.forEach(
    
    data => {
    const { sender, message } = data;
    const bubble = createChatBubble(sender, message);
    
    chatContainer5.appendChild(bubble);
    
});
    
const jsonData6 = [{"sender": "MindAgent", "message": "Alice and Bob are now both close to yellow_cube_3, with Alice being 0.13 units away and Bob being 0.32 units away. They are in position to sweep the cube. Alice should WAIT while Bob SWEEPs yellow_cube_3 into the dustpan.\n\nLet's proceed with the actions for Alice and Bob:\n\nEXECUTE\nNAME Alice ACTION WAIT\nNAME Bob ACTION SWEEP yellow_cube_3"}, {"sender": "Feedback", "message": "None"}, {"sender": "Action", "message": "Alice: WAIT\nBob: SWEEP yellow_cube_3"}];
// Get the chat container element
const chatContainer6 = document.getElementById("chat-container-6");
    
// Iterate over the JSON data and generate chat bubbles
jsonData6.forEach(
    
    data => {
    const { sender, message } = data;
    const bubble = createChatBubble(sender, message);
    
    chatContainer6.appendChild(bubble);
    
});
    
const jsonData7 = [{"sender": "MindAgent", "message": "Alice and Bob have successfully swept yellow_cube_3 into the dustpan. The next closest target cube for both Alice and Bob is yellow_cube_2. Alice is 0.27 units away from it, and Bob is 0.54 units away from it. They should both move towards yellow_cube_2 to prepare for sweeping it into the dustpan.\n\nLet's proceed with the actions for Alice and Bob:\n\nEXECUTE\nNAME Alice ACTION MOVE yellow_cube_2\nNAME Bob ACTION MOVE yellow_cube_2"}, {"sender": "Feedback", "message": "None"}, {"sender": "Action", "message": "Alice: MOVE yellow_cube_2\nBob: MOVE yellow_cube_2"}];
// Get the chat container element
const chatContainer7 = document.getElementById("chat-container-7");
    
// Iterate over the JSON data and generate chat bubbles
jsonData7.forEach(
    
    data => {
    const { sender, message } = data;
    const bubble = createChatBubble(sender, message);
    
    chatContainer7.appendChild(bubble);
    
});
    
const jsonData8 = [{"sender": "MindAgent", "message": "Alice and Bob are now both close to yellow_cube_2, with Alice being 0.13 units away and Bob being 0.33 units away. They are in position to sweep the cube. Alice should WAIT while Bob SWEEPs yellow_cube_2 into the dustpan.\n\nLet's proceed with the actions for Alice and Bob:\n\nEXECUTE\nNAME Alice ACTION WAIT\nNAME Bob ACTION SWEEP yellow_cube_2"}, {"sender": "Feedback", "message": "None"}, {"sender": "Action", "message": "Alice: WAIT\nBob: SWEEP yellow_cube_2"}];
// Get the chat container element
const chatContainer8 = document.getElementById("chat-container-8");
    
// Iterate over the JSON data and generate chat bubbles
jsonData8.forEach(
    
    data => {
    const { sender, message } = data;
    const bubble = createChatBubble(sender, message);
    
    chatContainer8.appendChild(bubble);
    
});
    
const jsonData9 = [{"sender": "MindAgent", "message": "Alice and Bob have successfully swept yellow_cube_2 into the dustpan. The dustpan now contains multiple cubes, and it is time for Alice to DUMP the contents into the trash bin. Bob should WAIT while Alice performs this action.\n\nLet's proceed with the actions for Alice and Bob:\n\nEXECUTE\nNAME Alice ACTION DUMP\nNAME Bob ACTION WAIT"}, {"sender": "Feedback", "message": "None"}, {"sender": "Action", "message": "Alice: DUMP\nBob: WAIT"}];
// Get the chat container element
const chatContainer9 = document.getElementById("chat-container-9");
    
// Iterate over the JSON data and generate chat bubbles
jsonData9.forEach(
    
    data => {
    const { sender, message } = data;
    const bubble = createChatBubble(sender, message);
    
    chatContainer9.appendChild(bubble);
    
});
    
const jsonData10 = [{"sender": "MindAgent", "message": "Alice and Bob have successfully dumped the cubes into the trash bin. The next closest target cube for both Alice and Bob is green_cube_2. Alice is 1.29 units away from it, and Bob is 0.54 units away from it. They should both move towards green_cube_2 to prepare for sweeping it into the dustpan.\n\nLet's proceed with the actions for Alice and Bob:\n\nEXECUTE\nNAME Alice ACTION MOVE green_cube_2\nNAME Bob ACTION MOVE green_cube_2"}, {"sender": "Feedback", "message": "None"}, {"sender": "Action", "message": "Alice: MOVE green_cube_2\nBob: MOVE green_cube_2"}];
// Get the chat container element
const chatContainer10 = document.getElementById("chat-container-10");
    
// Iterate over the JSON data and generate chat bubbles
jsonData10.forEach(
    
    data => {
    const { sender, message } = data;
    const bubble = createChatBubble(sender, message);
    
    chatContainer10.appendChild(bubble);
    
});
    
const jsonData11 = [{"sender": "MindAgent", "message": "Alice and Bob are now both close to green_cube_2, with Alice being 0.14 units away and Bob being 0.32 units away. They are in position to sweep the cube. Alice should WAIT while Bob SWEEPs green_cube_2 into the dustpan.\n\nLet's proceed with the actions for Alice and Bob:\n\nEXECUTE\nNAME Alice ACTION WAIT\nNAME Bob ACTION SWEEP green_cube_2"}, {"sender": "Feedback", "message": "None"}, {"sender": "Action", "message": "Alice: WAIT\nBob: SWEEP green_cube_2"}];
// Get the chat container element
const chatContainer11 = document.getElementById("chat-container-11");
    
// Iterate over the JSON data and generate chat bubbles
jsonData11.forEach(
    
    data => {
    const { sender, message } = data;
    const bubble = createChatBubble(sender, message);
    
    chatContainer11.appendChild(bubble);
    
});
    
const jsonData12 = [{"sender": "MindAgent", "message": "Alice and Bob have successfully swept green_cube_2 into the dustpan. The only remaining cube that needs to be swept is green_cube_1. Alice is 0.21 units away from it, and Bob is 0.40 units away from it. They should both move towards green_cube_1 to prepare for sweeping it into the dustpan.\n\nLet's proceed with the actions for Alice and Bob:\n\nEXECUTE\nNAME Alice ACTION MOVE green_cube_1\nNAME Bob ACTION MOVE green_cube_1"}, {"sender": "Feedback", "message": "None"}, {"sender": "Action", "message": "Alice: MOVE green_cube_1\nBob: MOVE green_cube_1"}];
// Get the chat container element
const chatContainer12 = document.getElementById("chat-container-12");
    
// Iterate over the JSON data and generate chat bubbles
jsonData12.forEach(
    
    data => {
    const { sender, message } = data;
    const bubble = createChatBubble(sender, message);
    
    chatContainer12.appendChild(bubble);
    
});
    
const jsonData13 = [{"sender": "MindAgent", "message": "Alice and Bob are now both close to green_cube_1, with Alice being 0.13 units away and Bob being 0.32 units away. They are in position to sweep the cube. Alice should WAIT while Bob SWEEPs green_cube_1 into the dustpan.\n\nLet's proceed with the actions for Alice and Bob:\n\nEXECUTE\nNAME Alice ACTION WAIT\nNAME Bob ACTION SWEEP green_cube_1"}, {"sender": "Feedback", "message": "None"}, {"sender": "Action", "message": "Alice: WAIT\nBob: SWEEP green_cube_1"}];
// Get the chat container element
const chatContainer13 = document.getElementById("chat-container-13");
    
// Iterate over the JSON data and generate chat bubbles
jsonData13.forEach(
    
    data => {
    const { sender, message } = data;
    const bubble = createChatBubble(sender, message);
    
    chatContainer13.appendChild(bubble);
    
});
    
const jsonData14 = [{"sender": "MindAgent", "message": "Alice and Bob have successfully swept green_cube_1 into the dustpan. The dustpan now contains multiple cubes, and it is time for Alice to DUMP the contents into the trash bin. Bob should WAIT while Alice performs this action.\n\nLet's proceed with the actions for Alice and Bob:\n\nEXECUTE\nNAME Alice ACTION DUMP\nNAME Bob ACTION WAIT"}, {"sender": "Feedback", "message": "None"}, {"sender": "Action", "message": "Alice: DUMP\nBob: WAIT"}];
// Get the chat container element
const chatContainer14 = document.getElementById("chat-container-14");
    
// Iterate over the JSON data and generate chat bubbles
jsonData14.forEach(
    
    data => {
    const { sender, message } = data;
    const bubble = createChatBubble(sender, message);
    
    chatContainer14.appendChild(bubble);
    
});
    