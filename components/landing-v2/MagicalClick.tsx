"use client";

import Image from "next/image";
import { useState } from "react";
import ToolMedia from "./ToolMedia";
import styles from "./landing-v2.module.css";

// The first five examples come from the original ToolExample component.
// Other actions exist in the original dashboard; their copy explains their purpose.
const tools = [
  { name: "Improve Text", description: "Make your words clearer and easier to read.", before: "this thing is kind of hard to read and maybe you can help me make it sound like not bad?", after: "This text is somewhat difficult to read, and perhaps you could help me make it sound better?" },
  { name: "Professional Text", description: "Give casual writing a more professional tone.", before: "yo can u help me with this?", after: "Could you please assist me with this?" },
  { name: "Summarize", description: "Get straight to the point of the text you’ve selected.", before: "I am writing to inform you that your application has been received.", after: "Your application was received." },
  { name: "Translate", description: "Understand selected text without opening another translation tab.", before: "この製品は現在在庫切れですが、再入荷のお知らせを希望される場合は、こちらをクリックしてください。", after: "This product is currently out of stock, but if you would like to be notified when it is back in stock, please click here." },
  { name: "Solve Problem", description: "Get help with a selected math, logic, or code question.", before: "2x + 3 = 7, find x.", after: "x = 2" },
  { name: "Rewrite", description: "Rephrase selected text to find another way to say it." },
  { name: "Shorten", description: "Make selected text more concise and easier to scan." },
  { name: "Expand", description: "Develop a short piece of writing into a fuller explanation." },
];

export default function MagicalClick() {
  const [selected, setSelected] = useState(0);
  const tool = tools[selected];
  return (
    <section id="magicalclick" className={styles.storySection} aria-labelledby="magical-title">
      <div className={styles.magicalHeading}>
        <div>
          <p className={styles.eyebrow}>BROWSER EXPERIENCE</p>
          <h2 id="magical-title">Meet MagicalClick.</h2>
          <p>Your AI actions, one right-click away. Select text in your browser, open KlikkFix, and choose what happens next.</p>
        </div>
        <Image src="/MagicalClickDesign/magicDesign.png" alt="MagicalClick: AI tools connected around a cursor" width={120} height={120} className={styles.magicImage} />
      </div>
      <div className={styles.toolExplorer}>
        <div className={styles.toolPicker} role="group" aria-label="Explore KlikkFix actions">
          {tools.map((item, index) => (
            <button key={item.name} type="button" aria-pressed={index === selected} aria-controls="tool-preview" onClick={() => setSelected(index)}>
              {item.name}<span aria-hidden="true">↗</span>
            </button>
          ))}
        </div>
        <div id="tool-preview" className={styles.toolPreview} aria-live="polite" aria-atomic="true">
          <p className={styles.eyebrow}>ACTION PREVIEW</p>
          <h3>{tool.name}</h3>
          <p>{tool.description}</p>
          <ToolMedia key={tool.name} name={tool.name} />
          {tool.before && tool.after ? (
            <div className={styles.exampleText}>
              <div><span>Selected text</span><p>{tool.before}</p></div>
              <div><span>With KlikkFix</span><p>{tool.after}</p></div>
              <small>Example preview. Results vary with your text.</small>
            </div>
          ) : (
            <div className={styles.actionGuide}>
              <p>Select your text, right-click, and choose <strong>{tool.name}</strong> in KlikkFix.</p>
              <a href="#dashboard">Choose your tools in the dashboard <span aria-hidden="true">↓</span></a>
            </div>
          )}
        </div>
      </div>
      <p className={styles.explorerNote}>Your tools, your setup. Keep the actions you use most within reach.</p>
    </section>
  );
}
