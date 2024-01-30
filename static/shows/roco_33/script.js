const jsonData0 = [{"sender": "Alice", "message": "Bob, since yellow_cube_1 is the closest target that we need to sweep, let's both MOVE to it. I'll take the side closer to the gripper's current position. \n\nPROCEED"}, {"sender": "Bob", "message": "Alice, I agree that we should target yellow_cube_1 first. However, yellow_cube_1 is not the closest cube that we need to sweep. The closest one is yellow_cube_2 at a distance of 0.48 from my current position. Let's both MOVE to yellow_cube_2 instead. I'll take the side opposite to your approach.\n\nPROCEED"}, {"sender": "Alice", "message": "Bob, I've double-checked the distances, and it seems there's a slight misunderstanding. The closest yellow cube to me is indeed yellow_cube_1 at a distance of 0.49, not yellow_cube_2. Let's stick to the original plan and both MOVE to yellow_cube_1. I'll wait for your confirmation.\n\nPROCEED"}, {"sender": "Bob", "message": "Alice, I apologize for the confusion. I have re-evaluated the distances, and you are correct. Yellow_cube_1 is indeed the closest yellow cube to us. Let's proceed with the original plan and both MOVE to yellow_cube_1. I will take the side opposite to you.\n\nEXECUTE\nNAME Alice ACTION MOVE yellow_cube_1\nNAME Bob ACTION MOVE yellow_cube_1\n"}, {"sender": "Feedback", "message": "None"}, {"sender": "Action", "message": "Alice: MOVE yellow_cube_1\nBob: MOVE yellow_cube_1"}];
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
    
const jsonData1 = [{"sender": "Alice", "message": "Bob, we have successfully moved to yellow_cube_1. Now, I will WAIT here while you SWEEP yellow_cube_1 into the dustpan.\n\nEXECUTE\nNAME Alice ACTION WAIT\nNAME Bob ACTION SWEEP yellow_cube_1"}, {"sender": "Bob", "message": "PROCEED"}, {"sender": "Alice", "message": "PROCEED"}, {"sender": "Bob", "message": "EXECUTE\nNAME Alice ACTION WAIT\nNAME Bob ACTION SWEEP yellow_cube_1"}, {"sender": "Feedback", "message": "None"}, {"sender": "Action", "message": "Alice: WAIT\nBob: SWEEP yellow_cube_1"}];
// Get the chat container element
const chatContainer1 = document.getElementById("chat-container-1");
    
// Iterate over the JSON data and generate chat bubbles
jsonData1.forEach(
    
    data => {
    const { sender, message } = data;
    const bubble = createChatBubble(sender, message);
    
    chatContainer1.appendChild(bubble);
    
});
    
const jsonData2 = [{"sender": "Alice", "message": "Bob, with yellow_cube_1 now in the dustpan, we should MOVE to the next closest yellow or green cube. I suggest we MOVE to green_cube_3, which is at a distance of 0.43 from my current position. Please confirm if that's also the closest to you, or suggest an alternative.\n\nPROCEED"}, {"sender": "Bob", "message": "Alice, I concur that we should continue with the yellow and green cubes. However, green_cube_3 is not the closest to me. The closest green cube to my current position is green_cube_1, which is at a distance of 1.24. I suggest we both MOVE to green_cube_1. Please confirm if this works for you.\n\nPROCEED"}, {"sender": "Alice", "message": "Bob, I agree that we should MOVE to green_cube_1 as it is the closest green cube to you. It is also within a reasonable distance from me. Let's both MOVE to green_cube_1.\n\nEXECUTE\nNAME Alice ACTION MOVE green_cube_1\nNAME Bob ACTION MOVE green_cube_1"}, {"sender": "Feedback", "message": "None"}, {"sender": "Action", "message": "Alice: MOVE green_cube_1\nBob: MOVE green_cube_1"}];
// Get the chat container element
const chatContainer2 = document.getElementById("chat-container-2");
    
