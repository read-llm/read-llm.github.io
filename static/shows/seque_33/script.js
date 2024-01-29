const jsonData0 = [{"sender": "Alice", "message": "Bob, let's focus on the yellow cubes first as they are part of our target. The closest one is yellow_cube_1. I will MOVE to yellow_cube_1 and WAIT for you to SWEEP it. After that, we can proceed to the next closest target cube.\n\nPROCEED\nNAME Alice ACTION MOVE yellow_cube_1"}, {"sender": "ScoreFeedback", "message": "\n[Scores]\n[Alice Response]:\nBob, let's focus on the yellow cubes first as they are part of our target. The closest one is yellow_cube_1. I will MOVE to yellow_cube_1 and WAIT for you to SWEEP it. After that, we can proceed to the next closest target cube.\n\nPROCEED\nNAME Alice ACTION MOVE yellow_cube_1\n[Evaluation Score]:\nThe advantage score of Alice's action is 3.1925!\n\n"}, {"sender": "Bob", "message": "Alice, I agree with your plan. I will MOVE to yellow_cube_1 as well, so we can SWEEP it together. Once we're both in position, I'll SWEEP while you WAIT.\n\nPROCEED\nNAME Bob ACTION MOVE yellow_cube_1"}, {"sender": "ScoreFeedback", "message": "\n[Scores]\n[Alice Response]:\nBob, let's focus on the yellow cubes first as they are part of our target. The closest one is yellow_cube_1. I will MOVE to yellow_cube_1 and WAIT for you to SWEEP it. After that, we can proceed to the next closest target cube.\n\nPROCEED\nNAME Alice ACTION MOVE yellow_cube_1\n[Evaluation Score]:\nThe advantage score of Alice's action is 3.1925!\n\n[Bob Response]:\nAlice, I agree with your plan. I will MOVE to yellow_cube_1 as well, so we can SWEEP it together. Once we're both in position, I'll SWEEP while you WAIT.\n\nPROCEED\nNAME Bob ACTION MOVE yellow_cube_1\n[Evaluation Score]:\nThe advantage score of Bob's action is 2.0557!\n\n"}, {"sender": "Feedback", "message": "None"}, {"sender": "Action", "message": "Alice: MOVE yellow_cube_1\nBob: MOVE yellow_cube_1"}];
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
    
const jsonData1 = [{"sender": "Alice", "message": "Bob, we are both in position near yellow_cube_1. I will WAIT while you SWEEP yellow_cube_1 into the dustpan.\n\nPROCEED\nNAME Alice ACTION WAIT"}, {"sender": "ScoreFeedback", "message": "\n[Scores]\n[Alice Response]:\nBob, we are both in position near yellow_cube_1. I will WAIT while you SWEEP yellow_cube_1 into the dustpan.\n\nPROCEED\nNAME Alice ACTION WAIT\n[Evaluation Score]:\nThe advantage score of Alice's action is 4.0107!\n\n"}, {"sender": "Bob", "message": "Alice, that's perfect. I will SWEEP yellow_cube_1 into the dustpan now that we are both in position.\n\nPROCEED\nNAME Bob ACTION SWEEP yellow_cube_1"}, {"sender": "ScoreFeedback", "message": "\n[Scores]\n[Alice Response]:\nBob, we are both in position near yellow_cube_1. I will WAIT while you SWEEP yellow_cube_1 into the dustpan.\n\nPROCEED\nNAME Alice ACTION WAIT\n[Evaluation Score]:\nThe advantage score of Alice's action is 4.0107!\n\n[Bob Response]:\nAlice, that's perfect. I will SWEEP yellow_cube_1 into the dustpan now that we are both in position.\n\nPROCEED\nNAME Bob ACTION SWEEP yellow_cube_1\n[Evaluation Score]:\nThe advantage score of Bob's action is 1.4414!\n\n"}, {"sender": "Feedback", "message": "None"}, {"sender": "Action", "message": "Alice: WAIT\nBob: SWEEP yellow_cube_1"}];
// Get the chat container element
const chatContainer1 = document.getElementById("chat-container-1");
    
// Iterate over the JSON data and generate chat bubbles
jsonData1.forEach(
    
    data => {
    const { sender, message } = data;
    const bubble = createChatBubble(sender, message);
    
    chatContainer1.appendChild(bubble);
    
});
    
