const jsonData0 = [{"sender": "Alice", "message": "Bob, let's start with yellow_cube_1 since it's the closest to both of us. I will MOVE to yellow_cube_1 and you should do the same from your side. Once we're both in position, I'll WAIT while you SWEEP it into the dustpan.\n\nEXECUTE\nNAME Alice ACTION MOVE yellow_cube_1\nNAME Bob ACTION MOVE yellow_cube_1"}, {"sender": "ScoreFeedback", "message": "\n[Scores]\n[Alice Response]:\nBob, let's start with yellow_cube_1 since it's the closest to both of us. I will MOVE to yellow_cube_1 and you should do the same from your side. Once we're both in position, I'll WAIT while you SWEEP it into the dustpan.\n\nEXECUTE\nNAME Alice ACTION MOVE yellow_cube_1\nNAME Bob ACTION MOVE yellow_cube_1\n[Evaluation Score]:\nThe advantage score of Alice's plan is 21.846!\n\n"}, {"sender": "Feedback", "message": "None"}, {"sender": "Action", "message": "Alice: MOVE yellow_cube_1\nBob: MOVE yellow_cube_1"}];
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
    
const jsonData1 = [{"sender": "Alice", "message": "Bob, since we are both already in front of yellow_cube_1 and it's the closest to us, I will WAIT while you SWEEP yellow_cube_1 into the dustpan.\n\nEXECUTE\nNAME Alice ACTION WAIT\nNAME Bob ACTION SWEEP yellow_cube_1"}, {"sender": "ScoreFeedback", "message": "\n[Scores]\n[Alice Response]:\nBob, since we are both already in front of yellow_cube_1 and it's the closest to us, I will WAIT while you SWEEP yellow_cube_1 into the dustpan.\n\nEXECUTE\nNAME Alice ACTION WAIT\nNAME Bob ACTION SWEEP yellow_cube_1\n[Evaluation Score]:\nThe advantage score of Alice's plan is 24.764!\n\n"}, {"sender": "Feedback", "message": "None"}, {"sender": "Action", "message": "Alice: WAIT\nBob: SWEEP yellow_cube_1"}];
// Get the chat container element
const chatContainer1 = document.getElementById("chat-container-1");
    
// Iterate over the JSON data and generate chat bubbles
jsonData1.forEach(
    
    data => {
    const { sender, message } = data;
    const bubble = createChatBubble(sender, message);
    
    chatContainer1.appendChild(bubble);
    
});
    
const jsonData2 = [{"sender": "Alice", "message": "Bob, let's target blue_cube_1 next since it's the closest cube to both of us. I will MOVE to blue_cube_1, and you should do the same. Once we're both in position, I'll WAIT while you SWEEP it into the dustpan.\n\nEXECUTE\nNAME Alice ACTION MOVE blue_cube_1\nNAME Bob ACTION MOVE blue_cube_1"}, {"sender": "ScoreFeedback", "message": "\n[Scores]\n[Alice Response]:\nBob, let's target blue_cube_1 next since it's the closest cube to both of us. I will MOVE to blue_cube_1, and you should do the same. Once we're both in position, I'll WAIT while you SWEEP it into the dustpan.\n\nEXECUTE\nNAME Alice ACTION MOVE blue_cube_1\nNAME Bob ACTION MOVE blue_cube_1\n[Evaluation Score]:\nThe advantage score of Alice's plan is -1.956!\n\n"}, {"sender": "Bob", "message": "Alice, we should not target blue_cube_1 as it is not one of the cubes we need to sweep. Instead, let's focus on yellow_cube_2 since it's the closest yellow cube to both of us. I will MOVE to yellow_cube_2, and you should MOVE to yellow_cube_2 as well. After we are both in position, you can WAIT while I SWEEP it into the dustpan.\n\nEXECUTE\nNAME Alice ACTION MOVE yellow_cube_2\nNAME Bob ACTION MOVE yellow_cube_2"}, {"sender": "ScoreFeedback", "message": "\n[Scores]\n[Alice Response]:\nBob, let's target blue_cube_1 next since it's the closest cube to both of us. I will MOVE to blue_cube_1, and you should do the same. Once we're both in position, I'll WAIT while you SWEEP it into the dustpan.\n\nEXECUTE\nNAME Alice ACTION MOVE blue_cube_1\nNAME Bob ACTION MOVE blue_cube_1\n[Evaluation Score]:\nThe advantage score of Alice's plan is -1.956!\n\n[Bob Response]:\nAlice, we should not target blue_cube_1 as it is not one of the cubes we need to sweep. Instead, let's focus on yellow_cube_2 since it's the closest yellow cube to both of us. I will MOVE to yellow_cube_2, and you should MOVE to yellow_cube_2 as well. After we are both in position, you can WAIT while I SWEEP it into the dustpan.\n\nEXECUTE\nNAME Alice ACTION MOVE yellow_cube_2\nNAME Bob ACTION MOVE yellow_cube_2\n[Evaluation Score]:\nThe advantage score of Bob's plan is 25.478!\n\n"}, {"sender": "Feedback", "message": "None"}, {"sender": "Action", "message": "Alice: MOVE yellow_cube_2\nBob: MOVE yellow_cube_2"}];
// Get the chat container element
const chatContainer2 = document.getElementById("chat-container-2");
    