// Iterate over the JSON data and generate chat bubbles
jsonData2.forEach(
    
    data => {
    const { sender, message } = data;
    const bubble = createChatBubble(sender, message);
    
    chatContainer2.appendChild(bubble);
    
});
    
const jsonData3 = [{"sender": "Alice", "message": "Bob, we are now both in front of green_cube_1. I will WAIT here while you SWEEP green_cube_1 into the dustpan.\n\nEXECUTE\nNAME Alice ACTION WAIT\nNAME Bob ACTION SWEEP green_cube_1"}, {"sender": "Bob", "message": "PROCEED"}, {"sender": "Alice", "message": "PROCEED"}, {"sender": "Bob", "message": "EXECUTE\nNAME Alice ACTION WAIT\nNAME Bob ACTION SWEEP green_cube_1"}, {"sender": "Feedback", "message": "None"}, {"sender": "Action", "message": "Alice: WAIT\nBob: SWEEP green_cube_1"}];
// Get the chat container element
const chatContainer3 = document.getElementById("chat-container-3");
    
// Iterate over the JSON data and generate chat bubbles
jsonData3.forEach(
    
    data => {
    const { sender, message } = data;
    const bubble = createChatBubble(sender, message);
    
    chatContainer3.appendChild(bubble);
    
});
    
const jsonData4 = [{"sender": "Alice", "message": "Bob, we have two cubes in the dustpan now. I will DUMP them into the trash_bin, and you should MOVE to yellow_cube_2, which is the closest target for us to sweep next.\n\nEXECUTE\nNAME Alice ACTION DUMP\nNAME Bob ACTION MOVE yellow_cube_2"}, {"sender": "Bob", "message": "PROCEED"}, {"sender": "Alice", "message": "PROCEED"}, {"sender": "Bob", "message": "Alice, your plan sounds good. I will MOVE to yellow_cube_2 while you DUMP the cubes in the dustpan.\n\nEXECUTE\nNAME Alice ACTION DUMP\nNAME Bob ACTION MOVE yellow_cube_2"}, {"sender": "Feedback", "message": "None"}, {"sender": "Action", "message": "Alice: DUMP\nBob: MOVE yellow_cube_2"}];
// Get the chat container element
const chatContainer4 = document.getElementById("chat-container-4");
    
// Iterate over the JSON data and generate chat bubbles
jsonData4.forEach(
    
    data => {
    const { sender, message } = data;
    const bubble = createChatBubble(sender, message);
    
    chatContainer4.appendChild(bubble);
    
});
    
const jsonData5 = [{"sender": "Alice", "message": "Bob, now that I've dumped the cubes, we should MOVE to yellow_cube_2, which you are already in front of. I will MOVE to yellow_cube_2 to prepare for the next SWEEP.\n\nPROCEED"}, {"sender": "Bob", "message": "Alice, that sounds like a good plan. Since I'm already in front of yellow_cube_2, I will WAIT for you to MOVE to yellow_cube_2 so we can SWEEP it together in the next round.\n\nEXECUTE\nNAME Alice ACTION MOVE yellow_cube_2\nNAME Bob ACTION WAIT"}, {"sender": "Feedback", "message": "None"}, {"sender": "Action", "message": "Alice: MOVE yellow_cube_2\nBob: WAIT"}];
// Get the chat container element
const chatContainer5 = document.getElementById("chat-container-5");
    
// Iterate over the JSON data and generate chat bubbles
jsonData5.forEach(
    
    data => {
    const { sender, message } = data;
    const bubble = createChatBubble(sender, message);
    
    chatContainer5.appendChild(bubble);
    
});
    
