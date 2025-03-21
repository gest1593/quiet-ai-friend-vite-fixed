import { useState } from 'react'

function App() {
  const [messages, setMessages] = useState([])
  const [input, setInput] = useState("")

  const handleSend = () => {
    if (!input.trim()) return
    const newMessages = [...messages, { role: "user", content: input }]
    setMessages(newMessages)
    setInput("")

    const replies = ["응", "계속 말해줘", "그랬구나", "듣고 있어", "그래서?", "여기 있어. 괜찮아"]
    const reply = replies[Math.floor(Math.random() * replies.length)]

    setTimeout(() => {
      setMessages([...newMessages, { role: "ai", content: reply }])
    }, 800)
  }

  return (
    <div style={{ display: 'flex', flexDirection: 'column', height: '100vh', padding: 16, background: '#f3f3f3' }}>
      <div style={{ flex: 1, overflowY: 'auto', marginBottom: 12 }}>
        {messages.map((msg, i) => (
          <div
            key={i}
            style={{
              maxWidth: '60%',
              padding: '8px 12px',
              margin: '4px 0',
              borderRadius: 16,
              alignSelf: msg.role === 'user' ? 'flex-end' : 'flex-start',
              background: msg.role === 'user' ? '#ffffff' : '#dddddd'
            }}
          >
            {msg.content}
          </div>
        ))}
      </div>
      <div style={{ display: 'flex', gap: 8 }}>
        <input
          style={{ flex: 1, padding: 8, borderRadius: 8, border: '1px solid #ccc' }}
          value={input}
          onChange={e => setInput(e.target.value)}
          onKeyDown={e => e.key === 'Enter' && handleSend()}
          placeholder="하고 싶은 말을 써보세요"
        />
        <button
          style={{ padding: '8px 16px', background: '#333', color: '#fff', borderRadius: 8 }}
          onClick={handleSend}
        >
          보내기
        </button>
      </div>
    </div>
  )
}

export default App