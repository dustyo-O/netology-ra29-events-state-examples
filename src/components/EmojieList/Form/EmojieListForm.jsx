import EmojiPicker from "emoji-picker-react";
import { useState } from "react";

export default function EmojieListForm({ onEmojieAdd }) {
  const [title, setTitle] = useState('');
  const [emoji, setEmoji] = useState('💔');

  const onChange = (e) => {
    setTitle(e.target.value);
  };

  const onEmojieChange = (e, emojiObject) => {
    console.log(emojiObject);
    setEmoji(emojiObject.emoji);
  }

  const onAdd = () => {
    onEmojieAdd({
      emojie: emoji,
      title,
      id: performance.now(),
    });
  }

  return (
    <div className="EmojieList-Form">
      {emoji} <input className="EmojieList-FormInput" onChange={onChange} value={title} />
      <EmojiPicker onEmojiClick={onEmojieChange} />
      <button className="EmojieList-FormButton" onClick={onAdd}>Добавить</button>
    </div>
  );
}