const jsonData2 = [{"sender": "Alice", "message": "Bob, now that we have yellow_cube_1 in the dustpan, let's target green_cube_3 next as it's the closest green cube to us. I will MOVE to green_cube_3 and you should do the same from your side.\n\nPROCEED\nNAME Alice ACTION MOVE green_cube_3"}, {"sender": "ScoreFeedback", "message": "\n[Scores]\n[Alice Response]:\nBob, now that we have yellow_cube_1 in the dustpan, let's target green_cube_3 next as it's the closest green cube to us. I will MOVE to green_cube_3 and you should do the same from your side.\n\nPROCEED\nNAME Alice ACTION MOVE green_cube_3\n[Evaluation Score]:\nThe advantage score of Alice's action is 4.2955!\n\n"}, {"sender": "Bob", "message": "Alice, I agree with targeting green_cube_3 next. I will MOVE to green_cube_3 from my side so we can sweep it up together.\n\nPROCEED\nNAME Bob ACTION MOVE green_cube_3"}, {"sender": "ScoreFeedback", "message": "\n[Scores]\n[Alice Response]:\nBob, now that we have yellow_cube_1 in the dustpan, let's target green_cube_3 next as it's the closest green cube to us. I will MOVE to green_cube_3 and you should do the same from your side.\n\nPROCEED\nNAME Alice ACTION MOVE green_cube_3\n[Evaluation Score]:\nThe advantage score of Alice's action is 4.2955!\n\n[Bob Response]:\nAlice, I agree with targeting green_cube_3 next. I will MOVE to green_cube_3 from my side so we can sweep it up together.\n\nPROCEED\nNAME Bob ACTION MOVE green_cube_3\n[Evaluation Score]:\nThe advantage score of Bob's action is 2.4856!\n\n"}, {"sender": "Feedback", "message": "None"}, {"sender": "Action", "message": "Alice: MOVE green_cube_3\nBob: MOVE green_cube_3"}];
// Get the chat container element
const chatContainer2 = document.getElementById("chat-container-2");
    
// Iterate over the JSON data and generate chat bubbles
jsonData2.forEach(
    
    data => {
    const { sender, message } = data;
    const bubble = createChatBubble(sender, message);
    
    chatContainer2.appendChild(bubble);
    
});
    
const jsonData3 = [{"sender": "Alice", "message": "Bob, we are both in position at green_cube_3. You can SWEEP it into the dustpan while I WAIT here.\n\nPROCEED\nNAME Alice ACTION WAIT"}, {"sender": "ScoreFeedback", "message": "\n[Scores]\n[Alice Response]:\nBob, we are both in position at green_cube_3. You can SWEEP it into the dustpan while I WAIT here.\n\nPROCEED\nNAME Alice ACTION WAIT\n[Evaluation Score]:\nThe advantage score of Alice's action is 3.7837!\n\n"}, {"sender": "Bob", "message": "PROCEED\nNAME Bob ACTION SWEEP green_cube_3"}, {"sender": "ScoreFeedback", "message": "\n[Scores]\n[Alice Response]:\nBob, we are both in position at green_cube_3. You can SWEEP it into the dustpan while I WAIT here.\n\nPROCEED\nNAME Alice ACTION WAIT\n[Evaluation Score]:\nThe advantage score of Alice's action is 3.7837!\n\n[Bob Response]:\nPROCEED\nNAME Bob ACTION SWEEP green_cube_3\n[Evaluation Score]:\nThe advantage score of Bob's action is 1.2993!\n\n"}, {"sender": "Feedback", "message": "None"}, {"sender": "Action", "message": "Alice: WAIT\nBob: SWEEP green_cube_3"}];
// Get the chat container element
const chatContainer3 = document.getElementById("chat-container-3");
    
// Iterate over the JSON data and generate chat bubbles
jsonData3.forEach(
    
    data => {
    const { sender, message } = data;
    const bubble = createChatBubble(sender, message);
    
    chatContainer3.appendChild(bubble);
    
});
    