// Iterate over the JSON data and generate chat bubbles
jsonData2.forEach(
    
    data => {
    const { sender, message } = data;
    const bubble = createChatBubble(sender, message);
    
    chatContainer2.appendChild(bubble);
    
});
    
const jsonData3 = [{"sender": "Alice", "message": "Bob, since we are both close to yellow_cube_2, let's sweep it up next. I will WAIT while you SWEEP yellow_cube_2 into the dustpan.\n\nEXECUTE\nNAME Alice ACTION WAIT\nNAME Bob ACTION SWEEP yellow_cube_2"}, {"sender": "ScoreFeedback", "message": "\n[Scores]\n[Alice Response]:\nBob, since we are both close to yellow_cube_2, let's sweep it up next. I will WAIT while you SWEEP yellow_cube_2 into the dustpan.\n\nEXECUTE\nNAME Alice ACTION WAIT\nNAME Bob ACTION SWEEP yellow_cube_2\n[Evaluation Score]:\nThe advantage score of Alice's plan is 24.175!\n\n"}, {"sender": "Feedback", "message": "None"}, {"sender": "Action", "message": "Alice: WAIT\nBob: SWEEP yellow_cube_2"}];
// Get the chat container element
const chatContainer3 = document.getElementById("chat-container-3");
    
// Iterate over the JSON data and generate chat bubbles
jsonData3.forEach(
    
    data => {
    const { sender, message } = data;
    const bubble = createChatBubble(sender, message);
    
    chatContainer3.appendChild(bubble);
    
});
    
const jsonData4 = [{"sender": "Alice", "message": "Bob, we should focus on green_cube_1 next since it's the closest green cube to both of us. I will MOVE to green_cube_1 and you should do the same so we can prepare to sweep it up.\n\nEXECUTE\nNAME Alice ACTION MOVE green_cube_1\nNAME Bob ACTION MOVE green_cube_1"}, {"sender": "ScoreFeedback", "message": "\n[Scores]\n[Alice Response]:\nBob, we should focus on green_cube_1 next since it's the closest green cube to both of us. I will MOVE to green_cube_1 and you should do the same so we can prepare to sweep it up.\n\nEXECUTE\nNAME Alice ACTION MOVE green_cube_1\nNAME Bob ACTION MOVE green_cube_1\n[Evaluation Score]:\nThe advantage score of Alice's plan is 24.706!\n\n"}, {"sender": "Feedback", "message": "None"}, {"sender": "Action", "message": "Alice: MOVE green_cube_1\nBob: MOVE green_cube_1"}];
// Get the chat container element
const chatContainer4 = document.getElementById("chat-container-4");
    
// Iterate over the JSON data and generate chat bubbles
jsonData4.forEach(
    
    data => {
    const { sender, message } = data;
    const bubble = createChatBubble(sender, message);
    
    chatContainer4.appendChild(bubble);
    
});
    
