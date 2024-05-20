const jsonData0 = [{"sender": "MindAgent", "message": "EXECUTE\nNAME Alice ACTION PICK yellow_trapezoid PLACE panel2\nNAME Bob ACTION PICK pink_polygon PLACE panel4\nNAME Chad ACTION PICK blue_square PLACE panel6"}, {"sender": "Feedback", "message": "[Environment Feedback]:\n- Previous Plan:\nNAME Alice ACTION PICK yellow_trapezoid PLACE panel2\nNAME Bob ACTION PICK pink_polygon PLACE panel4\nNAME Chad ACTION PICK blue_square PLACE panel6\nTask Constraints:\n faild, Alice's ACTION is not valid, yellow_trapezoid cube can only be placed on panel6, panel3, panel5, but not on panel2Chad's ACTION is not valid, blue_square cube can only be placed on panel2, panel3, panel5, but not on panel6\n"}, {"sender": "Action", "message": "Alice: PICK yellow_trapezoid PLACE panel2\nBob: PICK pink_polygon PLACE panel4\nChad: PICK blue_square PLACE panel6"}, {"sender": "MindAgent", "message": "EXECUTE\nNAME Alice ACTION PICK pink_polygon PLACE panel2\nNAME Bob ACTION WAIT\nNAME Chad ACTION PICK blue_square PLACE panel5"}, {"sender": "Feedback", "message": "[Environment Feedback]:\n- Previous Plan:\nNAME Alice ACTION PICK pink_polygon PLACE panel2\nNAME Bob ACTION WAIT\nNAME Chad ACTION PICK blue_square PLACE panel5\nTask Constraints:\n faild, Alice's ACTION is not valid, pink_polygon cube can only be placed on panel4, panel3, panel5, but not on panel2\n"}, {"sender": "Action", "message": "Alice: PICK pink_polygon PLACE panel2\nBob: WAIT\nChad: PICK blue_square PLACE panel5"}, {"sender": "MindAgent", "message": "EXECUTE\nNAME Alice ACTION PICK pink_polygon PLACE panel3\nNAME Bob ACTION WAIT\nNAME Chad ACTION PICK blue_square PLACE panel5"}, {"sender": "Feedback", "message": "None"}, {"sender": "Action", "message": "Alice: PICK pink_polygon PLACE panel3\nBob: WAIT\nChad: PICK blue_square PLACE panel5"}];
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
    
const jsonData1 = [{"sender": "MindAgent", "message": "EXECUTE\nNAME Alice ACTION PICK yellow_trapezoid PLACE panel3\nNAME Bob ACTION PICK pink_polygon PLACE panel4\nNAME Chad ACTION PICK blue_square PLACE panel2"}, {"sender": "Feedback", "message": "[Environment Feedback]:\n- Previous Plan:\nNAME Alice ACTION PICK yellow_trapezoid PLACE panel3\nNAME Bob ACTION PICK pink_polygon PLACE panel4\nNAME Chad ACTION PICK blue_square PLACE panel2\n- Goal Step Alice (-0.28, 0.60, 0.50); Bob (0.00, 0.50, 0.50); Chad (-0.80, 0.50, 0.50):\n   - Reachability failed: Out of reach: Chad (-0.80, 0.50, 0.50); \n  "}, {"sender": "Action", "message": "Alice: PICK yellow_trapezoid PLACE panel3\nBob: PICK pink_polygon PLACE panel4\nChad: PICK blue_square PLACE panel2"}, {"sender": "MindAgent", "message": "EXECUTE\nNAME Alice ACTION PICK yellow_trapezoid PLACE panel3\nNAME Bob ACTION PICK blue_square PLACE panel4\nNAME Chad ACTION WAIT"}, {"sender": "Feedback", "message": "[Environment Feedback]:\n- Previous Plan:\nNAME Alice ACTION PICK yellow_trapezoid PLACE panel3\nNAME Bob ACTION PICK blue_square PLACE panel4\nNAME Chad ACTION WAIT\nTask Constraints:\n faild, Bob's ACTION is not valid, blue_square cube can only be placed on panel2, panel3, panel5, but not on panel4\n"}, {"sender": "Action", "message": "Alice: PICK yellow_trapezoid PLACE panel3\nBob: PICK blue_square PLACE panel4\nChad: WAIT"}, {"sender": "MindAgent", "message": "EXECUTE\nNAME Alice ACTION PICK yellow_trapezoid PLACE panel3\nNAME Bob ACTION PICK blue_square PLACE panel3\nNAME Chad ACTION WAIT"}, {"sender": "Feedback", "message": "None"}, {"sender": "Action", "message": "Alice: PICK yellow_trapezoid PLACE panel3\nBob: PICK blue_square PLACE panel3\nChad: WAIT"}];
// Get the chat container element
const chatContainer1 = document.getElementById("chat-container-1");
    