const jsonData4 = [{"sender": "Alice", "message": "Bob, we have green_cube_1 and yellow_cube_2 nearby. Let's target yellow_cube_2 next. I will MOVE to yellow_cube_2 and you should do the same from the opposite side.\n\nPROCEED\nNAME Alice ACTION MOVE yellow_cube_2"}, {"sender": "ScoreFeedback", "message": "\n[Scores]\n[Alice Response]:\nBob, we have green_cube_1 and yellow_cube_2 nearby. Let's target yellow_cube_2 next. I will MOVE to yellow_cube_2 and you should do the same from the opposite side.\n\nPROCEED\nNAME Alice ACTION MOVE yellow_cube_2\n[Evaluation Score]:\nThe advantage score of Alice's action is 3.4572!\n\n"}, {"sender": "Bob", "message": "PROCEED\nNAME Bob ACTION MOVE yellow_cube_2"}, {"sender": "ScoreFeedback", "message": "\n[Scores]\n[Alice Response]:\nBob, we have green_cube_1 and yellow_cube_2 nearby. Let's target yellow_cube_2 next. I will MOVE to yellow_cube_2 and you should do the same from the opposite side.\n\nPROCEED\nNAME Alice ACTION MOVE yellow_cube_2\n[Evaluation Score]:\nThe advantage score of Alice's action is 3.4572!\n\n[Bob Response]:\nPROCEED\nNAME Bob ACTION MOVE yellow_cube_2\n[Evaluation Score]:\nThe advantage score of Bob's action is 1.8296!\n\n"}, {"sender": "Feedback", "message": "None"}, {"sender": "Action", "message": "Alice: MOVE yellow_cube_2\nBob: MOVE yellow_cube_2"}];
// Get the chat container element
const chatContainer4 = document.getElementById("chat-container-4");
    
// Iterate over the JSON data and generate chat bubbles
jsonData4.forEach(
    
    data => {
    const { sender, message } = data;
    const bubble = createChatBubble(sender, message);
    
    chatContainer4.appendChild(bubble);
    
});
    
const jsonData5 = [{"sender": "Alice", "message": "Bob, we are both in position near yellow_cube_2. I will WAIT while you SWEEP yellow_cube_2 into the dustpan.\n\nPROCEED\nNAME Alice ACTION WAIT"}, {"sender": "ScoreFeedback", "message": "\n[Scores]\n[Alice Response]:\nBob, we are both in position near yellow_cube_2. I will WAIT while you SWEEP yellow_cube_2 into the dustpan.\n\nPROCEED\nNAME Alice ACTION WAIT\n[Evaluation Score]:\nThe advantage score of Alice's action is 2.5231!\n\n"}, {"sender": "Bob", "message": "PROCEED\nNAME Bob ACTION SWEEP yellow_cube_2"}, {"sender": "ScoreFeedback", "message": "\n[Scores]\n[Alice Response]:\nBob, we are both in position near yellow_cube_2. I will WAIT while you SWEEP yellow_cube_2 into the dustpan.\n\nPROCEED\nNAME Alice ACTION WAIT\n[Evaluation Score]:\nThe advantage score of Alice's action is 2.5231!\n\n[Bob Response]:\nPROCEED\nNAME Bob ACTION SWEEP yellow_cube_2\n[Evaluation Score]:\nThe advantage score of Bob's action is 1.7097!\n\n"}, {"sender": "Feedback", "message": "None"}, {"sender": "Action", "message": "Alice: WAIT\nBob: SWEEP yellow_cube_2"}];
// Get the chat container element
const chatContainer5 = document.getElementById("chat-container-5");
    
// Iterate over the JSON data and generate chat bubbles
jsonData5.forEach(
    
    data => {
    const { sender, message } = data;
    const bubble = createChatBubble(sender, message);
    
    chatContainer5.appendChild(bubble);
    
});
    
