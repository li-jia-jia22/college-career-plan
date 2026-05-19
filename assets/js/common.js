// AI助手窗口控制
const aiBubble = document.getElementById('aiBubble');
const aiChat = document.getElementById('aiChat');
const closeChat = document.getElementById('closeChat');
const chatInput = document.getElementById('chatInput');
const sendBtn = document.getElementById('sendBtn');
const chatMessages = document.getElementById('chatMessages');

if (aiBubble && aiChat) {
  aiBubble.addEventListener('click', () => {
    aiChat.classList.toggle('active');
  });
  closeChat.addEventListener('click', () => {
    aiChat.classList.remove('active');
  });

  function addMessage(text, sender) {
    const msgDiv = document.createElement('div');
    msgDiv.className = `msg ${sender}`;
    msgDiv.textContent = text;
    chatMessages.appendChild(msgDiv);
    chatMessages.scrollTop = chatMessages.scrollHeight;
  }

  function simulateAIResponse(userInput) {
    // 简单的模拟回复
    const responses = [
      '这是一个很好的问题！根据你的测评结果，建议你关注数据分析相关职业。',
      '职业规划需要结合你的兴趣和能力，要不要先做一次MBTI测评？',
      '根据你的专业，AI推荐你尝试产品经理岗位，需要了解详情吗？',
      '我注意到你对IT领域感兴趣，近期该领域对AI工程师需求很高。'
    ];
    const randomRes = responses[Math.floor(Math.random() * responses.length)];
    setTimeout(() => addMessage(randomRes, 'bot'), 600);
  }

  sendBtn.addEventListener('click', () => {
    const text = chatInput.value.trim();
    if (text) {
      addMessage(text, 'user');
      chatInput.value = '';
      simulateAIResponse(text);
    }
  });
  chatInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
      sendBtn.click();
    }
  });
}

// 导航栏活跃状态简单处理（可选）
const currentPage = window.location.pathname.split('/').pop();
const navLinks = document.querySelectorAll('.nav-links a');
navLinks.forEach(link => {
  if (link.getAttribute('href') && link.getAttribute('href').includes(currentPage)) {
    link.style.color = '#2563EB';
  }
});