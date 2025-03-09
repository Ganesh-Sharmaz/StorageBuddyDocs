import React, { useEffect, useState } from "react";
import Markdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { nightOwl } from "react-syntax-highlighter/dist/esm/styles/prism";
// import { atomOneDark, github } from "react-syntax-highlighter/dist/esm/styles/hljs";
import codebg from "../assets/codebg4.png";
import lss from "../assets/localss.png";
import css from "../assets/cookiesss.png";
import sss from "../assets/sessionss.png";

function Codeblock() {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isFading, setIsFading] = useState(false);
    const images = [lss, css, sss];

    useEffect(() => {
        const interval = setInterval(() => {
            setIsFading(true);
            setTimeout(() => {
                setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
                setIsFading(false);
            }, 1500); // Fade-out duration
        }, 6000);
        return () => clearInterval(interval);
    }, []);

    const markdown = `
  \`\`\`tsx
  import React from "react";
  import { useStash } from "storagebuddy";
  
  function App() {
    
      // Initialize StorageBuddy
      const stash = useStash();
      // Store data in different storage types
      stash.set("local", "user", { name: "Ganesh Sharma", age: 20 });
      stash.set("session", "theme", "dark");
      stash.set("cookie", "token", "123abc", 7); // Expires in 7 days
      // Retrieve data with type safety
      const user = stash.get("local", "user");
      console.log(user.name); // "Ganesh Sharma"
      // Remove specific items
      stash.remove("session", "theme");
      // Clear all data for a storage type
      stash.clear("local");
      return <div>App</div>;
    }
  export default App;
  \`\`\`
  `;

    return (
        <div className="h-fit font-inter   flex flex-col ">
            <div className=" border-b-1 h-fit  border-gray-800 px-10 flex ">
                <div className=" grow border-x-[1px]  border-gray-800 flex ">
                    <div className=" w-full border-gray-800 flex text-sm">
                        <div className=" w-1/2 flex items-center justify-center bg-[#1d202a]">
                            <div className="m-2 rounded-xl h-fit p-1 bg-[#030712] grow flex flex-col">
                                <div className="p-2 flex gap-2">
                                    <span className="rounded-full bg-white/20 size-3"></span>
                                    <span className="rounded-full bg-white/20 size-3"></span>
                                    <span className="rounded-full bg-white/20 size-3"></span>
                                </div>
                                <div className="w-full rounded-lg font-mono">
                                    <Markdown
                                        id="mark"
                                        class="md"
                                        remarkPlugins={[remarkGfm]}
                                        components={{
                                            code({
                                                node,
                                                inline,
                                                className,
                                                children,
                                                ...props
                                            }) {
                                                return !inline ? (
                                                    <SyntaxHighlighter
                                                        style={nightOwl}
                                                        language="tsx"
                                                        wrapLines={true}
                                                        showLineNumbers={true}
                                                    >
                                                        {String(
                                                            children
                                                        ).replace(/\n$/, "")}
                                                    </SyntaxHighlighter>
                                                ) : (
                                                    <code
                                                        className={className}
                                                        {...props}
                                                    >
                                                        {children}
                                                    </code>
                                                );
                                            },
                                        }}
                                    >
                                        {markdown}
                                    </Markdown>
                                </div>
                            </div>
                        </div>
                        <div className=" w-1/2 h-full flex p-2 bg-cover bg-[url(./assets/codebg4.png)] items-center justify-center">
                            <div className=" w-full h-fit rounded-4xl backdrop-blur-[5px] flex items-center justify-center ">
                                <img
                                    src={images[currentIndex]}
                                    alt="Slideshow"
                                    className={`rounded-3xl p-2 w-full h-full object-cover transition-opacity duration-1000 ${
                                        isFading ? "opacity-0" : "opacity-100"
                                    }`}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Codeblock;