const jsonData6 = [{"sender": "Alice", "message": "Bob, we should now focus on green_cube_1 since it's the closest remaining target cube. I will MOVE to green_cube_1 and position myself for the sweep. Once I'm in place, I'll WAIT for you to SWEEP it into the dustpan.\n\nPROCEED\nNAME Alice ACTION MOVE green_cube_1"}, {"sender": "ScoreFeedback", "message": "\n[Scores]\n[Alice Response]:\nBob, we should now focus on green_cube_1 since it's the closest remaining target cube. I will MOVE to green_cube_1 and position myself for the sweep. Once I'm in place, I'll WAIT for you to SWEEP it into the dustpan.\n\nPROCEED\nNAME Alice ACTION MOVE green_cube_1\n[Evaluation Score]:\nThe advantage score of Alice's action is 4.5357!\n\n"}, {"sender": "Bob", "message": "PROCEED\nNAME Bob ACTION MOVE green_cube_1"}, {"sender": "ScoreFeedback", "message": "\n[Scores]\n[Alice Response]:\nBob, we should now focus on green_cube_1 since it's the closest remaining target cube. I will MOVE to green_cube_1 and position myself for the sweep. Once I'm in place, I'll WAIT for you to SWEEP it into the dustpan.\n\nPROCEED\nNAME Alice ACTION MOVE green_cube_1\n[Evaluation Score]:\nThe advantage score of Alice's action is 4.5357!\n\n[Bob Response]:\nPROCEED\nNAME Bob ACTION MOVE green_cube_1\n[Evaluation Score]:\nThe advantage score of Bob's action is 1.0282!\n\n"}, {"sender": "Feedback", "message": "None"}, {"sender": "Action", "message": "Alice: MOVE green_cube_1\nBob: MOVE green_cube_1"}];
// Get the chat container element
const chatContainer6 = document.getElementById("chat-container-6");
    
// Iterate over the JSON data and generate chat bubbles
jsonData6.forEach(
    
    data => {
    const { sender, message } = data;
    const bubble = createChatBubble(sender, message);
    
    chatContainer6.appendChild(bubble);
    
});
    
const jsonData7 = [{"sender": "Alice", "message": "Bob, we are both in position in front of green_cube_1. You can now SWEEP green_cube_1 into the dustpan while I WAIT.\n\nPROCEED\nNAME Alice ACTION WAIT"}, {"sender": "ScoreFeedback", "message": "\n[Scores]\n[Alice Response]:\nBob, we are both in position in front of green_cube_1. You can now SWEEP green_cube_1 into the dustpan while I WAIT.\n\nPROCEED\nNAME Alice ACTION WAIT\n[Evaluation Score]:\nThe advantage score of Alice's action is 3.1046!\n\n"}, {"sender": "Bob", "message": "PROCEED\nNAME Bob ACTION SWEEP green_cube_1"}, {"sender": "ScoreFeedback", "message": "\n[Scores]\n[Alice Response]:\nBob, we are both in position in front of green_cube_1. You can now SWEEP green_cube_1 into the dustpan while I WAIT.\n\nPROCEED\nNAME Alice ACTION WAIT\n[Evaluation Score]:\nThe advantage score of Alice's action is 3.1046!\n\n[Bob Response]:\nPROCEED\nNAME Bob ACTION SWEEP green_cube_1\n[Evaluation Score]:\nThe advantage score of Bob's action is 1.365!\n\n"}, {"sender": "Feedback", "message": "None"}, {"sender": "Action", "message": "Alice: WAIT\nBob: SWEEP green_cube_1"}];
// Get the chat container element
const chatContainer7 = document.getElementById("chat-container-7");
    
// Iterate over the JSON data and generate chat bubbles
jsonData7.forEach(
    
    data => {
    const { sender, message } = data;
    const bubble = createChatBubble(sender, message);
    
    chatContainer7.appendChild(bubble);
    
});
    
const jsonData8 = [{"sender": "Alice", "message": "Bob, we have green_cube_1, yellow_cube_1, blue_cube_1, yellow_cube_2, and green_cube_3 already in the dustpan. Let's move towards green_cube_2, which is the closest remaining target cube. Once we are both in position, I will WAIT while you SWEEP green_cube_2 into the dustpan.\n\nPROCEED\nNAME Alice ACTION MOVE green_cube_2"}, {"sender": "ScoreFeedback", "message": "\n[Scores]\n[Alice Response]:\nBob, we have green_cube_1, yellow_cube_1, blue_cube_1, yellow_cube_2, and green_cube_3 already in the dustpan. Let's move towards green_cube_2, which is the closest remaining target cube. Once we are both in position, I will WAIT while you SWEEP green_cube_2 into the dustpan.\n\nPROCEED\nNAME Alice ACTION MOVE green_cube_2\n[Evaluation Score]:\nThe advantage score of Alice's action is 3.9867!\n\n"}, {"sender": "Bob", "message": "PROCEED\nNAME Bob ACTION MOVE green_cube_2"}, {"sender": "ScoreFeedback", "message": "\n[Scores]\n[Alice Response]:\nBob, we have green_cube_1, yellow_cube_1, blue_cube_1, yellow_cube_2, and green_cube_3 already in the dustpan. Let's move towards green_cube_2, which is the closest remaining target cube. Once we are both in position, I will WAIT while you SWEEP green_cube_2 into the dustpan.\n\nPROCEED\nNAME Alice ACTION MOVE green_cube_2\n[Evaluation Score]:\nThe advantage score of Alice's action is 3.9867!\n\n[Bob Response]:\nPROCEED\nNAME Bob ACTION MOVE green_cube_2\n[Evaluation Score]:\nThe advantage score of Bob's action is 1.3814!\n\n"}, {"sender": "Feedback", "message": "None"}, {"sender": "Action", "message": "Alice: MOVE green_cube_2\nBob: MOVE green_cube_2"}];
// Get the chat container element
const chatContainer8 = document.getElementById("chat-container-8");
    