const jsonData6 = [{"sender": "Alice", "message": "Bob, we are both in position to sweep yellow_cube_2. I will WAIT here while you SWEEP yellow_cube_2 into the dustpan.\n\nEXECUTE\nNAME Alice ACTION WAIT\nNAME Bob ACTION SWEEP yellow_cube_2"}, {"sender": "Bob", "message": "PROCEED"}, {"sender": "Alice", "message": "PROCEED"}, {"sender": "Bob", "message": "EXECUTE\nNAME Alice ACTION WAIT\nNAME Bob ACTION SWEEP yellow_cube_2"}, {"sender": "Feedback", "message": "None"}, {"sender": "Action", "message": "Alice: WAIT\nBob: SWEEP yellow_cube_2"}];
// Get the chat container element
const chatContainer6 = document.getElementById("chat-container-6");
    
// Iterate over the JSON data and generate chat bubbles
jsonData6.forEach(
    
    data => {
    const { sender, message } = data;
    const bubble = createChatBubble(sender, message);
    
    chatContainer6.appendChild(bubble);
    
});
    
const jsonData7 = [{"sender": "Alice", "message": "Bob, with yellow_cube_2 now in the dustpan, we should MOVE to the next closest target. I suggest we MOVE to yellow_cube_3, which is at a distance of 0.25 from my current position. It seems to be the closest cube for us to sweep next. Please confirm if this works for you or suggest an alternative.\n\nPROCEED"}, {"sender": "Bob", "message": "Alice, I agree with your suggestion. Yellow_cube_3 is indeed the closest cube for us to sweep next. It is at a distance of 0.30 from my current position. Let's both MOVE to yellow_cube_3.\n\nEXECUTE\nNAME Alice ACTION MOVE yellow_cube_3\nNAME Bob ACTION MOVE yellow_cube_3"}, {"sender": "Feedback", "message": "None"}, {"sender": "Action", "message": "Alice: MOVE yellow_cube_3\nBob: MOVE yellow_cube_3"}];
// Get the chat container element
const chatContainer7 = document.getElementById("chat-container-7");
    
// Iterate over the JSON data and generate chat bubbles
jsonData7.forEach(
    
    data => {
    const { sender, message } = data;
    const bubble = createChatBubble(sender, message);
    
    chatContainer7.appendChild(bubble);
    
});
    
const jsonData8 = [{"sender": "Alice", "message": "Bob, we are both in front of yellow_cube_3 and ready to sweep it. I will WAIT here while you SWEEP yellow_cube_3 into the dustpan.\n\nEXECUTE\nNAME Alice ACTION WAIT\nNAME Bob ACTION SWEEP yellow_cube_3"}, {"sender": "Bob", "message": "PROCEED"}, {"sender": "Alice", "message": "PROCEED"}, {"sender": "Bob", "message": "EXECUTE\nNAME Alice ACTION WAIT\nNAME Bob ACTION SWEEP yellow_cube_3"}, {"sender": "Feedback", "message": "None"}, {"sender": "Action", "message": "Alice: WAIT\nBob: SWEEP yellow_cube_3"}];
// Get the chat container element
const chatContainer8 = document.getElementById("chat-container-8");
    
// Iterate over the JSON data and generate chat bubbles
jsonData8.forEach(
    
    data => {
    const { sender, message } = data;
    const bubble = createChatBubble(sender, message);
    
    chatContainer8.appendChild(bubble);
    
});
    
const jsonData9 = [{"sender": "Alice", "message": "Bob, with yellow_cube_3 now in the dustpan, we should MOVE to green_cube_2 as it is the only remaining cube we need to sweep. It is at a distance of 0.69 from my current position. Please confirm if this works for you or suggest an alternative.\n\nPROCEED"}, {"sender": "Bob", "message": "Alice, I agree that we should MOVE to green_cube_2. It is the last cube we need to sweep and it is at a distance of 0.80 from my current position. Let's both MOVE to green_cube_2.\n\nEXECUTE\nNAME Alice ACTION MOVE green_cube_2\nNAME Bob ACTION MOVE green_cube_2"}, {"sender": "Feedback", "message": "None"}, {"sender": "Action", "message": "Alice: MOVE green_cube_2\nBob: MOVE green_cube_2"}];
// Get the chat container element
const chatContainer9 = document.getElementById("chat-container-9");
    