// Iterate over the JSON data and generate chat bubbles
jsonData1.forEach(
    
    data => {
    const { sender, message } = data;
    const bubble = createChatBubble(sender, message);
    
    chatContainer1.appendChild(bubble);
    
});
    
const jsonData2 = [{"sender": "MindAgent", "message": "EXECUTE\nNAME Alice ACTION PICK blue_square PLACE panel2\nNAME Bob ACTION PICK pink_polygon PLACE panel4\nNAME Chad ACTION WAIT"}, {"sender": "Feedback", "message": "None"}, {"sender": "Action", "message": "Alice: PICK blue_square PLACE panel2\nBob: PICK pink_polygon PLACE panel4\nChad: WAIT"}];
// Get the chat container element
const chatContainer2 = document.getElementById("chat-container-2");
    
// Iterate over the JSON data and generate chat bubbles
jsonData2.forEach(
    
    data => {
    const { sender, message } = data;
    const bubble = createChatBubble(sender, message);
    
    chatContainer2.appendChild(bubble);
    
});
    
const jsonData3 = [{"sender": "MindAgent", "message": "EXECUTE\nNAME Alice ACTION WAIT\nNAME Bob ACTION PICK yellow_trapezoid PLACE panel6\nNAME Chad ACTION WAIT"}, {"sender": "Feedback", "message": "[Environment Feedback]:\n- Previous Plan:\nNAME Alice ACTION WAIT\nNAME Bob ACTION PICK yellow_trapezoid PLACE panel6\nNAME Chad ACTION WAIT\n- Goal Step Alice (-0.21, 1.18, 0.46); Bob (0.80, 0.50, 0.50); Chad (1.38, 1.18, 0.43):\n   - Reachability failed: Out of reach: Bob (0.80, 0.50, 0.50); \n  "}, {"sender": "Action", "message": "Alice: WAIT\nBob: PICK yellow_trapezoid PLACE panel6\nChad: WAIT"}, {"sender": "MindAgent", "message": "EXECUTE\nNAME Alice ACTION PICK yellow_trapezoid PLACE panel2\nNAME Bob ACTION WAIT\nNAME Chad ACTION WAIT"}, {"sender": "Feedback", "message": "[Environment Feedback]:\n- Previous Plan:\nNAME Alice ACTION PICK yellow_trapezoid PLACE panel2\nNAME Bob ACTION WAIT\nNAME Chad ACTION WAIT\nTask Constraints:\n faild, Alice's ACTION is not valid, yellow_trapezoid cube can only be placed on panel6, panel3, panel5, but not on panel2\n"}, {"sender": "Action", "message": "Alice: PICK yellow_trapezoid PLACE panel2\nBob: WAIT\nChad: WAIT"}, {"sender": "MindAgent", "message": "EXECUTE\nNAME Alice ACTION PICK yellow_trapezoid PLACE panel3\nNAME Bob ACTION WAIT\nNAME Chad ACTION WAIT"}, {"sender": "Feedback", "message": "None"}, {"sender": "Action", "message": "Alice: PICK yellow_trapezoid PLACE panel3\nBob: WAIT\nChad: WAIT"}];
// Get the chat container element
const chatContainer3 = document.getElementById("chat-container-3");
    
// Iterate over the JSON data and generate chat bubbles
jsonData3.forEach(
    
    data => {
    const { sender, message } = data;
    const bubble = createChatBubble(sender, message);
    
    chatContainer3.appendChild(bubble);
    
});
    