// Iterate over the JSON data and generate chat bubbles
jsonData8.forEach(
    
    data => {
    const { sender, message } = data;
    const bubble = createChatBubble(sender, message);
    
    chatContainer8.appendChild(bubble);
    
});
    
const jsonData9 = [{"sender": "Alice", "message": "Bob, we are both in position near green_cube_2. I will WAIT while you SWEEP green_cube_2 into the dustpan.\n\nPROCEED\nNAME Alice ACTION WAIT"}, {"sender": "ScoreFeedback", "message": "\n[Scores]\n[Alice Response]:\nBob, we are both in position near green_cube_2. I will WAIT while you SWEEP green_cube_2 into the dustpan.\n\nPROCEED\nNAME Alice ACTION WAIT\n[Evaluation Score]:\nThe advantage score of Alice's action is 3.463!\n\n"}, {"sender": "Bob", "message": "PROCEED\nNAME Bob ACTION SWEEP green_cube_2"}, {"sender": "ScoreFeedback", "message": "\n[Scores]\n[Alice Response]:\nBob, we are both in position near green_cube_2. I will WAIT while you SWEEP green_cube_2 into the dustpan.\n\nPROCEED\nNAME Alice ACTION WAIT\n[Evaluation Score]:\nThe advantage score of Alice's action is 3.463!\n\n[Bob Response]:\nPROCEED\nNAME Bob ACTION SWEEP green_cube_2\n[Evaluation Score]:\nThe advantage score of Bob's action is 1.0429!\n\n"}, {"sender": "Feedback", "message": "None"}, {"sender": "Action", "message": "Alice: WAIT\nBob: SWEEP green_cube_2"}];
// Get the chat container element
const chatContainer9 = document.getElementById("chat-container-9");
    
// Iterate over the JSON data and generate chat bubbles
jsonData9.forEach(
    
    data => {
    const { sender, message } = data;
    const bubble = createChatBubble(sender, message);
    
    chatContainer9.appendChild(bubble);
    
});
    