// Iterate over the JSON data and generate chat bubbles
jsonData9.forEach(
    
    data => {
    const { sender, message } = data;
    const bubble = createChatBubble(sender, message);
    
    chatContainer9.appendChild(bubble);
    
});
    
const jsonData10 = [{"sender": "Alice", "message": "Bob, we are both in front of green_cube_2 and ready to sweep it. I will WAIT here while you SWEEP green_cube_2 into the dustpan.\n\nEXECUTE\nNAME Alice ACTION WAIT\nNAME Bob ACTION SWEEP green_cube_2"}, {"sender": "Bob", "message": "PROCEED"}, {"sender": "Alice", "message": "PROCEED"}, {"sender": "Bob", "message": "EXECUTE\nNAME Alice ACTION WAIT\nNAME Bob ACTION SWEEP green_cube_2"}, {"sender": "Feedback", "message": "None"}, {"sender": "Action", "message": "Alice: WAIT\nBob: SWEEP green_cube_2"}];
// Get the chat container element
const chatContainer10 = document.getElementById("chat-container-10");
    
// Iterate over the JSON data and generate chat bubbles
jsonData10.forEach(
    
    data => {
    const { sender, message } = data;
    const bubble = createChatBubble(sender, message);
    
    chatContainer10.appendChild(bubble);
    
});
    
const jsonData11 = [{"sender": "Alice", "message": "Bob, we have successfully swept all the yellow and green cubes. Now, we should MOVE to the trash_bin to DUMP the cubes we have collected. I will MOVE to the trash_bin.\n\nPROCEED"}, {"sender": "Bob", "message": "Alice, I agree. We should MOVE to the trash_bin to DUMP the cubes. I will MOVE to the trash_bin as well.\n\nEXECUTE\nNAME Alice ACTION MOVE trash_bin\nNAME Bob ACTION MOVE trash_bin"}, {"sender": "Feedback", "message": "[Environment Feedback]:\n- Previous Plan:\nNAME Alice ACTION MOVE trash_bin\nNAME Bob ACTION MOVE trash_bin\nTask Constraints:\n faild, MOVE target must be a cube, you can directly dump without moving to trash_bin\n"}, {"sender": "Action", "message": "Alice: MOVE trash_bin\nBob: MOVE trash_bin"}, {"sender": "Alice", "message": "EXECUTE\nNAME Alice ACTION DUMP\nNAME Bob ACTION WAIT"}, {"sender": "Feedback", "message": "None"}, {"sender": "Action", "message": "Alice: DUMP\nBob: WAIT"}];
// Get the chat container element
const chatContainer11 = document.getElementById("chat-container-11");
    
// Iterate over the JSON data and generate chat bubbles
jsonData11.forEach(
    
    data => {
    const { sender, message } = data;
    const bubble = createChatBubble(sender, message);
    
    chatContainer11.appendChild(bubble);
    
});
    
const jsonData12 = [{"sender": "Alice", "message": "Bob, we have completed our task of sweeping all the yellow and green cubes. There are no more cubes for us to sweep. We can consider our job done here.\n\nPROCEED"}, {"sender": "Bob", "message": "Alice, you are correct. All yellow and green cubes have been successfully swept and dumped. Our job here is indeed done. \n\nPROCEED"}, {"sender": "Alice", "message": "Bob, since our task is complete, we can both WAIT until we receive further instructions.\n\nEXECUTE\nNAME Alice ACTION WAIT\nNAME Bob ACTION WAIT"}, {"sender": "Feedback", "message": "None"}, {"sender": "Action", "message": "Alice: WAIT\nBob: WAIT"}];
// Get the chat container element
const chatContainer12 = document.getElementById("chat-container-12");
    
// Iterate over the JSON data and generate chat bubbles
jsonData12.forEach(
    
    data => {
    const { sender, message } = data;
    const bubble = createChatBubble(sender, message);
    
    chatContainer12.appendChild(bubble);
    
});
    