const jsonData5 = [{"sender": "Alice", "message": "Bob, we are both in position to deal with green_cube_1. I will WAIT while you SWEEP green_cube_1 into the dustpan.\n\nEXECUTE\nNAME Alice ACTION WAIT\nNAME Bob ACTION SWEEP green_cube_1"}, {"sender": "ScoreFeedback", "message": "\n[Scores]\n[Alice Response]:\nBob, we are both in position to deal with green_cube_1. I will WAIT while you SWEEP green_cube_1 into the dustpan.\n\nEXECUTE\nNAME Alice ACTION WAIT\nNAME Bob ACTION SWEEP green_cube_1\n[Evaluation Score]:\nThe advantage score of Alice's plan is 24.475!\n\n"}, {"sender": "Feedback", "message": "None"}, {"sender": "Action", "message": "Alice: WAIT\nBob: SWEEP green_cube_1"}];
// Get the chat container element
const chatContainer5 = document.getElementById("chat-container-5");
    
// Iterate over the JSON data and generate chat bubbles
jsonData5.forEach(
    
    data => {
    const { sender, message } = data;
    const bubble = createChatBubble(sender, message);
    
    chatContainer5.appendChild(bubble);
    
});
    
const jsonData6 = [{"sender": "Alice", "message": "Bob, we have green_cube_1, yellow_cube_1, and yellow_cube_2 already in the dustpan. Let's MOVE to yellow_cube_3, which is the closest remaining target cube for both of us. After we are in position, I will WAIT while you SWEEP yellow_cube_3 into the dustpan.\n\nEXECUTE\nNAME Alice ACTION MOVE yellow_cube_3\nNAME Bob ACTION MOVE yellow_cube_3"}, {"sender": "ScoreFeedback", "message": "\n[Scores]\n[Alice Response]:\nBob, we have green_cube_1, yellow_cube_1, and yellow_cube_2 already in the dustpan. Let's MOVE to yellow_cube_3, which is the closest remaining target cube for both of us. After we are in position, I will WAIT while you SWEEP yellow_cube_3 into the dustpan.\n\nEXECUTE\nNAME Alice ACTION MOVE yellow_cube_3\nNAME Bob ACTION MOVE yellow_cube_3\n[Evaluation Score]:\nThe advantage score of Alice's plan is 25.211!\n\n"}, {"sender": "Feedback", "message": "None"}, {"sender": "Action", "message": "Alice: MOVE yellow_cube_3\nBob: MOVE yellow_cube_3"}];
// Get the chat container element
const chatContainer6 = document.getElementById("chat-container-6");
    
// Iterate over the JSON data and generate chat bubbles
jsonData6.forEach(
    
    data => {
    const { sender, message } = data;
    const bubble = createChatBubble(sender, message);
    
    chatContainer6.appendChild(bubble);
    
});
    
const jsonData7 = [{"sender": "Alice", "message": "Bob, we are both in position in front of yellow_cube_3. I will WAIT while you SWEEP yellow_cube_3 into the dustpan.\n\nEXECUTE\nNAME Alice ACTION WAIT\nNAME Bob ACTION SWEEP yellow_cube_3"}, {"sender": "ScoreFeedback", "message": "\n[Scores]\n[Alice Response]:\nBob, we are both in position in front of yellow_cube_3. I will WAIT while you SWEEP yellow_cube_3 into the dustpan.\n\nEXECUTE\nNAME Alice ACTION WAIT\nNAME Bob ACTION SWEEP yellow_cube_3\n[Evaluation Score]:\nThe advantage score of Alice's plan is 23.608!\n\n"}, {"sender": "Feedback", "message": "None"}, {"sender": "Action", "message": "Alice: WAIT\nBob: SWEEP yellow_cube_3"}];
// Get the chat container element
const chatContainer7 = document.getElementById("chat-container-7");
    
// Iterate over the JSON data and generate chat bubbles
jsonData7.forEach(
    
    data => {
    const { sender, message } = data;
    const bubble = createChatBubble(sender, message);
    
    chatContainer7.appendChild(bubble);
    
});
    