const jsonData10 = [{"sender": "Alice", "message": "Bob, we have several cubes in the dustpan now. I will MOVE to the yellow_cube_3 to prepare for sweeping it next. You should WAIT for me to get into position.\n\nPROCEED\nNAME Alice ACTION MOVE yellow_cube_3"}, {"sender": "ScoreFeedback", "message": "\n[Scores]\n[Alice Response]:\nBob, we have several cubes in the dustpan now. I will MOVE to the yellow_cube_3 to prepare for sweeping it next. You should WAIT for me to get into position.\n\nPROCEED\nNAME Alice ACTION MOVE yellow_cube_3\n[Evaluation Score]:\nThe advantage score of Alice's action is 4.262!\n\n"}, {"sender": "Bob", "message": "Alice, I will WAIT as you move into position for yellow_cube_3.\n\nPROCEED\nNAME Bob ACTION WAIT"}, {"sender": "ScoreFeedback", "message": "\n[Scores]\n[Alice Response]:\nBob, we have several cubes in the dustpan now. I will MOVE to the yellow_cube_3 to prepare for sweeping it next. You should WAIT for me to get into position.\n\nPROCEED\nNAME Alice ACTION MOVE yellow_cube_3\n[Evaluation Score]:\nThe advantage score of Alice's action is 4.262!\n\n[Bob Response]:\nAlice, I will WAIT as you move into position for yellow_cube_3.\n\nPROCEED\nNAME Bob ACTION WAIT\n[Evaluation Score]:\nThe advantage score of Bob's action is -3.2211!\n\n"}, {"sender": "Bob", "message": "Alice, since you are moving to yellow_cube_3, I will also MOVE to yellow_cube_3 to be ready to SWEEP it once you are in position.\n\nPROCEED\nNAME Bob ACTION MOVE yellow_cube_3"}, {"sender": "ScoreFeedback", "message": "\n[Scores]\n[Alice Response]:\nBob, we have several cubes in the dustpan now. I will MOVE to the yellow_cube_3 to prepare for sweeping it next. You should WAIT for me to get into position.\n\nPROCEED\nNAME Alice ACTION MOVE yellow_cube_3\n[Evaluation Score]:\nThe advantage score of Alice's action is 4.262!\n\n[Bob Response]:\nAlice, I will WAIT as you move into position for yellow_cube_3.\n\nPROCEED\nNAME Bob ACTION WAIT\n[Evaluation Score]:\nThe advantage score of Bob's action is -3.2211!\n\n[Bob Response]:\nAlice, since you are moving to yellow_cube_3, I will also MOVE to yellow_cube_3 to be ready to SWEEP it once you are in position.\n\nPROCEED\nNAME Bob ACTION MOVE yellow_cube_3\n[Evaluation Score]:\nThe advantage score of Bob's action is 0.6383!\n\n"}, {"sender": "Feedback", "message": "None"}, {"sender": "Action", "message": "Alice: MOVE yellow_cube_3\nBob: MOVE yellow_cube_3"}];
// Get the chat container element
const chatContainer10 = document.getElementById("chat-container-10");
    
// Iterate over the JSON data and generate chat bubbles
jsonData10.forEach(
    
    data => {
    const { sender, message } = data;
    const bubble = createChatBubble(sender, message);
    
    chatContainer10.appendChild(bubble);
    
});
    
const jsonData11 = [{"sender": "Alice", "message": "Bob, we are both in position near yellow_cube_3. I will WAIT while you SWEEP yellow_cube_3 into the dustpan.\n\nPROCEED\nNAME Alice ACTION WAIT"}, {"sender": "ScoreFeedback", "message": "\n[Scores]\n[Alice Response]:\nBob, we are both in position near yellow_cube_3. I will WAIT while you SWEEP yellow_cube_3 into the dustpan.\n\nPROCEED\nNAME Alice ACTION WAIT\n[Evaluation Score]:\nThe advantage score of Alice's action is 3.7256!\n\n"}, {"sender": "Bob", "message": "Alice, that's a good plan. I will SWEEP yellow_cube_3 into the dustpan now that we are both in position.\n\nPROCEED\nNAME Bob ACTION SWEEP yellow_cube_3"}, {"sender": "ScoreFeedback", "message": "\n[Scores]\n[Alice Response]:\nBob, we are both in position near yellow_cube_3. I will WAIT while you SWEEP yellow_cube_3 into the dustpan.\n\nPROCEED\nNAME Alice ACTION WAIT\n[Evaluation Score]:\nThe advantage score of Alice's action is 3.7256!\n\n[Bob Response]:\nAlice, that's a good plan. I will SWEEP yellow_cube_3 into the dustpan now that we are both in position.\n\nPROCEED\nNAME Bob ACTION SWEEP yellow_cube_3\n[Evaluation Score]:\nThe advantage score of Bob's action is 1.3847!\n\n"}, {"sender": "Feedback", "message": "None"}, {"sender": "Action", "message": "Alice: WAIT\nBob: SWEEP yellow_cube_3"}];
// Get the chat container element
const chatContainer11 = document.getElementById("chat-container-11");
    
// Iterate over the JSON data and generate chat bubbles
jsonData11.forEach(
    
    data => {
    const { sender, message } = data;
    const bubble = createChatBubble(sender, message);
    
    chatContainer11.appendChild(bubble);
    
});
    