const jsonData13 = [{"sender": "Alice", "message": "Bob, it appears we have completed our task of sweeping all the yellow and green cubes as they are all inside the trash bin. There are no remaining cubes for us to sweep. We can both WAIT until we receive further instructions.\n\nEXECUTE\nNAME Alice ACTION WAIT\nNAME Bob ACTION WAIT"}, {"sender": "Bob", "message": "PROCEED"}, {"sender": "Alice", "message": "Bob, I have already given the final plan for us to WAIT since our task is complete. There is no need for further discussion.\n\nEXECUTE\nNAME Alice ACTION WAIT\nNAME Bob ACTION WAIT"}, {"sender": "Feedback", "message": "None"}, {"sender": "Action", "message": "Alice: WAIT\nBob: WAIT"}];
// Get the chat container element
const chatContainer13 = document.getElementById("chat-container-13");
    
// Iterate over the JSON data and generate chat bubbles
jsonData13.forEach(
    
    data => {
    const { sender, message } = data;
    const bubble = createChatBubble(sender, message);
    
    chatContainer13.appendChild(bubble);
    
});
    
const jsonData14 = [{"sender": "Alice", "message": "Bob, we have completed our task of sweeping all the yellow and green cubes as they are all inside the trash bin. There are no remaining cubes for us to sweep. We can both WAIT until we receive further instructions.\n\nEXECUTE\nNAME Alice ACTION WAIT\nNAME Bob ACTION WAIT"}, {"sender": "Bob", "message": "PROCEED"}, {"sender": "Alice", "message": "Bob, I have already given the final plan for us to WAIT since our task is complete. There is no need for further discussion.\n\nEXECUTE\nNAME Alice ACTION WAIT\nNAME Bob ACTION WAIT"}, {"sender": "Feedback", "message": "None"}, {"sender": "Action", "message": "Alice: WAIT\nBob: WAIT"}];
// Get the chat container element
const chatContainer14 = document.getElementById("chat-container-14");
    
// Iterate over the JSON data and generate chat bubbles
jsonData14.forEach(
    
    data => {
    const { sender, message } = data;
    const bubble = createChatBubble(sender, message);
    
    chatContainer14.appendChild(bubble);
    
});
    
const jsonData15 = [{"sender": "Alice", "message": "Bob, we have completed our task of sweeping all the yellow and green cubes as they are all inside the trash bin. There are no remaining cubes for us to sweep. We can both WAIT until we receive further instructions.\n\nEXECUTE\nNAME Alice ACTION WAIT\nNAME Bob ACTION WAIT"}, {"sender": "Bob", "message": "PROCEED"}, {"sender": "Alice", "message": "Bob, I have already given the final plan for us to WAIT since our task is complete. There is no need for further discussion.\n\nEXECUTE\nNAME Alice ACTION WAIT\nNAME Bob ACTION WAIT"}, {"sender": "Feedback", "message": "None"}, {"sender": "Action", "message": "Alice: WAIT\nBob: WAIT"}];
// Get the chat container element
const chatContainer15 = document.getElementById("chat-container-15");
    
// Iterate over the JSON data and generate chat bubbles
jsonData15.forEach(
    
    data => {
    const { sender, message } = data;
    const bubble = createChatBubble(sender, message);
    
    chatContainer15.appendChild(bubble);
    
});
    
const jsonData16 = [{"sender": "Alice", "message": "Bob, it seems we have completed our task of sweeping all the yellow and green cubes as they are all inside the trash_bin. There are no remaining cubes for us to sweep. We can both WAIT until we receive further instructions.\n\nEXECUTE\nNAME Alice ACTION WAIT\nNAME Bob ACTION WAIT"}, {"sender": "Bob", "message": "PROCEED"}, {"sender": "Alice", "message": "Bob, I have already given the final plan for us to WAIT since our task is complete. There is no need for further discussion.\n\nEXECUTE\nNAME Alice ACTION WAIT\nNAME Bob ACTION WAIT"}, {"sender": "Feedback", "message": "None"}, {"sender": "Action", "message": "Alice: WAIT\nBob: WAIT"}];
// Get the chat container element
const chatContainer16 = document.getElementById("chat-container-16");
    