const jsonData8 = [{"sender": "Alice", "message": "Bob, we have several cubes in the dustpan already. It's time to DUMP them into the trash_bin. I will do that while you WAIT.\n\nEXECUTE\nNAME Alice ACTION DUMP\nNAME Bob ACTION WAIT"}, {"sender": "ScoreFeedback", "message": "\n[Scores]\n[Alice Response]:\nBob, we have several cubes in the dustpan already. It's time to DUMP them into the trash_bin. I will do that while you WAIT.\n\nEXECUTE\nNAME Alice ACTION DUMP\nNAME Bob ACTION WAIT\n[Evaluation Score]:\nThe advantage score of Alice's plan is -1.839!\n\n"}, {"sender": "Bob", "message": "Alice, we should not DUMP the cubes yet as there are still green cubes on the table that we need to sweep up. Let's MOVE to green_cube_2 and prepare to sweep it into the dustpan next.\n\nEXECUTE\nNAME Alice ACTION MOVE green_cube_2\nNAME Bob ACTION MOVE green_cube_2"}, {"sender": "ScoreFeedback", "message": "\n[Scores]\n[Alice Response]:\nBob, we have several cubes in the dustpan already. It's time to DUMP them into the trash_bin. I will do that while you WAIT.\n\nEXECUTE\nNAME Alice ACTION DUMP\nNAME Bob ACTION WAIT\n[Evaluation Score]:\nThe advantage score of Alice's plan is -1.839!\n\n[Bob Response]:\nAlice, we should not DUMP the cubes yet as there are still green cubes on the table that we need to sweep up. Let's MOVE to green_cube_2 and prepare to sweep it into the dustpan next.\n\nEXECUTE\nNAME Alice ACTION MOVE green_cube_2\nNAME Bob ACTION MOVE green_cube_2\n[Evaluation Score]:\nThe advantage score of Bob's plan is 23.406!\n\n"}, {"sender": "Feedback", "message": "None"}, {"sender": "Action", "message": "Alice: MOVE green_cube_2\nBob: MOVE green_cube_2"}];
// Get the chat container element
const chatContainer8 = document.getElementById("chat-container-8");
    
// Iterate over the JSON data and generate chat bubbles
jsonData8.forEach(
    
    data => {
    const { sender, message } = data;
    const bubble = createChatBubble(sender, message);
    
    chatContainer8.appendChild(bubble);
    
});
    
const jsonData9 = [{"sender": "Alice", "message": "Bob, we are both in position near green_cube_2, so let's proceed with sweeping it into the dustpan. I will WAIT while you SWEEP green_cube_2.\n\nEXECUTE\nNAME Alice ACTION WAIT\nNAME Bob ACTION SWEEP green_cube_2"}, {"sender": "ScoreFeedback", "message": "\n[Scores]\n[Alice Response]:\nBob, we are both in position near green_cube_2, so let's proceed with sweeping it into the dustpan. I will WAIT while you SWEEP green_cube_2.\n\nEXECUTE\nNAME Alice ACTION WAIT\nNAME Bob ACTION SWEEP green_cube_2\n[Evaluation Score]:\nThe advantage score of Alice's plan is 20.993!\n\n"}, {"sender": "Feedback", "message": "None"}, {"sender": "Action", "message": "Alice: WAIT\nBob: SWEEP green_cube_2"}];
// Get the chat container element
const chatContainer9 = document.getElementById("chat-container-9");
    
// Iterate over the JSON data and generate chat bubbles
jsonData9.forEach(
    
    data => {
    const { sender, message } = data;
    const bubble = createChatBubble(sender, message);
    
    chatContainer9.appendChild(bubble);
    
});
    
