import { useState, useEffect } from "react";

const useTypingEffect = (texts, speed = 100, delay = 1500) => {
  const [text, setText] = useState("");
  const [index, setIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentText = texts[index];
    if (!isDeleting) {
      if (charIndex < currentText.length) {
        setTimeout(() => {
          setText((prev) => prev + currentText[charIndex]);
          setCharIndex((prev) => prev + 1);
        }, speed);
      } else {
        setTimeout(() => setIsDeleting(true), delay);
      }
    } else {
      if (charIndex > 0) {
        setTimeout(() => {
          setText((prev) => prev.slice(0, -1));
          setCharIndex((prev) => prev - 1);
        }, speed / 2);
      } else {
        setIsDeleting(false);
        setIndex((prev) => (prev + 1) % texts.length);
      }
    }
  }, [charIndex, isDeleting, index, texts, speed, delay]);

  return text;
};

export default useTypingEffect;