// Iterate over the JSON data and generate chat bubbles
jsonData16.forEach(
    
    data => {
    const { sender, message } = data;
    const bubble = createChatBubble(sender, message);
    
    chatContainer16.appendChild(bubble);
    
});
    
const jsonData17 = [{"sender": "Alice", "message": "Bob, we have completed our task of sweeping all the yellow and green cubes as they are all inside the trash bin. There are no remaining cubes for us to sweep. We can both WAIT until we receive further instructions.\n\nEXECUTE\nNAME Alice ACTION WAIT\nNAME Bob ACTION WAIT"}, {"sender": "Bob", "message": "PROCEED"}, {"sender": "Alice", "message": "Bob, I have already given the final plan for us to WAIT since our task is complete. There is no need for further discussion.\n\nEXECUTE\nNAME Alice ACTION WAIT\nNAME Bob ACTION WAIT"}, {"sender": "Feedback", "message": "None"}, {"sender": "Action", "message": "Alice: WAIT\nBob: WAIT"}];
// Get the chat container element
const chatContainer17 = document.getElementById("chat-container-17");
    
// Iterate over the JSON data and generate chat bubbles
jsonData17.forEach(
    
    data => {
    const { sender, message } = data;
    const bubble = createChatBubble(sender, message);
    
    chatContainer17.appendChild(bubble);
    
});
    
const jsonData18 = [{"sender": "Alice", "message": "Bob, we have completed our task of sweeping all the yellow and green cubes as they are all inside the trash bin. There are no remaining cubes for us to sweep. We can both WAIT until we receive further instructions.\n\nEXECUTE\nNAME Alice ACTION WAIT\nNAME Bob ACTION WAIT"}, {"sender": "Bob", "message": "PROCEED"}, {"sender": "Alice", "message": "Bob, I have already given the final plan for us to WAIT since our task is complete. There is no need for further discussion.\n\nEXECUTE\nNAME Alice ACTION WAIT\nNAME Bob ACTION WAIT"}, {"sender": "Feedback", "message": "None"}, {"sender": "Action", "message": "Alice: WAIT\nBob: WAIT"}];
// Get the chat container element
const chatContainer18 = document.getElementById("chat-container-18");
    
// Iterate over the JSON data and generate chat bubbles
jsonData18.forEach(
    
    data => {
    const { sender, message } = data;
    const bubble = createChatBubble(sender, message);
    
    chatContainer18.appendChild(bubble);
    
});
    
const jsonData19 = [{"sender": "Alice", "message": "Bob, we have completed our task of sweeping all the yellow and green cubes as they are all inside the trash bin. There are no remaining cubes for us to sweep. We can both WAIT until we receive further instructions.\n\nEXECUTE\nNAME Alice ACTION WAIT\nNAME Bob ACTION WAIT"}, {"sender": "Bob", "message": "PROCEED"}, {"sender": "Alice", "message": "Bob, I have already given the final plan for us to WAIT since our task is complete. There is no need for further discussion.\n\nEXECUTE\nNAME Alice ACTION WAIT\nNAME Bob ACTION WAIT"}, {"sender": "Feedback", "message": "None"}, {"sender": "Action", "message": "Alice: WAIT\nBob: WAIT"}];
// Get the chat container element
const chatContainer19 = document.getElementById("chat-container-19");
    
// Iterate over the JSON data and generate chat bubbles
jsonData19.forEach(
    
    data => {
    const { sender, message } = data;
    const bubble = createChatBubble(sender, message);
    
    chatContainer19.appendChild(bubble);
    
});
    