const jsonData10 = [{"sender": "Alice", "message": "Bob, we have several cubes in the dustpan already. It's time to DUMP them into the trash_bin. I will perform the DUMP action while you WAIT.\n\nEXECUTE\nNAME Alice ACTION DUMP\nNAME Bob ACTION WAIT"}, {"sender": "ScoreFeedback", "message": "\n[Scores]\n[Alice Response]:\nBob, we have several cubes in the dustpan already. It's time to DUMP them into the trash_bin. I will perform the DUMP action while you WAIT.\n\nEXECUTE\nNAME Alice ACTION DUMP\nNAME Bob ACTION WAIT\n[Evaluation Score]:\nThe advantage score of Alice's plan is -1.477!\n\n"}, {"sender": "Bob", "message": "Alice, it seems there was a misunderstanding. We still have green_cube_3 on the table that we need to sweep up. Let's both MOVE to green_cube_3 and then we can SWEEP it into the dustpan together. After that, we can consider dumping the cubes.\n\nEXECUTE\nNAME Alice ACTION MOVE green_cube_3\nNAME Bob ACTION MOVE green_cube_3"}, {"sender": "ScoreFeedback", "message": "\n[Scores]\n[Alice Response]:\nBob, we have several cubes in the dustpan already. It's time to DUMP them into the trash_bin. I will perform the DUMP action while you WAIT.\n\nEXECUTE\nNAME Alice ACTION DUMP\nNAME Bob ACTION WAIT\n[Evaluation Score]:\nThe advantage score of Alice's plan is -1.477!\n\n[Bob Response]:\nAlice, it seems there was a misunderstanding. We still have green_cube_3 on the table that we need to sweep up. Let's both MOVE to green_cube_3 and then we can SWEEP it into the dustpan together. After that, we can consider dumping the cubes.\n\nEXECUTE\nNAME Alice ACTION MOVE green_cube_3\nNAME Bob ACTION MOVE green_cube_3\n[Evaluation Score]:\nThe advantage score of Bob's plan is 16.987!\n\n"}, {"sender": "Feedback", "message": "None"}, {"sender": "Action", "message": "Alice: MOVE green_cube_3\nBob: MOVE green_cube_3"}];
// Get the chat container element
const chatContainer10 = document.getElementById("chat-container-10");
    
// Iterate over the JSON data and generate chat bubbles
jsonData10.forEach(
    
    data => {
    const { sender, message } = data;
    const bubble = createChatBubble(sender, message);
    
    chatContainer10.appendChild(bubble);
    
});
    
const jsonData11 = [{"sender": "Alice", "message": "Bob, we are both in position near green_cube_3. I will WAIT while you SWEEP green_cube_3 into the dustpan.\n\nEXECUTE\nNAME Alice ACTION WAIT\nNAME Bob ACTION SWEEP green_cube_3"}, {"sender": "ScoreFeedback", "message": "\n[Scores]\n[Alice Response]:\nBob, we are both in position near green_cube_3. I will WAIT while you SWEEP green_cube_3 into the dustpan.\n\nEXECUTE\nNAME Alice ACTION WAIT\nNAME Bob ACTION SWEEP green_cube_3\n[Evaluation Score]:\nThe advantage score of Alice's plan is 12.015!\n\n"}, {"sender": "Feedback", "message": "None"}, {"sender": "Action", "message": "Alice: WAIT\nBob: SWEEP green_cube_3"}];
// Get the chat container element
const chatContainer11 = document.getElementById("chat-container-11");
    
// Iterate over the JSON data and generate chat bubbles
jsonData11.forEach(
    
    data => {
    const { sender, message } = data;
    const bubble = createChatBubble(sender, message);
    
    chatContainer11.appendChild(bubble);
    
});
    
const jsonData12 = [{"sender": "Alice", "message": "Bob, we have multiple cubes in the dustpan already. It's time for me to DUMP them into the trash_bin while you WAIT.\n\nEXECUTE\nNAME Alice ACTION DUMP\nNAME Bob ACTION WAIT"}, {"sender": "ScoreFeedback", "message": "\n[Scores]\n[Alice Response]:\nBob, we have multiple cubes in the dustpan already. It's time for me to DUMP them into the trash_bin while you WAIT.\n\nEXECUTE\nNAME Alice ACTION DUMP\nNAME Bob ACTION WAIT\n[Evaluation Score]:\nThe advantage score of Alice's plan is 3.913!\n\n"}, {"sender": "Feedback", "message": "None"}, {"sender": "Action", "message": "Alice: DUMP\nBob: WAIT"}];
// Get the chat container element
const chatContainer12 = document.getElementById("chat-container-12");
    
// Iterate over the JSON data and generate chat bubbles
jsonData12.forEach(
    
    data => {
    const { sender, message } = data;
    const bubble = createChatBubble(sender, message);
    
    chatContainer12.appendChild(bubble);
    
});
    