const jsonData12 = [{"sender": "Alice", "message": "Bob, we have successfully swept all the target cubes into the dustpan. Now it's time for me to DUMP them into the trash_bin. You can WAIT while I complete this action.\n\nPROCEED\nNAME Alice ACTION DUMP"}, {"sender": "ScoreFeedback", "message": "\n[Scores]\n[Alice Response]:\nBob, we have successfully swept all the target cubes into the dustpan. Now it's time for me to DUMP them into the trash_bin. You can WAIT while I complete this action.\n\nPROCEED\nNAME Alice ACTION DUMP\n[Evaluation Score]:\nThe advantage score of Alice's action is 2.3543!\n\n"}, {"sender": "Bob", "message": "Alice, great job! I will WAIT while you DUMP the cubes into the trash_bin.\n\nPROCEED\nNAME Bob ACTION WAIT"}, {"sender": "ScoreFeedback", "message": "\n[Scores]\n[Alice Response]:\nBob, we have successfully swept all the target cubes into the dustpan. Now it's time for me to DUMP them into the trash_bin. You can WAIT while I complete this action.\n\nPROCEED\nNAME Alice ACTION DUMP\n[Evaluation Score]:\nThe advantage score of Alice's action is 2.3543!\n\n[Bob Response]:\nAlice, great job! I will WAIT while you DUMP the cubes into the trash_bin.\n\nPROCEED\nNAME Bob ACTION WAIT\n[Evaluation Score]:\nThe advantage score of Bob's action is -0.4135!\n\n"}, {"sender": "Bob", "message": "Alice, while you DUMP the cubes, I will MOVE to the next target cube to prepare for the next sweep. Let's focus on pink_cube_1 next.\n\nPROCEED\nNAME Bob ACTION MOVE pink_cube_1"}, {"sender": "ScoreFeedback", "message": "\n[Scores]\n[Alice Response]:\nBob, we have successfully swept all the target cubes into the dustpan. Now it's time for me to DUMP them into the trash_bin. You can WAIT while I complete this action.\n\nPROCEED\nNAME Alice ACTION DUMP\n[Evaluation Score]:\nThe advantage score of Alice's action is 2.3543!\n\n[Bob Response]:\nAlice, great job! I will WAIT while you DUMP the cubes into the trash_bin.\n\nPROCEED\nNAME Bob ACTION WAIT\n[Evaluation Score]:\nThe advantage score of Bob's action is -0.4135!\n\n[Bob Response]:\nAlice, while you DUMP the cubes, I will MOVE to the next target cube to prepare for the next sweep. Let's focus on pink_cube_1 next.\n\nPROCEED\nNAME Bob ACTION MOVE pink_cube_1\n[Evaluation Score]:\nThe advantage score of Bob's action is -1.5903!\n\n"}, {"sender": "Bob", "message": "Alice, since you are taking care of dumping the cubes, I will WAIT as there are no target cubes left to move to or sweep at the moment.\n\nPROCEED\nNAME Bob ACTION WAIT"}, {"sender": "ScoreFeedback", "message": "\n[Scores]\n[Alice Response]:\nBob, we have successfully swept all the target cubes into the dustpan. Now it's time for me to DUMP them into the trash_bin. You can WAIT while I complete this action.\n\nPROCEED\nNAME Alice ACTION DUMP\n[Evaluation Score]:\nThe advantage score of Alice's action is 2.3543!\n\n[Bob Response]:\nAlice, great job! I will WAIT while you DUMP the cubes into the trash_bin.\n\nPROCEED\nNAME Bob ACTION WAIT\n[Evaluation Score]:\nThe advantage score of Bob's action is -0.4135!\n\n[Bob Response]:\nAlice, while you DUMP the cubes, I will MOVE to the next target cube to prepare for the next sweep. Let's focus on pink_cube_1 next.\n\nPROCEED\nNAME Bob ACTION MOVE pink_cube_1\n[Evaluation Score]:\nThe advantage score of Bob's action is -1.5903!\n\n[Bob Response]:\nAlice, since you are taking care of dumping the cubes, I will WAIT as there are no target cubes left to move to or sweep at the moment.\n\nPROCEED\nNAME Bob ACTION WAIT\n[Evaluation Score]:\nThe advantage score of Bob's action is -0.4135!\n\n"}, {"sender": "Feedback", "message": "None"}, {"sender": "Action", "message": "Alice: DUMP\nBob: WAIT"}];
// Get the chat container element
const chatContainer12 = document.getElementById("chat-container-12");
    
// Iterate over the JSON data and generate chat bubbles
jsonData12.forEach(
    
    data => {
    const { sender, message } = data;
    const bubble = createChatBubble(sender, message);
    
    chatContainer12.appendChild(bubble);
    
});
    