const jsonData4 = [{"sender": "MindAgent", "message": "EXECUTE\nNAME Alice ACTION WAIT\nNAME Bob ACTION PICK yellow_trapezoid PLACE panel6\nNAME Chad ACTION WAIT"}, {"sender": "Feedback", "message": "[Environment Feedback]:\n- Previous Plan:\nNAME Alice ACTION WAIT\nNAME Bob ACTION PICK yellow_trapezoid PLACE panel6\nNAME Chad ACTION WAIT\n- Goal Step Alice (-0.17, 1.18, 0.45); Bob (-0.28, 0.76, 0.29); Chad (1.38, 1.18, 0.43):\n   - IK failed: on Bob (-0.28, 0.76, 0.29); \n  "}, {"sender": "Action", "message": "Alice: WAIT\nBob: PICK yellow_trapezoid PLACE panel6\nChad: WAIT"}, {"sender": "MindAgent", "message": "EXECUTE\nNAME Alice ACTION WAIT\nNAME Bob ACTION PICK yellow_trapezoid PLACE panel5\nNAME Chad ACTION WAIT"}, {"sender": "Feedback", "message": "[Environment Feedback]:\n- Previous Plan:\nNAME Alice ACTION WAIT\nNAME Bob ACTION PICK yellow_trapezoid PLACE panel5\nNAME Chad ACTION WAIT\n- Goal Step Alice (-0.17, 1.18, 0.45); Bob (-0.28, 0.76, 0.29); Chad (1.38, 1.18, 0.43):\n   - IK failed: on Bob (-0.28, 0.76, 0.29); \n  "}, {"sender": "Action", "message": "Alice: WAIT\nBob: PICK yellow_trapezoid PLACE panel5\nChad: WAIT"}, {"sender": "MindAgent", "message": "EXECUTE\nNAME Alice ACTION PICK yellow_trapezoid PLACE panel3\nNAME Bob ACTION WAIT\nNAME Chad ACTION WAIT"}, {"sender": "Feedback", "message": "None"}, {"sender": "Action", "message": "Alice: PICK yellow_trapezoid PLACE panel3\nBob: WAIT\nChad: WAIT"}];
// Get the chat container element
const chatContainer4 = document.getElementById("chat-container-4");
    
// Iterate over the JSON data and generate chat bubbles
jsonData4.forEach(
    
    data => {
    const { sender, message } = data;
    const bubble = createChatBubble(sender, message);
    
    chatContainer4.appendChild(bubble);
    
});
    
const jsonData5 = [{"sender": "MindAgent", "message": "EXECUTE\nNAME Alice ACTION WAIT\nNAME Bob ACTION PICK yellow_trapezoid PLACE panel5\nNAME Chad ACTION WAIT"}, {"sender": "Feedback", "message": "None"}, {"sender": "Action", "message": "Alice: WAIT\nBob: PICK yellow_trapezoid PLACE panel5\nChad: WAIT"}];
// Get the chat container element
const chatContainer5 = document.getElementById("chat-container-5");
    
// Iterate over the JSON data and generate chat bubbles
jsonData5.forEach(
    
    data => {
    const { sender, message } = data;
    const bubble = createChatBubble(sender, message);
    
    chatContainer5.appendChild(bubble);
    
});
    
const jsonData6 = [{"sender": "MindAgent", "message": "EXECUTE\nNAME Alice ACTION WAIT\nNAME Bob ACTION WAIT\nNAME Chad ACTION PICK yellow_trapezoid PLACE panel6"}, {"sender": "Feedback", "message": "None"}, {"sender": "Action", "message": "Alice: WAIT\nBob: WAIT\nChad: PICK yellow_trapezoid PLACE panel6"}];
// Get the chat container element
const chatContainer6 = document.getElementById("chat-container-6");
    
// Iterate over the JSON data and generate chat bubbles
jsonData6.forEach(
    
    data => {
    const { sender, message } = data;
    const bubble = createChatBubble(sender, message);
    
    chatContainer6.appendChild(bubble);
    
});
    